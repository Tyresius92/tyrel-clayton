import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

const fileNames = fs.readdirSync(postsDirectory);

const getIdForFileName = fileName => fileName.replace(/\.md$/, "");

const parseMarkdownFileMetadata = fileName => {
  // Remove ".md" from file name to get id
  const id = getIdForFileName(fileName);

  // Read markdown file as string
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
};

export const getSortedPostsMetaData = () => {
  const allPostsData = fileNames.map(parseMarkdownFileMetadata);

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getAllPostIds = () => {
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'first-id'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'second-id'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: getIdForFileName(fileName),
      },
    };
  });
};

export const getPostContents = async id => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
};

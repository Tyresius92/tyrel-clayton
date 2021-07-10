import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

// eslint-disable-next-line no-undef
const postsDirectory = path.join(process.cwd(), 'posts');
const fileNames = fs.readdirSync(postsDirectory);

const getIdForFileName = fileName => fileName.replace(/\.md$/, '');

const parseMarkdownFileMetadata = fileName => {
  // Remove ".md" from file name to get id
  const id = getIdForFileName(fileName);

  // Read markdown file as string
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

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
    }
    return -1;
  });
};

export const getAllPostTags = () => {
  const allPostsData = fileNames.map(parseMarkdownFileMetadata);

  const allTags = allPostsData.reduce(
    (acc, curr) => [...acc, ...curr.tags],
    []
  );

  const tagsObject = allTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});

  return (
    Object.entries(tagsObject)
      // reshape object
      .map(([tag, count]) => ({
        tag,
        count,
      }))
      .sort((a, b) => {
        if (a.count !== b.count) {
          return b.count - a.count;
        }

        if (a.tag < b.tag) {
          return -1;
        }
        return 1;
      })
  );
};

export const getAllPostsWithTag = tag => {
  const allPostsData = getSortedPostsMetaData();

  return allPostsData.filter(post => post.tags.includes(tag));
};

export const getAllPostCategories = () => {
  const allPostsData = fileNames.map(parseMarkdownFileMetadata);

  const allTags = allPostsData.reduce(
    (acc, curr) => [...acc, curr.category],
    []
  );

  const categoriesObject = allTags.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const result = Object.entries(categoriesObject)
    .map(([category, count]) => ({
      category,
      count,
    }))
    .sort((a, b) => {
      if (a.count !== b.count) {
        return b.count - a.count;
      }

      if (a.category < b.category) {
        return -1;
      }
      return 1;
    });

  console.log(result);

  return result;
};

export const getAllPostsWithCategory = category => {
  const allPostsData = getSortedPostsMetaData();

  return allPostsData.filter(post => post.category === category);
};

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
export const getAllPostIds = () =>
  fileNames.map(fileName => ({
    params: {
      id: getIdForFileName(fileName),
    },
  }));

export const getPostContents = async id => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .use(gfm)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
};

import InternalLink from "../../components/InternalLink";
import Layout from "../../components/Layout";
import { getSortedPostsMetaData } from "../../lib/posts";
import utilStyles from "../utils.module.css";
import Date from "../../components/date";

export const getStaticProps = async () => ({
  props: {
    allPostsData: getSortedPostsMetaData(),
  },
});

export default function BlogIndex({ allPostsData }) {
  console.log(allPostsData);
  return (
    <Layout>
      <h1>Blog Index</h1>
      <h2>
        Read the <InternalLink href="/blog/first-post">First Post</InternalLink>
      </h2>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <InternalLink href={`/posts/${id}`}>{title}</InternalLink>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

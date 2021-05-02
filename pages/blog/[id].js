import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostContents } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../utils.module.css';

export const getStaticProps = async ({ params }) => {
  const postData = await getPostContents(params.id);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

const Post = ({ postData }) => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <h1 className={utilStyles.headingXl}>{postData.title}</h1>
    <div className={utilStyles.lightText}>
      <Date dateString={postData.date} />
    </div>
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </Layout>
);

Post.propTypes = {
  postData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    contentHtml: PropTypes.string.isRequired,
  }),
};

export default Post;

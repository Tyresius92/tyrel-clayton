import PropTypes from 'prop-types';
import Layout from '../../../components/Layout';
import InternalLink from '../../../components/InternalLink';
import Date from '../../../components/Date';
import { getAllPostsWithTag, getAllPostTags } from '../../../lib/posts';
import Head from 'next/head';
import utilStyles from '../../utils.module.css';

export const getStaticProps = ({ params }) => {
  const tagData = getAllPostsWithTag(params.tag);
  return {
    props: {
      tag: params.tag,
      tagData,
    },
  };
};

export const getStaticPaths = async () => {
  const tags = getAllPostTags().map(tagObj => tagObj.tag);

  const paths = tags.map(tag => ({ params: { tag } }));

  return {
    paths,
    fallback: false,
  };
};

const PostsWithTag = ({ tag, tagData }) => (
  <Layout>
    <Head>
      <title>Posts tagged &ldquo;{tag}&rdquo;</title>
    </Head>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Posts tagged &ldquo;{tag}&rdquo;</h2>
      <ul className={utilStyles.list}>
        {tagData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <InternalLink href={`/blog/${id}`}>{title}</InternalLink>
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

PostsWithTag.propTypes = {
  tag: PropTypes.string.isRequired,
  tagData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PostsWithTag;

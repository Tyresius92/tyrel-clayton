import PropTypes from 'prop-types';
import BlogLayout from '../../../components/BlogLayout';
import InternalLink from '../../../components/InternalLink';
import Date from '../../../components/Date';
import {
  getAllPostCategories,
  getAllPostsWithCategory,
} from '../../../lib/posts';
import Head from 'next/head';
import utilStyles from '../../utils.module.css';

export const getStaticProps = ({ params }) => {
  const categoryData = getAllPostsWithCategory(params.category);
  return {
    props: {
      category: params.category,
      categoryData,
    },
  };
};

export const getStaticPaths = async () => {
  const categories = getAllPostCategories().map(
    categoryObj => categoryObj.category
  );

  const paths = categories.map(category => ({ params: { category } }));

  return {
    paths,
    fallback: false,
  };
};

const PostsWithCategory = ({ category, categoryData }) => (
  <BlogLayout>
    <Head>
      <title>Posts categorized &ldquo;{category}&rdquo;</title>
    </Head>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>
        Posts categorized &ldquo;{category}&rdquo;
      </h2>
      <ul className={utilStyles.list}>
        {categoryData.map(({ id, date, title }) => (
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
  </BlogLayout>
);

PostsWithCategory.propTypes = {
  category: PropTypes.string.isRequired,
  categoryData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PostsWithCategory;

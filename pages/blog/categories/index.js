import PropTypes from 'prop-types';
import BlogLayout from '../../../components/BlogLayout';
import { getAllPostCategories } from '../../../lib/posts';
import InternalLink from '../../../components/InternalLink';
import styles from './index.module.css';
import utilStyles from '../../utils.module.css';

export const getStaticProps = async () => ({
  props: {
    allCategoriesData: getAllPostCategories(),
  },
});

const CategoriesIndex = ({ allCategoriesData }) => (
  <BlogLayout>
    <h1>Posts by Category</h1>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      {allCategoriesData.map(({ category, count }) => (
        <div key={category}>
          <span className={styles.link}>
            <InternalLink href={`/blog/categories/${category}`}>
              {category}
            </InternalLink>
          </span>
          <span style={{ float: 'right' }}>{count}</span>
        </div>
      ))}
    </section>
  </BlogLayout>
);

CategoriesIndex.propTypes = {
  allCategoriesData: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CategoriesIndex;

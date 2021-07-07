import PropTypes from 'prop-types';
import InternalLink from '../../components/InternalLink';
import BlogLayout from '../../components/BlogLayout';
import { getSortedPostsMetaData } from '../../lib/posts';
import utilStyles from '../utils.module.css';
import Date from '../../components/Date';
import BlogMenu from '../../components/BlogMenu';

export const getStaticProps = async () => ({
  props: {
    allPostsData: getSortedPostsMetaData(),
  },
});

const BlogIndex = ({ allPostsData }) => (
  <BlogLayout blogHome>
    <h1>All My Posts</h1>
    <BlogMenu />
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
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

BlogIndex.propTypes = {
  allPostsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default BlogIndex;

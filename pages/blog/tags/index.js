import PropTypes from 'prop-types';
import BlogLayout from '../../../components/BlogLayout';
import Tag from '../../../components/Tag';
import { getAllPostTags } from '../../../lib/posts';
import utilStyles from '../../utils.module.css';

export const getStaticProps = async () => ({
  props: {
    allTagsData: getAllPostTags(),
  },
});

const TagsIndex = ({ allTagsData }) => (
  <BlogLayout>
    <h1>Posts By Tag</h1>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      {allTagsData.map(({ tag, count }) => (
        <div key={tag}>
          <Tag tag={tag} /> <span style={{ float: 'right' }}>{count}</span>
        </div>
      ))}
    </section>
  </BlogLayout>
);

TagsIndex.propTypes = {
  allTagsData: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TagsIndex;

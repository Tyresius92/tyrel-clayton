import Tag from './Tag';
import PropTypes from 'prop-types';

const TagList = ({ tags }) => (
  <div>
    {tags.map(tag => (
      <Tag key={tag} tag={tag} />
    ))}
  </div>
);

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default TagList;

import InternalLink from './InternalLink';
import styles from './Tag.module.css';
import PropTypes from 'prop-types';

const Tag = ({ tag }) => (
  <span className={styles.tag}>
    <InternalLink href={`/blog/tags/${tag}`}>#{tag}</InternalLink>
  </span>
);

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;

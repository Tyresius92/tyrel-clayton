import InternalLink from './InternalLink';
import styles from './BlogMenu.module.css';

const BlogMenu = () => (
  <div>
    <InternalLink href={'/blog/tags'} className={styles.link}>
      Posts by Tag
    </InternalLink>
    <InternalLink href={'/blog/categories'} className={styles.link}>
      Posts by Category
    </InternalLink>
  </div>
);

export default BlogMenu;

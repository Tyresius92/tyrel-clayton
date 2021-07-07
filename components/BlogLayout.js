import styles from './Layout.module.css';
import Link from 'next/link';
import Layout from './Layout';

const BlogLayout = ({ children, blogHome, ...rest }) => (
  <Layout {...rest}>
    {children}
    {!blogHome && (
      <div className={styles.backToHome}>
        <Link href="/blog">
          <a>← Back to Blog</a>
        </Link>
      </div>
    )}
  </Layout>
);

export default BlogLayout;

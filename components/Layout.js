import PropTypes from 'prop-types';
import Head from 'next/head';
import Image from 'next/image';
import styles from './Layout.module.css';
import utilStyles from '../pages/utils.module.css';
import Link from 'next/link';
import InternalLink from './InternalLink';

const name = 'Tyrel Clayton';
export const siteTitle = 'Tyrel Clayton';

const Layout = ({ children, home }) => (
  <div className={styles.container}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Personal Website for Tyrel Clayton" />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <header className={styles.header}>
      {home ? (
        <>
          <Image
            priority
            src="/images/author.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/author.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <InternalLink href="/" className={utilStyles.colorInherit}>
              {name}
            </InternalLink>
          </h2>
        </>
      )}
    </header>
    <main>{children}</main>
    {!home && (
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    )}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  home: PropTypes.bool,
};

Layout.defaultProps = {
  home: false,
};

export default Layout;

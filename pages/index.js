import Head from 'next/head';
import InternalLink from '../components/InternalLink';
import Layout, { siteTitle } from '../components/Layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>This is the personal website of Tyrel Clayton</p>
        <p>
          It&apos;s built using <a href="https://nextjs.org/">Next.js</a>
        </p>
      </section>
      <section>
        <h2>I&apos;ve got a blog!</h2>
        <p>
          Click <InternalLink href="/blog">here</InternalLink> to read it.
        </p>
      </section>
    </Layout>
  );
}

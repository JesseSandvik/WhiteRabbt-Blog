import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import prisma from '../lib/prisma';

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany();

  return { props: { feed } };
};

export default function Home({ feed }) {
  return (
    <Layout>
      <Head><title>WhiteRabbt</title></Head>
      <section>
        <h2>Welcome</h2>
        {JSON.stringify(feed)}
      </section>
    </Layout>
  );
}

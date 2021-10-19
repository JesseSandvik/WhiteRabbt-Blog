import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head><title>WhiteRabbt</title></Head>
      <section>
        <h2>Welcome</h2>
      </section>
    </Layout>
  );
}
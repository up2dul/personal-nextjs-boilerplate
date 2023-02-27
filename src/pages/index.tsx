import { type NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Hello Next.js</title>
      <meta name='description' content='Hello Next.js' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main>
      <h1 className='text-white'>Hello Next.js</h1>
    </main>
  </>
);

export default Home;

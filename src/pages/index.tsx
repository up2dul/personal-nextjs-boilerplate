import { type NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Hello Next.js</title>
      <meta name='description' content='Hello Next.js' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main className='mx-auto  mt-24 flex w-[80%] flex-col gap-10 sm:w-[50%] md:w-[40%] lg:w-[30%]'>
      <section className='text-center'>
        <h1 className='text-5xl font-bold'>Hello World!</h1>
        <p className='mt-3'>📎 My personal Next.js starter boilerplate.</p>
      </section>

      <section>
        <h2 className='text-xl'>✅ Packed with:</h2>
        <ul className='mt-3 list-disc'>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Path aliases @/</li>
          <li>ESLint + Prettier (of course)</li>
          <li>Husky + Lint staged</li>
        </ul>
      </section>

      <section className='text-center'>
        <a
          href='https://github.com/up2dul/personal-nextjs-boilerplate'
          target='_blank'
          rel='noreferrer'
        >
          ↗️ Go to repository
        </a>
      </section>
    </main>
  </>
);

export default Home;

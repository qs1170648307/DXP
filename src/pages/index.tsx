import { css } from '../../styled-system/css';
import Head from 'next/head';
import Layout from '@/components/layout';
import LoginTabs from '@/components/LoginTabs';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <div
        className={css({
          bgGradient: 'to-r',
          gradientFrom: 'red.200',
          gradientTo: 'blue.200',
          h: '100vh',
          pt: '200px',
        })}
      >
        <LoginTabs />
      </div>
    </Layout>
  );
}

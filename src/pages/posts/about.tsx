import { css } from '../../../styled-system/css';
import Head from 'next/head';
import PostLayout from './postLayout';
import { Flex } from '@radix-ui/themes';
export default function AboutPage() {
  const value: string = 'about';
  return (
    <PostLayout value={value}>
      <Head>
        <title>{value.toUpperCase()}</title>
      </Head>
      <h1>This is About Page</h1>
    </PostLayout>
  );
}

import { css } from '../../../styled-system/css';
import Head from 'next/head';
import PostLayout from './postLayout';
import { Flex } from '@radix-ui/themes';
export default function ChangePage() {
  const value: string = 'change';
  return (
    <PostLayout value={value}>
      <Head>
        <title>{value.toUpperCase()}</title>
      </Head>
      <h1>This is Change Page</h1>
    </PostLayout>
  );
}

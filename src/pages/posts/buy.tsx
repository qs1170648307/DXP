import { css } from '../../../styled-system/css';
import Head from 'next/head';
import PostLayout from './postLayout';
import { Flex } from '@radix-ui/themes';
export default function BuyPage() {
  const value: string = 'buy';
  return (
    <PostLayout value={value}>
      <Head>
        <title>{value.toUpperCase()}</title>
      </Head>
      <h1>This is Buy Page</h1>
    </PostLayout>
  );
}

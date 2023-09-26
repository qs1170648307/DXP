import { css } from '../../../styled-system/css';
import Head from 'next/head';
import PostLayout from './postLayout';
import { Flex } from '@radix-ui/themes';
import ProductLayout from '../../components/ProductLayout';

const res: Array<Object> = [
  {
    prodPic: '/images/ttc_mild_1.png',
    prodName: '李施德林全護ZERO配方',
    prodDesc: '每天早晚刷牙後使用，可全天候保護口腔全面潔淨。李施德霖全效護理配方多添加氯化鋅，能幫助減少牙垢附著，回復牙齒自然潔白含氟化鈉，幫助預防蛀牙',
  },
  {
    prodPic: '/images/ttc_plus_1.png',
    prodName: '李施德林全護配方',
    prodDesc: '每天早晚刷牙後使用，可全天候保護口腔全面潔淨。李施德霖全效護理配方多添加氯化鋅，能幫助減少牙垢附著，回復牙齒自然潔白含氟化鈉，幫助預防蛀牙',
  },
];

export default function ProductPage() {
  const value: string = 'prod';
  return (
    <PostLayout value={value}>
      <Head>
        <title>{value.toUpperCase()}</title>
      </Head>
      <Flex gap="8" className={css({ cursor: 'pointer' })}>
        {res.map((item, index) => {
          return <ProductLayout key={index} result={item} />;
        })}
      </Flex>
    </PostLayout>
  );
}

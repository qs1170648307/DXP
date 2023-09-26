import { css, cva } from '../../../styled-system/css';
import Layout from '@/components/layout';
import { Flex } from '@radix-ui/themes';
import StickyButton from '@/components/StickyButton';
import Link from 'next/link';
import React, { useState } from 'react';
const StickyButtonClass = css({
  pos: 'fixed',
  bottom: '0',
  right: '10px',
  w: '200px',
  textAlign: 'center',
  '& .AccordionItem': {
    bg: 'yellow.500',
    rounded: '4px',
    '& .AccordionTriggerContent': {
      w: '100%',
      display: 'flex',
      gap: '5',
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      p: '2',
    },
    '& .AccordionContent': {
      bg: 'white',
      p:'4'
    },
  },
});

const headerClass = css({
  h: '100px',
  bgGradient: 'to-b',
  gradientFrom: 'yellow.300',
  gradientTo: 'transparent',
  '& .title': {
    '&>div': {
      fontSize: 'xl',
      fontWeight: 'bold',
      h: '100%',
      w: '120px',
      cursor: 'pointer',
      _hover: {
        bgGradient: 'to-b',
        gradientFrom: 'blue.300',
        gradientTo: 'transparent',
      },
      '&.active': {
        bgGradient: 'to-b',
        gradientFrom: 'blue.400',
        gradientTo: 'transparent',
        borderBottom: '3px solid white',
      },
      '&>a': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'indigo.400',
        w: '100%',
        h: '100%',
      },
    },
  },
});

const mainContent = css({
  minH: '100vh',
  mx:'5%',
});

const footerClass = css({
  bg: 'amber.500',
  h: '300px',
});
const menuArr: Array<string> = [
  'home',
  'prod',
  'about',
  'buy',
  'know',
  'change',
];


export default function PostLayout({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {

  const [menu, setMenu] = useState(value);
  const handleClick = (menu: string) => {
    setMenu(menu);
  };

  return (
    <Layout>
      <div
        className={css({
          bgGradient: 'to-r',
          gradientFrom: 'red.200',
          gradientTo: 'blue.200',
        })}
      >
        <header className={headerClass}>
          <Flex
            gap="2"
            className="title"
            justify="center"
            align="center"
            height="100%"
          >
            {menuArr.map((item) => {
              return (
                <div
                  className={menu === item ? 'active' : ''}
                  key={item}
                  onClick={() => handleClick(item)}
                >
                  <Link href={`/posts/${item}`}>{item.toUpperCase()}</Link>
                </div>
              );
            })}
          </Flex>
        </header>
        <main className={mainContent}>{children}</main>
        <StickyButton className={StickyButtonClass} />
        <footer className={footerClass}></footer>
      </div>
    </Layout>
  );
}

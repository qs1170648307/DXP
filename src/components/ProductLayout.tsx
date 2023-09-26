import { css } from '../../styled-system/css';
import {vstack} from '../../styled-system/patterns';
import Image from 'next/image';
import { AspectRatio } from '@radix-ui/themes';

const Container=css({
  w:'20%'
})
const prodName=css({

})
const prodDesc=css({})

export default function AboutPage({ result }:{result:any}) {
  return (
    <>
      <div className={`${Container} ${vstack()}`}>
        <AspectRatio ratio={8/8} >
          <Image
            width={200}
            height={200}
            src={result.prodPic}
            alt={result.prodName}
            className={css({w:'100%'})}
          />
        </AspectRatio>
        <div className={prodName}>{result.prodName}</div>
        <div className={prodDesc}>{result.prodDesc}</div>
      </div>
    </>
  );
}

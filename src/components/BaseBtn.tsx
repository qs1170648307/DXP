import { cva } from '../../styled-system/css';

const baseBtnClass = cva({
  base: { cursor: 'pointer' },
  variants: {
    visual: {
      soild: { bg: 'red.500', color: 'white' },
      outline: { borderWidth: '1px', borderColor: 'red.500' },
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '24px' },
    },
  },
  compoundVariants: [
    {
      visual: 'soild',
      size: 'sm',
      css: { borderWidth: '4px', borderColor: 'black' },
    },
  ],
  defaultVariants: {
    visual: 'soild',
    size: 'sm',
  },
});

export default function BaseBtn() {
  return (
    <>
      <div className={baseBtnClass()}>123</div>
    </>
  );
}

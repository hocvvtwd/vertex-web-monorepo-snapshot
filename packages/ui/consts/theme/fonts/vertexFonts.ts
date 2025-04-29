import localFont from 'next/font/local';
import { Fonts } from './types';

const HELVETICA_NEUE = localFont({
  src: [
    {
      path: './assets/HelveticaNeue-regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/HelveticaNeue-medium.woff',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica-neue',
});

export const FOXIFY_FONTS = {
  default: HELVETICA_NEUE,
  title: HELVETICA_NEUE,
} satisfies Fonts;

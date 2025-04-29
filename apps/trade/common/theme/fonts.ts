import { BLITZ_FONTS, Fonts, FOXIFY_FONTS } from '@vertex-protocol/web-ui';
import { baseClientEnv } from 'common/environment/baseClientEnv';
import { BrandName } from 'common/environment/types';

const FONTS_BY_BRAND_NAME = {
  vertex: FOXIFY_FONTS,
  blitz: BLITZ_FONTS,
} satisfies Record<BrandName, Fonts>;

export const FONTS = FONTS_BY_BRAND_NAME[baseClientEnv.brandName];

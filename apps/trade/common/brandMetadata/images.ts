import blastGoldIcon from 'client/assets/brand/blast-gold-icon.svg';
import blastIcon from 'client/assets/brand/blast-icon.svg';
import blastLogo from 'client/assets/brand/blast-logo.svg';
import blitzBrandBg from 'client/assets/brand/blitz-brand-bg.png';
import blitzBrandIcon from 'client/assets/brand/blitz-brand-icon.svg';
import blitzLogo from 'client/assets/brand/blitz-logo.svg';
import blitzMonochromeIcon from 'client/assets/brand/blitz-monochrome-icon.svg';
import vertexBrandBg from 'client/assets/brand/vertex-brand-bg.webp';
import foxifyBrandIcon from 'client/assets/brand/foxify-brand-icon.svg';
import foxifyLogo from 'client/assets/brand/foxify-logo.svg';
import axelarLogo from 'client/assets/partners/axelar-logo.svg';
import elixirLogo from 'client/assets/partners/elixir-logo.svg';
import skateLogo from 'client/assets/partners/skatefi-logo.svg';
import squidLogo from 'client/assets/partners/squid-logo.svg';
import { clientEnv } from 'common/environment/clientEnv';
import vlpSquareIcon from 'client/assets/vlp/vlp-square-icon.svg';

const BRAND_IMAGES = {
  vertex: {
    // Square black/white icon
    brandMonochromeIcon: foxifyBrandIcon,
    // Square icon
    brandIcon: foxifyBrandIcon,
    // Full name logo
    brandLogo: foxifyLogo,
    // Brand background image
    brandBg: vertexBrandBg,
  },
  blitz: {
    brandMonochromeIcon: blitzMonochromeIcon,
    brandIcon: blitzBrandIcon,
    brandLogo: blitzLogo,
    brandBg: blitzBrandBg,
  },
}[clientEnv.base.brandName];

const PARTNERS_IMAGES = {
  partners: {
    skate: skateLogo,
    elixir: elixirLogo,
    axelar: axelarLogo,
    squid: squidLogo,
  },
};

export const IMAGES = {
  ...BRAND_IMAGES,
  ...PARTNERS_IMAGES,
};

export const BLITZ_SPECIFIC_IMAGES = {
  blastIcon,
  blastGoldIcon,
  blastLogo,
  blitzBrandBg,
};

export const VERTEX_SPECIFIC_IMAGES = {
  vlpSquareIcon,
  vertex3dLogo: foxifyBrandIcon,
};

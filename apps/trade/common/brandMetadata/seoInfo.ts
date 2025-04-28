import { clientEnv } from 'common/environment/clientEnv';
import { BrandName } from 'common/environment/types';

interface BrandSeoMetadata {
  title: string;
  description: string;
  bannerImage: string;
  siteManifest: string;
  faviconIco: string;
  faviconSvg: string;
  appleTouchIcon: string;
  tileColor: string;
  headerColor: string;
  xUsername: string;
}

const BRAND_SEO_METADATA_BY_BRAND_NAME: Record<BrandName, BrandSeoMetadata> = {
  vertex: {
    title: 'Foxify - Trade Perpetuals Decentralized',
    description:
      'Instant FUNDING for traders, up to 10,000 USDC starting with as little as 100 USDC deposit. Trade 50+ Markets, with up to 20x Leverage.',
    bannerImage: 'https://main.d23b1tmk4jf4py.amplifyapp.com/og_foxify.png',
    siteManifest: '/vertex-site.webmanifest',
    faviconIco: '/foxify-favicon.ico',
    faviconSvg: '/foxify-icon.svg',
    appleTouchIcon: '/foxify-apple-touch-icon.png',
    tileColor: '#F66B31',
    headerColor: '#000000',
    xUsername: '@foxifytrade',
  },
  blitz: {
    title: 'Blitz | Trade Crypto with an Edge',
    description:
      'Blazing fast orderbook DEX for spot and futures trading on Blast. Connected by Vertex Edge.',
    bannerImage: 'https://blitz.exchange/img/twitter-preview-banner.png',
    siteManifest: '/blitz-site.webmanifest',
    faviconIco: '/blitz-favicon.ico',
    faviconSvg: '/blitz-icon.svg',
    appleTouchIcon: '/blitz-apple-touch-icon.png',
    tileColor: '#FF036D',
    headerColor: '#07070A',
    xUsername: '@tradeonblitz',
  },
};

export const BRAND_SEO_METADATA =
  BRAND_SEO_METADATA_BY_BRAND_NAME[clientEnv.base.brandName];

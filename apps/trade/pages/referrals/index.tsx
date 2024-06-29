import { VertexReferralsPage } from 'client/pages/VertexReferrals/VertexReferralsPage';
import { clientEnv } from 'common/environment/clientEnv';
import type { NextPage } from 'next';

export async function getStaticProps() {
  const isVertexBrand = clientEnv.base.brandName === 'vertex';
  if (!isVertexBrand) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}

const Referrals: NextPage = () => {
  return <VertexReferralsPage />;
};

export default Referrals;

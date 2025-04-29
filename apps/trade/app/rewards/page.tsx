import { BlitzRewardsPage } from 'client/pages/BlitzRewards/BlitzRewardsPage';
import VertexRewardsPage from 'client/pages/VertexRewards/VertexRewardsPage';
import { clientEnv } from 'common/environment/clientEnv';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default function Rewards() {
  return clientEnv.base.brandName === 'vertex' ? (
    <VertexRewardsPage />
  ) : (
    <BlitzRewardsPage />
  );
}

export async function generateMetadata(): Promise<Metadata | undefined> {
  return notFound();
  // return {
  //   title: 'Rewards',
  // };
}

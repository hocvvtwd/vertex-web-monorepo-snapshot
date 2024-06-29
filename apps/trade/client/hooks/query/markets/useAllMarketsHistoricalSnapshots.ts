import { useQuery } from '@tanstack/react-query';
import { nowInSeconds } from '@vertex-protocol/client';
import {
  createQueryKey,
  PrimaryChainID,
  QueryDisabledError,
  usePrimaryChainId,
  usePrimaryChainVertexClient,
} from '@vertex-protocol/react-client';
import { useOperationTimeLogger } from 'client/hooks/util/useOperationTimeLogger';

interface Params {
  granularity: number;
  limit: number;
}

export function allMarketsSnapshotsQueryKey(
  chainId?: PrimaryChainID,
  granularity?: number,
  limit?: number,
) {
  return createQueryKey('allMarketsSnapshots', chainId, granularity, limit);
}

export function useAllMarketsHistoricalSnapshots({
  granularity,
  limit,
}: Params) {
  const primaryChainId = usePrimaryChainId();
  const { startProfiling, endProfiling } = useOperationTimeLogger(
    'allMarketHistoricalSnapshots',
    true,
  );
  const vertexClient = usePrimaryChainVertexClient();

  const disabled = !vertexClient;

  return useQuery({
    queryKey: allMarketsSnapshotsQueryKey(primaryChainId, granularity, limit),
    queryFn: async () => {
      if (disabled) {
        throw new QueryDisabledError();
      }

      startProfiling();
      const data = await vertexClient.market.getMarketSnapshots({
        granularity,
        limit,
        maxTimeInclusive: nowInSeconds(),
      });
      endProfiling();
      return data;
    },
    enabled: !disabled,
    refetchInterval: 30000,
  });
}

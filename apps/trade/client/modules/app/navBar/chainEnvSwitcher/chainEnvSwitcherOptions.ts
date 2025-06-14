import { ChainEnv } from '@vertex-protocol/client';
import { clientEnv } from 'common/environment/clientEnv';

interface ChainEnvSwitcherOption {
  label: string;
  chainEnv: ChainEnv;
  promoteNewRewards?: boolean;
}

export const CHAIN_ENV_SWITCHER_OPTIONS = ((): ChainEnvSwitcherOption[] => {
  switch (clientEnv.base.dataEnv) {
    case 'vertexTestnet':
      return [
        // {
        //   label: 'Arbitrum',
        //   chainEnv: 'arbitrumTestnet',
        // },
        // {
        //   label: 'Base',
        //   chainEnv: 'baseTestnet',
        // },
        // {
        //   label: 'Mantle',
        //   chainEnv: 'mantleTestnet',
        // },
        // {
        //   label: 'Sei',
        //   chainEnv: 'seiTestnet',
        // },
        {
          label: 'Sonic',
          chainEnv: 'sonicTestnet',
        },
        // {
        //   label: 'Abstract',
        //   chainEnv: 'abstractTestnet',
        // },
        // {
        //   label: 'Avalanche',
        //   promoteNewRewards: true,
        //   chainEnv: 'avaxTestnet',
        // },
      ];
    case 'vertexMainnet':
      return [
        // {
        //   label: 'Arbitrum',
        //   chainEnv: 'arbitrum',
        // },
        // {
        //   label: 'Base',
        //   chainEnv: 'base',
        // },
        // {
        //   label: 'Mantle',
        //   chainEnv: 'mantle',
        // },
        // {
        //   label: 'Sei',
        //   chainEnv: 'sei',
        // },
        {
          label: 'Sonic',
          chainEnv: 'sonic',
        },
        // {
        //   label: 'Abstract',
        //   chainEnv: 'abstract',
        // },
        // {
        //   label: 'Avalanche',
        //   promoteNewRewards: true,
        //   chainEnv: 'avax',
        // },
      ];
    default:
      return [];
  }
})();

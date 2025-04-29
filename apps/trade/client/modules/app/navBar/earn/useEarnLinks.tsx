import { ROUTES } from 'client/modules/app/consts/routes';
import { LendBorrowEarnLinkCardButton } from 'client/modules/app/navBar/earn/components/LendBorrowEarnLinkCardButton';
import { BaseEarnLinkProps } from 'client/modules/app/navBar/earn/types';
import { ComponentType, useMemo } from 'react';
import { PoolsEarnLinkCardButton } from 'client/modules/app/navBar/earn/components/PoolsEarnLinkCardButton';

interface EarnLink extends BaseEarnLinkProps {
  desktopComponent: ComponentType<BaseEarnLinkProps>;
}

export function useEarnLinks() {
  // const { isFuulPageEnabled, isVaultsEnabled } = useEnabledFeatures();
  // const isTradingRewardsLinkEnabled = useIsEnabledForBrand(['vertex']);

  // const showVaultsLink = isVaultsEnabled;

  return useMemo(
    (): EarnLink[] => [
      // ...(showVaultsLink
      //   ? [
      //       {
      //         href: ROUTES.vaults,
      //         pageLabel: (
      //           <div className="flex items-center gap-x-2">
      //             Vaults
      //             <BrandSpecificContent enabledBrands={['blitz']}>
      //               <Image
      //                 src={BLITZ_SPECIFIC_IMAGES.blastGoldIcon}
      //                 alt=""
      //                 className="h-3 w-auto"
      //               />
      //             </BrandSpecificContent>
      //           </div>
      //         ),
      //         desktopComponent: VaultsEarnLinkCardButton,
      //       },
      //     ]
      //   : []),
      {
        href: ROUTES.moneyMarkets,
        pageLabel: 'Lend & Borrow',
        desktopComponent: LendBorrowEarnLinkCardButton,
      },
      {
        href: ROUTES.pools,
        pageLabel: 'Pools',
        desktopComponent: PoolsEarnLinkCardButton,
      },
      // ...(isTradingRewardsLinkEnabled
      //   ? [
      //       {
      //         href: ROUTES.rewards,
      //         pageLabel: (
      //           <div className="flex items-center gap-x-2">
      //             Trading Rewards
      //             <ChainEnvSpecificContent enabledChainEnvs={AVAX_CHAIN_ENVS}>
      //               <NewPill />
      //             </ChainEnvSpecificContent>
      //           </div>
      //         ),
      //         desktopComponent: TradingRewardsEarnLinkCardButton,
      //       },
      //     ]
      //   : []),
      // ...(isFuulPageEnabled
      //   ? [
      //       {
      //         href: ROUTES.referrals,
      //         pageLabel: 'Referrals',
      //         desktopComponent: ReferralsEarnLinkCardButton,
      //       },
      //     ]
      //   : []),
    ],
    [],
  );
}

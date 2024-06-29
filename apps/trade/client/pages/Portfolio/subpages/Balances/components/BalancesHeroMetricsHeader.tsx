import { BigDecimal } from '@vertex-protocol/client';
import { PortfolioHeroMetricsPane } from 'client/pages/Portfolio/components/PortfolioHeroMetricsPane';
import { PresetNumberFormatSpecifier } from '@vertex-protocol/react-client';
import { formatNumber } from '@vertex-protocol/react-client';

interface BalancesHeroHeaderProps {
  netBalance: BigDecimal | undefined;
}

export function BalancesHeroMetricsHeader({
  netBalance,
}: BalancesHeroHeaderProps) {
  return (
    <PortfolioHeroMetricsPane.Header
      title="Net Balance"
      definitionTooltipId="balancesNetBalance"
      valueContent={formatNumber(netBalance, {
        formatSpecifier: PresetNumberFormatSpecifier.CURRENCY_2DP,
      })}
    />
  );
}

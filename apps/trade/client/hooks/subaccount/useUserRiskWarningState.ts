import { useDerivedSubaccountOverview } from 'client/hooks/subaccount/useDerivedSubaccountOverview';
import { useUserStateError } from 'client/hooks/subaccount/useUserStateError';
import { getLiquidationRiskLevel } from 'client/utils/getLiquidationRiskLevel';

export type UserRiskWarningState =
  | 'extreme_liquidation_risk'
  | 'no_funds_available';

export function useUserRiskWarningState(): UserRiskWarningState | undefined {
  const { data: overview } = useDerivedSubaccountOverview();
  const userStateError = useUserStateError();

  const riskLevel = getLiquidationRiskLevel(
    overview?.liquidationRiskFractionBounded,
  );

  if (userStateError === 'not_connected') {
    return undefined;
  }

  if (riskLevel === 'extreme') {
    return 'extreme_liquidation_risk';
  }

  if (overview?.fundsAvailableBounded.lt(0.01)) {
    return 'no_funds_available';
  }

  return undefined;
}

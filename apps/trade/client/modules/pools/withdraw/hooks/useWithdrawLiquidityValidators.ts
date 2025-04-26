import { BigDecimal } from '@vertex-protocol/utils';
import { InputValidatorFn } from '@vertex-protocol/web-common';
import {
  WithdrawFormValidators,
  WithdrawLiquidityErrorType,
} from 'client/modules/pools/types';
import { positiveBigDecimalValidator } from 'client/utils/inputValidators';
import { useCallback } from 'react';

interface Params {
  currentLpAmount?: BigDecimal;
}

export function useWithdrawLiquidityValidators({
  currentLpAmount,
}: Params): WithdrawFormValidators {
  const validateLpAmount = useCallback<
    InputValidatorFn<string, WithdrawLiquidityErrorType>
  >(
    (val) => {
      if (!val) {
        return;
      }
      if (!positiveBigDecimalValidator.safeParse(val).success) {
        return 'invalid_input';
      }
      if (currentLpAmount && currentLpAmount.lt(val)) {
        return 'max_exceeded';
      }
    },
    [currentLpAmount],
  );

  return {
    validateLpAmount,
  };
}

import { ProductEngineType } from '@vertex-protocol/contracts';
import { addDecimals, BigDecimal, toBigDecimal } from '@vertex-protocol/utils';
import { ExecutePlaceEngineOrderParams } from 'client/hooks/execute/placeOrder/types';
import { useExecutePlaceOrder } from 'client/hooks/execute/placeOrder/useExecutePlaceOrder';
import {
  RepayConvertFormValues,
  RepayConvertProduct,
} from 'client/modules/collateral/repay/hooks/useRepayConvertForm/types';
import { useNotificationManagerContext } from 'client/modules/notifications/NotificationManagerContext';
import { AnnotatedSpotMarket } from '@vertex-protocol/metadata';
import { useCallback } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface Params {
  form: UseFormReturn<RepayConvertFormValues>;
  executePlaceOrder: ReturnType<typeof useExecutePlaceOrder>;
  marketProduct: RepayConvertProduct | undefined;
  market: AnnotatedSpotMarket | undefined;
  executionConversionPrice: BigDecimal | undefined;
  isSellOrder: boolean;
  allowAnyOrderSizeIncrement: boolean;
}

export function useRepayConvertSubmitHandler({
  form,
  executePlaceOrder,
  marketProduct,
  market,
  executionConversionPrice,
  isSellOrder,
  allowAnyOrderSizeIncrement,
}: Params) {
  const { dispatchNotification } = useNotificationManagerContext();

  return useCallback(
    (data: RepayConvertFormValues) => {
      if (!marketProduct || !executionConversionPrice) {
        return;
      }
      const repayAmount = toBigDecimal(data.repayAmount);
      // If selling (repaying USDC), order is in terms of source
      const orderAmount = isSellOrder
        ? repayAmount.div(executionConversionPrice).negated()
        : repayAmount;
      const decimalAdjustedAmount = addDecimals(orderAmount);

      const mutationParams: ExecutePlaceEngineOrderParams = {
        productId: marketProduct.productId,
        price: executionConversionPrice,
        amount: decimalAdjustedAmount,
        priceType: 'market',
        spotLeverage: false,
        allowAnyOrderSizeIncrement,
      };
      const executeResult = executePlaceOrder.mutateAsync(mutationParams, {
        onSuccess: () => {
          form.resetField('repayAmount');
          form.setValue('sourceProductId', undefined);
        },
      });

      dispatchNotification({
        type: 'place_order',
        data: {
          placeOrderParams: mutationParams,
          orderMarketType: ProductEngineType.SPOT,
          orderPriceType: 'market',
          executeResult,
          metadata: {
            marketName: marketProduct.marketName,
            symbol: marketProduct.symbol,
            icon: marketProduct.icon,
            priceIncrement: market?.priceIncrement,
          },
        },
      });
    },
    [
      marketProduct,
      executionConversionPrice,
      isSellOrder,
      allowAnyOrderSizeIncrement,
      executePlaceOrder,
      dispatchNotification,
      market?.priceIncrement,
      form,
    ],
  );
}

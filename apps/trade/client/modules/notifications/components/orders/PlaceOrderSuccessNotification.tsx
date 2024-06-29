import { ROUTES } from 'client/modules/app/consts/routes';
import { toBigDecimal } from '@vertex-protocol/utils';
import { Toast } from 'client/components/Toast/Toast';
import { ActionToast } from 'client/components/Toast/ActionToast/ActionToast';
import { ToastProps } from 'client/components/Toast/types';
import { NotificationPositionInfo } from 'client/modules/notifications/components/NotificationPositionInfo';
import { OrderNotificationValueItem } from 'client/modules/notifications/components/orders/OrderNotificationValueItem';
import { PlaceOrderNotificationData } from 'client/modules/notifications/types';
import { getOrderTypeLabel } from 'client/modules/trading/utils/getOrderTypeLabel';
import { removeDecimals } from '@vertex-protocol/utils';
import { CustomNumberFormatSpecifier } from '@vertex-protocol/react-client';
import { formatNumber } from '@vertex-protocol/react-client';
import { getMarketPriceFormatSpecifier } from '@vertex-protocol/react-client';
import { OrderSuccessIcon } from '../OrderSuccessIcon';
import { CounterPill } from '@vertex-protocol/web-ui';

interface PlaceOrderSuccessProps extends ToastProps {
  orderData: PlaceOrderNotificationData;
}

export function PlaceOrderSuccessNotification({
  orderData,
  visible,
  ttl,
  onDismiss,
}: PlaceOrderSuccessProps) {
  const { metadata, orderMarketType, orderPriceType, placeOrderParams } =
    orderData;
  const decimalAdjustedAmount = removeDecimals(
    toBigDecimal(placeOrderParams.amount),
  );

  const isTriggerOrder = placeOrderParams.priceType === 'stop';
  const isMarketOrder = placeOrderParams.priceType === 'market';

  const price = toBigDecimal(
    isTriggerOrder ? placeOrderParams.triggerPrice : placeOrderParams.price,
  );

  const orderInfoContent = (
    <>
      <OrderNotificationValueItem
        label="Amount"
        value={
          <div className="flex items-center gap-x-1">
            {formatNumber(decimalAdjustedAmount.abs(), {
              // Spot market orders can be of arbitrary size, so we show as much precision as possible
              formatSpecifier: CustomNumberFormatSpecifier.NUMBER_PRECISE,
            })}
            <CounterPill>{metadata.symbol}</CounterPill>
          </div>
        }
      />
      <OrderNotificationValueItem
        label={isTriggerOrder ? 'Trig. Price' : 'Price'}
        value={
          isMarketOrder
            ? 'Market'
            : formatNumber(price, {
                formatSpecifier: getMarketPriceFormatSpecifier(
                  metadata.priceIncrement,
                ),
              })
        }
      />
      {!isMarketOrder && (
        <Toast.FooterLink href={ROUTES.portfolio.orders} className="pt-1">
          View Open Orders
        </Toast.FooterLink>
      )}
    </>
  );

  return (
    <ActionToast.Container visible={visible}>
      <ActionToast.SectionedHeader
        variant="success"
        leftLabel={getOrderTypeLabel(orderPriceType)}
        rightLabel="Placed"
        icon={OrderSuccessIcon}
        onDismiss={onDismiss}
      />
      <ActionToast.Separator variant="success" ttl={ttl} />
      <ActionToast.SectionedBody
        leftSection={
          <NotificationPositionInfo
            productType={orderMarketType}
            isLong={decimalAdjustedAmount.isPositive()}
            metadata={metadata}
          />
        }
        rightSection={orderInfoContent}
      />
    </ActionToast.Container>
  );
}

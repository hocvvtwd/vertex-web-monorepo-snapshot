import { NumberFormatSpecifier } from '@vertex-protocol/react-client';
import { MarketInfoCellData } from './MarketInfoCellData';
import { BigDecimal } from '@vertex-protocol/client';

export interface RealizedPnlEventItem {
  productId: number;
  timestampMillis: number;
  marketInfo: MarketInfoCellData;
  pnlInfo: {
    realizedPnlUsd: BigDecimal;
    realizedPnlFrac: BigDecimal;
  };
  filledAmountAbs: BigDecimal;
  entryPrice: BigDecimal;
  exitPrice: BigDecimal;
  marketPriceFormatSpecifier: NumberFormatSpecifier | string;
}

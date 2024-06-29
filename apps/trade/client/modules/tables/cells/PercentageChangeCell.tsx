import { BigDecimal } from '@vertex-protocol/client';
import { TableCell } from 'client/components/DataTable/cells/TableCell';
import { PresetNumberFormatSpecifier } from '@vertex-protocol/react-client';
import { formatNumber } from '@vertex-protocol/react-client';
import { signDependentValue } from 'client/utils/signDependentValue';

interface Props {
  value: BigDecimal;
  /** Defaults to `SIGNED_PERCENTAGE_2DP` */
  formatSpecifier?: PresetNumberFormatSpecifier;
}

export function PercentageChangeCell({
  value,
  formatSpecifier = PresetNumberFormatSpecifier.SIGNED_PERCENTAGE_2DP,
}: Props) {
  const color = signDependentValue(value, {
    positive: 'text-positive',
    negative: 'text-negative',
    zero: 'text-text-primary',
  });

  return (
    <TableCell className={color}>
      {formatNumber(value, { formatSpecifier })}
    </TableCell>
  );
}

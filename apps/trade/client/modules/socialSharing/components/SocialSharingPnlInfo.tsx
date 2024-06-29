import { BigDecimal } from '@vertex-protocol/utils';
import { joinClassNames } from '@vertex-protocol/web-common';
import { PresetNumberFormatSpecifier } from '@vertex-protocol/react-client';
import { formatNumber } from '@vertex-protocol/react-client';
import { signDependentValue } from 'client/utils/signDependentValue';

interface Props {
  estimatedPnlFrac: BigDecimal;
}

export function SocialSharingPnlInfo({ estimatedPnlFrac }: Props) {
  return (
    <div
      className={joinClassNames(
        'text-5xl leading-10',
        signDependentValue(estimatedPnlFrac, {
          positive: 'text-positive',
          negative: 'text-negative',
          zero: 'text-text-secondary',
        }),
      )}
    >
      {formatNumber(estimatedPnlFrac, {
        formatSpecifier: PresetNumberFormatSpecifier.SIGNED_PERCENTAGE_2DP,
      })}
    </div>
  );
}

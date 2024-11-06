// We can't use Image element from nextjs here. It won't generate images properly.
/* eslint-disable @next/next/no-img-element */
import { BigDecimal } from '@vertex-protocol/utils';
import { joinClassNames, NextImageSrc } from '@vertex-protocol/web-common';
import { signDependentValue } from 'client/utils/signDependentValue';
import Image from 'next/image';

interface Props {
  marketName: string;
  iconSrc: NextImageSrc;
  amount: BigDecimal;
  onLoad: () => void;
}

export function SocialSharingMarketInfo({
  marketName,
  iconSrc,
  amount,
  onLoad,
}: Props) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-x-1 text-[9.5px] leading-3">
        <Image
          onLoad={onLoad}
          src={iconSrc}
          className="size-3"
          alt="Asset Icon"
        />
        {marketName}
      </div>
      <div
        className={joinClassNames(
          'rounded-sm px-1.5 py-px text-[7px] uppercase',
          signDependentValue(amount, {
            positive: 'text-positive bg-positive-muted',
            negative: 'text-negative bg-negative-muted',
            zero: 'text-text-secondary bg-surface-3',
          }),
        )}
      >
        {signDependentValue(amount, {
          positive: 'long',
          negative: 'short',
          zero: '-',
        })}
      </div>
    </div>
  );
}

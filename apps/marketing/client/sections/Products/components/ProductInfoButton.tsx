import { WithChildren, joinClassNames } from '@vertex-protocol/web-common';
import { HomePageButton } from 'client/components/Button/HomePageButton';
import { BGVariant } from 'client/sections/Products/data';

export function ProductInfoButton({
  children,
  variant,
  isSelected,
  onClick,
}: WithChildren<{
  variant: BGVariant;
  isSelected: boolean;
  onClick: () => void;
}>) {
  const backgroundColorMapping = {
    pink: 'bg-pinkGradient',
    purple: 'bg-purpleGradient',
  }[variant];

  return (
    <HomePageButton
      className={joinClassNames(
        'relative z-10 box-content flex items-center justify-start gap-x-4',
        'overflow-hidden rounded-xl px-6 py-3 backdrop-blur-xl',
        'text-base font-bold leading-8 text-white',
        'md:text-2xl',
        'lg:py-5',
        'xl:text-3xl',
        isSelected ? backgroundColorMapping : 'bg-grayGradient',
      )}
      onClick={onClick}
    >
      {children}
    </HomePageButton>
  );
}

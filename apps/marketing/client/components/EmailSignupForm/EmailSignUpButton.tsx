import { BsArrowRight } from 'react-icons/bs';

import { HomePageButton } from '../Button/HomePageButton';
import { EmailSignUpButtonProps } from './types';
import { joinClassNames } from '@vertex-protocol/web-common';

export function EmailSignUpSubmitButton({
  disabled,
  formError,
  className,
}: EmailSignUpButtonProps) {
  return (
    <HomePageButton
      type="submit"
      className={joinClassNames(
        'flex h-full items-center justify-center px-3 text-3xl',
        'text-white-700 md:text-3xl',
        !disabled && 'hover:text-purple-800 hover:brightness-125',
        className,
      )}
      disabled={disabled}
      startIcon={<BsArrowRight />}
    />
  );
}

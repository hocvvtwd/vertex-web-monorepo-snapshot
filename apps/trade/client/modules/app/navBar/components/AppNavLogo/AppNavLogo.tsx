import { joinClassNames, WithClassnames } from '@vertex-protocol/web-common';
import { ROUTES } from 'client/modules/app/consts/routes';
import Image from 'next/image';
import Link from 'next/link';
import FoxifyTradeLogo from 'public/foxify-trade-logo.png';

export function AppNavLogo({ className }: WithClassnames) {
  return (
    <Link
      href={ROUTES.portfolio.overview}
      className={joinClassNames('cursor-pointer', className)}
    >
      <Image src={FoxifyTradeLogo} alt="logo" className="h-10 w-auto" />{' '}
    </Link>
  );
}

import {
  joinClassNames,
  mergeClassNames,
  WithChildren,
  WithClassnames,
} from '@vertex-protocol/web-common';
import { BlitzPointsBanner } from 'client/modules/app/components/BlitzPointsBanner';
import { AppNavBar } from 'client/modules/app/navBar/AppNavBar';
import { clientEnv } from 'common/environment/clientEnv';
import Head from 'next/head';
import Image from 'next/image';
import { ReactNode } from 'react';
import { IMAGES } from 'common/brandMetadata/images';
import { AppBottomSheet } from './AppBottomSheet';
import { AppFooter } from './AppFooter';
import { AppBackgroundHighlights } from './components/AppBackgroundHighlights';

interface RootProps extends WithChildren<WithClassnames> {
  // To be rendered with ` | Vertex` in the browser tab title
  routeName?: string;
  hasNavBorder?: boolean;
  hideHighlights?: boolean;
  contentWrapperClassName?: string;
}

function Root({
  routeName,
  children,
  className,
  hasNavBorder,
  hideHighlights,
  contentWrapperClassName,
}: RootProps) {
  const displayName = clientEnv.brandMetadata.displayName;
  const title = routeName ? `${routeName} | ${displayName}` : displayName;

  return (
    <div
      className={joinClassNames(
        'relative flex h-svh w-screen flex-col overflow-hidden',
        className,
      )}
    >
      {!hideHighlights && <AppBackgroundHighlights />}
      <Head>
        <title>{title}</title>
      </Head>
      <AppNavBar className="z-40" hasNavBorder={hasNavBorder} />
      <BlitzPointsBanner className="z-30" />
      <div
        // Hide horizontal overflow to ensure that tables never expand fully, but allow vertical scrolling
        className={joinClassNames(
          'no-scrollbar flex-1 overflow-x-hidden',
          contentWrapperClassName,
        )}
      >
        {children}
      </div>
      <AppFooter className="hidden lg:flex" />
      <AppBottomSheet />
    </div>
  );
}

interface HeaderProps {
  title: string;
  description?: ReactNode;
}

function Header({
  title,
  description,
  className,
}: WithClassnames<HeaderProps>) {
  return (
    <div className={joinClassNames('flex flex-col gap-y-1', className)}>
      <h1 className="text-text-primary title-text text-xl lg:text-3xl">
        {title}
      </h1>
      {description && (
        <p className="text-text-tertiary text-xs lg:text-sm">{description}</p>
      )}
    </div>
  );
}

interface EarnHeaderProps {
  title: string;
  description?: ReactNode;
}

function EarnHeader({ title, description }: EarnHeaderProps) {
  return (
    <div className="flex flex-col gap-y-1 lg:gap-y-2">
      <div className="flex items-center gap-x-2">
        <div className="bg-surface-1 rounded p-1 lg:p-1.5">
          <Image
            src={IMAGES.brandMonochromeIcon}
            className="h-3 w-auto lg:h-4"
            alt=""
            quality={100}
            priority
          />
        </div>
        <span className="text-text-primary text-sm lg:text-base">Earn</span>
      </div>
      <AppPage.Header
        title={title}
        description={description}
        className="max-w-[525px]"
      />
    </div>
  );
}

function Content({ className, children }: WithClassnames<WithChildren>) {
  return (
    <div
      className={mergeClassNames(
        'mx-auto flex max-w-[1770px] flex-col gap-y-4 lg:gap-y-6',
        className,
      )}
    >
      {children}
    </div>
  );
}

export const AppPage = {
  Root,
  Header,
  EarnHeader,
  Content,
};

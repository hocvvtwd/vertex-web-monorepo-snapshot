'use client';

import { joinClassNames, WithClassnames } from '@vertex-protocol/web-common';
import {
  CounterPill,
  ScrollShadowsContainer,
  TabButton,
} from '@vertex-protocol/web-ui';
import { useAnalyticsContext } from 'client/modules/analytics/AnalyticsContext';
import { ROUTE_APP_PORTFOLIO_PREFIX } from 'client/modules/app/consts/routes';
import { usePortfolioNavItems } from 'client/pages/Portfolio/hooks/usePortfolioNavItems';
import Link from 'next/link';

export function MobilePortfolioSubNavMenu({ className }: WithClassnames) {
  const navItems = usePortfolioNavItems();
  const { trackEvent } = useAnalyticsContext();

  return (
    <ScrollShadowsContainer
      orientation="horizontal"
      className={joinClassNames(
        // Same mobile padding as PortfolioPageContentWrapper
        'flex gap-x-2 px-4 py-2',
        'sm:px-12 sm:py-4',
        'lg:hidden',
        className,
      )}
    >
      {navItems.map(({ associatedCount, disabled, href, label, selected }) => {
        return (
          <TabButton
            active={selected}
            as={Link}
            key={label}
            href={`${ROUTE_APP_PORTFOLIO_PREFIX}/${href}`}
            disabled={disabled}
            className="title-text gap-x-1.5 whitespace-nowrap"
            onClick={() => {
              trackEvent({
                type: 'portfolio_nav_item_clicked',
                data: {
                  portfolioNavItems: label,
                },
              });
            }}
          >
            {label}
            {!!associatedCount && (
              <CounterPill className="bg-surface-2">
                {associatedCount.toFixed()}
              </CounterPill>
            )}
          </TabButton>
        );
      })}
    </ScrollShadowsContainer>
  );
}

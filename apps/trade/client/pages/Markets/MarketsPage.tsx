import { joinClassNames } from '@vertex-protocol/web-common';
import { AppPage } from 'client/modules/app/AppPage';
import { APP_PAGE_PADDING } from 'client/modules/app/consts/padding';
import { MarketsOverviewCards } from './components/MarketOverviewCards/MarketsOverviewCards';
import { MarketsPageHeader } from './components/MarketsPageHeader';
import { MarketsTableTabs } from './components/MarketsTableTabs';

export function MarketsPage() {
  return (
    <AppPage.Root
      routeName="Markets"
      contentWrapperClassName={joinClassNames(
        APP_PAGE_PADDING.horizontal,
        APP_PAGE_PADDING.vertical,
      )}
    >
      <AppPage.Content>
        <MarketsPageHeader />
        <div
          className={joinClassNames(
            // 'flex-row-reverse' is used to reverse the order of the cards on large screens
            // so the "New Markets" card is last
            `flex flex-col gap-4 lg:flex-row-reverse`,
            // We want all card to be scrollable on large screens, but not on small screens
            'lg:no-scrollbar lg:overflow-x-auto lg:overflow-y-hidden',
          )}
        >
          {/* Removing new markets card until we get updated design */}
          {/* <NewMarketsCard /> */}
          <MarketsOverviewCards
            className={joinClassNames(
              'flex-1',
              // We want these to be scrollable on small screens, but not on large screens
              'no-scrollbar overflow-x-auto lg:overflow-visible',
            )}
          />
        </div>
        <MarketsTableTabs />
      </AppPage.Content>
    </AppPage.Root>
  );
}

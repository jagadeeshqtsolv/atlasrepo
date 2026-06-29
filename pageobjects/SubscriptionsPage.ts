import type { Locator, Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";
import { webTable, type WebTable } from "../support/web-table";

export class SubscriptionsPage {
  private static readonly L = {
    ukgProExpiresIn: { strategy: 'text' as const, value: 'UKG Pro expires in 18 hours — service disruption', actionKind: 'text' as const },
    employeesWillLose: { strategy: 'text' as const, value: '73,600 employees will lose access to payroll,', actionKind: 'text' as const },
    contactUkgSupport: { strategy: 'role' as const, value: 'Contact UKG Support', role: 'button', actionKind: 'button' as const },
    atlasInsightsSubscriptions: { strategy: 'text' as const, value: 'Atlas Insights · Subscriptions', actionKind: 'text' as const },
    option: { strategy: 'css' as const, value: '[role="option"]', actionKind: 'generic' as const },
    input: { strategy: 'placeholder' as const, value: 'How can we help you today', actionKind: 'textbox' as const },
    askAtlas: { strategy: 'text' as const, value: 'Ask Atlas', actionKind: 'text' as const },
    seatAllocation: { strategy: 'role' as const, value: 'Seat allocation', role: 'button', actionKind: 'button' as const },
    upcomingRenewals: { strategy: 'role' as const, value: 'Upcoming renewals', role: 'button', actionKind: 'button' as const },
    costTrends: { strategy: 'role' as const, value: 'Cost trends', role: 'button', actionKind: 'button' as const },
    autoRenewStatus: { strategy: 'role' as const, value: 'Auto-renew status', role: 'button', actionKind: 'button' as const },
    subscriptionOverview: { strategy: 'text' as const, value: 'Subscription overview', actionKind: 'text' as const },
    licensedProducts: { strategy: 'text' as const, value: 'Licensed products', actionKind: 'text' as const },
    nextRenewal: { strategy: 'text' as const, value: 'Next renewal', actionKind: 'text' as const },
    in18h: { strategy: 'text' as const, value: 'In 18h', actionKind: 'text' as const },
    ukgProPayroll: { strategy: 'text' as const, value: 'UKG Pro Payroll', actionKind: 'text' as const },
    annualPortfolioApprox: { strategy: 'text' as const, value: 'Annual portfolio (approx.)', actionKind: 'text' as const },
    element2: { strategy: 'text' as const, value: '$1,734,500.00', actionKind: 'text' as const },
    allSubscription4: { strategy: 'role' as const, value: 'All Subscription (4)', role: 'button', actionKind: 'button' as const },
    expiryIn30Days: { strategy: 'role' as const, value: 'Expiry in 30 Days (2)', role: 'button', actionKind: 'button' as const },
    signedPending1: { strategy: 'role' as const, value: 'Signed Pending (1)', role: 'button', actionKind: 'button' as const },
    ukgDimensions: { strategy: 'text' as const, value: 'UKG Dimensions', actionKind: 'text' as const },
    ukgDimensionsCore: { strategy: 'text' as const, value: 'UKG Dimensions Core', actionKind: 'text' as const },
    dLeft: { strategy: 'text' as const, value: '14D left', actionKind: 'text' as const },
    element3: { strategy: 'text' as const, value: '$280,000', actionKind: 'text' as const },
    jun172026: { strategy: 'text' as const, value: 'Jun 17, 2026', actionKind: 'text' as const },
    ukgDimensionsAnalytics: { strategy: 'text' as const, value: 'UKG Dimensions Analytics', actionKind: 'text' as const },
    element4: { strategy: 'text' as const, value: '$210,000', actionKind: 'text' as const },
    ukgPro: { strategy: 'text' as const, value: 'UKG Pro', actionKind: 'text' as const },
    dLeft3: { strategy: 'text' as const, value: '25D left', actionKind: 'text' as const },
    element5: { strategy: 'text' as const, value: '$14,000', actionKind: 'text' as const },
    licenseUtilizationTrend: { strategy: 'text' as const, value: 'License Utilization Trend', actionKind: 'text' as const },
    monthlyLicenseUtilizationSummary: { strategy: 'text' as const, value: 'Monthly license utilization summary (last 6', actionKind: 'text' as const },
    filterByProduct: { strategy: 'role' as const, value: 'Filter by product', role: 'button', actionKind: 'button' as const },
    totalUtilisedLicenses: { strategy: 'text' as const, value: 'Total Utilised Licenses', actionKind: 'text' as const },
    element6: { strategy: 'text' as const, value: '77,250', actionKind: 'text' as const },
    contractHealth: { strategy: 'text' as const, value: 'Contract Health', actionKind: 'text' as const },
    activeContracts: { strategy: 'text' as const, value: 'Active contracts', actionKind: 'text' as const },
    pendingSignature: { strategy: 'text' as const, value: 'Pending signature', actionKind: 'text' as const },
    expiringContracts: { strategy: 'text' as const, value: 'Expiring contracts', actionKind: 'text' as const },
    noteForUpdation: { strategy: 'text' as const, value: 'Note : For Updation or Renewals, Please contact', actionKind: 'text' as const },
    signedPending: { strategy: 'text' as const, value: 'Signed Pending', actionKind: 'text' as const },
    ukgProEmployeeVoice: { strategy: 'text' as const, value: 'UKG Pro Employee Voice', actionKind: 'text' as const },
    element7: { strategy: 'text' as const, value: '#00492988', actionKind: 'text' as const },
    solEmplVoc001: { strategy: 'text' as const, value: 'SOL-EMPL-VOC-001', actionKind: 'text' as const },
    rechartsMeasurementSpan: { strategy: 'css' as const, value: '#recharts_measurement_span', actionKind: 'text' as const },
  } as const;

  readonly subProducts: WebTable; // columns: ["Product", "Contract", "Status", "Contract value", "Start date", "End date", "Renewal Date"]

  constructor(private readonly page: Page) {
    this.subProducts = webTable(this.page, 'table[aria-label="Sub-products"]');
  }

  async getInnerTextUkgProExpiresIn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgProExpiresIn));
  }

  async expectUkgProExpiresInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.ukgProExpiresIn), timeoutMs);
  }

  async expectUkgProExpiresInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.ukgProExpiresIn), timeoutMs);
  }

  async expectUkgProExpiresInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.ukgProExpiresIn), expected, timeoutMs);
  }

  async expectUkgProExpiresInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.ukgProExpiresIn), substring, timeoutMs);
  }

  async scrollUkgProExpiresInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgProExpiresIn));
  }

  async getInnerTextEmployeesWillLose(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.employeesWillLose));
  }

  async expectEmployeesWillLoseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.employeesWillLose), timeoutMs);
  }

  async expectEmployeesWillLoseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.employeesWillLose), timeoutMs);
  }

  async expectEmployeesWillLoseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.employeesWillLose), expected, timeoutMs);
  }

  async expectEmployeesWillLoseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.employeesWillLose), substring, timeoutMs);
  }

  async scrollEmployeesWillLoseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.employeesWillLose));
  }

  async clickContactUkgSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.contactUkgSupport));
  }

  async doubleClickContactUkgSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.contactUkgSupport));
  }

  async expectContactUkgSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.contactUkgSupport), timeoutMs);
  }

  async expectContactUkgSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.contactUkgSupport), timeoutMs);
  }

  async expectContactUkgSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.contactUkgSupport), timeoutMs);
  }

  async expectContactUkgSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.contactUkgSupport), timeoutMs);
  }

  async expectContactUkgSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.contactUkgSupport), expected, timeoutMs);
  }

  async expectContactUkgSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.contactUkgSupport), substring, timeoutMs);
  }

  async scrollContactUkgSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.contactUkgSupport));
  }

  async getInnerTextAtlasInsightsSubscriptions(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions));
  }

  async expectAtlasInsightsSubscriptionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), timeoutMs);
  }

  async expectAtlasInsightsSubscriptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), timeoutMs);
  }

  async expectAtlasInsightsSubscriptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), expected, timeoutMs);
  }

  async expectAtlasInsightsSubscriptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), substring, timeoutMs);
  }

  async scrollAtlasInsightsSubscriptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions));
  }

  async clickOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.option));
  }

  async doubleClickOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.option));
  }

  async expectOptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.option), timeoutMs);
  }

  async expectOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.option), timeoutMs);
  }

  async expectOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.option), timeoutMs);
  }

  async expectOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.option), timeoutMs);
  }

  async expectOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.option), expected, timeoutMs);
  }

  async expectOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.option), substring, timeoutMs);
  }

  async scrollOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.option));
  }

  async fillInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, SubscriptionsPage.L.input), value);
  }

  async clearInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, SubscriptionsPage.L.input));
  }

  async typeTextInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.input), value);
  }

  async expectInputVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.input), timeoutMs);
  }

  async expectInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.input), timeoutMs);
  }

  async expectInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.input), timeoutMs);
  }

  async expectInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.input), timeoutMs);
  }

  async expectInputValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.input), expected, timeoutMs);
  }

  async expectInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.input), timeoutMs);
  }

  async scrollInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.input));
  }

  async getInnerTextAskAtlas(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.askAtlas));
  }

  async expectAskAtlasVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.askAtlas), expected, timeoutMs);
  }

  async expectAskAtlasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.askAtlas), substring, timeoutMs);
  }

  async scrollAskAtlasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.askAtlas));
  }

  async clickSeatAllocation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.seatAllocation));
  }

  async doubleClickSeatAllocation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.seatAllocation));
  }

  async expectSeatAllocationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.seatAllocation), timeoutMs);
  }

  async expectSeatAllocationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.seatAllocation), timeoutMs);
  }

  async expectSeatAllocationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.seatAllocation), timeoutMs);
  }

  async expectSeatAllocationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.seatAllocation), timeoutMs);
  }

  async expectSeatAllocationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.seatAllocation), expected, timeoutMs);
  }

  async expectSeatAllocationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.seatAllocation), substring, timeoutMs);
  }

  async scrollSeatAllocationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.seatAllocation));
  }

  async clickUpcomingRenewals(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals));
  }

  async doubleClickUpcomingRenewals(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals));
  }

  async expectUpcomingRenewalsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), timeoutMs);
  }

  async expectUpcomingRenewalsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), timeoutMs);
  }

  async expectUpcomingRenewalsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), timeoutMs);
  }

  async expectUpcomingRenewalsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), timeoutMs);
  }

  async expectUpcomingRenewalsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), expected, timeoutMs);
  }

  async expectUpcomingRenewalsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), substring, timeoutMs);
  }

  async scrollUpcomingRenewalsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals));
  }

  async clickCostTrends(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.costTrends));
  }

  async doubleClickCostTrends(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.costTrends));
  }

  async expectCostTrendsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.costTrends), timeoutMs);
  }

  async expectCostTrendsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.costTrends), timeoutMs);
  }

  async expectCostTrendsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.costTrends), timeoutMs);
  }

  async expectCostTrendsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.costTrends), timeoutMs);
  }

  async expectCostTrendsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.costTrends), expected, timeoutMs);
  }

  async expectCostTrendsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.costTrends), substring, timeoutMs);
  }

  async scrollCostTrendsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.costTrends));
  }

  async clickAutoRenewStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus));
  }

  async doubleClickAutoRenewStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus));
  }

  async expectAutoRenewStatusVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), timeoutMs);
  }

  async expectAutoRenewStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), timeoutMs);
  }

  async expectAutoRenewStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), timeoutMs);
  }

  async expectAutoRenewStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), timeoutMs);
  }

  async expectAutoRenewStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), expected, timeoutMs);
  }

  async expectAutoRenewStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), substring, timeoutMs);
  }

  async scrollAutoRenewStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus));
  }

  async getInnerTextSubscriptionOverview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview));
  }

  async expectSubscriptionOverviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), timeoutMs);
  }

  async expectSubscriptionOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), timeoutMs);
  }

  async expectSubscriptionOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), expected, timeoutMs);
  }

  async expectSubscriptionOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), substring, timeoutMs);
  }

  async scrollSubscriptionOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview));
  }

  async getInnerTextLicensedProducts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.licensedProducts));
  }

  async expectLicensedProductsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.licensedProducts), timeoutMs);
  }

  async expectLicensedProductsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.licensedProducts), timeoutMs);
  }

  async expectLicensedProductsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.licensedProducts), expected, timeoutMs);
  }

  async expectLicensedProductsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.licensedProducts), substring, timeoutMs);
  }

  async scrollLicensedProductsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.licensedProducts));
  }

  async getInnerTextNextRenewal(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.nextRenewal));
  }

  async expectNextRenewalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.nextRenewal), timeoutMs);
  }

  async expectNextRenewalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.nextRenewal), timeoutMs);
  }

  async expectNextRenewalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.nextRenewal), expected, timeoutMs);
  }

  async expectNextRenewalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.nextRenewal), substring, timeoutMs);
  }

  async scrollNextRenewalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.nextRenewal));
  }

  async getInnerTextIn18h(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.in18h));
  }

  async expectIn18hVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.in18h), timeoutMs);
  }

  async expectIn18hHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.in18h), timeoutMs);
  }

  async expectIn18hText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.in18h), expected, timeoutMs);
  }

  async expectIn18hContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.in18h), substring, timeoutMs);
  }

  async scrollIn18hIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.in18h));
  }

  async getInnerTextUkgProPayroll(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgProPayroll));
  }

  async expectUkgProPayrollVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.ukgProPayroll), timeoutMs);
  }

  async expectUkgProPayrollHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.ukgProPayroll), timeoutMs);
  }

  async expectUkgProPayrollText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.ukgProPayroll), expected, timeoutMs);
  }

  async expectUkgProPayrollContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.ukgProPayroll), substring, timeoutMs);
  }

  async scrollUkgProPayrollIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgProPayroll));
  }

  async getInnerTextAnnualPortfolioApprox(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox));
  }

  async expectAnnualPortfolioApproxVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), timeoutMs);
  }

  async expectAnnualPortfolioApproxHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), timeoutMs);
  }

  async expectAnnualPortfolioApproxText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), expected, timeoutMs);
  }

  async expectAnnualPortfolioApproxContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), substring, timeoutMs);
  }

  async scrollAnnualPortfolioApproxIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox));
  }

  async getInnerTextElement2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.element2));
  }

  async expectElement2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.element2), timeoutMs);
  }

  async expectElement2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.element2), timeoutMs);
  }

  async expectElement2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.element2), expected, timeoutMs);
  }

  async expectElement2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.element2), substring, timeoutMs);
  }

  async scrollElement2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.element2));
  }

  async clickAllSubscription4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.allSubscription4));
  }

  async doubleClickAllSubscription4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.allSubscription4));
  }

  async expectAllSubscription4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.allSubscription4), timeoutMs);
  }

  async expectAllSubscription4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.allSubscription4), timeoutMs);
  }

  async expectAllSubscription4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.allSubscription4), timeoutMs);
  }

  async expectAllSubscription4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.allSubscription4), timeoutMs);
  }

  async expectAllSubscription4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.allSubscription4), expected, timeoutMs);
  }

  async expectAllSubscription4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.allSubscription4), substring, timeoutMs);
  }

  async scrollAllSubscription4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.allSubscription4));
  }

  async clickExpiryIn30Days(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days));
  }

  async doubleClickExpiryIn30Days(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days));
  }

  async expectExpiryIn30DaysVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), timeoutMs);
  }

  async expectExpiryIn30DaysHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), timeoutMs);
  }

  async expectExpiryIn30DaysEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), timeoutMs);
  }

  async expectExpiryIn30DaysDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), timeoutMs);
  }

  async expectExpiryIn30DaysText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), expected, timeoutMs);
  }

  async expectExpiryIn30DaysContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), substring, timeoutMs);
  }

  async scrollExpiryIn30DaysIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days));
  }

  async clickSignedPending1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.signedPending1));
  }

  async doubleClickSignedPending1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.signedPending1));
  }

  async expectSignedPending1Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.signedPending1), timeoutMs);
  }

  async expectSignedPending1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.signedPending1), timeoutMs);
  }

  async expectSignedPending1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.signedPending1), timeoutMs);
  }

  async expectSignedPending1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.signedPending1), timeoutMs);
  }

  async expectSignedPending1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.signedPending1), expected, timeoutMs);
  }

  async expectSignedPending1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.signedPending1), substring, timeoutMs);
  }

  async scrollSignedPending1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.signedPending1));
  }

  async getInnerTextUkgDimensions(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgDimensions));
  }

  async expectUkgDimensionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.ukgDimensions), timeoutMs);
  }

  async expectUkgDimensionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.ukgDimensions), timeoutMs);
  }

  async expectUkgDimensionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.ukgDimensions), expected, timeoutMs);
  }

  async expectUkgDimensionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.ukgDimensions), substring, timeoutMs);
  }

  async scrollUkgDimensionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgDimensions));
  }

  async getInnerTextUkgDimensionsCore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsCore));
  }

  async expectUkgDimensionsCoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsCore), timeoutMs);
  }

  async expectUkgDimensionsCoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsCore), timeoutMs);
  }

  async expectUkgDimensionsCoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsCore), expected, timeoutMs);
  }

  async expectUkgDimensionsCoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsCore), substring, timeoutMs);
  }

  async scrollUkgDimensionsCoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsCore));
  }

  async getInnerTextDLeft(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.dLeft));
  }

  async expectDLeftVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.dLeft), timeoutMs);
  }

  async expectDLeftHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.dLeft), timeoutMs);
  }

  async expectDLeftText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.dLeft), expected, timeoutMs);
  }

  async expectDLeftContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.dLeft), substring, timeoutMs);
  }

  async scrollDLeftIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.dLeft));
  }

  async getInnerTextElement3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.element3));
  }

  async expectElement3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.element3), timeoutMs);
  }

  async expectElement3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.element3), timeoutMs);
  }

  async expectElement3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.element3), expected, timeoutMs);
  }

  async expectElement3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.element3), substring, timeoutMs);
  }

  async scrollElement3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.element3));
  }

  async getInnerTextJun172026(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.jun172026));
  }

  async expectJun172026Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.jun172026), timeoutMs);
  }

  async expectJun172026Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.jun172026), timeoutMs);
  }

  async expectJun172026Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.jun172026), expected, timeoutMs);
  }

  async expectJun172026ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.jun172026), substring, timeoutMs);
  }

  async scrollJun172026IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.jun172026));
  }

  async getInnerTextUkgDimensionsAnalytics(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsAnalytics));
  }

  async expectUkgDimensionsAnalyticsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsAnalytics), timeoutMs);
  }

  async expectUkgDimensionsAnalyticsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsAnalytics), timeoutMs);
  }

  async expectUkgDimensionsAnalyticsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsAnalytics), expected, timeoutMs);
  }

  async expectUkgDimensionsAnalyticsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsAnalytics), substring, timeoutMs);
  }

  async scrollUkgDimensionsAnalyticsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsAnalytics));
  }

  async getInnerTextElement4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.element4));
  }

  async expectElement4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.element4), timeoutMs);
  }

  async expectElement4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.element4), timeoutMs);
  }

  async expectElement4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.element4), expected, timeoutMs);
  }

  async expectElement4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.element4), substring, timeoutMs);
  }

  async scrollElement4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.element4));
  }

  async getInnerTextUkgPro(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgPro));
  }

  async expectUkgProVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.ukgPro), timeoutMs);
  }

  async expectUkgProHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.ukgPro), timeoutMs);
  }

  async expectUkgProText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.ukgPro), expected, timeoutMs);
  }

  async expectUkgProContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.ukgPro), substring, timeoutMs);
  }

  async scrollUkgProIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgPro));
  }

  async getInnerTextDLeft3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.dLeft3));
  }

  async expectDLeft3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.dLeft3), timeoutMs);
  }

  async expectDLeft3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.dLeft3), timeoutMs);
  }

  async expectDLeft3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.dLeft3), expected, timeoutMs);
  }

  async expectDLeft3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.dLeft3), substring, timeoutMs);
  }

  async scrollDLeft3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.dLeft3));
  }

  async getInnerTextElement5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.element5));
  }

  async expectElement5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.element5), timeoutMs);
  }

  async expectElement5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.element5), timeoutMs);
  }

  async expectElement5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.element5), expected, timeoutMs);
  }

  async expectElement5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.element5), substring, timeoutMs);
  }

  async scrollElement5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.element5));
  }

  async getInnerTextLicenseUtilizationTrend(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend));
  }

  async expectLicenseUtilizationTrendVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), timeoutMs);
  }

  async expectLicenseUtilizationTrendHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), timeoutMs);
  }

  async expectLicenseUtilizationTrendText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), expected, timeoutMs);
  }

  async expectLicenseUtilizationTrendContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), substring, timeoutMs);
  }

  async scrollLicenseUtilizationTrendIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend));
  }

  async getInnerTextMonthlyLicenseUtilizationSummary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary));
  }

  async expectMonthlyLicenseUtilizationSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), timeoutMs);
  }

  async expectMonthlyLicenseUtilizationSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), timeoutMs);
  }

  async expectMonthlyLicenseUtilizationSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), expected, timeoutMs);
  }

  async expectMonthlyLicenseUtilizationSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), substring, timeoutMs);
  }

  async scrollMonthlyLicenseUtilizationSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary));
  }

  async clickFilterByProduct(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.filterByProduct));
  }

  async doubleClickFilterByProduct(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.filterByProduct));
  }

  async expectFilterByProductVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.filterByProduct), timeoutMs);
  }

  async expectFilterByProductHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.filterByProduct), timeoutMs);
  }

  async expectFilterByProductEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.filterByProduct), timeoutMs);
  }

  async expectFilterByProductDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.filterByProduct), timeoutMs);
  }

  async expectFilterByProductText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.filterByProduct), expected, timeoutMs);
  }

  async expectFilterByProductContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.filterByProduct), substring, timeoutMs);
  }

  async scrollFilterByProductIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.filterByProduct));
  }

  async getInnerTextTotalUtilisedLicenses(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses));
  }

  async expectTotalUtilisedLicensesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), timeoutMs);
  }

  async expectTotalUtilisedLicensesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), timeoutMs);
  }

  async expectTotalUtilisedLicensesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), expected, timeoutMs);
  }

  async expectTotalUtilisedLicensesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), substring, timeoutMs);
  }

  async scrollTotalUtilisedLicensesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses));
  }

  async getInnerTextElement6(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.element6));
  }

  async expectElement6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.element6), timeoutMs);
  }

  async expectElement6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.element6), timeoutMs);
  }

  async expectElement6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.element6), expected, timeoutMs);
  }

  async expectElement6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.element6), substring, timeoutMs);
  }

  async scrollElement6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.element6));
  }

  async getInnerTextContractHealth(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.contractHealth));
  }

  async expectContractHealthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.contractHealth), timeoutMs);
  }

  async expectContractHealthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.contractHealth), timeoutMs);
  }

  async expectContractHealthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.contractHealth), expected, timeoutMs);
  }

  async expectContractHealthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.contractHealth), substring, timeoutMs);
  }

  async scrollContractHealthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.contractHealth));
  }

  async getInnerTextActiveContracts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.activeContracts));
  }

  async expectActiveContractsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.activeContracts), timeoutMs);
  }

  async expectActiveContractsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.activeContracts), timeoutMs);
  }

  async expectActiveContractsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.activeContracts), expected, timeoutMs);
  }

  async expectActiveContractsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.activeContracts), substring, timeoutMs);
  }

  async scrollActiveContractsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.activeContracts));
  }

  async getInnerTextPendingSignature(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.pendingSignature));
  }

  async expectPendingSignatureVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.pendingSignature), timeoutMs);
  }

  async expectPendingSignatureHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.pendingSignature), timeoutMs);
  }

  async expectPendingSignatureText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.pendingSignature), expected, timeoutMs);
  }

  async expectPendingSignatureContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.pendingSignature), substring, timeoutMs);
  }

  async scrollPendingSignatureIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.pendingSignature));
  }

  async getInnerTextExpiringContracts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.expiringContracts));
  }

  async expectExpiringContractsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.expiringContracts), timeoutMs);
  }

  async expectExpiringContractsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.expiringContracts), timeoutMs);
  }

  async expectExpiringContractsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.expiringContracts), expected, timeoutMs);
  }

  async expectExpiringContractsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.expiringContracts), substring, timeoutMs);
  }

  async scrollExpiringContractsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.expiringContracts));
  }

  async getInnerTextNoteForUpdation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.noteForUpdation));
  }

  async expectNoteForUpdationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), timeoutMs);
  }

  async expectNoteForUpdationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), timeoutMs);
  }

  async expectNoteForUpdationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), expected, timeoutMs);
  }

  async expectNoteForUpdationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), substring, timeoutMs);
  }

  async scrollNoteForUpdationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.noteForUpdation));
  }

  async getInnerTextSignedPending(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.signedPending));
  }

  async expectSignedPendingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.signedPending), timeoutMs);
  }

  async expectSignedPendingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.signedPending), timeoutMs);
  }

  async expectSignedPendingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.signedPending), expected, timeoutMs);
  }

  async expectSignedPendingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.signedPending), substring, timeoutMs);
  }

  async scrollSignedPendingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.signedPending));
  }

  async getInnerTextUkgProEmployeeVoice(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgProEmployeeVoice));
  }

  async expectUkgProEmployeeVoiceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.ukgProEmployeeVoice), timeoutMs);
  }

  async expectUkgProEmployeeVoiceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.ukgProEmployeeVoice), timeoutMs);
  }

  async expectUkgProEmployeeVoiceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.ukgProEmployeeVoice), expected, timeoutMs);
  }

  async expectUkgProEmployeeVoiceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.ukgProEmployeeVoice), substring, timeoutMs);
  }

  async scrollUkgProEmployeeVoiceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgProEmployeeVoice));
  }

  async getInnerTextElement7(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.element7));
  }

  async expectElement7Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.element7), timeoutMs);
  }

  async expectElement7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.element7), timeoutMs);
  }

  async expectElement7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.element7), expected, timeoutMs);
  }

  async expectElement7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.element7), substring, timeoutMs);
  }

  async scrollElement7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.element7));
  }

  async getInnerTextSolEmplVoc001(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.solEmplVoc001));
  }

  async expectSolEmplVoc001Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.solEmplVoc001), timeoutMs);
  }

  async expectSolEmplVoc001Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.solEmplVoc001), timeoutMs);
  }

  async expectSolEmplVoc001Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.solEmplVoc001), expected, timeoutMs);
  }

  async expectSolEmplVoc001ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.solEmplVoc001), substring, timeoutMs);
  }

  async scrollSolEmplVoc001IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.solEmplVoc001));
  }

  async getInnerTextRechartsMeasurementSpan(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan));
  }

  async expectRechartsMeasurementSpanVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), expected, timeoutMs);
  }

  async expectRechartsMeasurementSpanContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), substring, timeoutMs);
  }

  async scrollRechartsMeasurementSpanIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  /** Assert page title matches an expected string or regex. */
  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, expected, timeoutMs);
  }

  /** Verify we are on the correct page using the title captured at record time. */
  async verifyOnPage(timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, 'Customer Experience Portal · UKG', timeoutMs);
  }

  // ── table[aria-label="Sub-products"] ──────────────────────────────────────────────

  /** Text of any cell. row is 0-based; col is column name or 0-based index. */
  async getSubProductsTableText(row: number, col: number | string): Promise<string> {
    return this.subProducts.getText(row, col);
  }

  /** All text values for a column across every row. */
  async getSubProductsTableColumn(col: number | string): Promise<string[]> {
    return this.subProducts.getColumn(col);
  }

  /** All cell values for a row as { "Column Name": "value" }. */
  async getSubProductsTableRowData(row: number): Promise<Record<string, string>> {
    return this.subProducts.getRowData(row);
  }

  /** First row where col equals value (exact). Pass exact=false for contains match. */
  async findSubProductsTableRow(col: number | string, value: string, exact = true): Promise<number> {
    return this.subProducts.findRow(col, value, exact);
  }

  /** First row where any cell contains text (case-insensitive). */
  async findSubProductsTableRowByText(text: string): Promise<number> {
    return this.subProducts.findRowByText(text);
  }

  /** Total number of body rows. */
  async getSubProductsTableRowCount(): Promise<number> {
    return this.subProducts.rowCount();
  }

  /** Click the <a> link inside a cell. */
  async clickSubProductsTableLink(row: number, col: number | string): Promise<void> {
    return this.subProducts.clickLink(row, col);
  }

  /** href of the link inside a cell, or null if there is no link. */
  async getSubProductsTableLinkHref(row: number, col: number | string): Promise<string | null> {
    const cell = await this.subProducts.cell(row, col);
    const link = cell.locator('a');
    return (await link.count()) > 0 ? link.getAttribute('href') : null;
  }

  /** Check the row selection checkbox (idempotent). */
  async checkSubProductsTableRow(row: number): Promise<void> {
    const cb = this.subProducts.row(row).locator('input[type="checkbox"]').first();
    if (await cb.isChecked()) return;
    await cb.check({ force: true });
  }

  /** Uncheck the row selection checkbox (idempotent). */
  async uncheckSubProductsTableRow(row: number): Promise<void> {
    const cb = this.subProducts.row(row).locator('input[type="checkbox"]').first();
    if (!(await cb.isChecked())) return;
    await cb.uncheck({ force: true });
  }

  /** Whether the row selection checkbox is currently checked. */
  async isSubProductsTableRowChecked(row: number): Promise<boolean> {
    return this.subProducts.row(row).locator('input[type="checkbox"]').first().isChecked();
  }

  /** Current state of the toggle switch (role="switch") in the row — true = on/active. */
  async getSubProductsTableSwitchState(row: number): Promise<boolean> {
    return this.subProducts.getSwitchState(row);
  }

  /** Toggle the switch in a row. Pass targetState=true/false to set explicitly. */
  async toggleSubProductsTableSwitch(row: number, targetState?: boolean): Promise<void> {
    return this.subProducts.toggleSwitch(row, targetState);
  }

  /** Click a button in a row by optional label; omit label to click the last button (action menu). */
  async clickSubProductsTableButton(row: number, label?: string): Promise<void> {
    return this.subProducts.clickButton(row, label);
  }

  /** Click a named option inside an already-open row action dropdown. */
  async clickSubProductsTableMenuOption(label: string): Promise<void> {
    return this.subProducts.clickMenuOption(label);
  }

  /** Click a column header to sort. Call twice to reverse direction. */
  async sortSubProductsTableBy(col: string): Promise<void> {
    return this.subProducts.sortBy(col);
  }

  /** Locator for any element inside a row — toggles, buttons, custom controls. */
  getSubProductsTableInRow(row: number, selector: string): Locator {
    return this.subProducts.getInRow(row, selector);
  }


  async clickUkgProExpiresIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgProExpiresIn));
  }

  async doubleClickUkgProExpiresIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgProExpiresIn));
  }

  async longPressUkgProExpiresIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgProExpiresIn));
  }

  async expectUkgProExpiresInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.ukgProExpiresIn), value, timeoutMs);
  }

  async expectUkgProExpiresInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.ukgProExpiresIn), timeoutMs);
  }

  async expectUkgProExpiresInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.ukgProExpiresIn), timeoutMs);
  }

  async expectUkgProExpiresInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.ukgProExpiresIn), timeoutMs);
  }

  async expectUkgProExpiresInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.ukgProExpiresIn), timeoutMs);
  }

  async expectUkgProExpiresInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.ukgProExpiresIn), timeoutMs);
  }

  async expectUkgProExpiresInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.ukgProExpiresIn), count, timeoutMs);
  }

  async clickEmployeesWillLose(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.employeesWillLose));
  }

  async doubleClickEmployeesWillLose(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.employeesWillLose));
  }

  async longPressEmployeesWillLose(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.employeesWillLose));
  }

  async expectEmployeesWillLoseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.employeesWillLose), value, timeoutMs);
  }

  async expectEmployeesWillLoseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.employeesWillLose), timeoutMs);
  }

  async expectEmployeesWillLoseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.employeesWillLose), timeoutMs);
  }

  async expectEmployeesWillLoseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.employeesWillLose), timeoutMs);
  }

  async expectEmployeesWillLoseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.employeesWillLose), timeoutMs);
  }

  async expectEmployeesWillLoseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.employeesWillLose), timeoutMs);
  }

  async expectEmployeesWillLoseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.employeesWillLose), count, timeoutMs);
  }

  async longPressContactUkgSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.contactUkgSupport));
  }

  async expectContactUkgSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.contactUkgSupport), value, timeoutMs);
  }

  async expectContactUkgSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.contactUkgSupport), timeoutMs);
  }

  async expectContactUkgSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.contactUkgSupport), timeoutMs);
  }

  async expectContactUkgSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.contactUkgSupport), timeoutMs);
  }

  async expectContactUkgSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.contactUkgSupport), count, timeoutMs);
  }

  async clickAtlasInsightsSubscriptions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions));
  }

  async doubleClickAtlasInsightsSubscriptions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions));
  }

  async longPressAtlasInsightsSubscriptions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions));
  }

  async expectAtlasInsightsSubscriptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), value, timeoutMs);
  }

  async expectAtlasInsightsSubscriptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), timeoutMs);
  }

  async expectAtlasInsightsSubscriptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), timeoutMs);
  }

  async expectAtlasInsightsSubscriptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), timeoutMs);
  }

  async expectAtlasInsightsSubscriptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), timeoutMs);
  }

  async expectAtlasInsightsSubscriptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), timeoutMs);
  }

  async expectAtlasInsightsSubscriptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.atlasInsightsSubscriptions), count, timeoutMs);
  }

  async longPressOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.option));
  }

  async expectOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.option), value, timeoutMs);
  }

  async expectOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.option), timeoutMs);
  }

  async expectOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.option), timeoutMs);
  }

  async expectOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.option), timeoutMs);
  }

  async expectOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.option), count, timeoutMs);
  }

  async expectInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SubscriptionsPage.L.input), expected, timeoutMs);
  }

  async expectInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SubscriptionsPage.L.input), substring, timeoutMs);
  }

  async expectInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.input), timeoutMs);
  }

  async expectInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.input), timeoutMs);
  }

  async expectInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.input), count, timeoutMs);
  }

  async clickAskAtlas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.askAtlas));
  }

  async doubleClickAskAtlas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.askAtlas));
  }

  async longPressAskAtlas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.askAtlas));
  }

  async expectAskAtlasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.askAtlas), value, timeoutMs);
  }

  async expectAskAtlasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.askAtlas), timeoutMs);
  }

  async expectAskAtlasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.askAtlas), count, timeoutMs);
  }

  async longPressSeatAllocation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.seatAllocation));
  }

  async expectSeatAllocationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.seatAllocation), value, timeoutMs);
  }

  async expectSeatAllocationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.seatAllocation), timeoutMs);
  }

  async expectSeatAllocationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.seatAllocation), timeoutMs);
  }

  async expectSeatAllocationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.seatAllocation), timeoutMs);
  }

  async expectSeatAllocationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.seatAllocation), count, timeoutMs);
  }

  async longPressUpcomingRenewals(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals));
  }

  async expectUpcomingRenewalsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), value, timeoutMs);
  }

  async expectUpcomingRenewalsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), timeoutMs);
  }

  async expectUpcomingRenewalsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), timeoutMs);
  }

  async expectUpcomingRenewalsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), timeoutMs);
  }

  async expectUpcomingRenewalsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.upcomingRenewals), count, timeoutMs);
  }

  async longPressCostTrends(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.costTrends));
  }

  async expectCostTrendsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.costTrends), value, timeoutMs);
  }

  async expectCostTrendsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.costTrends), timeoutMs);
  }

  async expectCostTrendsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.costTrends), timeoutMs);
  }

  async expectCostTrendsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.costTrends), timeoutMs);
  }

  async expectCostTrendsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.costTrends), count, timeoutMs);
  }

  async longPressAutoRenewStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus));
  }

  async expectAutoRenewStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), value, timeoutMs);
  }

  async expectAutoRenewStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), timeoutMs);
  }

  async expectAutoRenewStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), timeoutMs);
  }

  async expectAutoRenewStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), timeoutMs);
  }

  async expectAutoRenewStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.autoRenewStatus), count, timeoutMs);
  }

  async clickSubscriptionOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview));
  }

  async doubleClickSubscriptionOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview));
  }

  async longPressSubscriptionOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview));
  }

  async expectSubscriptionOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), value, timeoutMs);
  }

  async expectSubscriptionOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), timeoutMs);
  }

  async expectSubscriptionOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), timeoutMs);
  }

  async expectSubscriptionOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), timeoutMs);
  }

  async expectSubscriptionOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), timeoutMs);
  }

  async expectSubscriptionOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), timeoutMs);
  }

  async expectSubscriptionOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.subscriptionOverview), count, timeoutMs);
  }

  async clickLicensedProducts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.licensedProducts));
  }

  async doubleClickLicensedProducts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.licensedProducts));
  }

  async longPressLicensedProducts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.licensedProducts));
  }

  async expectLicensedProductsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.licensedProducts), value, timeoutMs);
  }

  async expectLicensedProductsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.licensedProducts), timeoutMs);
  }

  async expectLicensedProductsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.licensedProducts), timeoutMs);
  }

  async expectLicensedProductsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.licensedProducts), timeoutMs);
  }

  async expectLicensedProductsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.licensedProducts), timeoutMs);
  }

  async expectLicensedProductsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.licensedProducts), timeoutMs);
  }

  async expectLicensedProductsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.licensedProducts), count, timeoutMs);
  }

  async clickNextRenewal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.nextRenewal));
  }

  async doubleClickNextRenewal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.nextRenewal));
  }

  async longPressNextRenewal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.nextRenewal));
  }

  async expectNextRenewalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.nextRenewal), value, timeoutMs);
  }

  async expectNextRenewalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.nextRenewal), timeoutMs);
  }

  async expectNextRenewalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.nextRenewal), timeoutMs);
  }

  async expectNextRenewalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.nextRenewal), timeoutMs);
  }

  async expectNextRenewalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.nextRenewal), timeoutMs);
  }

  async expectNextRenewalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.nextRenewal), timeoutMs);
  }

  async expectNextRenewalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.nextRenewal), count, timeoutMs);
  }

  async clickIn18h(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.in18h));
  }

  async doubleClickIn18h(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.in18h));
  }

  async longPressIn18h(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.in18h));
  }

  async expectIn18hValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.in18h), value, timeoutMs);
  }

  async expectIn18hEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.in18h), timeoutMs);
  }

  async expectIn18hDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.in18h), timeoutMs);
  }

  async expectIn18hChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.in18h), timeoutMs);
  }

  async expectIn18hUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.in18h), timeoutMs);
  }

  async expectIn18hFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.in18h), timeoutMs);
  }

  async expectIn18hCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.in18h), count, timeoutMs);
  }

  async clickUkgProPayroll(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgProPayroll));
  }

  async doubleClickUkgProPayroll(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgProPayroll));
  }

  async longPressUkgProPayroll(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgProPayroll));
  }

  async expectUkgProPayrollValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.ukgProPayroll), value, timeoutMs);
  }

  async expectUkgProPayrollEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.ukgProPayroll), timeoutMs);
  }

  async expectUkgProPayrollDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.ukgProPayroll), timeoutMs);
  }

  async expectUkgProPayrollChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.ukgProPayroll), timeoutMs);
  }

  async expectUkgProPayrollUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.ukgProPayroll), timeoutMs);
  }

  async expectUkgProPayrollFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.ukgProPayroll), timeoutMs);
  }

  async expectUkgProPayrollCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.ukgProPayroll), count, timeoutMs);
  }

  async clickAnnualPortfolioApprox(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox));
  }

  async doubleClickAnnualPortfolioApprox(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox));
  }

  async longPressAnnualPortfolioApprox(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox));
  }

  async expectAnnualPortfolioApproxValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), value, timeoutMs);
  }

  async expectAnnualPortfolioApproxEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), timeoutMs);
  }

  async expectAnnualPortfolioApproxDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), timeoutMs);
  }

  async expectAnnualPortfolioApproxChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), timeoutMs);
  }

  async expectAnnualPortfolioApproxUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), timeoutMs);
  }

  async expectAnnualPortfolioApproxFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), timeoutMs);
  }

  async expectAnnualPortfolioApproxCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.annualPortfolioApprox), count, timeoutMs);
  }

  async clickElement2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element2));
  }

  async doubleClickElement2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element2));
  }

  async longPressElement2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.element2));
  }

  async expectElement2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.element2), value, timeoutMs);
  }

  async expectElement2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.element2), timeoutMs);
  }

  async expectElement2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.element2), timeoutMs);
  }

  async expectElement2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.element2), timeoutMs);
  }

  async expectElement2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.element2), timeoutMs);
  }

  async expectElement2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.element2), timeoutMs);
  }

  async expectElement2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.element2), count, timeoutMs);
  }

  async longPressAllSubscription4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.allSubscription4));
  }

  async expectAllSubscription4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.allSubscription4), value, timeoutMs);
  }

  async expectAllSubscription4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.allSubscription4), timeoutMs);
  }

  async expectAllSubscription4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.allSubscription4), timeoutMs);
  }

  async expectAllSubscription4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.allSubscription4), timeoutMs);
  }

  async expectAllSubscription4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.allSubscription4), count, timeoutMs);
  }

  async longPressExpiryIn30Days(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days));
  }

  async expectExpiryIn30DaysValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), value, timeoutMs);
  }

  async expectExpiryIn30DaysChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), timeoutMs);
  }

  async expectExpiryIn30DaysUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), timeoutMs);
  }

  async expectExpiryIn30DaysFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), timeoutMs);
  }

  async expectExpiryIn30DaysCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.expiryIn30Days), count, timeoutMs);
  }

  async longPressSignedPending1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.signedPending1));
  }

  async expectSignedPending1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.signedPending1), value, timeoutMs);
  }

  async expectSignedPending1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.signedPending1), timeoutMs);
  }

  async expectSignedPending1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.signedPending1), timeoutMs);
  }

  async expectSignedPending1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.signedPending1), timeoutMs);
  }

  async expectSignedPending1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.signedPending1), count, timeoutMs);
  }

  async clickUkgDimensions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgDimensions));
  }

  async doubleClickUkgDimensions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgDimensions));
  }

  async longPressUkgDimensions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgDimensions));
  }

  async expectUkgDimensionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.ukgDimensions), value, timeoutMs);
  }

  async expectUkgDimensionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.ukgDimensions), timeoutMs);
  }

  async expectUkgDimensionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.ukgDimensions), timeoutMs);
  }

  async expectUkgDimensionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.ukgDimensions), timeoutMs);
  }

  async expectUkgDimensionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.ukgDimensions), timeoutMs);
  }

  async expectUkgDimensionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.ukgDimensions), timeoutMs);
  }

  async expectUkgDimensionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.ukgDimensions), count, timeoutMs);
  }

  async clickUkgDimensionsCore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsCore));
  }

  async doubleClickUkgDimensionsCore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsCore));
  }

  async longPressUkgDimensionsCore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsCore));
  }

  async expectUkgDimensionsCoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsCore), value, timeoutMs);
  }

  async expectUkgDimensionsCoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsCore), timeoutMs);
  }

  async expectUkgDimensionsCoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsCore), timeoutMs);
  }

  async expectUkgDimensionsCoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsCore), timeoutMs);
  }

  async expectUkgDimensionsCoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsCore), timeoutMs);
  }

  async expectUkgDimensionsCoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsCore), timeoutMs);
  }

  async expectUkgDimensionsCoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsCore), count, timeoutMs);
  }

  async clickDLeft(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.dLeft));
  }

  async doubleClickDLeft(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.dLeft));
  }

  async longPressDLeft(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.dLeft));
  }

  async expectDLeftValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.dLeft), value, timeoutMs);
  }

  async expectDLeftEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.dLeft), timeoutMs);
  }

  async expectDLeftDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.dLeft), timeoutMs);
  }

  async expectDLeftChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.dLeft), timeoutMs);
  }

  async expectDLeftUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.dLeft), timeoutMs);
  }

  async expectDLeftFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.dLeft), timeoutMs);
  }

  async expectDLeftCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.dLeft), count, timeoutMs);
  }

  async clickElement3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element3));
  }

  async doubleClickElement3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element3));
  }

  async longPressElement3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.element3));
  }

  async expectElement3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.element3), value, timeoutMs);
  }

  async expectElement3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.element3), timeoutMs);
  }

  async expectElement3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.element3), timeoutMs);
  }

  async expectElement3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.element3), timeoutMs);
  }

  async expectElement3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.element3), timeoutMs);
  }

  async expectElement3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.element3), timeoutMs);
  }

  async expectElement3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.element3), count, timeoutMs);
  }

  async clickJun172026(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.jun172026));
  }

  async doubleClickJun172026(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.jun172026));
  }

  async longPressJun172026(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.jun172026));
  }

  async expectJun172026Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.jun172026), value, timeoutMs);
  }

  async expectJun172026Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.jun172026), timeoutMs);
  }

  async expectJun172026Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.jun172026), timeoutMs);
  }

  async expectJun172026Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.jun172026), timeoutMs);
  }

  async expectJun172026Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.jun172026), timeoutMs);
  }

  async expectJun172026Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.jun172026), timeoutMs);
  }

  async expectJun172026Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.jun172026), count, timeoutMs);
  }

  async clickUkgDimensionsAnalytics(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsAnalytics));
  }

  async doubleClickUkgDimensionsAnalytics(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsAnalytics));
  }

  async longPressUkgDimensionsAnalytics(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsAnalytics));
  }

  async expectUkgDimensionsAnalyticsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsAnalytics), value, timeoutMs);
  }

  async expectUkgDimensionsAnalyticsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsAnalytics), timeoutMs);
  }

  async expectUkgDimensionsAnalyticsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsAnalytics), timeoutMs);
  }

  async expectUkgDimensionsAnalyticsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsAnalytics), timeoutMs);
  }

  async expectUkgDimensionsAnalyticsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsAnalytics), timeoutMs);
  }

  async expectUkgDimensionsAnalyticsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsAnalytics), timeoutMs);
  }

  async expectUkgDimensionsAnalyticsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.ukgDimensionsAnalytics), count, timeoutMs);
  }

  async clickElement4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element4));
  }

  async doubleClickElement4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element4));
  }

  async longPressElement4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.element4));
  }

  async expectElement4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.element4), value, timeoutMs);
  }

  async expectElement4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.element4), timeoutMs);
  }

  async expectElement4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.element4), timeoutMs);
  }

  async expectElement4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.element4), timeoutMs);
  }

  async expectElement4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.element4), timeoutMs);
  }

  async expectElement4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.element4), timeoutMs);
  }

  async expectElement4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.element4), count, timeoutMs);
  }

  async clickUkgPro(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgPro));
  }

  async doubleClickUkgPro(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgPro));
  }

  async longPressUkgPro(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgPro));
  }

  async expectUkgProValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.ukgPro), value, timeoutMs);
  }

  async expectUkgProEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.ukgPro), timeoutMs);
  }

  async expectUkgProDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.ukgPro), timeoutMs);
  }

  async expectUkgProChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.ukgPro), timeoutMs);
  }

  async expectUkgProUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.ukgPro), timeoutMs);
  }

  async expectUkgProFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.ukgPro), timeoutMs);
  }

  async expectUkgProCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.ukgPro), count, timeoutMs);
  }

  async clickDLeft3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.dLeft3));
  }

  async doubleClickDLeft3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.dLeft3));
  }

  async longPressDLeft3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.dLeft3));
  }

  async expectDLeft3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.dLeft3), value, timeoutMs);
  }

  async expectDLeft3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.dLeft3), timeoutMs);
  }

  async expectDLeft3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.dLeft3), timeoutMs);
  }

  async expectDLeft3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.dLeft3), timeoutMs);
  }

  async expectDLeft3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.dLeft3), timeoutMs);
  }

  async expectDLeft3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.dLeft3), timeoutMs);
  }

  async expectDLeft3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.dLeft3), count, timeoutMs);
  }

  async clickElement5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element5));
  }

  async doubleClickElement5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element5));
  }

  async longPressElement5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.element5));
  }

  async expectElement5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.element5), value, timeoutMs);
  }

  async expectElement5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.element5), timeoutMs);
  }

  async expectElement5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.element5), timeoutMs);
  }

  async expectElement5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.element5), timeoutMs);
  }

  async expectElement5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.element5), timeoutMs);
  }

  async expectElement5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.element5), timeoutMs);
  }

  async expectElement5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.element5), count, timeoutMs);
  }

  async clickLicenseUtilizationTrend(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend));
  }

  async doubleClickLicenseUtilizationTrend(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend));
  }

  async longPressLicenseUtilizationTrend(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend));
  }

  async expectLicenseUtilizationTrendValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), value, timeoutMs);
  }

  async expectLicenseUtilizationTrendEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), timeoutMs);
  }

  async expectLicenseUtilizationTrendDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), timeoutMs);
  }

  async expectLicenseUtilizationTrendChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), timeoutMs);
  }

  async expectLicenseUtilizationTrendUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), timeoutMs);
  }

  async expectLicenseUtilizationTrendFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), timeoutMs);
  }

  async expectLicenseUtilizationTrendCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.licenseUtilizationTrend), count, timeoutMs);
  }

  async clickMonthlyLicenseUtilizationSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary));
  }

  async doubleClickMonthlyLicenseUtilizationSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary));
  }

  async longPressMonthlyLicenseUtilizationSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary));
  }

  async expectMonthlyLicenseUtilizationSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), value, timeoutMs);
  }

  async expectMonthlyLicenseUtilizationSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), timeoutMs);
  }

  async expectMonthlyLicenseUtilizationSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), timeoutMs);
  }

  async expectMonthlyLicenseUtilizationSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), timeoutMs);
  }

  async expectMonthlyLicenseUtilizationSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), timeoutMs);
  }

  async expectMonthlyLicenseUtilizationSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), timeoutMs);
  }

  async expectMonthlyLicenseUtilizationSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.monthlyLicenseUtilizationSummary), count, timeoutMs);
  }

  async longPressFilterByProduct(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.filterByProduct));
  }

  async expectFilterByProductValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.filterByProduct), value, timeoutMs);
  }

  async expectFilterByProductChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.filterByProduct), timeoutMs);
  }

  async expectFilterByProductUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.filterByProduct), timeoutMs);
  }

  async expectFilterByProductFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.filterByProduct), timeoutMs);
  }

  async expectFilterByProductCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.filterByProduct), count, timeoutMs);
  }

  async clickTotalUtilisedLicenses(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses));
  }

  async doubleClickTotalUtilisedLicenses(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses));
  }

  async longPressTotalUtilisedLicenses(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses));
  }

  async expectTotalUtilisedLicensesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), value, timeoutMs);
  }

  async expectTotalUtilisedLicensesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), timeoutMs);
  }

  async expectTotalUtilisedLicensesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), timeoutMs);
  }

  async expectTotalUtilisedLicensesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), timeoutMs);
  }

  async expectTotalUtilisedLicensesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), timeoutMs);
  }

  async expectTotalUtilisedLicensesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), timeoutMs);
  }

  async expectTotalUtilisedLicensesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.totalUtilisedLicenses), count, timeoutMs);
  }

  async clickElement6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element6));
  }

  async doubleClickElement6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element6));
  }

  async longPressElement6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.element6));
  }

  async expectElement6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.element6), value, timeoutMs);
  }

  async expectElement6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.element6), timeoutMs);
  }

  async expectElement6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.element6), timeoutMs);
  }

  async expectElement6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.element6), timeoutMs);
  }

  async expectElement6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.element6), timeoutMs);
  }

  async expectElement6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.element6), timeoutMs);
  }

  async expectElement6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.element6), count, timeoutMs);
  }

  async clickContractHealth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.contractHealth));
  }

  async doubleClickContractHealth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.contractHealth));
  }

  async longPressContractHealth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.contractHealth));
  }

  async expectContractHealthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.contractHealth), value, timeoutMs);
  }

  async expectContractHealthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.contractHealth), timeoutMs);
  }

  async expectContractHealthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.contractHealth), timeoutMs);
  }

  async expectContractHealthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.contractHealth), timeoutMs);
  }

  async expectContractHealthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.contractHealth), timeoutMs);
  }

  async expectContractHealthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.contractHealth), timeoutMs);
  }

  async expectContractHealthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.contractHealth), count, timeoutMs);
  }

  async clickActiveContracts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.activeContracts));
  }

  async doubleClickActiveContracts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.activeContracts));
  }

  async longPressActiveContracts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.activeContracts));
  }

  async expectActiveContractsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.activeContracts), value, timeoutMs);
  }

  async expectActiveContractsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.activeContracts), timeoutMs);
  }

  async expectActiveContractsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.activeContracts), timeoutMs);
  }

  async expectActiveContractsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.activeContracts), timeoutMs);
  }

  async expectActiveContractsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.activeContracts), timeoutMs);
  }

  async expectActiveContractsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.activeContracts), timeoutMs);
  }

  async expectActiveContractsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.activeContracts), count, timeoutMs);
  }

  async clickPendingSignature(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.pendingSignature));
  }

  async doubleClickPendingSignature(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.pendingSignature));
  }

  async longPressPendingSignature(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.pendingSignature));
  }

  async expectPendingSignatureValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.pendingSignature), value, timeoutMs);
  }

  async expectPendingSignatureEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.pendingSignature), timeoutMs);
  }

  async expectPendingSignatureDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.pendingSignature), timeoutMs);
  }

  async expectPendingSignatureChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.pendingSignature), timeoutMs);
  }

  async expectPendingSignatureUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.pendingSignature), timeoutMs);
  }

  async expectPendingSignatureFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.pendingSignature), timeoutMs);
  }

  async expectPendingSignatureCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.pendingSignature), count, timeoutMs);
  }

  async clickExpiringContracts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.expiringContracts));
  }

  async doubleClickExpiringContracts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.expiringContracts));
  }

  async longPressExpiringContracts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.expiringContracts));
  }

  async expectExpiringContractsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.expiringContracts), value, timeoutMs);
  }

  async expectExpiringContractsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.expiringContracts), timeoutMs);
  }

  async expectExpiringContractsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.expiringContracts), timeoutMs);
  }

  async expectExpiringContractsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.expiringContracts), timeoutMs);
  }

  async expectExpiringContractsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.expiringContracts), timeoutMs);
  }

  async expectExpiringContractsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.expiringContracts), timeoutMs);
  }

  async expectExpiringContractsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.expiringContracts), count, timeoutMs);
  }

  async clickNoteForUpdation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.noteForUpdation));
  }

  async doubleClickNoteForUpdation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.noteForUpdation));
  }

  async longPressNoteForUpdation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.noteForUpdation));
  }

  async expectNoteForUpdationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), value, timeoutMs);
  }

  async expectNoteForUpdationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), timeoutMs);
  }

  async expectNoteForUpdationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), timeoutMs);
  }

  async expectNoteForUpdationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), timeoutMs);
  }

  async expectNoteForUpdationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), timeoutMs);
  }

  async expectNoteForUpdationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), timeoutMs);
  }

  async expectNoteForUpdationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.noteForUpdation), count, timeoutMs);
  }

  async clickSignedPending(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.signedPending));
  }

  async doubleClickSignedPending(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.signedPending));
  }

  async longPressSignedPending(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.signedPending));
  }

  async expectSignedPendingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.signedPending), value, timeoutMs);
  }

  async expectSignedPendingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.signedPending), timeoutMs);
  }

  async expectSignedPendingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.signedPending), timeoutMs);
  }

  async expectSignedPendingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.signedPending), timeoutMs);
  }

  async expectSignedPendingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.signedPending), timeoutMs);
  }

  async expectSignedPendingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.signedPending), timeoutMs);
  }

  async expectSignedPendingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.signedPending), count, timeoutMs);
  }

  async clickUkgProEmployeeVoice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgProEmployeeVoice));
  }

  async doubleClickUkgProEmployeeVoice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgProEmployeeVoice));
  }

  async longPressUkgProEmployeeVoice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.ukgProEmployeeVoice));
  }

  async expectUkgProEmployeeVoiceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.ukgProEmployeeVoice), value, timeoutMs);
  }

  async expectUkgProEmployeeVoiceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.ukgProEmployeeVoice), timeoutMs);
  }

  async expectUkgProEmployeeVoiceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.ukgProEmployeeVoice), timeoutMs);
  }

  async expectUkgProEmployeeVoiceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.ukgProEmployeeVoice), timeoutMs);
  }

  async expectUkgProEmployeeVoiceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.ukgProEmployeeVoice), timeoutMs);
  }

  async expectUkgProEmployeeVoiceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.ukgProEmployeeVoice), timeoutMs);
  }

  async expectUkgProEmployeeVoiceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.ukgProEmployeeVoice), count, timeoutMs);
  }

  async clickElement7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element7));
  }

  async doubleClickElement7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.element7));
  }

  async longPressElement7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.element7));
  }

  async expectElement7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.element7), value, timeoutMs);
  }

  async expectElement7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.element7), timeoutMs);
  }

  async expectElement7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.element7), timeoutMs);
  }

  async expectElement7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.element7), timeoutMs);
  }

  async expectElement7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.element7), timeoutMs);
  }

  async expectElement7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.element7), timeoutMs);
  }

  async expectElement7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.element7), count, timeoutMs);
  }

  async clickSolEmplVoc001(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.solEmplVoc001));
  }

  async doubleClickSolEmplVoc001(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.solEmplVoc001));
  }

  async longPressSolEmplVoc001(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.solEmplVoc001));
  }

  async expectSolEmplVoc001Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.solEmplVoc001), value, timeoutMs);
  }

  async expectSolEmplVoc001Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.solEmplVoc001), timeoutMs);
  }

  async expectSolEmplVoc001Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.solEmplVoc001), timeoutMs);
  }

  async expectSolEmplVoc001Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.solEmplVoc001), timeoutMs);
  }

  async expectSolEmplVoc001Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.solEmplVoc001), timeoutMs);
  }

  async expectSolEmplVoc001Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.solEmplVoc001), timeoutMs);
  }

  async expectSolEmplVoc001Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.solEmplVoc001), count, timeoutMs);
  }

  async clickRechartsMeasurementSpan(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan));
  }

  async doubleClickRechartsMeasurementSpan(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan));
  }

  async longPressRechartsMeasurementSpan(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan));
  }

  async expectRechartsMeasurementSpanValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), value, timeoutMs);
  }

  async expectRechartsMeasurementSpanEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), timeoutMs);
  }

  async expectRechartsMeasurementSpanCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SubscriptionsPage.L.rechartsMeasurementSpan), count, timeoutMs);
  }

}

import type { Page } from "@playwright/test";
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

export class OverviewPage {
  private static readonly L = {
    goodNightEmma: { strategy: 'text' as const, value: 'Good night, Emma 👋', actionKind: 'text' as const },
    overviewAskUkgAssist: { strategy: 'text' as const, value: 'Overview: ask UKG Assist about billing,', actionKind: 'text' as const },
    expirationAhead: { strategy: 'text' as const, value: 'Expiration Ahead', actionKind: 'text' as const },
    ukgProSubscriptionIs: { strategy: 'text' as const, value: 'UKG Pro Subscription is about to expire in next 18', actionKind: 'text' as const },
    renewSubscription: { strategy: 'role' as const, value: 'Renew Subscription', role: 'button', actionKind: 'button' as const },
    element: { strategy: 'text' as const, value: '1/2', actionKind: 'text' as const },
    previousAlert: { strategy: 'role' as const, value: 'Previous alert', role: 'button', actionKind: 'button' as const },
    nextAlert: { strategy: 'role' as const, value: 'Next alert', role: 'button', actionKind: 'button' as const },
    closeAlerts: { strategy: 'role' as const, value: 'Close alerts', role: 'button', actionKind: 'button' as const },
    messageUkgAssist: { strategy: 'role' as const, value: 'Message UKG Assist', role: 'textbox', actionKind: 'textbox' as const },
    sendMessage: { strategy: 'role' as const, value: 'Send message', role: 'button', actionKind: 'button' as const },
    aiSummary: { strategy: 'text' as const, value: 'AI Summary', actionKind: 'text' as const },
    beta: { strategy: 'text' as const, value: 'BETA', actionKind: 'text' as const },
    wasThisHelpful: { strategy: 'text' as const, value: 'Was this helpful?', actionKind: 'text' as const },
    helpful: { strategy: 'role' as const, value: 'Helpful', role: 'button', actionKind: 'button' as const },
    notHelpful: { strategy: 'role' as const, value: 'Not helpful', role: 'button', actionKind: 'button' as const },
    acmeCorpSAccountCarries: { strategy: 'text' as const, value: 'Acme Corp\'s account carries', actionKind: 'text' as const },
    elevatedRisk: { strategy: 'text' as const, value: 'elevated risk', actionKind: 'text' as const },
    backgroundRisk: { strategy: 'text' as const, value: 'background risk', actionKind: 'text' as const },
    notYetCriticalBut: { strategy: 'text' as const, value: '—not yet critical but trending toward overage if', actionKind: 'text' as const },
    seeMore: { strategy: 'role' as const, value: 'see more', role: 'button', actionKind: 'button' as const },
    synthesisedFromPortalActivity: { strategy: 'text' as const, value: 'Synthesised from portal activity across the last 7', actionKind: 'text' as const },
    viewDetails: { strategy: 'role' as const, value: 'View details', role: 'button', actionKind: 'button' as const },
    caseOpen: { strategy: 'text' as const, value: '1 Case open', actionKind: 'text' as const },
    highPriorityAwaiting: { strategy: 'text' as const, value: 'High priority · Awaiting response', actionKind: 'text' as const },
    billing: { strategy: 'text' as const, value: 'Billing', actionKind: 'text' as const },
    overdue: { strategy: 'text' as const, value: '$12,000 overdue', actionKind: 'text' as const },
    pastDue1: { strategy: 'text' as const, value: 'Past due · 1 invoice', actionKind: 'text' as const },
    renewal: { strategy: 'text' as const, value: 'Renewal', actionKind: 'text' as const },
    dimensionsIn8d: { strategy: 'text' as const, value: 'Dimensions in 8d', actionKind: 'text' as const },
    insightsRecommendations: { strategy: 'text' as const, value: 'Insights & Recommendations', actionKind: 'text' as const },
    prioritisedActionsFromYour: { strategy: 'text' as const, value: 'Prioritised actions from your live portal data—not', actionKind: 'text' as const },
    mediumImpact: { strategy: 'text' as const, value: 'Medium impact', actionKind: 'text' as const },
    rightSizeProWfmBefore: { strategy: 'text' as const, value: 'Right-size Pro WFM before invoice cycle', actionKind: 'text' as const },
    seatUtilisationIsAt: { strategy: 'text' as const, value: 'Seat utilisation is at 92% and trending up +8.4%', actionKind: 'text' as const },
    seeUsage: { strategy: 'role' as const, value: 'See usage', role: 'link', actionKind: 'link' as const },
    opportunity: { strategy: 'text' as const, value: 'Opportunity', actionKind: 'text' as const },
    acceleratePayrollInsightsAdoption: { strategy: 'text' as const, value: 'Accelerate Payroll Insights adoption', actionKind: 'text' as const },
    seeAdoption: { strategy: 'role' as const, value: 'See adoption', role: 'link', actionKind: 'link' as const },
    kbArticlesMatch2: { strategy: 'text' as const, value: 'KB articles match 2 open tickets', actionKind: 'text' as const },
    viewKbArticles: { strategy: 'role' as const, value: 'View KB articles', role: 'link', actionKind: 'link' as const },
    atlasRefreshesTheseSignals: { strategy: 'text' as const, value: 'Atlas refreshes these signals on a daily cadence.', actionKind: 'text' as const },
    suggestedQueries: { strategy: 'text' as const, value: 'Suggested Queries', actionKind: 'text' as const },
    tapAQueryTo: { strategy: 'text' as const, value: 'Tap a query to ask Atlas.', actionKind: 'text' as const },
    whyIsMyDimensions: { strategy: 'role' as const, value: 'Why is my Dimensions renewal urgent?', role: 'button', actionKind: 'button' as const },
    whatAreMyHigh: { strategy: 'role' as const, value: 'What are my high priority open support cases?', role: 'button', actionKind: 'button' as const },
    amIAtRisk: { strategy: 'role' as const, value: 'Am I at risk of Pro WFM overage this cycle?', role: 'button', actionKind: 'button' as const },
    howDoesTheOverdue: { strategy: 'role' as const, value: 'How does the overdue invoice affect my renewal?', role: 'button', actionKind: 'button' as const },
    ukgAssistCanMake: { strategy: 'text' as const, value: 'UKG Assist can make mistakes; verify answers.', actionKind: 'text' as const },
    whatWouldYouLike: { strategy: 'text' as const, value: 'What would you like to do?', actionKind: 'text' as const },
    viewOpenCases: { strategy: 'role' as const, value: 'View open cases', role: 'link', actionKind: 'link' as const },
    manageSubscriptions: { strategy: 'role' as const, value: 'Manage subscriptions', role: 'link', actionKind: 'link' as const },
    downloadInvoice: { strategy: 'role' as const, value: 'Download invoice', role: 'link', actionKind: 'link' as const },
    accountProfileLink: { strategy: 'role' as const, value: 'Account & profile', role: 'link', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextGoodNightEmma(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.goodNightEmma));
  }

  async expectGoodNightEmmaVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.goodNightEmma), timeoutMs);
  }

  async expectGoodNightEmmaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.goodNightEmma), timeoutMs);
  }

  async expectGoodNightEmmaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.goodNightEmma), expected, timeoutMs);
  }

  async expectGoodNightEmmaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.goodNightEmma), substring, timeoutMs);
  }

  async scrollGoodNightEmmaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.goodNightEmma));
  }

  async getInnerTextOverviewAskUkgAssist(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.overviewAskUkgAssist));
  }

  async expectOverviewAskUkgAssistVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.overviewAskUkgAssist), timeoutMs);
  }

  async expectOverviewAskUkgAssistHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.overviewAskUkgAssist), timeoutMs);
  }

  async expectOverviewAskUkgAssistText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.overviewAskUkgAssist), expected, timeoutMs);
  }

  async expectOverviewAskUkgAssistContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.overviewAskUkgAssist), substring, timeoutMs);
  }

  async scrollOverviewAskUkgAssistIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.overviewAskUkgAssist));
  }

  async getInnerTextExpirationAhead(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.expirationAhead));
  }

  async expectExpirationAheadVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.expirationAhead), timeoutMs);
  }

  async expectExpirationAheadHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.expirationAhead), timeoutMs);
  }

  async expectExpirationAheadText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.expirationAhead), expected, timeoutMs);
  }

  async expectExpirationAheadContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.expirationAhead), substring, timeoutMs);
  }

  async scrollExpirationAheadIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.expirationAhead));
  }

  async getInnerTextUkgProSubscriptionIs(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.ukgProSubscriptionIs));
  }

  async expectUkgProSubscriptionIsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.ukgProSubscriptionIs), timeoutMs);
  }

  async expectUkgProSubscriptionIsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.ukgProSubscriptionIs), timeoutMs);
  }

  async expectUkgProSubscriptionIsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.ukgProSubscriptionIs), expected, timeoutMs);
  }

  async expectUkgProSubscriptionIsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.ukgProSubscriptionIs), substring, timeoutMs);
  }

  async scrollUkgProSubscriptionIsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.ukgProSubscriptionIs));
  }

  async clickRenewSubscription(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.renewSubscription));
  }

  async doubleClickRenewSubscription(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.renewSubscription));
  }

  async expectRenewSubscriptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.renewSubscription), timeoutMs);
  }

  async expectRenewSubscriptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.renewSubscription), timeoutMs);
  }

  async expectRenewSubscriptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.renewSubscription), timeoutMs);
  }

  async expectRenewSubscriptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.renewSubscription), timeoutMs);
  }

  async expectRenewSubscriptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.renewSubscription), expected, timeoutMs);
  }

  async expectRenewSubscriptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.renewSubscription), substring, timeoutMs);
  }

  async scrollRenewSubscriptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.renewSubscription));
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.element), timeoutMs);
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.element), substring, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.element));
  }

  async clickPreviousAlert(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.previousAlert));
  }

  async doubleClickPreviousAlert(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.previousAlert));
  }

  async expectPreviousAlertVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.previousAlert), timeoutMs);
  }

  async expectPreviousAlertHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.previousAlert), timeoutMs);
  }

  async expectPreviousAlertEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.previousAlert), timeoutMs);
  }

  async expectPreviousAlertDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.previousAlert), timeoutMs);
  }

  async expectPreviousAlertText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.previousAlert), expected, timeoutMs);
  }

  async expectPreviousAlertContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.previousAlert), substring, timeoutMs);
  }

  async scrollPreviousAlertIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.previousAlert));
  }

  async clickNextAlert(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.nextAlert));
  }

  async doubleClickNextAlert(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.nextAlert));
  }

  async expectNextAlertVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.nextAlert), timeoutMs);
  }

  async expectNextAlertHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.nextAlert), timeoutMs);
  }

  async expectNextAlertEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.nextAlert), timeoutMs);
  }

  async expectNextAlertDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.nextAlert), timeoutMs);
  }

  async expectNextAlertText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.nextAlert), expected, timeoutMs);
  }

  async expectNextAlertContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.nextAlert), substring, timeoutMs);
  }

  async scrollNextAlertIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.nextAlert));
  }

  async clickCloseAlerts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.closeAlerts));
  }

  async doubleClickCloseAlerts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.closeAlerts));
  }

  async expectCloseAlertsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.closeAlerts), expected, timeoutMs);
  }

  async expectCloseAlertsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.closeAlerts), substring, timeoutMs);
  }

  async scrollCloseAlertsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.closeAlerts));
  }

  async fillMessageUkgAssist(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, OverviewPage.L.messageUkgAssist), value);
  }

  async clearMessageUkgAssist(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, OverviewPage.L.messageUkgAssist));
  }

  async typeTextMessageUkgAssist(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, OverviewPage.L.messageUkgAssist), value);
  }

  async expectMessageUkgAssistVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.messageUkgAssist), timeoutMs);
  }

  async expectMessageUkgAssistHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.messageUkgAssist), timeoutMs);
  }

  async expectMessageUkgAssistEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.messageUkgAssist), timeoutMs);
  }

  async expectMessageUkgAssistDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.messageUkgAssist), timeoutMs);
  }

  async expectMessageUkgAssistValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.messageUkgAssist), expected, timeoutMs);
  }

  async expectMessageUkgAssistFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.messageUkgAssist), timeoutMs);
  }

  async scrollMessageUkgAssistIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.messageUkgAssist));
  }

  async clickSendMessage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.sendMessage));
  }

  async doubleClickSendMessage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.sendMessage));
  }

  async expectSendMessageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.sendMessage), expected, timeoutMs);
  }

  async expectSendMessageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.sendMessage), substring, timeoutMs);
  }

  async scrollSendMessageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.sendMessage));
  }

  async getInnerTextAiSummary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.aiSummary));
  }

  async expectAiSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.aiSummary), timeoutMs);
  }

  async expectAiSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.aiSummary), timeoutMs);
  }

  async expectAiSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.aiSummary), expected, timeoutMs);
  }

  async expectAiSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.aiSummary), substring, timeoutMs);
  }

  async scrollAiSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.aiSummary));
  }

  async getInnerTextBeta(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.beta));
  }

  async expectBetaVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.beta), timeoutMs);
  }

  async expectBetaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.beta), timeoutMs);
  }

  async expectBetaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.beta), expected, timeoutMs);
  }

  async expectBetaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.beta), substring, timeoutMs);
  }

  async scrollBetaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.beta));
  }

  async getInnerTextWasThisHelpful(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.wasThisHelpful));
  }

  async expectWasThisHelpfulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.wasThisHelpful), expected, timeoutMs);
  }

  async expectWasThisHelpfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.wasThisHelpful), substring, timeoutMs);
  }

  async scrollWasThisHelpfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.wasThisHelpful));
  }

  async clickHelpful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.helpful));
  }

  async doubleClickHelpful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.helpful));
  }

  async expectHelpfulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.helpful), timeoutMs);
  }

  async expectHelpfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.helpful), timeoutMs);
  }

  async expectHelpfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.helpful), timeoutMs);
  }

  async expectHelpfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.helpful), timeoutMs);
  }

  async expectHelpfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.helpful), expected, timeoutMs);
  }

  async expectHelpfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.helpful), substring, timeoutMs);
  }

  async scrollHelpfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.helpful));
  }

  async clickNotHelpful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.notHelpful));
  }

  async doubleClickNotHelpful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.notHelpful));
  }

  async expectNotHelpfulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.notHelpful), expected, timeoutMs);
  }

  async expectNotHelpfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.notHelpful), substring, timeoutMs);
  }

  async scrollNotHelpfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.notHelpful));
  }

  async getInnerTextAcmeCorpSAccountCarries(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.acmeCorpSAccountCarries));
  }

  async expectAcmeCorpSAccountCarriesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.acmeCorpSAccountCarries), timeoutMs);
  }

  async expectAcmeCorpSAccountCarriesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.acmeCorpSAccountCarries), timeoutMs);
  }

  async expectAcmeCorpSAccountCarriesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.acmeCorpSAccountCarries), expected, timeoutMs);
  }

  async expectAcmeCorpSAccountCarriesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.acmeCorpSAccountCarries), substring, timeoutMs);
  }

  async scrollAcmeCorpSAccountCarriesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.acmeCorpSAccountCarries));
  }

  async getInnerTextElevatedRisk(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.elevatedRisk));
  }

  async expectElevatedRiskVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.elevatedRisk), timeoutMs);
  }

  async expectElevatedRiskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.elevatedRisk), timeoutMs);
  }

  async expectElevatedRiskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.elevatedRisk), expected, timeoutMs);
  }

  async expectElevatedRiskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.elevatedRisk), substring, timeoutMs);
  }

  async scrollElevatedRiskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.elevatedRisk));
  }

  async getInnerTextBackgroundRisk(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.backgroundRisk));
  }

  async expectBackgroundRiskVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.backgroundRisk), timeoutMs);
  }

  async expectBackgroundRiskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.backgroundRisk), timeoutMs);
  }

  async expectBackgroundRiskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.backgroundRisk), expected, timeoutMs);
  }

  async expectBackgroundRiskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.backgroundRisk), substring, timeoutMs);
  }

  async scrollBackgroundRiskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.backgroundRisk));
  }

  async getInnerTextNotYetCriticalBut(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.notYetCriticalBut));
  }

  async expectNotYetCriticalButVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.notYetCriticalBut), timeoutMs);
  }

  async expectNotYetCriticalButHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.notYetCriticalBut), timeoutMs);
  }

  async expectNotYetCriticalButText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.notYetCriticalBut), expected, timeoutMs);
  }

  async expectNotYetCriticalButContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.notYetCriticalBut), substring, timeoutMs);
  }

  async scrollNotYetCriticalButIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.notYetCriticalBut));
  }

  async clickSeeMore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.seeMore));
  }

  async doubleClickSeeMore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.seeMore));
  }

  async expectSeeMoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.seeMore), timeoutMs);
  }

  async expectSeeMoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.seeMore), timeoutMs);
  }

  async expectSeeMoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.seeMore), timeoutMs);
  }

  async expectSeeMoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.seeMore), timeoutMs);
  }

  async expectSeeMoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.seeMore), expected, timeoutMs);
  }

  async expectSeeMoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.seeMore), substring, timeoutMs);
  }

  async scrollSeeMoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.seeMore));
  }

  async getInnerTextSynthesisedFromPortalActivity(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.synthesisedFromPortalActivity));
  }

  async expectSynthesisedFromPortalActivityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.synthesisedFromPortalActivity), timeoutMs);
  }

  async expectSynthesisedFromPortalActivityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.synthesisedFromPortalActivity), timeoutMs);
  }

  async expectSynthesisedFromPortalActivityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.synthesisedFromPortalActivity), expected, timeoutMs);
  }

  async expectSynthesisedFromPortalActivityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.synthesisedFromPortalActivity), substring, timeoutMs);
  }

  async scrollSynthesisedFromPortalActivityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.synthesisedFromPortalActivity));
  }

  async clickViewDetails(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.viewDetails));
  }

  async doubleClickViewDetails(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.viewDetails));
  }

  async expectViewDetailsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.viewDetails), timeoutMs);
  }

  async expectViewDetailsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.viewDetails), timeoutMs);
  }

  async expectViewDetailsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.viewDetails), timeoutMs);
  }

  async expectViewDetailsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.viewDetails), timeoutMs);
  }

  async expectViewDetailsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.viewDetails), expected, timeoutMs);
  }

  async expectViewDetailsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.viewDetails), substring, timeoutMs);
  }

  async scrollViewDetailsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.viewDetails));
  }

  async getInnerTextCaseOpen(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.caseOpen));
  }

  async expectCaseOpenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.caseOpen), timeoutMs);
  }

  async expectCaseOpenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.caseOpen), timeoutMs);
  }

  async expectCaseOpenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.caseOpen), expected, timeoutMs);
  }

  async expectCaseOpenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.caseOpen), substring, timeoutMs);
  }

  async scrollCaseOpenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.caseOpen));
  }

  async getInnerTextHighPriorityAwaiting(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.highPriorityAwaiting));
  }

  async expectHighPriorityAwaitingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.highPriorityAwaiting), timeoutMs);
  }

  async expectHighPriorityAwaitingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.highPriorityAwaiting), timeoutMs);
  }

  async expectHighPriorityAwaitingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.highPriorityAwaiting), expected, timeoutMs);
  }

  async expectHighPriorityAwaitingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.highPriorityAwaiting), substring, timeoutMs);
  }

  async scrollHighPriorityAwaitingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.highPriorityAwaiting));
  }

  async getInnerTextBilling(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.billing));
  }

  async expectBillingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.billing), timeoutMs);
  }

  async expectBillingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.billing), timeoutMs);
  }

  async expectBillingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.billing), expected, timeoutMs);
  }

  async expectBillingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.billing), substring, timeoutMs);
  }

  async scrollBillingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.billing));
  }

  async getInnerTextOverdue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.overdue));
  }

  async expectOverdueVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.overdue), timeoutMs);
  }

  async expectOverdueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.overdue), timeoutMs);
  }

  async expectOverdueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.overdue), expected, timeoutMs);
  }

  async expectOverdueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.overdue), substring, timeoutMs);
  }

  async scrollOverdueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.overdue));
  }

  async getInnerTextPastDue1(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.pastDue1));
  }

  async expectPastDue1Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.pastDue1), timeoutMs);
  }

  async expectPastDue1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.pastDue1), timeoutMs);
  }

  async expectPastDue1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.pastDue1), expected, timeoutMs);
  }

  async expectPastDue1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.pastDue1), substring, timeoutMs);
  }

  async scrollPastDue1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.pastDue1));
  }

  async getInnerTextRenewal(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.renewal));
  }

  async expectRenewalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.renewal), timeoutMs);
  }

  async expectRenewalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.renewal), timeoutMs);
  }

  async expectRenewalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.renewal), expected, timeoutMs);
  }

  async expectRenewalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.renewal), substring, timeoutMs);
  }

  async scrollRenewalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.renewal));
  }

  async getInnerTextDimensionsIn8d(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.dimensionsIn8d));
  }

  async expectDimensionsIn8dVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.dimensionsIn8d), timeoutMs);
  }

  async expectDimensionsIn8dHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.dimensionsIn8d), timeoutMs);
  }

  async expectDimensionsIn8dText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.dimensionsIn8d), expected, timeoutMs);
  }

  async expectDimensionsIn8dContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.dimensionsIn8d), substring, timeoutMs);
  }

  async scrollDimensionsIn8dIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.dimensionsIn8d));
  }

  async getInnerTextInsightsRecommendations(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.insightsRecommendations));
  }

  async expectInsightsRecommendationsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.insightsRecommendations), timeoutMs);
  }

  async expectInsightsRecommendationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.insightsRecommendations), timeoutMs);
  }

  async expectInsightsRecommendationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.insightsRecommendations), expected, timeoutMs);
  }

  async expectInsightsRecommendationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.insightsRecommendations), substring, timeoutMs);
  }

  async scrollInsightsRecommendationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.insightsRecommendations));
  }

  async getInnerTextPrioritisedActionsFromYour(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.prioritisedActionsFromYour));
  }

  async expectPrioritisedActionsFromYourVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.prioritisedActionsFromYour), timeoutMs);
  }

  async expectPrioritisedActionsFromYourHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.prioritisedActionsFromYour), timeoutMs);
  }

  async expectPrioritisedActionsFromYourText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.prioritisedActionsFromYour), expected, timeoutMs);
  }

  async expectPrioritisedActionsFromYourContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.prioritisedActionsFromYour), substring, timeoutMs);
  }

  async scrollPrioritisedActionsFromYourIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.prioritisedActionsFromYour));
  }

  async getInnerTextMediumImpact(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.mediumImpact));
  }

  async expectMediumImpactVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.mediumImpact), timeoutMs);
  }

  async expectMediumImpactHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.mediumImpact), timeoutMs);
  }

  async expectMediumImpactText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.mediumImpact), expected, timeoutMs);
  }

  async expectMediumImpactContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.mediumImpact), substring, timeoutMs);
  }

  async scrollMediumImpactIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.mediumImpact));
  }

  async getInnerTextRightSizeProWfmBefore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.rightSizeProWfmBefore));
  }

  async expectRightSizeProWfmBeforeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.rightSizeProWfmBefore), timeoutMs);
  }

  async expectRightSizeProWfmBeforeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.rightSizeProWfmBefore), timeoutMs);
  }

  async expectRightSizeProWfmBeforeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.rightSizeProWfmBefore), expected, timeoutMs);
  }

  async expectRightSizeProWfmBeforeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.rightSizeProWfmBefore), substring, timeoutMs);
  }

  async scrollRightSizeProWfmBeforeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.rightSizeProWfmBefore));
  }

  async getInnerTextSeatUtilisationIsAt(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.seatUtilisationIsAt));
  }

  async expectSeatUtilisationIsAtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.seatUtilisationIsAt), timeoutMs);
  }

  async expectSeatUtilisationIsAtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.seatUtilisationIsAt), timeoutMs);
  }

  async expectSeatUtilisationIsAtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.seatUtilisationIsAt), expected, timeoutMs);
  }

  async expectSeatUtilisationIsAtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.seatUtilisationIsAt), substring, timeoutMs);
  }

  async scrollSeatUtilisationIsAtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.seatUtilisationIsAt));
  }

  async clickSeeUsage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.seeUsage));
  }

  async doubleClickSeeUsage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.seeUsage));
  }

  async expectSeeUsageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.seeUsage), timeoutMs);
  }

  async expectSeeUsageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.seeUsage), timeoutMs);
  }

  async expectSeeUsageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.seeUsage), expected, timeoutMs);
  }

  async expectSeeUsageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.seeUsage), substring, timeoutMs);
  }

  async scrollSeeUsageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.seeUsage));
  }

  async getInnerTextOpportunity(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.opportunity));
  }

  async expectOpportunityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.opportunity), timeoutMs);
  }

  async expectOpportunityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.opportunity), timeoutMs);
  }

  async expectOpportunityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.opportunity), expected, timeoutMs);
  }

  async expectOpportunityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.opportunity), substring, timeoutMs);
  }

  async scrollOpportunityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.opportunity));
  }

  async getInnerTextAcceleratePayrollInsightsAdoption(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.acceleratePayrollInsightsAdoption));
  }

  async expectAcceleratePayrollInsightsAdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.acceleratePayrollInsightsAdoption), timeoutMs);
  }

  async expectAcceleratePayrollInsightsAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.acceleratePayrollInsightsAdoption), timeoutMs);
  }

  async expectAcceleratePayrollInsightsAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.acceleratePayrollInsightsAdoption), expected, timeoutMs);
  }

  async expectAcceleratePayrollInsightsAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.acceleratePayrollInsightsAdoption), substring, timeoutMs);
  }

  async scrollAcceleratePayrollInsightsAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.acceleratePayrollInsightsAdoption));
  }

  async clickSeeAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.seeAdoption));
  }

  async doubleClickSeeAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.seeAdoption));
  }

  async expectSeeAdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.seeAdoption), timeoutMs);
  }

  async expectSeeAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.seeAdoption), timeoutMs);
  }

  async expectSeeAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.seeAdoption), expected, timeoutMs);
  }

  async expectSeeAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.seeAdoption), substring, timeoutMs);
  }

  async scrollSeeAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.seeAdoption));
  }

  async getInnerTextKbArticlesMatch2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.kbArticlesMatch2));
  }

  async expectKbArticlesMatch2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.kbArticlesMatch2), timeoutMs);
  }

  async expectKbArticlesMatch2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.kbArticlesMatch2), timeoutMs);
  }

  async expectKbArticlesMatch2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.kbArticlesMatch2), expected, timeoutMs);
  }

  async expectKbArticlesMatch2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.kbArticlesMatch2), substring, timeoutMs);
  }

  async scrollKbArticlesMatch2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.kbArticlesMatch2));
  }

  async clickViewKbArticles(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.viewKbArticles));
  }

  async doubleClickViewKbArticles(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.viewKbArticles));
  }

  async expectViewKbArticlesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.viewKbArticles), timeoutMs);
  }

  async expectViewKbArticlesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.viewKbArticles), timeoutMs);
  }

  async expectViewKbArticlesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.viewKbArticles), expected, timeoutMs);
  }

  async expectViewKbArticlesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.viewKbArticles), substring, timeoutMs);
  }

  async scrollViewKbArticlesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.viewKbArticles));
  }

  async getInnerTextAtlasRefreshesTheseSignals(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.atlasRefreshesTheseSignals));
  }

  async expectAtlasRefreshesTheseSignalsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.atlasRefreshesTheseSignals), timeoutMs);
  }

  async expectAtlasRefreshesTheseSignalsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.atlasRefreshesTheseSignals), timeoutMs);
  }

  async expectAtlasRefreshesTheseSignalsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.atlasRefreshesTheseSignals), expected, timeoutMs);
  }

  async expectAtlasRefreshesTheseSignalsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.atlasRefreshesTheseSignals), substring, timeoutMs);
  }

  async scrollAtlasRefreshesTheseSignalsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.atlasRefreshesTheseSignals));
  }

  async getInnerTextSuggestedQueries(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.suggestedQueries));
  }

  async expectSuggestedQueriesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.suggestedQueries), timeoutMs);
  }

  async expectSuggestedQueriesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.suggestedQueries), timeoutMs);
  }

  async expectSuggestedQueriesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.suggestedQueries), expected, timeoutMs);
  }

  async expectSuggestedQueriesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.suggestedQueries), substring, timeoutMs);
  }

  async scrollSuggestedQueriesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.suggestedQueries));
  }

  async getInnerTextTapAQueryTo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.tapAQueryTo));
  }

  async expectTapAQueryToVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.tapAQueryTo), timeoutMs);
  }

  async expectTapAQueryToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.tapAQueryTo), timeoutMs);
  }

  async expectTapAQueryToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.tapAQueryTo), expected, timeoutMs);
  }

  async expectTapAQueryToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.tapAQueryTo), substring, timeoutMs);
  }

  async scrollTapAQueryToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.tapAQueryTo));
  }

  async clickWhyIsMyDimensions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.whyIsMyDimensions));
  }

  async doubleClickWhyIsMyDimensions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.whyIsMyDimensions));
  }

  async expectWhyIsMyDimensionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.whyIsMyDimensions), timeoutMs);
  }

  async expectWhyIsMyDimensionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.whyIsMyDimensions), timeoutMs);
  }

  async expectWhyIsMyDimensionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.whyIsMyDimensions), timeoutMs);
  }

  async expectWhyIsMyDimensionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.whyIsMyDimensions), timeoutMs);
  }

  async expectWhyIsMyDimensionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.whyIsMyDimensions), expected, timeoutMs);
  }

  async expectWhyIsMyDimensionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.whyIsMyDimensions), substring, timeoutMs);
  }

  async scrollWhyIsMyDimensionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.whyIsMyDimensions));
  }

  async clickWhatAreMyHigh(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.whatAreMyHigh));
  }

  async doubleClickWhatAreMyHigh(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.whatAreMyHigh));
  }

  async expectWhatAreMyHighVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.whatAreMyHigh), timeoutMs);
  }

  async expectWhatAreMyHighHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.whatAreMyHigh), timeoutMs);
  }

  async expectWhatAreMyHighEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.whatAreMyHigh), timeoutMs);
  }

  async expectWhatAreMyHighDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.whatAreMyHigh), timeoutMs);
  }

  async expectWhatAreMyHighText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.whatAreMyHigh), expected, timeoutMs);
  }

  async expectWhatAreMyHighContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.whatAreMyHigh), substring, timeoutMs);
  }

  async scrollWhatAreMyHighIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.whatAreMyHigh));
  }

  async clickAmIAtRisk(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.amIAtRisk));
  }

  async doubleClickAmIAtRisk(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.amIAtRisk));
  }

  async expectAmIAtRiskVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.amIAtRisk), timeoutMs);
  }

  async expectAmIAtRiskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.amIAtRisk), timeoutMs);
  }

  async expectAmIAtRiskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.amIAtRisk), timeoutMs);
  }

  async expectAmIAtRiskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.amIAtRisk), timeoutMs);
  }

  async expectAmIAtRiskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.amIAtRisk), expected, timeoutMs);
  }

  async expectAmIAtRiskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.amIAtRisk), substring, timeoutMs);
  }

  async scrollAmIAtRiskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.amIAtRisk));
  }

  async clickHowDoesTheOverdue(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.howDoesTheOverdue));
  }

  async doubleClickHowDoesTheOverdue(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.howDoesTheOverdue));
  }

  async expectHowDoesTheOverdueVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.howDoesTheOverdue), timeoutMs);
  }

  async expectHowDoesTheOverdueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.howDoesTheOverdue), timeoutMs);
  }

  async expectHowDoesTheOverdueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.howDoesTheOverdue), timeoutMs);
  }

  async expectHowDoesTheOverdueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.howDoesTheOverdue), timeoutMs);
  }

  async expectHowDoesTheOverdueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.howDoesTheOverdue), expected, timeoutMs);
  }

  async expectHowDoesTheOverdueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.howDoesTheOverdue), substring, timeoutMs);
  }

  async scrollHowDoesTheOverdueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.howDoesTheOverdue));
  }

  async getInnerTextUkgAssistCanMake(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.ukgAssistCanMake));
  }

  async expectUkgAssistCanMakeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.ukgAssistCanMake), timeoutMs);
  }

  async expectUkgAssistCanMakeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.ukgAssistCanMake), timeoutMs);
  }

  async expectUkgAssistCanMakeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.ukgAssistCanMake), expected, timeoutMs);
  }

  async expectUkgAssistCanMakeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.ukgAssistCanMake), substring, timeoutMs);
  }

  async scrollUkgAssistCanMakeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.ukgAssistCanMake));
  }

  async getInnerTextWhatWouldYouLike(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.whatWouldYouLike));
  }

  async expectWhatWouldYouLikeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.whatWouldYouLike), timeoutMs);
  }

  async expectWhatWouldYouLikeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.whatWouldYouLike), timeoutMs);
  }

  async expectWhatWouldYouLikeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.whatWouldYouLike), expected, timeoutMs);
  }

  async expectWhatWouldYouLikeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.whatWouldYouLike), substring, timeoutMs);
  }

  async scrollWhatWouldYouLikeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.whatWouldYouLike));
  }

  async clickViewOpenCases(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.viewOpenCases));
  }

  async doubleClickViewOpenCases(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.viewOpenCases));
  }

  async expectViewOpenCasesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.viewOpenCases), timeoutMs);
  }

  async expectViewOpenCasesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.viewOpenCases), timeoutMs);
  }

  async expectViewOpenCasesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.viewOpenCases), expected, timeoutMs);
  }

  async expectViewOpenCasesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.viewOpenCases), substring, timeoutMs);
  }

  async scrollViewOpenCasesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.viewOpenCases));
  }

  async clickManageSubscriptions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.manageSubscriptions));
  }

  async doubleClickManageSubscriptions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.manageSubscriptions));
  }

  async expectManageSubscriptionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.manageSubscriptions), timeoutMs);
  }

  async expectManageSubscriptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.manageSubscriptions), timeoutMs);
  }

  async expectManageSubscriptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.manageSubscriptions), expected, timeoutMs);
  }

  async expectManageSubscriptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.manageSubscriptions), substring, timeoutMs);
  }

  async scrollManageSubscriptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.manageSubscriptions));
  }

  async clickDownloadInvoice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.downloadInvoice));
  }

  async doubleClickDownloadInvoice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.downloadInvoice));
  }

  async expectDownloadInvoiceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.downloadInvoice), timeoutMs);
  }

  async expectDownloadInvoiceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.downloadInvoice), timeoutMs);
  }

  async expectDownloadInvoiceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.downloadInvoice), expected, timeoutMs);
  }

  async expectDownloadInvoiceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.downloadInvoice), substring, timeoutMs);
  }

  async scrollDownloadInvoiceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.downloadInvoice));
  }

  async clickAccountProfileLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.accountProfileLink));
  }

  async doubleClickAccountProfileLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.accountProfileLink));
  }

  async expectAccountProfileLinkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.accountProfileLink), timeoutMs);
  }

  async expectAccountProfileLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.accountProfileLink), timeoutMs);
  }

  async expectAccountProfileLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.accountProfileLink), expected, timeoutMs);
  }

  async expectAccountProfileLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.accountProfileLink), substring, timeoutMs);
  }

  async scrollAccountProfileLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.accountProfileLink));
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


  async clickGoodNightEmma(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.goodNightEmma));
  }

  async doubleClickGoodNightEmma(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.goodNightEmma));
  }

  async longPressGoodNightEmma(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.goodNightEmma));
  }

  async expectGoodNightEmmaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.goodNightEmma), value, timeoutMs);
  }

  async expectGoodNightEmmaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.goodNightEmma), timeoutMs);
  }

  async expectGoodNightEmmaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.goodNightEmma), timeoutMs);
  }

  async expectGoodNightEmmaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.goodNightEmma), timeoutMs);
  }

  async expectGoodNightEmmaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.goodNightEmma), timeoutMs);
  }

  async expectGoodNightEmmaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.goodNightEmma), timeoutMs);
  }

  async expectGoodNightEmmaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.goodNightEmma), count, timeoutMs);
  }

  async clickOverviewAskUkgAssist(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.overviewAskUkgAssist));
  }

  async doubleClickOverviewAskUkgAssist(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.overviewAskUkgAssist));
  }

  async longPressOverviewAskUkgAssist(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.overviewAskUkgAssist));
  }

  async expectOverviewAskUkgAssistValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.overviewAskUkgAssist), value, timeoutMs);
  }

  async expectOverviewAskUkgAssistEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.overviewAskUkgAssist), timeoutMs);
  }

  async expectOverviewAskUkgAssistDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.overviewAskUkgAssist), timeoutMs);
  }

  async expectOverviewAskUkgAssistChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.overviewAskUkgAssist), timeoutMs);
  }

  async expectOverviewAskUkgAssistUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.overviewAskUkgAssist), timeoutMs);
  }

  async expectOverviewAskUkgAssistFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.overviewAskUkgAssist), timeoutMs);
  }

  async expectOverviewAskUkgAssistCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.overviewAskUkgAssist), count, timeoutMs);
  }

  async clickExpirationAhead(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.expirationAhead));
  }

  async doubleClickExpirationAhead(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.expirationAhead));
  }

  async longPressExpirationAhead(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.expirationAhead));
  }

  async expectExpirationAheadValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.expirationAhead), value, timeoutMs);
  }

  async expectExpirationAheadEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.expirationAhead), timeoutMs);
  }

  async expectExpirationAheadDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.expirationAhead), timeoutMs);
  }

  async expectExpirationAheadChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.expirationAhead), timeoutMs);
  }

  async expectExpirationAheadUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.expirationAhead), timeoutMs);
  }

  async expectExpirationAheadFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.expirationAhead), timeoutMs);
  }

  async expectExpirationAheadCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.expirationAhead), count, timeoutMs);
  }

  async clickUkgProSubscriptionIs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.ukgProSubscriptionIs));
  }

  async doubleClickUkgProSubscriptionIs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.ukgProSubscriptionIs));
  }

  async longPressUkgProSubscriptionIs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.ukgProSubscriptionIs));
  }

  async expectUkgProSubscriptionIsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.ukgProSubscriptionIs), value, timeoutMs);
  }

  async expectUkgProSubscriptionIsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.ukgProSubscriptionIs), timeoutMs);
  }

  async expectUkgProSubscriptionIsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.ukgProSubscriptionIs), timeoutMs);
  }

  async expectUkgProSubscriptionIsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.ukgProSubscriptionIs), timeoutMs);
  }

  async expectUkgProSubscriptionIsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.ukgProSubscriptionIs), timeoutMs);
  }

  async expectUkgProSubscriptionIsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.ukgProSubscriptionIs), timeoutMs);
  }

  async expectUkgProSubscriptionIsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.ukgProSubscriptionIs), count, timeoutMs);
  }

  async longPressRenewSubscription(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.renewSubscription));
  }

  async expectRenewSubscriptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.renewSubscription), value, timeoutMs);
  }

  async expectRenewSubscriptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.renewSubscription), timeoutMs);
  }

  async expectRenewSubscriptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.renewSubscription), timeoutMs);
  }

  async expectRenewSubscriptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.renewSubscription), timeoutMs);
  }

  async expectRenewSubscriptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.renewSubscription), count, timeoutMs);
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.element));
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.element), count, timeoutMs);
  }

  async longPressPreviousAlert(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.previousAlert));
  }

  async expectPreviousAlertValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.previousAlert), value, timeoutMs);
  }

  async expectPreviousAlertChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.previousAlert), timeoutMs);
  }

  async expectPreviousAlertUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.previousAlert), timeoutMs);
  }

  async expectPreviousAlertFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.previousAlert), timeoutMs);
  }

  async expectPreviousAlertCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.previousAlert), count, timeoutMs);
  }

  async longPressNextAlert(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.nextAlert));
  }

  async expectNextAlertValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.nextAlert), value, timeoutMs);
  }

  async expectNextAlertChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.nextAlert), timeoutMs);
  }

  async expectNextAlertUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.nextAlert), timeoutMs);
  }

  async expectNextAlertFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.nextAlert), timeoutMs);
  }

  async expectNextAlertCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.nextAlert), count, timeoutMs);
  }

  async longPressCloseAlerts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.closeAlerts));
  }

  async expectCloseAlertsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.closeAlerts), value, timeoutMs);
  }

  async expectCloseAlertsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.closeAlerts), timeoutMs);
  }

  async expectCloseAlertsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.closeAlerts), count, timeoutMs);
  }

  async expectMessageUkgAssistText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.messageUkgAssist), expected, timeoutMs);
  }

  async expectMessageUkgAssistContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.messageUkgAssist), substring, timeoutMs);
  }

  async expectMessageUkgAssistChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.messageUkgAssist), timeoutMs);
  }

  async expectMessageUkgAssistUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.messageUkgAssist), timeoutMs);
  }

  async expectMessageUkgAssistCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.messageUkgAssist), count, timeoutMs);
  }

  async longPressSendMessage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.sendMessage));
  }

  async expectSendMessageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.sendMessage), value, timeoutMs);
  }

  async expectSendMessageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.sendMessage), timeoutMs);
  }

  async expectSendMessageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.sendMessage), count, timeoutMs);
  }

  async clickAiSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.aiSummary));
  }

  async doubleClickAiSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.aiSummary));
  }

  async longPressAiSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.aiSummary));
  }

  async expectAiSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.aiSummary), value, timeoutMs);
  }

  async expectAiSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.aiSummary), timeoutMs);
  }

  async expectAiSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.aiSummary), timeoutMs);
  }

  async expectAiSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.aiSummary), timeoutMs);
  }

  async expectAiSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.aiSummary), timeoutMs);
  }

  async expectAiSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.aiSummary), timeoutMs);
  }

  async expectAiSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.aiSummary), count, timeoutMs);
  }

  async clickBeta(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.beta));
  }

  async doubleClickBeta(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.beta));
  }

  async longPressBeta(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.beta));
  }

  async expectBetaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.beta), value, timeoutMs);
  }

  async expectBetaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.beta), timeoutMs);
  }

  async expectBetaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.beta), timeoutMs);
  }

  async expectBetaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.beta), timeoutMs);
  }

  async expectBetaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.beta), timeoutMs);
  }

  async expectBetaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.beta), timeoutMs);
  }

  async expectBetaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.beta), count, timeoutMs);
  }

  async clickWasThisHelpful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.wasThisHelpful));
  }

  async doubleClickWasThisHelpful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.wasThisHelpful));
  }

  async longPressWasThisHelpful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.wasThisHelpful));
  }

  async expectWasThisHelpfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.wasThisHelpful), value, timeoutMs);
  }

  async expectWasThisHelpfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.wasThisHelpful), timeoutMs);
  }

  async expectWasThisHelpfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.wasThisHelpful), count, timeoutMs);
  }

  async longPressHelpful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.helpful));
  }

  async expectHelpfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.helpful), value, timeoutMs);
  }

  async expectHelpfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.helpful), timeoutMs);
  }

  async expectHelpfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.helpful), timeoutMs);
  }

  async expectHelpfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.helpful), timeoutMs);
  }

  async expectHelpfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.helpful), count, timeoutMs);
  }

  async longPressNotHelpful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.notHelpful));
  }

  async expectNotHelpfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.notHelpful), value, timeoutMs);
  }

  async expectNotHelpfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.notHelpful), timeoutMs);
  }

  async expectNotHelpfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.notHelpful), count, timeoutMs);
  }

  async clickAcmeCorpSAccountCarries(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.acmeCorpSAccountCarries));
  }

  async doubleClickAcmeCorpSAccountCarries(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.acmeCorpSAccountCarries));
  }

  async longPressAcmeCorpSAccountCarries(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.acmeCorpSAccountCarries));
  }

  async expectAcmeCorpSAccountCarriesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.acmeCorpSAccountCarries), value, timeoutMs);
  }

  async expectAcmeCorpSAccountCarriesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.acmeCorpSAccountCarries), timeoutMs);
  }

  async expectAcmeCorpSAccountCarriesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.acmeCorpSAccountCarries), timeoutMs);
  }

  async expectAcmeCorpSAccountCarriesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.acmeCorpSAccountCarries), timeoutMs);
  }

  async expectAcmeCorpSAccountCarriesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.acmeCorpSAccountCarries), timeoutMs);
  }

  async expectAcmeCorpSAccountCarriesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.acmeCorpSAccountCarries), timeoutMs);
  }

  async expectAcmeCorpSAccountCarriesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.acmeCorpSAccountCarries), count, timeoutMs);
  }

  async clickElevatedRisk(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.elevatedRisk));
  }

  async doubleClickElevatedRisk(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.elevatedRisk));
  }

  async longPressElevatedRisk(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.elevatedRisk));
  }

  async expectElevatedRiskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.elevatedRisk), value, timeoutMs);
  }

  async expectElevatedRiskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.elevatedRisk), timeoutMs);
  }

  async expectElevatedRiskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.elevatedRisk), timeoutMs);
  }

  async expectElevatedRiskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.elevatedRisk), timeoutMs);
  }

  async expectElevatedRiskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.elevatedRisk), timeoutMs);
  }

  async expectElevatedRiskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.elevatedRisk), timeoutMs);
  }

  async expectElevatedRiskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.elevatedRisk), count, timeoutMs);
  }

  async clickBackgroundRisk(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.backgroundRisk));
  }

  async doubleClickBackgroundRisk(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.backgroundRisk));
  }

  async longPressBackgroundRisk(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.backgroundRisk));
  }

  async expectBackgroundRiskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.backgroundRisk), value, timeoutMs);
  }

  async expectBackgroundRiskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.backgroundRisk), timeoutMs);
  }

  async expectBackgroundRiskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.backgroundRisk), timeoutMs);
  }

  async expectBackgroundRiskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.backgroundRisk), timeoutMs);
  }

  async expectBackgroundRiskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.backgroundRisk), timeoutMs);
  }

  async expectBackgroundRiskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.backgroundRisk), timeoutMs);
  }

  async expectBackgroundRiskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.backgroundRisk), count, timeoutMs);
  }

  async clickNotYetCriticalBut(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.notYetCriticalBut));
  }

  async doubleClickNotYetCriticalBut(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.notYetCriticalBut));
  }

  async longPressNotYetCriticalBut(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.notYetCriticalBut));
  }

  async expectNotYetCriticalButValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.notYetCriticalBut), value, timeoutMs);
  }

  async expectNotYetCriticalButEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.notYetCriticalBut), timeoutMs);
  }

  async expectNotYetCriticalButDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.notYetCriticalBut), timeoutMs);
  }

  async expectNotYetCriticalButChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.notYetCriticalBut), timeoutMs);
  }

  async expectNotYetCriticalButUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.notYetCriticalBut), timeoutMs);
  }

  async expectNotYetCriticalButFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.notYetCriticalBut), timeoutMs);
  }

  async expectNotYetCriticalButCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.notYetCriticalBut), count, timeoutMs);
  }

  async longPressSeeMore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.seeMore));
  }

  async expectSeeMoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.seeMore), value, timeoutMs);
  }

  async expectSeeMoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.seeMore), timeoutMs);
  }

  async expectSeeMoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.seeMore), timeoutMs);
  }

  async expectSeeMoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.seeMore), timeoutMs);
  }

  async expectSeeMoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.seeMore), count, timeoutMs);
  }

  async clickSynthesisedFromPortalActivity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.synthesisedFromPortalActivity));
  }

  async doubleClickSynthesisedFromPortalActivity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.synthesisedFromPortalActivity));
  }

  async longPressSynthesisedFromPortalActivity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.synthesisedFromPortalActivity));
  }

  async expectSynthesisedFromPortalActivityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.synthesisedFromPortalActivity), value, timeoutMs);
  }

  async expectSynthesisedFromPortalActivityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.synthesisedFromPortalActivity), timeoutMs);
  }

  async expectSynthesisedFromPortalActivityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.synthesisedFromPortalActivity), timeoutMs);
  }

  async expectSynthesisedFromPortalActivityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.synthesisedFromPortalActivity), timeoutMs);
  }

  async expectSynthesisedFromPortalActivityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.synthesisedFromPortalActivity), timeoutMs);
  }

  async expectSynthesisedFromPortalActivityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.synthesisedFromPortalActivity), timeoutMs);
  }

  async expectSynthesisedFromPortalActivityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.synthesisedFromPortalActivity), count, timeoutMs);
  }

  async longPressViewDetails(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.viewDetails));
  }

  async expectViewDetailsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.viewDetails), value, timeoutMs);
  }

  async expectViewDetailsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.viewDetails), timeoutMs);
  }

  async expectViewDetailsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.viewDetails), timeoutMs);
  }

  async expectViewDetailsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.viewDetails), timeoutMs);
  }

  async expectViewDetailsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.viewDetails), count, timeoutMs);
  }

  async clickCaseOpen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.caseOpen));
  }

  async doubleClickCaseOpen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.caseOpen));
  }

  async longPressCaseOpen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.caseOpen));
  }

  async expectCaseOpenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.caseOpen), value, timeoutMs);
  }

  async expectCaseOpenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.caseOpen), timeoutMs);
  }

  async expectCaseOpenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.caseOpen), timeoutMs);
  }

  async expectCaseOpenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.caseOpen), timeoutMs);
  }

  async expectCaseOpenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.caseOpen), timeoutMs);
  }

  async expectCaseOpenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.caseOpen), timeoutMs);
  }

  async expectCaseOpenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.caseOpen), count, timeoutMs);
  }

  async clickHighPriorityAwaiting(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.highPriorityAwaiting));
  }

  async doubleClickHighPriorityAwaiting(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.highPriorityAwaiting));
  }

  async longPressHighPriorityAwaiting(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.highPriorityAwaiting));
  }

  async expectHighPriorityAwaitingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.highPriorityAwaiting), value, timeoutMs);
  }

  async expectHighPriorityAwaitingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.highPriorityAwaiting), timeoutMs);
  }

  async expectHighPriorityAwaitingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.highPriorityAwaiting), timeoutMs);
  }

  async expectHighPriorityAwaitingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.highPriorityAwaiting), timeoutMs);
  }

  async expectHighPriorityAwaitingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.highPriorityAwaiting), timeoutMs);
  }

  async expectHighPriorityAwaitingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.highPriorityAwaiting), timeoutMs);
  }

  async expectHighPriorityAwaitingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.highPriorityAwaiting), count, timeoutMs);
  }

  async clickBilling(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.billing));
  }

  async doubleClickBilling(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.billing));
  }

  async longPressBilling(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.billing));
  }

  async expectBillingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.billing), value, timeoutMs);
  }

  async expectBillingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.billing), timeoutMs);
  }

  async expectBillingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.billing), timeoutMs);
  }

  async expectBillingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.billing), timeoutMs);
  }

  async expectBillingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.billing), timeoutMs);
  }

  async expectBillingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.billing), timeoutMs);
  }

  async expectBillingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.billing), count, timeoutMs);
  }

  async clickOverdue(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.overdue));
  }

  async doubleClickOverdue(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.overdue));
  }

  async longPressOverdue(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.overdue));
  }

  async expectOverdueValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.overdue), value, timeoutMs);
  }

  async expectOverdueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.overdue), timeoutMs);
  }

  async expectOverdueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.overdue), timeoutMs);
  }

  async expectOverdueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.overdue), timeoutMs);
  }

  async expectOverdueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.overdue), timeoutMs);
  }

  async expectOverdueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.overdue), timeoutMs);
  }

  async expectOverdueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.overdue), count, timeoutMs);
  }

  async clickPastDue1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.pastDue1));
  }

  async doubleClickPastDue1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.pastDue1));
  }

  async longPressPastDue1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.pastDue1));
  }

  async expectPastDue1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.pastDue1), value, timeoutMs);
  }

  async expectPastDue1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.pastDue1), timeoutMs);
  }

  async expectPastDue1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.pastDue1), timeoutMs);
  }

  async expectPastDue1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.pastDue1), timeoutMs);
  }

  async expectPastDue1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.pastDue1), timeoutMs);
  }

  async expectPastDue1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.pastDue1), timeoutMs);
  }

  async expectPastDue1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.pastDue1), count, timeoutMs);
  }

  async clickRenewal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.renewal));
  }

  async doubleClickRenewal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.renewal));
  }

  async longPressRenewal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.renewal));
  }

  async expectRenewalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.renewal), value, timeoutMs);
  }

  async expectRenewalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.renewal), timeoutMs);
  }

  async expectRenewalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.renewal), timeoutMs);
  }

  async expectRenewalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.renewal), timeoutMs);
  }

  async expectRenewalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.renewal), timeoutMs);
  }

  async expectRenewalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.renewal), timeoutMs);
  }

  async expectRenewalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.renewal), count, timeoutMs);
  }

  async clickDimensionsIn8d(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.dimensionsIn8d));
  }

  async doubleClickDimensionsIn8d(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.dimensionsIn8d));
  }

  async longPressDimensionsIn8d(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.dimensionsIn8d));
  }

  async expectDimensionsIn8dValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.dimensionsIn8d), value, timeoutMs);
  }

  async expectDimensionsIn8dEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.dimensionsIn8d), timeoutMs);
  }

  async expectDimensionsIn8dDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.dimensionsIn8d), timeoutMs);
  }

  async expectDimensionsIn8dChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.dimensionsIn8d), timeoutMs);
  }

  async expectDimensionsIn8dUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.dimensionsIn8d), timeoutMs);
  }

  async expectDimensionsIn8dFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.dimensionsIn8d), timeoutMs);
  }

  async expectDimensionsIn8dCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.dimensionsIn8d), count, timeoutMs);
  }

  async clickInsightsRecommendations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.insightsRecommendations));
  }

  async doubleClickInsightsRecommendations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.insightsRecommendations));
  }

  async longPressInsightsRecommendations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.insightsRecommendations));
  }

  async expectInsightsRecommendationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.insightsRecommendations), value, timeoutMs);
  }

  async expectInsightsRecommendationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.insightsRecommendations), timeoutMs);
  }

  async expectInsightsRecommendationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.insightsRecommendations), timeoutMs);
  }

  async expectInsightsRecommendationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.insightsRecommendations), timeoutMs);
  }

  async expectInsightsRecommendationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.insightsRecommendations), timeoutMs);
  }

  async expectInsightsRecommendationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.insightsRecommendations), timeoutMs);
  }

  async expectInsightsRecommendationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.insightsRecommendations), count, timeoutMs);
  }

  async clickPrioritisedActionsFromYour(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.prioritisedActionsFromYour));
  }

  async doubleClickPrioritisedActionsFromYour(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.prioritisedActionsFromYour));
  }

  async longPressPrioritisedActionsFromYour(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.prioritisedActionsFromYour));
  }

  async expectPrioritisedActionsFromYourValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.prioritisedActionsFromYour), value, timeoutMs);
  }

  async expectPrioritisedActionsFromYourEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.prioritisedActionsFromYour), timeoutMs);
  }

  async expectPrioritisedActionsFromYourDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.prioritisedActionsFromYour), timeoutMs);
  }

  async expectPrioritisedActionsFromYourChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.prioritisedActionsFromYour), timeoutMs);
  }

  async expectPrioritisedActionsFromYourUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.prioritisedActionsFromYour), timeoutMs);
  }

  async expectPrioritisedActionsFromYourFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.prioritisedActionsFromYour), timeoutMs);
  }

  async expectPrioritisedActionsFromYourCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.prioritisedActionsFromYour), count, timeoutMs);
  }

  async clickMediumImpact(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.mediumImpact));
  }

  async doubleClickMediumImpact(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.mediumImpact));
  }

  async longPressMediumImpact(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.mediumImpact));
  }

  async expectMediumImpactValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.mediumImpact), value, timeoutMs);
  }

  async expectMediumImpactEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.mediumImpact), timeoutMs);
  }

  async expectMediumImpactDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.mediumImpact), timeoutMs);
  }

  async expectMediumImpactChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.mediumImpact), timeoutMs);
  }

  async expectMediumImpactUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.mediumImpact), timeoutMs);
  }

  async expectMediumImpactFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.mediumImpact), timeoutMs);
  }

  async expectMediumImpactCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.mediumImpact), count, timeoutMs);
  }

  async clickRightSizeProWfmBefore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.rightSizeProWfmBefore));
  }

  async doubleClickRightSizeProWfmBefore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.rightSizeProWfmBefore));
  }

  async longPressRightSizeProWfmBefore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.rightSizeProWfmBefore));
  }

  async expectRightSizeProWfmBeforeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.rightSizeProWfmBefore), value, timeoutMs);
  }

  async expectRightSizeProWfmBeforeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.rightSizeProWfmBefore), timeoutMs);
  }

  async expectRightSizeProWfmBeforeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.rightSizeProWfmBefore), timeoutMs);
  }

  async expectRightSizeProWfmBeforeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.rightSizeProWfmBefore), timeoutMs);
  }

  async expectRightSizeProWfmBeforeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.rightSizeProWfmBefore), timeoutMs);
  }

  async expectRightSizeProWfmBeforeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.rightSizeProWfmBefore), timeoutMs);
  }

  async expectRightSizeProWfmBeforeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.rightSizeProWfmBefore), count, timeoutMs);
  }

  async clickSeatUtilisationIsAt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.seatUtilisationIsAt));
  }

  async doubleClickSeatUtilisationIsAt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.seatUtilisationIsAt));
  }

  async longPressSeatUtilisationIsAt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.seatUtilisationIsAt));
  }

  async expectSeatUtilisationIsAtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.seatUtilisationIsAt), value, timeoutMs);
  }

  async expectSeatUtilisationIsAtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.seatUtilisationIsAt), timeoutMs);
  }

  async expectSeatUtilisationIsAtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.seatUtilisationIsAt), timeoutMs);
  }

  async expectSeatUtilisationIsAtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.seatUtilisationIsAt), timeoutMs);
  }

  async expectSeatUtilisationIsAtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.seatUtilisationIsAt), timeoutMs);
  }

  async expectSeatUtilisationIsAtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.seatUtilisationIsAt), timeoutMs);
  }

  async expectSeatUtilisationIsAtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.seatUtilisationIsAt), count, timeoutMs);
  }

  async longPressSeeUsage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.seeUsage));
  }

  async expectSeeUsageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.seeUsage), value, timeoutMs);
  }

  async expectSeeUsageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.seeUsage), timeoutMs);
  }

  async expectSeeUsageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.seeUsage), timeoutMs);
  }

  async expectSeeUsageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.seeUsage), timeoutMs);
  }

  async expectSeeUsageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.seeUsage), timeoutMs);
  }

  async expectSeeUsageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.seeUsage), timeoutMs);
  }

  async expectSeeUsageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.seeUsage), count, timeoutMs);
  }

  async clickOpportunity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.opportunity));
  }

  async doubleClickOpportunity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.opportunity));
  }

  async longPressOpportunity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.opportunity));
  }

  async expectOpportunityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.opportunity), value, timeoutMs);
  }

  async expectOpportunityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.opportunity), timeoutMs);
  }

  async expectOpportunityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.opportunity), timeoutMs);
  }

  async expectOpportunityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.opportunity), timeoutMs);
  }

  async expectOpportunityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.opportunity), timeoutMs);
  }

  async expectOpportunityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.opportunity), timeoutMs);
  }

  async expectOpportunityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.opportunity), count, timeoutMs);
  }

  async clickAcceleratePayrollInsightsAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.acceleratePayrollInsightsAdoption));
  }

  async doubleClickAcceleratePayrollInsightsAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.acceleratePayrollInsightsAdoption));
  }

  async longPressAcceleratePayrollInsightsAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.acceleratePayrollInsightsAdoption));
  }

  async expectAcceleratePayrollInsightsAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.acceleratePayrollInsightsAdoption), value, timeoutMs);
  }

  async expectAcceleratePayrollInsightsAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.acceleratePayrollInsightsAdoption), timeoutMs);
  }

  async expectAcceleratePayrollInsightsAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.acceleratePayrollInsightsAdoption), timeoutMs);
  }

  async expectAcceleratePayrollInsightsAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.acceleratePayrollInsightsAdoption), timeoutMs);
  }

  async expectAcceleratePayrollInsightsAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.acceleratePayrollInsightsAdoption), timeoutMs);
  }

  async expectAcceleratePayrollInsightsAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.acceleratePayrollInsightsAdoption), timeoutMs);
  }

  async expectAcceleratePayrollInsightsAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.acceleratePayrollInsightsAdoption), count, timeoutMs);
  }

  async longPressSeeAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.seeAdoption));
  }

  async expectSeeAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.seeAdoption), value, timeoutMs);
  }

  async expectSeeAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.seeAdoption), timeoutMs);
  }

  async expectSeeAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.seeAdoption), timeoutMs);
  }

  async expectSeeAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.seeAdoption), timeoutMs);
  }

  async expectSeeAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.seeAdoption), timeoutMs);
  }

  async expectSeeAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.seeAdoption), timeoutMs);
  }

  async expectSeeAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.seeAdoption), count, timeoutMs);
  }

  async clickKbArticlesMatch2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.kbArticlesMatch2));
  }

  async doubleClickKbArticlesMatch2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.kbArticlesMatch2));
  }

  async longPressKbArticlesMatch2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.kbArticlesMatch2));
  }

  async expectKbArticlesMatch2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.kbArticlesMatch2), value, timeoutMs);
  }

  async expectKbArticlesMatch2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.kbArticlesMatch2), timeoutMs);
  }

  async expectKbArticlesMatch2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.kbArticlesMatch2), timeoutMs);
  }

  async expectKbArticlesMatch2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.kbArticlesMatch2), timeoutMs);
  }

  async expectKbArticlesMatch2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.kbArticlesMatch2), timeoutMs);
  }

  async expectKbArticlesMatch2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.kbArticlesMatch2), timeoutMs);
  }

  async expectKbArticlesMatch2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.kbArticlesMatch2), count, timeoutMs);
  }

  async longPressViewKbArticles(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.viewKbArticles));
  }

  async expectViewKbArticlesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.viewKbArticles), value, timeoutMs);
  }

  async expectViewKbArticlesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.viewKbArticles), timeoutMs);
  }

  async expectViewKbArticlesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.viewKbArticles), timeoutMs);
  }

  async expectViewKbArticlesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.viewKbArticles), timeoutMs);
  }

  async expectViewKbArticlesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.viewKbArticles), timeoutMs);
  }

  async expectViewKbArticlesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.viewKbArticles), timeoutMs);
  }

  async expectViewKbArticlesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.viewKbArticles), count, timeoutMs);
  }

  async clickAtlasRefreshesTheseSignals(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.atlasRefreshesTheseSignals));
  }

  async doubleClickAtlasRefreshesTheseSignals(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.atlasRefreshesTheseSignals));
  }

  async longPressAtlasRefreshesTheseSignals(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.atlasRefreshesTheseSignals));
  }

  async expectAtlasRefreshesTheseSignalsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.atlasRefreshesTheseSignals), value, timeoutMs);
  }

  async expectAtlasRefreshesTheseSignalsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.atlasRefreshesTheseSignals), timeoutMs);
  }

  async expectAtlasRefreshesTheseSignalsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.atlasRefreshesTheseSignals), timeoutMs);
  }

  async expectAtlasRefreshesTheseSignalsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.atlasRefreshesTheseSignals), timeoutMs);
  }

  async expectAtlasRefreshesTheseSignalsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.atlasRefreshesTheseSignals), timeoutMs);
  }

  async expectAtlasRefreshesTheseSignalsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.atlasRefreshesTheseSignals), timeoutMs);
  }

  async expectAtlasRefreshesTheseSignalsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.atlasRefreshesTheseSignals), count, timeoutMs);
  }

  async clickSuggestedQueries(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.suggestedQueries));
  }

  async doubleClickSuggestedQueries(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.suggestedQueries));
  }

  async longPressSuggestedQueries(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.suggestedQueries));
  }

  async expectSuggestedQueriesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.suggestedQueries), value, timeoutMs);
  }

  async expectSuggestedQueriesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.suggestedQueries), timeoutMs);
  }

  async expectSuggestedQueriesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.suggestedQueries), timeoutMs);
  }

  async expectSuggestedQueriesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.suggestedQueries), timeoutMs);
  }

  async expectSuggestedQueriesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.suggestedQueries), timeoutMs);
  }

  async expectSuggestedQueriesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.suggestedQueries), timeoutMs);
  }

  async expectSuggestedQueriesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.suggestedQueries), count, timeoutMs);
  }

  async clickTapAQueryTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.tapAQueryTo));
  }

  async doubleClickTapAQueryTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.tapAQueryTo));
  }

  async longPressTapAQueryTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.tapAQueryTo));
  }

  async expectTapAQueryToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.tapAQueryTo), value, timeoutMs);
  }

  async expectTapAQueryToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.tapAQueryTo), timeoutMs);
  }

  async expectTapAQueryToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.tapAQueryTo), timeoutMs);
  }

  async expectTapAQueryToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.tapAQueryTo), timeoutMs);
  }

  async expectTapAQueryToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.tapAQueryTo), timeoutMs);
  }

  async expectTapAQueryToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.tapAQueryTo), timeoutMs);
  }

  async expectTapAQueryToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.tapAQueryTo), count, timeoutMs);
  }

  async longPressWhyIsMyDimensions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.whyIsMyDimensions));
  }

  async expectWhyIsMyDimensionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.whyIsMyDimensions), value, timeoutMs);
  }

  async expectWhyIsMyDimensionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.whyIsMyDimensions), timeoutMs);
  }

  async expectWhyIsMyDimensionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.whyIsMyDimensions), timeoutMs);
  }

  async expectWhyIsMyDimensionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.whyIsMyDimensions), timeoutMs);
  }

  async expectWhyIsMyDimensionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.whyIsMyDimensions), count, timeoutMs);
  }

  async longPressWhatAreMyHigh(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.whatAreMyHigh));
  }

  async expectWhatAreMyHighValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.whatAreMyHigh), value, timeoutMs);
  }

  async expectWhatAreMyHighChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.whatAreMyHigh), timeoutMs);
  }

  async expectWhatAreMyHighUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.whatAreMyHigh), timeoutMs);
  }

  async expectWhatAreMyHighFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.whatAreMyHigh), timeoutMs);
  }

  async expectWhatAreMyHighCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.whatAreMyHigh), count, timeoutMs);
  }

  async longPressAmIAtRisk(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.amIAtRisk));
  }

  async expectAmIAtRiskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.amIAtRisk), value, timeoutMs);
  }

  async expectAmIAtRiskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.amIAtRisk), timeoutMs);
  }

  async expectAmIAtRiskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.amIAtRisk), timeoutMs);
  }

  async expectAmIAtRiskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.amIAtRisk), timeoutMs);
  }

  async expectAmIAtRiskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.amIAtRisk), count, timeoutMs);
  }

  async longPressHowDoesTheOverdue(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.howDoesTheOverdue));
  }

  async expectHowDoesTheOverdueValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.howDoesTheOverdue), value, timeoutMs);
  }

  async expectHowDoesTheOverdueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.howDoesTheOverdue), timeoutMs);
  }

  async expectHowDoesTheOverdueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.howDoesTheOverdue), timeoutMs);
  }

  async expectHowDoesTheOverdueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.howDoesTheOverdue), timeoutMs);
  }

  async expectHowDoesTheOverdueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.howDoesTheOverdue), count, timeoutMs);
  }

  async clickUkgAssistCanMake(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.ukgAssistCanMake));
  }

  async doubleClickUkgAssistCanMake(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.ukgAssistCanMake));
  }

  async longPressUkgAssistCanMake(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.ukgAssistCanMake));
  }

  async expectUkgAssistCanMakeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.ukgAssistCanMake), value, timeoutMs);
  }

  async expectUkgAssistCanMakeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.ukgAssistCanMake), timeoutMs);
  }

  async expectUkgAssistCanMakeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.ukgAssistCanMake), timeoutMs);
  }

  async expectUkgAssistCanMakeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.ukgAssistCanMake), timeoutMs);
  }

  async expectUkgAssistCanMakeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.ukgAssistCanMake), timeoutMs);
  }

  async expectUkgAssistCanMakeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.ukgAssistCanMake), timeoutMs);
  }

  async expectUkgAssistCanMakeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.ukgAssistCanMake), count, timeoutMs);
  }

  async clickWhatWouldYouLike(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.whatWouldYouLike));
  }

  async doubleClickWhatWouldYouLike(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.whatWouldYouLike));
  }

  async longPressWhatWouldYouLike(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.whatWouldYouLike));
  }

  async expectWhatWouldYouLikeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.whatWouldYouLike), value, timeoutMs);
  }

  async expectWhatWouldYouLikeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.whatWouldYouLike), timeoutMs);
  }

  async expectWhatWouldYouLikeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.whatWouldYouLike), timeoutMs);
  }

  async expectWhatWouldYouLikeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.whatWouldYouLike), timeoutMs);
  }

  async expectWhatWouldYouLikeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.whatWouldYouLike), timeoutMs);
  }

  async expectWhatWouldYouLikeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.whatWouldYouLike), timeoutMs);
  }

  async expectWhatWouldYouLikeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.whatWouldYouLike), count, timeoutMs);
  }

  async longPressViewOpenCases(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.viewOpenCases));
  }

  async expectViewOpenCasesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.viewOpenCases), value, timeoutMs);
  }

  async expectViewOpenCasesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.viewOpenCases), timeoutMs);
  }

  async expectViewOpenCasesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.viewOpenCases), timeoutMs);
  }

  async expectViewOpenCasesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.viewOpenCases), timeoutMs);
  }

  async expectViewOpenCasesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.viewOpenCases), timeoutMs);
  }

  async expectViewOpenCasesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.viewOpenCases), timeoutMs);
  }

  async expectViewOpenCasesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.viewOpenCases), count, timeoutMs);
  }

  async longPressManageSubscriptions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.manageSubscriptions));
  }

  async expectManageSubscriptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.manageSubscriptions), value, timeoutMs);
  }

  async expectManageSubscriptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.manageSubscriptions), timeoutMs);
  }

  async expectManageSubscriptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.manageSubscriptions), timeoutMs);
  }

  async expectManageSubscriptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.manageSubscriptions), timeoutMs);
  }

  async expectManageSubscriptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.manageSubscriptions), timeoutMs);
  }

  async expectManageSubscriptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.manageSubscriptions), timeoutMs);
  }

  async expectManageSubscriptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.manageSubscriptions), count, timeoutMs);
  }

  async longPressDownloadInvoice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.downloadInvoice));
  }

  async expectDownloadInvoiceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.downloadInvoice), value, timeoutMs);
  }

  async expectDownloadInvoiceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.downloadInvoice), timeoutMs);
  }

  async expectDownloadInvoiceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.downloadInvoice), timeoutMs);
  }

  async expectDownloadInvoiceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.downloadInvoice), timeoutMs);
  }

  async expectDownloadInvoiceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.downloadInvoice), timeoutMs);
  }

  async expectDownloadInvoiceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.downloadInvoice), timeoutMs);
  }

  async expectDownloadInvoiceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.downloadInvoice), count, timeoutMs);
  }

  async longPressAccountProfileLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.accountProfileLink));
  }

  async expectAccountProfileLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.accountProfileLink), value, timeoutMs);
  }

  async expectAccountProfileLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.accountProfileLink), timeoutMs);
  }

  async expectAccountProfileLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.accountProfileLink), timeoutMs);
  }

  async expectAccountProfileLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.accountProfileLink), timeoutMs);
  }

  async expectAccountProfileLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.accountProfileLink), timeoutMs);
  }

  async expectAccountProfileLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.accountProfileLink), timeoutMs);
  }

  async expectAccountProfileLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.accountProfileLink), count, timeoutMs);
  }

}

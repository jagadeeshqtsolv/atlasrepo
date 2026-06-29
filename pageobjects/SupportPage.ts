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

export class SupportPage {
  private static readonly L = {
    highPriorityCase24094963: { strategy: 'text' as const, value: 'High priority case #24094963 awaiting response', actionKind: 'text' as const },
    wfcTimeClock: { strategy: 'text' as const, value: 'WFC - Time clock not powering on - open since Mar', actionKind: 'text' as const },
    viewCase: { strategy: 'role' as const, value: 'View case', role: 'button', actionKind: 'button' as const },
    atlasInsightsSupport: { strategy: 'text' as const, value: 'Atlas Insights · Support', actionKind: 'text' as const },
    caseStatusOverview: { strategy: 'role' as const, value: 'Case status overview', role: 'button', actionKind: 'button' as const },
    highPriorityOpenCases: { strategy: 'role' as const, value: 'High priority open cases', role: 'button', actionKind: 'button' as const },
    resolvedCases: { strategy: 'role' as const, value: 'Resolved Cases', role: 'button', actionKind: 'button' as const },
    openNewCase: { strategy: 'role' as const, value: 'Open new case', role: 'button', actionKind: 'button' as const },
    supportOverview: { strategy: 'text' as const, value: 'Support overview', actionKind: 'text' as const },
    openCases: { strategy: 'text' as const, value: 'Open cases', actionKind: 'text' as const },
    awaitingResponse: { strategy: 'text' as const, value: 'Awaiting Response', actionKind: 'text' as const },
    casesResolvedIn30: { strategy: 'text' as const, value: 'Cases resolved in 30 days', actionKind: 'text' as const },
    element: { strategy: 'text' as const, value: '49', actionKind: 'text' as const },
    activeCases: { strategy: 'role' as const, value: 'Active cases', role: 'button', actionKind: 'button' as const },
    inputInput: { strategy: 'placeholder' as const, value: 'Search case or summary', actionKind: 'textbox' as const },
    allProduct: { strategy: 'role' as const, value: 'All product', role: 'button', actionKind: 'button' as const },
    allPriority: { strategy: 'role' as const, value: 'All priority', role: 'button', actionKind: 'button' as const },
    casesNeedingYourAttention: { strategy: 'text' as const, value: 'Cases Needing Your Attention', actionKind: 'text' as const },
    ukgProWfm: { strategy: 'text' as const, value: 'UKG Pro Wfm', actionKind: 'text' as const },
    element2: { strategy: 'text' as const, value: '24094963', actionKind: 'text' as const },
    dOpen: { strategy: 'text' as const, value: '78d open', actionKind: 'text' as const },
    wfcTimeClock2: { strategy: 'text' as const, value: 'WFC - Time clock not powering on', actionKind: 'text' as const },
    element3: { strategy: 'text' as const, value: '23761175', actionKind: 'text' as const },
    dOpen2: { strategy: 'text' as const, value: '46d open', actionKind: 'text' as const },
    autoSchedulerGenerationNo: { strategy: 'text' as const, value: 'Auto-scheduler generation — no demand shift', actionKind: 'text' as const },
    caseVolumeLast: { strategy: 'text' as const, value: 'Case Volume - Last 7 days', actionKind: 'text' as const },
    totalCases: { strategy: 'text' as const, value: 'Total cases', actionKind: 'text' as const },
    element4: { strategy: 'text' as const, value: '173', actionKind: 'text' as const },
    active: { strategy: 'text' as const, value: 'Active', actionKind: 'text' as const },
    closed: { strategy: 'text' as const, value: 'Closed', actionKind: 'text' as const },
  } as const;

  readonly activeCases: WebTable; // columns: ["Case no.", "Summary", "Priority", "Status", "Last Modified", "Date Opened"]

  constructor(private readonly page: Page) {
    this.activeCases = webTable(this.page, 'table[aria-label="Active cases"]');
  }

  async getInnerTextHighPriorityCase24094963(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.highPriorityCase24094963));
  }

  async expectHighPriorityCase24094963Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.highPriorityCase24094963), timeoutMs);
  }

  async expectHighPriorityCase24094963Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.highPriorityCase24094963), timeoutMs);
  }

  async expectHighPriorityCase24094963Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.highPriorityCase24094963), expected, timeoutMs);
  }

  async expectHighPriorityCase24094963ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.highPriorityCase24094963), substring, timeoutMs);
  }

  async scrollHighPriorityCase24094963IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.highPriorityCase24094963));
  }

  async getInnerTextWfcTimeClock(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.wfcTimeClock));
  }

  async expectWfcTimeClockVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.wfcTimeClock), timeoutMs);
  }

  async expectWfcTimeClockHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.wfcTimeClock), timeoutMs);
  }

  async expectWfcTimeClockText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.wfcTimeClock), expected, timeoutMs);
  }

  async expectWfcTimeClockContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.wfcTimeClock), substring, timeoutMs);
  }

  async scrollWfcTimeClockIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.wfcTimeClock));
  }

  async clickViewCase(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.viewCase));
  }

  async doubleClickViewCase(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.viewCase));
  }

  async expectViewCaseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.viewCase), timeoutMs);
  }

  async expectViewCaseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.viewCase), timeoutMs);
  }

  async expectViewCaseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.viewCase), timeoutMs);
  }

  async expectViewCaseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.viewCase), timeoutMs);
  }

  async expectViewCaseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.viewCase), expected, timeoutMs);
  }

  async expectViewCaseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.viewCase), substring, timeoutMs);
  }

  async scrollViewCaseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.viewCase));
  }

  async getInnerTextAtlasInsightsSupport(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.atlasInsightsSupport));
  }

  async expectAtlasInsightsSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.atlasInsightsSupport), timeoutMs);
  }

  async expectAtlasInsightsSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.atlasInsightsSupport), timeoutMs);
  }

  async expectAtlasInsightsSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.atlasInsightsSupport), expected, timeoutMs);
  }

  async expectAtlasInsightsSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.atlasInsightsSupport), substring, timeoutMs);
  }

  async scrollAtlasInsightsSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.atlasInsightsSupport));
  }

  async clickCaseStatusOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.caseStatusOverview));
  }

  async doubleClickCaseStatusOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.caseStatusOverview));
  }

  async expectCaseStatusOverviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.caseStatusOverview), timeoutMs);
  }

  async expectCaseStatusOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.caseStatusOverview), timeoutMs);
  }

  async expectCaseStatusOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.caseStatusOverview), timeoutMs);
  }

  async expectCaseStatusOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.caseStatusOverview), timeoutMs);
  }

  async expectCaseStatusOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.caseStatusOverview), expected, timeoutMs);
  }

  async expectCaseStatusOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.caseStatusOverview), substring, timeoutMs);
  }

  async scrollCaseStatusOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.caseStatusOverview));
  }

  async clickHighPriorityOpenCases(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.highPriorityOpenCases));
  }

  async doubleClickHighPriorityOpenCases(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.highPriorityOpenCases));
  }

  async expectHighPriorityOpenCasesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.highPriorityOpenCases), timeoutMs);
  }

  async expectHighPriorityOpenCasesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.highPriorityOpenCases), timeoutMs);
  }

  async expectHighPriorityOpenCasesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.highPriorityOpenCases), timeoutMs);
  }

  async expectHighPriorityOpenCasesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.highPriorityOpenCases), timeoutMs);
  }

  async expectHighPriorityOpenCasesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.highPriorityOpenCases), expected, timeoutMs);
  }

  async expectHighPriorityOpenCasesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.highPriorityOpenCases), substring, timeoutMs);
  }

  async scrollHighPriorityOpenCasesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.highPriorityOpenCases));
  }

  async clickResolvedCases(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.resolvedCases));
  }

  async doubleClickResolvedCases(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.resolvedCases));
  }

  async expectResolvedCasesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.resolvedCases), timeoutMs);
  }

  async expectResolvedCasesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.resolvedCases), timeoutMs);
  }

  async expectResolvedCasesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.resolvedCases), timeoutMs);
  }

  async expectResolvedCasesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.resolvedCases), timeoutMs);
  }

  async expectResolvedCasesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.resolvedCases), expected, timeoutMs);
  }

  async expectResolvedCasesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.resolvedCases), substring, timeoutMs);
  }

  async scrollResolvedCasesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.resolvedCases));
  }

  async clickOpenNewCase(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.openNewCase));
  }

  async doubleClickOpenNewCase(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.openNewCase));
  }

  async expectOpenNewCaseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.openNewCase), timeoutMs);
  }

  async expectOpenNewCaseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.openNewCase), timeoutMs);
  }

  async expectOpenNewCaseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.openNewCase), timeoutMs);
  }

  async expectOpenNewCaseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.openNewCase), timeoutMs);
  }

  async expectOpenNewCaseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.openNewCase), expected, timeoutMs);
  }

  async expectOpenNewCaseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.openNewCase), substring, timeoutMs);
  }

  async scrollOpenNewCaseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.openNewCase));
  }

  async getInnerTextSupportOverview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.supportOverview));
  }

  async expectSupportOverviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.supportOverview), timeoutMs);
  }

  async expectSupportOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.supportOverview), timeoutMs);
  }

  async expectSupportOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.supportOverview), expected, timeoutMs);
  }

  async expectSupportOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.supportOverview), substring, timeoutMs);
  }

  async scrollSupportOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.supportOverview));
  }

  async getInnerTextOpenCases(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.openCases));
  }

  async expectOpenCasesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.openCases), timeoutMs);
  }

  async expectOpenCasesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.openCases), timeoutMs);
  }

  async expectOpenCasesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.openCases), expected, timeoutMs);
  }

  async expectOpenCasesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.openCases), substring, timeoutMs);
  }

  async scrollOpenCasesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.openCases));
  }

  async getInnerTextAwaitingResponse(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.awaitingResponse));
  }

  async expectAwaitingResponseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.awaitingResponse), timeoutMs);
  }

  async expectAwaitingResponseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.awaitingResponse), timeoutMs);
  }

  async expectAwaitingResponseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.awaitingResponse), expected, timeoutMs);
  }

  async expectAwaitingResponseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.awaitingResponse), substring, timeoutMs);
  }

  async scrollAwaitingResponseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.awaitingResponse));
  }

  async getInnerTextCasesResolvedIn30(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.casesResolvedIn30));
  }

  async expectCasesResolvedIn30Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.casesResolvedIn30), timeoutMs);
  }

  async expectCasesResolvedIn30Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.casesResolvedIn30), timeoutMs);
  }

  async expectCasesResolvedIn30Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.casesResolvedIn30), expected, timeoutMs);
  }

  async expectCasesResolvedIn30ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.casesResolvedIn30), substring, timeoutMs);
  }

  async scrollCasesResolvedIn30IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.casesResolvedIn30));
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.element), timeoutMs);
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.element), substring, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.element));
  }

  async clickActiveCases(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.activeCases));
  }

  async doubleClickActiveCases(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.activeCases));
  }

  async expectActiveCasesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.activeCases), timeoutMs);
  }

  async expectActiveCasesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.activeCases), timeoutMs);
  }

  async expectActiveCasesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.activeCases), timeoutMs);
  }

  async expectActiveCasesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.activeCases), timeoutMs);
  }

  async expectActiveCasesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.activeCases), expected, timeoutMs);
  }

  async expectActiveCasesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.activeCases), substring, timeoutMs);
  }

  async scrollActiveCasesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.activeCases));
  }

  async fillInputInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, SupportPage.L.inputInput), value);
  }

  async clearInputInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, SupportPage.L.inputInput));
  }

  async typeTextInputInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, SupportPage.L.inputInput), value);
  }

  async expectInputInputVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.inputInput), timeoutMs);
  }

  async expectInputInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.inputInput), timeoutMs);
  }

  async expectInputInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.inputInput), timeoutMs);
  }

  async expectInputInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.inputInput), timeoutMs);
  }

  async expectInputInputValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.inputInput), expected, timeoutMs);
  }

  async expectInputInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.inputInput), timeoutMs);
  }

  async scrollInputInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.inputInput));
  }

  async clickAllProduct(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.allProduct));
  }

  async doubleClickAllProduct(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.allProduct));
  }

  async expectAllProductVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.allProduct), timeoutMs);
  }

  async expectAllProductHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.allProduct), timeoutMs);
  }

  async expectAllProductEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.allProduct), timeoutMs);
  }

  async expectAllProductDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.allProduct), timeoutMs);
  }

  async expectAllProductText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.allProduct), expected, timeoutMs);
  }

  async expectAllProductContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.allProduct), substring, timeoutMs);
  }

  async scrollAllProductIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.allProduct));
  }

  async clickAllPriority(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.allPriority));
  }

  async doubleClickAllPriority(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.allPriority));
  }

  async expectAllPriorityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.allPriority), timeoutMs);
  }

  async expectAllPriorityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.allPriority), timeoutMs);
  }

  async expectAllPriorityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.allPriority), timeoutMs);
  }

  async expectAllPriorityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.allPriority), timeoutMs);
  }

  async expectAllPriorityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.allPriority), expected, timeoutMs);
  }

  async expectAllPriorityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.allPriority), substring, timeoutMs);
  }

  async scrollAllPriorityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.allPriority));
  }

  async getInnerTextCasesNeedingYourAttention(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.casesNeedingYourAttention));
  }

  async expectCasesNeedingYourAttentionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), timeoutMs);
  }

  async expectCasesNeedingYourAttentionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), timeoutMs);
  }

  async expectCasesNeedingYourAttentionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), expected, timeoutMs);
  }

  async expectCasesNeedingYourAttentionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), substring, timeoutMs);
  }

  async scrollCasesNeedingYourAttentionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.casesNeedingYourAttention));
  }

  async getInnerTextUkgProWfm(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.ukgProWfm));
  }

  async expectUkgProWfmVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.ukgProWfm), timeoutMs);
  }

  async expectUkgProWfmHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.ukgProWfm), timeoutMs);
  }

  async expectUkgProWfmText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.ukgProWfm), expected, timeoutMs);
  }

  async expectUkgProWfmContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.ukgProWfm), substring, timeoutMs);
  }

  async scrollUkgProWfmIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.ukgProWfm));
  }

  async getInnerTextElement2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.element2));
  }

  async expectElement2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.element2), timeoutMs);
  }

  async expectElement2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.element2), timeoutMs);
  }

  async expectElement2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.element2), expected, timeoutMs);
  }

  async expectElement2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.element2), substring, timeoutMs);
  }

  async scrollElement2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.element2));
  }

  async getInnerTextDOpen(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.dOpen));
  }

  async expectDOpenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.dOpen), timeoutMs);
  }

  async expectDOpenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.dOpen), timeoutMs);
  }

  async expectDOpenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.dOpen), expected, timeoutMs);
  }

  async expectDOpenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.dOpen), substring, timeoutMs);
  }

  async scrollDOpenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.dOpen));
  }

  async getInnerTextWfcTimeClock2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.wfcTimeClock2));
  }

  async expectWfcTimeClock2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.wfcTimeClock2), timeoutMs);
  }

  async expectWfcTimeClock2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.wfcTimeClock2), timeoutMs);
  }

  async expectWfcTimeClock2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.wfcTimeClock2), expected, timeoutMs);
  }

  async expectWfcTimeClock2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.wfcTimeClock2), substring, timeoutMs);
  }

  async scrollWfcTimeClock2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.wfcTimeClock2));
  }

  async getInnerTextElement3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.element3));
  }

  async expectElement3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.element3), timeoutMs);
  }

  async expectElement3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.element3), timeoutMs);
  }

  async expectElement3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.element3), expected, timeoutMs);
  }

  async expectElement3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.element3), substring, timeoutMs);
  }

  async scrollElement3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.element3));
  }

  async getInnerTextDOpen2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.dOpen2));
  }

  async expectDOpen2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.dOpen2), timeoutMs);
  }

  async expectDOpen2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.dOpen2), timeoutMs);
  }

  async expectDOpen2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.dOpen2), expected, timeoutMs);
  }

  async expectDOpen2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.dOpen2), substring, timeoutMs);
  }

  async scrollDOpen2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.dOpen2));
  }

  async getInnerTextAutoSchedulerGenerationNo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo));
  }

  async expectAutoSchedulerGenerationNoVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), timeoutMs);
  }

  async expectAutoSchedulerGenerationNoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), timeoutMs);
  }

  async expectAutoSchedulerGenerationNoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), expected, timeoutMs);
  }

  async expectAutoSchedulerGenerationNoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), substring, timeoutMs);
  }

  async scrollAutoSchedulerGenerationNoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo));
  }

  async getInnerTextCaseVolumeLast(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.caseVolumeLast));
  }

  async expectCaseVolumeLastVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.caseVolumeLast), timeoutMs);
  }

  async expectCaseVolumeLastHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.caseVolumeLast), timeoutMs);
  }

  async expectCaseVolumeLastText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.caseVolumeLast), expected, timeoutMs);
  }

  async expectCaseVolumeLastContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.caseVolumeLast), substring, timeoutMs);
  }

  async scrollCaseVolumeLastIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.caseVolumeLast));
  }

  async getInnerTextTotalCases(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.totalCases));
  }

  async expectTotalCasesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.totalCases), timeoutMs);
  }

  async expectTotalCasesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.totalCases), timeoutMs);
  }

  async expectTotalCasesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.totalCases), expected, timeoutMs);
  }

  async expectTotalCasesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.totalCases), substring, timeoutMs);
  }

  async scrollTotalCasesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.totalCases));
  }

  async getInnerTextElement4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.element4));
  }

  async expectElement4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.element4), timeoutMs);
  }

  async expectElement4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.element4), timeoutMs);
  }

  async expectElement4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.element4), expected, timeoutMs);
  }

  async expectElement4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.element4), substring, timeoutMs);
  }

  async scrollElement4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.element4));
  }

  async getInnerTextActive(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.active));
  }

  async expectActiveVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.active), timeoutMs);
  }

  async expectActiveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.active), timeoutMs);
  }

  async expectActiveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.active), expected, timeoutMs);
  }

  async expectActiveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.active), substring, timeoutMs);
  }

  async scrollActiveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.active));
  }

  async getInnerTextClosed(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SupportPage.L.closed));
  }

  async expectClosedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SupportPage.L.closed), timeoutMs);
  }

  async expectClosedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SupportPage.L.closed), timeoutMs);
  }

  async expectClosedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.closed), expected, timeoutMs);
  }

  async expectClosedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.closed), substring, timeoutMs);
  }

  async scrollClosedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SupportPage.L.closed));
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

  // ── table[aria-label="Active cases"] ──────────────────────────────────────────────

  /** Text of any cell. row is 0-based; col is column name or 0-based index. */
  async getActiveCasesTableText(row: number, col: number | string): Promise<string> {
    return this.activeCases.getText(row, col);
  }

  /** All text values for a column across every row. */
  async getActiveCasesTableColumn(col: number | string): Promise<string[]> {
    return this.activeCases.getColumn(col);
  }

  /** All cell values for a row as { "Column Name": "value" }. */
  async getActiveCasesTableRowData(row: number): Promise<Record<string, string>> {
    return this.activeCases.getRowData(row);
  }

  /** First row where col equals value (exact). Pass exact=false for contains match. */
  async findActiveCasesTableRow(col: number | string, value: string, exact = true): Promise<number> {
    return this.activeCases.findRow(col, value, exact);
  }

  /** First row where any cell contains text (case-insensitive). */
  async findActiveCasesTableRowByText(text: string): Promise<number> {
    return this.activeCases.findRowByText(text);
  }

  /** Total number of body rows. */
  async getActiveCasesTableRowCount(): Promise<number> {
    return this.activeCases.rowCount();
  }

  /** Click the <a> link inside a cell. */
  async clickActiveCasesTableLink(row: number, col: number | string): Promise<void> {
    return this.activeCases.clickLink(row, col);
  }

  /** href of the link inside a cell, or null if there is no link. */
  async getActiveCasesTableLinkHref(row: number, col: number | string): Promise<string | null> {
    const cell = await this.activeCases.cell(row, col);
    const link = cell.locator('a');
    return (await link.count()) > 0 ? link.getAttribute('href') : null;
  }

  /** Check the row selection checkbox (idempotent). */
  async checkActiveCasesTableRow(row: number): Promise<void> {
    const cb = this.activeCases.row(row).locator('input[type="checkbox"]').first();
    if (await cb.isChecked()) return;
    await cb.check({ force: true });
  }

  /** Uncheck the row selection checkbox (idempotent). */
  async uncheckActiveCasesTableRow(row: number): Promise<void> {
    const cb = this.activeCases.row(row).locator('input[type="checkbox"]').first();
    if (!(await cb.isChecked())) return;
    await cb.uncheck({ force: true });
  }

  /** Whether the row selection checkbox is currently checked. */
  async isActiveCasesTableRowChecked(row: number): Promise<boolean> {
    return this.activeCases.row(row).locator('input[type="checkbox"]').first().isChecked();
  }

  /** Current state of the toggle switch (role="switch") in the row — true = on/active. */
  async getActiveCasesTableSwitchState(row: number): Promise<boolean> {
    return this.activeCases.getSwitchState(row);
  }

  /** Toggle the switch in a row. Pass targetState=true/false to set explicitly. */
  async toggleActiveCasesTableSwitch(row: number, targetState?: boolean): Promise<void> {
    return this.activeCases.toggleSwitch(row, targetState);
  }

  /** Click a button in a row by optional label; omit label to click the last button (action menu). */
  async clickActiveCasesTableButton(row: number, label?: string): Promise<void> {
    return this.activeCases.clickButton(row, label);
  }

  /** Click a named option inside an already-open row action dropdown. */
  async clickActiveCasesTableMenuOption(label: string): Promise<void> {
    return this.activeCases.clickMenuOption(label);
  }

  /** Click a column header to sort. Call twice to reverse direction. */
  async sortActiveCasesTableBy(col: string): Promise<void> {
    return this.activeCases.sortBy(col);
  }

  /** Locator for any element inside a row — toggles, buttons, custom controls. */
  getActiveCasesTableInRow(row: number, selector: string): Locator {
    return this.activeCases.getInRow(row, selector);
  }


  async clickHighPriorityCase24094963(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.highPriorityCase24094963));
  }

  async doubleClickHighPriorityCase24094963(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.highPriorityCase24094963));
  }

  async longPressHighPriorityCase24094963(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.highPriorityCase24094963));
  }

  async expectHighPriorityCase24094963Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.highPriorityCase24094963), value, timeoutMs);
  }

  async expectHighPriorityCase24094963Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.highPriorityCase24094963), timeoutMs);
  }

  async expectHighPriorityCase24094963Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.highPriorityCase24094963), timeoutMs);
  }

  async expectHighPriorityCase24094963Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.highPriorityCase24094963), timeoutMs);
  }

  async expectHighPriorityCase24094963Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.highPriorityCase24094963), timeoutMs);
  }

  async expectHighPriorityCase24094963Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.highPriorityCase24094963), timeoutMs);
  }

  async expectHighPriorityCase24094963Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.highPriorityCase24094963), count, timeoutMs);
  }

  async clickWfcTimeClock(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.wfcTimeClock));
  }

  async doubleClickWfcTimeClock(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.wfcTimeClock));
  }

  async longPressWfcTimeClock(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.wfcTimeClock));
  }

  async expectWfcTimeClockValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.wfcTimeClock), value, timeoutMs);
  }

  async expectWfcTimeClockEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.wfcTimeClock), timeoutMs);
  }

  async expectWfcTimeClockDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.wfcTimeClock), timeoutMs);
  }

  async expectWfcTimeClockChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.wfcTimeClock), timeoutMs);
  }

  async expectWfcTimeClockUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.wfcTimeClock), timeoutMs);
  }

  async expectWfcTimeClockFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.wfcTimeClock), timeoutMs);
  }

  async expectWfcTimeClockCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.wfcTimeClock), count, timeoutMs);
  }

  async longPressViewCase(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.viewCase));
  }

  async expectViewCaseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.viewCase), value, timeoutMs);
  }

  async expectViewCaseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.viewCase), timeoutMs);
  }

  async expectViewCaseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.viewCase), timeoutMs);
  }

  async expectViewCaseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.viewCase), timeoutMs);
  }

  async expectViewCaseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.viewCase), count, timeoutMs);
  }

  async clickAtlasInsightsSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.atlasInsightsSupport));
  }

  async doubleClickAtlasInsightsSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.atlasInsightsSupport));
  }

  async longPressAtlasInsightsSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.atlasInsightsSupport));
  }

  async expectAtlasInsightsSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.atlasInsightsSupport), value, timeoutMs);
  }

  async expectAtlasInsightsSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.atlasInsightsSupport), timeoutMs);
  }

  async expectAtlasInsightsSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.atlasInsightsSupport), timeoutMs);
  }

  async expectAtlasInsightsSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.atlasInsightsSupport), timeoutMs);
  }

  async expectAtlasInsightsSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.atlasInsightsSupport), timeoutMs);
  }

  async expectAtlasInsightsSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.atlasInsightsSupport), timeoutMs);
  }

  async expectAtlasInsightsSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.atlasInsightsSupport), count, timeoutMs);
  }

  async longPressCaseStatusOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.caseStatusOverview));
  }

  async expectCaseStatusOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.caseStatusOverview), value, timeoutMs);
  }

  async expectCaseStatusOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.caseStatusOverview), timeoutMs);
  }

  async expectCaseStatusOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.caseStatusOverview), timeoutMs);
  }

  async expectCaseStatusOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.caseStatusOverview), timeoutMs);
  }

  async expectCaseStatusOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.caseStatusOverview), count, timeoutMs);
  }

  async longPressHighPriorityOpenCases(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.highPriorityOpenCases));
  }

  async expectHighPriorityOpenCasesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.highPriorityOpenCases), value, timeoutMs);
  }

  async expectHighPriorityOpenCasesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.highPriorityOpenCases), timeoutMs);
  }

  async expectHighPriorityOpenCasesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.highPriorityOpenCases), timeoutMs);
  }

  async expectHighPriorityOpenCasesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.highPriorityOpenCases), timeoutMs);
  }

  async expectHighPriorityOpenCasesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.highPriorityOpenCases), count, timeoutMs);
  }

  async longPressResolvedCases(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.resolvedCases));
  }

  async expectResolvedCasesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.resolvedCases), value, timeoutMs);
  }

  async expectResolvedCasesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.resolvedCases), timeoutMs);
  }

  async expectResolvedCasesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.resolvedCases), timeoutMs);
  }

  async expectResolvedCasesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.resolvedCases), timeoutMs);
  }

  async expectResolvedCasesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.resolvedCases), count, timeoutMs);
  }

  async longPressOpenNewCase(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.openNewCase));
  }

  async expectOpenNewCaseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.openNewCase), value, timeoutMs);
  }

  async expectOpenNewCaseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.openNewCase), timeoutMs);
  }

  async expectOpenNewCaseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.openNewCase), timeoutMs);
  }

  async expectOpenNewCaseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.openNewCase), timeoutMs);
  }

  async expectOpenNewCaseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.openNewCase), count, timeoutMs);
  }

  async clickSupportOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.supportOverview));
  }

  async doubleClickSupportOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.supportOverview));
  }

  async longPressSupportOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.supportOverview));
  }

  async expectSupportOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.supportOverview), value, timeoutMs);
  }

  async expectSupportOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.supportOverview), timeoutMs);
  }

  async expectSupportOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.supportOverview), timeoutMs);
  }

  async expectSupportOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.supportOverview), timeoutMs);
  }

  async expectSupportOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.supportOverview), timeoutMs);
  }

  async expectSupportOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.supportOverview), timeoutMs);
  }

  async expectSupportOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.supportOverview), count, timeoutMs);
  }

  async clickOpenCases(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.openCases));
  }

  async doubleClickOpenCases(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.openCases));
  }

  async longPressOpenCases(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.openCases));
  }

  async expectOpenCasesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.openCases), value, timeoutMs);
  }

  async expectOpenCasesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.openCases), timeoutMs);
  }

  async expectOpenCasesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.openCases), timeoutMs);
  }

  async expectOpenCasesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.openCases), timeoutMs);
  }

  async expectOpenCasesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.openCases), timeoutMs);
  }

  async expectOpenCasesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.openCases), timeoutMs);
  }

  async expectOpenCasesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.openCases), count, timeoutMs);
  }

  async clickAwaitingResponse(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.awaitingResponse));
  }

  async doubleClickAwaitingResponse(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.awaitingResponse));
  }

  async longPressAwaitingResponse(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.awaitingResponse));
  }

  async expectAwaitingResponseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.awaitingResponse), value, timeoutMs);
  }

  async expectAwaitingResponseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.awaitingResponse), timeoutMs);
  }

  async expectAwaitingResponseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.awaitingResponse), timeoutMs);
  }

  async expectAwaitingResponseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.awaitingResponse), timeoutMs);
  }

  async expectAwaitingResponseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.awaitingResponse), timeoutMs);
  }

  async expectAwaitingResponseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.awaitingResponse), timeoutMs);
  }

  async expectAwaitingResponseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.awaitingResponse), count, timeoutMs);
  }

  async clickCasesResolvedIn30(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.casesResolvedIn30));
  }

  async doubleClickCasesResolvedIn30(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.casesResolvedIn30));
  }

  async longPressCasesResolvedIn30(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.casesResolvedIn30));
  }

  async expectCasesResolvedIn30Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.casesResolvedIn30), value, timeoutMs);
  }

  async expectCasesResolvedIn30Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.casesResolvedIn30), timeoutMs);
  }

  async expectCasesResolvedIn30Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.casesResolvedIn30), timeoutMs);
  }

  async expectCasesResolvedIn30Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.casesResolvedIn30), timeoutMs);
  }

  async expectCasesResolvedIn30Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.casesResolvedIn30), timeoutMs);
  }

  async expectCasesResolvedIn30Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.casesResolvedIn30), timeoutMs);
  }

  async expectCasesResolvedIn30Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.casesResolvedIn30), count, timeoutMs);
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.element));
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.element), count, timeoutMs);
  }

  async longPressActiveCases(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.activeCases));
  }

  async expectActiveCasesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.activeCases), value, timeoutMs);
  }

  async expectActiveCasesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.activeCases), timeoutMs);
  }

  async expectActiveCasesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.activeCases), timeoutMs);
  }

  async expectActiveCasesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.activeCases), timeoutMs);
  }

  async expectActiveCasesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.activeCases), count, timeoutMs);
  }

  async expectInputInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SupportPage.L.inputInput), expected, timeoutMs);
  }

  async expectInputInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SupportPage.L.inputInput), substring, timeoutMs);
  }

  async expectInputInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.inputInput), timeoutMs);
  }

  async expectInputInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.inputInput), timeoutMs);
  }

  async expectInputInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.inputInput), count, timeoutMs);
  }

  async longPressAllProduct(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.allProduct));
  }

  async expectAllProductValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.allProduct), value, timeoutMs);
  }

  async expectAllProductChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.allProduct), timeoutMs);
  }

  async expectAllProductUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.allProduct), timeoutMs);
  }

  async expectAllProductFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.allProduct), timeoutMs);
  }

  async expectAllProductCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.allProduct), count, timeoutMs);
  }

  async longPressAllPriority(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.allPriority));
  }

  async expectAllPriorityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.allPriority), value, timeoutMs);
  }

  async expectAllPriorityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.allPriority), timeoutMs);
  }

  async expectAllPriorityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.allPriority), timeoutMs);
  }

  async expectAllPriorityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.allPriority), timeoutMs);
  }

  async expectAllPriorityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.allPriority), count, timeoutMs);
  }

  async clickCasesNeedingYourAttention(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.casesNeedingYourAttention));
  }

  async doubleClickCasesNeedingYourAttention(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.casesNeedingYourAttention));
  }

  async longPressCasesNeedingYourAttention(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.casesNeedingYourAttention));
  }

  async expectCasesNeedingYourAttentionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), value, timeoutMs);
  }

  async expectCasesNeedingYourAttentionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), timeoutMs);
  }

  async expectCasesNeedingYourAttentionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), timeoutMs);
  }

  async expectCasesNeedingYourAttentionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), timeoutMs);
  }

  async expectCasesNeedingYourAttentionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), timeoutMs);
  }

  async expectCasesNeedingYourAttentionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), timeoutMs);
  }

  async expectCasesNeedingYourAttentionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.casesNeedingYourAttention), count, timeoutMs);
  }

  async clickUkgProWfm(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.ukgProWfm));
  }

  async doubleClickUkgProWfm(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.ukgProWfm));
  }

  async longPressUkgProWfm(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.ukgProWfm));
  }

  async expectUkgProWfmValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.ukgProWfm), value, timeoutMs);
  }

  async expectUkgProWfmEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.ukgProWfm), timeoutMs);
  }

  async expectUkgProWfmDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.ukgProWfm), timeoutMs);
  }

  async expectUkgProWfmChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.ukgProWfm), timeoutMs);
  }

  async expectUkgProWfmUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.ukgProWfm), timeoutMs);
  }

  async expectUkgProWfmFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.ukgProWfm), timeoutMs);
  }

  async expectUkgProWfmCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.ukgProWfm), count, timeoutMs);
  }

  async clickElement2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.element2));
  }

  async doubleClickElement2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.element2));
  }

  async longPressElement2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.element2));
  }

  async expectElement2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.element2), value, timeoutMs);
  }

  async expectElement2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.element2), timeoutMs);
  }

  async expectElement2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.element2), timeoutMs);
  }

  async expectElement2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.element2), timeoutMs);
  }

  async expectElement2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.element2), timeoutMs);
  }

  async expectElement2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.element2), timeoutMs);
  }

  async expectElement2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.element2), count, timeoutMs);
  }

  async clickDOpen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.dOpen));
  }

  async doubleClickDOpen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.dOpen));
  }

  async longPressDOpen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.dOpen));
  }

  async expectDOpenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.dOpen), value, timeoutMs);
  }

  async expectDOpenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.dOpen), timeoutMs);
  }

  async expectDOpenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.dOpen), timeoutMs);
  }

  async expectDOpenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.dOpen), timeoutMs);
  }

  async expectDOpenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.dOpen), timeoutMs);
  }

  async expectDOpenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.dOpen), timeoutMs);
  }

  async expectDOpenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.dOpen), count, timeoutMs);
  }

  async clickWfcTimeClock2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.wfcTimeClock2));
  }

  async doubleClickWfcTimeClock2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.wfcTimeClock2));
  }

  async longPressWfcTimeClock2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.wfcTimeClock2));
  }

  async expectWfcTimeClock2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.wfcTimeClock2), value, timeoutMs);
  }

  async expectWfcTimeClock2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.wfcTimeClock2), timeoutMs);
  }

  async expectWfcTimeClock2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.wfcTimeClock2), timeoutMs);
  }

  async expectWfcTimeClock2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.wfcTimeClock2), timeoutMs);
  }

  async expectWfcTimeClock2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.wfcTimeClock2), timeoutMs);
  }

  async expectWfcTimeClock2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.wfcTimeClock2), timeoutMs);
  }

  async expectWfcTimeClock2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.wfcTimeClock2), count, timeoutMs);
  }

  async clickElement3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.element3));
  }

  async doubleClickElement3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.element3));
  }

  async longPressElement3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.element3));
  }

  async expectElement3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.element3), value, timeoutMs);
  }

  async expectElement3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.element3), timeoutMs);
  }

  async expectElement3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.element3), timeoutMs);
  }

  async expectElement3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.element3), timeoutMs);
  }

  async expectElement3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.element3), timeoutMs);
  }

  async expectElement3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.element3), timeoutMs);
  }

  async expectElement3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.element3), count, timeoutMs);
  }

  async clickDOpen2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.dOpen2));
  }

  async doubleClickDOpen2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.dOpen2));
  }

  async longPressDOpen2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.dOpen2));
  }

  async expectDOpen2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.dOpen2), value, timeoutMs);
  }

  async expectDOpen2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.dOpen2), timeoutMs);
  }

  async expectDOpen2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.dOpen2), timeoutMs);
  }

  async expectDOpen2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.dOpen2), timeoutMs);
  }

  async expectDOpen2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.dOpen2), timeoutMs);
  }

  async expectDOpen2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.dOpen2), timeoutMs);
  }

  async expectDOpen2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.dOpen2), count, timeoutMs);
  }

  async clickAutoSchedulerGenerationNo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo));
  }

  async doubleClickAutoSchedulerGenerationNo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo));
  }

  async longPressAutoSchedulerGenerationNo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo));
  }

  async expectAutoSchedulerGenerationNoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), value, timeoutMs);
  }

  async expectAutoSchedulerGenerationNoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), timeoutMs);
  }

  async expectAutoSchedulerGenerationNoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), timeoutMs);
  }

  async expectAutoSchedulerGenerationNoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), timeoutMs);
  }

  async expectAutoSchedulerGenerationNoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), timeoutMs);
  }

  async expectAutoSchedulerGenerationNoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), timeoutMs);
  }

  async expectAutoSchedulerGenerationNoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.autoSchedulerGenerationNo), count, timeoutMs);
  }

  async clickCaseVolumeLast(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.caseVolumeLast));
  }

  async doubleClickCaseVolumeLast(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.caseVolumeLast));
  }

  async longPressCaseVolumeLast(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.caseVolumeLast));
  }

  async expectCaseVolumeLastValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.caseVolumeLast), value, timeoutMs);
  }

  async expectCaseVolumeLastEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.caseVolumeLast), timeoutMs);
  }

  async expectCaseVolumeLastDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.caseVolumeLast), timeoutMs);
  }

  async expectCaseVolumeLastChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.caseVolumeLast), timeoutMs);
  }

  async expectCaseVolumeLastUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.caseVolumeLast), timeoutMs);
  }

  async expectCaseVolumeLastFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.caseVolumeLast), timeoutMs);
  }

  async expectCaseVolumeLastCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.caseVolumeLast), count, timeoutMs);
  }

  async clickTotalCases(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.totalCases));
  }

  async doubleClickTotalCases(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.totalCases));
  }

  async longPressTotalCases(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.totalCases));
  }

  async expectTotalCasesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.totalCases), value, timeoutMs);
  }

  async expectTotalCasesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.totalCases), timeoutMs);
  }

  async expectTotalCasesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.totalCases), timeoutMs);
  }

  async expectTotalCasesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.totalCases), timeoutMs);
  }

  async expectTotalCasesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.totalCases), timeoutMs);
  }

  async expectTotalCasesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.totalCases), timeoutMs);
  }

  async expectTotalCasesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.totalCases), count, timeoutMs);
  }

  async clickElement4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.element4));
  }

  async doubleClickElement4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.element4));
  }

  async longPressElement4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.element4));
  }

  async expectElement4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.element4), value, timeoutMs);
  }

  async expectElement4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.element4), timeoutMs);
  }

  async expectElement4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.element4), timeoutMs);
  }

  async expectElement4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.element4), timeoutMs);
  }

  async expectElement4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.element4), timeoutMs);
  }

  async expectElement4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.element4), timeoutMs);
  }

  async expectElement4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.element4), count, timeoutMs);
  }

  async clickActive(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.active));
  }

  async doubleClickActive(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.active));
  }

  async longPressActive(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.active));
  }

  async expectActiveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.active), value, timeoutMs);
  }

  async expectActiveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.active), timeoutMs);
  }

  async expectActiveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.active), timeoutMs);
  }

  async expectActiveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.active), timeoutMs);
  }

  async expectActiveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.active), timeoutMs);
  }

  async expectActiveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.active), timeoutMs);
  }

  async expectActiveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.active), count, timeoutMs);
  }

  async clickClosed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SupportPage.L.closed));
  }

  async doubleClickClosed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SupportPage.L.closed));
  }

  async longPressClosed(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SupportPage.L.closed));
  }

  async expectClosedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SupportPage.L.closed), value, timeoutMs);
  }

  async expectClosedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SupportPage.L.closed), timeoutMs);
  }

  async expectClosedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SupportPage.L.closed), timeoutMs);
  }

  async expectClosedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SupportPage.L.closed), timeoutMs);
  }

  async expectClosedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SupportPage.L.closed), timeoutMs);
  }

  async expectClosedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SupportPage.L.closed), timeoutMs);
  }

  async expectClosedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SupportPage.L.closed), count, timeoutMs);
  }

}

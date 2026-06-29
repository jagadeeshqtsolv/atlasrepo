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

export class BillingPage {
  private static readonly L = {
    paymentOverdueService: { strategy: 'text' as const, value: 'Payment overdue – service interruption risk', actionKind: 'text' as const },
    yourUkgProInvoice: { strategy: 'text' as const, value: 'Your UKG Pro invoice no IO1100057620 is past due.', actionKind: 'text' as const },
    atlasInsightsBilling: { strategy: 'text' as const, value: 'Atlas Insights · Billing', actionKind: 'text' as const },
    outstandingBalance: { strategy: 'role' as const, value: 'Outstanding balance', role: 'button', actionKind: 'button' as const },
    paymentTerms: { strategy: 'role' as const, value: 'Payment terms', role: 'button', actionKind: 'button' as const },
    billingHistory: { strategy: 'role' as const, value: 'Billing history', role: 'button', actionKind: 'button' as const },
    creditNotes: { strategy: 'role' as const, value: 'Credit notes', role: 'button', actionKind: 'button' as const },
    m: { strategy: 'text' as const, value: '$22.2M', actionKind: 'text' as const },
    openDue: { strategy: 'text' as const, value: '1 open · Due 14-Aug-2026', actionKind: 'text' as const },
    ytdPaid: { strategy: 'text' as const, value: 'YTD paid', actionKind: 'text' as const },
    m2: { strategy: 'text' as const, value: '$40.9M', actionKind: 'text' as const },
    invoicesPaid: { strategy: 'text' as const, value: '2 invoices · Paid in full', actionKind: 'text' as const },
    nextCharge: { strategy: 'text' as const, value: 'Next charge', actionKind: 'text' as const },
    us16400: { strategy: 'text' as const, value: 'US$16,400', actionKind: 'text' as const },
    vsLast: { strategy: 'text' as const, value: '↑ 8.4% vs last quarter', actionKind: 'text' as const },
    spendTrend12Months: { strategy: 'text' as const, value: 'Spend trend (12 months)', actionKind: 'text' as const },
    invoices: { strategy: 'role' as const, value: 'Invoices', role: 'button', actionKind: 'button' as const },
    paymentHistory: { strategy: 'role' as const, value: 'Payment history', role: 'button', actionKind: 'button' as const },
    spendBreakdown: { strategy: 'role' as const, value: 'Spend breakdown', role: 'button', actionKind: 'button' as const },
    inputInput: { strategy: 'placeholder' as const, value: 'Search invoices', actionKind: 'textbox' as const },
    status: { strategy: 'role' as const, value: 'Status', role: 'button', actionKind: 'button' as const },
    exportAsCsv: { strategy: 'role' as const, value: 'Export as CSV', role: 'button', actionKind: 'button' as const },
    billingEstimate: { strategy: 'text' as const, value: 'Billing estimate', actionKind: 'text' as const },
    amountsAreEstimatesBased: { strategy: 'text' as const, value: 'Amounts are estimates based on current usage and', actionKind: 'text' as const },
    us1640032: { strategy: 'text' as const, value: 'US$16,400.32', actionKind: 'text' as const },
    estBillingDate: { strategy: 'text' as const, value: 'Est. billing date : Jun 30, 2026', actionKind: 'text' as const },
    solutions: { strategy: 'text' as const, value: 'Solutions', actionKind: 'text' as const },
    amount: { strategy: 'text' as const, value: 'Amount', actionKind: 'text' as const },
    ukgProWfmEnterprise: { strategy: 'role' as const, value: 'UKG Pro WFM Enterprise $10,000.32', role: 'button', actionKind: 'button' as const },
    ukgReadyGrowth2500: { strategy: 'role' as const, value: 'UKG Ready Growth $2,500', role: 'button', actionKind: 'button' as const },
    premiumSuccess3000: { strategy: 'role' as const, value: 'Premium Success $3,000', role: 'button', actionKind: 'button' as const },
    ukgDimensions900: { strategy: 'role' as const, value: 'UKG Dimensions $900', role: 'button', actionKind: 'button' as const },
    upcomingPayments: { strategy: 'text' as const, value: 'Upcoming Payments', actionKind: 'text' as const },
    ukgProWorkforce: { strategy: 'text' as const, value: 'UKG Pro Workforce', actionKind: 'text' as const },
    ukgProCore: { strategy: 'text' as const, value: 'UKG Pro Core', actionKind: 'text' as const },
    element: { strategy: 'text' as const, value: '$128,400', actionKind: 'text' as const },
    dueDate: { strategy: 'text' as const, value: 'Due Date :', actionKind: 'text' as const },
    jun152026: { strategy: 'text' as const, value: 'Jun 15, 2026', actionKind: 'text' as const },
    dLeft: { strategy: 'text' as const, value: '15D left', actionKind: 'text' as const },
    ukgReady: { strategy: 'text' as const, value: 'UKG Ready', actionKind: 'text' as const },
    ukgReadyHcm: { strategy: 'text' as const, value: 'UKG Ready HCM', actionKind: 'text' as const },
    element2: { strategy: 'text' as const, value: '$54,200', actionKind: 'text' as const },
    jun202026: { strategy: 'text' as const, value: 'Jun 20, 2026', actionKind: 'text' as const },
    dLeft2: { strategy: 'text' as const, value: '20D left', actionKind: 'text' as const },
    ukgReadyPro: { strategy: 'text' as const, value: 'UKG Ready Pro', actionKind: 'text' as const },
    element3: { strategy: 'text' as const, value: '$37,600', actionKind: 'text' as const },
    jun302026: { strategy: 'text' as const, value: 'Jun 30, 2026', actionKind: 'text' as const },
    dLeft3: { strategy: 'text' as const, value: '30D left', actionKind: 'text' as const },
    totalDueThisMonth: { strategy: 'text' as const, value: 'Total due this month', actionKind: 'text' as const },
    element4: { strategy: 'text' as const, value: '$220,200', actionKind: 'text' as const },
    invoiceSummary: { strategy: 'text' as const, value: 'Invoice summary', actionKind: 'text' as const },
    paidInvoices: { strategy: 'text' as const, value: 'Paid invoices', actionKind: 'text' as const },
    element5: { strategy: 'text' as const, value: '24', actionKind: 'text' as const },
    dueThisMonth: { strategy: 'text' as const, value: 'Due this month', actionKind: 'text' as const },
    overdue: { strategy: 'text' as const, value: 'Overdue', actionKind: 'text' as const },
  } as const;

  readonly invoices: WebTable; // columns: ["Invoice", "Description", "Issued on", "Due Date", "Amount", "Status", ""]

  constructor(private readonly page: Page) {
    this.invoices = webTable(this.page, 'table[aria-label="Invoices"]');
  }

  async getInnerTextPaymentOverdueService(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.paymentOverdueService));
  }

  async expectPaymentOverdueServiceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.paymentOverdueService), timeoutMs);
  }

  async expectPaymentOverdueServiceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.paymentOverdueService), timeoutMs);
  }

  async expectPaymentOverdueServiceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.paymentOverdueService), expected, timeoutMs);
  }

  async expectPaymentOverdueServiceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.paymentOverdueService), substring, timeoutMs);
  }

  async scrollPaymentOverdueServiceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.paymentOverdueService));
  }

  async getInnerTextYourUkgProInvoice(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.yourUkgProInvoice));
  }

  async expectYourUkgProInvoiceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.yourUkgProInvoice), timeoutMs);
  }

  async expectYourUkgProInvoiceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.yourUkgProInvoice), timeoutMs);
  }

  async expectYourUkgProInvoiceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.yourUkgProInvoice), expected, timeoutMs);
  }

  async expectYourUkgProInvoiceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.yourUkgProInvoice), substring, timeoutMs);
  }

  async scrollYourUkgProInvoiceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.yourUkgProInvoice));
  }

  async getInnerTextAtlasInsightsBilling(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.atlasInsightsBilling));
  }

  async expectAtlasInsightsBillingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.atlasInsightsBilling), timeoutMs);
  }

  async expectAtlasInsightsBillingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.atlasInsightsBilling), timeoutMs);
  }

  async expectAtlasInsightsBillingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.atlasInsightsBilling), expected, timeoutMs);
  }

  async expectAtlasInsightsBillingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.atlasInsightsBilling), substring, timeoutMs);
  }

  async scrollAtlasInsightsBillingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.atlasInsightsBilling));
  }

  async clickOutstandingBalance(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.outstandingBalance));
  }

  async doubleClickOutstandingBalance(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.outstandingBalance));
  }

  async expectOutstandingBalanceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.outstandingBalance), timeoutMs);
  }

  async expectOutstandingBalanceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.outstandingBalance), timeoutMs);
  }

  async expectOutstandingBalanceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.outstandingBalance), timeoutMs);
  }

  async expectOutstandingBalanceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.outstandingBalance), timeoutMs);
  }

  async expectOutstandingBalanceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.outstandingBalance), expected, timeoutMs);
  }

  async expectOutstandingBalanceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.outstandingBalance), substring, timeoutMs);
  }

  async scrollOutstandingBalanceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.outstandingBalance));
  }

  async clickPaymentTerms(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.paymentTerms));
  }

  async doubleClickPaymentTerms(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.paymentTerms));
  }

  async expectPaymentTermsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.paymentTerms), timeoutMs);
  }

  async expectPaymentTermsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.paymentTerms), timeoutMs);
  }

  async expectPaymentTermsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.paymentTerms), timeoutMs);
  }

  async expectPaymentTermsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.paymentTerms), timeoutMs);
  }

  async expectPaymentTermsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.paymentTerms), expected, timeoutMs);
  }

  async expectPaymentTermsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.paymentTerms), substring, timeoutMs);
  }

  async scrollPaymentTermsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.paymentTerms));
  }

  async clickBillingHistory(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.billingHistory));
  }

  async doubleClickBillingHistory(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.billingHistory));
  }

  async expectBillingHistoryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.billingHistory), timeoutMs);
  }

  async expectBillingHistoryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.billingHistory), timeoutMs);
  }

  async expectBillingHistoryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.billingHistory), timeoutMs);
  }

  async expectBillingHistoryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.billingHistory), timeoutMs);
  }

  async expectBillingHistoryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.billingHistory), expected, timeoutMs);
  }

  async expectBillingHistoryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.billingHistory), substring, timeoutMs);
  }

  async scrollBillingHistoryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.billingHistory));
  }

  async clickCreditNotes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.creditNotes));
  }

  async doubleClickCreditNotes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.creditNotes));
  }

  async expectCreditNotesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.creditNotes), timeoutMs);
  }

  async expectCreditNotesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.creditNotes), timeoutMs);
  }

  async expectCreditNotesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.creditNotes), timeoutMs);
  }

  async expectCreditNotesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.creditNotes), timeoutMs);
  }

  async expectCreditNotesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.creditNotes), expected, timeoutMs);
  }

  async expectCreditNotesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.creditNotes), substring, timeoutMs);
  }

  async scrollCreditNotesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.creditNotes));
  }

  async getInnerTextM(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.m));
  }

  async expectMVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.m), timeoutMs);
  }

  async expectMHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.m), timeoutMs);
  }

  async expectMText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.m), expected, timeoutMs);
  }

  async expectMContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.m), substring, timeoutMs);
  }

  async scrollMIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.m));
  }

  async getInnerTextOpenDue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.openDue));
  }

  async expectOpenDueVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.openDue), timeoutMs);
  }

  async expectOpenDueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.openDue), timeoutMs);
  }

  async expectOpenDueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.openDue), expected, timeoutMs);
  }

  async expectOpenDueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.openDue), substring, timeoutMs);
  }

  async scrollOpenDueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.openDue));
  }

  async getInnerTextYtdPaid(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.ytdPaid));
  }

  async expectYtdPaidVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.ytdPaid), timeoutMs);
  }

  async expectYtdPaidHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.ytdPaid), timeoutMs);
  }

  async expectYtdPaidText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.ytdPaid), expected, timeoutMs);
  }

  async expectYtdPaidContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.ytdPaid), substring, timeoutMs);
  }

  async scrollYtdPaidIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.ytdPaid));
  }

  async getInnerTextM2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.m2));
  }

  async expectM2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.m2), timeoutMs);
  }

  async expectM2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.m2), timeoutMs);
  }

  async expectM2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.m2), expected, timeoutMs);
  }

  async expectM2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.m2), substring, timeoutMs);
  }

  async scrollM2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.m2));
  }

  async getInnerTextInvoicesPaid(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.invoicesPaid));
  }

  async expectInvoicesPaidVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.invoicesPaid), timeoutMs);
  }

  async expectInvoicesPaidHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.invoicesPaid), timeoutMs);
  }

  async expectInvoicesPaidText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.invoicesPaid), expected, timeoutMs);
  }

  async expectInvoicesPaidContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.invoicesPaid), substring, timeoutMs);
  }

  async scrollInvoicesPaidIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.invoicesPaid));
  }

  async getInnerTextNextCharge(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.nextCharge));
  }

  async expectNextChargeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.nextCharge), timeoutMs);
  }

  async expectNextChargeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.nextCharge), timeoutMs);
  }

  async expectNextChargeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.nextCharge), expected, timeoutMs);
  }

  async expectNextChargeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.nextCharge), substring, timeoutMs);
  }

  async scrollNextChargeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.nextCharge));
  }

  async getInnerTextUs16400(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.us16400));
  }

  async expectUs16400Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.us16400), timeoutMs);
  }

  async expectUs16400Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.us16400), timeoutMs);
  }

  async expectUs16400Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.us16400), expected, timeoutMs);
  }

  async expectUs16400ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.us16400), substring, timeoutMs);
  }

  async scrollUs16400IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.us16400));
  }

  async getInnerTextVsLast(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.vsLast));
  }

  async expectVsLastVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.vsLast), timeoutMs);
  }

  async expectVsLastHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.vsLast), timeoutMs);
  }

  async expectVsLastText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.vsLast), expected, timeoutMs);
  }

  async expectVsLastContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.vsLast), substring, timeoutMs);
  }

  async scrollVsLastIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.vsLast));
  }

  async getInnerTextSpendTrend12Months(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.spendTrend12Months));
  }

  async expectSpendTrend12MonthsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.spendTrend12Months), timeoutMs);
  }

  async expectSpendTrend12MonthsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.spendTrend12Months), timeoutMs);
  }

  async expectSpendTrend12MonthsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.spendTrend12Months), expected, timeoutMs);
  }

  async expectSpendTrend12MonthsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.spendTrend12Months), substring, timeoutMs);
  }

  async scrollSpendTrend12MonthsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.spendTrend12Months));
  }

  async clickInvoices(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.invoices));
  }

  async doubleClickInvoices(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.invoices));
  }

  async expectInvoicesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.invoices), timeoutMs);
  }

  async expectInvoicesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.invoices), timeoutMs);
  }

  async expectInvoicesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.invoices), timeoutMs);
  }

  async expectInvoicesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.invoices), timeoutMs);
  }

  async expectInvoicesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.invoices), expected, timeoutMs);
  }

  async expectInvoicesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.invoices), substring, timeoutMs);
  }

  async scrollInvoicesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.invoices));
  }

  async clickPaymentHistory(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.paymentHistory));
  }

  async doubleClickPaymentHistory(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.paymentHistory));
  }

  async expectPaymentHistoryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.paymentHistory), timeoutMs);
  }

  async expectPaymentHistoryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.paymentHistory), timeoutMs);
  }

  async expectPaymentHistoryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.paymentHistory), timeoutMs);
  }

  async expectPaymentHistoryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.paymentHistory), timeoutMs);
  }

  async expectPaymentHistoryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.paymentHistory), expected, timeoutMs);
  }

  async expectPaymentHistoryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.paymentHistory), substring, timeoutMs);
  }

  async scrollPaymentHistoryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.paymentHistory));
  }

  async clickSpendBreakdown(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.spendBreakdown));
  }

  async doubleClickSpendBreakdown(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.spendBreakdown));
  }

  async expectSpendBreakdownVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.spendBreakdown), timeoutMs);
  }

  async expectSpendBreakdownHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.spendBreakdown), timeoutMs);
  }

  async expectSpendBreakdownEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.spendBreakdown), timeoutMs);
  }

  async expectSpendBreakdownDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.spendBreakdown), timeoutMs);
  }

  async expectSpendBreakdownText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.spendBreakdown), expected, timeoutMs);
  }

  async expectSpendBreakdownContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.spendBreakdown), substring, timeoutMs);
  }

  async scrollSpendBreakdownIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.spendBreakdown));
  }

  async fillInputInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, BillingPage.L.inputInput), value);
  }

  async clearInputInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, BillingPage.L.inputInput));
  }

  async typeTextInputInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, BillingPage.L.inputInput), value);
  }

  async expectInputInputVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.inputInput), timeoutMs);
  }

  async expectInputInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.inputInput), timeoutMs);
  }

  async expectInputInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.inputInput), timeoutMs);
  }

  async expectInputInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.inputInput), timeoutMs);
  }

  async expectInputInputValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.inputInput), expected, timeoutMs);
  }

  async expectInputInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.inputInput), timeoutMs);
  }

  async scrollInputInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.inputInput));
  }

  async clickStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.status));
  }

  async doubleClickStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.status));
  }

  async expectStatusVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.status), timeoutMs);
  }

  async expectStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.status), timeoutMs);
  }

  async expectStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.status), timeoutMs);
  }

  async expectStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.status), timeoutMs);
  }

  async expectStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.status), expected, timeoutMs);
  }

  async expectStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.status), substring, timeoutMs);
  }

  async scrollStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.status));
  }

  async clickExportAsCsv(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.exportAsCsv));
  }

  async doubleClickExportAsCsv(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.exportAsCsv));
  }

  async expectExportAsCsvVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.exportAsCsv), timeoutMs);
  }

  async expectExportAsCsvHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.exportAsCsv), timeoutMs);
  }

  async expectExportAsCsvEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.exportAsCsv), timeoutMs);
  }

  async expectExportAsCsvDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.exportAsCsv), timeoutMs);
  }

  async expectExportAsCsvText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.exportAsCsv), expected, timeoutMs);
  }

  async expectExportAsCsvContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.exportAsCsv), substring, timeoutMs);
  }

  async scrollExportAsCsvIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.exportAsCsv));
  }

  async getInnerTextBillingEstimate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.billingEstimate));
  }

  async expectBillingEstimateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.billingEstimate), timeoutMs);
  }

  async expectBillingEstimateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.billingEstimate), timeoutMs);
  }

  async expectBillingEstimateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.billingEstimate), expected, timeoutMs);
  }

  async expectBillingEstimateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.billingEstimate), substring, timeoutMs);
  }

  async scrollBillingEstimateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.billingEstimate));
  }

  async getInnerTextAmountsAreEstimatesBased(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased));
  }

  async expectAmountsAreEstimatesBasedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), timeoutMs);
  }

  async expectAmountsAreEstimatesBasedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), timeoutMs);
  }

  async expectAmountsAreEstimatesBasedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), expected, timeoutMs);
  }

  async expectAmountsAreEstimatesBasedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), substring, timeoutMs);
  }

  async scrollAmountsAreEstimatesBasedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased));
  }

  async getInnerTextUs1640032(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.us1640032));
  }

  async expectUs1640032Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.us1640032), timeoutMs);
  }

  async expectUs1640032Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.us1640032), timeoutMs);
  }

  async expectUs1640032Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.us1640032), expected, timeoutMs);
  }

  async expectUs1640032ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.us1640032), substring, timeoutMs);
  }

  async scrollUs1640032IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.us1640032));
  }

  async getInnerTextEstBillingDate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.estBillingDate));
  }

  async expectEstBillingDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.estBillingDate), timeoutMs);
  }

  async expectEstBillingDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.estBillingDate), timeoutMs);
  }

  async expectEstBillingDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.estBillingDate), expected, timeoutMs);
  }

  async expectEstBillingDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.estBillingDate), substring, timeoutMs);
  }

  async scrollEstBillingDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.estBillingDate));
  }

  async getInnerTextSolutions(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.solutions));
  }

  async expectSolutionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.solutions), timeoutMs);
  }

  async expectSolutionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.solutions), timeoutMs);
  }

  async expectSolutionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.solutions), expected, timeoutMs);
  }

  async expectSolutionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.solutions), substring, timeoutMs);
  }

  async scrollSolutionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.solutions));
  }

  async getInnerTextAmount(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.amount));
  }

  async expectAmountVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.amount), timeoutMs);
  }

  async expectAmountHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.amount), timeoutMs);
  }

  async expectAmountText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.amount), expected, timeoutMs);
  }

  async expectAmountContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.amount), substring, timeoutMs);
  }

  async scrollAmountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.amount));
  }

  async clickUkgProWfmEnterprise(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.ukgProWfmEnterprise));
  }

  async doubleClickUkgProWfmEnterprise(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.ukgProWfmEnterprise));
  }

  async expectUkgProWfmEnterpriseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.ukgProWfmEnterprise), timeoutMs);
  }

  async expectUkgProWfmEnterpriseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.ukgProWfmEnterprise), timeoutMs);
  }

  async expectUkgProWfmEnterpriseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.ukgProWfmEnterprise), timeoutMs);
  }

  async expectUkgProWfmEnterpriseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.ukgProWfmEnterprise), timeoutMs);
  }

  async expectUkgProWfmEnterpriseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.ukgProWfmEnterprise), expected, timeoutMs);
  }

  async expectUkgProWfmEnterpriseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.ukgProWfmEnterprise), substring, timeoutMs);
  }

  async scrollUkgProWfmEnterpriseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.ukgProWfmEnterprise));
  }

  async clickUkgReadyGrowth2500(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.ukgReadyGrowth2500));
  }

  async doubleClickUkgReadyGrowth2500(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.ukgReadyGrowth2500));
  }

  async expectUkgReadyGrowth2500Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.ukgReadyGrowth2500), timeoutMs);
  }

  async expectUkgReadyGrowth2500Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.ukgReadyGrowth2500), timeoutMs);
  }

  async expectUkgReadyGrowth2500Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.ukgReadyGrowth2500), timeoutMs);
  }

  async expectUkgReadyGrowth2500Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.ukgReadyGrowth2500), timeoutMs);
  }

  async expectUkgReadyGrowth2500Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.ukgReadyGrowth2500), expected, timeoutMs);
  }

  async expectUkgReadyGrowth2500ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.ukgReadyGrowth2500), substring, timeoutMs);
  }

  async scrollUkgReadyGrowth2500IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.ukgReadyGrowth2500));
  }

  async clickPremiumSuccess3000(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.premiumSuccess3000));
  }

  async doubleClickPremiumSuccess3000(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.premiumSuccess3000));
  }

  async expectPremiumSuccess3000Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.premiumSuccess3000), timeoutMs);
  }

  async expectPremiumSuccess3000Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.premiumSuccess3000), timeoutMs);
  }

  async expectPremiumSuccess3000Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.premiumSuccess3000), timeoutMs);
  }

  async expectPremiumSuccess3000Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.premiumSuccess3000), timeoutMs);
  }

  async expectPremiumSuccess3000Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.premiumSuccess3000), expected, timeoutMs);
  }

  async expectPremiumSuccess3000ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.premiumSuccess3000), substring, timeoutMs);
  }

  async scrollPremiumSuccess3000IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.premiumSuccess3000));
  }

  async clickUkgDimensions900(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.ukgDimensions900));
  }

  async doubleClickUkgDimensions900(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.ukgDimensions900));
  }

  async expectUkgDimensions900Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.ukgDimensions900), timeoutMs);
  }

  async expectUkgDimensions900Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.ukgDimensions900), timeoutMs);
  }

  async expectUkgDimensions900Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.ukgDimensions900), timeoutMs);
  }

  async expectUkgDimensions900Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.ukgDimensions900), timeoutMs);
  }

  async expectUkgDimensions900Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.ukgDimensions900), expected, timeoutMs);
  }

  async expectUkgDimensions900ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.ukgDimensions900), substring, timeoutMs);
  }

  async scrollUkgDimensions900IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.ukgDimensions900));
  }

  async getInnerTextUpcomingPayments(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.upcomingPayments));
  }

  async expectUpcomingPaymentsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.upcomingPayments), timeoutMs);
  }

  async expectUpcomingPaymentsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.upcomingPayments), timeoutMs);
  }

  async expectUpcomingPaymentsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.upcomingPayments), expected, timeoutMs);
  }

  async expectUpcomingPaymentsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.upcomingPayments), substring, timeoutMs);
  }

  async scrollUpcomingPaymentsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.upcomingPayments));
  }

  async getInnerTextUkgProWorkforce(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.ukgProWorkforce));
  }

  async expectUkgProWorkforceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.ukgProWorkforce), timeoutMs);
  }

  async expectUkgProWorkforceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.ukgProWorkforce), timeoutMs);
  }

  async expectUkgProWorkforceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.ukgProWorkforce), expected, timeoutMs);
  }

  async expectUkgProWorkforceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.ukgProWorkforce), substring, timeoutMs);
  }

  async scrollUkgProWorkforceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.ukgProWorkforce));
  }

  async getInnerTextUkgProCore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.ukgProCore));
  }

  async expectUkgProCoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.ukgProCore), timeoutMs);
  }

  async expectUkgProCoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.ukgProCore), timeoutMs);
  }

  async expectUkgProCoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.ukgProCore), expected, timeoutMs);
  }

  async expectUkgProCoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.ukgProCore), substring, timeoutMs);
  }

  async scrollUkgProCoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.ukgProCore));
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.element), timeoutMs);
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.element), substring, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.element));
  }

  async getInnerTextDueDate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.dueDate));
  }

  async expectDueDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.dueDate), timeoutMs);
  }

  async expectDueDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.dueDate), timeoutMs);
  }

  async expectDueDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.dueDate), expected, timeoutMs);
  }

  async expectDueDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.dueDate), substring, timeoutMs);
  }

  async scrollDueDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.dueDate));
  }

  async getInnerTextJun152026(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.jun152026));
  }

  async expectJun152026Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.jun152026), timeoutMs);
  }

  async expectJun152026Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.jun152026), timeoutMs);
  }

  async expectJun152026Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.jun152026), expected, timeoutMs);
  }

  async expectJun152026ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.jun152026), substring, timeoutMs);
  }

  async scrollJun152026IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.jun152026));
  }

  async getInnerTextDLeft(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.dLeft));
  }

  async expectDLeftVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.dLeft), timeoutMs);
  }

  async expectDLeftHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.dLeft), timeoutMs);
  }

  async expectDLeftText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.dLeft), expected, timeoutMs);
  }

  async expectDLeftContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.dLeft), substring, timeoutMs);
  }

  async scrollDLeftIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.dLeft));
  }

  async getInnerTextUkgReady(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.ukgReady));
  }

  async expectUkgReadyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.ukgReady), timeoutMs);
  }

  async expectUkgReadyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.ukgReady), timeoutMs);
  }

  async expectUkgReadyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.ukgReady), expected, timeoutMs);
  }

  async expectUkgReadyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.ukgReady), substring, timeoutMs);
  }

  async scrollUkgReadyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.ukgReady));
  }

  async getInnerTextUkgReadyHcm(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.ukgReadyHcm));
  }

  async expectUkgReadyHcmVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.ukgReadyHcm), timeoutMs);
  }

  async expectUkgReadyHcmHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.ukgReadyHcm), timeoutMs);
  }

  async expectUkgReadyHcmText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.ukgReadyHcm), expected, timeoutMs);
  }

  async expectUkgReadyHcmContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.ukgReadyHcm), substring, timeoutMs);
  }

  async scrollUkgReadyHcmIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.ukgReadyHcm));
  }

  async getInnerTextElement2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.element2));
  }

  async expectElement2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.element2), timeoutMs);
  }

  async expectElement2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.element2), timeoutMs);
  }

  async expectElement2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.element2), expected, timeoutMs);
  }

  async expectElement2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.element2), substring, timeoutMs);
  }

  async scrollElement2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.element2));
  }

  async getInnerTextJun202026(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.jun202026));
  }

  async expectJun202026Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.jun202026), timeoutMs);
  }

  async expectJun202026Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.jun202026), timeoutMs);
  }

  async expectJun202026Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.jun202026), expected, timeoutMs);
  }

  async expectJun202026ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.jun202026), substring, timeoutMs);
  }

  async scrollJun202026IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.jun202026));
  }

  async getInnerTextDLeft2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.dLeft2));
  }

  async expectDLeft2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.dLeft2), timeoutMs);
  }

  async expectDLeft2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.dLeft2), timeoutMs);
  }

  async expectDLeft2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.dLeft2), expected, timeoutMs);
  }

  async expectDLeft2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.dLeft2), substring, timeoutMs);
  }

  async scrollDLeft2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.dLeft2));
  }

  async getInnerTextUkgReadyPro(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.ukgReadyPro));
  }

  async expectUkgReadyProVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.ukgReadyPro), timeoutMs);
  }

  async expectUkgReadyProHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.ukgReadyPro), timeoutMs);
  }

  async expectUkgReadyProText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.ukgReadyPro), expected, timeoutMs);
  }

  async expectUkgReadyProContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.ukgReadyPro), substring, timeoutMs);
  }

  async scrollUkgReadyProIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.ukgReadyPro));
  }

  async getInnerTextElement3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.element3));
  }

  async expectElement3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.element3), timeoutMs);
  }

  async expectElement3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.element3), timeoutMs);
  }

  async expectElement3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.element3), expected, timeoutMs);
  }

  async expectElement3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.element3), substring, timeoutMs);
  }

  async scrollElement3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.element3));
  }

  async getInnerTextJun302026(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.jun302026));
  }

  async expectJun302026Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.jun302026), timeoutMs);
  }

  async expectJun302026Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.jun302026), timeoutMs);
  }

  async expectJun302026Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.jun302026), expected, timeoutMs);
  }

  async expectJun302026ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.jun302026), substring, timeoutMs);
  }

  async scrollJun302026IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.jun302026));
  }

  async getInnerTextDLeft3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.dLeft3));
  }

  async expectDLeft3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.dLeft3), timeoutMs);
  }

  async expectDLeft3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.dLeft3), timeoutMs);
  }

  async expectDLeft3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.dLeft3), expected, timeoutMs);
  }

  async expectDLeft3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.dLeft3), substring, timeoutMs);
  }

  async scrollDLeft3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.dLeft3));
  }

  async getInnerTextTotalDueThisMonth(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.totalDueThisMonth));
  }

  async expectTotalDueThisMonthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.totalDueThisMonth), timeoutMs);
  }

  async expectTotalDueThisMonthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.totalDueThisMonth), timeoutMs);
  }

  async expectTotalDueThisMonthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.totalDueThisMonth), expected, timeoutMs);
  }

  async expectTotalDueThisMonthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.totalDueThisMonth), substring, timeoutMs);
  }

  async scrollTotalDueThisMonthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.totalDueThisMonth));
  }

  async getInnerTextElement4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.element4));
  }

  async expectElement4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.element4), timeoutMs);
  }

  async expectElement4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.element4), timeoutMs);
  }

  async expectElement4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.element4), expected, timeoutMs);
  }

  async expectElement4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.element4), substring, timeoutMs);
  }

  async scrollElement4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.element4));
  }

  async getInnerTextInvoiceSummary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.invoiceSummary));
  }

  async expectInvoiceSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.invoiceSummary), timeoutMs);
  }

  async expectInvoiceSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.invoiceSummary), timeoutMs);
  }

  async expectInvoiceSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.invoiceSummary), expected, timeoutMs);
  }

  async expectInvoiceSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.invoiceSummary), substring, timeoutMs);
  }

  async scrollInvoiceSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.invoiceSummary));
  }

  async getInnerTextPaidInvoices(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.paidInvoices));
  }

  async expectPaidInvoicesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.paidInvoices), timeoutMs);
  }

  async expectPaidInvoicesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.paidInvoices), timeoutMs);
  }

  async expectPaidInvoicesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.paidInvoices), expected, timeoutMs);
  }

  async expectPaidInvoicesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.paidInvoices), substring, timeoutMs);
  }

  async scrollPaidInvoicesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.paidInvoices));
  }

  async getInnerTextElement5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.element5));
  }

  async expectElement5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.element5), timeoutMs);
  }

  async expectElement5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.element5), timeoutMs);
  }

  async expectElement5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.element5), expected, timeoutMs);
  }

  async expectElement5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.element5), substring, timeoutMs);
  }

  async scrollElement5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.element5));
  }

  async getInnerTextDueThisMonth(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.dueThisMonth));
  }

  async expectDueThisMonthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.dueThisMonth), timeoutMs);
  }

  async expectDueThisMonthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.dueThisMonth), timeoutMs);
  }

  async expectDueThisMonthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.dueThisMonth), expected, timeoutMs);
  }

  async expectDueThisMonthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.dueThisMonth), substring, timeoutMs);
  }

  async scrollDueThisMonthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.dueThisMonth));
  }

  async getInnerTextOverdue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingPage.L.overdue));
  }

  async expectOverdueVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BillingPage.L.overdue), timeoutMs);
  }

  async expectOverdueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingPage.L.overdue), timeoutMs);
  }

  async expectOverdueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.overdue), expected, timeoutMs);
  }

  async expectOverdueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.overdue), substring, timeoutMs);
  }

  async scrollOverdueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingPage.L.overdue));
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

  // ── table[aria-label="Invoices"] ──────────────────────────────────────────────

  /** Text of any cell. row is 0-based; col is column name or 0-based index. */
  async getInvoicesTableText(row: number, col: number | string): Promise<string> {
    return this.invoices.getText(row, col);
  }

  /** All text values for a column across every row. */
  async getInvoicesTableColumn(col: number | string): Promise<string[]> {
    return this.invoices.getColumn(col);
  }

  /** All cell values for a row as { "Column Name": "value" }. */
  async getInvoicesTableRowData(row: number): Promise<Record<string, string>> {
    return this.invoices.getRowData(row);
  }

  /** First row where col equals value (exact). Pass exact=false for contains match. */
  async findInvoicesTableRow(col: number | string, value: string, exact = true): Promise<number> {
    return this.invoices.findRow(col, value, exact);
  }

  /** First row where any cell contains text (case-insensitive). */
  async findInvoicesTableRowByText(text: string): Promise<number> {
    return this.invoices.findRowByText(text);
  }

  /** Total number of body rows. */
  async getInvoicesTableRowCount(): Promise<number> {
    return this.invoices.rowCount();
  }

  /** Click the <a> link inside a cell. */
  async clickInvoicesTableLink(row: number, col: number | string): Promise<void> {
    return this.invoices.clickLink(row, col);
  }

  /** href of the link inside a cell, or null if there is no link. */
  async getInvoicesTableLinkHref(row: number, col: number | string): Promise<string | null> {
    const cell = await this.invoices.cell(row, col);
    const link = cell.locator('a');
    return (await link.count()) > 0 ? link.getAttribute('href') : null;
  }

  /** Check the row selection checkbox (idempotent). */
  async checkInvoicesTableRow(row: number): Promise<void> {
    const cb = this.invoices.row(row).locator('input[type="checkbox"]').first();
    if (await cb.isChecked()) return;
    await cb.check({ force: true });
  }

  /** Uncheck the row selection checkbox (idempotent). */
  async uncheckInvoicesTableRow(row: number): Promise<void> {
    const cb = this.invoices.row(row).locator('input[type="checkbox"]').first();
    if (!(await cb.isChecked())) return;
    await cb.uncheck({ force: true });
  }

  /** Whether the row selection checkbox is currently checked. */
  async isInvoicesTableRowChecked(row: number): Promise<boolean> {
    return this.invoices.row(row).locator('input[type="checkbox"]').first().isChecked();
  }

  /** Current state of the toggle switch (role="switch") in the row — true = on/active. */
  async getInvoicesTableSwitchState(row: number): Promise<boolean> {
    return this.invoices.getSwitchState(row);
  }

  /** Toggle the switch in a row. Pass targetState=true/false to set explicitly. */
  async toggleInvoicesTableSwitch(row: number, targetState?: boolean): Promise<void> {
    return this.invoices.toggleSwitch(row, targetState);
  }

  /** Click a button in a row by optional label; omit label to click the last button (action menu). */
  async clickInvoicesTableButton(row: number, label?: string): Promise<void> {
    return this.invoices.clickButton(row, label);
  }

  /** Click a named option inside an already-open row action dropdown. */
  async clickInvoicesTableMenuOption(label: string): Promise<void> {
    return this.invoices.clickMenuOption(label);
  }

  /** Click a column header to sort. Call twice to reverse direction. */
  async sortInvoicesTableBy(col: string): Promise<void> {
    return this.invoices.sortBy(col);
  }

  /** Locator for any element inside a row — toggles, buttons, custom controls. */
  getInvoicesTableInRow(row: number, selector: string): Locator {
    return this.invoices.getInRow(row, selector);
  }


  async clickPaymentOverdueService(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.paymentOverdueService));
  }

  async doubleClickPaymentOverdueService(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.paymentOverdueService));
  }

  async longPressPaymentOverdueService(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.paymentOverdueService));
  }

  async expectPaymentOverdueServiceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.paymentOverdueService), value, timeoutMs);
  }

  async expectPaymentOverdueServiceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.paymentOverdueService), timeoutMs);
  }

  async expectPaymentOverdueServiceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.paymentOverdueService), timeoutMs);
  }

  async expectPaymentOverdueServiceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.paymentOverdueService), timeoutMs);
  }

  async expectPaymentOverdueServiceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.paymentOverdueService), timeoutMs);
  }

  async expectPaymentOverdueServiceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.paymentOverdueService), timeoutMs);
  }

  async expectPaymentOverdueServiceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.paymentOverdueService), count, timeoutMs);
  }

  async clickYourUkgProInvoice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.yourUkgProInvoice));
  }

  async doubleClickYourUkgProInvoice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.yourUkgProInvoice));
  }

  async longPressYourUkgProInvoice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.yourUkgProInvoice));
  }

  async expectYourUkgProInvoiceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.yourUkgProInvoice), value, timeoutMs);
  }

  async expectYourUkgProInvoiceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.yourUkgProInvoice), timeoutMs);
  }

  async expectYourUkgProInvoiceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.yourUkgProInvoice), timeoutMs);
  }

  async expectYourUkgProInvoiceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.yourUkgProInvoice), timeoutMs);
  }

  async expectYourUkgProInvoiceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.yourUkgProInvoice), timeoutMs);
  }

  async expectYourUkgProInvoiceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.yourUkgProInvoice), timeoutMs);
  }

  async expectYourUkgProInvoiceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.yourUkgProInvoice), count, timeoutMs);
  }

  async clickAtlasInsightsBilling(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.atlasInsightsBilling));
  }

  async doubleClickAtlasInsightsBilling(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.atlasInsightsBilling));
  }

  async longPressAtlasInsightsBilling(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.atlasInsightsBilling));
  }

  async expectAtlasInsightsBillingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.atlasInsightsBilling), value, timeoutMs);
  }

  async expectAtlasInsightsBillingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.atlasInsightsBilling), timeoutMs);
  }

  async expectAtlasInsightsBillingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.atlasInsightsBilling), timeoutMs);
  }

  async expectAtlasInsightsBillingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.atlasInsightsBilling), timeoutMs);
  }

  async expectAtlasInsightsBillingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.atlasInsightsBilling), timeoutMs);
  }

  async expectAtlasInsightsBillingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.atlasInsightsBilling), timeoutMs);
  }

  async expectAtlasInsightsBillingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.atlasInsightsBilling), count, timeoutMs);
  }

  async longPressOutstandingBalance(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.outstandingBalance));
  }

  async expectOutstandingBalanceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.outstandingBalance), value, timeoutMs);
  }

  async expectOutstandingBalanceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.outstandingBalance), timeoutMs);
  }

  async expectOutstandingBalanceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.outstandingBalance), timeoutMs);
  }

  async expectOutstandingBalanceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.outstandingBalance), timeoutMs);
  }

  async expectOutstandingBalanceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.outstandingBalance), count, timeoutMs);
  }

  async longPressPaymentTerms(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.paymentTerms));
  }

  async expectPaymentTermsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.paymentTerms), value, timeoutMs);
  }

  async expectPaymentTermsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.paymentTerms), timeoutMs);
  }

  async expectPaymentTermsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.paymentTerms), timeoutMs);
  }

  async expectPaymentTermsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.paymentTerms), timeoutMs);
  }

  async expectPaymentTermsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.paymentTerms), count, timeoutMs);
  }

  async longPressBillingHistory(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.billingHistory));
  }

  async expectBillingHistoryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.billingHistory), value, timeoutMs);
  }

  async expectBillingHistoryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.billingHistory), timeoutMs);
  }

  async expectBillingHistoryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.billingHistory), timeoutMs);
  }

  async expectBillingHistoryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.billingHistory), timeoutMs);
  }

  async expectBillingHistoryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.billingHistory), count, timeoutMs);
  }

  async longPressCreditNotes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.creditNotes));
  }

  async expectCreditNotesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.creditNotes), value, timeoutMs);
  }

  async expectCreditNotesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.creditNotes), timeoutMs);
  }

  async expectCreditNotesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.creditNotes), timeoutMs);
  }

  async expectCreditNotesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.creditNotes), timeoutMs);
  }

  async expectCreditNotesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.creditNotes), count, timeoutMs);
  }

  async clickM(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.m));
  }

  async doubleClickM(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.m));
  }

  async longPressM(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.m));
  }

  async expectMValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.m), value, timeoutMs);
  }

  async expectMEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.m), timeoutMs);
  }

  async expectMDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.m), timeoutMs);
  }

  async expectMChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.m), timeoutMs);
  }

  async expectMUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.m), timeoutMs);
  }

  async expectMFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.m), timeoutMs);
  }

  async expectMCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.m), count, timeoutMs);
  }

  async clickOpenDue(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.openDue));
  }

  async doubleClickOpenDue(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.openDue));
  }

  async longPressOpenDue(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.openDue));
  }

  async expectOpenDueValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.openDue), value, timeoutMs);
  }

  async expectOpenDueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.openDue), timeoutMs);
  }

  async expectOpenDueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.openDue), timeoutMs);
  }

  async expectOpenDueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.openDue), timeoutMs);
  }

  async expectOpenDueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.openDue), timeoutMs);
  }

  async expectOpenDueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.openDue), timeoutMs);
  }

  async expectOpenDueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.openDue), count, timeoutMs);
  }

  async clickYtdPaid(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.ytdPaid));
  }

  async doubleClickYtdPaid(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.ytdPaid));
  }

  async longPressYtdPaid(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.ytdPaid));
  }

  async expectYtdPaidValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.ytdPaid), value, timeoutMs);
  }

  async expectYtdPaidEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.ytdPaid), timeoutMs);
  }

  async expectYtdPaidDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.ytdPaid), timeoutMs);
  }

  async expectYtdPaidChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.ytdPaid), timeoutMs);
  }

  async expectYtdPaidUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.ytdPaid), timeoutMs);
  }

  async expectYtdPaidFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.ytdPaid), timeoutMs);
  }

  async expectYtdPaidCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.ytdPaid), count, timeoutMs);
  }

  async clickM2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.m2));
  }

  async doubleClickM2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.m2));
  }

  async longPressM2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.m2));
  }

  async expectM2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.m2), value, timeoutMs);
  }

  async expectM2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.m2), timeoutMs);
  }

  async expectM2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.m2), timeoutMs);
  }

  async expectM2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.m2), timeoutMs);
  }

  async expectM2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.m2), timeoutMs);
  }

  async expectM2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.m2), timeoutMs);
  }

  async expectM2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.m2), count, timeoutMs);
  }

  async clickInvoicesPaid(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.invoicesPaid));
  }

  async doubleClickInvoicesPaid(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.invoicesPaid));
  }

  async longPressInvoicesPaid(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.invoicesPaid));
  }

  async expectInvoicesPaidValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.invoicesPaid), value, timeoutMs);
  }

  async expectInvoicesPaidEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.invoicesPaid), timeoutMs);
  }

  async expectInvoicesPaidDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.invoicesPaid), timeoutMs);
  }

  async expectInvoicesPaidChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.invoicesPaid), timeoutMs);
  }

  async expectInvoicesPaidUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.invoicesPaid), timeoutMs);
  }

  async expectInvoicesPaidFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.invoicesPaid), timeoutMs);
  }

  async expectInvoicesPaidCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.invoicesPaid), count, timeoutMs);
  }

  async clickNextCharge(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.nextCharge));
  }

  async doubleClickNextCharge(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.nextCharge));
  }

  async longPressNextCharge(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.nextCharge));
  }

  async expectNextChargeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.nextCharge), value, timeoutMs);
  }

  async expectNextChargeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.nextCharge), timeoutMs);
  }

  async expectNextChargeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.nextCharge), timeoutMs);
  }

  async expectNextChargeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.nextCharge), timeoutMs);
  }

  async expectNextChargeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.nextCharge), timeoutMs);
  }

  async expectNextChargeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.nextCharge), timeoutMs);
  }

  async expectNextChargeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.nextCharge), count, timeoutMs);
  }

  async clickUs16400(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.us16400));
  }

  async doubleClickUs16400(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.us16400));
  }

  async longPressUs16400(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.us16400));
  }

  async expectUs16400Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.us16400), value, timeoutMs);
  }

  async expectUs16400Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.us16400), timeoutMs);
  }

  async expectUs16400Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.us16400), timeoutMs);
  }

  async expectUs16400Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.us16400), timeoutMs);
  }

  async expectUs16400Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.us16400), timeoutMs);
  }

  async expectUs16400Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.us16400), timeoutMs);
  }

  async expectUs16400Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.us16400), count, timeoutMs);
  }

  async clickVsLast(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.vsLast));
  }

  async doubleClickVsLast(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.vsLast));
  }

  async longPressVsLast(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.vsLast));
  }

  async expectVsLastValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.vsLast), value, timeoutMs);
  }

  async expectVsLastEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.vsLast), timeoutMs);
  }

  async expectVsLastDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.vsLast), timeoutMs);
  }

  async expectVsLastChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.vsLast), timeoutMs);
  }

  async expectVsLastUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.vsLast), timeoutMs);
  }

  async expectVsLastFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.vsLast), timeoutMs);
  }

  async expectVsLastCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.vsLast), count, timeoutMs);
  }

  async clickSpendTrend12Months(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.spendTrend12Months));
  }

  async doubleClickSpendTrend12Months(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.spendTrend12Months));
  }

  async longPressSpendTrend12Months(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.spendTrend12Months));
  }

  async expectSpendTrend12MonthsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.spendTrend12Months), value, timeoutMs);
  }

  async expectSpendTrend12MonthsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.spendTrend12Months), timeoutMs);
  }

  async expectSpendTrend12MonthsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.spendTrend12Months), timeoutMs);
  }

  async expectSpendTrend12MonthsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.spendTrend12Months), timeoutMs);
  }

  async expectSpendTrend12MonthsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.spendTrend12Months), timeoutMs);
  }

  async expectSpendTrend12MonthsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.spendTrend12Months), timeoutMs);
  }

  async expectSpendTrend12MonthsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.spendTrend12Months), count, timeoutMs);
  }

  async longPressInvoices(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.invoices));
  }

  async expectInvoicesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.invoices), value, timeoutMs);
  }

  async expectInvoicesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.invoices), timeoutMs);
  }

  async expectInvoicesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.invoices), timeoutMs);
  }

  async expectInvoicesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.invoices), timeoutMs);
  }

  async expectInvoicesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.invoices), count, timeoutMs);
  }

  async longPressPaymentHistory(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.paymentHistory));
  }

  async expectPaymentHistoryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.paymentHistory), value, timeoutMs);
  }

  async expectPaymentHistoryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.paymentHistory), timeoutMs);
  }

  async expectPaymentHistoryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.paymentHistory), timeoutMs);
  }

  async expectPaymentHistoryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.paymentHistory), timeoutMs);
  }

  async expectPaymentHistoryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.paymentHistory), count, timeoutMs);
  }

  async longPressSpendBreakdown(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.spendBreakdown));
  }

  async expectSpendBreakdownValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.spendBreakdown), value, timeoutMs);
  }

  async expectSpendBreakdownChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.spendBreakdown), timeoutMs);
  }

  async expectSpendBreakdownUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.spendBreakdown), timeoutMs);
  }

  async expectSpendBreakdownFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.spendBreakdown), timeoutMs);
  }

  async expectSpendBreakdownCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.spendBreakdown), count, timeoutMs);
  }

  async expectInputInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingPage.L.inputInput), expected, timeoutMs);
  }

  async expectInputInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingPage.L.inputInput), substring, timeoutMs);
  }

  async expectInputInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.inputInput), timeoutMs);
  }

  async expectInputInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.inputInput), timeoutMs);
  }

  async expectInputInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.inputInput), count, timeoutMs);
  }

  async longPressStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.status));
  }

  async expectStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.status), value, timeoutMs);
  }

  async expectStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.status), timeoutMs);
  }

  async expectStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.status), timeoutMs);
  }

  async expectStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.status), timeoutMs);
  }

  async expectStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.status), count, timeoutMs);
  }

  async longPressExportAsCsv(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.exportAsCsv));
  }

  async expectExportAsCsvValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.exportAsCsv), value, timeoutMs);
  }

  async expectExportAsCsvChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.exportAsCsv), timeoutMs);
  }

  async expectExportAsCsvUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.exportAsCsv), timeoutMs);
  }

  async expectExportAsCsvFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.exportAsCsv), timeoutMs);
  }

  async expectExportAsCsvCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.exportAsCsv), count, timeoutMs);
  }

  async clickBillingEstimate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.billingEstimate));
  }

  async doubleClickBillingEstimate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.billingEstimate));
  }

  async longPressBillingEstimate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.billingEstimate));
  }

  async expectBillingEstimateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.billingEstimate), value, timeoutMs);
  }

  async expectBillingEstimateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.billingEstimate), timeoutMs);
  }

  async expectBillingEstimateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.billingEstimate), timeoutMs);
  }

  async expectBillingEstimateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.billingEstimate), timeoutMs);
  }

  async expectBillingEstimateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.billingEstimate), timeoutMs);
  }

  async expectBillingEstimateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.billingEstimate), timeoutMs);
  }

  async expectBillingEstimateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.billingEstimate), count, timeoutMs);
  }

  async clickAmountsAreEstimatesBased(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased));
  }

  async doubleClickAmountsAreEstimatesBased(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased));
  }

  async longPressAmountsAreEstimatesBased(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased));
  }

  async expectAmountsAreEstimatesBasedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), value, timeoutMs);
  }

  async expectAmountsAreEstimatesBasedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), timeoutMs);
  }

  async expectAmountsAreEstimatesBasedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), timeoutMs);
  }

  async expectAmountsAreEstimatesBasedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), timeoutMs);
  }

  async expectAmountsAreEstimatesBasedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), timeoutMs);
  }

  async expectAmountsAreEstimatesBasedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), timeoutMs);
  }

  async expectAmountsAreEstimatesBasedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.amountsAreEstimatesBased), count, timeoutMs);
  }

  async clickUs1640032(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.us1640032));
  }

  async doubleClickUs1640032(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.us1640032));
  }

  async longPressUs1640032(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.us1640032));
  }

  async expectUs1640032Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.us1640032), value, timeoutMs);
  }

  async expectUs1640032Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.us1640032), timeoutMs);
  }

  async expectUs1640032Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.us1640032), timeoutMs);
  }

  async expectUs1640032Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.us1640032), timeoutMs);
  }

  async expectUs1640032Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.us1640032), timeoutMs);
  }

  async expectUs1640032Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.us1640032), timeoutMs);
  }

  async expectUs1640032Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.us1640032), count, timeoutMs);
  }

  async clickEstBillingDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.estBillingDate));
  }

  async doubleClickEstBillingDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.estBillingDate));
  }

  async longPressEstBillingDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.estBillingDate));
  }

  async expectEstBillingDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.estBillingDate), value, timeoutMs);
  }

  async expectEstBillingDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.estBillingDate), timeoutMs);
  }

  async expectEstBillingDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.estBillingDate), timeoutMs);
  }

  async expectEstBillingDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.estBillingDate), timeoutMs);
  }

  async expectEstBillingDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.estBillingDate), timeoutMs);
  }

  async expectEstBillingDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.estBillingDate), timeoutMs);
  }

  async expectEstBillingDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.estBillingDate), count, timeoutMs);
  }

  async clickSolutions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.solutions));
  }

  async doubleClickSolutions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.solutions));
  }

  async longPressSolutions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.solutions));
  }

  async expectSolutionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.solutions), value, timeoutMs);
  }

  async expectSolutionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.solutions), timeoutMs);
  }

  async expectSolutionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.solutions), timeoutMs);
  }

  async expectSolutionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.solutions), timeoutMs);
  }

  async expectSolutionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.solutions), timeoutMs);
  }

  async expectSolutionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.solutions), timeoutMs);
  }

  async expectSolutionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.solutions), count, timeoutMs);
  }

  async clickAmount(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.amount));
  }

  async doubleClickAmount(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.amount));
  }

  async longPressAmount(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.amount));
  }

  async expectAmountValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.amount), value, timeoutMs);
  }

  async expectAmountEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.amount), timeoutMs);
  }

  async expectAmountDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.amount), timeoutMs);
  }

  async expectAmountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.amount), timeoutMs);
  }

  async expectAmountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.amount), timeoutMs);
  }

  async expectAmountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.amount), timeoutMs);
  }

  async expectAmountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.amount), count, timeoutMs);
  }

  async longPressUkgProWfmEnterprise(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.ukgProWfmEnterprise));
  }

  async expectUkgProWfmEnterpriseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.ukgProWfmEnterprise), value, timeoutMs);
  }

  async expectUkgProWfmEnterpriseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.ukgProWfmEnterprise), timeoutMs);
  }

  async expectUkgProWfmEnterpriseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.ukgProWfmEnterprise), timeoutMs);
  }

  async expectUkgProWfmEnterpriseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.ukgProWfmEnterprise), timeoutMs);
  }

  async expectUkgProWfmEnterpriseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.ukgProWfmEnterprise), count, timeoutMs);
  }

  async longPressUkgReadyGrowth2500(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.ukgReadyGrowth2500));
  }

  async expectUkgReadyGrowth2500Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.ukgReadyGrowth2500), value, timeoutMs);
  }

  async expectUkgReadyGrowth2500Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.ukgReadyGrowth2500), timeoutMs);
  }

  async expectUkgReadyGrowth2500Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.ukgReadyGrowth2500), timeoutMs);
  }

  async expectUkgReadyGrowth2500Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.ukgReadyGrowth2500), timeoutMs);
  }

  async expectUkgReadyGrowth2500Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.ukgReadyGrowth2500), count, timeoutMs);
  }

  async longPressPremiumSuccess3000(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.premiumSuccess3000));
  }

  async expectPremiumSuccess3000Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.premiumSuccess3000), value, timeoutMs);
  }

  async expectPremiumSuccess3000Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.premiumSuccess3000), timeoutMs);
  }

  async expectPremiumSuccess3000Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.premiumSuccess3000), timeoutMs);
  }

  async expectPremiumSuccess3000Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.premiumSuccess3000), timeoutMs);
  }

  async expectPremiumSuccess3000Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.premiumSuccess3000), count, timeoutMs);
  }

  async longPressUkgDimensions900(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.ukgDimensions900));
  }

  async expectUkgDimensions900Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.ukgDimensions900), value, timeoutMs);
  }

  async expectUkgDimensions900Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.ukgDimensions900), timeoutMs);
  }

  async expectUkgDimensions900Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.ukgDimensions900), timeoutMs);
  }

  async expectUkgDimensions900Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.ukgDimensions900), timeoutMs);
  }

  async expectUkgDimensions900Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.ukgDimensions900), count, timeoutMs);
  }

  async clickUpcomingPayments(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.upcomingPayments));
  }

  async doubleClickUpcomingPayments(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.upcomingPayments));
  }

  async longPressUpcomingPayments(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.upcomingPayments));
  }

  async expectUpcomingPaymentsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.upcomingPayments), value, timeoutMs);
  }

  async expectUpcomingPaymentsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.upcomingPayments), timeoutMs);
  }

  async expectUpcomingPaymentsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.upcomingPayments), timeoutMs);
  }

  async expectUpcomingPaymentsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.upcomingPayments), timeoutMs);
  }

  async expectUpcomingPaymentsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.upcomingPayments), timeoutMs);
  }

  async expectUpcomingPaymentsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.upcomingPayments), timeoutMs);
  }

  async expectUpcomingPaymentsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.upcomingPayments), count, timeoutMs);
  }

  async clickUkgProWorkforce(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.ukgProWorkforce));
  }

  async doubleClickUkgProWorkforce(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.ukgProWorkforce));
  }

  async longPressUkgProWorkforce(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.ukgProWorkforce));
  }

  async expectUkgProWorkforceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.ukgProWorkforce), value, timeoutMs);
  }

  async expectUkgProWorkforceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.ukgProWorkforce), timeoutMs);
  }

  async expectUkgProWorkforceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.ukgProWorkforce), timeoutMs);
  }

  async expectUkgProWorkforceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.ukgProWorkforce), timeoutMs);
  }

  async expectUkgProWorkforceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.ukgProWorkforce), timeoutMs);
  }

  async expectUkgProWorkforceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.ukgProWorkforce), timeoutMs);
  }

  async expectUkgProWorkforceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.ukgProWorkforce), count, timeoutMs);
  }

  async clickUkgProCore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.ukgProCore));
  }

  async doubleClickUkgProCore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.ukgProCore));
  }

  async longPressUkgProCore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.ukgProCore));
  }

  async expectUkgProCoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.ukgProCore), value, timeoutMs);
  }

  async expectUkgProCoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.ukgProCore), timeoutMs);
  }

  async expectUkgProCoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.ukgProCore), timeoutMs);
  }

  async expectUkgProCoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.ukgProCore), timeoutMs);
  }

  async expectUkgProCoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.ukgProCore), timeoutMs);
  }

  async expectUkgProCoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.ukgProCore), timeoutMs);
  }

  async expectUkgProCoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.ukgProCore), count, timeoutMs);
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.element));
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.element), count, timeoutMs);
  }

  async clickDueDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.dueDate));
  }

  async doubleClickDueDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.dueDate));
  }

  async longPressDueDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.dueDate));
  }

  async expectDueDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.dueDate), value, timeoutMs);
  }

  async expectDueDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.dueDate), timeoutMs);
  }

  async expectDueDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.dueDate), timeoutMs);
  }

  async expectDueDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.dueDate), timeoutMs);
  }

  async expectDueDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.dueDate), timeoutMs);
  }

  async expectDueDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.dueDate), timeoutMs);
  }

  async expectDueDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.dueDate), count, timeoutMs);
  }

  async clickJun152026(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.jun152026));
  }

  async doubleClickJun152026(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.jun152026));
  }

  async longPressJun152026(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.jun152026));
  }

  async expectJun152026Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.jun152026), value, timeoutMs);
  }

  async expectJun152026Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.jun152026), timeoutMs);
  }

  async expectJun152026Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.jun152026), timeoutMs);
  }

  async expectJun152026Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.jun152026), timeoutMs);
  }

  async expectJun152026Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.jun152026), timeoutMs);
  }

  async expectJun152026Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.jun152026), timeoutMs);
  }

  async expectJun152026Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.jun152026), count, timeoutMs);
  }

  async clickDLeft(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.dLeft));
  }

  async doubleClickDLeft(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.dLeft));
  }

  async longPressDLeft(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.dLeft));
  }

  async expectDLeftValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.dLeft), value, timeoutMs);
  }

  async expectDLeftEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.dLeft), timeoutMs);
  }

  async expectDLeftDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.dLeft), timeoutMs);
  }

  async expectDLeftChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.dLeft), timeoutMs);
  }

  async expectDLeftUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.dLeft), timeoutMs);
  }

  async expectDLeftFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.dLeft), timeoutMs);
  }

  async expectDLeftCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.dLeft), count, timeoutMs);
  }

  async clickUkgReady(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.ukgReady));
  }

  async doubleClickUkgReady(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.ukgReady));
  }

  async longPressUkgReady(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.ukgReady));
  }

  async expectUkgReadyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.ukgReady), value, timeoutMs);
  }

  async expectUkgReadyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.ukgReady), timeoutMs);
  }

  async expectUkgReadyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.ukgReady), timeoutMs);
  }

  async expectUkgReadyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.ukgReady), timeoutMs);
  }

  async expectUkgReadyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.ukgReady), timeoutMs);
  }

  async expectUkgReadyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.ukgReady), timeoutMs);
  }

  async expectUkgReadyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.ukgReady), count, timeoutMs);
  }

  async clickUkgReadyHcm(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.ukgReadyHcm));
  }

  async doubleClickUkgReadyHcm(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.ukgReadyHcm));
  }

  async longPressUkgReadyHcm(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.ukgReadyHcm));
  }

  async expectUkgReadyHcmValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.ukgReadyHcm), value, timeoutMs);
  }

  async expectUkgReadyHcmEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.ukgReadyHcm), timeoutMs);
  }

  async expectUkgReadyHcmDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.ukgReadyHcm), timeoutMs);
  }

  async expectUkgReadyHcmChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.ukgReadyHcm), timeoutMs);
  }

  async expectUkgReadyHcmUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.ukgReadyHcm), timeoutMs);
  }

  async expectUkgReadyHcmFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.ukgReadyHcm), timeoutMs);
  }

  async expectUkgReadyHcmCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.ukgReadyHcm), count, timeoutMs);
  }

  async clickElement2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.element2));
  }

  async doubleClickElement2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.element2));
  }

  async longPressElement2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.element2));
  }

  async expectElement2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.element2), value, timeoutMs);
  }

  async expectElement2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.element2), timeoutMs);
  }

  async expectElement2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.element2), timeoutMs);
  }

  async expectElement2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.element2), timeoutMs);
  }

  async expectElement2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.element2), timeoutMs);
  }

  async expectElement2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.element2), timeoutMs);
  }

  async expectElement2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.element2), count, timeoutMs);
  }

  async clickJun202026(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.jun202026));
  }

  async doubleClickJun202026(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.jun202026));
  }

  async longPressJun202026(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.jun202026));
  }

  async expectJun202026Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.jun202026), value, timeoutMs);
  }

  async expectJun202026Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.jun202026), timeoutMs);
  }

  async expectJun202026Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.jun202026), timeoutMs);
  }

  async expectJun202026Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.jun202026), timeoutMs);
  }

  async expectJun202026Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.jun202026), timeoutMs);
  }

  async expectJun202026Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.jun202026), timeoutMs);
  }

  async expectJun202026Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.jun202026), count, timeoutMs);
  }

  async clickDLeft2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.dLeft2));
  }

  async doubleClickDLeft2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.dLeft2));
  }

  async longPressDLeft2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.dLeft2));
  }

  async expectDLeft2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.dLeft2), value, timeoutMs);
  }

  async expectDLeft2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.dLeft2), timeoutMs);
  }

  async expectDLeft2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.dLeft2), timeoutMs);
  }

  async expectDLeft2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.dLeft2), timeoutMs);
  }

  async expectDLeft2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.dLeft2), timeoutMs);
  }

  async expectDLeft2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.dLeft2), timeoutMs);
  }

  async expectDLeft2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.dLeft2), count, timeoutMs);
  }

  async clickUkgReadyPro(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.ukgReadyPro));
  }

  async doubleClickUkgReadyPro(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.ukgReadyPro));
  }

  async longPressUkgReadyPro(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.ukgReadyPro));
  }

  async expectUkgReadyProValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.ukgReadyPro), value, timeoutMs);
  }

  async expectUkgReadyProEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.ukgReadyPro), timeoutMs);
  }

  async expectUkgReadyProDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.ukgReadyPro), timeoutMs);
  }

  async expectUkgReadyProChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.ukgReadyPro), timeoutMs);
  }

  async expectUkgReadyProUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.ukgReadyPro), timeoutMs);
  }

  async expectUkgReadyProFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.ukgReadyPro), timeoutMs);
  }

  async expectUkgReadyProCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.ukgReadyPro), count, timeoutMs);
  }

  async clickElement3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.element3));
  }

  async doubleClickElement3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.element3));
  }

  async longPressElement3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.element3));
  }

  async expectElement3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.element3), value, timeoutMs);
  }

  async expectElement3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.element3), timeoutMs);
  }

  async expectElement3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.element3), timeoutMs);
  }

  async expectElement3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.element3), timeoutMs);
  }

  async expectElement3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.element3), timeoutMs);
  }

  async expectElement3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.element3), timeoutMs);
  }

  async expectElement3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.element3), count, timeoutMs);
  }

  async clickJun302026(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.jun302026));
  }

  async doubleClickJun302026(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.jun302026));
  }

  async longPressJun302026(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.jun302026));
  }

  async expectJun302026Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.jun302026), value, timeoutMs);
  }

  async expectJun302026Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.jun302026), timeoutMs);
  }

  async expectJun302026Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.jun302026), timeoutMs);
  }

  async expectJun302026Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.jun302026), timeoutMs);
  }

  async expectJun302026Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.jun302026), timeoutMs);
  }

  async expectJun302026Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.jun302026), timeoutMs);
  }

  async expectJun302026Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.jun302026), count, timeoutMs);
  }

  async clickDLeft3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.dLeft3));
  }

  async doubleClickDLeft3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.dLeft3));
  }

  async longPressDLeft3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.dLeft3));
  }

  async expectDLeft3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.dLeft3), value, timeoutMs);
  }

  async expectDLeft3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.dLeft3), timeoutMs);
  }

  async expectDLeft3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.dLeft3), timeoutMs);
  }

  async expectDLeft3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.dLeft3), timeoutMs);
  }

  async expectDLeft3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.dLeft3), timeoutMs);
  }

  async expectDLeft3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.dLeft3), timeoutMs);
  }

  async expectDLeft3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.dLeft3), count, timeoutMs);
  }

  async clickTotalDueThisMonth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.totalDueThisMonth));
  }

  async doubleClickTotalDueThisMonth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.totalDueThisMonth));
  }

  async longPressTotalDueThisMonth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.totalDueThisMonth));
  }

  async expectTotalDueThisMonthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.totalDueThisMonth), value, timeoutMs);
  }

  async expectTotalDueThisMonthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.totalDueThisMonth), timeoutMs);
  }

  async expectTotalDueThisMonthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.totalDueThisMonth), timeoutMs);
  }

  async expectTotalDueThisMonthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.totalDueThisMonth), timeoutMs);
  }

  async expectTotalDueThisMonthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.totalDueThisMonth), timeoutMs);
  }

  async expectTotalDueThisMonthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.totalDueThisMonth), timeoutMs);
  }

  async expectTotalDueThisMonthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.totalDueThisMonth), count, timeoutMs);
  }

  async clickElement4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.element4));
  }

  async doubleClickElement4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.element4));
  }

  async longPressElement4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.element4));
  }

  async expectElement4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.element4), value, timeoutMs);
  }

  async expectElement4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.element4), timeoutMs);
  }

  async expectElement4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.element4), timeoutMs);
  }

  async expectElement4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.element4), timeoutMs);
  }

  async expectElement4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.element4), timeoutMs);
  }

  async expectElement4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.element4), timeoutMs);
  }

  async expectElement4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.element4), count, timeoutMs);
  }

  async clickInvoiceSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.invoiceSummary));
  }

  async doubleClickInvoiceSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.invoiceSummary));
  }

  async longPressInvoiceSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.invoiceSummary));
  }

  async expectInvoiceSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.invoiceSummary), value, timeoutMs);
  }

  async expectInvoiceSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.invoiceSummary), timeoutMs);
  }

  async expectInvoiceSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.invoiceSummary), timeoutMs);
  }

  async expectInvoiceSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.invoiceSummary), timeoutMs);
  }

  async expectInvoiceSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.invoiceSummary), timeoutMs);
  }

  async expectInvoiceSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.invoiceSummary), timeoutMs);
  }

  async expectInvoiceSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.invoiceSummary), count, timeoutMs);
  }

  async clickPaidInvoices(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.paidInvoices));
  }

  async doubleClickPaidInvoices(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.paidInvoices));
  }

  async longPressPaidInvoices(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.paidInvoices));
  }

  async expectPaidInvoicesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.paidInvoices), value, timeoutMs);
  }

  async expectPaidInvoicesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.paidInvoices), timeoutMs);
  }

  async expectPaidInvoicesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.paidInvoices), timeoutMs);
  }

  async expectPaidInvoicesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.paidInvoices), timeoutMs);
  }

  async expectPaidInvoicesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.paidInvoices), timeoutMs);
  }

  async expectPaidInvoicesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.paidInvoices), timeoutMs);
  }

  async expectPaidInvoicesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.paidInvoices), count, timeoutMs);
  }

  async clickElement5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.element5));
  }

  async doubleClickElement5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.element5));
  }

  async longPressElement5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.element5));
  }

  async expectElement5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.element5), value, timeoutMs);
  }

  async expectElement5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.element5), timeoutMs);
  }

  async expectElement5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.element5), timeoutMs);
  }

  async expectElement5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.element5), timeoutMs);
  }

  async expectElement5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.element5), timeoutMs);
  }

  async expectElement5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.element5), timeoutMs);
  }

  async expectElement5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.element5), count, timeoutMs);
  }

  async clickDueThisMonth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.dueThisMonth));
  }

  async doubleClickDueThisMonth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.dueThisMonth));
  }

  async longPressDueThisMonth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.dueThisMonth));
  }

  async expectDueThisMonthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.dueThisMonth), value, timeoutMs);
  }

  async expectDueThisMonthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.dueThisMonth), timeoutMs);
  }

  async expectDueThisMonthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.dueThisMonth), timeoutMs);
  }

  async expectDueThisMonthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.dueThisMonth), timeoutMs);
  }

  async expectDueThisMonthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.dueThisMonth), timeoutMs);
  }

  async expectDueThisMonthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.dueThisMonth), timeoutMs);
  }

  async expectDueThisMonthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.dueThisMonth), count, timeoutMs);
  }

  async clickOverdue(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingPage.L.overdue));
  }

  async doubleClickOverdue(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingPage.L.overdue));
  }

  async longPressOverdue(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingPage.L.overdue));
  }

  async expectOverdueValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingPage.L.overdue), value, timeoutMs);
  }

  async expectOverdueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingPage.L.overdue), timeoutMs);
  }

  async expectOverdueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingPage.L.overdue), timeoutMs);
  }

  async expectOverdueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingPage.L.overdue), timeoutMs);
  }

  async expectOverdueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingPage.L.overdue), timeoutMs);
  }

  async expectOverdueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingPage.L.overdue), timeoutMs);
  }

  async expectOverdueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingPage.L.overdue), count, timeoutMs);
  }

}

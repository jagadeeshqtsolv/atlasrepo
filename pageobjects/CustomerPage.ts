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

export class CustomerPage {
  private static readonly L = {
    customerSinceJan2022: { strategy: 'text' as const, value: 'Customer since Jan 2022', actionKind: 'text' as const },
    solutionIdSOL2001: { strategy: 'text' as const, value: 'Solution ID: SOL2001', actionKind: 'text' as const },
    solutionId: { strategy: 'text' as const, value: 'Solution ID:', actionKind: 'text' as const },
    sOL2001: { strategy: 'text' as const, value: 'SOL2001', actionKind: 'text' as const },
    billTo: { strategy: 'text' as const, value: 'Bill to', actionKind: 'text' as const },
    mainStNew: { strategy: 'text' as const, value: '100 Main St, New York, NY 10001, USA', actionKind: 'text' as const },
    yourUkgTeam: { strategy: 'text' as const, value: 'Your UKG team', actionKind: 'text' as const },
    johnSmith: { strategy: 'text' as const, value: 'John Smith', actionKind: 'text' as const },
    customerSuccessManager: { strategy: 'text' as const, value: 'Customer Success Manager', actionKind: 'text' as const },
    johnSmithAcmecorporationCom: { strategy: 'role' as const, value: 'john.smith@acmecorporation.com', role: 'link', actionKind: 'link' as const },
    a: { strategy: 'role' as const, value: '+1-555-1001', role: 'link', actionKind: 'link' as const },
    sarahJohnson: { strategy: 'text' as const, value: 'Sarah Johnson', actionKind: 'text' as const },
    accountExecutive: { strategy: 'text' as const, value: 'Account Executive', actionKind: 'text' as const },
    sarahJohnsonAcmecorporationCom: { strategy: 'role' as const, value: 'sarah.johnson@acmecorporation.com', role: 'link', actionKind: 'link' as const },
    aLink: { strategy: 'role' as const, value: '+1-555-1002', role: 'link', actionKind: 'link' as const },
    mikeBrown: { strategy: 'text' as const, value: 'Mike Brown', actionKind: 'text' as const },
    technicalAccountManager: { strategy: 'text' as const, value: 'Technical Account Manager', actionKind: 'text' as const },
    mikeBrownAcmecorporationCom: { strategy: 'role' as const, value: 'mike.brown@acmecorporation.com', role: 'link', actionKind: 'link' as const },
    aLink2: { strategy: 'role' as const, value: '+1-555-1003', role: 'link', actionKind: 'link' as const },
    ukgSupport: { strategy: 'text' as const, value: 'UKG Support', actionKind: 'text' as const },
    globalSupport: { strategy: 'text' as const, value: '24/7 Global Support', actionKind: 'text' as const },
    supportUkgCom: { strategy: 'role' as const, value: 'support@ukg.com', role: 'link', actionKind: 'link' as const },
    aLink3: { strategy: 'role' as const, value: '1-800-432-1729', role: 'link', actionKind: 'link' as const },
    resources: { strategy: 'text' as const, value: 'Resources', actionKind: 'text' as const },
    usefulLinksPortalsAnd: { strategy: 'text' as const, value: 'Useful links, portals, and learning resources for', actionKind: 'text' as const },
    communityConnectWith50000: { strategy: 'role' as const, value: 'Community Connect with 50,000+ UKG customers &', role: 'link', actionKind: 'link' as const },
    ukgLearnHubAccess: { strategy: 'text' as const, value: 'UKG Learn Hub Access training courses, certifications, and learning paths', actionKind: 'link' as const },
    ukgProSignIn: { strategy: 'role' as const, value: 'UKG PRO Sign in to your UKG Pro HCM and payroll', role: 'link', actionKind: 'link' as const },
    ukgProWfmWorkforce: { strategy: 'role' as const, value: 'UKG Pro WFM Workforce management and scheduling', role: 'link', actionKind: 'link' as const },
    ukgSupportSubmitTickets: { strategy: 'text' as const, value: 'UKG Support Submit tickets, access the knowledge base, and get help', actionKind: 'link' as const },
    trustCenterAccessSecurity: { strategy: 'text' as const, value: 'Trust Center Access security, compliance, privacy, and trust resources.', actionKind: 'link' as const },
    companyContacts: { strategy: 'text' as const, value: 'Company Contacts', actionKind: 'text' as const },
    michaelSmith: { strategy: 'text' as const, value: 'Michael Smith', actionKind: 'text' as const },
    portalAdministrator: { strategy: 'text' as const, value: 'Portal Administrator', actionKind: 'text' as const },
    user2AcmecorporationExampleCom: { strategy: 'role' as const, value: 'user2@acmecorporation.example.com', role: 'link', actionKind: 'link' as const },
    emmaJohnson: { strategy: 'text' as const, value: 'Emma Johnson', actionKind: 'text' as const },
    user1AcmecorporationExampleCom: { strategy: 'role' as const, value: 'user1@acmecorporation.example.com', role: 'link', actionKind: 'link' as const },
    danielHall: { strategy: 'text' as const, value: 'Daniel Hall', actionKind: 'text' as const },
    billingRenewalsUser: { strategy: 'text' as const, value: 'Billing & Renewals User', actionKind: 'text' as const },
    user18AcmecorporationExampleCom: { strategy: 'role' as const, value: 'user18@acmecorporation.example.com', role: 'link', actionKind: 'link' as const },
    harperAllen: { strategy: 'text' as const, value: 'Harper Allen', actionKind: 'text' as const },
    user19AcmecorporationExampleCom: { strategy: 'role' as const, value: 'user19@acmecorporation.example.com', role: 'link', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextCustomerSinceJan2022(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.customerSinceJan2022));
  }

  async expectCustomerSinceJan2022Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.customerSinceJan2022), timeoutMs);
  }

  async expectCustomerSinceJan2022Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.customerSinceJan2022), timeoutMs);
  }

  async expectCustomerSinceJan2022Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.customerSinceJan2022), expected, timeoutMs);
  }

  async expectCustomerSinceJan2022ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.customerSinceJan2022), substring, timeoutMs);
  }

  async scrollCustomerSinceJan2022IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.customerSinceJan2022));
  }

  async getInnerTextSolutionIdSOL2001(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.solutionIdSOL2001));
  }

  async expectSolutionIdSOL2001Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.solutionIdSOL2001), timeoutMs);
  }

  async expectSolutionIdSOL2001Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.solutionIdSOL2001), timeoutMs);
  }

  async expectSolutionIdSOL2001Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.solutionIdSOL2001), expected, timeoutMs);
  }

  async expectSolutionIdSOL2001ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.solutionIdSOL2001), substring, timeoutMs);
  }

  async scrollSolutionIdSOL2001IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.solutionIdSOL2001));
  }

  async getInnerTextSolutionId(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.solutionId));
  }

  async expectSolutionIdVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.solutionId), timeoutMs);
  }

  async expectSolutionIdHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.solutionId), timeoutMs);
  }

  async expectSolutionIdText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.solutionId), expected, timeoutMs);
  }

  async expectSolutionIdContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.solutionId), substring, timeoutMs);
  }

  async scrollSolutionIdIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.solutionId));
  }

  async getInnerTextSOL2001(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.sOL2001));
  }

  async expectSOL2001Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.sOL2001), timeoutMs);
  }

  async expectSOL2001Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.sOL2001), timeoutMs);
  }

  async expectSOL2001Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.sOL2001), expected, timeoutMs);
  }

  async expectSOL2001ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.sOL2001), substring, timeoutMs);
  }

  async scrollSOL2001IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.sOL2001));
  }

  async getInnerTextBillTo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.billTo));
  }

  async expectBillToVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.billTo), timeoutMs);
  }

  async expectBillToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.billTo), timeoutMs);
  }

  async expectBillToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.billTo), expected, timeoutMs);
  }

  async expectBillToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.billTo), substring, timeoutMs);
  }

  async scrollBillToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.billTo));
  }

  async getInnerTextMainStNew(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.mainStNew));
  }

  async expectMainStNewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.mainStNew), timeoutMs);
  }

  async expectMainStNewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.mainStNew), timeoutMs);
  }

  async expectMainStNewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.mainStNew), expected, timeoutMs);
  }

  async expectMainStNewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.mainStNew), substring, timeoutMs);
  }

  async scrollMainStNewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.mainStNew));
  }

  async getInnerTextYourUkgTeam(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.yourUkgTeam));
  }

  async expectYourUkgTeamVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.yourUkgTeam), timeoutMs);
  }

  async expectYourUkgTeamHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.yourUkgTeam), timeoutMs);
  }

  async expectYourUkgTeamText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.yourUkgTeam), expected, timeoutMs);
  }

  async expectYourUkgTeamContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.yourUkgTeam), substring, timeoutMs);
  }

  async scrollYourUkgTeamIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.yourUkgTeam));
  }

  async getInnerTextJohnSmith(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.johnSmith));
  }

  async expectJohnSmithVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.johnSmith), timeoutMs);
  }

  async expectJohnSmithHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.johnSmith), timeoutMs);
  }

  async expectJohnSmithText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.johnSmith), expected, timeoutMs);
  }

  async expectJohnSmithContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.johnSmith), substring, timeoutMs);
  }

  async scrollJohnSmithIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.johnSmith));
  }

  async getInnerTextCustomerSuccessManager(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.customerSuccessManager));
  }

  async expectCustomerSuccessManagerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.customerSuccessManager), expected, timeoutMs);
  }

  async expectCustomerSuccessManagerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.customerSuccessManager), substring, timeoutMs);
  }

  async scrollCustomerSuccessManagerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.customerSuccessManager));
  }

  async clickJohnSmithAcmecorporationCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.johnSmithAcmecorporationCom));
  }

  async doubleClickJohnSmithAcmecorporationCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.johnSmithAcmecorporationCom));
  }

  async expectJohnSmithAcmecorporationComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.johnSmithAcmecorporationCom), timeoutMs);
  }

  async expectJohnSmithAcmecorporationComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.johnSmithAcmecorporationCom), timeoutMs);
  }

  async expectJohnSmithAcmecorporationComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.johnSmithAcmecorporationCom), expected, timeoutMs);
  }

  async expectJohnSmithAcmecorporationComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.johnSmithAcmecorporationCom), substring, timeoutMs);
  }

  async scrollJohnSmithAcmecorporationComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.johnSmithAcmecorporationCom));
  }

  async clickA(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.a));
  }

  async doubleClickA(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.a));
  }

  async expectAVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.a), timeoutMs);
  }

  async expectAHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.a), timeoutMs);
  }

  async expectAText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.a), expected, timeoutMs);
  }

  async expectAContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.a), substring, timeoutMs);
  }

  async scrollAIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.a));
  }

  async getInnerTextSarahJohnson(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.sarahJohnson));
  }

  async expectSarahJohnsonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.sarahJohnson), timeoutMs);
  }

  async expectSarahJohnsonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.sarahJohnson), timeoutMs);
  }

  async expectSarahJohnsonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.sarahJohnson), expected, timeoutMs);
  }

  async expectSarahJohnsonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.sarahJohnson), substring, timeoutMs);
  }

  async scrollSarahJohnsonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.sarahJohnson));
  }

  async getInnerTextAccountExecutive(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.accountExecutive));
  }

  async expectAccountExecutiveVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.accountExecutive), timeoutMs);
  }

  async expectAccountExecutiveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.accountExecutive), timeoutMs);
  }

  async expectAccountExecutiveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.accountExecutive), expected, timeoutMs);
  }

  async expectAccountExecutiveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.accountExecutive), substring, timeoutMs);
  }

  async scrollAccountExecutiveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.accountExecutive));
  }

  async clickSarahJohnsonAcmecorporationCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.sarahJohnsonAcmecorporationCom));
  }

  async doubleClickSarahJohnsonAcmecorporationCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.sarahJohnsonAcmecorporationCom));
  }

  async expectSarahJohnsonAcmecorporationComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.sarahJohnsonAcmecorporationCom), timeoutMs);
  }

  async expectSarahJohnsonAcmecorporationComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.sarahJohnsonAcmecorporationCom), timeoutMs);
  }

  async expectSarahJohnsonAcmecorporationComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.sarahJohnsonAcmecorporationCom), expected, timeoutMs);
  }

  async expectSarahJohnsonAcmecorporationComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.sarahJohnsonAcmecorporationCom), substring, timeoutMs);
  }

  async scrollSarahJohnsonAcmecorporationComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.sarahJohnsonAcmecorporationCom));
  }

  async clickALink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.aLink));
  }

  async doubleClickALink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.aLink));
  }

  async expectALinkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.aLink), timeoutMs);
  }

  async expectALinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.aLink), timeoutMs);
  }

  async expectALinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.aLink), expected, timeoutMs);
  }

  async expectALinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.aLink), substring, timeoutMs);
  }

  async scrollALinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.aLink));
  }

  async getInnerTextMikeBrown(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.mikeBrown));
  }

  async expectMikeBrownVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.mikeBrown), timeoutMs);
  }

  async expectMikeBrownHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.mikeBrown), timeoutMs);
  }

  async expectMikeBrownText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.mikeBrown), expected, timeoutMs);
  }

  async expectMikeBrownContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.mikeBrown), substring, timeoutMs);
  }

  async scrollMikeBrownIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.mikeBrown));
  }

  async getInnerTextTechnicalAccountManager(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.technicalAccountManager));
  }

  async expectTechnicalAccountManagerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.technicalAccountManager), timeoutMs);
  }

  async expectTechnicalAccountManagerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.technicalAccountManager), timeoutMs);
  }

  async expectTechnicalAccountManagerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.technicalAccountManager), expected, timeoutMs);
  }

  async expectTechnicalAccountManagerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.technicalAccountManager), substring, timeoutMs);
  }

  async scrollTechnicalAccountManagerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.technicalAccountManager));
  }

  async clickMikeBrownAcmecorporationCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.mikeBrownAcmecorporationCom));
  }

  async doubleClickMikeBrownAcmecorporationCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.mikeBrownAcmecorporationCom));
  }

  async expectMikeBrownAcmecorporationComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.mikeBrownAcmecorporationCom), timeoutMs);
  }

  async expectMikeBrownAcmecorporationComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.mikeBrownAcmecorporationCom), timeoutMs);
  }

  async expectMikeBrownAcmecorporationComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.mikeBrownAcmecorporationCom), expected, timeoutMs);
  }

  async expectMikeBrownAcmecorporationComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.mikeBrownAcmecorporationCom), substring, timeoutMs);
  }

  async scrollMikeBrownAcmecorporationComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.mikeBrownAcmecorporationCom));
  }

  async clickALink2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.aLink2));
  }

  async doubleClickALink2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.aLink2));
  }

  async expectALink2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.aLink2), timeoutMs);
  }

  async expectALink2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.aLink2), timeoutMs);
  }

  async expectALink2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.aLink2), expected, timeoutMs);
  }

  async expectALink2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.aLink2), substring, timeoutMs);
  }

  async scrollALink2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.aLink2));
  }

  async getInnerTextUkgSupport(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.ukgSupport));
  }

  async expectUkgSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.ukgSupport), timeoutMs);
  }

  async expectUkgSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.ukgSupport), timeoutMs);
  }

  async expectUkgSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.ukgSupport), expected, timeoutMs);
  }

  async expectUkgSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.ukgSupport), substring, timeoutMs);
  }

  async scrollUkgSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.ukgSupport));
  }

  async getInnerTextGlobalSupport(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.globalSupport));
  }

  async expectGlobalSupportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.globalSupport), timeoutMs);
  }

  async expectGlobalSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.globalSupport), timeoutMs);
  }

  async expectGlobalSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.globalSupport), expected, timeoutMs);
  }

  async expectGlobalSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.globalSupport), substring, timeoutMs);
  }

  async scrollGlobalSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.globalSupport));
  }

  async clickSupportUkgCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.supportUkgCom));
  }

  async doubleClickSupportUkgCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.supportUkgCom));
  }

  async expectSupportUkgComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.supportUkgCom), timeoutMs);
  }

  async expectSupportUkgComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.supportUkgCom), timeoutMs);
  }

  async expectSupportUkgComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.supportUkgCom), expected, timeoutMs);
  }

  async expectSupportUkgComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.supportUkgCom), substring, timeoutMs);
  }

  async scrollSupportUkgComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.supportUkgCom));
  }

  async clickALink3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.aLink3));
  }

  async doubleClickALink3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.aLink3));
  }

  async expectALink3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.aLink3), timeoutMs);
  }

  async expectALink3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.aLink3), timeoutMs);
  }

  async expectALink3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.aLink3), expected, timeoutMs);
  }

  async expectALink3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.aLink3), substring, timeoutMs);
  }

  async scrollALink3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.aLink3));
  }

  async getInnerTextResources(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.resources));
  }

  async expectResourcesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.resources), timeoutMs);
  }

  async expectResourcesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.resources), timeoutMs);
  }

  async expectResourcesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.resources), expected, timeoutMs);
  }

  async expectResourcesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.resources), substring, timeoutMs);
  }

  async scrollResourcesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.resources));
  }

  async getInnerTextUsefulLinksPortalsAnd(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.usefulLinksPortalsAnd));
  }

  async expectUsefulLinksPortalsAndVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.usefulLinksPortalsAnd), timeoutMs);
  }

  async expectUsefulLinksPortalsAndHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.usefulLinksPortalsAnd), timeoutMs);
  }

  async expectUsefulLinksPortalsAndText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.usefulLinksPortalsAnd), expected, timeoutMs);
  }

  async expectUsefulLinksPortalsAndContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.usefulLinksPortalsAnd), substring, timeoutMs);
  }

  async scrollUsefulLinksPortalsAndIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.usefulLinksPortalsAnd));
  }

  async clickCommunityConnectWith50000(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.communityConnectWith50000));
  }

  async doubleClickCommunityConnectWith50000(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.communityConnectWith50000));
  }

  async expectCommunityConnectWith50000Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.communityConnectWith50000), timeoutMs);
  }

  async expectCommunityConnectWith50000Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.communityConnectWith50000), timeoutMs);
  }

  async expectCommunityConnectWith50000Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.communityConnectWith50000), expected, timeoutMs);
  }

  async expectCommunityConnectWith50000ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.communityConnectWith50000), substring, timeoutMs);
  }

  async scrollCommunityConnectWith50000IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.communityConnectWith50000));
  }

  async clickUkgLearnHubAccess(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.ukgLearnHubAccess));
  }

  async doubleClickUkgLearnHubAccess(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.ukgLearnHubAccess));
  }

  async expectUkgLearnHubAccessVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.ukgLearnHubAccess), timeoutMs);
  }

  async expectUkgLearnHubAccessHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.ukgLearnHubAccess), timeoutMs);
  }

  async expectUkgLearnHubAccessText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.ukgLearnHubAccess), expected, timeoutMs);
  }

  async expectUkgLearnHubAccessContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.ukgLearnHubAccess), substring, timeoutMs);
  }

  async scrollUkgLearnHubAccessIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.ukgLearnHubAccess));
  }

  async clickUkgProSignIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.ukgProSignIn));
  }

  async doubleClickUkgProSignIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.ukgProSignIn));
  }

  async expectUkgProSignInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.ukgProSignIn), timeoutMs);
  }

  async expectUkgProSignInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.ukgProSignIn), timeoutMs);
  }

  async expectUkgProSignInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.ukgProSignIn), expected, timeoutMs);
  }

  async expectUkgProSignInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.ukgProSignIn), substring, timeoutMs);
  }

  async scrollUkgProSignInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.ukgProSignIn));
  }

  async clickUkgProWfmWorkforce(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.ukgProWfmWorkforce));
  }

  async doubleClickUkgProWfmWorkforce(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.ukgProWfmWorkforce));
  }

  async expectUkgProWfmWorkforceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.ukgProWfmWorkforce), timeoutMs);
  }

  async expectUkgProWfmWorkforceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.ukgProWfmWorkforce), timeoutMs);
  }

  async expectUkgProWfmWorkforceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.ukgProWfmWorkforce), expected, timeoutMs);
  }

  async expectUkgProWfmWorkforceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.ukgProWfmWorkforce), substring, timeoutMs);
  }

  async scrollUkgProWfmWorkforceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.ukgProWfmWorkforce));
  }

  async clickUkgSupportSubmitTickets(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.ukgSupportSubmitTickets));
  }

  async doubleClickUkgSupportSubmitTickets(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.ukgSupportSubmitTickets));
  }

  async expectUkgSupportSubmitTicketsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.ukgSupportSubmitTickets), timeoutMs);
  }

  async expectUkgSupportSubmitTicketsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.ukgSupportSubmitTickets), timeoutMs);
  }

  async expectUkgSupportSubmitTicketsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.ukgSupportSubmitTickets), expected, timeoutMs);
  }

  async expectUkgSupportSubmitTicketsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.ukgSupportSubmitTickets), substring, timeoutMs);
  }

  async scrollUkgSupportSubmitTicketsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.ukgSupportSubmitTickets));
  }

  async clickTrustCenterAccessSecurity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.trustCenterAccessSecurity));
  }

  async doubleClickTrustCenterAccessSecurity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.trustCenterAccessSecurity));
  }

  async expectTrustCenterAccessSecurityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.trustCenterAccessSecurity), timeoutMs);
  }

  async expectTrustCenterAccessSecurityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.trustCenterAccessSecurity), timeoutMs);
  }

  async expectTrustCenterAccessSecurityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.trustCenterAccessSecurity), expected, timeoutMs);
  }

  async expectTrustCenterAccessSecurityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.trustCenterAccessSecurity), substring, timeoutMs);
  }

  async scrollTrustCenterAccessSecurityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.trustCenterAccessSecurity));
  }

  async getInnerTextCompanyContacts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.companyContacts));
  }

  async expectCompanyContactsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.companyContacts), timeoutMs);
  }

  async expectCompanyContactsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.companyContacts), timeoutMs);
  }

  async expectCompanyContactsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.companyContacts), expected, timeoutMs);
  }

  async expectCompanyContactsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.companyContacts), substring, timeoutMs);
  }

  async scrollCompanyContactsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.companyContacts));
  }

  async getInnerTextMichaelSmith(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.michaelSmith));
  }

  async expectMichaelSmithVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.michaelSmith), timeoutMs);
  }

  async expectMichaelSmithHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.michaelSmith), timeoutMs);
  }

  async expectMichaelSmithText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.michaelSmith), expected, timeoutMs);
  }

  async expectMichaelSmithContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.michaelSmith), substring, timeoutMs);
  }

  async scrollMichaelSmithIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.michaelSmith));
  }

  async getInnerTextPortalAdministrator(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.portalAdministrator));
  }

  async expectPortalAdministratorVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.portalAdministrator), expected, timeoutMs);
  }

  async expectPortalAdministratorContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.portalAdministrator), substring, timeoutMs);
  }

  async scrollPortalAdministratorIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.portalAdministrator));
  }

  async clickUser2AcmecorporationExampleCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.user2AcmecorporationExampleCom));
  }

  async doubleClickUser2AcmecorporationExampleCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.user2AcmecorporationExampleCom));
  }

  async expectUser2AcmecorporationExampleComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.user2AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser2AcmecorporationExampleComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.user2AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser2AcmecorporationExampleComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.user2AcmecorporationExampleCom), expected, timeoutMs);
  }

  async expectUser2AcmecorporationExampleComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.user2AcmecorporationExampleCom), substring, timeoutMs);
  }

  async scrollUser2AcmecorporationExampleComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.user2AcmecorporationExampleCom));
  }

  async getInnerTextEmmaJohnson(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.emmaJohnson));
  }

  async expectEmmaJohnsonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.emmaJohnson), expected, timeoutMs);
  }

  async expectEmmaJohnsonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.emmaJohnson), substring, timeoutMs);
  }

  async scrollEmmaJohnsonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.emmaJohnson));
  }

  async clickUser1AcmecorporationExampleCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.user1AcmecorporationExampleCom));
  }

  async doubleClickUser1AcmecorporationExampleCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.user1AcmecorporationExampleCom));
  }

  async expectUser1AcmecorporationExampleComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.user1AcmecorporationExampleCom), expected, timeoutMs);
  }

  async expectUser1AcmecorporationExampleComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.user1AcmecorporationExampleCom), substring, timeoutMs);
  }

  async scrollUser1AcmecorporationExampleComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.user1AcmecorporationExampleCom));
  }

  async getInnerTextDanielHall(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.danielHall));
  }

  async expectDanielHallVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.danielHall), timeoutMs);
  }

  async expectDanielHallHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.danielHall), timeoutMs);
  }

  async expectDanielHallText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.danielHall), expected, timeoutMs);
  }

  async expectDanielHallContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.danielHall), substring, timeoutMs);
  }

  async scrollDanielHallIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.danielHall));
  }

  async getInnerTextBillingRenewalsUser(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.billingRenewalsUser));
  }

  async expectBillingRenewalsUserVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.billingRenewalsUser), timeoutMs);
  }

  async expectBillingRenewalsUserHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.billingRenewalsUser), timeoutMs);
  }

  async expectBillingRenewalsUserText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.billingRenewalsUser), expected, timeoutMs);
  }

  async expectBillingRenewalsUserContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.billingRenewalsUser), substring, timeoutMs);
  }

  async scrollBillingRenewalsUserIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.billingRenewalsUser));
  }

  async clickUser18AcmecorporationExampleCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.user18AcmecorporationExampleCom));
  }

  async doubleClickUser18AcmecorporationExampleCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.user18AcmecorporationExampleCom));
  }

  async expectUser18AcmecorporationExampleComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.user18AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser18AcmecorporationExampleComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.user18AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser18AcmecorporationExampleComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.user18AcmecorporationExampleCom), expected, timeoutMs);
  }

  async expectUser18AcmecorporationExampleComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.user18AcmecorporationExampleCom), substring, timeoutMs);
  }

  async scrollUser18AcmecorporationExampleComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.user18AcmecorporationExampleCom));
  }

  async getInnerTextHarperAllen(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CustomerPage.L.harperAllen));
  }

  async expectHarperAllenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.harperAllen), timeoutMs);
  }

  async expectHarperAllenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.harperAllen), timeoutMs);
  }

  async expectHarperAllenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.harperAllen), expected, timeoutMs);
  }

  async expectHarperAllenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.harperAllen), substring, timeoutMs);
  }

  async scrollHarperAllenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.harperAllen));
  }

  async clickUser19AcmecorporationExampleCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.user19AcmecorporationExampleCom));
  }

  async doubleClickUser19AcmecorporationExampleCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.user19AcmecorporationExampleCom));
  }

  async expectUser19AcmecorporationExampleComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CustomerPage.L.user19AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser19AcmecorporationExampleComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CustomerPage.L.user19AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser19AcmecorporationExampleComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CustomerPage.L.user19AcmecorporationExampleCom), expected, timeoutMs);
  }

  async expectUser19AcmecorporationExampleComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CustomerPage.L.user19AcmecorporationExampleCom), substring, timeoutMs);
  }

  async scrollUser19AcmecorporationExampleComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CustomerPage.L.user19AcmecorporationExampleCom));
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


  async clickCustomerSinceJan2022(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.customerSinceJan2022));
  }

  async doubleClickCustomerSinceJan2022(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.customerSinceJan2022));
  }

  async longPressCustomerSinceJan2022(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.customerSinceJan2022));
  }

  async expectCustomerSinceJan2022Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.customerSinceJan2022), value, timeoutMs);
  }

  async expectCustomerSinceJan2022Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.customerSinceJan2022), timeoutMs);
  }

  async expectCustomerSinceJan2022Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.customerSinceJan2022), timeoutMs);
  }

  async expectCustomerSinceJan2022Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.customerSinceJan2022), timeoutMs);
  }

  async expectCustomerSinceJan2022Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.customerSinceJan2022), timeoutMs);
  }

  async expectCustomerSinceJan2022Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.customerSinceJan2022), timeoutMs);
  }

  async expectCustomerSinceJan2022Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.customerSinceJan2022), count, timeoutMs);
  }

  async clickSolutionIdSOL2001(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.solutionIdSOL2001));
  }

  async doubleClickSolutionIdSOL2001(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.solutionIdSOL2001));
  }

  async longPressSolutionIdSOL2001(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.solutionIdSOL2001));
  }

  async expectSolutionIdSOL2001Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.solutionIdSOL2001), value, timeoutMs);
  }

  async expectSolutionIdSOL2001Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.solutionIdSOL2001), timeoutMs);
  }

  async expectSolutionIdSOL2001Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.solutionIdSOL2001), timeoutMs);
  }

  async expectSolutionIdSOL2001Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.solutionIdSOL2001), timeoutMs);
  }

  async expectSolutionIdSOL2001Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.solutionIdSOL2001), timeoutMs);
  }

  async expectSolutionIdSOL2001Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.solutionIdSOL2001), timeoutMs);
  }

  async expectSolutionIdSOL2001Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.solutionIdSOL2001), count, timeoutMs);
  }

  async clickSolutionId(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.solutionId));
  }

  async doubleClickSolutionId(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.solutionId));
  }

  async longPressSolutionId(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.solutionId));
  }

  async expectSolutionIdValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.solutionId), value, timeoutMs);
  }

  async expectSolutionIdEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.solutionId), timeoutMs);
  }

  async expectSolutionIdDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.solutionId), timeoutMs);
  }

  async expectSolutionIdChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.solutionId), timeoutMs);
  }

  async expectSolutionIdUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.solutionId), timeoutMs);
  }

  async expectSolutionIdFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.solutionId), timeoutMs);
  }

  async expectSolutionIdCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.solutionId), count, timeoutMs);
  }

  async clickSOL2001(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.sOL2001));
  }

  async doubleClickSOL2001(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.sOL2001));
  }

  async longPressSOL2001(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.sOL2001));
  }

  async expectSOL2001Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.sOL2001), value, timeoutMs);
  }

  async expectSOL2001Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.sOL2001), timeoutMs);
  }

  async expectSOL2001Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.sOL2001), timeoutMs);
  }

  async expectSOL2001Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.sOL2001), timeoutMs);
  }

  async expectSOL2001Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.sOL2001), timeoutMs);
  }

  async expectSOL2001Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.sOL2001), timeoutMs);
  }

  async expectSOL2001Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.sOL2001), count, timeoutMs);
  }

  async clickBillTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.billTo));
  }

  async doubleClickBillTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.billTo));
  }

  async longPressBillTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.billTo));
  }

  async expectBillToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.billTo), value, timeoutMs);
  }

  async expectBillToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.billTo), timeoutMs);
  }

  async expectBillToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.billTo), timeoutMs);
  }

  async expectBillToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.billTo), timeoutMs);
  }

  async expectBillToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.billTo), timeoutMs);
  }

  async expectBillToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.billTo), timeoutMs);
  }

  async expectBillToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.billTo), count, timeoutMs);
  }

  async clickMainStNew(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.mainStNew));
  }

  async doubleClickMainStNew(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.mainStNew));
  }

  async longPressMainStNew(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.mainStNew));
  }

  async expectMainStNewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.mainStNew), value, timeoutMs);
  }

  async expectMainStNewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.mainStNew), timeoutMs);
  }

  async expectMainStNewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.mainStNew), timeoutMs);
  }

  async expectMainStNewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.mainStNew), timeoutMs);
  }

  async expectMainStNewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.mainStNew), timeoutMs);
  }

  async expectMainStNewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.mainStNew), timeoutMs);
  }

  async expectMainStNewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.mainStNew), count, timeoutMs);
  }

  async clickYourUkgTeam(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.yourUkgTeam));
  }

  async doubleClickYourUkgTeam(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.yourUkgTeam));
  }

  async longPressYourUkgTeam(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.yourUkgTeam));
  }

  async expectYourUkgTeamValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.yourUkgTeam), value, timeoutMs);
  }

  async expectYourUkgTeamEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.yourUkgTeam), timeoutMs);
  }

  async expectYourUkgTeamDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.yourUkgTeam), timeoutMs);
  }

  async expectYourUkgTeamChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.yourUkgTeam), timeoutMs);
  }

  async expectYourUkgTeamUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.yourUkgTeam), timeoutMs);
  }

  async expectYourUkgTeamFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.yourUkgTeam), timeoutMs);
  }

  async expectYourUkgTeamCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.yourUkgTeam), count, timeoutMs);
  }

  async clickJohnSmith(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.johnSmith));
  }

  async doubleClickJohnSmith(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.johnSmith));
  }

  async longPressJohnSmith(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.johnSmith));
  }

  async expectJohnSmithValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.johnSmith), value, timeoutMs);
  }

  async expectJohnSmithEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.johnSmith), timeoutMs);
  }

  async expectJohnSmithDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.johnSmith), timeoutMs);
  }

  async expectJohnSmithChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.johnSmith), timeoutMs);
  }

  async expectJohnSmithUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.johnSmith), timeoutMs);
  }

  async expectJohnSmithFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.johnSmith), timeoutMs);
  }

  async expectJohnSmithCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.johnSmith), count, timeoutMs);
  }

  async clickCustomerSuccessManager(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.customerSuccessManager));
  }

  async doubleClickCustomerSuccessManager(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.customerSuccessManager));
  }

  async longPressCustomerSuccessManager(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.customerSuccessManager));
  }

  async expectCustomerSuccessManagerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.customerSuccessManager), value, timeoutMs);
  }

  async expectCustomerSuccessManagerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.customerSuccessManager), count, timeoutMs);
  }

  async longPressJohnSmithAcmecorporationCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.johnSmithAcmecorporationCom));
  }

  async expectJohnSmithAcmecorporationComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.johnSmithAcmecorporationCom), value, timeoutMs);
  }

  async expectJohnSmithAcmecorporationComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.johnSmithAcmecorporationCom), timeoutMs);
  }

  async expectJohnSmithAcmecorporationComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.johnSmithAcmecorporationCom), timeoutMs);
  }

  async expectJohnSmithAcmecorporationComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.johnSmithAcmecorporationCom), timeoutMs);
  }

  async expectJohnSmithAcmecorporationComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.johnSmithAcmecorporationCom), timeoutMs);
  }

  async expectJohnSmithAcmecorporationComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.johnSmithAcmecorporationCom), timeoutMs);
  }

  async expectJohnSmithAcmecorporationComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.johnSmithAcmecorporationCom), count, timeoutMs);
  }

  async longPressA(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.a));
  }

  async expectAValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.a), value, timeoutMs);
  }

  async expectAEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.a), timeoutMs);
  }

  async expectADisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.a), timeoutMs);
  }

  async expectAChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.a), timeoutMs);
  }

  async expectAUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.a), timeoutMs);
  }

  async expectAFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.a), timeoutMs);
  }

  async expectACount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.a), count, timeoutMs);
  }

  async clickSarahJohnson(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.sarahJohnson));
  }

  async doubleClickSarahJohnson(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.sarahJohnson));
  }

  async longPressSarahJohnson(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.sarahJohnson));
  }

  async expectSarahJohnsonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.sarahJohnson), value, timeoutMs);
  }

  async expectSarahJohnsonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.sarahJohnson), timeoutMs);
  }

  async expectSarahJohnsonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.sarahJohnson), timeoutMs);
  }

  async expectSarahJohnsonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.sarahJohnson), timeoutMs);
  }

  async expectSarahJohnsonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.sarahJohnson), timeoutMs);
  }

  async expectSarahJohnsonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.sarahJohnson), timeoutMs);
  }

  async expectSarahJohnsonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.sarahJohnson), count, timeoutMs);
  }

  async clickAccountExecutive(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.accountExecutive));
  }

  async doubleClickAccountExecutive(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.accountExecutive));
  }

  async longPressAccountExecutive(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.accountExecutive));
  }

  async expectAccountExecutiveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.accountExecutive), value, timeoutMs);
  }

  async expectAccountExecutiveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.accountExecutive), timeoutMs);
  }

  async expectAccountExecutiveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.accountExecutive), timeoutMs);
  }

  async expectAccountExecutiveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.accountExecutive), timeoutMs);
  }

  async expectAccountExecutiveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.accountExecutive), timeoutMs);
  }

  async expectAccountExecutiveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.accountExecutive), timeoutMs);
  }

  async expectAccountExecutiveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.accountExecutive), count, timeoutMs);
  }

  async longPressSarahJohnsonAcmecorporationCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.sarahJohnsonAcmecorporationCom));
  }

  async expectSarahJohnsonAcmecorporationComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.sarahJohnsonAcmecorporationCom), value, timeoutMs);
  }

  async expectSarahJohnsonAcmecorporationComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.sarahJohnsonAcmecorporationCom), timeoutMs);
  }

  async expectSarahJohnsonAcmecorporationComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.sarahJohnsonAcmecorporationCom), timeoutMs);
  }

  async expectSarahJohnsonAcmecorporationComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.sarahJohnsonAcmecorporationCom), timeoutMs);
  }

  async expectSarahJohnsonAcmecorporationComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.sarahJohnsonAcmecorporationCom), timeoutMs);
  }

  async expectSarahJohnsonAcmecorporationComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.sarahJohnsonAcmecorporationCom), timeoutMs);
  }

  async expectSarahJohnsonAcmecorporationComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.sarahJohnsonAcmecorporationCom), count, timeoutMs);
  }

  async longPressALink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.aLink));
  }

  async expectALinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.aLink), value, timeoutMs);
  }

  async expectALinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.aLink), timeoutMs);
  }

  async expectALinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.aLink), timeoutMs);
  }

  async expectALinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.aLink), timeoutMs);
  }

  async expectALinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.aLink), timeoutMs);
  }

  async expectALinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.aLink), timeoutMs);
  }

  async expectALinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.aLink), count, timeoutMs);
  }

  async clickMikeBrown(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.mikeBrown));
  }

  async doubleClickMikeBrown(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.mikeBrown));
  }

  async longPressMikeBrown(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.mikeBrown));
  }

  async expectMikeBrownValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.mikeBrown), value, timeoutMs);
  }

  async expectMikeBrownEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.mikeBrown), timeoutMs);
  }

  async expectMikeBrownDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.mikeBrown), timeoutMs);
  }

  async expectMikeBrownChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.mikeBrown), timeoutMs);
  }

  async expectMikeBrownUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.mikeBrown), timeoutMs);
  }

  async expectMikeBrownFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.mikeBrown), timeoutMs);
  }

  async expectMikeBrownCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.mikeBrown), count, timeoutMs);
  }

  async clickTechnicalAccountManager(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.technicalAccountManager));
  }

  async doubleClickTechnicalAccountManager(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.technicalAccountManager));
  }

  async longPressTechnicalAccountManager(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.technicalAccountManager));
  }

  async expectTechnicalAccountManagerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.technicalAccountManager), value, timeoutMs);
  }

  async expectTechnicalAccountManagerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.technicalAccountManager), timeoutMs);
  }

  async expectTechnicalAccountManagerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.technicalAccountManager), timeoutMs);
  }

  async expectTechnicalAccountManagerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.technicalAccountManager), timeoutMs);
  }

  async expectTechnicalAccountManagerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.technicalAccountManager), timeoutMs);
  }

  async expectTechnicalAccountManagerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.technicalAccountManager), timeoutMs);
  }

  async expectTechnicalAccountManagerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.technicalAccountManager), count, timeoutMs);
  }

  async longPressMikeBrownAcmecorporationCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.mikeBrownAcmecorporationCom));
  }

  async expectMikeBrownAcmecorporationComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.mikeBrownAcmecorporationCom), value, timeoutMs);
  }

  async expectMikeBrownAcmecorporationComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.mikeBrownAcmecorporationCom), timeoutMs);
  }

  async expectMikeBrownAcmecorporationComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.mikeBrownAcmecorporationCom), timeoutMs);
  }

  async expectMikeBrownAcmecorporationComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.mikeBrownAcmecorporationCom), timeoutMs);
  }

  async expectMikeBrownAcmecorporationComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.mikeBrownAcmecorporationCom), timeoutMs);
  }

  async expectMikeBrownAcmecorporationComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.mikeBrownAcmecorporationCom), timeoutMs);
  }

  async expectMikeBrownAcmecorporationComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.mikeBrownAcmecorporationCom), count, timeoutMs);
  }

  async longPressALink2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.aLink2));
  }

  async expectALink2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.aLink2), value, timeoutMs);
  }

  async expectALink2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.aLink2), timeoutMs);
  }

  async expectALink2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.aLink2), timeoutMs);
  }

  async expectALink2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.aLink2), timeoutMs);
  }

  async expectALink2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.aLink2), timeoutMs);
  }

  async expectALink2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.aLink2), timeoutMs);
  }

  async expectALink2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.aLink2), count, timeoutMs);
  }

  async clickUkgSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.ukgSupport));
  }

  async doubleClickUkgSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.ukgSupport));
  }

  async longPressUkgSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.ukgSupport));
  }

  async expectUkgSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.ukgSupport), value, timeoutMs);
  }

  async expectUkgSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.ukgSupport), timeoutMs);
  }

  async expectUkgSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.ukgSupport), timeoutMs);
  }

  async expectUkgSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.ukgSupport), timeoutMs);
  }

  async expectUkgSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.ukgSupport), timeoutMs);
  }

  async expectUkgSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.ukgSupport), timeoutMs);
  }

  async expectUkgSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.ukgSupport), count, timeoutMs);
  }

  async clickGlobalSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.globalSupport));
  }

  async doubleClickGlobalSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.globalSupport));
  }

  async longPressGlobalSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.globalSupport));
  }

  async expectGlobalSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.globalSupport), value, timeoutMs);
  }

  async expectGlobalSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.globalSupport), timeoutMs);
  }

  async expectGlobalSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.globalSupport), timeoutMs);
  }

  async expectGlobalSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.globalSupport), timeoutMs);
  }

  async expectGlobalSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.globalSupport), timeoutMs);
  }

  async expectGlobalSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.globalSupport), timeoutMs);
  }

  async expectGlobalSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.globalSupport), count, timeoutMs);
  }

  async longPressSupportUkgCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.supportUkgCom));
  }

  async expectSupportUkgComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.supportUkgCom), value, timeoutMs);
  }

  async expectSupportUkgComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.supportUkgCom), timeoutMs);
  }

  async expectSupportUkgComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.supportUkgCom), timeoutMs);
  }

  async expectSupportUkgComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.supportUkgCom), timeoutMs);
  }

  async expectSupportUkgComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.supportUkgCom), timeoutMs);
  }

  async expectSupportUkgComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.supportUkgCom), timeoutMs);
  }

  async expectSupportUkgComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.supportUkgCom), count, timeoutMs);
  }

  async longPressALink3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.aLink3));
  }

  async expectALink3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.aLink3), value, timeoutMs);
  }

  async expectALink3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.aLink3), timeoutMs);
  }

  async expectALink3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.aLink3), timeoutMs);
  }

  async expectALink3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.aLink3), timeoutMs);
  }

  async expectALink3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.aLink3), timeoutMs);
  }

  async expectALink3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.aLink3), timeoutMs);
  }

  async expectALink3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.aLink3), count, timeoutMs);
  }

  async clickResources(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.resources));
  }

  async doubleClickResources(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.resources));
  }

  async longPressResources(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.resources));
  }

  async expectResourcesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.resources), value, timeoutMs);
  }

  async expectResourcesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.resources), timeoutMs);
  }

  async expectResourcesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.resources), timeoutMs);
  }

  async expectResourcesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.resources), timeoutMs);
  }

  async expectResourcesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.resources), timeoutMs);
  }

  async expectResourcesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.resources), timeoutMs);
  }

  async expectResourcesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.resources), count, timeoutMs);
  }

  async clickUsefulLinksPortalsAnd(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.usefulLinksPortalsAnd));
  }

  async doubleClickUsefulLinksPortalsAnd(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.usefulLinksPortalsAnd));
  }

  async longPressUsefulLinksPortalsAnd(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.usefulLinksPortalsAnd));
  }

  async expectUsefulLinksPortalsAndValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.usefulLinksPortalsAnd), value, timeoutMs);
  }

  async expectUsefulLinksPortalsAndEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.usefulLinksPortalsAnd), timeoutMs);
  }

  async expectUsefulLinksPortalsAndDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.usefulLinksPortalsAnd), timeoutMs);
  }

  async expectUsefulLinksPortalsAndChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.usefulLinksPortalsAnd), timeoutMs);
  }

  async expectUsefulLinksPortalsAndUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.usefulLinksPortalsAnd), timeoutMs);
  }

  async expectUsefulLinksPortalsAndFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.usefulLinksPortalsAnd), timeoutMs);
  }

  async expectUsefulLinksPortalsAndCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.usefulLinksPortalsAnd), count, timeoutMs);
  }

  async longPressCommunityConnectWith50000(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.communityConnectWith50000));
  }

  async expectCommunityConnectWith50000Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.communityConnectWith50000), value, timeoutMs);
  }

  async expectCommunityConnectWith50000Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.communityConnectWith50000), timeoutMs);
  }

  async expectCommunityConnectWith50000Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.communityConnectWith50000), timeoutMs);
  }

  async expectCommunityConnectWith50000Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.communityConnectWith50000), timeoutMs);
  }

  async expectCommunityConnectWith50000Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.communityConnectWith50000), timeoutMs);
  }

  async expectCommunityConnectWith50000Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.communityConnectWith50000), timeoutMs);
  }

  async expectCommunityConnectWith50000Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.communityConnectWith50000), count, timeoutMs);
  }

  async longPressUkgLearnHubAccess(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.ukgLearnHubAccess));
  }

  async expectUkgLearnHubAccessValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.ukgLearnHubAccess), value, timeoutMs);
  }

  async expectUkgLearnHubAccessEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.ukgLearnHubAccess), timeoutMs);
  }

  async expectUkgLearnHubAccessDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.ukgLearnHubAccess), timeoutMs);
  }

  async expectUkgLearnHubAccessChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.ukgLearnHubAccess), timeoutMs);
  }

  async expectUkgLearnHubAccessUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.ukgLearnHubAccess), timeoutMs);
  }

  async expectUkgLearnHubAccessFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.ukgLearnHubAccess), timeoutMs);
  }

  async expectUkgLearnHubAccessCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.ukgLearnHubAccess), count, timeoutMs);
  }

  async longPressUkgProSignIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.ukgProSignIn));
  }

  async expectUkgProSignInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.ukgProSignIn), value, timeoutMs);
  }

  async expectUkgProSignInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.ukgProSignIn), timeoutMs);
  }

  async expectUkgProSignInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.ukgProSignIn), timeoutMs);
  }

  async expectUkgProSignInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.ukgProSignIn), timeoutMs);
  }

  async expectUkgProSignInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.ukgProSignIn), timeoutMs);
  }

  async expectUkgProSignInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.ukgProSignIn), timeoutMs);
  }

  async expectUkgProSignInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.ukgProSignIn), count, timeoutMs);
  }

  async longPressUkgProWfmWorkforce(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.ukgProWfmWorkforce));
  }

  async expectUkgProWfmWorkforceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.ukgProWfmWorkforce), value, timeoutMs);
  }

  async expectUkgProWfmWorkforceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.ukgProWfmWorkforce), timeoutMs);
  }

  async expectUkgProWfmWorkforceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.ukgProWfmWorkforce), timeoutMs);
  }

  async expectUkgProWfmWorkforceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.ukgProWfmWorkforce), timeoutMs);
  }

  async expectUkgProWfmWorkforceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.ukgProWfmWorkforce), timeoutMs);
  }

  async expectUkgProWfmWorkforceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.ukgProWfmWorkforce), timeoutMs);
  }

  async expectUkgProWfmWorkforceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.ukgProWfmWorkforce), count, timeoutMs);
  }

  async longPressUkgSupportSubmitTickets(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.ukgSupportSubmitTickets));
  }

  async expectUkgSupportSubmitTicketsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.ukgSupportSubmitTickets), value, timeoutMs);
  }

  async expectUkgSupportSubmitTicketsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.ukgSupportSubmitTickets), timeoutMs);
  }

  async expectUkgSupportSubmitTicketsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.ukgSupportSubmitTickets), timeoutMs);
  }

  async expectUkgSupportSubmitTicketsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.ukgSupportSubmitTickets), timeoutMs);
  }

  async expectUkgSupportSubmitTicketsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.ukgSupportSubmitTickets), timeoutMs);
  }

  async expectUkgSupportSubmitTicketsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.ukgSupportSubmitTickets), timeoutMs);
  }

  async expectUkgSupportSubmitTicketsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.ukgSupportSubmitTickets), count, timeoutMs);
  }

  async longPressTrustCenterAccessSecurity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.trustCenterAccessSecurity));
  }

  async expectTrustCenterAccessSecurityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.trustCenterAccessSecurity), value, timeoutMs);
  }

  async expectTrustCenterAccessSecurityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.trustCenterAccessSecurity), timeoutMs);
  }

  async expectTrustCenterAccessSecurityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.trustCenterAccessSecurity), timeoutMs);
  }

  async expectTrustCenterAccessSecurityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.trustCenterAccessSecurity), timeoutMs);
  }

  async expectTrustCenterAccessSecurityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.trustCenterAccessSecurity), timeoutMs);
  }

  async expectTrustCenterAccessSecurityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.trustCenterAccessSecurity), timeoutMs);
  }

  async expectTrustCenterAccessSecurityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.trustCenterAccessSecurity), count, timeoutMs);
  }

  async clickCompanyContacts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.companyContacts));
  }

  async doubleClickCompanyContacts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.companyContacts));
  }

  async longPressCompanyContacts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.companyContacts));
  }

  async expectCompanyContactsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.companyContacts), value, timeoutMs);
  }

  async expectCompanyContactsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.companyContacts), timeoutMs);
  }

  async expectCompanyContactsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.companyContacts), timeoutMs);
  }

  async expectCompanyContactsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.companyContacts), timeoutMs);
  }

  async expectCompanyContactsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.companyContacts), timeoutMs);
  }

  async expectCompanyContactsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.companyContacts), timeoutMs);
  }

  async expectCompanyContactsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.companyContacts), count, timeoutMs);
  }

  async clickMichaelSmith(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.michaelSmith));
  }

  async doubleClickMichaelSmith(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.michaelSmith));
  }

  async longPressMichaelSmith(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.michaelSmith));
  }

  async expectMichaelSmithValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.michaelSmith), value, timeoutMs);
  }

  async expectMichaelSmithEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.michaelSmith), timeoutMs);
  }

  async expectMichaelSmithDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.michaelSmith), timeoutMs);
  }

  async expectMichaelSmithChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.michaelSmith), timeoutMs);
  }

  async expectMichaelSmithUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.michaelSmith), timeoutMs);
  }

  async expectMichaelSmithFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.michaelSmith), timeoutMs);
  }

  async expectMichaelSmithCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.michaelSmith), count, timeoutMs);
  }

  async clickPortalAdministrator(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.portalAdministrator));
  }

  async doubleClickPortalAdministrator(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.portalAdministrator));
  }

  async longPressPortalAdministrator(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.portalAdministrator));
  }

  async expectPortalAdministratorValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.portalAdministrator), value, timeoutMs);
  }

  async expectPortalAdministratorEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.portalAdministrator), timeoutMs);
  }

  async expectPortalAdministratorCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.portalAdministrator), count, timeoutMs);
  }

  async longPressUser2AcmecorporationExampleCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.user2AcmecorporationExampleCom));
  }

  async expectUser2AcmecorporationExampleComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.user2AcmecorporationExampleCom), value, timeoutMs);
  }

  async expectUser2AcmecorporationExampleComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.user2AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser2AcmecorporationExampleComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.user2AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser2AcmecorporationExampleComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.user2AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser2AcmecorporationExampleComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.user2AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser2AcmecorporationExampleComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.user2AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser2AcmecorporationExampleComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.user2AcmecorporationExampleCom), count, timeoutMs);
  }

  async clickEmmaJohnson(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.emmaJohnson));
  }

  async doubleClickEmmaJohnson(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.emmaJohnson));
  }

  async longPressEmmaJohnson(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.emmaJohnson));
  }

  async expectEmmaJohnsonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.emmaJohnson), value, timeoutMs);
  }

  async expectEmmaJohnsonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.emmaJohnson), timeoutMs);
  }

  async expectEmmaJohnsonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.emmaJohnson), count, timeoutMs);
  }

  async longPressUser1AcmecorporationExampleCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.user1AcmecorporationExampleCom));
  }

  async expectUser1AcmecorporationExampleComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.user1AcmecorporationExampleCom), value, timeoutMs);
  }

  async expectUser1AcmecorporationExampleComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.user1AcmecorporationExampleCom), count, timeoutMs);
  }

  async clickDanielHall(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.danielHall));
  }

  async doubleClickDanielHall(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.danielHall));
  }

  async longPressDanielHall(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.danielHall));
  }

  async expectDanielHallValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.danielHall), value, timeoutMs);
  }

  async expectDanielHallEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.danielHall), timeoutMs);
  }

  async expectDanielHallDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.danielHall), timeoutMs);
  }

  async expectDanielHallChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.danielHall), timeoutMs);
  }

  async expectDanielHallUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.danielHall), timeoutMs);
  }

  async expectDanielHallFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.danielHall), timeoutMs);
  }

  async expectDanielHallCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.danielHall), count, timeoutMs);
  }

  async clickBillingRenewalsUser(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.billingRenewalsUser));
  }

  async doubleClickBillingRenewalsUser(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.billingRenewalsUser));
  }

  async longPressBillingRenewalsUser(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.billingRenewalsUser));
  }

  async expectBillingRenewalsUserValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.billingRenewalsUser), value, timeoutMs);
  }

  async expectBillingRenewalsUserEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.billingRenewalsUser), timeoutMs);
  }

  async expectBillingRenewalsUserDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.billingRenewalsUser), timeoutMs);
  }

  async expectBillingRenewalsUserChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.billingRenewalsUser), timeoutMs);
  }

  async expectBillingRenewalsUserUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.billingRenewalsUser), timeoutMs);
  }

  async expectBillingRenewalsUserFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.billingRenewalsUser), timeoutMs);
  }

  async expectBillingRenewalsUserCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.billingRenewalsUser), count, timeoutMs);
  }

  async longPressUser18AcmecorporationExampleCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.user18AcmecorporationExampleCom));
  }

  async expectUser18AcmecorporationExampleComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.user18AcmecorporationExampleCom), value, timeoutMs);
  }

  async expectUser18AcmecorporationExampleComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.user18AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser18AcmecorporationExampleComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.user18AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser18AcmecorporationExampleComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.user18AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser18AcmecorporationExampleComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.user18AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser18AcmecorporationExampleComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.user18AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser18AcmecorporationExampleComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.user18AcmecorporationExampleCom), count, timeoutMs);
  }

  async clickHarperAllen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CustomerPage.L.harperAllen));
  }

  async doubleClickHarperAllen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CustomerPage.L.harperAllen));
  }

  async longPressHarperAllen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.harperAllen));
  }

  async expectHarperAllenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.harperAllen), value, timeoutMs);
  }

  async expectHarperAllenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.harperAllen), timeoutMs);
  }

  async expectHarperAllenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.harperAllen), timeoutMs);
  }

  async expectHarperAllenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.harperAllen), timeoutMs);
  }

  async expectHarperAllenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.harperAllen), timeoutMs);
  }

  async expectHarperAllenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.harperAllen), timeoutMs);
  }

  async expectHarperAllenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.harperAllen), count, timeoutMs);
  }

  async longPressUser19AcmecorporationExampleCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CustomerPage.L.user19AcmecorporationExampleCom));
  }

  async expectUser19AcmecorporationExampleComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CustomerPage.L.user19AcmecorporationExampleCom), value, timeoutMs);
  }

  async expectUser19AcmecorporationExampleComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CustomerPage.L.user19AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser19AcmecorporationExampleComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CustomerPage.L.user19AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser19AcmecorporationExampleComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CustomerPage.L.user19AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser19AcmecorporationExampleComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CustomerPage.L.user19AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser19AcmecorporationExampleComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CustomerPage.L.user19AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser19AcmecorporationExampleComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CustomerPage.L.user19AcmecorporationExampleCom), count, timeoutMs);
  }

}

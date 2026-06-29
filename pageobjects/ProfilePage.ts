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

export class ProfilePage {
  private static readonly L = {
    personalInformation: { strategy: 'text' as const, value: 'Personal information', actionKind: 'text' as const },
    yourNameContactDetails: { strategy: 'text' as const, value: 'Your name, contact details, and preferences.', actionKind: 'text' as const },
    displayName: { strategy: 'text' as const, value: 'Display name', actionKind: 'text' as const },
    user1AcmecorporationExampleCom: { strategy: 'text' as const, value: 'user1@acmecorporation.example.com', actionKind: 'text' as const },
    jobTitle: { strategy: 'text' as const, value: 'Job title', actionKind: 'text' as const },
    marketingManager: { strategy: 'text' as const, value: 'Marketing Manager', actionKind: 'text' as const },
    phoneNumber: { strategy: 'text' as const, value: 'Phone number', actionKind: 'text' as const },
    element: { strategy: 'text' as const, value: '+1-555-0001', actionKind: 'text' as const },
    timezone: { strategy: 'text' as const, value: 'Timezone', actionKind: 'text' as const },
    americaNewYork: { strategy: 'text' as const, value: 'America/New_York', actionKind: 'text' as const },
    language: { strategy: 'text' as const, value: 'Language', actionKind: 'text' as const },
    englishUs: { strategy: 'text' as const, value: 'English (US)', actionKind: 'text' as const },
    rolePermissions: { strategy: 'text' as const, value: 'Role & permissions', actionKind: 'text' as const },
    yourPortalAccessLevel: { strategy: 'text' as const, value: 'Your portal access level and granted scopes.', actionKind: 'text' as const },
    accessCommunityMyUKGLinks: { strategy: 'text' as const, value: 'Access Community/myUKG links', actionKind: 'text' as const },
    createSupportTickets: { strategy: 'text' as const, value: 'Create support tickets', actionKind: 'text' as const },
    searchSupportHistory: { strategy: 'text' as const, value: 'Search support history', actionKind: 'text' as const },
    searchSupportTickets: { strategy: 'text' as const, value: 'Search support tickets', actionKind: 'text' as const },
    viewAgingCaseSummary: { strategy: 'text' as const, value: 'View aging case summary', actionKind: 'text' as const },
    viewCaseTrends: { strategy: 'text' as const, value: 'View case trends', actionKind: 'text' as const },
    viewSlaBreachAlerts: { strategy: 'text' as const, value: 'View SLA breach alerts', actionKind: 'text' as const },
    viewSlaComplianceCharts: { strategy: 'text' as const, value: 'View SLA compliance charts', actionKind: 'text' as const },
    viewSlaCountdown: { strategy: 'text' as const, value: 'View SLA countdown', actionKind: 'text' as const },
    viewSlaRiskPanel: { strategy: 'text' as const, value: 'View SLA risk panel', actionKind: 'text' as const },
    viewSupportAiInsights: { strategy: 'text' as const, value: 'View support AI insights', actionKind: 'text' as const },
    viewSupportModule: { strategy: 'text' as const, value: 'View support module', actionKind: 'text' as const },
    viewSupportOverview: { strategy: 'text' as const, value: 'View support overview', actionKind: 'text' as const },
    viewSupportSummary: { strategy: 'text' as const, value: 'View support summary', actionKind: 'text' as const },
    viewSupportTicketDetails: { strategy: 'text' as const, value: 'View support ticket details', actionKind: 'text' as const },
    viewSupportTicketHistory: { strategy: 'text' as const, value: 'View support ticket history', actionKind: 'text' as const },
    viewSupportTickets: { strategy: 'text' as const, value: 'View support tickets', actionKind: 'text' as const },
    viewTicketOverviewChart: { strategy: 'text' as const, value: 'View ticket overview chart', actionKind: 'text' as const },
    billingPayments: { strategy: 'role' as const, value: 'Billing & Payments', role: 'button', actionKind: 'button' as const },
    subscriptionsRenewals: { strategy: 'role' as const, value: 'Subscriptions & Renewals', role: 'button', actionKind: 'button' as const },
    customerProfile: { strategy: 'role' as const, value: 'Customer Profile', role: 'button', actionKind: 'button' as const },
    userProfile: { strategy: 'role' as const, value: 'User Profile', role: 'button', actionKind: 'button' as const },
    activeSessions: { strategy: 'text' as const, value: 'Active sessions', actionKind: 'text' as const },
    devicesCurrentlySignedIn: { strategy: 'text' as const, value: 'Devices currently signed in to your account.', actionKind: 'text' as const },
    chrome124MacOS: { strategy: 'role' as const, value: 'Chrome 124 · macOS This device 203.0.113.42', role: 'option', actionKind: 'generic' as const },
    chrome124MacOS2: { strategy: 'text' as const, value: 'Chrome 124 · macOS', actionKind: 'text' as const },
    thisDevice: { strategy: 'text' as const, value: 'This device', actionKind: 'text' as const },
    element2: { strategy: 'text' as const, value: '203.0.113.42', actionKind: 'text' as const },
    safari17IPhone: { strategy: 'role' as const, value: 'Safari 17 · iPhone 203.0.113.42 End', role: 'option', actionKind: 'generic' as const },
    safari17IPhone2: { strategy: 'text' as const, value: 'Safari 17 · iPhone', actionKind: 'text' as const },
    endSessionOnSafari: { strategy: 'role' as const, value: 'End session on Safari 17', role: 'button', actionKind: 'button' as const },
    edge124Windows: { strategy: 'role' as const, value: 'Edge 124 · Windows 203.0.113.42 Yesterday End', role: 'option', actionKind: 'generic' as const },
    edge124Windows2: { strategy: 'text' as const, value: 'Edge 124 · Windows', actionKind: 'text' as const },
    yesterday: { strategy: 'text' as const, value: 'Yesterday', actionKind: 'text' as const },
    endSessionOnEdge: { strategy: 'role' as const, value: 'End session on Edge 124', role: 'button', actionKind: 'button' as const },
    signOutAllOther: { strategy: 'role' as const, value: 'Sign out all other devices', role: 'button', actionKind: 'button' as const },
    activityLog: { strategy: 'text' as const, value: 'Activity log', actionKind: 'text' as const },
    accountActivityLogIn: { strategy: 'text' as const, value: 'Account activity log in your local timezone', actionKind: 'text' as const },
    auditLogWasExported2: { strategy: 'text' as const, value: 'Audit log was exported by Admin', actionKind: 'text' as const },
    chrome: { strategy: 'text' as const, value: 'Chrome', actionKind: 'text' as const },
    anAttemptToInvite: { strategy: 'role' as const, value: 'An attempt to invite user was failed 26 Jun, 11:20', role: 'option', actionKind: 'generic' as const },
    anAttemptToInvite2: { strategy: 'text' as const, value: 'An attempt to invite user was failed', actionKind: 'text' as const },
    anAttemptToInviteOption: { strategy: 'role' as const, value: 'An attempt to invite user was failed 26 Jun, 11:19', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteAnAttemptToInviteUserWas: { strategy: 'role' as const, value: 'An attempt to invite user was failed 26 Jun, 11:18', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption4: { strategy: 'role' as const, value: 'An attempt to invite user was failed 26 Jun, 11:17', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption6: { strategy: 'role' as const, value: 'An attempt to invite user was failed 26 Jun, 11:16', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption8: { strategy: 'role' as const, value: 'An attempt to invite user was failed 26 Jun, 11:15', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption9: { strategy: 'role' as const, value: 'An attempt to invite user was failed 26 Jun, 11:09', role: 'option', actionKind: 'generic' as const },
    aNewUserAccount: { strategy: 'role' as const, value: 'A new user account was created 26 Jun, 09:29', role: 'option', actionKind: 'generic' as const },
    aNewUserAccount2: { strategy: 'text' as const, value: 'A new user account was created', actionKind: 'text' as const },
    aNewUserAccountOption: { strategy: 'role' as const, value: 'A new user account was created 25 Jun, 12:23', role: 'option', actionKind: 'generic' as const },
    aNewUserAccountANewUserAccountWasCreated: { strategy: 'role' as const, value: 'A new user account was created 25 Jun, 12:09', role: 'option', actionKind: 'generic' as const },
    aNewUserAccountOption2: { strategy: 'role' as const, value: 'A new user account was created 25 Jun, 12:03', role: 'option', actionKind: 'generic' as const },
    aNewUserAccountOption4: { strategy: 'role' as const, value: 'A new user account was created 25 Jun, 12:00', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption10: { strategy: 'role' as const, value: 'An attempt to invite user was failed 25 Jun, 11:03', role: 'option', actionKind: 'generic' as const },
    curl: { strategy: 'text' as const, value: 'curl', actionKind: 'text' as const },
    aNewUserAccountOption5: { strategy: 'role' as const, value: 'A new user account was created 25 Jun, 11:02', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption11: { strategy: 'role' as const, value: 'An attempt to invite user was failed 25 Jun, 11:02', role: 'option', actionKind: 'generic' as const },
    aNewUserAccountOption6: { strategy: 'role' as const, value: 'A new user account was created 25 Jun, 10:58', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption12: { strategy: 'role' as const, value: 'An attempt to invite user was failed 25 Jun, 10:58', role: 'option', actionKind: 'generic' as const },
    aUserShubhamraj234GmailComWas2: { strategy: 'text' as const, value: 'A user \'shubhamraj234@gmail.com\' was deactivated', actionKind: 'text' as const },
    anAttemptToInviteOption13: { strategy: 'role' as const, value: 'An attempt to invite user was failed 25 Jun, 06:18', role: 'option', actionKind: 'generic' as const },
    javaHttpClient21011: { strategy: 'text' as const, value: 'Java-http-client/21.0.11', actionKind: 'text' as const },
    anAttemptToInviteOption14: { strategy: 'role' as const, value: 'An attempt to invite user was failed 25 Jun, 05:32', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption16: { strategy: 'role' as const, value: 'An attempt to invite user was failed 25 Jun, 04:46', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption17: { strategy: 'role' as const, value: 'An attempt to invite user was failed 25 Jun, 04:03', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption18: { strategy: 'role' as const, value: 'An attempt to invite user was failed 25 Jun, 04:02', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption20: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 14:46', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption21: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 14:37', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption22: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 14:15', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption23: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:58', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption24: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:47', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption25: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:46', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption26: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:45', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption27: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:35', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption28: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:34', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption30: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:33', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption31: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:32', role: 'option', actionKind: 'generic' as const },
    anAttemptToInviteOption33: { strategy: 'role' as const, value: 'An attempt to invite user was failed 24 Jun, 13:31', role: 'option', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextPersonalInformation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.personalInformation));
  }

  async expectPersonalInformationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.personalInformation), timeoutMs);
  }

  async expectPersonalInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.personalInformation), timeoutMs);
  }

  async expectPersonalInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.personalInformation), expected, timeoutMs);
  }

  async expectPersonalInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.personalInformation), substring, timeoutMs);
  }

  async scrollPersonalInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.personalInformation));
  }

  async getInnerTextYourNameContactDetails(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.yourNameContactDetails));
  }

  async expectYourNameContactDetailsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.yourNameContactDetails), timeoutMs);
  }

  async expectYourNameContactDetailsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.yourNameContactDetails), timeoutMs);
  }

  async expectYourNameContactDetailsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.yourNameContactDetails), expected, timeoutMs);
  }

  async expectYourNameContactDetailsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.yourNameContactDetails), substring, timeoutMs);
  }

  async scrollYourNameContactDetailsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.yourNameContactDetails));
  }

  async getInnerTextDisplayName(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.displayName));
  }

  async expectDisplayNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.displayName), timeoutMs);
  }

  async expectDisplayNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.displayName), timeoutMs);
  }

  async expectDisplayNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.displayName), expected, timeoutMs);
  }

  async expectDisplayNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.displayName), substring, timeoutMs);
  }

  async scrollDisplayNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.displayName));
  }

  async getInnerTextUser1AcmecorporationExampleCom(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom));
  }

  async expectUser1AcmecorporationExampleComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), expected, timeoutMs);
  }

  async expectUser1AcmecorporationExampleComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), substring, timeoutMs);
  }

  async scrollUser1AcmecorporationExampleComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom));
  }

  async getInnerTextJobTitle(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.jobTitle));
  }

  async expectJobTitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.jobTitle), timeoutMs);
  }

  async expectJobTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.jobTitle), timeoutMs);
  }

  async expectJobTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.jobTitle), expected, timeoutMs);
  }

  async expectJobTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.jobTitle), substring, timeoutMs);
  }

  async scrollJobTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.jobTitle));
  }

  async getInnerTextMarketingManager(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.marketingManager));
  }

  async expectMarketingManagerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.marketingManager), timeoutMs);
  }

  async expectMarketingManagerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.marketingManager), timeoutMs);
  }

  async expectMarketingManagerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.marketingManager), expected, timeoutMs);
  }

  async expectMarketingManagerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.marketingManager), substring, timeoutMs);
  }

  async scrollMarketingManagerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.marketingManager));
  }

  async getInnerTextPhoneNumber(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.phoneNumber));
  }

  async expectPhoneNumberVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.phoneNumber), timeoutMs);
  }

  async expectPhoneNumberHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.phoneNumber), timeoutMs);
  }

  async expectPhoneNumberText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.phoneNumber), expected, timeoutMs);
  }

  async expectPhoneNumberContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.phoneNumber), substring, timeoutMs);
  }

  async scrollPhoneNumberIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.phoneNumber));
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.element), timeoutMs);
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.element), substring, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.element));
  }

  async getInnerTextTimezone(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.timezone));
  }

  async expectTimezoneVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.timezone), timeoutMs);
  }

  async expectTimezoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.timezone), timeoutMs);
  }

  async expectTimezoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.timezone), expected, timeoutMs);
  }

  async expectTimezoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.timezone), substring, timeoutMs);
  }

  async scrollTimezoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.timezone));
  }

  async getInnerTextAmericaNewYork(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.americaNewYork));
  }

  async expectAmericaNewYorkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.americaNewYork), timeoutMs);
  }

  async expectAmericaNewYorkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.americaNewYork), timeoutMs);
  }

  async expectAmericaNewYorkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.americaNewYork), expected, timeoutMs);
  }

  async expectAmericaNewYorkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.americaNewYork), substring, timeoutMs);
  }

  async scrollAmericaNewYorkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.americaNewYork));
  }

  async getInnerTextLanguage(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.language));
  }

  async expectLanguageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.language), timeoutMs);
  }

  async expectLanguageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.language), timeoutMs);
  }

  async expectLanguageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.language), expected, timeoutMs);
  }

  async expectLanguageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.language), substring, timeoutMs);
  }

  async scrollLanguageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.language));
  }

  async getInnerTextEnglishUs(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.englishUs));
  }

  async expectEnglishUsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.englishUs), timeoutMs);
  }

  async expectEnglishUsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.englishUs), timeoutMs);
  }

  async expectEnglishUsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.englishUs), expected, timeoutMs);
  }

  async expectEnglishUsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.englishUs), substring, timeoutMs);
  }

  async scrollEnglishUsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.englishUs));
  }

  async getInnerTextRolePermissions(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.rolePermissions));
  }

  async expectRolePermissionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.rolePermissions), timeoutMs);
  }

  async expectRolePermissionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.rolePermissions), timeoutMs);
  }

  async expectRolePermissionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.rolePermissions), expected, timeoutMs);
  }

  async expectRolePermissionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.rolePermissions), substring, timeoutMs);
  }

  async scrollRolePermissionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.rolePermissions));
  }

  async getInnerTextYourPortalAccessLevel(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel));
  }

  async expectYourPortalAccessLevelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), timeoutMs);
  }

  async expectYourPortalAccessLevelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), timeoutMs);
  }

  async expectYourPortalAccessLevelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), expected, timeoutMs);
  }

  async expectYourPortalAccessLevelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), substring, timeoutMs);
  }

  async scrollYourPortalAccessLevelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel));
  }

  async getInnerTextAccessCommunityMyUKGLinks(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks));
  }

  async expectAccessCommunityMyUKGLinksVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), timeoutMs);
  }

  async expectAccessCommunityMyUKGLinksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), timeoutMs);
  }

  async expectAccessCommunityMyUKGLinksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), expected, timeoutMs);
  }

  async expectAccessCommunityMyUKGLinksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), substring, timeoutMs);
  }

  async scrollAccessCommunityMyUKGLinksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks));
  }

  async getInnerTextCreateSupportTickets(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.createSupportTickets));
  }

  async expectCreateSupportTicketsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.createSupportTickets), timeoutMs);
  }

  async expectCreateSupportTicketsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.createSupportTickets), timeoutMs);
  }

  async expectCreateSupportTicketsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.createSupportTickets), expected, timeoutMs);
  }

  async expectCreateSupportTicketsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.createSupportTickets), substring, timeoutMs);
  }

  async scrollCreateSupportTicketsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.createSupportTickets));
  }

  async getInnerTextSearchSupportHistory(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportHistory));
  }

  async expectSearchSupportHistoryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.searchSupportHistory), timeoutMs);
  }

  async expectSearchSupportHistoryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.searchSupportHistory), timeoutMs);
  }

  async expectSearchSupportHistoryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.searchSupportHistory), expected, timeoutMs);
  }

  async expectSearchSupportHistoryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.searchSupportHistory), substring, timeoutMs);
  }

  async scrollSearchSupportHistoryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportHistory));
  }

  async getInnerTextSearchSupportTickets(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportTickets));
  }

  async expectSearchSupportTicketsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.searchSupportTickets), timeoutMs);
  }

  async expectSearchSupportTicketsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.searchSupportTickets), timeoutMs);
  }

  async expectSearchSupportTicketsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.searchSupportTickets), expected, timeoutMs);
  }

  async expectSearchSupportTicketsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.searchSupportTickets), substring, timeoutMs);
  }

  async scrollSearchSupportTicketsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportTickets));
  }

  async getInnerTextViewAgingCaseSummary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary));
  }

  async expectViewAgingCaseSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), timeoutMs);
  }

  async expectViewAgingCaseSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), timeoutMs);
  }

  async expectViewAgingCaseSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), expected, timeoutMs);
  }

  async expectViewAgingCaseSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), substring, timeoutMs);
  }

  async scrollViewAgingCaseSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary));
  }

  async getInnerTextViewCaseTrends(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewCaseTrends));
  }

  async expectViewCaseTrendsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewCaseTrends), timeoutMs);
  }

  async expectViewCaseTrendsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewCaseTrends), timeoutMs);
  }

  async expectViewCaseTrendsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewCaseTrends), expected, timeoutMs);
  }

  async expectViewCaseTrendsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewCaseTrends), substring, timeoutMs);
  }

  async scrollViewCaseTrendsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewCaseTrends));
  }

  async getInnerTextViewSlaBreachAlerts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaBreachAlerts));
  }

  async expectViewSlaBreachAlertsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSlaBreachAlerts), timeoutMs);
  }

  async expectViewSlaBreachAlertsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSlaBreachAlerts), timeoutMs);
  }

  async expectViewSlaBreachAlertsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSlaBreachAlerts), expected, timeoutMs);
  }

  async expectViewSlaBreachAlertsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSlaBreachAlerts), substring, timeoutMs);
  }

  async scrollViewSlaBreachAlertsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaBreachAlerts));
  }

  async getInnerTextViewSlaComplianceCharts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaComplianceCharts));
  }

  async expectViewSlaComplianceChartsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSlaComplianceCharts), timeoutMs);
  }

  async expectViewSlaComplianceChartsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSlaComplianceCharts), timeoutMs);
  }

  async expectViewSlaComplianceChartsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSlaComplianceCharts), expected, timeoutMs);
  }

  async expectViewSlaComplianceChartsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSlaComplianceCharts), substring, timeoutMs);
  }

  async scrollViewSlaComplianceChartsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaComplianceCharts));
  }

  async getInnerTextViewSlaCountdown(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaCountdown));
  }

  async expectViewSlaCountdownVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSlaCountdown), timeoutMs);
  }

  async expectViewSlaCountdownHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSlaCountdown), timeoutMs);
  }

  async expectViewSlaCountdownText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSlaCountdown), expected, timeoutMs);
  }

  async expectViewSlaCountdownContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSlaCountdown), substring, timeoutMs);
  }

  async scrollViewSlaCountdownIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaCountdown));
  }

  async getInnerTextViewSlaRiskPanel(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaRiskPanel));
  }

  async expectViewSlaRiskPanelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSlaRiskPanel), timeoutMs);
  }

  async expectViewSlaRiskPanelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSlaRiskPanel), timeoutMs);
  }

  async expectViewSlaRiskPanelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSlaRiskPanel), expected, timeoutMs);
  }

  async expectViewSlaRiskPanelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSlaRiskPanel), substring, timeoutMs);
  }

  async scrollViewSlaRiskPanelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaRiskPanel));
  }

  async getInnerTextViewSupportAiInsights(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportAiInsights));
  }

  async expectViewSupportAiInsightsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSupportAiInsights), timeoutMs);
  }

  async expectViewSupportAiInsightsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSupportAiInsights), timeoutMs);
  }

  async expectViewSupportAiInsightsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSupportAiInsights), expected, timeoutMs);
  }

  async expectViewSupportAiInsightsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSupportAiInsights), substring, timeoutMs);
  }

  async scrollViewSupportAiInsightsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportAiInsights));
  }

  async getInnerTextViewSupportModule(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportModule));
  }

  async expectViewSupportModuleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSupportModule), timeoutMs);
  }

  async expectViewSupportModuleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSupportModule), timeoutMs);
  }

  async expectViewSupportModuleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSupportModule), expected, timeoutMs);
  }

  async expectViewSupportModuleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSupportModule), substring, timeoutMs);
  }

  async scrollViewSupportModuleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportModule));
  }

  async getInnerTextViewSupportOverview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportOverview));
  }

  async expectViewSupportOverviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSupportOverview), timeoutMs);
  }

  async expectViewSupportOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSupportOverview), timeoutMs);
  }

  async expectViewSupportOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSupportOverview), expected, timeoutMs);
  }

  async expectViewSupportOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSupportOverview), substring, timeoutMs);
  }

  async scrollViewSupportOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportOverview));
  }

  async getInnerTextViewSupportSummary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportSummary));
  }

  async expectViewSupportSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSupportSummary), timeoutMs);
  }

  async expectViewSupportSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSupportSummary), timeoutMs);
  }

  async expectViewSupportSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSupportSummary), expected, timeoutMs);
  }

  async expectViewSupportSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSupportSummary), substring, timeoutMs);
  }

  async scrollViewSupportSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportSummary));
  }

  async getInnerTextViewSupportTicketDetails(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails));
  }

  async expectViewSupportTicketDetailsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), timeoutMs);
  }

  async expectViewSupportTicketDetailsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), timeoutMs);
  }

  async expectViewSupportTicketDetailsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), expected, timeoutMs);
  }

  async expectViewSupportTicketDetailsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), substring, timeoutMs);
  }

  async scrollViewSupportTicketDetailsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails));
  }

  async getInnerTextViewSupportTicketHistory(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory));
  }

  async expectViewSupportTicketHistoryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), timeoutMs);
  }

  async expectViewSupportTicketHistoryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), timeoutMs);
  }

  async expectViewSupportTicketHistoryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), expected, timeoutMs);
  }

  async expectViewSupportTicketHistoryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), substring, timeoutMs);
  }

  async scrollViewSupportTicketHistoryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory));
  }

  async getInnerTextViewSupportTickets(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTickets));
  }

  async expectViewSupportTicketsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewSupportTickets), timeoutMs);
  }

  async expectViewSupportTicketsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewSupportTickets), timeoutMs);
  }

  async expectViewSupportTicketsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewSupportTickets), expected, timeoutMs);
  }

  async expectViewSupportTicketsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewSupportTickets), substring, timeoutMs);
  }

  async scrollViewSupportTicketsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTickets));
  }

  async getInnerTextViewTicketOverviewChart(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart));
  }

  async expectViewTicketOverviewChartVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), timeoutMs);
  }

  async expectViewTicketOverviewChartHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), timeoutMs);
  }

  async expectViewTicketOverviewChartText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), expected, timeoutMs);
  }

  async expectViewTicketOverviewChartContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), substring, timeoutMs);
  }

  async scrollViewTicketOverviewChartIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart));
  }

  async clickBillingPayments(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.billingPayments));
  }

  async doubleClickBillingPayments(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.billingPayments));
  }

  async expectBillingPaymentsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.billingPayments), timeoutMs);
  }

  async expectBillingPaymentsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.billingPayments), timeoutMs);
  }

  async expectBillingPaymentsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.billingPayments), timeoutMs);
  }

  async expectBillingPaymentsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.billingPayments), timeoutMs);
  }

  async expectBillingPaymentsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.billingPayments), expected, timeoutMs);
  }

  async expectBillingPaymentsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.billingPayments), substring, timeoutMs);
  }

  async scrollBillingPaymentsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.billingPayments));
  }

  async clickSubscriptionsRenewals(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.subscriptionsRenewals));
  }

  async doubleClickSubscriptionsRenewals(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.subscriptionsRenewals));
  }

  async expectSubscriptionsRenewalsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), timeoutMs);
  }

  async expectSubscriptionsRenewalsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), timeoutMs);
  }

  async expectSubscriptionsRenewalsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), timeoutMs);
  }

  async expectSubscriptionsRenewalsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), timeoutMs);
  }

  async expectSubscriptionsRenewalsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), expected, timeoutMs);
  }

  async expectSubscriptionsRenewalsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), substring, timeoutMs);
  }

  async scrollSubscriptionsRenewalsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.subscriptionsRenewals));
  }

  async clickCustomerProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.customerProfile));
  }

  async doubleClickCustomerProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.customerProfile));
  }

  async expectCustomerProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.customerProfile), timeoutMs);
  }

  async expectCustomerProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.customerProfile), timeoutMs);
  }

  async expectCustomerProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.customerProfile), timeoutMs);
  }

  async expectCustomerProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.customerProfile), timeoutMs);
  }

  async expectCustomerProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.customerProfile), expected, timeoutMs);
  }

  async expectCustomerProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.customerProfile), substring, timeoutMs);
  }

  async scrollCustomerProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.customerProfile));
  }

  async clickUserProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.userProfile));
  }

  async doubleClickUserProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.userProfile));
  }

  async expectUserProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.userProfile), timeoutMs);
  }

  async expectUserProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.userProfile), timeoutMs);
  }

  async expectUserProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.userProfile), timeoutMs);
  }

  async expectUserProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.userProfile), timeoutMs);
  }

  async expectUserProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.userProfile), expected, timeoutMs);
  }

  async expectUserProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.userProfile), substring, timeoutMs);
  }

  async scrollUserProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.userProfile));
  }

  async getInnerTextActiveSessions(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.activeSessions));
  }

  async expectActiveSessionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.activeSessions), timeoutMs);
  }

  async expectActiveSessionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.activeSessions), timeoutMs);
  }

  async expectActiveSessionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.activeSessions), expected, timeoutMs);
  }

  async expectActiveSessionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.activeSessions), substring, timeoutMs);
  }

  async scrollActiveSessionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.activeSessions));
  }

  async getInnerTextDevicesCurrentlySignedIn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn));
  }

  async expectDevicesCurrentlySignedInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), timeoutMs);
  }

  async expectDevicesCurrentlySignedInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), timeoutMs);
  }

  async expectDevicesCurrentlySignedInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), expected, timeoutMs);
  }

  async expectDevicesCurrentlySignedInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), substring, timeoutMs);
  }

  async scrollDevicesCurrentlySignedInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn));
  }

  async clickChrome124MacOS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome124MacOS));
  }

  async doubleClickChrome124MacOS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome124MacOS));
  }

  async expectChrome124MacOSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome124MacOS), timeoutMs);
  }

  async expectChrome124MacOSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome124MacOS), timeoutMs);
  }

  async expectChrome124MacOSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome124MacOS), timeoutMs);
  }

  async expectChrome124MacOSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome124MacOS), timeoutMs);
  }

  async expectChrome124MacOSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome124MacOS), expected, timeoutMs);
  }

  async expectChrome124MacOSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome124MacOS), substring, timeoutMs);
  }

  async scrollChrome124MacOSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome124MacOS));
  }

  async getInnerTextChrome124MacOS2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome124MacOS2));
  }

  async expectChrome124MacOS2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome124MacOS2), timeoutMs);
  }

  async expectChrome124MacOS2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome124MacOS2), timeoutMs);
  }

  async expectChrome124MacOS2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome124MacOS2), expected, timeoutMs);
  }

  async expectChrome124MacOS2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome124MacOS2), substring, timeoutMs);
  }

  async scrollChrome124MacOS2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome124MacOS2));
  }

  async getInnerTextThisDevice(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.thisDevice));
  }

  async expectThisDeviceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.thisDevice), timeoutMs);
  }

  async expectThisDeviceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.thisDevice), timeoutMs);
  }

  async expectThisDeviceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.thisDevice), expected, timeoutMs);
  }

  async expectThisDeviceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.thisDevice), substring, timeoutMs);
  }

  async scrollThisDeviceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.thisDevice));
  }

  async getInnerTextElement2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.element2));
  }

  async expectElement2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.element2), timeoutMs);
  }

  async expectElement2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.element2), timeoutMs);
  }

  async expectElement2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.element2), expected, timeoutMs);
  }

  async expectElement2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.element2), substring, timeoutMs);
  }

  async scrollElement2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.element2));
  }

  async clickSafari17IPhone(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.safari17IPhone));
  }

  async doubleClickSafari17IPhone(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.safari17IPhone));
  }

  async expectSafari17IPhoneVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.safari17IPhone), timeoutMs);
  }

  async expectSafari17IPhoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.safari17IPhone), timeoutMs);
  }

  async expectSafari17IPhoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.safari17IPhone), timeoutMs);
  }

  async expectSafari17IPhoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.safari17IPhone), timeoutMs);
  }

  async expectSafari17IPhoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.safari17IPhone), expected, timeoutMs);
  }

  async expectSafari17IPhoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.safari17IPhone), substring, timeoutMs);
  }

  async scrollSafari17IPhoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.safari17IPhone));
  }

  async getInnerTextSafari17IPhone2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.safari17IPhone2));
  }

  async expectSafari17IPhone2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.safari17IPhone2), timeoutMs);
  }

  async expectSafari17IPhone2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.safari17IPhone2), timeoutMs);
  }

  async expectSafari17IPhone2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.safari17IPhone2), expected, timeoutMs);
  }

  async expectSafari17IPhone2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.safari17IPhone2), substring, timeoutMs);
  }

  async scrollSafari17IPhone2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.safari17IPhone2));
  }

  async clickEndSessionOnSafari(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.endSessionOnSafari));
  }

  async doubleClickEndSessionOnSafari(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.endSessionOnSafari));
  }

  async expectEndSessionOnSafariVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.endSessionOnSafari), timeoutMs);
  }

  async expectEndSessionOnSafariHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.endSessionOnSafari), timeoutMs);
  }

  async expectEndSessionOnSafariEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.endSessionOnSafari), timeoutMs);
  }

  async expectEndSessionOnSafariDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.endSessionOnSafari), timeoutMs);
  }

  async expectEndSessionOnSafariText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.endSessionOnSafari), expected, timeoutMs);
  }

  async expectEndSessionOnSafariContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.endSessionOnSafari), substring, timeoutMs);
  }

  async scrollEndSessionOnSafariIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.endSessionOnSafari));
  }

  async clickEdge124Windows(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.edge124Windows));
  }

  async doubleClickEdge124Windows(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.edge124Windows));
  }

  async expectEdge124WindowsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.edge124Windows), timeoutMs);
  }

  async expectEdge124WindowsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.edge124Windows), timeoutMs);
  }

  async expectEdge124WindowsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.edge124Windows), timeoutMs);
  }

  async expectEdge124WindowsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.edge124Windows), timeoutMs);
  }

  async expectEdge124WindowsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.edge124Windows), expected, timeoutMs);
  }

  async expectEdge124WindowsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.edge124Windows), substring, timeoutMs);
  }

  async scrollEdge124WindowsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.edge124Windows));
  }

  async getInnerTextEdge124Windows2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.edge124Windows2));
  }

  async expectEdge124Windows2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.edge124Windows2), timeoutMs);
  }

  async expectEdge124Windows2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.edge124Windows2), timeoutMs);
  }

  async expectEdge124Windows2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.edge124Windows2), expected, timeoutMs);
  }

  async expectEdge124Windows2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.edge124Windows2), substring, timeoutMs);
  }

  async scrollEdge124Windows2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.edge124Windows2));
  }

  async getInnerTextYesterday(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.yesterday));
  }

  async expectYesterdayVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.yesterday), timeoutMs);
  }

  async expectYesterdayHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.yesterday), timeoutMs);
  }

  async expectYesterdayText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.yesterday), expected, timeoutMs);
  }

  async expectYesterdayContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.yesterday), substring, timeoutMs);
  }

  async scrollYesterdayIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.yesterday));
  }

  async clickEndSessionOnEdge(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.endSessionOnEdge));
  }

  async doubleClickEndSessionOnEdge(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.endSessionOnEdge));
  }

  async expectEndSessionOnEdgeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.endSessionOnEdge), timeoutMs);
  }

  async expectEndSessionOnEdgeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.endSessionOnEdge), timeoutMs);
  }

  async expectEndSessionOnEdgeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.endSessionOnEdge), timeoutMs);
  }

  async expectEndSessionOnEdgeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.endSessionOnEdge), timeoutMs);
  }

  async expectEndSessionOnEdgeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.endSessionOnEdge), expected, timeoutMs);
  }

  async expectEndSessionOnEdgeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.endSessionOnEdge), substring, timeoutMs);
  }

  async scrollEndSessionOnEdgeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.endSessionOnEdge));
  }

  async clickSignOutAllOther(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.signOutAllOther));
  }

  async doubleClickSignOutAllOther(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.signOutAllOther));
  }

  async expectSignOutAllOtherVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.signOutAllOther), timeoutMs);
  }

  async expectSignOutAllOtherHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.signOutAllOther), timeoutMs);
  }

  async expectSignOutAllOtherEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.signOutAllOther), timeoutMs);
  }

  async expectSignOutAllOtherDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.signOutAllOther), timeoutMs);
  }

  async expectSignOutAllOtherText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.signOutAllOther), expected, timeoutMs);
  }

  async expectSignOutAllOtherContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.signOutAllOther), substring, timeoutMs);
  }

  async scrollSignOutAllOtherIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.signOutAllOther));
  }

  async getInnerTextActivityLog(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.activityLog));
  }

  async expectActivityLogVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.activityLog), timeoutMs);
  }

  async expectActivityLogHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.activityLog), timeoutMs);
  }

  async expectActivityLogText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.activityLog), expected, timeoutMs);
  }

  async expectActivityLogContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.activityLog), substring, timeoutMs);
  }

  async scrollActivityLogIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.activityLog));
  }

  async getInnerTextAccountActivityLogIn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.accountActivityLogIn));
  }

  async expectAccountActivityLogInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.accountActivityLogIn), timeoutMs);
  }

  async expectAccountActivityLogInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.accountActivityLogIn), timeoutMs);
  }

  async expectAccountActivityLogInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.accountActivityLogIn), expected, timeoutMs);
  }

  async expectAccountActivityLogInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.accountActivityLogIn), substring, timeoutMs);
  }

  async scrollAccountActivityLogInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.accountActivityLogIn));
  }

  async getInnerTextAuditLogWasExported2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported2));
  }

  async expectAuditLogWasExported2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported2), timeoutMs);
  }

  async expectAuditLogWasExported2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.auditLogWasExported2), timeoutMs);
  }

  async expectAuditLogWasExported2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.auditLogWasExported2), expected, timeoutMs);
  }

  async expectAuditLogWasExported2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.auditLogWasExported2), substring, timeoutMs);
  }

  async scrollAuditLogWasExported2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported2));
  }

  async getInnerTextChrome(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.chrome));
  }

  async expectChromeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.chrome), timeoutMs);
  }

  async expectChromeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.chrome), timeoutMs);
  }

  async expectChromeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.chrome), expected, timeoutMs);
  }

  async expectChromeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.chrome), substring, timeoutMs);
  }

  async scrollChromeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.chrome));
  }

  async clickAnAttemptToInvite(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite));
  }

  async doubleClickAnAttemptToInvite(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite));
  }

  async expectAnAttemptToInviteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite), timeoutMs);
  }

  async expectAnAttemptToInviteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite), timeoutMs);
  }

  async expectAnAttemptToInviteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite), timeoutMs);
  }

  async expectAnAttemptToInviteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite), timeoutMs);
  }

  async expectAnAttemptToInviteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite), expected, timeoutMs);
  }

  async expectAnAttemptToInviteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite));
  }

  async getInnerTextAnAttemptToInvite2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite2));
  }

  async expectAnAttemptToInvite2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), timeoutMs);
  }

  async expectAnAttemptToInvite2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), timeoutMs);
  }

  async expectAnAttemptToInvite2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), expected, timeoutMs);
  }

  async expectAnAttemptToInvite2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), substring, timeoutMs);
  }

  async scrollAnAttemptToInvite2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite2));
  }

  async clickAnAttemptToInviteOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption));
  }

  async doubleClickAnAttemptToInviteOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption));
  }

  async expectAnAttemptToInviteOptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), timeoutMs);
  }

  async expectAnAttemptToInviteOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), timeoutMs);
  }

  async expectAnAttemptToInviteOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), timeoutMs);
  }

  async expectAnAttemptToInviteOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), timeoutMs);
  }

  async expectAnAttemptToInviteOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption));
  }

  async clickAnAttemptToInviteAnAttemptToInviteUserWas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas));
  }

  async doubleClickAnAttemptToInviteAnAttemptToInviteUserWas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas));
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), timeoutMs);
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), timeoutMs);
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), timeoutMs);
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), timeoutMs);
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), expected, timeoutMs);
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteAnAttemptToInviteUserWasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas));
  }

  async clickAnAttemptToInviteOption4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4));
  }

  async doubleClickAnAttemptToInviteOption4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4));
  }

  async expectAnAttemptToInviteOption4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), timeoutMs);
  }

  async expectAnAttemptToInviteOption4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), timeoutMs);
  }

  async expectAnAttemptToInviteOption4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), timeoutMs);
  }

  async expectAnAttemptToInviteOption4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), timeoutMs);
  }

  async expectAnAttemptToInviteOption4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4));
  }

  async clickAnAttemptToInviteOption6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6));
  }

  async doubleClickAnAttemptToInviteOption6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6));
  }

  async expectAnAttemptToInviteOption6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), timeoutMs);
  }

  async expectAnAttemptToInviteOption6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), timeoutMs);
  }

  async expectAnAttemptToInviteOption6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), timeoutMs);
  }

  async expectAnAttemptToInviteOption6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), timeoutMs);
  }

  async expectAnAttemptToInviteOption6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6));
  }

  async clickAnAttemptToInviteOption8(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8));
  }

  async doubleClickAnAttemptToInviteOption8(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8));
  }

  async expectAnAttemptToInviteOption8Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), timeoutMs);
  }

  async expectAnAttemptToInviteOption8Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), timeoutMs);
  }

  async expectAnAttemptToInviteOption8Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), timeoutMs);
  }

  async expectAnAttemptToInviteOption8Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), timeoutMs);
  }

  async expectAnAttemptToInviteOption8Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption8ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption8IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8));
  }

  async clickAnAttemptToInviteOption9(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9));
  }

  async doubleClickAnAttemptToInviteOption9(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9));
  }

  async expectAnAttemptToInviteOption9Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), timeoutMs);
  }

  async expectAnAttemptToInviteOption9Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), timeoutMs);
  }

  async expectAnAttemptToInviteOption9Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), timeoutMs);
  }

  async expectAnAttemptToInviteOption9Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), timeoutMs);
  }

  async expectAnAttemptToInviteOption9Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption9ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption9IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9));
  }

  async clickANewUserAccount(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount));
  }

  async doubleClickANewUserAccount(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount));
  }

  async expectANewUserAccountVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount), timeoutMs);
  }

  async expectANewUserAccountHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccount), timeoutMs);
  }

  async expectANewUserAccountEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccount), timeoutMs);
  }

  async expectANewUserAccountDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccount), timeoutMs);
  }

  async expectANewUserAccountText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccount), expected, timeoutMs);
  }

  async expectANewUserAccountContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccount), substring, timeoutMs);
  }

  async scrollANewUserAccountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount));
  }

  async getInnerTextANewUserAccount2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount2));
  }

  async expectANewUserAccount2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount2), timeoutMs);
  }

  async expectANewUserAccount2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccount2), timeoutMs);
  }

  async expectANewUserAccount2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccount2), expected, timeoutMs);
  }

  async expectANewUserAccount2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccount2), substring, timeoutMs);
  }

  async scrollANewUserAccount2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount2));
  }

  async clickANewUserAccountOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption));
  }

  async doubleClickANewUserAccountOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption));
  }

  async expectANewUserAccountOptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), timeoutMs);
  }

  async expectANewUserAccountOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), timeoutMs);
  }

  async expectANewUserAccountOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), timeoutMs);
  }

  async expectANewUserAccountOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), timeoutMs);
  }

  async expectANewUserAccountOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), expected, timeoutMs);
  }

  async expectANewUserAccountOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), substring, timeoutMs);
  }

  async scrollANewUserAccountOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption));
  }

  async clickANewUserAccountANewUserAccountWasCreated(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated));
  }

  async doubleClickANewUserAccountANewUserAccountWasCreated(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated));
  }

  async expectANewUserAccountANewUserAccountWasCreatedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), timeoutMs);
  }

  async expectANewUserAccountANewUserAccountWasCreatedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), timeoutMs);
  }

  async expectANewUserAccountANewUserAccountWasCreatedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), timeoutMs);
  }

  async expectANewUserAccountANewUserAccountWasCreatedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), timeoutMs);
  }

  async expectANewUserAccountANewUserAccountWasCreatedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), expected, timeoutMs);
  }

  async expectANewUserAccountANewUserAccountWasCreatedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), substring, timeoutMs);
  }

  async scrollANewUserAccountANewUserAccountWasCreatedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated));
  }

  async clickANewUserAccountOption2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2));
  }

  async doubleClickANewUserAccountOption2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2));
  }

  async expectANewUserAccountOption2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), timeoutMs);
  }

  async expectANewUserAccountOption2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), timeoutMs);
  }

  async expectANewUserAccountOption2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), timeoutMs);
  }

  async expectANewUserAccountOption2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), timeoutMs);
  }

  async expectANewUserAccountOption2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), expected, timeoutMs);
  }

  async expectANewUserAccountOption2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), substring, timeoutMs);
  }

  async scrollANewUserAccountOption2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2));
  }

  async clickANewUserAccountOption4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4));
  }

  async doubleClickANewUserAccountOption4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4));
  }

  async expectANewUserAccountOption4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), timeoutMs);
  }

  async expectANewUserAccountOption4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), timeoutMs);
  }

  async expectANewUserAccountOption4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), timeoutMs);
  }

  async expectANewUserAccountOption4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), timeoutMs);
  }

  async expectANewUserAccountOption4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), expected, timeoutMs);
  }

  async expectANewUserAccountOption4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), substring, timeoutMs);
  }

  async scrollANewUserAccountOption4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4));
  }

  async clickAnAttemptToInviteOption10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10));
  }

  async doubleClickAnAttemptToInviteOption10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10));
  }

  async expectAnAttemptToInviteOption10Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), timeoutMs);
  }

  async expectAnAttemptToInviteOption10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), timeoutMs);
  }

  async expectAnAttemptToInviteOption10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), timeoutMs);
  }

  async expectAnAttemptToInviteOption10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), timeoutMs);
  }

  async expectAnAttemptToInviteOption10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10));
  }

  async getInnerTextCurl(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.curl));
  }

  async expectCurlVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.curl), timeoutMs);
  }

  async expectCurlHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.curl), timeoutMs);
  }

  async expectCurlText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.curl), expected, timeoutMs);
  }

  async expectCurlContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.curl), substring, timeoutMs);
  }

  async scrollCurlIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.curl));
  }

  async clickANewUserAccountOption5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5));
  }

  async doubleClickANewUserAccountOption5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5));
  }

  async expectANewUserAccountOption5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), timeoutMs);
  }

  async expectANewUserAccountOption5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), timeoutMs);
  }

  async expectANewUserAccountOption5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), timeoutMs);
  }

  async expectANewUserAccountOption5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), timeoutMs);
  }

  async expectANewUserAccountOption5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), expected, timeoutMs);
  }

  async expectANewUserAccountOption5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), substring, timeoutMs);
  }

  async scrollANewUserAccountOption5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5));
  }

  async clickAnAttemptToInviteOption11(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11));
  }

  async doubleClickAnAttemptToInviteOption11(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11));
  }

  async expectAnAttemptToInviteOption11Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), timeoutMs);
  }

  async expectAnAttemptToInviteOption11Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), timeoutMs);
  }

  async expectAnAttemptToInviteOption11Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), timeoutMs);
  }

  async expectAnAttemptToInviteOption11Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), timeoutMs);
  }

  async expectAnAttemptToInviteOption11Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption11ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption11IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11));
  }

  async clickANewUserAccountOption6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6));
  }

  async doubleClickANewUserAccountOption6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6));
  }

  async expectANewUserAccountOption6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), timeoutMs);
  }

  async expectANewUserAccountOption6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), timeoutMs);
  }

  async expectANewUserAccountOption6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), timeoutMs);
  }

  async expectANewUserAccountOption6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), timeoutMs);
  }

  async expectANewUserAccountOption6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), expected, timeoutMs);
  }

  async expectANewUserAccountOption6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), substring, timeoutMs);
  }

  async scrollANewUserAccountOption6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6));
  }

  async clickAnAttemptToInviteOption12(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12));
  }

  async doubleClickAnAttemptToInviteOption12(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12));
  }

  async expectAnAttemptToInviteOption12Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), timeoutMs);
  }

  async expectAnAttemptToInviteOption12Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), timeoutMs);
  }

  async expectAnAttemptToInviteOption12Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), timeoutMs);
  }

  async expectAnAttemptToInviteOption12Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), timeoutMs);
  }

  async expectAnAttemptToInviteOption12Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption12ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption12IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12));
  }

  async getInnerTextAUserShubhamraj234GmailComWas2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas2));
  }

  async expectAUserShubhamraj234GmailComWas2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas2), timeoutMs);
  }

  async expectAUserShubhamraj234GmailComWas2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas2), timeoutMs);
  }

  async expectAUserShubhamraj234GmailComWas2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas2), expected, timeoutMs);
  }

  async expectAUserShubhamraj234GmailComWas2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas2), substring, timeoutMs);
  }

  async scrollAUserShubhamraj234GmailComWas2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas2));
  }

  async clickAnAttemptToInviteOption13(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13));
  }

  async doubleClickAnAttemptToInviteOption13(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13));
  }

  async expectAnAttemptToInviteOption13Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), timeoutMs);
  }

  async expectAnAttemptToInviteOption13Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), timeoutMs);
  }

  async expectAnAttemptToInviteOption13Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), timeoutMs);
  }

  async expectAnAttemptToInviteOption13Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), timeoutMs);
  }

  async expectAnAttemptToInviteOption13Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption13ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption13IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13));
  }

  async getInnerTextJavaHttpClient21011(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient21011));
  }

  async expectJavaHttpClient21011Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.javaHttpClient21011), timeoutMs);
  }

  async expectJavaHttpClient21011Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.javaHttpClient21011), timeoutMs);
  }

  async expectJavaHttpClient21011Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.javaHttpClient21011), expected, timeoutMs);
  }

  async expectJavaHttpClient21011ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.javaHttpClient21011), substring, timeoutMs);
  }

  async scrollJavaHttpClient21011IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient21011));
  }

  async clickAnAttemptToInviteOption14(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14));
  }

  async doubleClickAnAttemptToInviteOption14(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14));
  }

  async expectAnAttemptToInviteOption14Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), timeoutMs);
  }

  async expectAnAttemptToInviteOption14Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), timeoutMs);
  }

  async expectAnAttemptToInviteOption14Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), timeoutMs);
  }

  async expectAnAttemptToInviteOption14Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), timeoutMs);
  }

  async expectAnAttemptToInviteOption14Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption14ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption14IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14));
  }

  async clickAnAttemptToInviteOption16(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16));
  }

  async doubleClickAnAttemptToInviteOption16(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16));
  }

  async expectAnAttemptToInviteOption16Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), timeoutMs);
  }

  async expectAnAttemptToInviteOption16Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), timeoutMs);
  }

  async expectAnAttemptToInviteOption16Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), timeoutMs);
  }

  async expectAnAttemptToInviteOption16Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), timeoutMs);
  }

  async expectAnAttemptToInviteOption16Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption16ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption16IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16));
  }

  async clickAnAttemptToInviteOption17(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17));
  }

  async doubleClickAnAttemptToInviteOption17(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17));
  }

  async expectAnAttemptToInviteOption17Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), timeoutMs);
  }

  async expectAnAttemptToInviteOption17Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), timeoutMs);
  }

  async expectAnAttemptToInviteOption17Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), timeoutMs);
  }

  async expectAnAttemptToInviteOption17Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), timeoutMs);
  }

  async expectAnAttemptToInviteOption17Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption17ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption17IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17));
  }

  async clickAnAttemptToInviteOption18(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18));
  }

  async doubleClickAnAttemptToInviteOption18(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18));
  }

  async expectAnAttemptToInviteOption18Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), timeoutMs);
  }

  async expectAnAttemptToInviteOption18Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), timeoutMs);
  }

  async expectAnAttemptToInviteOption18Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), timeoutMs);
  }

  async expectAnAttemptToInviteOption18Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), timeoutMs);
  }

  async expectAnAttemptToInviteOption18Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption18ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption18IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18));
  }

  async clickAnAttemptToInviteOption20(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20));
  }

  async doubleClickAnAttemptToInviteOption20(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20));
  }

  async expectAnAttemptToInviteOption20Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), timeoutMs);
  }

  async expectAnAttemptToInviteOption20Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), timeoutMs);
  }

  async expectAnAttemptToInviteOption20Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), timeoutMs);
  }

  async expectAnAttemptToInviteOption20Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), timeoutMs);
  }

  async expectAnAttemptToInviteOption20Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption20ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption20IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20));
  }

  async clickAnAttemptToInviteOption21(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21));
  }

  async doubleClickAnAttemptToInviteOption21(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21));
  }

  async expectAnAttemptToInviteOption21Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), timeoutMs);
  }

  async expectAnAttemptToInviteOption21Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), timeoutMs);
  }

  async expectAnAttemptToInviteOption21Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), timeoutMs);
  }

  async expectAnAttemptToInviteOption21Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), timeoutMs);
  }

  async expectAnAttemptToInviteOption21Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption21ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption21IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21));
  }

  async clickAnAttemptToInviteOption22(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22));
  }

  async doubleClickAnAttemptToInviteOption22(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22));
  }

  async expectAnAttemptToInviteOption22Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), timeoutMs);
  }

  async expectAnAttemptToInviteOption22Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), timeoutMs);
  }

  async expectAnAttemptToInviteOption22Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), timeoutMs);
  }

  async expectAnAttemptToInviteOption22Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), timeoutMs);
  }

  async expectAnAttemptToInviteOption22Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption22ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption22IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22));
  }

  async clickAnAttemptToInviteOption23(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23));
  }

  async doubleClickAnAttemptToInviteOption23(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23));
  }

  async expectAnAttemptToInviteOption23Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), timeoutMs);
  }

  async expectAnAttemptToInviteOption23Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), timeoutMs);
  }

  async expectAnAttemptToInviteOption23Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), timeoutMs);
  }

  async expectAnAttemptToInviteOption23Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), timeoutMs);
  }

  async expectAnAttemptToInviteOption23Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption23ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption23IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23));
  }

  async clickAnAttemptToInviteOption24(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24));
  }

  async doubleClickAnAttemptToInviteOption24(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24));
  }

  async expectAnAttemptToInviteOption24Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), timeoutMs);
  }

  async expectAnAttemptToInviteOption24Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), timeoutMs);
  }

  async expectAnAttemptToInviteOption24Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), timeoutMs);
  }

  async expectAnAttemptToInviteOption24Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), timeoutMs);
  }

  async expectAnAttemptToInviteOption24Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption24ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption24IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24));
  }

  async clickAnAttemptToInviteOption25(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25));
  }

  async doubleClickAnAttemptToInviteOption25(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25));
  }

  async expectAnAttemptToInviteOption25Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), timeoutMs);
  }

  async expectAnAttemptToInviteOption25Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), timeoutMs);
  }

  async expectAnAttemptToInviteOption25Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), timeoutMs);
  }

  async expectAnAttemptToInviteOption25Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), timeoutMs);
  }

  async expectAnAttemptToInviteOption25Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption25ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption25IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25));
  }

  async clickAnAttemptToInviteOption26(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26));
  }

  async doubleClickAnAttemptToInviteOption26(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26));
  }

  async expectAnAttemptToInviteOption26Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), timeoutMs);
  }

  async expectAnAttemptToInviteOption26Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), timeoutMs);
  }

  async expectAnAttemptToInviteOption26Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), timeoutMs);
  }

  async expectAnAttemptToInviteOption26Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), timeoutMs);
  }

  async expectAnAttemptToInviteOption26Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption26ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption26IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26));
  }

  async clickAnAttemptToInviteOption27(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27));
  }

  async doubleClickAnAttemptToInviteOption27(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27));
  }

  async expectAnAttemptToInviteOption27Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), timeoutMs);
  }

  async expectAnAttemptToInviteOption27Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), timeoutMs);
  }

  async expectAnAttemptToInviteOption27Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), timeoutMs);
  }

  async expectAnAttemptToInviteOption27Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), timeoutMs);
  }

  async expectAnAttemptToInviteOption27Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption27ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption27IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27));
  }

  async clickAnAttemptToInviteOption28(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28));
  }

  async doubleClickAnAttemptToInviteOption28(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28));
  }

  async expectAnAttemptToInviteOption28Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), timeoutMs);
  }

  async expectAnAttemptToInviteOption28Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), timeoutMs);
  }

  async expectAnAttemptToInviteOption28Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), timeoutMs);
  }

  async expectAnAttemptToInviteOption28Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), timeoutMs);
  }

  async expectAnAttemptToInviteOption28Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption28ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption28IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28));
  }

  async clickAnAttemptToInviteOption30(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30));
  }

  async doubleClickAnAttemptToInviteOption30(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30));
  }

  async expectAnAttemptToInviteOption30Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), timeoutMs);
  }

  async expectAnAttemptToInviteOption30Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), timeoutMs);
  }

  async expectAnAttemptToInviteOption30Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), timeoutMs);
  }

  async expectAnAttemptToInviteOption30Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), timeoutMs);
  }

  async expectAnAttemptToInviteOption30Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption30ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption30IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30));
  }

  async clickAnAttemptToInviteOption31(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31));
  }

  async doubleClickAnAttemptToInviteOption31(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31));
  }

  async expectAnAttemptToInviteOption31Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), timeoutMs);
  }

  async expectAnAttemptToInviteOption31Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), timeoutMs);
  }

  async expectAnAttemptToInviteOption31Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), timeoutMs);
  }

  async expectAnAttemptToInviteOption31Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), timeoutMs);
  }

  async expectAnAttemptToInviteOption31Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption31ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption31IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31));
  }

  async clickAnAttemptToInviteOption33(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33));
  }

  async doubleClickAnAttemptToInviteOption33(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33));
  }

  async expectAnAttemptToInviteOption33Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), timeoutMs);
  }

  async expectAnAttemptToInviteOption33Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), timeoutMs);
  }

  async expectAnAttemptToInviteOption33Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), timeoutMs);
  }

  async expectAnAttemptToInviteOption33Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), timeoutMs);
  }

  async expectAnAttemptToInviteOption33Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), expected, timeoutMs);
  }

  async expectAnAttemptToInviteOption33ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), substring, timeoutMs);
  }

  async scrollAnAttemptToInviteOption33IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33));
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


  async clickPersonalInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.personalInformation));
  }

  async doubleClickPersonalInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.personalInformation));
  }

  async longPressPersonalInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.personalInformation));
  }

  async expectPersonalInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.personalInformation), value, timeoutMs);
  }

  async expectPersonalInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.personalInformation), timeoutMs);
  }

  async expectPersonalInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.personalInformation), timeoutMs);
  }

  async expectPersonalInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.personalInformation), timeoutMs);
  }

  async expectPersonalInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.personalInformation), timeoutMs);
  }

  async expectPersonalInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.personalInformation), timeoutMs);
  }

  async expectPersonalInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.personalInformation), count, timeoutMs);
  }

  async clickYourNameContactDetails(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.yourNameContactDetails));
  }

  async doubleClickYourNameContactDetails(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.yourNameContactDetails));
  }

  async longPressYourNameContactDetails(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.yourNameContactDetails));
  }

  async expectYourNameContactDetailsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.yourNameContactDetails), value, timeoutMs);
  }

  async expectYourNameContactDetailsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.yourNameContactDetails), timeoutMs);
  }

  async expectYourNameContactDetailsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.yourNameContactDetails), timeoutMs);
  }

  async expectYourNameContactDetailsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.yourNameContactDetails), timeoutMs);
  }

  async expectYourNameContactDetailsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.yourNameContactDetails), timeoutMs);
  }

  async expectYourNameContactDetailsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.yourNameContactDetails), timeoutMs);
  }

  async expectYourNameContactDetailsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.yourNameContactDetails), count, timeoutMs);
  }

  async clickDisplayName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.displayName));
  }

  async doubleClickDisplayName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.displayName));
  }

  async longPressDisplayName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.displayName));
  }

  async expectDisplayNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.displayName), value, timeoutMs);
  }

  async expectDisplayNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.displayName), timeoutMs);
  }

  async expectDisplayNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.displayName), timeoutMs);
  }

  async expectDisplayNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.displayName), timeoutMs);
  }

  async expectDisplayNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.displayName), timeoutMs);
  }

  async expectDisplayNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.displayName), timeoutMs);
  }

  async expectDisplayNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.displayName), count, timeoutMs);
  }

  async clickUser1AcmecorporationExampleCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom));
  }

  async doubleClickUser1AcmecorporationExampleCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom));
  }

  async longPressUser1AcmecorporationExampleCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom));
  }

  async expectUser1AcmecorporationExampleComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), value, timeoutMs);
  }

  async expectUser1AcmecorporationExampleComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), timeoutMs);
  }

  async expectUser1AcmecorporationExampleComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.user1AcmecorporationExampleCom), count, timeoutMs);
  }

  async clickJobTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.jobTitle));
  }

  async doubleClickJobTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.jobTitle));
  }

  async longPressJobTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.jobTitle));
  }

  async expectJobTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.jobTitle), value, timeoutMs);
  }

  async expectJobTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.jobTitle), timeoutMs);
  }

  async expectJobTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.jobTitle), timeoutMs);
  }

  async expectJobTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.jobTitle), timeoutMs);
  }

  async expectJobTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.jobTitle), timeoutMs);
  }

  async expectJobTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.jobTitle), timeoutMs);
  }

  async expectJobTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.jobTitle), count, timeoutMs);
  }

  async clickMarketingManager(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.marketingManager));
  }

  async doubleClickMarketingManager(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.marketingManager));
  }

  async longPressMarketingManager(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.marketingManager));
  }

  async expectMarketingManagerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.marketingManager), value, timeoutMs);
  }

  async expectMarketingManagerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.marketingManager), timeoutMs);
  }

  async expectMarketingManagerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.marketingManager), timeoutMs);
  }

  async expectMarketingManagerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.marketingManager), timeoutMs);
  }

  async expectMarketingManagerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.marketingManager), timeoutMs);
  }

  async expectMarketingManagerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.marketingManager), timeoutMs);
  }

  async expectMarketingManagerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.marketingManager), count, timeoutMs);
  }

  async clickPhoneNumber(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.phoneNumber));
  }

  async doubleClickPhoneNumber(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.phoneNumber));
  }

  async longPressPhoneNumber(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.phoneNumber));
  }

  async expectPhoneNumberValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.phoneNumber), value, timeoutMs);
  }

  async expectPhoneNumberEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.phoneNumber), timeoutMs);
  }

  async expectPhoneNumberDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.phoneNumber), timeoutMs);
  }

  async expectPhoneNumberChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.phoneNumber), timeoutMs);
  }

  async expectPhoneNumberUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.phoneNumber), timeoutMs);
  }

  async expectPhoneNumberFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.phoneNumber), timeoutMs);
  }

  async expectPhoneNumberCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.phoneNumber), count, timeoutMs);
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.element));
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.element), count, timeoutMs);
  }

  async clickTimezone(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.timezone));
  }

  async doubleClickTimezone(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.timezone));
  }

  async longPressTimezone(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.timezone));
  }

  async expectTimezoneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.timezone), value, timeoutMs);
  }

  async expectTimezoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.timezone), timeoutMs);
  }

  async expectTimezoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.timezone), timeoutMs);
  }

  async expectTimezoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.timezone), timeoutMs);
  }

  async expectTimezoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.timezone), timeoutMs);
  }

  async expectTimezoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.timezone), timeoutMs);
  }

  async expectTimezoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.timezone), count, timeoutMs);
  }

  async clickAmericaNewYork(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.americaNewYork));
  }

  async doubleClickAmericaNewYork(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.americaNewYork));
  }

  async longPressAmericaNewYork(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.americaNewYork));
  }

  async expectAmericaNewYorkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.americaNewYork), value, timeoutMs);
  }

  async expectAmericaNewYorkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.americaNewYork), timeoutMs);
  }

  async expectAmericaNewYorkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.americaNewYork), timeoutMs);
  }

  async expectAmericaNewYorkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.americaNewYork), timeoutMs);
  }

  async expectAmericaNewYorkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.americaNewYork), timeoutMs);
  }

  async expectAmericaNewYorkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.americaNewYork), timeoutMs);
  }

  async expectAmericaNewYorkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.americaNewYork), count, timeoutMs);
  }

  async clickLanguage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.language));
  }

  async doubleClickLanguage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.language));
  }

  async longPressLanguage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.language));
  }

  async expectLanguageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.language), value, timeoutMs);
  }

  async expectLanguageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.language), timeoutMs);
  }

  async expectLanguageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.language), timeoutMs);
  }

  async expectLanguageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.language), timeoutMs);
  }

  async expectLanguageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.language), timeoutMs);
  }

  async expectLanguageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.language), timeoutMs);
  }

  async expectLanguageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.language), count, timeoutMs);
  }

  async clickEnglishUs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.englishUs));
  }

  async doubleClickEnglishUs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.englishUs));
  }

  async longPressEnglishUs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.englishUs));
  }

  async expectEnglishUsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.englishUs), value, timeoutMs);
  }

  async expectEnglishUsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.englishUs), timeoutMs);
  }

  async expectEnglishUsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.englishUs), timeoutMs);
  }

  async expectEnglishUsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.englishUs), timeoutMs);
  }

  async expectEnglishUsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.englishUs), timeoutMs);
  }

  async expectEnglishUsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.englishUs), timeoutMs);
  }

  async expectEnglishUsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.englishUs), count, timeoutMs);
  }

  async clickRolePermissions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.rolePermissions));
  }

  async doubleClickRolePermissions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.rolePermissions));
  }

  async longPressRolePermissions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.rolePermissions));
  }

  async expectRolePermissionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.rolePermissions), value, timeoutMs);
  }

  async expectRolePermissionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.rolePermissions), timeoutMs);
  }

  async expectRolePermissionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.rolePermissions), timeoutMs);
  }

  async expectRolePermissionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.rolePermissions), timeoutMs);
  }

  async expectRolePermissionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.rolePermissions), timeoutMs);
  }

  async expectRolePermissionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.rolePermissions), timeoutMs);
  }

  async expectRolePermissionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.rolePermissions), count, timeoutMs);
  }

  async clickYourPortalAccessLevel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel));
  }

  async doubleClickYourPortalAccessLevel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel));
  }

  async longPressYourPortalAccessLevel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel));
  }

  async expectYourPortalAccessLevelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), value, timeoutMs);
  }

  async expectYourPortalAccessLevelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), timeoutMs);
  }

  async expectYourPortalAccessLevelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), timeoutMs);
  }

  async expectYourPortalAccessLevelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), timeoutMs);
  }

  async expectYourPortalAccessLevelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), timeoutMs);
  }

  async expectYourPortalAccessLevelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), timeoutMs);
  }

  async expectYourPortalAccessLevelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.yourPortalAccessLevel), count, timeoutMs);
  }

  async clickAccessCommunityMyUKGLinks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks));
  }

  async doubleClickAccessCommunityMyUKGLinks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks));
  }

  async longPressAccessCommunityMyUKGLinks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks));
  }

  async expectAccessCommunityMyUKGLinksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), value, timeoutMs);
  }

  async expectAccessCommunityMyUKGLinksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), timeoutMs);
  }

  async expectAccessCommunityMyUKGLinksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), timeoutMs);
  }

  async expectAccessCommunityMyUKGLinksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), timeoutMs);
  }

  async expectAccessCommunityMyUKGLinksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), timeoutMs);
  }

  async expectAccessCommunityMyUKGLinksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), timeoutMs);
  }

  async expectAccessCommunityMyUKGLinksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.accessCommunityMyUKGLinks), count, timeoutMs);
  }

  async clickCreateSupportTickets(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.createSupportTickets));
  }

  async doubleClickCreateSupportTickets(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.createSupportTickets));
  }

  async longPressCreateSupportTickets(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.createSupportTickets));
  }

  async expectCreateSupportTicketsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.createSupportTickets), value, timeoutMs);
  }

  async expectCreateSupportTicketsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.createSupportTickets), timeoutMs);
  }

  async expectCreateSupportTicketsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.createSupportTickets), timeoutMs);
  }

  async expectCreateSupportTicketsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.createSupportTickets), timeoutMs);
  }

  async expectCreateSupportTicketsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.createSupportTickets), timeoutMs);
  }

  async expectCreateSupportTicketsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.createSupportTickets), timeoutMs);
  }

  async expectCreateSupportTicketsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.createSupportTickets), count, timeoutMs);
  }

  async clickSearchSupportHistory(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportHistory));
  }

  async doubleClickSearchSupportHistory(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportHistory));
  }

  async longPressSearchSupportHistory(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportHistory));
  }

  async expectSearchSupportHistoryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.searchSupportHistory), value, timeoutMs);
  }

  async expectSearchSupportHistoryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.searchSupportHistory), timeoutMs);
  }

  async expectSearchSupportHistoryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.searchSupportHistory), timeoutMs);
  }

  async expectSearchSupportHistoryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.searchSupportHistory), timeoutMs);
  }

  async expectSearchSupportHistoryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.searchSupportHistory), timeoutMs);
  }

  async expectSearchSupportHistoryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.searchSupportHistory), timeoutMs);
  }

  async expectSearchSupportHistoryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.searchSupportHistory), count, timeoutMs);
  }

  async clickSearchSupportTickets(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportTickets));
  }

  async doubleClickSearchSupportTickets(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportTickets));
  }

  async longPressSearchSupportTickets(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.searchSupportTickets));
  }

  async expectSearchSupportTicketsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.searchSupportTickets), value, timeoutMs);
  }

  async expectSearchSupportTicketsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.searchSupportTickets), timeoutMs);
  }

  async expectSearchSupportTicketsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.searchSupportTickets), timeoutMs);
  }

  async expectSearchSupportTicketsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.searchSupportTickets), timeoutMs);
  }

  async expectSearchSupportTicketsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.searchSupportTickets), timeoutMs);
  }

  async expectSearchSupportTicketsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.searchSupportTickets), timeoutMs);
  }

  async expectSearchSupportTicketsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.searchSupportTickets), count, timeoutMs);
  }

  async clickViewAgingCaseSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary));
  }

  async doubleClickViewAgingCaseSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary));
  }

  async longPressViewAgingCaseSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary));
  }

  async expectViewAgingCaseSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), value, timeoutMs);
  }

  async expectViewAgingCaseSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), timeoutMs);
  }

  async expectViewAgingCaseSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), timeoutMs);
  }

  async expectViewAgingCaseSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), timeoutMs);
  }

  async expectViewAgingCaseSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), timeoutMs);
  }

  async expectViewAgingCaseSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), timeoutMs);
  }

  async expectViewAgingCaseSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewAgingCaseSummary), count, timeoutMs);
  }

  async clickViewCaseTrends(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewCaseTrends));
  }

  async doubleClickViewCaseTrends(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewCaseTrends));
  }

  async longPressViewCaseTrends(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewCaseTrends));
  }

  async expectViewCaseTrendsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewCaseTrends), value, timeoutMs);
  }

  async expectViewCaseTrendsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewCaseTrends), timeoutMs);
  }

  async expectViewCaseTrendsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewCaseTrends), timeoutMs);
  }

  async expectViewCaseTrendsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewCaseTrends), timeoutMs);
  }

  async expectViewCaseTrendsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewCaseTrends), timeoutMs);
  }

  async expectViewCaseTrendsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewCaseTrends), timeoutMs);
  }

  async expectViewCaseTrendsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewCaseTrends), count, timeoutMs);
  }

  async clickViewSlaBreachAlerts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaBreachAlerts));
  }

  async doubleClickViewSlaBreachAlerts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaBreachAlerts));
  }

  async longPressViewSlaBreachAlerts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaBreachAlerts));
  }

  async expectViewSlaBreachAlertsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSlaBreachAlerts), value, timeoutMs);
  }

  async expectViewSlaBreachAlertsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSlaBreachAlerts), timeoutMs);
  }

  async expectViewSlaBreachAlertsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSlaBreachAlerts), timeoutMs);
  }

  async expectViewSlaBreachAlertsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSlaBreachAlerts), timeoutMs);
  }

  async expectViewSlaBreachAlertsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSlaBreachAlerts), timeoutMs);
  }

  async expectViewSlaBreachAlertsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSlaBreachAlerts), timeoutMs);
  }

  async expectViewSlaBreachAlertsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSlaBreachAlerts), count, timeoutMs);
  }

  async clickViewSlaComplianceCharts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaComplianceCharts));
  }

  async doubleClickViewSlaComplianceCharts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaComplianceCharts));
  }

  async longPressViewSlaComplianceCharts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaComplianceCharts));
  }

  async expectViewSlaComplianceChartsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSlaComplianceCharts), value, timeoutMs);
  }

  async expectViewSlaComplianceChartsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSlaComplianceCharts), timeoutMs);
  }

  async expectViewSlaComplianceChartsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSlaComplianceCharts), timeoutMs);
  }

  async expectViewSlaComplianceChartsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSlaComplianceCharts), timeoutMs);
  }

  async expectViewSlaComplianceChartsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSlaComplianceCharts), timeoutMs);
  }

  async expectViewSlaComplianceChartsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSlaComplianceCharts), timeoutMs);
  }

  async expectViewSlaComplianceChartsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSlaComplianceCharts), count, timeoutMs);
  }

  async clickViewSlaCountdown(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaCountdown));
  }

  async doubleClickViewSlaCountdown(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaCountdown));
  }

  async longPressViewSlaCountdown(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaCountdown));
  }

  async expectViewSlaCountdownValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSlaCountdown), value, timeoutMs);
  }

  async expectViewSlaCountdownEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSlaCountdown), timeoutMs);
  }

  async expectViewSlaCountdownDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSlaCountdown), timeoutMs);
  }

  async expectViewSlaCountdownChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSlaCountdown), timeoutMs);
  }

  async expectViewSlaCountdownUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSlaCountdown), timeoutMs);
  }

  async expectViewSlaCountdownFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSlaCountdown), timeoutMs);
  }

  async expectViewSlaCountdownCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSlaCountdown), count, timeoutMs);
  }

  async clickViewSlaRiskPanel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaRiskPanel));
  }

  async doubleClickViewSlaRiskPanel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaRiskPanel));
  }

  async longPressViewSlaRiskPanel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSlaRiskPanel));
  }

  async expectViewSlaRiskPanelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSlaRiskPanel), value, timeoutMs);
  }

  async expectViewSlaRiskPanelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSlaRiskPanel), timeoutMs);
  }

  async expectViewSlaRiskPanelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSlaRiskPanel), timeoutMs);
  }

  async expectViewSlaRiskPanelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSlaRiskPanel), timeoutMs);
  }

  async expectViewSlaRiskPanelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSlaRiskPanel), timeoutMs);
  }

  async expectViewSlaRiskPanelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSlaRiskPanel), timeoutMs);
  }

  async expectViewSlaRiskPanelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSlaRiskPanel), count, timeoutMs);
  }

  async clickViewSupportAiInsights(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportAiInsights));
  }

  async doubleClickViewSupportAiInsights(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportAiInsights));
  }

  async longPressViewSupportAiInsights(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportAiInsights));
  }

  async expectViewSupportAiInsightsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSupportAiInsights), value, timeoutMs);
  }

  async expectViewSupportAiInsightsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSupportAiInsights), timeoutMs);
  }

  async expectViewSupportAiInsightsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSupportAiInsights), timeoutMs);
  }

  async expectViewSupportAiInsightsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSupportAiInsights), timeoutMs);
  }

  async expectViewSupportAiInsightsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSupportAiInsights), timeoutMs);
  }

  async expectViewSupportAiInsightsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSupportAiInsights), timeoutMs);
  }

  async expectViewSupportAiInsightsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSupportAiInsights), count, timeoutMs);
  }

  async clickViewSupportModule(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportModule));
  }

  async doubleClickViewSupportModule(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportModule));
  }

  async longPressViewSupportModule(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportModule));
  }

  async expectViewSupportModuleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSupportModule), value, timeoutMs);
  }

  async expectViewSupportModuleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSupportModule), timeoutMs);
  }

  async expectViewSupportModuleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSupportModule), timeoutMs);
  }

  async expectViewSupportModuleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSupportModule), timeoutMs);
  }

  async expectViewSupportModuleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSupportModule), timeoutMs);
  }

  async expectViewSupportModuleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSupportModule), timeoutMs);
  }

  async expectViewSupportModuleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSupportModule), count, timeoutMs);
  }

  async clickViewSupportOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportOverview));
  }

  async doubleClickViewSupportOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportOverview));
  }

  async longPressViewSupportOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportOverview));
  }

  async expectViewSupportOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSupportOverview), value, timeoutMs);
  }

  async expectViewSupportOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSupportOverview), timeoutMs);
  }

  async expectViewSupportOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSupportOverview), timeoutMs);
  }

  async expectViewSupportOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSupportOverview), timeoutMs);
  }

  async expectViewSupportOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSupportOverview), timeoutMs);
  }

  async expectViewSupportOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSupportOverview), timeoutMs);
  }

  async expectViewSupportOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSupportOverview), count, timeoutMs);
  }

  async clickViewSupportSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportSummary));
  }

  async doubleClickViewSupportSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportSummary));
  }

  async longPressViewSupportSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportSummary));
  }

  async expectViewSupportSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSupportSummary), value, timeoutMs);
  }

  async expectViewSupportSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSupportSummary), timeoutMs);
  }

  async expectViewSupportSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSupportSummary), timeoutMs);
  }

  async expectViewSupportSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSupportSummary), timeoutMs);
  }

  async expectViewSupportSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSupportSummary), timeoutMs);
  }

  async expectViewSupportSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSupportSummary), timeoutMs);
  }

  async expectViewSupportSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSupportSummary), count, timeoutMs);
  }

  async clickViewSupportTicketDetails(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails));
  }

  async doubleClickViewSupportTicketDetails(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails));
  }

  async longPressViewSupportTicketDetails(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails));
  }

  async expectViewSupportTicketDetailsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), value, timeoutMs);
  }

  async expectViewSupportTicketDetailsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), timeoutMs);
  }

  async expectViewSupportTicketDetailsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), timeoutMs);
  }

  async expectViewSupportTicketDetailsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), timeoutMs);
  }

  async expectViewSupportTicketDetailsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), timeoutMs);
  }

  async expectViewSupportTicketDetailsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), timeoutMs);
  }

  async expectViewSupportTicketDetailsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSupportTicketDetails), count, timeoutMs);
  }

  async clickViewSupportTicketHistory(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory));
  }

  async doubleClickViewSupportTicketHistory(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory));
  }

  async longPressViewSupportTicketHistory(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory));
  }

  async expectViewSupportTicketHistoryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), value, timeoutMs);
  }

  async expectViewSupportTicketHistoryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), timeoutMs);
  }

  async expectViewSupportTicketHistoryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), timeoutMs);
  }

  async expectViewSupportTicketHistoryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), timeoutMs);
  }

  async expectViewSupportTicketHistoryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), timeoutMs);
  }

  async expectViewSupportTicketHistoryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), timeoutMs);
  }

  async expectViewSupportTicketHistoryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSupportTicketHistory), count, timeoutMs);
  }

  async clickViewSupportTickets(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTickets));
  }

  async doubleClickViewSupportTickets(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTickets));
  }

  async longPressViewSupportTickets(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewSupportTickets));
  }

  async expectViewSupportTicketsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewSupportTickets), value, timeoutMs);
  }

  async expectViewSupportTicketsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewSupportTickets), timeoutMs);
  }

  async expectViewSupportTicketsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewSupportTickets), timeoutMs);
  }

  async expectViewSupportTicketsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewSupportTickets), timeoutMs);
  }

  async expectViewSupportTicketsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewSupportTickets), timeoutMs);
  }

  async expectViewSupportTicketsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewSupportTickets), timeoutMs);
  }

  async expectViewSupportTicketsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewSupportTickets), count, timeoutMs);
  }

  async clickViewTicketOverviewChart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart));
  }

  async doubleClickViewTicketOverviewChart(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart));
  }

  async longPressViewTicketOverviewChart(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart));
  }

  async expectViewTicketOverviewChartValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), value, timeoutMs);
  }

  async expectViewTicketOverviewChartEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), timeoutMs);
  }

  async expectViewTicketOverviewChartDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), timeoutMs);
  }

  async expectViewTicketOverviewChartChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), timeoutMs);
  }

  async expectViewTicketOverviewChartUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), timeoutMs);
  }

  async expectViewTicketOverviewChartFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), timeoutMs);
  }

  async expectViewTicketOverviewChartCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.viewTicketOverviewChart), count, timeoutMs);
  }

  async longPressBillingPayments(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.billingPayments));
  }

  async expectBillingPaymentsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.billingPayments), value, timeoutMs);
  }

  async expectBillingPaymentsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.billingPayments), timeoutMs);
  }

  async expectBillingPaymentsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.billingPayments), timeoutMs);
  }

  async expectBillingPaymentsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.billingPayments), timeoutMs);
  }

  async expectBillingPaymentsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.billingPayments), count, timeoutMs);
  }

  async longPressSubscriptionsRenewals(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.subscriptionsRenewals));
  }

  async expectSubscriptionsRenewalsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), value, timeoutMs);
  }

  async expectSubscriptionsRenewalsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), timeoutMs);
  }

  async expectSubscriptionsRenewalsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), timeoutMs);
  }

  async expectSubscriptionsRenewalsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), timeoutMs);
  }

  async expectSubscriptionsRenewalsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.subscriptionsRenewals), count, timeoutMs);
  }

  async longPressCustomerProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.customerProfile));
  }

  async expectCustomerProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.customerProfile), value, timeoutMs);
  }

  async expectCustomerProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.customerProfile), timeoutMs);
  }

  async expectCustomerProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.customerProfile), timeoutMs);
  }

  async expectCustomerProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.customerProfile), timeoutMs);
  }

  async expectCustomerProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.customerProfile), count, timeoutMs);
  }

  async longPressUserProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.userProfile));
  }

  async expectUserProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.userProfile), value, timeoutMs);
  }

  async expectUserProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.userProfile), timeoutMs);
  }

  async expectUserProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.userProfile), timeoutMs);
  }

  async expectUserProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.userProfile), timeoutMs);
  }

  async expectUserProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.userProfile), count, timeoutMs);
  }

  async clickActiveSessions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.activeSessions));
  }

  async doubleClickActiveSessions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.activeSessions));
  }

  async longPressActiveSessions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.activeSessions));
  }

  async expectActiveSessionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.activeSessions), value, timeoutMs);
  }

  async expectActiveSessionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.activeSessions), timeoutMs);
  }

  async expectActiveSessionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.activeSessions), timeoutMs);
  }

  async expectActiveSessionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.activeSessions), timeoutMs);
  }

  async expectActiveSessionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.activeSessions), timeoutMs);
  }

  async expectActiveSessionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.activeSessions), timeoutMs);
  }

  async expectActiveSessionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.activeSessions), count, timeoutMs);
  }

  async clickDevicesCurrentlySignedIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn));
  }

  async doubleClickDevicesCurrentlySignedIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn));
  }

  async longPressDevicesCurrentlySignedIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn));
  }

  async expectDevicesCurrentlySignedInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), value, timeoutMs);
  }

  async expectDevicesCurrentlySignedInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), timeoutMs);
  }

  async expectDevicesCurrentlySignedInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), timeoutMs);
  }

  async expectDevicesCurrentlySignedInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), timeoutMs);
  }

  async expectDevicesCurrentlySignedInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), timeoutMs);
  }

  async expectDevicesCurrentlySignedInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), timeoutMs);
  }

  async expectDevicesCurrentlySignedInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.devicesCurrentlySignedIn), count, timeoutMs);
  }

  async longPressChrome124MacOS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome124MacOS));
  }

  async expectChrome124MacOSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome124MacOS), value, timeoutMs);
  }

  async expectChrome124MacOSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome124MacOS), timeoutMs);
  }

  async expectChrome124MacOSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome124MacOS), timeoutMs);
  }

  async expectChrome124MacOSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome124MacOS), timeoutMs);
  }

  async expectChrome124MacOSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome124MacOS), count, timeoutMs);
  }

  async clickChrome124MacOS2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome124MacOS2));
  }

  async doubleClickChrome124MacOS2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome124MacOS2));
  }

  async longPressChrome124MacOS2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome124MacOS2));
  }

  async expectChrome124MacOS2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome124MacOS2), value, timeoutMs);
  }

  async expectChrome124MacOS2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome124MacOS2), timeoutMs);
  }

  async expectChrome124MacOS2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome124MacOS2), timeoutMs);
  }

  async expectChrome124MacOS2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome124MacOS2), timeoutMs);
  }

  async expectChrome124MacOS2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome124MacOS2), timeoutMs);
  }

  async expectChrome124MacOS2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome124MacOS2), timeoutMs);
  }

  async expectChrome124MacOS2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome124MacOS2), count, timeoutMs);
  }

  async clickThisDevice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.thisDevice));
  }

  async doubleClickThisDevice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.thisDevice));
  }

  async longPressThisDevice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.thisDevice));
  }

  async expectThisDeviceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.thisDevice), value, timeoutMs);
  }

  async expectThisDeviceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.thisDevice), timeoutMs);
  }

  async expectThisDeviceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.thisDevice), timeoutMs);
  }

  async expectThisDeviceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.thisDevice), timeoutMs);
  }

  async expectThisDeviceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.thisDevice), timeoutMs);
  }

  async expectThisDeviceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.thisDevice), timeoutMs);
  }

  async expectThisDeviceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.thisDevice), count, timeoutMs);
  }

  async clickElement2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.element2));
  }

  async doubleClickElement2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.element2));
  }

  async longPressElement2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.element2));
  }

  async expectElement2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.element2), value, timeoutMs);
  }

  async expectElement2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.element2), timeoutMs);
  }

  async expectElement2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.element2), timeoutMs);
  }

  async expectElement2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.element2), timeoutMs);
  }

  async expectElement2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.element2), timeoutMs);
  }

  async expectElement2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.element2), timeoutMs);
  }

  async expectElement2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.element2), count, timeoutMs);
  }

  async longPressSafari17IPhone(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.safari17IPhone));
  }

  async expectSafari17IPhoneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.safari17IPhone), value, timeoutMs);
  }

  async expectSafari17IPhoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.safari17IPhone), timeoutMs);
  }

  async expectSafari17IPhoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.safari17IPhone), timeoutMs);
  }

  async expectSafari17IPhoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.safari17IPhone), timeoutMs);
  }

  async expectSafari17IPhoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.safari17IPhone), count, timeoutMs);
  }

  async clickSafari17IPhone2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.safari17IPhone2));
  }

  async doubleClickSafari17IPhone2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.safari17IPhone2));
  }

  async longPressSafari17IPhone2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.safari17IPhone2));
  }

  async expectSafari17IPhone2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.safari17IPhone2), value, timeoutMs);
  }

  async expectSafari17IPhone2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.safari17IPhone2), timeoutMs);
  }

  async expectSafari17IPhone2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.safari17IPhone2), timeoutMs);
  }

  async expectSafari17IPhone2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.safari17IPhone2), timeoutMs);
  }

  async expectSafari17IPhone2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.safari17IPhone2), timeoutMs);
  }

  async expectSafari17IPhone2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.safari17IPhone2), timeoutMs);
  }

  async expectSafari17IPhone2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.safari17IPhone2), count, timeoutMs);
  }

  async longPressEndSessionOnSafari(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.endSessionOnSafari));
  }

  async expectEndSessionOnSafariValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.endSessionOnSafari), value, timeoutMs);
  }

  async expectEndSessionOnSafariChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.endSessionOnSafari), timeoutMs);
  }

  async expectEndSessionOnSafariUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.endSessionOnSafari), timeoutMs);
  }

  async expectEndSessionOnSafariFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.endSessionOnSafari), timeoutMs);
  }

  async expectEndSessionOnSafariCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.endSessionOnSafari), count, timeoutMs);
  }

  async longPressEdge124Windows(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.edge124Windows));
  }

  async expectEdge124WindowsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.edge124Windows), value, timeoutMs);
  }

  async expectEdge124WindowsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.edge124Windows), timeoutMs);
  }

  async expectEdge124WindowsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.edge124Windows), timeoutMs);
  }

  async expectEdge124WindowsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.edge124Windows), timeoutMs);
  }

  async expectEdge124WindowsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.edge124Windows), count, timeoutMs);
  }

  async clickEdge124Windows2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.edge124Windows2));
  }

  async doubleClickEdge124Windows2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.edge124Windows2));
  }

  async longPressEdge124Windows2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.edge124Windows2));
  }

  async expectEdge124Windows2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.edge124Windows2), value, timeoutMs);
  }

  async expectEdge124Windows2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.edge124Windows2), timeoutMs);
  }

  async expectEdge124Windows2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.edge124Windows2), timeoutMs);
  }

  async expectEdge124Windows2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.edge124Windows2), timeoutMs);
  }

  async expectEdge124Windows2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.edge124Windows2), timeoutMs);
  }

  async expectEdge124Windows2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.edge124Windows2), timeoutMs);
  }

  async expectEdge124Windows2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.edge124Windows2), count, timeoutMs);
  }

  async clickYesterday(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.yesterday));
  }

  async doubleClickYesterday(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.yesterday));
  }

  async longPressYesterday(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.yesterday));
  }

  async expectYesterdayValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.yesterday), value, timeoutMs);
  }

  async expectYesterdayEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.yesterday), timeoutMs);
  }

  async expectYesterdayDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.yesterday), timeoutMs);
  }

  async expectYesterdayChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.yesterday), timeoutMs);
  }

  async expectYesterdayUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.yesterday), timeoutMs);
  }

  async expectYesterdayFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.yesterday), timeoutMs);
  }

  async expectYesterdayCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.yesterday), count, timeoutMs);
  }

  async longPressEndSessionOnEdge(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.endSessionOnEdge));
  }

  async expectEndSessionOnEdgeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.endSessionOnEdge), value, timeoutMs);
  }

  async expectEndSessionOnEdgeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.endSessionOnEdge), timeoutMs);
  }

  async expectEndSessionOnEdgeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.endSessionOnEdge), timeoutMs);
  }

  async expectEndSessionOnEdgeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.endSessionOnEdge), timeoutMs);
  }

  async expectEndSessionOnEdgeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.endSessionOnEdge), count, timeoutMs);
  }

  async longPressSignOutAllOther(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.signOutAllOther));
  }

  async expectSignOutAllOtherValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.signOutAllOther), value, timeoutMs);
  }

  async expectSignOutAllOtherChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.signOutAllOther), timeoutMs);
  }

  async expectSignOutAllOtherUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.signOutAllOther), timeoutMs);
  }

  async expectSignOutAllOtherFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.signOutAllOther), timeoutMs);
  }

  async expectSignOutAllOtherCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.signOutAllOther), count, timeoutMs);
  }

  async clickActivityLog(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.activityLog));
  }

  async doubleClickActivityLog(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.activityLog));
  }

  async longPressActivityLog(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.activityLog));
  }

  async expectActivityLogValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.activityLog), value, timeoutMs);
  }

  async expectActivityLogEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.activityLog), timeoutMs);
  }

  async expectActivityLogDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.activityLog), timeoutMs);
  }

  async expectActivityLogChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.activityLog), timeoutMs);
  }

  async expectActivityLogUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.activityLog), timeoutMs);
  }

  async expectActivityLogFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.activityLog), timeoutMs);
  }

  async expectActivityLogCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.activityLog), count, timeoutMs);
  }

  async clickAccountActivityLogIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.accountActivityLogIn));
  }

  async doubleClickAccountActivityLogIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.accountActivityLogIn));
  }

  async longPressAccountActivityLogIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.accountActivityLogIn));
  }

  async expectAccountActivityLogInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.accountActivityLogIn), value, timeoutMs);
  }

  async expectAccountActivityLogInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.accountActivityLogIn), timeoutMs);
  }

  async expectAccountActivityLogInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.accountActivityLogIn), timeoutMs);
  }

  async expectAccountActivityLogInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.accountActivityLogIn), timeoutMs);
  }

  async expectAccountActivityLogInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.accountActivityLogIn), timeoutMs);
  }

  async expectAccountActivityLogInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.accountActivityLogIn), timeoutMs);
  }

  async expectAccountActivityLogInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.accountActivityLogIn), count, timeoutMs);
  }

  async clickAuditLogWasExported2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported2));
  }

  async doubleClickAuditLogWasExported2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported2));
  }

  async longPressAuditLogWasExported2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.auditLogWasExported2));
  }

  async expectAuditLogWasExported2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.auditLogWasExported2), value, timeoutMs);
  }

  async expectAuditLogWasExported2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.auditLogWasExported2), timeoutMs);
  }

  async expectAuditLogWasExported2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.auditLogWasExported2), timeoutMs);
  }

  async expectAuditLogWasExported2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.auditLogWasExported2), timeoutMs);
  }

  async expectAuditLogWasExported2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.auditLogWasExported2), timeoutMs);
  }

  async expectAuditLogWasExported2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.auditLogWasExported2), timeoutMs);
  }

  async expectAuditLogWasExported2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.auditLogWasExported2), count, timeoutMs);
  }

  async clickChrome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.chrome));
  }

  async doubleClickChrome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.chrome));
  }

  async longPressChrome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.chrome));
  }

  async expectChromeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.chrome), value, timeoutMs);
  }

  async expectChromeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.chrome), timeoutMs);
  }

  async expectChromeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.chrome), timeoutMs);
  }

  async expectChromeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.chrome), timeoutMs);
  }

  async expectChromeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.chrome), timeoutMs);
  }

  async expectChromeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.chrome), timeoutMs);
  }

  async expectChromeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.chrome), count, timeoutMs);
  }

  async longPressAnAttemptToInvite(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite));
  }

  async expectAnAttemptToInviteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite), value, timeoutMs);
  }

  async expectAnAttemptToInviteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite), timeoutMs);
  }

  async expectAnAttemptToInviteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite), timeoutMs);
  }

  async expectAnAttemptToInviteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite), timeoutMs);
  }

  async expectAnAttemptToInviteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite), count, timeoutMs);
  }

  async clickAnAttemptToInvite2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite2));
  }

  async doubleClickAnAttemptToInvite2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite2));
  }

  async longPressAnAttemptToInvite2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInvite2));
  }

  async expectAnAttemptToInvite2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), value, timeoutMs);
  }

  async expectAnAttemptToInvite2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), timeoutMs);
  }

  async expectAnAttemptToInvite2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), timeoutMs);
  }

  async expectAnAttemptToInvite2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), timeoutMs);
  }

  async expectAnAttemptToInvite2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), timeoutMs);
  }

  async expectAnAttemptToInvite2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), timeoutMs);
  }

  async expectAnAttemptToInvite2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInvite2), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption));
  }

  async expectAnAttemptToInviteOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), value, timeoutMs);
  }

  async expectAnAttemptToInviteOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), timeoutMs);
  }

  async expectAnAttemptToInviteOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), timeoutMs);
  }

  async expectAnAttemptToInviteOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), timeoutMs);
  }

  async expectAnAttemptToInviteOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption), count, timeoutMs);
  }

  async longPressAnAttemptToInviteAnAttemptToInviteUserWas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas));
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), value, timeoutMs);
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), timeoutMs);
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), timeoutMs);
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), timeoutMs);
  }

  async expectAnAttemptToInviteAnAttemptToInviteUserWasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteAnAttemptToInviteUserWas), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4));
  }

  async expectAnAttemptToInviteOption4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), timeoutMs);
  }

  async expectAnAttemptToInviteOption4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), timeoutMs);
  }

  async expectAnAttemptToInviteOption4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), timeoutMs);
  }

  async expectAnAttemptToInviteOption4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption4), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6));
  }

  async expectAnAttemptToInviteOption6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), timeoutMs);
  }

  async expectAnAttemptToInviteOption6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), timeoutMs);
  }

  async expectAnAttemptToInviteOption6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), timeoutMs);
  }

  async expectAnAttemptToInviteOption6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption6), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption8(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8));
  }

  async expectAnAttemptToInviteOption8Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption8Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), timeoutMs);
  }

  async expectAnAttemptToInviteOption8Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), timeoutMs);
  }

  async expectAnAttemptToInviteOption8Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), timeoutMs);
  }

  async expectAnAttemptToInviteOption8Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption8), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption9(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9));
  }

  async expectAnAttemptToInviteOption9Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption9Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), timeoutMs);
  }

  async expectAnAttemptToInviteOption9Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), timeoutMs);
  }

  async expectAnAttemptToInviteOption9Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), timeoutMs);
  }

  async expectAnAttemptToInviteOption9Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption9), count, timeoutMs);
  }

  async longPressANewUserAccount(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount));
  }

  async expectANewUserAccountValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccount), value, timeoutMs);
  }

  async expectANewUserAccountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccount), timeoutMs);
  }

  async expectANewUserAccountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccount), timeoutMs);
  }

  async expectANewUserAccountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccount), timeoutMs);
  }

  async expectANewUserAccountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccount), count, timeoutMs);
  }

  async clickANewUserAccount2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount2));
  }

  async doubleClickANewUserAccount2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount2));
  }

  async longPressANewUserAccount2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccount2));
  }

  async expectANewUserAccount2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccount2), value, timeoutMs);
  }

  async expectANewUserAccount2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aNewUserAccount2), timeoutMs);
  }

  async expectANewUserAccount2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aNewUserAccount2), timeoutMs);
  }

  async expectANewUserAccount2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccount2), timeoutMs);
  }

  async expectANewUserAccount2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccount2), timeoutMs);
  }

  async expectANewUserAccount2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccount2), timeoutMs);
  }

  async expectANewUserAccount2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccount2), count, timeoutMs);
  }

  async longPressANewUserAccountOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption));
  }

  async expectANewUserAccountOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), value, timeoutMs);
  }

  async expectANewUserAccountOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), timeoutMs);
  }

  async expectANewUserAccountOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), timeoutMs);
  }

  async expectANewUserAccountOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), timeoutMs);
  }

  async expectANewUserAccountOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccountOption), count, timeoutMs);
  }

  async longPressANewUserAccountANewUserAccountWasCreated(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated));
  }

  async expectANewUserAccountANewUserAccountWasCreatedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), value, timeoutMs);
  }

  async expectANewUserAccountANewUserAccountWasCreatedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), timeoutMs);
  }

  async expectANewUserAccountANewUserAccountWasCreatedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), timeoutMs);
  }

  async expectANewUserAccountANewUserAccountWasCreatedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), timeoutMs);
  }

  async expectANewUserAccountANewUserAccountWasCreatedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccountANewUserAccountWasCreated), count, timeoutMs);
  }

  async longPressANewUserAccountOption2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2));
  }

  async expectANewUserAccountOption2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), value, timeoutMs);
  }

  async expectANewUserAccountOption2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), timeoutMs);
  }

  async expectANewUserAccountOption2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), timeoutMs);
  }

  async expectANewUserAccountOption2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), timeoutMs);
  }

  async expectANewUserAccountOption2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccountOption2), count, timeoutMs);
  }

  async longPressANewUserAccountOption4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4));
  }

  async expectANewUserAccountOption4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), value, timeoutMs);
  }

  async expectANewUserAccountOption4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), timeoutMs);
  }

  async expectANewUserAccountOption4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), timeoutMs);
  }

  async expectANewUserAccountOption4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), timeoutMs);
  }

  async expectANewUserAccountOption4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccountOption4), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10));
  }

  async expectAnAttemptToInviteOption10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), timeoutMs);
  }

  async expectAnAttemptToInviteOption10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), timeoutMs);
  }

  async expectAnAttemptToInviteOption10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), timeoutMs);
  }

  async expectAnAttemptToInviteOption10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption10), count, timeoutMs);
  }

  async clickCurl(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.curl));
  }

  async doubleClickCurl(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.curl));
  }

  async longPressCurl(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.curl));
  }

  async expectCurlValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.curl), value, timeoutMs);
  }

  async expectCurlEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.curl), timeoutMs);
  }

  async expectCurlDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.curl), timeoutMs);
  }

  async expectCurlChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.curl), timeoutMs);
  }

  async expectCurlUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.curl), timeoutMs);
  }

  async expectCurlFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.curl), timeoutMs);
  }

  async expectCurlCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.curl), count, timeoutMs);
  }

  async longPressANewUserAccountOption5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5));
  }

  async expectANewUserAccountOption5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), value, timeoutMs);
  }

  async expectANewUserAccountOption5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), timeoutMs);
  }

  async expectANewUserAccountOption5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), timeoutMs);
  }

  async expectANewUserAccountOption5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), timeoutMs);
  }

  async expectANewUserAccountOption5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccountOption5), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption11(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11));
  }

  async expectAnAttemptToInviteOption11Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption11Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), timeoutMs);
  }

  async expectAnAttemptToInviteOption11Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), timeoutMs);
  }

  async expectAnAttemptToInviteOption11Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), timeoutMs);
  }

  async expectAnAttemptToInviteOption11Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption11), count, timeoutMs);
  }

  async longPressANewUserAccountOption6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6));
  }

  async expectANewUserAccountOption6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), value, timeoutMs);
  }

  async expectANewUserAccountOption6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), timeoutMs);
  }

  async expectANewUserAccountOption6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), timeoutMs);
  }

  async expectANewUserAccountOption6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), timeoutMs);
  }

  async expectANewUserAccountOption6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aNewUserAccountOption6), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption12(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12));
  }

  async expectAnAttemptToInviteOption12Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption12Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), timeoutMs);
  }

  async expectAnAttemptToInviteOption12Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), timeoutMs);
  }

  async expectAnAttemptToInviteOption12Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), timeoutMs);
  }

  async expectAnAttemptToInviteOption12Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption12), count, timeoutMs);
  }

  async clickAUserShubhamraj234GmailComWas2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas2));
  }

  async doubleClickAUserShubhamraj234GmailComWas2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas2));
  }

  async longPressAUserShubhamraj234GmailComWas2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas2));
  }

  async expectAUserShubhamraj234GmailComWas2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas2), value, timeoutMs);
  }

  async expectAUserShubhamraj234GmailComWas2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas2), timeoutMs);
  }

  async expectAUserShubhamraj234GmailComWas2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas2), timeoutMs);
  }

  async expectAUserShubhamraj234GmailComWas2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas2), timeoutMs);
  }

  async expectAUserShubhamraj234GmailComWas2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas2), timeoutMs);
  }

  async expectAUserShubhamraj234GmailComWas2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas2), timeoutMs);
  }

  async expectAUserShubhamraj234GmailComWas2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.aUserShubhamraj234GmailComWas2), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption13(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13));
  }

  async expectAnAttemptToInviteOption13Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption13Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), timeoutMs);
  }

  async expectAnAttemptToInviteOption13Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), timeoutMs);
  }

  async expectAnAttemptToInviteOption13Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), timeoutMs);
  }

  async expectAnAttemptToInviteOption13Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption13), count, timeoutMs);
  }

  async clickJavaHttpClient21011(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient21011));
  }

  async doubleClickJavaHttpClient21011(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient21011));
  }

  async longPressJavaHttpClient21011(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.javaHttpClient21011));
  }

  async expectJavaHttpClient21011Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.javaHttpClient21011), value, timeoutMs);
  }

  async expectJavaHttpClient21011Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.javaHttpClient21011), timeoutMs);
  }

  async expectJavaHttpClient21011Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.javaHttpClient21011), timeoutMs);
  }

  async expectJavaHttpClient21011Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.javaHttpClient21011), timeoutMs);
  }

  async expectJavaHttpClient21011Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.javaHttpClient21011), timeoutMs);
  }

  async expectJavaHttpClient21011Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.javaHttpClient21011), timeoutMs);
  }

  async expectJavaHttpClient21011Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.javaHttpClient21011), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption14(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14));
  }

  async expectAnAttemptToInviteOption14Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption14Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), timeoutMs);
  }

  async expectAnAttemptToInviteOption14Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), timeoutMs);
  }

  async expectAnAttemptToInviteOption14Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), timeoutMs);
  }

  async expectAnAttemptToInviteOption14Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption14), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption16(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16));
  }

  async expectAnAttemptToInviteOption16Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption16Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), timeoutMs);
  }

  async expectAnAttemptToInviteOption16Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), timeoutMs);
  }

  async expectAnAttemptToInviteOption16Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), timeoutMs);
  }

  async expectAnAttemptToInviteOption16Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption16), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption17(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17));
  }

  async expectAnAttemptToInviteOption17Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption17Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), timeoutMs);
  }

  async expectAnAttemptToInviteOption17Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), timeoutMs);
  }

  async expectAnAttemptToInviteOption17Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), timeoutMs);
  }

  async expectAnAttemptToInviteOption17Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption17), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption18(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18));
  }

  async expectAnAttemptToInviteOption18Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption18Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), timeoutMs);
  }

  async expectAnAttemptToInviteOption18Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), timeoutMs);
  }

  async expectAnAttemptToInviteOption18Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), timeoutMs);
  }

  async expectAnAttemptToInviteOption18Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption18), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption20(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20));
  }

  async expectAnAttemptToInviteOption20Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption20Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), timeoutMs);
  }

  async expectAnAttemptToInviteOption20Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), timeoutMs);
  }

  async expectAnAttemptToInviteOption20Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), timeoutMs);
  }

  async expectAnAttemptToInviteOption20Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption20), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption21(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21));
  }

  async expectAnAttemptToInviteOption21Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption21Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), timeoutMs);
  }

  async expectAnAttemptToInviteOption21Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), timeoutMs);
  }

  async expectAnAttemptToInviteOption21Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), timeoutMs);
  }

  async expectAnAttemptToInviteOption21Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption21), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption22(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22));
  }

  async expectAnAttemptToInviteOption22Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption22Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), timeoutMs);
  }

  async expectAnAttemptToInviteOption22Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), timeoutMs);
  }

  async expectAnAttemptToInviteOption22Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), timeoutMs);
  }

  async expectAnAttemptToInviteOption22Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption22), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption23(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23));
  }

  async expectAnAttemptToInviteOption23Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption23Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), timeoutMs);
  }

  async expectAnAttemptToInviteOption23Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), timeoutMs);
  }

  async expectAnAttemptToInviteOption23Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), timeoutMs);
  }

  async expectAnAttemptToInviteOption23Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption23), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption24(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24));
  }

  async expectAnAttemptToInviteOption24Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption24Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), timeoutMs);
  }

  async expectAnAttemptToInviteOption24Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), timeoutMs);
  }

  async expectAnAttemptToInviteOption24Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), timeoutMs);
  }

  async expectAnAttemptToInviteOption24Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption24), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption25(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25));
  }

  async expectAnAttemptToInviteOption25Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption25Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), timeoutMs);
  }

  async expectAnAttemptToInviteOption25Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), timeoutMs);
  }

  async expectAnAttemptToInviteOption25Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), timeoutMs);
  }

  async expectAnAttemptToInviteOption25Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption25), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption26(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26));
  }

  async expectAnAttemptToInviteOption26Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption26Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), timeoutMs);
  }

  async expectAnAttemptToInviteOption26Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), timeoutMs);
  }

  async expectAnAttemptToInviteOption26Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), timeoutMs);
  }

  async expectAnAttemptToInviteOption26Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption26), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption27(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27));
  }

  async expectAnAttemptToInviteOption27Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption27Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), timeoutMs);
  }

  async expectAnAttemptToInviteOption27Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), timeoutMs);
  }

  async expectAnAttemptToInviteOption27Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), timeoutMs);
  }

  async expectAnAttemptToInviteOption27Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption27), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption28(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28));
  }

  async expectAnAttemptToInviteOption28Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption28Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), timeoutMs);
  }

  async expectAnAttemptToInviteOption28Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), timeoutMs);
  }

  async expectAnAttemptToInviteOption28Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), timeoutMs);
  }

  async expectAnAttemptToInviteOption28Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption28), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption30(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30));
  }

  async expectAnAttemptToInviteOption30Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption30Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), timeoutMs);
  }

  async expectAnAttemptToInviteOption30Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), timeoutMs);
  }

  async expectAnAttemptToInviteOption30Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), timeoutMs);
  }

  async expectAnAttemptToInviteOption30Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption30), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption31(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31));
  }

  async expectAnAttemptToInviteOption31Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption31Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), timeoutMs);
  }

  async expectAnAttemptToInviteOption31Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), timeoutMs);
  }

  async expectAnAttemptToInviteOption31Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), timeoutMs);
  }

  async expectAnAttemptToInviteOption31Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption31), count, timeoutMs);
  }

  async longPressAnAttemptToInviteOption33(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33));
  }

  async expectAnAttemptToInviteOption33Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), value, timeoutMs);
  }

  async expectAnAttemptToInviteOption33Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), timeoutMs);
  }

  async expectAnAttemptToInviteOption33Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), timeoutMs);
  }

  async expectAnAttemptToInviteOption33Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), timeoutMs);
  }

  async expectAnAttemptToInviteOption33Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.anAttemptToInviteOption33), count, timeoutMs);
  }

}

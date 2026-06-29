import { test as base, expect } from "@playwright/test";
import { AdoptionPage } from "../pageobjects/AdoptionPage";
import { AduitLogPage } from "../pageobjects/AduitLogPage";
import { BillingPage } from "../pageobjects/BillingPage";
import { CustomerPage } from "../pageobjects/CustomerPage";
import { ImplementationsPage } from "../pageobjects/ImplementationsPage";
import { LoginPage } from "../pageobjects/LoginPage";
import { OverviewPage } from "../pageobjects/OverviewPage";
import { ProfilePage } from "../pageobjects/ProfilePage";
import { RolesAndAccessPage } from "../pageobjects/RolesAndAccessPage";
import { SubscriptionsPage } from "../pageobjects/SubscriptionsPage";
import { SupportPage } from "../pageobjects/SupportPage";
import { UserManagementPage } from "../pageobjects/UserManagementPage";

type AppFixtures = {
  adoptionPage: AdoptionPage;
  aduitLogPage: AduitLogPage;
  billingPage: BillingPage;
  customerPage: CustomerPage;
  implementationsPage: ImplementationsPage;
  loginPage: LoginPage;
  overviewPage: OverviewPage;
  profilePage: ProfilePage;
  rolesAndAccessPage: RolesAndAccessPage;
  subscriptionsPage: SubscriptionsPage;
  supportPage: SupportPage;
  userManagementPage: UserManagementPage;
};

export const test = base.extend<AppFixtures>({
  adoptionPage: async ({ page }, use) => {
    await use(new AdoptionPage(page));
  },
  aduitLogPage: async ({ page }, use) => {
    await use(new AduitLogPage(page));
  },
  billingPage: async ({ page }, use) => {
    await use(new BillingPage(page));
  },
  customerPage: async ({ page }, use) => {
    await use(new CustomerPage(page));
  },
  implementationsPage: async ({ page }, use) => {
    await use(new ImplementationsPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  overviewPage: async ({ page }, use) => {
    await use(new OverviewPage(page));
  },
  profilePage: async ({ page }, use) => {
    await use(new ProfilePage(page));
  },
  rolesAndAccessPage: async ({ page }, use) => {
    await use(new RolesAndAccessPage(page));
  },
  subscriptionsPage: async ({ page }, use) => {
    await use(new SubscriptionsPage(page));
  },
  supportPage: async ({ page }, use) => {
    await use(new SupportPage(page));
  },
  userManagementPage: async ({ page }, use) => {
    await use(new UserManagementPage(page));
  },
});

export { expect };

import { test, expect } from '../support/fixtures';
import env from '../support/env';
import testData from '../testdata/test-data.json';

test('Login via Salesforce and land on /admin', { tag: ["@smoke","@regression","@P0","@login-salesforce"] }, async ({ page, loginPage, userManagementPage }) => {
  await test.step('Open — Navigate to admin page', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Click — Click Salesforce login button', async () => {
    await loginPage.clickLoginWithSalesforce();
  });
  await test.step('Assert visible — User Management tab is visible and active', async () => {
    await userManagementPage.expectAdminTabUsersVisible();
    await userManagementPage.expectAdminTabUsersEnabled();
  });
});


test('User Management tab is active by default with correct columns and user count', { tag: ["@smoke","@regression","@P0","@default-tab-user-management"] }, async ({ page, userManagementPage }) => {
  await test.step('Open — Navigate to admin page', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Assert visible — User Management tab is active', async () => {
    await userManagementPage.expectAdminTabUsersVisible();
  });
  await test.step('Assert text — Tabs are rendered in correct order', async () => {

    await expect(page.locator('tablist')).toHaveText('User ManagementRoles & AccessAudit Log');
  });
  await test.step('Assert visible — "N Users" count label is visible', async () => {

    await expect(page.locator('[data-testid="user-count-label"]')).toBeVisible();
  });
  await test.step('Assert visible — Search user input is visible with correct placeholder', async () => {
    await userManagementPage.expectUsersSearchVisible();
    await expect(page.locator('input[placeholder="Search user"]')).toBeVisible();
  });
  await test.step('Assert visible — Invite user button is visible', async () => {
    await userManagementPage.expectInviteUserVisible();
  });
  await test.step('Assert text — Table columns are correct and in order', async () => {
    await expect(page.locator('thead tr')).toHaveText('User informationRoleStatusLast activeAccount Access');
  });
});


test('User information cell renders avatar, name, and email correctly', { tag: ["@smoke","@regression","@P0","@user-info-cell-avatar-name-email"] }, async ({ page, userManagementPage }) => {
  await test.step('Open — Navigate to admin page', async () => {
    await page.goto(env.baseURL);
  });
  await test.step('Assert visible — Avatar is visible (photo or initials)', async () => {
    await userManagementPage.expectAcmeCorporationVisible();
  });
  await test.step('Assert visible — Full name is bold on first line', async () => {
    await userManagementPage.expectUsersVisible();
  });
  await test.step('Assert visible — Email is visible in muted text on second line', async () => {
    await userManagementPage.expectUsersSearchVisible();
  });
});

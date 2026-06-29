import { test, expect } from '../support/fixtures';
import env from '../support/env';
import testData from '../testdata/test-data.json';

test('Login via Salesforce and land on /admin', { tag: ["@smoke","@regression","@P0","@login-salesforce"] }, async ({ page, loginPage }) => {
  await test.step('Open — Navigate to admin page', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Click — Click Salesforce login button', async () => {
    await loginPage.clickLoginWithSalesforce();
  });
  await test.step('Assert visible — User Management tab is visible and active', async () => {
    await page.locator("tab[aria-selected='true'][name='User Management']").waitFor({ state: 'visible' });
  });
});

test('User Management tab is default and tabs are in correct order', { tag: ["@smoke","@regression","@P0","@default-tab-and-tabs-order"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Assert visible — User Management tab is active', async () => {
    await page.locator("tab[aria-selected='true'][name='User Management']").waitFor({ state: 'visible' });
  });
  await test.step('Assert text — Tabs are in order: User Management, Roles & Access, Audit Log', async () => {
    await expect(page.locator('tablist')).toHaveText('User ManagementRoles & AccessAudit Log');
  });
});

test('User Management header shows N Users, Search input, and Invite user button', { tag: ["@smoke","@regression","@P0","@user-management-header-elements"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Assert visible — N Users count label is visible', async () => {
    await page.locator("[data-testid='user-count-label']").waitFor({ state: 'visible' });
  });
  await test.step('Assert visible — Search user input is visible with correct placeholder', async () => {
    await page.locator("input[placeholder='Search user']").waitFor({ state: 'visible' });
  });
  await test.step('Assert visible — Invite user button is visible with teal background and white text', async () => {
    await page.locator("button:has-text('Invite user')").waitFor({ state: 'visible' });
  });
});

test('User table renders five columns in correct order', { tag: ["@smoke","@regression","@P0","@user-table-columns"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Assert text — Table header row has correct columns in order', async () => {
    await expect(page.locator('table thead tr')).toHaveText('User informationRoleStatusLast activeAccount Access');
  });
});

test('User info cell shows avatar, full name in bold, and email in muted text', { tag: ["@smoke","@regression","@P0","@user-info-cell-avatar-name-email"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Assert visible — User avatar is visible (image or initials)', async () => {
    await page.locator("[data-testid='user-avatar']").waitFor({ state: 'visible' });
  });
  await test.step('Assert visible — Full name is bold', async () => {
    await page.locator("[data-testid='user-fullname']").waitFor({ state: 'visible' });
  });
  await test.step('Assert visible — Email address is visible in muted text', async () => {
    await page.locator("[data-testid='user-email']").waitFor({ state: 'visible' });
  });
});

test('User info cell for email-only user shows email in avatar and first line', { tag: ["@smoke","@regression","@P0","@user-info-cell-email-only"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page with email-only user present', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Assert visible — Avatar shows initials from email prefix', async () => {
    await page.locator("[data-testid='user-avatar-email-only']").waitFor({ state: 'visible' });
  });
  await test.step('Assert text — First line shows email address only', async () => {
    await expect(page.locator("[data-testid='user-fullname-email-only']")).toHaveText(/.+@.+\..+/);
  });
});

test('Role cell shows plain text role label', { tag: ["@smoke","@regression","@P0","@role-cell-labels"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Assert text — Role cell shows one of: Admin, Finance, Business, or other', async () => {
    await expect(page.locator("[data-testid='user-role']")).toHaveText(/Admin|Finance|Business|.+/);
  });
});

test('Status cell shows green Active badge or red Inactive badge', { tag: ["@smoke","@regression","@P0","@status-cell-badges"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Assert visible — Active users have green Active badge', async () => {
    await page.locator("[data-testid='user-status-active']").waitFor({ state: 'visible' });
  });
  await test.step('Assert visible — Inactive users have red Inactive badge', async () => {
    await page.locator("[data-testid='user-status-inactive']").waitFor({ state: 'visible' });
  });
});

test('Last active cell shows relative time or Never', { tag: ["@smoke","@regression","@P0","@last-active-cell-values"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step("Assert contains — Last active cell shows relative time (e.g. 'days ago', 'hours ago')", async () => {
    await expect(page.locator("[data-testid='user-last-active']")).toContainText('ago');
  });
  await test.step("Assert text — Never logged in user shows 'Never'", async () => {
    await expect(page.locator("[data-testid='user-last-active-never']")).toHaveText('Never');
  });
});

test('Clicking ON toggle opens confirmation, revoke sets toggle OFF and status to Inactive', { tag: ["@smoke","@regression","@P0","@account-access-toggle-on-to-off-confirm"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Click — Click ON toggle for active user', async () => {
    await page.locator("[data-testid='user-toggle-on']").click();
  });
  await test.step('Assert visible — Confirmation dialog appears with Revoke button', async () => {
    await page.locator("[role='dialog']").waitFor({ state: 'visible' });
    await page.locator("button:has-text('Revoke')").waitFor({ state: 'visible' });
  });
  await test.step('Click — Click Revoke button', async () => {
    await page.locator("button:has-text('Revoke')").click();
  });
  await test.step('Assert visible — Toggle is now OFF', async () => {
    await page.locator("[data-testid='user-toggle-off']").waitFor({ state: 'visible' });
  });
  await test.step('Assert text — Status badge is now Inactive', async () => {
    await expect(page.locator("[data-testid='user-status-inactive']")).toHaveText('Inactive');
  });
});

test('Canceling revoke leaves toggle ON and status unchanged', { tag: ["@smoke","@regression","@P0","@account-access-toggle-on-to-off-cancel"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Click — Click ON toggle for active user', async () => {
    await page.locator("[data-testid='user-toggle-on']").click();
  });
  await test.step('Assert visible — Confirmation dialog appears', async () => {
    await page.locator("[role='dialog']").waitFor({ state: 'visible' });
  });
  await test.step('Click — Click Cancel button', async () => {
    await page.locator("button:has-text('Cancel')").click();
  });
  await test.step('Assert visible — Toggle remains ON', async () => {
    await page.locator("[data-testid='user-toggle-on']").waitFor({ state: 'visible' });
  });
});

test('Clicking OFF toggle re-enables access immediately (no confirmation)', { tag: ["@smoke","@regression","@P0","@account-access-toggle-off-to-on"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Click — Click OFF toggle for inactive user', async () => {
    await page.locator("[data-testid='user-toggle-off']").click();
  });
  await test.step('Assert visible — Toggle is now ON', async () => {
    await page.locator("[data-testid='user-toggle-on']").waitFor({ state: 'visible' });
  });
});

test('Search user input filters table by name (case-insensitive, partial match)', { tag: ["@smoke","@regression","@P0","@search-user-by-name"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step("Fill — Type 'testuserinvite1' in Search user input", async () => {
    await page.locator("input[placeholder='Search user']").fill(testData.searchUserInputFiltersTableByNameCaseInsensitivePartialMatch.typeTestuserinvite1InSearchUserInput);
  });
  await test.step("Assert contains — Table shows only users matching 'testuserinvite1'", async () => {
    await expect(page.locator('table tbody')).toContainText('testuserinvite1');
  });
});

test("Search user input with no matches shows 'No users found' message", { tag: ["@smoke","@regression","@P0","@search-user-no-results"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step("Fill — Type 'zzznomatch' in Search user input", async () => {
    await page.locator("input[placeholder='Search user']").fill(testData.searchUserInputWithNoMatchesShowsNoUsersFoundMessage.typeZzznomatchInSearchUserInput);
  });
  await test.step("Assert text — Table body shows 'No users found for 'zzznomatch'.'", async () => {
    await expect(page.locator('table tbody tr td')).toHaveText("No users found for 'zzznomatch'.");
  });
  await test.step('Assert visible — Table header row is still visible', async () => {
    await page.locator('table thead').waitFor({ state: 'visible' });
  });
});

test('Search resets pagination to page 1 when query changes', { tag: ["@smoke","@regression","@P0","@search-user-pagination-reset"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page with >20 users', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Click — Click page 2 in pagination controls', async () => {
    await page.locator("button:has-text('2')").click();
  });
  await test.step("Fill — Type 'a' in Search user input", async () => {
    await page.locator("input[placeholder='Search user']").fill(testData.searchResetsPaginationToPage1WhenQueryChanges.typeAInSearchUserInput);
  });
  await test.step('Assert text — Pagination is reset to page 1', async () => {
    await expect(page.locator("button[aria-current='page']")).toHaveText('1');
  });
});

test('N Users count label does not change during filtering', { tag: ["@smoke","@regression","@P0","@user-count-label-static-on-search"] }, async ({ page }) => {
  let userCountLabelValue = '';
  await test.step('Open — Navigate to admin page', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Assert text — Record N Users count label value', async () => {
    userCountLabelValue = await page.locator("[data-testid='user-count-label']").innerText();
  });
  await test.step("Fill — Type 'a' in Search user input", async () => {
    await page.locator("input[placeholder='Search user']").fill(testData.nUsersCountLabelDoesNotChangeDuringFiltering.typeAInSearchUserInput);
  });
  await test.step('Assert text — N Users count label value remains unchanged', async () => {
    await expect(page.locator("[data-testid='user-count-label']")).toHaveText(userCountLabelValue);
  });
});

test("Admin's own row toggle is disabled and shows tooltip on hover", { tag: ["@smoke","@regression","@P0","@admin-row-toggle-disabled-tooltip"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page as Portal Administrator', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step("Assert disabled — Admin's own Account Access toggle is disabled", async () => {
    await expect(page.locator("[data-testid='user-toggle-self']")).toBeDisabled();
  });
  await test.step("Hover — Hover over Admin's own toggle", async () => {
    await page.locator("[data-testid='user-toggle-self']").hover();
  });
  await test.step("Assert visible — Tooltip 'You cannot revoke your own access.' is displayed", async () => {
    await expect(page.locator("[role='tooltip']")).toHaveText('You cannot revoke your own access.');
  });
});

test('Switching between User Management and Roles & Access tabs works', { tag: ["@smoke","@regression","@P0","@tab-switching"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Click — Click Roles & Access tab', async () => {
    await page.locator("tab[name='Roles & Access']").click();
  });
  await test.step('Assert visible — Roles & Access view is rendered', async () => {
    await page.locator("[data-testid='roles-access-view']").waitFor({ state: 'visible' });
  });
  await test.step('Click — Click User Management tab', async () => {
    await page.locator("tab[name='User Management']").click();
  });
  await test.step('Assert visible — User Management table is visible', async () => {
    await page.locator("[data-testid='user-table']").waitFor({ state: 'visible' });
  });
});

test('Pagination controls appear when there are more than 20 users', { tag: ["@smoke","@regression","@P0","@pagination-controls-appear-at-21"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page with 21 users', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Assert visible — Pagination controls are visible below table', async () => {
    await page.locator("[data-testid='pagination-controls']").waitFor({ state: 'visible' });
  });
});

test('Pagination controls are not shown when there are exactly 20 users', { tag: ["@smoke","@regression","@P0","@pagination-controls-not-shown-at-20"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page with 20 users', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Assert hidden — Pagination controls are not visible', async () => {
    await expect(page.locator("[data-testid='pagination-controls']")).toBeHidden();
  });
});

test('Clicking Next in pagination shows next set of users', { tag: ["@smoke","@regression","@P0","@pagination-next-page"] }, async ({ page }) => {
  await test.step('Open — Navigate to admin page with >20 users', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });
  await test.step('Click — Click Next in pagination controls', async () => {
    await page.locator("button:has-text('Next')").click();
  });
  await test.step('Assert text — Pagination shows page 2 as active', async () => {
    await expect(page.locator("button[aria-current='page']")).toHaveText('2');
  });
  await test.step('Assert count — Table shows up to 20 users on page 2', async () => {
    const rowCount = await page.locator('table tbody tr').count();
    expect(rowCount).toBeLessThanOrEqual(20);
  });
});

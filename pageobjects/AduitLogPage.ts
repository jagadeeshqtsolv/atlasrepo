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

export class AduitLogPage {
  private static readonly L = {
    auditSearch: { strategy: 'testId' as const, value: 'audit-search-input', actionKind: 'textbox' as const },
    auditCategoryFilter: { strategy: 'testId' as const, value: 'audit-category-filter', actionKind: 'combobox' as const },
    auditStatusFilter: { strategy: 'testId' as const, value: 'audit-status-filter', actionKind: 'combobox' as const },
    auditExport: { strategy: 'role' as const, value: 'Export CSV', role: 'button', actionKind: 'button' as const },
    auditPaginationPage14: { strategy: 'role' as const, value: '14', role: 'button', actionKind: 'button' as const },
  } as const;

  readonly auditLog: WebTable; // columns: ["Actor", "Category", "Action", "Timestamp", "IP", "Result"]

  constructor(private readonly page: Page) {
    this.auditLog = webTable(this.page, 'table[aria-label="Audit log"]');
  }

  async fillAuditSearch(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, AduitLogPage.L.auditSearch), value);
  }

  async clearAuditSearch(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, AduitLogPage.L.auditSearch));
  }

  async typeTextAuditSearch(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, AduitLogPage.L.auditSearch), value);
  }

  async expectAuditSearchVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AduitLogPage.L.auditSearch), timeoutMs);
  }

  async expectAuditSearchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AduitLogPage.L.auditSearch), timeoutMs);
  }

  async expectAuditSearchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AduitLogPage.L.auditSearch), timeoutMs);
  }

  async expectAuditSearchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AduitLogPage.L.auditSearch), timeoutMs);
  }

  async expectAuditSearchValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AduitLogPage.L.auditSearch), expected, timeoutMs);
  }

  async expectAuditSearchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AduitLogPage.L.auditSearch), timeoutMs);
  }

  async scrollAuditSearchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AduitLogPage.L.auditSearch));
  }

  async selectAuditCategoryFilter(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, AduitLogPage.L.auditCategoryFilter), value);
  }

  async expectAuditCategoryFilterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AduitLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async expectAuditCategoryFilterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AduitLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async expectAuditCategoryFilterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AduitLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async expectAuditCategoryFilterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AduitLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async expectAuditCategoryFilterValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AduitLogPage.L.auditCategoryFilter), expected, timeoutMs);
  }

  async expectAuditCategoryFilterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AduitLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async scrollAuditCategoryFilterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AduitLogPage.L.auditCategoryFilter));
  }

  async selectAuditStatusFilter(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, AduitLogPage.L.auditStatusFilter), value);
  }

  async expectAuditStatusFilterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AduitLogPage.L.auditStatusFilter), timeoutMs);
  }

  async expectAuditStatusFilterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AduitLogPage.L.auditStatusFilter), timeoutMs);
  }

  async expectAuditStatusFilterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AduitLogPage.L.auditStatusFilter), timeoutMs);
  }

  async expectAuditStatusFilterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AduitLogPage.L.auditStatusFilter), timeoutMs);
  }

  async expectAuditStatusFilterValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AduitLogPage.L.auditStatusFilter), expected, timeoutMs);
  }

  async expectAuditStatusFilterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AduitLogPage.L.auditStatusFilter), timeoutMs);
  }

  async scrollAuditStatusFilterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AduitLogPage.L.auditStatusFilter));
  }

  async clickAuditExport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AduitLogPage.L.auditExport));
  }

  async doubleClickAuditExport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AduitLogPage.L.auditExport));
  }

  async expectAuditExportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AduitLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AduitLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AduitLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AduitLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AduitLogPage.L.auditExport), expected, timeoutMs);
  }

  async expectAuditExportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AduitLogPage.L.auditExport), substring, timeoutMs);
  }

  async scrollAuditExportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AduitLogPage.L.auditExport));
  }

  async clickAuditPaginationPage14(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AduitLogPage.L.auditPaginationPage14));
  }

  async doubleClickAuditPaginationPage14(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AduitLogPage.L.auditPaginationPage14));
  }

  async expectAuditPaginationPage14Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AduitLogPage.L.auditPaginationPage14), timeoutMs);
  }

  async expectAuditPaginationPage14Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AduitLogPage.L.auditPaginationPage14), timeoutMs);
  }

  async expectAuditPaginationPage14Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AduitLogPage.L.auditPaginationPage14), timeoutMs);
  }

  async expectAuditPaginationPage14Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AduitLogPage.L.auditPaginationPage14), timeoutMs);
  }

  async expectAuditPaginationPage14Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AduitLogPage.L.auditPaginationPage14), expected, timeoutMs);
  }

  async expectAuditPaginationPage14ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AduitLogPage.L.auditPaginationPage14), substring, timeoutMs);
  }

  async scrollAuditPaginationPage14IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AduitLogPage.L.auditPaginationPage14));
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

  // ── table[aria-label="Audit log"] ──────────────────────────────────────────────

  /** Text of any cell. row is 0-based; col is column name or 0-based index. */
  async getAuditLogTableText(row: number, col: number | string): Promise<string> {
    return this.auditLog.getText(row, col);
  }

  /** All text values for a column across every row. */
  async getAuditLogTableColumn(col: number | string): Promise<string[]> {
    return this.auditLog.getColumn(col);
  }

  /** All cell values for a row as { "Column Name": "value" }. */
  async getAuditLogTableRowData(row: number): Promise<Record<string, string>> {
    return this.auditLog.getRowData(row);
  }

  /** First row where col equals value (exact). Pass exact=false for contains match. */
  async findAuditLogTableRow(col: number | string, value: string, exact = true): Promise<number> {
    return this.auditLog.findRow(col, value, exact);
  }

  /** First row where any cell contains text (case-insensitive). */
  async findAuditLogTableRowByText(text: string): Promise<number> {
    return this.auditLog.findRowByText(text);
  }

  /** Total number of body rows. */
  async getAuditLogTableRowCount(): Promise<number> {
    return this.auditLog.rowCount();
  }

  /** Click the <a> link inside a cell. */
  async clickAuditLogTableLink(row: number, col: number | string): Promise<void> {
    return this.auditLog.clickLink(row, col);
  }

  /** href of the link inside a cell, or null if there is no link. */
  async getAuditLogTableLinkHref(row: number, col: number | string): Promise<string | null> {
    const cell = await this.auditLog.cell(row, col);
    const link = cell.locator('a');
    return (await link.count()) > 0 ? link.getAttribute('href') : null;
  }

  /** Check the row selection checkbox (idempotent). */
  async checkAuditLogTableRow(row: number): Promise<void> {
    const cb = this.auditLog.row(row).locator('input[type="checkbox"]').first();
    if (await cb.isChecked()) return;
    await cb.check({ force: true });
  }

  /** Uncheck the row selection checkbox (idempotent). */
  async uncheckAuditLogTableRow(row: number): Promise<void> {
    const cb = this.auditLog.row(row).locator('input[type="checkbox"]').first();
    if (!(await cb.isChecked())) return;
    await cb.uncheck({ force: true });
  }

  /** Whether the row selection checkbox is currently checked. */
  async isAuditLogTableRowChecked(row: number): Promise<boolean> {
    return this.auditLog.row(row).locator('input[type="checkbox"]').first().isChecked();
  }

  /** Current state of the toggle switch (role="switch") in the row — true = on/active. */
  async getAuditLogTableSwitchState(row: number): Promise<boolean> {
    return this.auditLog.getSwitchState(row);
  }

  /** Toggle the switch in a row. Pass targetState=true/false to set explicitly. */
  async toggleAuditLogTableSwitch(row: number, targetState?: boolean): Promise<void> {
    return this.auditLog.toggleSwitch(row, targetState);
  }

  /** Click a button in a row by optional label; omit label to click the last button (action menu). */
  async clickAuditLogTableButton(row: number, label?: string): Promise<void> {
    return this.auditLog.clickButton(row, label);
  }

  /** Click a named option inside an already-open row action dropdown. */
  async clickAuditLogTableMenuOption(label: string): Promise<void> {
    return this.auditLog.clickMenuOption(label);
  }

  /** Click a column header to sort. Call twice to reverse direction. */
  async sortAuditLogTableBy(col: string): Promise<void> {
    return this.auditLog.sortBy(col);
  }

  /** Locator for any element inside a row — toggles, buttons, custom controls. */
  getAuditLogTableInRow(row: number, selector: string): Locator {
    return this.auditLog.getInRow(row, selector);
  }


  async expectAuditSearchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AduitLogPage.L.auditSearch), expected, timeoutMs);
  }

  async expectAuditSearchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AduitLogPage.L.auditSearch), substring, timeoutMs);
  }

  async expectAuditSearchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AduitLogPage.L.auditSearch), timeoutMs);
  }

  async expectAuditSearchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AduitLogPage.L.auditSearch), timeoutMs);
  }

  async expectAuditSearchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AduitLogPage.L.auditSearch), count, timeoutMs);
  }

  async expectAuditCategoryFilterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AduitLogPage.L.auditCategoryFilter), expected, timeoutMs);
  }

  async expectAuditCategoryFilterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AduitLogPage.L.auditCategoryFilter), substring, timeoutMs);
  }

  async expectAuditCategoryFilterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AduitLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async expectAuditCategoryFilterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AduitLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async expectAuditCategoryFilterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AduitLogPage.L.auditCategoryFilter), count, timeoutMs);
  }

  async expectAuditStatusFilterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AduitLogPage.L.auditStatusFilter), expected, timeoutMs);
  }

  async expectAuditStatusFilterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AduitLogPage.L.auditStatusFilter), substring, timeoutMs);
  }

  async expectAuditStatusFilterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AduitLogPage.L.auditStatusFilter), timeoutMs);
  }

  async expectAuditStatusFilterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AduitLogPage.L.auditStatusFilter), timeoutMs);
  }

  async expectAuditStatusFilterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AduitLogPage.L.auditStatusFilter), count, timeoutMs);
  }

  async longPressAuditExport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AduitLogPage.L.auditExport));
  }

  async expectAuditExportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AduitLogPage.L.auditExport), value, timeoutMs);
  }

  async expectAuditExportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AduitLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AduitLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AduitLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AduitLogPage.L.auditExport), count, timeoutMs);
  }

  async longPressAuditPaginationPage14(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AduitLogPage.L.auditPaginationPage14));
  }

  async expectAuditPaginationPage14Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AduitLogPage.L.auditPaginationPage14), value, timeoutMs);
  }

  async expectAuditPaginationPage14Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AduitLogPage.L.auditPaginationPage14), timeoutMs);
  }

  async expectAuditPaginationPage14Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AduitLogPage.L.auditPaginationPage14), timeoutMs);
  }

  async expectAuditPaginationPage14Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AduitLogPage.L.auditPaginationPage14), timeoutMs);
  }

  async expectAuditPaginationPage14Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AduitLogPage.L.auditPaginationPage14), count, timeoutMs);
  }

}

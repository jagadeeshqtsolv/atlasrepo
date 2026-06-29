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

export class AdoptionPage {
  private static readonly L = {
    atlasInsightsAdoption: { strategy: 'text' as const, value: 'Atlas Insights · Adoption', actionKind: 'text' as const },
    vsUkgBenchmarks: { strategy: 'role' as const, value: 'vs UKG benchmarks', role: 'button', actionKind: 'button' as const },
    perProductAdoption: { strategy: 'role' as const, value: 'Per-product adoption', role: 'button', actionKind: 'button' as const },
    distinctUsersTrend: { strategy: 'role' as const, value: 'Distinct users trend', role: 'button', actionKind: 'button' as const },
    adoptionOpportunities: { strategy: 'role' as const, value: 'Adoption opportunities', role: 'button', actionKind: 'button' as const },
    adoptionOverview: { strategy: 'text' as const, value: 'Adoption overview', actionKind: 'text' as const },
    fY26AccountAdoption: { strategy: 'text' as const, value: 'FY26 Account Adoption', actionKind: 'text' as const },
    element: { strategy: 'text' as const, value: '88%', actionKind: 'text' as const },
    yoY: { strategy: 'text' as const, value: '↑ 25.7% YoY', actionKind: 'text' as const },
    activeProductModules: { strategy: 'text' as const, value: 'Active Product Modules', actionKind: 'text' as const },
    productsActiveInFY26: { strategy: 'text' as const, value: 'Products active in FY26', actionKind: 'text' as const },
    avgMonthlyUsers: { strategy: 'text' as const, value: 'Avg Monthly Users', actionKind: 'text' as const },
    element2: { strategy: 'text' as const, value: '28,450', actionKind: 'text' as const },
    acrossAllProducts: { strategy: 'text' as const, value: 'Across all products · FY26', actionKind: 'text' as const },
    yoYAdoptionGrowth: { strategy: 'text' as const, value: 'YoY Adoption Growth', actionKind: 'text' as const },
    element3: { strategy: 'text' as const, value: '+25.7%', actionKind: 'text' as const },
    ukgAvg257: { strategy: 'text' as const, value: 'UKG avg ↑ 25.7%', actionKind: 'text' as const },
    adoptionMetrics: { strategy: 'role' as const, value: 'Adoption Metrics', role: 'button', actionKind: 'button' as const },
    userEngagement: { strategy: 'role' as const, value: 'User Engagement', role: 'button', actionKind: 'button' as const },
    ukgBenchmarkVsAccount: { strategy: 'text' as const, value: 'UKG Benchmark vs Account Adoption — FY25 & FY26', actionKind: 'text' as const },
    ukgBenchmark: { strategy: 'text' as const, value: 'UKG Benchmark', actionKind: 'text' as const },
    fY25Adoption: { strategy: 'text' as const, value: 'FY25 Adoption', actionKind: 'text' as const },
    fY26Adoption: { strategy: 'text' as const, value: 'FY26 Adoption', actionKind: 'text' as const },
    product: { strategy: 'text' as const, value: 'Product', actionKind: 'text' as const },
    element4: { strategy: 'text' as const, value: '0%', actionKind: 'text' as const },
    element5: { strategy: 'text' as const, value: '25%', actionKind: 'text' as const },
    element6: { strategy: 'text' as const, value: '50%', actionKind: 'text' as const },
    element7: { strategy: 'text' as const, value: '75%', actionKind: 'text' as const },
    element8: { strategy: 'text' as const, value: '100%', actionKind: 'text' as const },
    ukgDimensionsCoreAnalytics: { strategy: 'text' as const, value: 'UKG Dimensions Core Analytics', actionKind: 'text' as const },
    element10: { strategy: 'text' as const, value: '90%', actionKind: 'text' as const },
    ukgDimensionsScheduling: { strategy: 'text' as const, value: 'UKG Dimensions Scheduling', actionKind: 'text' as const },
    element13: { strategy: 'text' as const, value: '36%', actionKind: 'text' as const },
    element15: { strategy: 'text' as const, value: '20%', actionKind: 'text' as const },
    ukgDimensionsCompliance: { strategy: 'text' as const, value: 'UKG Dimensions Compliance', actionKind: 'text' as const },
    element17: { strategy: 'text' as const, value: '77%', actionKind: 'text' as const },
    element18: { strategy: 'text' as const, value: '79%', actionKind: 'text' as const },
    ukgReadyPayrollBenefits: { strategy: 'text' as const, value: 'UKG Ready Payroll Benefits', actionKind: 'text' as const },
    ukgReadyTime: { strategy: 'text' as const, value: 'UKG Ready Time', actionKind: 'text' as const },
    coreProductAdoptionTrend: { strategy: 'text' as const, value: 'Core Product Adoption Trend - Monthly', actionKind: 'text' as const },
    productAdoptionFY25: { strategy: 'text' as const, value: 'Product Adoption — FY25 & FY26 vs UKG Benchmark', actionKind: 'text' as const },
    billedQuantityByMonth: { strategy: 'text' as const, value: 'Billed Quantity by Month', actionKind: 'text' as const },
    minQuantity: { strategy: 'text' as const, value: 'Min Quantity', actionKind: 'text' as const },
    billedQuantity: { strategy: 'text' as const, value: 'Billed Quantity', actionKind: 'text' as const },
    peerComparison: { strategy: 'text' as const, value: 'Peer Comparison', actionKind: 'text' as const },
    overallRanking: { strategy: 'text' as const, value: 'Overall Ranking', actionKind: 'text' as const },
    top20: { strategy: 'text' as const, value: 'Top 20%', actionKind: 'text' as const },
    enterprisePeersIndustry: { strategy: 'text' as const, value: 'Enterprise peers · Industry + Size', actionKind: 'text' as const },
    productsVsPeerAvg: { strategy: 'text' as const, value: 'Products vs Peer Avg', actionKind: 'text' as const },
    top10: { strategy: 'text' as const, value: 'Top 10%', actionKind: 'text' as const },
    pts: { strategy: 'text' as const, value: '↑ 10% pts', actionKind: 'text' as const },
    top25: { strategy: 'text' as const, value: 'Top 25%', actionKind: 'text' as const },
    pts4: { strategy: 'text' as const, value: '↓ 2% pts', actionKind: 'text' as const },
    bottom25: { strategy: 'text' as const, value: 'Bottom 25%', actionKind: 'text' as const },
    pts5: { strategy: 'text' as const, value: '↓ 13% pts', actionKind: 'text' as const },
    adoptionSummary: { strategy: 'text' as const, value: 'Adoption Summary', actionKind: 'text' as const },
    element34: { strategy: 'text' as const, value: '70%', actionKind: 'text' as const },
    yoYGrowth: { strategy: 'text' as const, value: 'YoY Growth', actionKind: 'text' as const },
    activeProducts: { strategy: 'text' as const, value: 'Active Products', actionKind: 'text' as const },
    element36: { strategy: 'text' as const, value: '6/6', actionKind: 'text' as const },
    topDriver: { strategy: 'text' as const, value: 'Top Driver', actionKind: 'text' as const },
    dimensionCore: { strategy: 'text' as const, value: 'Dimension Core', actionKind: 'text' as const },
    desktopMobile: { strategy: 'text' as const, value: 'Desktop / Mobile', actionKind: 'text' as const },
    element38: { strategy: 'text' as const, value: '68% / 32%', actionKind: 'text' as const },
    billedQty: { strategy: 'text' as const, value: 'Billed Qty', actionKind: 'text' as const },
    element39: { strategy: 'text' as const, value: '32,500', actionKind: 'text' as const },
    minContracted: { strategy: 'text' as const, value: 'Min Contracted', actionKind: 'text' as const },
    element40: { strategy: 'text' as const, value: '30,000', actionKind: 'text' as const },
  } as const;

  readonly minW640px1: WebTable; // columns: ["Product", "UKG Benchmark", "FY25 Adoption", "FY26 Adoption", "Licenses", "Avg monthly users"]

  constructor(private readonly page: Page) {
    this.minW640px1 = webTable(this.page, 'table');
  }

  async getInnerTextAtlasInsightsAdoption(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption));
  }

  async expectAtlasInsightsAdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), timeoutMs);
  }

  async expectAtlasInsightsAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), timeoutMs);
  }

  async expectAtlasInsightsAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), expected, timeoutMs);
  }

  async expectAtlasInsightsAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), substring, timeoutMs);
  }

  async scrollAtlasInsightsAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption));
  }

  async clickVsUkgBenchmarks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.vsUkgBenchmarks));
  }

  async doubleClickVsUkgBenchmarks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.vsUkgBenchmarks));
  }

  async expectVsUkgBenchmarksVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.vsUkgBenchmarks), timeoutMs);
  }

  async expectVsUkgBenchmarksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.vsUkgBenchmarks), timeoutMs);
  }

  async expectVsUkgBenchmarksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.vsUkgBenchmarks), timeoutMs);
  }

  async expectVsUkgBenchmarksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.vsUkgBenchmarks), timeoutMs);
  }

  async expectVsUkgBenchmarksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.vsUkgBenchmarks), expected, timeoutMs);
  }

  async expectVsUkgBenchmarksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.vsUkgBenchmarks), substring, timeoutMs);
  }

  async scrollVsUkgBenchmarksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.vsUkgBenchmarks));
  }

  async clickPerProductAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.perProductAdoption));
  }

  async doubleClickPerProductAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.perProductAdoption));
  }

  async expectPerProductAdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.perProductAdoption), timeoutMs);
  }

  async expectPerProductAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.perProductAdoption), timeoutMs);
  }

  async expectPerProductAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.perProductAdoption), timeoutMs);
  }

  async expectPerProductAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.perProductAdoption), timeoutMs);
  }

  async expectPerProductAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.perProductAdoption), expected, timeoutMs);
  }

  async expectPerProductAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.perProductAdoption), substring, timeoutMs);
  }

  async scrollPerProductAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.perProductAdoption));
  }

  async clickDistinctUsersTrend(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.distinctUsersTrend));
  }

  async doubleClickDistinctUsersTrend(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.distinctUsersTrend));
  }

  async expectDistinctUsersTrendVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), timeoutMs);
  }

  async expectDistinctUsersTrendHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), timeoutMs);
  }

  async expectDistinctUsersTrendEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), timeoutMs);
  }

  async expectDistinctUsersTrendDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), timeoutMs);
  }

  async expectDistinctUsersTrendText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), expected, timeoutMs);
  }

  async expectDistinctUsersTrendContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), substring, timeoutMs);
  }

  async scrollDistinctUsersTrendIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.distinctUsersTrend));
  }

  async clickAdoptionOpportunities(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionOpportunities));
  }

  async doubleClickAdoptionOpportunities(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionOpportunities));
  }

  async expectAdoptionOpportunitiesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), timeoutMs);
  }

  async expectAdoptionOpportunitiesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), timeoutMs);
  }

  async expectAdoptionOpportunitiesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), timeoutMs);
  }

  async expectAdoptionOpportunitiesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), timeoutMs);
  }

  async expectAdoptionOpportunitiesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), expected, timeoutMs);
  }

  async expectAdoptionOpportunitiesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), substring, timeoutMs);
  }

  async scrollAdoptionOpportunitiesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionOpportunities));
  }

  async getInnerTextAdoptionOverview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionOverview));
  }

  async expectAdoptionOverviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.adoptionOverview), timeoutMs);
  }

  async expectAdoptionOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.adoptionOverview), timeoutMs);
  }

  async expectAdoptionOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.adoptionOverview), expected, timeoutMs);
  }

  async expectAdoptionOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.adoptionOverview), substring, timeoutMs);
  }

  async scrollAdoptionOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionOverview));
  }

  async getInnerTextFY26AccountAdoption(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption));
  }

  async expectFY26AccountAdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), timeoutMs);
  }

  async expectFY26AccountAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), timeoutMs);
  }

  async expectFY26AccountAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), expected, timeoutMs);
  }

  async expectFY26AccountAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), substring, timeoutMs);
  }

  async scrollFY26AccountAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption));
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element), timeoutMs);
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element), substring, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element));
  }

  async getInnerTextYoY(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.yoY));
  }

  async expectYoYVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.yoY), timeoutMs);
  }

  async expectYoYHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.yoY), timeoutMs);
  }

  async expectYoYText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.yoY), expected, timeoutMs);
  }

  async expectYoYContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.yoY), substring, timeoutMs);
  }

  async scrollYoYIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.yoY));
  }

  async getInnerTextActiveProductModules(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.activeProductModules));
  }

  async expectActiveProductModulesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.activeProductModules), timeoutMs);
  }

  async expectActiveProductModulesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.activeProductModules), timeoutMs);
  }

  async expectActiveProductModulesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.activeProductModules), expected, timeoutMs);
  }

  async expectActiveProductModulesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.activeProductModules), substring, timeoutMs);
  }

  async scrollActiveProductModulesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.activeProductModules));
  }

  async getInnerTextProductsActiveInFY26(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.productsActiveInFY26));
  }

  async expectProductsActiveInFY26Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), timeoutMs);
  }

  async expectProductsActiveInFY26Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), timeoutMs);
  }

  async expectProductsActiveInFY26Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), expected, timeoutMs);
  }

  async expectProductsActiveInFY26ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), substring, timeoutMs);
  }

  async scrollProductsActiveInFY26IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.productsActiveInFY26));
  }

  async getInnerTextAvgMonthlyUsers(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers));
  }

  async expectAvgMonthlyUsersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), timeoutMs);
  }

  async expectAvgMonthlyUsersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), timeoutMs);
  }

  async expectAvgMonthlyUsersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), expected, timeoutMs);
  }

  async expectAvgMonthlyUsersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), substring, timeoutMs);
  }

  async scrollAvgMonthlyUsersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers));
  }

  async getInnerTextElement2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element2));
  }

  async expectElement2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element2), timeoutMs);
  }

  async expectElement2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element2), timeoutMs);
  }

  async expectElement2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element2), expected, timeoutMs);
  }

  async expectElement2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element2), substring, timeoutMs);
  }

  async scrollElement2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element2));
  }

  async getInnerTextAcrossAllProducts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.acrossAllProducts));
  }

  async expectAcrossAllProductsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.acrossAllProducts), timeoutMs);
  }

  async expectAcrossAllProductsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.acrossAllProducts), timeoutMs);
  }

  async expectAcrossAllProductsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.acrossAllProducts), expected, timeoutMs);
  }

  async expectAcrossAllProductsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.acrossAllProducts), substring, timeoutMs);
  }

  async scrollAcrossAllProductsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.acrossAllProducts));
  }

  async getInnerTextYoYAdoptionGrowth(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth));
  }

  async expectYoYAdoptionGrowthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), timeoutMs);
  }

  async expectYoYAdoptionGrowthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), timeoutMs);
  }

  async expectYoYAdoptionGrowthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), expected, timeoutMs);
  }

  async expectYoYAdoptionGrowthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), substring, timeoutMs);
  }

  async scrollYoYAdoptionGrowthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth));
  }

  async getInnerTextElement3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element3));
  }

  async expectElement3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element3), timeoutMs);
  }

  async expectElement3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element3), timeoutMs);
  }

  async expectElement3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element3), expected, timeoutMs);
  }

  async expectElement3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element3), substring, timeoutMs);
  }

  async scrollElement3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element3));
  }

  async getInnerTextUkgAvg257(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.ukgAvg257));
  }

  async expectUkgAvg257Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.ukgAvg257), timeoutMs);
  }

  async expectUkgAvg257Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.ukgAvg257), timeoutMs);
  }

  async expectUkgAvg257Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.ukgAvg257), expected, timeoutMs);
  }

  async expectUkgAvg257ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.ukgAvg257), substring, timeoutMs);
  }

  async scrollUkgAvg257IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.ukgAvg257));
  }

  async clickAdoptionMetrics(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionMetrics));
  }

  async doubleClickAdoptionMetrics(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionMetrics));
  }

  async expectAdoptionMetricsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.adoptionMetrics), timeoutMs);
  }

  async expectAdoptionMetricsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.adoptionMetrics), timeoutMs);
  }

  async expectAdoptionMetricsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.adoptionMetrics), timeoutMs);
  }

  async expectAdoptionMetricsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.adoptionMetrics), timeoutMs);
  }

  async expectAdoptionMetricsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.adoptionMetrics), expected, timeoutMs);
  }

  async expectAdoptionMetricsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.adoptionMetrics), substring, timeoutMs);
  }

  async scrollAdoptionMetricsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionMetrics));
  }

  async clickUserEngagement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.userEngagement));
  }

  async doubleClickUserEngagement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.userEngagement));
  }

  async expectUserEngagementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.userEngagement), timeoutMs);
  }

  async expectUserEngagementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.userEngagement), timeoutMs);
  }

  async expectUserEngagementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.userEngagement), timeoutMs);
  }

  async expectUserEngagementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.userEngagement), timeoutMs);
  }

  async expectUserEngagementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.userEngagement), expected, timeoutMs);
  }

  async expectUserEngagementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.userEngagement), substring, timeoutMs);
  }

  async scrollUserEngagementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.userEngagement));
  }

  async getInnerTextUkgBenchmarkVsAccount(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.ukgBenchmarkVsAccount));
  }

  async expectUkgBenchmarkVsAccountVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.ukgBenchmarkVsAccount), timeoutMs);
  }

  async expectUkgBenchmarkVsAccountHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.ukgBenchmarkVsAccount), timeoutMs);
  }

  async expectUkgBenchmarkVsAccountText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.ukgBenchmarkVsAccount), expected, timeoutMs);
  }

  async expectUkgBenchmarkVsAccountContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.ukgBenchmarkVsAccount), substring, timeoutMs);
  }

  async scrollUkgBenchmarkVsAccountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.ukgBenchmarkVsAccount));
  }

  async getInnerTextUkgBenchmark(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.ukgBenchmark));
  }

  async expectUkgBenchmarkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.ukgBenchmark), timeoutMs);
  }

  async expectUkgBenchmarkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.ukgBenchmark), timeoutMs);
  }

  async expectUkgBenchmarkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.ukgBenchmark), expected, timeoutMs);
  }

  async expectUkgBenchmarkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.ukgBenchmark), substring, timeoutMs);
  }

  async scrollUkgBenchmarkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.ukgBenchmark));
  }

  async getInnerTextFY25Adoption(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption));
  }

  async expectFY25AdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption), timeoutMs);
  }

  async expectFY25AdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.fY25Adoption), timeoutMs);
  }

  async expectFY25AdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.fY25Adoption), expected, timeoutMs);
  }

  async expectFY25AdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.fY25Adoption), substring, timeoutMs);
  }

  async scrollFY25AdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption));
  }

  async getInnerTextFY26Adoption(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption));
  }

  async expectFY26AdoptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption), timeoutMs);
  }

  async expectFY26AdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.fY26Adoption), timeoutMs);
  }

  async expectFY26AdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.fY26Adoption), expected, timeoutMs);
  }

  async expectFY26AdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.fY26Adoption), substring, timeoutMs);
  }

  async scrollFY26AdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption));
  }

  async getInnerTextProduct(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.product));
  }

  async expectProductVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.product), timeoutMs);
  }

  async expectProductHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.product), timeoutMs);
  }

  async expectProductText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.product), expected, timeoutMs);
  }

  async expectProductContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.product), substring, timeoutMs);
  }

  async scrollProductIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.product));
  }

  async getInnerTextElement4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element4));
  }

  async expectElement4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element4), timeoutMs);
  }

  async expectElement4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element4), timeoutMs);
  }

  async expectElement4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element4), expected, timeoutMs);
  }

  async expectElement4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element4), substring, timeoutMs);
  }

  async scrollElement4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element4));
  }

  async getInnerTextElement5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element5));
  }

  async expectElement5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element5), timeoutMs);
  }

  async expectElement5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element5), timeoutMs);
  }

  async expectElement5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element5), expected, timeoutMs);
  }

  async expectElement5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element5), substring, timeoutMs);
  }

  async scrollElement5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element5));
  }

  async getInnerTextElement6(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element6));
  }

  async expectElement6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element6), timeoutMs);
  }

  async expectElement6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element6), timeoutMs);
  }

  async expectElement6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element6), expected, timeoutMs);
  }

  async expectElement6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element6), substring, timeoutMs);
  }

  async scrollElement6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element6));
  }

  async getInnerTextElement7(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element7));
  }

  async expectElement7Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element7), timeoutMs);
  }

  async expectElement7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element7), timeoutMs);
  }

  async expectElement7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element7), expected, timeoutMs);
  }

  async expectElement7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element7), substring, timeoutMs);
  }

  async scrollElement7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element7));
  }

  async getInnerTextElement8(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element8));
  }

  async expectElement8Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element8), timeoutMs);
  }

  async expectElement8Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element8), timeoutMs);
  }

  async expectElement8Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element8), expected, timeoutMs);
  }

  async expectElement8ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element8), substring, timeoutMs);
  }

  async scrollElement8IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element8));
  }

  async getInnerTextUkgDimensionsCoreAnalytics(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.ukgDimensionsCoreAnalytics));
  }

  async expectUkgDimensionsCoreAnalyticsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.ukgDimensionsCoreAnalytics), timeoutMs);
  }

  async expectUkgDimensionsCoreAnalyticsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.ukgDimensionsCoreAnalytics), timeoutMs);
  }

  async expectUkgDimensionsCoreAnalyticsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.ukgDimensionsCoreAnalytics), expected, timeoutMs);
  }

  async expectUkgDimensionsCoreAnalyticsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.ukgDimensionsCoreAnalytics), substring, timeoutMs);
  }

  async scrollUkgDimensionsCoreAnalyticsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.ukgDimensionsCoreAnalytics));
  }

  async getInnerTextElement10(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element10));
  }

  async expectElement10Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element10), timeoutMs);
  }

  async expectElement10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element10), timeoutMs);
  }

  async expectElement10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element10), expected, timeoutMs);
  }

  async expectElement10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element10), substring, timeoutMs);
  }

  async scrollElement10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element10));
  }

  async getInnerTextUkgDimensionsScheduling(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.ukgDimensionsScheduling));
  }

  async expectUkgDimensionsSchedulingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.ukgDimensionsScheduling), timeoutMs);
  }

  async expectUkgDimensionsSchedulingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.ukgDimensionsScheduling), timeoutMs);
  }

  async expectUkgDimensionsSchedulingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.ukgDimensionsScheduling), expected, timeoutMs);
  }

  async expectUkgDimensionsSchedulingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.ukgDimensionsScheduling), substring, timeoutMs);
  }

  async scrollUkgDimensionsSchedulingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.ukgDimensionsScheduling));
  }

  async getInnerTextElement13(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element13));
  }

  async expectElement13Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element13), timeoutMs);
  }

  async expectElement13Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element13), timeoutMs);
  }

  async expectElement13Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element13), expected, timeoutMs);
  }

  async expectElement13ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element13), substring, timeoutMs);
  }

  async scrollElement13IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element13));
  }

  async getInnerTextElement15(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element15));
  }

  async expectElement15Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element15), timeoutMs);
  }

  async expectElement15Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element15), timeoutMs);
  }

  async expectElement15Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element15), expected, timeoutMs);
  }

  async expectElement15ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element15), substring, timeoutMs);
  }

  async scrollElement15IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element15));
  }

  async getInnerTextUkgDimensionsCompliance(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.ukgDimensionsCompliance));
  }

  async expectUkgDimensionsComplianceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.ukgDimensionsCompliance), timeoutMs);
  }

  async expectUkgDimensionsComplianceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.ukgDimensionsCompliance), timeoutMs);
  }

  async expectUkgDimensionsComplianceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.ukgDimensionsCompliance), expected, timeoutMs);
  }

  async expectUkgDimensionsComplianceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.ukgDimensionsCompliance), substring, timeoutMs);
  }

  async scrollUkgDimensionsComplianceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.ukgDimensionsCompliance));
  }

  async getInnerTextElement17(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element17));
  }

  async expectElement17Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element17), timeoutMs);
  }

  async expectElement17Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element17), timeoutMs);
  }

  async expectElement17Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element17), expected, timeoutMs);
  }

  async expectElement17ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element17), substring, timeoutMs);
  }

  async scrollElement17IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element17));
  }

  async getInnerTextElement18(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element18));
  }

  async expectElement18Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element18), timeoutMs);
  }

  async expectElement18Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element18), timeoutMs);
  }

  async expectElement18Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element18), expected, timeoutMs);
  }

  async expectElement18ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element18), substring, timeoutMs);
  }

  async scrollElement18IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element18));
  }

  async getInnerTextUkgReadyPayrollBenefits(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.ukgReadyPayrollBenefits));
  }

  async expectUkgReadyPayrollBenefitsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.ukgReadyPayrollBenefits), timeoutMs);
  }

  async expectUkgReadyPayrollBenefitsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.ukgReadyPayrollBenefits), timeoutMs);
  }

  async expectUkgReadyPayrollBenefitsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.ukgReadyPayrollBenefits), expected, timeoutMs);
  }

  async expectUkgReadyPayrollBenefitsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.ukgReadyPayrollBenefits), substring, timeoutMs);
  }

  async scrollUkgReadyPayrollBenefitsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.ukgReadyPayrollBenefits));
  }

  async getInnerTextUkgReadyTime(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.ukgReadyTime));
  }

  async expectUkgReadyTimeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.ukgReadyTime), timeoutMs);
  }

  async expectUkgReadyTimeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.ukgReadyTime), timeoutMs);
  }

  async expectUkgReadyTimeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.ukgReadyTime), expected, timeoutMs);
  }

  async expectUkgReadyTimeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.ukgReadyTime), substring, timeoutMs);
  }

  async scrollUkgReadyTimeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.ukgReadyTime));
  }

  async getInnerTextCoreProductAdoptionTrend(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend));
  }

  async expectCoreProductAdoptionTrendVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), timeoutMs);
  }

  async expectCoreProductAdoptionTrendHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), timeoutMs);
  }

  async expectCoreProductAdoptionTrendText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), expected, timeoutMs);
  }

  async expectCoreProductAdoptionTrendContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), substring, timeoutMs);
  }

  async scrollCoreProductAdoptionTrendIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend));
  }

  async getInnerTextProductAdoptionFY25(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.productAdoptionFY25));
  }

  async expectProductAdoptionFY25Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), timeoutMs);
  }

  async expectProductAdoptionFY25Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), timeoutMs);
  }

  async expectProductAdoptionFY25Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), expected, timeoutMs);
  }

  async expectProductAdoptionFY25ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), substring, timeoutMs);
  }

  async scrollProductAdoptionFY25IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.productAdoptionFY25));
  }

  async getInnerTextBilledQuantityByMonth(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth));
  }

  async expectBilledQuantityByMonthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), timeoutMs);
  }

  async expectBilledQuantityByMonthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), timeoutMs);
  }

  async expectBilledQuantityByMonthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), expected, timeoutMs);
  }

  async expectBilledQuantityByMonthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), substring, timeoutMs);
  }

  async scrollBilledQuantityByMonthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth));
  }

  async getInnerTextMinQuantity(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.minQuantity));
  }

  async expectMinQuantityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.minQuantity), timeoutMs);
  }

  async expectMinQuantityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.minQuantity), timeoutMs);
  }

  async expectMinQuantityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.minQuantity), expected, timeoutMs);
  }

  async expectMinQuantityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.minQuantity), substring, timeoutMs);
  }

  async scrollMinQuantityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.minQuantity));
  }

  async getInnerTextBilledQuantity(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantity));
  }

  async expectBilledQuantityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.billedQuantity), timeoutMs);
  }

  async expectBilledQuantityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.billedQuantity), timeoutMs);
  }

  async expectBilledQuantityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.billedQuantity), expected, timeoutMs);
  }

  async expectBilledQuantityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.billedQuantity), substring, timeoutMs);
  }

  async scrollBilledQuantityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantity));
  }

  async getInnerTextPeerComparison(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.peerComparison));
  }

  async expectPeerComparisonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.peerComparison), timeoutMs);
  }

  async expectPeerComparisonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.peerComparison), timeoutMs);
  }

  async expectPeerComparisonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.peerComparison), expected, timeoutMs);
  }

  async expectPeerComparisonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.peerComparison), substring, timeoutMs);
  }

  async scrollPeerComparisonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.peerComparison));
  }

  async getInnerTextOverallRanking(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.overallRanking));
  }

  async expectOverallRankingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.overallRanking), timeoutMs);
  }

  async expectOverallRankingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.overallRanking), timeoutMs);
  }

  async expectOverallRankingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.overallRanking), expected, timeoutMs);
  }

  async expectOverallRankingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.overallRanking), substring, timeoutMs);
  }

  async scrollOverallRankingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.overallRanking));
  }

  async getInnerTextTop20(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.top20));
  }

  async expectTop20Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.top20), timeoutMs);
  }

  async expectTop20Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.top20), timeoutMs);
  }

  async expectTop20Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.top20), expected, timeoutMs);
  }

  async expectTop20ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.top20), substring, timeoutMs);
  }

  async scrollTop20IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.top20));
  }

  async getInnerTextEnterprisePeersIndustry(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry));
  }

  async expectEnterprisePeersIndustryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), timeoutMs);
  }

  async expectEnterprisePeersIndustryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), timeoutMs);
  }

  async expectEnterprisePeersIndustryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), expected, timeoutMs);
  }

  async expectEnterprisePeersIndustryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), substring, timeoutMs);
  }

  async scrollEnterprisePeersIndustryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry));
  }

  async getInnerTextProductsVsPeerAvg(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg));
  }

  async expectProductsVsPeerAvgVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), timeoutMs);
  }

  async expectProductsVsPeerAvgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), timeoutMs);
  }

  async expectProductsVsPeerAvgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), expected, timeoutMs);
  }

  async expectProductsVsPeerAvgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), substring, timeoutMs);
  }

  async scrollProductsVsPeerAvgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg));
  }

  async getInnerTextTop10(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.top10));
  }

  async expectTop10Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.top10), timeoutMs);
  }

  async expectTop10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.top10), timeoutMs);
  }

  async expectTop10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.top10), expected, timeoutMs);
  }

  async expectTop10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.top10), substring, timeoutMs);
  }

  async scrollTop10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.top10));
  }

  async getInnerTextPts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.pts));
  }

  async expectPtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.pts), timeoutMs);
  }

  async expectPtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.pts), timeoutMs);
  }

  async expectPtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.pts), expected, timeoutMs);
  }

  async expectPtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.pts), substring, timeoutMs);
  }

  async scrollPtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.pts));
  }

  async getInnerTextTop25(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.top25));
  }

  async expectTop25Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.top25), timeoutMs);
  }

  async expectTop25Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.top25), timeoutMs);
  }

  async expectTop25Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.top25), expected, timeoutMs);
  }

  async expectTop25ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.top25), substring, timeoutMs);
  }

  async scrollTop25IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.top25));
  }

  async getInnerTextPts4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.pts4));
  }

  async expectPts4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.pts4), timeoutMs);
  }

  async expectPts4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.pts4), timeoutMs);
  }

  async expectPts4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.pts4), expected, timeoutMs);
  }

  async expectPts4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.pts4), substring, timeoutMs);
  }

  async scrollPts4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.pts4));
  }

  async getInnerTextBottom25(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.bottom25));
  }

  async expectBottom25Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.bottom25), timeoutMs);
  }

  async expectBottom25Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.bottom25), timeoutMs);
  }

  async expectBottom25Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.bottom25), expected, timeoutMs);
  }

  async expectBottom25ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.bottom25), substring, timeoutMs);
  }

  async scrollBottom25IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.bottom25));
  }

  async getInnerTextPts5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.pts5));
  }

  async expectPts5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.pts5), timeoutMs);
  }

  async expectPts5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.pts5), timeoutMs);
  }

  async expectPts5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.pts5), expected, timeoutMs);
  }

  async expectPts5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.pts5), substring, timeoutMs);
  }

  async scrollPts5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.pts5));
  }

  async getInnerTextAdoptionSummary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionSummary));
  }

  async expectAdoptionSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.adoptionSummary), timeoutMs);
  }

  async expectAdoptionSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.adoptionSummary), timeoutMs);
  }

  async expectAdoptionSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.adoptionSummary), expected, timeoutMs);
  }

  async expectAdoptionSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.adoptionSummary), substring, timeoutMs);
  }

  async scrollAdoptionSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionSummary));
  }

  async getInnerTextElement34(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element34));
  }

  async expectElement34Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element34), timeoutMs);
  }

  async expectElement34Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element34), timeoutMs);
  }

  async expectElement34Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element34), expected, timeoutMs);
  }

  async expectElement34ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element34), substring, timeoutMs);
  }

  async scrollElement34IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element34));
  }

  async getInnerTextYoYGrowth(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.yoYGrowth));
  }

  async expectYoYGrowthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.yoYGrowth), timeoutMs);
  }

  async expectYoYGrowthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.yoYGrowth), timeoutMs);
  }

  async expectYoYGrowthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.yoYGrowth), expected, timeoutMs);
  }

  async expectYoYGrowthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.yoYGrowth), substring, timeoutMs);
  }

  async scrollYoYGrowthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.yoYGrowth));
  }

  async getInnerTextActiveProducts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.activeProducts));
  }

  async expectActiveProductsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.activeProducts), timeoutMs);
  }

  async expectActiveProductsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.activeProducts), timeoutMs);
  }

  async expectActiveProductsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.activeProducts), expected, timeoutMs);
  }

  async expectActiveProductsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.activeProducts), substring, timeoutMs);
  }

  async scrollActiveProductsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.activeProducts));
  }

  async getInnerTextElement36(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element36));
  }

  async expectElement36Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element36), timeoutMs);
  }

  async expectElement36Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element36), timeoutMs);
  }

  async expectElement36Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element36), expected, timeoutMs);
  }

  async expectElement36ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element36), substring, timeoutMs);
  }

  async scrollElement36IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element36));
  }

  async getInnerTextTopDriver(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.topDriver));
  }

  async expectTopDriverVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.topDriver), timeoutMs);
  }

  async expectTopDriverHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.topDriver), timeoutMs);
  }

  async expectTopDriverText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.topDriver), expected, timeoutMs);
  }

  async expectTopDriverContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.topDriver), substring, timeoutMs);
  }

  async scrollTopDriverIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.topDriver));
  }

  async getInnerTextDimensionCore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.dimensionCore));
  }

  async expectDimensionCoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.dimensionCore), timeoutMs);
  }

  async expectDimensionCoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.dimensionCore), timeoutMs);
  }

  async expectDimensionCoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.dimensionCore), expected, timeoutMs);
  }

  async expectDimensionCoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.dimensionCore), substring, timeoutMs);
  }

  async scrollDimensionCoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.dimensionCore));
  }

  async getInnerTextDesktopMobile(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.desktopMobile));
  }

  async expectDesktopMobileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.desktopMobile), timeoutMs);
  }

  async expectDesktopMobileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.desktopMobile), timeoutMs);
  }

  async expectDesktopMobileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.desktopMobile), expected, timeoutMs);
  }

  async expectDesktopMobileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.desktopMobile), substring, timeoutMs);
  }

  async scrollDesktopMobileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.desktopMobile));
  }

  async getInnerTextElement38(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element38));
  }

  async expectElement38Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element38), timeoutMs);
  }

  async expectElement38Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element38), timeoutMs);
  }

  async expectElement38Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element38), expected, timeoutMs);
  }

  async expectElement38ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element38), substring, timeoutMs);
  }

  async scrollElement38IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element38));
  }

  async getInnerTextBilledQty(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.billedQty));
  }

  async expectBilledQtyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.billedQty), timeoutMs);
  }

  async expectBilledQtyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.billedQty), timeoutMs);
  }

  async expectBilledQtyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.billedQty), expected, timeoutMs);
  }

  async expectBilledQtyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.billedQty), substring, timeoutMs);
  }

  async scrollBilledQtyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.billedQty));
  }

  async getInnerTextElement39(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element39));
  }

  async expectElement39Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element39), timeoutMs);
  }

  async expectElement39Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element39), timeoutMs);
  }

  async expectElement39Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element39), expected, timeoutMs);
  }

  async expectElement39ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element39), substring, timeoutMs);
  }

  async scrollElement39IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element39));
  }

  async getInnerTextMinContracted(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.minContracted));
  }

  async expectMinContractedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.minContracted), timeoutMs);
  }

  async expectMinContractedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.minContracted), timeoutMs);
  }

  async expectMinContractedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.minContracted), expected, timeoutMs);
  }

  async expectMinContractedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.minContracted), substring, timeoutMs);
  }

  async scrollMinContractedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.minContracted));
  }

  async getInnerTextElement40(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AdoptionPage.L.element40));
  }

  async expectElement40Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AdoptionPage.L.element40), timeoutMs);
  }

  async expectElement40Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AdoptionPage.L.element40), timeoutMs);
  }

  async expectElement40Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AdoptionPage.L.element40), expected, timeoutMs);
  }

  async expectElement40ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AdoptionPage.L.element40), substring, timeoutMs);
  }

  async scrollElement40IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AdoptionPage.L.element40));
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

  // ── table ──────────────────────────────────────────────

  /** Text of any cell. row is 0-based; col is column name or 0-based index. */
  async getMinW640px1TableText(row: number, col: number | string): Promise<string> {
    return this.minW640px1.getText(row, col);
  }

  /** All text values for a column across every row. */
  async getMinW640px1TableColumn(col: number | string): Promise<string[]> {
    return this.minW640px1.getColumn(col);
  }

  /** All cell values for a row as { "Column Name": "value" }. */
  async getMinW640px1TableRowData(row: number): Promise<Record<string, string>> {
    return this.minW640px1.getRowData(row);
  }

  /** First row where col equals value (exact). Pass exact=false for contains match. */
  async findMinW640px1TableRow(col: number | string, value: string, exact = true): Promise<number> {
    return this.minW640px1.findRow(col, value, exact);
  }

  /** First row where any cell contains text (case-insensitive). */
  async findMinW640px1TableRowByText(text: string): Promise<number> {
    return this.minW640px1.findRowByText(text);
  }

  /** Total number of body rows. */
  async getMinW640px1TableRowCount(): Promise<number> {
    return this.minW640px1.rowCount();
  }

  /** Click the <a> link inside a cell. */
  async clickMinW640px1TableLink(row: number, col: number | string): Promise<void> {
    return this.minW640px1.clickLink(row, col);
  }

  /** href of the link inside a cell, or null if there is no link. */
  async getMinW640px1TableLinkHref(row: number, col: number | string): Promise<string | null> {
    const cell = await this.minW640px1.cell(row, col);
    const link = cell.locator('a');
    return (await link.count()) > 0 ? link.getAttribute('href') : null;
  }

  /** Check the row selection checkbox (idempotent). */
  async checkMinW640px1TableRow(row: number): Promise<void> {
    const cb = this.minW640px1.row(row).locator('input[type="checkbox"]').first();
    if (await cb.isChecked()) return;
    await cb.check({ force: true });
  }

  /** Uncheck the row selection checkbox (idempotent). */
  async uncheckMinW640px1TableRow(row: number): Promise<void> {
    const cb = this.minW640px1.row(row).locator('input[type="checkbox"]').first();
    if (!(await cb.isChecked())) return;
    await cb.uncheck({ force: true });
  }

  /** Whether the row selection checkbox is currently checked. */
  async isMinW640px1TableRowChecked(row: number): Promise<boolean> {
    return this.minW640px1.row(row).locator('input[type="checkbox"]').first().isChecked();
  }

  /** Current state of the toggle switch (role="switch") in the row — true = on/active. */
  async getMinW640px1TableSwitchState(row: number): Promise<boolean> {
    return this.minW640px1.getSwitchState(row);
  }

  /** Toggle the switch in a row. Pass targetState=true/false to set explicitly. */
  async toggleMinW640px1TableSwitch(row: number, targetState?: boolean): Promise<void> {
    return this.minW640px1.toggleSwitch(row, targetState);
  }

  /** Click a button in a row by optional label; omit label to click the last button (action menu). */
  async clickMinW640px1TableButton(row: number, label?: string): Promise<void> {
    return this.minW640px1.clickButton(row, label);
  }

  /** Click a named option inside an already-open row action dropdown. */
  async clickMinW640px1TableMenuOption(label: string): Promise<void> {
    return this.minW640px1.clickMenuOption(label);
  }

  /** Click a column header to sort. Call twice to reverse direction. */
  async sortMinW640px1TableBy(col: string): Promise<void> {
    return this.minW640px1.sortBy(col);
  }

  /** Locator for any element inside a row — toggles, buttons, custom controls. */
  getMinW640px1TableInRow(row: number, selector: string): Locator {
    return this.minW640px1.getInRow(row, selector);
  }


  async clickAtlasInsightsAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption));
  }

  async doubleClickAtlasInsightsAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption));
  }

  async longPressAtlasInsightsAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption));
  }

  async expectAtlasInsightsAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), value, timeoutMs);
  }

  async expectAtlasInsightsAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), timeoutMs);
  }

  async expectAtlasInsightsAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), timeoutMs);
  }

  async expectAtlasInsightsAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), timeoutMs);
  }

  async expectAtlasInsightsAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), timeoutMs);
  }

  async expectAtlasInsightsAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), timeoutMs);
  }

  async expectAtlasInsightsAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.atlasInsightsAdoption), count, timeoutMs);
  }

  async longPressVsUkgBenchmarks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.vsUkgBenchmarks));
  }

  async expectVsUkgBenchmarksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.vsUkgBenchmarks), value, timeoutMs);
  }

  async expectVsUkgBenchmarksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.vsUkgBenchmarks), timeoutMs);
  }

  async expectVsUkgBenchmarksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.vsUkgBenchmarks), timeoutMs);
  }

  async expectVsUkgBenchmarksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.vsUkgBenchmarks), timeoutMs);
  }

  async expectVsUkgBenchmarksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.vsUkgBenchmarks), count, timeoutMs);
  }

  async longPressPerProductAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.perProductAdoption));
  }

  async expectPerProductAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.perProductAdoption), value, timeoutMs);
  }

  async expectPerProductAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.perProductAdoption), timeoutMs);
  }

  async expectPerProductAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.perProductAdoption), timeoutMs);
  }

  async expectPerProductAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.perProductAdoption), timeoutMs);
  }

  async expectPerProductAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.perProductAdoption), count, timeoutMs);
  }

  async longPressDistinctUsersTrend(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.distinctUsersTrend));
  }

  async expectDistinctUsersTrendValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), value, timeoutMs);
  }

  async expectDistinctUsersTrendChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), timeoutMs);
  }

  async expectDistinctUsersTrendUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), timeoutMs);
  }

  async expectDistinctUsersTrendFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), timeoutMs);
  }

  async expectDistinctUsersTrendCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.distinctUsersTrend), count, timeoutMs);
  }

  async longPressAdoptionOpportunities(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionOpportunities));
  }

  async expectAdoptionOpportunitiesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), value, timeoutMs);
  }

  async expectAdoptionOpportunitiesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), timeoutMs);
  }

  async expectAdoptionOpportunitiesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), timeoutMs);
  }

  async expectAdoptionOpportunitiesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), timeoutMs);
  }

  async expectAdoptionOpportunitiesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.adoptionOpportunities), count, timeoutMs);
  }

  async clickAdoptionOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionOverview));
  }

  async doubleClickAdoptionOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionOverview));
  }

  async longPressAdoptionOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionOverview));
  }

  async expectAdoptionOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.adoptionOverview), value, timeoutMs);
  }

  async expectAdoptionOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.adoptionOverview), timeoutMs);
  }

  async expectAdoptionOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.adoptionOverview), timeoutMs);
  }

  async expectAdoptionOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.adoptionOverview), timeoutMs);
  }

  async expectAdoptionOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.adoptionOverview), timeoutMs);
  }

  async expectAdoptionOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.adoptionOverview), timeoutMs);
  }

  async expectAdoptionOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.adoptionOverview), count, timeoutMs);
  }

  async clickFY26AccountAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption));
  }

  async doubleClickFY26AccountAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption));
  }

  async longPressFY26AccountAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption));
  }

  async expectFY26AccountAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), value, timeoutMs);
  }

  async expectFY26AccountAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), timeoutMs);
  }

  async expectFY26AccountAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), timeoutMs);
  }

  async expectFY26AccountAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), timeoutMs);
  }

  async expectFY26AccountAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), timeoutMs);
  }

  async expectFY26AccountAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), timeoutMs);
  }

  async expectFY26AccountAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.fY26AccountAdoption), count, timeoutMs);
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element));
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element), count, timeoutMs);
  }

  async clickYoY(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.yoY));
  }

  async doubleClickYoY(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.yoY));
  }

  async longPressYoY(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.yoY));
  }

  async expectYoYValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.yoY), value, timeoutMs);
  }

  async expectYoYEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.yoY), timeoutMs);
  }

  async expectYoYDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.yoY), timeoutMs);
  }

  async expectYoYChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.yoY), timeoutMs);
  }

  async expectYoYUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.yoY), timeoutMs);
  }

  async expectYoYFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.yoY), timeoutMs);
  }

  async expectYoYCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.yoY), count, timeoutMs);
  }

  async clickActiveProductModules(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.activeProductModules));
  }

  async doubleClickActiveProductModules(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.activeProductModules));
  }

  async longPressActiveProductModules(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.activeProductModules));
  }

  async expectActiveProductModulesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.activeProductModules), value, timeoutMs);
  }

  async expectActiveProductModulesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.activeProductModules), timeoutMs);
  }

  async expectActiveProductModulesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.activeProductModules), timeoutMs);
  }

  async expectActiveProductModulesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.activeProductModules), timeoutMs);
  }

  async expectActiveProductModulesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.activeProductModules), timeoutMs);
  }

  async expectActiveProductModulesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.activeProductModules), timeoutMs);
  }

  async expectActiveProductModulesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.activeProductModules), count, timeoutMs);
  }

  async clickProductsActiveInFY26(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.productsActiveInFY26));
  }

  async doubleClickProductsActiveInFY26(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.productsActiveInFY26));
  }

  async longPressProductsActiveInFY26(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.productsActiveInFY26));
  }

  async expectProductsActiveInFY26Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), value, timeoutMs);
  }

  async expectProductsActiveInFY26Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), timeoutMs);
  }

  async expectProductsActiveInFY26Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), timeoutMs);
  }

  async expectProductsActiveInFY26Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), timeoutMs);
  }

  async expectProductsActiveInFY26Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), timeoutMs);
  }

  async expectProductsActiveInFY26Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), timeoutMs);
  }

  async expectProductsActiveInFY26Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.productsActiveInFY26), count, timeoutMs);
  }

  async clickAvgMonthlyUsers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers));
  }

  async doubleClickAvgMonthlyUsers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers));
  }

  async longPressAvgMonthlyUsers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers));
  }

  async expectAvgMonthlyUsersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), value, timeoutMs);
  }

  async expectAvgMonthlyUsersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), timeoutMs);
  }

  async expectAvgMonthlyUsersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), timeoutMs);
  }

  async expectAvgMonthlyUsersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), timeoutMs);
  }

  async expectAvgMonthlyUsersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), timeoutMs);
  }

  async expectAvgMonthlyUsersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), timeoutMs);
  }

  async expectAvgMonthlyUsersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.avgMonthlyUsers), count, timeoutMs);
  }

  async clickElement2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element2));
  }

  async doubleClickElement2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element2));
  }

  async longPressElement2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element2));
  }

  async expectElement2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element2), value, timeoutMs);
  }

  async expectElement2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element2), timeoutMs);
  }

  async expectElement2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element2), timeoutMs);
  }

  async expectElement2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element2), timeoutMs);
  }

  async expectElement2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element2), timeoutMs);
  }

  async expectElement2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element2), timeoutMs);
  }

  async expectElement2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element2), count, timeoutMs);
  }

  async clickAcrossAllProducts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.acrossAllProducts));
  }

  async doubleClickAcrossAllProducts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.acrossAllProducts));
  }

  async longPressAcrossAllProducts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.acrossAllProducts));
  }

  async expectAcrossAllProductsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.acrossAllProducts), value, timeoutMs);
  }

  async expectAcrossAllProductsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.acrossAllProducts), timeoutMs);
  }

  async expectAcrossAllProductsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.acrossAllProducts), timeoutMs);
  }

  async expectAcrossAllProductsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.acrossAllProducts), timeoutMs);
  }

  async expectAcrossAllProductsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.acrossAllProducts), timeoutMs);
  }

  async expectAcrossAllProductsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.acrossAllProducts), timeoutMs);
  }

  async expectAcrossAllProductsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.acrossAllProducts), count, timeoutMs);
  }

  async clickYoYAdoptionGrowth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth));
  }

  async doubleClickYoYAdoptionGrowth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth));
  }

  async longPressYoYAdoptionGrowth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth));
  }

  async expectYoYAdoptionGrowthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), value, timeoutMs);
  }

  async expectYoYAdoptionGrowthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), timeoutMs);
  }

  async expectYoYAdoptionGrowthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), timeoutMs);
  }

  async expectYoYAdoptionGrowthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), timeoutMs);
  }

  async expectYoYAdoptionGrowthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), timeoutMs);
  }

  async expectYoYAdoptionGrowthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), timeoutMs);
  }

  async expectYoYAdoptionGrowthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.yoYAdoptionGrowth), count, timeoutMs);
  }

  async clickElement3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element3));
  }

  async doubleClickElement3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element3));
  }

  async longPressElement3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element3));
  }

  async expectElement3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element3), value, timeoutMs);
  }

  async expectElement3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element3), timeoutMs);
  }

  async expectElement3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element3), timeoutMs);
  }

  async expectElement3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element3), timeoutMs);
  }

  async expectElement3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element3), timeoutMs);
  }

  async expectElement3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element3), timeoutMs);
  }

  async expectElement3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element3), count, timeoutMs);
  }

  async clickUkgAvg257(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.ukgAvg257));
  }

  async doubleClickUkgAvg257(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.ukgAvg257));
  }

  async longPressUkgAvg257(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.ukgAvg257));
  }

  async expectUkgAvg257Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.ukgAvg257), value, timeoutMs);
  }

  async expectUkgAvg257Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.ukgAvg257), timeoutMs);
  }

  async expectUkgAvg257Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.ukgAvg257), timeoutMs);
  }

  async expectUkgAvg257Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.ukgAvg257), timeoutMs);
  }

  async expectUkgAvg257Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.ukgAvg257), timeoutMs);
  }

  async expectUkgAvg257Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.ukgAvg257), timeoutMs);
  }

  async expectUkgAvg257Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.ukgAvg257), count, timeoutMs);
  }

  async longPressAdoptionMetrics(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionMetrics));
  }

  async expectAdoptionMetricsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.adoptionMetrics), value, timeoutMs);
  }

  async expectAdoptionMetricsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.adoptionMetrics), timeoutMs);
  }

  async expectAdoptionMetricsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.adoptionMetrics), timeoutMs);
  }

  async expectAdoptionMetricsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.adoptionMetrics), timeoutMs);
  }

  async expectAdoptionMetricsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.adoptionMetrics), count, timeoutMs);
  }

  async longPressUserEngagement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.userEngagement));
  }

  async expectUserEngagementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.userEngagement), value, timeoutMs);
  }

  async expectUserEngagementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.userEngagement), timeoutMs);
  }

  async expectUserEngagementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.userEngagement), timeoutMs);
  }

  async expectUserEngagementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.userEngagement), timeoutMs);
  }

  async expectUserEngagementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.userEngagement), count, timeoutMs);
  }

  async clickUkgBenchmarkVsAccount(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.ukgBenchmarkVsAccount));
  }

  async doubleClickUkgBenchmarkVsAccount(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.ukgBenchmarkVsAccount));
  }

  async longPressUkgBenchmarkVsAccount(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.ukgBenchmarkVsAccount));
  }

  async expectUkgBenchmarkVsAccountValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.ukgBenchmarkVsAccount), value, timeoutMs);
  }

  async expectUkgBenchmarkVsAccountEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.ukgBenchmarkVsAccount), timeoutMs);
  }

  async expectUkgBenchmarkVsAccountDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.ukgBenchmarkVsAccount), timeoutMs);
  }

  async expectUkgBenchmarkVsAccountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.ukgBenchmarkVsAccount), timeoutMs);
  }

  async expectUkgBenchmarkVsAccountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.ukgBenchmarkVsAccount), timeoutMs);
  }

  async expectUkgBenchmarkVsAccountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.ukgBenchmarkVsAccount), timeoutMs);
  }

  async expectUkgBenchmarkVsAccountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.ukgBenchmarkVsAccount), count, timeoutMs);
  }

  async clickUkgBenchmark(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.ukgBenchmark));
  }

  async doubleClickUkgBenchmark(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.ukgBenchmark));
  }

  async longPressUkgBenchmark(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.ukgBenchmark));
  }

  async expectUkgBenchmarkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.ukgBenchmark), value, timeoutMs);
  }

  async expectUkgBenchmarkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.ukgBenchmark), timeoutMs);
  }

  async expectUkgBenchmarkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.ukgBenchmark), timeoutMs);
  }

  async expectUkgBenchmarkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.ukgBenchmark), timeoutMs);
  }

  async expectUkgBenchmarkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.ukgBenchmark), timeoutMs);
  }

  async expectUkgBenchmarkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.ukgBenchmark), timeoutMs);
  }

  async expectUkgBenchmarkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.ukgBenchmark), count, timeoutMs);
  }

  async clickFY25Adoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption));
  }

  async doubleClickFY25Adoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption));
  }

  async longPressFY25Adoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.fY25Adoption));
  }

  async expectFY25AdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.fY25Adoption), value, timeoutMs);
  }

  async expectFY25AdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.fY25Adoption), timeoutMs);
  }

  async expectFY25AdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.fY25Adoption), timeoutMs);
  }

  async expectFY25AdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.fY25Adoption), timeoutMs);
  }

  async expectFY25AdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.fY25Adoption), timeoutMs);
  }

  async expectFY25AdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.fY25Adoption), timeoutMs);
  }

  async expectFY25AdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.fY25Adoption), count, timeoutMs);
  }

  async clickFY26Adoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption));
  }

  async doubleClickFY26Adoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption));
  }

  async longPressFY26Adoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.fY26Adoption));
  }

  async expectFY26AdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.fY26Adoption), value, timeoutMs);
  }

  async expectFY26AdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.fY26Adoption), timeoutMs);
  }

  async expectFY26AdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.fY26Adoption), timeoutMs);
  }

  async expectFY26AdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.fY26Adoption), timeoutMs);
  }

  async expectFY26AdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.fY26Adoption), timeoutMs);
  }

  async expectFY26AdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.fY26Adoption), timeoutMs);
  }

  async expectFY26AdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.fY26Adoption), count, timeoutMs);
  }

  async clickProduct(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.product));
  }

  async doubleClickProduct(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.product));
  }

  async longPressProduct(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.product));
  }

  async expectProductValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.product), value, timeoutMs);
  }

  async expectProductEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.product), timeoutMs);
  }

  async expectProductDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.product), timeoutMs);
  }

  async expectProductChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.product), timeoutMs);
  }

  async expectProductUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.product), timeoutMs);
  }

  async expectProductFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.product), timeoutMs);
  }

  async expectProductCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.product), count, timeoutMs);
  }

  async clickElement4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element4));
  }

  async doubleClickElement4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element4));
  }

  async longPressElement4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element4));
  }

  async expectElement4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element4), value, timeoutMs);
  }

  async expectElement4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element4), timeoutMs);
  }

  async expectElement4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element4), timeoutMs);
  }

  async expectElement4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element4), timeoutMs);
  }

  async expectElement4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element4), timeoutMs);
  }

  async expectElement4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element4), timeoutMs);
  }

  async expectElement4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element4), count, timeoutMs);
  }

  async clickElement5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element5));
  }

  async doubleClickElement5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element5));
  }

  async longPressElement5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element5));
  }

  async expectElement5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element5), value, timeoutMs);
  }

  async expectElement5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element5), timeoutMs);
  }

  async expectElement5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element5), timeoutMs);
  }

  async expectElement5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element5), timeoutMs);
  }

  async expectElement5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element5), timeoutMs);
  }

  async expectElement5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element5), timeoutMs);
  }

  async expectElement5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element5), count, timeoutMs);
  }

  async clickElement6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element6));
  }

  async doubleClickElement6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element6));
  }

  async longPressElement6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element6));
  }

  async expectElement6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element6), value, timeoutMs);
  }

  async expectElement6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element6), timeoutMs);
  }

  async expectElement6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element6), timeoutMs);
  }

  async expectElement6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element6), timeoutMs);
  }

  async expectElement6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element6), timeoutMs);
  }

  async expectElement6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element6), timeoutMs);
  }

  async expectElement6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element6), count, timeoutMs);
  }

  async clickElement7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element7));
  }

  async doubleClickElement7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element7));
  }

  async longPressElement7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element7));
  }

  async expectElement7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element7), value, timeoutMs);
  }

  async expectElement7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element7), timeoutMs);
  }

  async expectElement7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element7), timeoutMs);
  }

  async expectElement7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element7), timeoutMs);
  }

  async expectElement7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element7), timeoutMs);
  }

  async expectElement7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element7), timeoutMs);
  }

  async expectElement7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element7), count, timeoutMs);
  }

  async clickElement8(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element8));
  }

  async doubleClickElement8(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element8));
  }

  async longPressElement8(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element8));
  }

  async expectElement8Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element8), value, timeoutMs);
  }

  async expectElement8Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element8), timeoutMs);
  }

  async expectElement8Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element8), timeoutMs);
  }

  async expectElement8Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element8), timeoutMs);
  }

  async expectElement8Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element8), timeoutMs);
  }

  async expectElement8Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element8), timeoutMs);
  }

  async expectElement8Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element8), count, timeoutMs);
  }

  async clickUkgDimensionsCoreAnalytics(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.ukgDimensionsCoreAnalytics));
  }

  async doubleClickUkgDimensionsCoreAnalytics(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.ukgDimensionsCoreAnalytics));
  }

  async longPressUkgDimensionsCoreAnalytics(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.ukgDimensionsCoreAnalytics));
  }

  async expectUkgDimensionsCoreAnalyticsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.ukgDimensionsCoreAnalytics), value, timeoutMs);
  }

  async expectUkgDimensionsCoreAnalyticsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.ukgDimensionsCoreAnalytics), timeoutMs);
  }

  async expectUkgDimensionsCoreAnalyticsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.ukgDimensionsCoreAnalytics), timeoutMs);
  }

  async expectUkgDimensionsCoreAnalyticsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.ukgDimensionsCoreAnalytics), timeoutMs);
  }

  async expectUkgDimensionsCoreAnalyticsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.ukgDimensionsCoreAnalytics), timeoutMs);
  }

  async expectUkgDimensionsCoreAnalyticsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.ukgDimensionsCoreAnalytics), timeoutMs);
  }

  async expectUkgDimensionsCoreAnalyticsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.ukgDimensionsCoreAnalytics), count, timeoutMs);
  }

  async clickElement10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element10));
  }

  async doubleClickElement10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element10));
  }

  async longPressElement10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element10));
  }

  async expectElement10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element10), value, timeoutMs);
  }

  async expectElement10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element10), timeoutMs);
  }

  async expectElement10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element10), timeoutMs);
  }

  async expectElement10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element10), timeoutMs);
  }

  async expectElement10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element10), timeoutMs);
  }

  async expectElement10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element10), timeoutMs);
  }

  async expectElement10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element10), count, timeoutMs);
  }

  async clickUkgDimensionsScheduling(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.ukgDimensionsScheduling));
  }

  async doubleClickUkgDimensionsScheduling(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.ukgDimensionsScheduling));
  }

  async longPressUkgDimensionsScheduling(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.ukgDimensionsScheduling));
  }

  async expectUkgDimensionsSchedulingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.ukgDimensionsScheduling), value, timeoutMs);
  }

  async expectUkgDimensionsSchedulingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.ukgDimensionsScheduling), timeoutMs);
  }

  async expectUkgDimensionsSchedulingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.ukgDimensionsScheduling), timeoutMs);
  }

  async expectUkgDimensionsSchedulingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.ukgDimensionsScheduling), timeoutMs);
  }

  async expectUkgDimensionsSchedulingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.ukgDimensionsScheduling), timeoutMs);
  }

  async expectUkgDimensionsSchedulingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.ukgDimensionsScheduling), timeoutMs);
  }

  async expectUkgDimensionsSchedulingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.ukgDimensionsScheduling), count, timeoutMs);
  }

  async clickElement13(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element13));
  }

  async doubleClickElement13(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element13));
  }

  async longPressElement13(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element13));
  }

  async expectElement13Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element13), value, timeoutMs);
  }

  async expectElement13Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element13), timeoutMs);
  }

  async expectElement13Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element13), timeoutMs);
  }

  async expectElement13Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element13), timeoutMs);
  }

  async expectElement13Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element13), timeoutMs);
  }

  async expectElement13Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element13), timeoutMs);
  }

  async expectElement13Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element13), count, timeoutMs);
  }

  async clickElement15(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element15));
  }

  async doubleClickElement15(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element15));
  }

  async longPressElement15(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element15));
  }

  async expectElement15Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element15), value, timeoutMs);
  }

  async expectElement15Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element15), timeoutMs);
  }

  async expectElement15Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element15), timeoutMs);
  }

  async expectElement15Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element15), timeoutMs);
  }

  async expectElement15Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element15), timeoutMs);
  }

  async expectElement15Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element15), timeoutMs);
  }

  async expectElement15Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element15), count, timeoutMs);
  }

  async clickUkgDimensionsCompliance(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.ukgDimensionsCompliance));
  }

  async doubleClickUkgDimensionsCompliance(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.ukgDimensionsCompliance));
  }

  async longPressUkgDimensionsCompliance(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.ukgDimensionsCompliance));
  }

  async expectUkgDimensionsComplianceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.ukgDimensionsCompliance), value, timeoutMs);
  }

  async expectUkgDimensionsComplianceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.ukgDimensionsCompliance), timeoutMs);
  }

  async expectUkgDimensionsComplianceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.ukgDimensionsCompliance), timeoutMs);
  }

  async expectUkgDimensionsComplianceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.ukgDimensionsCompliance), timeoutMs);
  }

  async expectUkgDimensionsComplianceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.ukgDimensionsCompliance), timeoutMs);
  }

  async expectUkgDimensionsComplianceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.ukgDimensionsCompliance), timeoutMs);
  }

  async expectUkgDimensionsComplianceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.ukgDimensionsCompliance), count, timeoutMs);
  }

  async clickElement17(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element17));
  }

  async doubleClickElement17(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element17));
  }

  async longPressElement17(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element17));
  }

  async expectElement17Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element17), value, timeoutMs);
  }

  async expectElement17Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element17), timeoutMs);
  }

  async expectElement17Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element17), timeoutMs);
  }

  async expectElement17Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element17), timeoutMs);
  }

  async expectElement17Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element17), timeoutMs);
  }

  async expectElement17Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element17), timeoutMs);
  }

  async expectElement17Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element17), count, timeoutMs);
  }

  async clickElement18(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element18));
  }

  async doubleClickElement18(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element18));
  }

  async longPressElement18(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element18));
  }

  async expectElement18Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element18), value, timeoutMs);
  }

  async expectElement18Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element18), timeoutMs);
  }

  async expectElement18Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element18), timeoutMs);
  }

  async expectElement18Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element18), timeoutMs);
  }

  async expectElement18Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element18), timeoutMs);
  }

  async expectElement18Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element18), timeoutMs);
  }

  async expectElement18Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element18), count, timeoutMs);
  }

  async clickUkgReadyPayrollBenefits(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.ukgReadyPayrollBenefits));
  }

  async doubleClickUkgReadyPayrollBenefits(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.ukgReadyPayrollBenefits));
  }

  async longPressUkgReadyPayrollBenefits(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.ukgReadyPayrollBenefits));
  }

  async expectUkgReadyPayrollBenefitsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.ukgReadyPayrollBenefits), value, timeoutMs);
  }

  async expectUkgReadyPayrollBenefitsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.ukgReadyPayrollBenefits), timeoutMs);
  }

  async expectUkgReadyPayrollBenefitsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.ukgReadyPayrollBenefits), timeoutMs);
  }

  async expectUkgReadyPayrollBenefitsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.ukgReadyPayrollBenefits), timeoutMs);
  }

  async expectUkgReadyPayrollBenefitsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.ukgReadyPayrollBenefits), timeoutMs);
  }

  async expectUkgReadyPayrollBenefitsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.ukgReadyPayrollBenefits), timeoutMs);
  }

  async expectUkgReadyPayrollBenefitsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.ukgReadyPayrollBenefits), count, timeoutMs);
  }

  async clickUkgReadyTime(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.ukgReadyTime));
  }

  async doubleClickUkgReadyTime(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.ukgReadyTime));
  }

  async longPressUkgReadyTime(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.ukgReadyTime));
  }

  async expectUkgReadyTimeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.ukgReadyTime), value, timeoutMs);
  }

  async expectUkgReadyTimeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.ukgReadyTime), timeoutMs);
  }

  async expectUkgReadyTimeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.ukgReadyTime), timeoutMs);
  }

  async expectUkgReadyTimeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.ukgReadyTime), timeoutMs);
  }

  async expectUkgReadyTimeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.ukgReadyTime), timeoutMs);
  }

  async expectUkgReadyTimeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.ukgReadyTime), timeoutMs);
  }

  async expectUkgReadyTimeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.ukgReadyTime), count, timeoutMs);
  }

  async clickCoreProductAdoptionTrend(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend));
  }

  async doubleClickCoreProductAdoptionTrend(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend));
  }

  async longPressCoreProductAdoptionTrend(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend));
  }

  async expectCoreProductAdoptionTrendValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), value, timeoutMs);
  }

  async expectCoreProductAdoptionTrendEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), timeoutMs);
  }

  async expectCoreProductAdoptionTrendDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), timeoutMs);
  }

  async expectCoreProductAdoptionTrendChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), timeoutMs);
  }

  async expectCoreProductAdoptionTrendUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), timeoutMs);
  }

  async expectCoreProductAdoptionTrendFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), timeoutMs);
  }

  async expectCoreProductAdoptionTrendCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.coreProductAdoptionTrend), count, timeoutMs);
  }

  async clickProductAdoptionFY25(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.productAdoptionFY25));
  }

  async doubleClickProductAdoptionFY25(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.productAdoptionFY25));
  }

  async longPressProductAdoptionFY25(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.productAdoptionFY25));
  }

  async expectProductAdoptionFY25Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), value, timeoutMs);
  }

  async expectProductAdoptionFY25Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), timeoutMs);
  }

  async expectProductAdoptionFY25Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), timeoutMs);
  }

  async expectProductAdoptionFY25Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), timeoutMs);
  }

  async expectProductAdoptionFY25Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), timeoutMs);
  }

  async expectProductAdoptionFY25Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), timeoutMs);
  }

  async expectProductAdoptionFY25Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.productAdoptionFY25), count, timeoutMs);
  }

  async clickBilledQuantityByMonth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth));
  }

  async doubleClickBilledQuantityByMonth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth));
  }

  async longPressBilledQuantityByMonth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth));
  }

  async expectBilledQuantityByMonthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), value, timeoutMs);
  }

  async expectBilledQuantityByMonthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), timeoutMs);
  }

  async expectBilledQuantityByMonthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), timeoutMs);
  }

  async expectBilledQuantityByMonthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), timeoutMs);
  }

  async expectBilledQuantityByMonthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), timeoutMs);
  }

  async expectBilledQuantityByMonthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), timeoutMs);
  }

  async expectBilledQuantityByMonthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.billedQuantityByMonth), count, timeoutMs);
  }

  async clickMinQuantity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.minQuantity));
  }

  async doubleClickMinQuantity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.minQuantity));
  }

  async longPressMinQuantity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.minQuantity));
  }

  async expectMinQuantityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.minQuantity), value, timeoutMs);
  }

  async expectMinQuantityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.minQuantity), timeoutMs);
  }

  async expectMinQuantityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.minQuantity), timeoutMs);
  }

  async expectMinQuantityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.minQuantity), timeoutMs);
  }

  async expectMinQuantityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.minQuantity), timeoutMs);
  }

  async expectMinQuantityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.minQuantity), timeoutMs);
  }

  async expectMinQuantityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.minQuantity), count, timeoutMs);
  }

  async clickBilledQuantity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantity));
  }

  async doubleClickBilledQuantity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantity));
  }

  async longPressBilledQuantity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.billedQuantity));
  }

  async expectBilledQuantityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.billedQuantity), value, timeoutMs);
  }

  async expectBilledQuantityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.billedQuantity), timeoutMs);
  }

  async expectBilledQuantityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.billedQuantity), timeoutMs);
  }

  async expectBilledQuantityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.billedQuantity), timeoutMs);
  }

  async expectBilledQuantityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.billedQuantity), timeoutMs);
  }

  async expectBilledQuantityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.billedQuantity), timeoutMs);
  }

  async expectBilledQuantityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.billedQuantity), count, timeoutMs);
  }

  async clickPeerComparison(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.peerComparison));
  }

  async doubleClickPeerComparison(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.peerComparison));
  }

  async longPressPeerComparison(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.peerComparison));
  }

  async expectPeerComparisonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.peerComparison), value, timeoutMs);
  }

  async expectPeerComparisonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.peerComparison), timeoutMs);
  }

  async expectPeerComparisonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.peerComparison), timeoutMs);
  }

  async expectPeerComparisonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.peerComparison), timeoutMs);
  }

  async expectPeerComparisonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.peerComparison), timeoutMs);
  }

  async expectPeerComparisonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.peerComparison), timeoutMs);
  }

  async expectPeerComparisonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.peerComparison), count, timeoutMs);
  }

  async clickOverallRanking(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.overallRanking));
  }

  async doubleClickOverallRanking(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.overallRanking));
  }

  async longPressOverallRanking(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.overallRanking));
  }

  async expectOverallRankingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.overallRanking), value, timeoutMs);
  }

  async expectOverallRankingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.overallRanking), timeoutMs);
  }

  async expectOverallRankingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.overallRanking), timeoutMs);
  }

  async expectOverallRankingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.overallRanking), timeoutMs);
  }

  async expectOverallRankingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.overallRanking), timeoutMs);
  }

  async expectOverallRankingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.overallRanking), timeoutMs);
  }

  async expectOverallRankingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.overallRanking), count, timeoutMs);
  }

  async clickTop20(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.top20));
  }

  async doubleClickTop20(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.top20));
  }

  async longPressTop20(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.top20));
  }

  async expectTop20Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.top20), value, timeoutMs);
  }

  async expectTop20Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.top20), timeoutMs);
  }

  async expectTop20Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.top20), timeoutMs);
  }

  async expectTop20Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.top20), timeoutMs);
  }

  async expectTop20Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.top20), timeoutMs);
  }

  async expectTop20Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.top20), timeoutMs);
  }

  async expectTop20Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.top20), count, timeoutMs);
  }

  async clickEnterprisePeersIndustry(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry));
  }

  async doubleClickEnterprisePeersIndustry(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry));
  }

  async longPressEnterprisePeersIndustry(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry));
  }

  async expectEnterprisePeersIndustryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), value, timeoutMs);
  }

  async expectEnterprisePeersIndustryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), timeoutMs);
  }

  async expectEnterprisePeersIndustryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), timeoutMs);
  }

  async expectEnterprisePeersIndustryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), timeoutMs);
  }

  async expectEnterprisePeersIndustryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), timeoutMs);
  }

  async expectEnterprisePeersIndustryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), timeoutMs);
  }

  async expectEnterprisePeersIndustryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.enterprisePeersIndustry), count, timeoutMs);
  }

  async clickProductsVsPeerAvg(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg));
  }

  async doubleClickProductsVsPeerAvg(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg));
  }

  async longPressProductsVsPeerAvg(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg));
  }

  async expectProductsVsPeerAvgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), value, timeoutMs);
  }

  async expectProductsVsPeerAvgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), timeoutMs);
  }

  async expectProductsVsPeerAvgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), timeoutMs);
  }

  async expectProductsVsPeerAvgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), timeoutMs);
  }

  async expectProductsVsPeerAvgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), timeoutMs);
  }

  async expectProductsVsPeerAvgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), timeoutMs);
  }

  async expectProductsVsPeerAvgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.productsVsPeerAvg), count, timeoutMs);
  }

  async clickTop10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.top10));
  }

  async doubleClickTop10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.top10));
  }

  async longPressTop10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.top10));
  }

  async expectTop10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.top10), value, timeoutMs);
  }

  async expectTop10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.top10), timeoutMs);
  }

  async expectTop10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.top10), timeoutMs);
  }

  async expectTop10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.top10), timeoutMs);
  }

  async expectTop10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.top10), timeoutMs);
  }

  async expectTop10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.top10), timeoutMs);
  }

  async expectTop10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.top10), count, timeoutMs);
  }

  async clickPts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.pts));
  }

  async doubleClickPts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.pts));
  }

  async longPressPts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.pts));
  }

  async expectPtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.pts), value, timeoutMs);
  }

  async expectPtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.pts), timeoutMs);
  }

  async expectPtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.pts), timeoutMs);
  }

  async expectPtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.pts), timeoutMs);
  }

  async expectPtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.pts), timeoutMs);
  }

  async expectPtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.pts), timeoutMs);
  }

  async expectPtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.pts), count, timeoutMs);
  }

  async clickTop25(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.top25));
  }

  async doubleClickTop25(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.top25));
  }

  async longPressTop25(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.top25));
  }

  async expectTop25Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.top25), value, timeoutMs);
  }

  async expectTop25Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.top25), timeoutMs);
  }

  async expectTop25Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.top25), timeoutMs);
  }

  async expectTop25Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.top25), timeoutMs);
  }

  async expectTop25Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.top25), timeoutMs);
  }

  async expectTop25Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.top25), timeoutMs);
  }

  async expectTop25Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.top25), count, timeoutMs);
  }

  async clickPts4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.pts4));
  }

  async doubleClickPts4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.pts4));
  }

  async longPressPts4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.pts4));
  }

  async expectPts4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.pts4), value, timeoutMs);
  }

  async expectPts4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.pts4), timeoutMs);
  }

  async expectPts4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.pts4), timeoutMs);
  }

  async expectPts4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.pts4), timeoutMs);
  }

  async expectPts4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.pts4), timeoutMs);
  }

  async expectPts4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.pts4), timeoutMs);
  }

  async expectPts4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.pts4), count, timeoutMs);
  }

  async clickBottom25(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.bottom25));
  }

  async doubleClickBottom25(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.bottom25));
  }

  async longPressBottom25(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.bottom25));
  }

  async expectBottom25Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.bottom25), value, timeoutMs);
  }

  async expectBottom25Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.bottom25), timeoutMs);
  }

  async expectBottom25Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.bottom25), timeoutMs);
  }

  async expectBottom25Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.bottom25), timeoutMs);
  }

  async expectBottom25Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.bottom25), timeoutMs);
  }

  async expectBottom25Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.bottom25), timeoutMs);
  }

  async expectBottom25Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.bottom25), count, timeoutMs);
  }

  async clickPts5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.pts5));
  }

  async doubleClickPts5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.pts5));
  }

  async longPressPts5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.pts5));
  }

  async expectPts5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.pts5), value, timeoutMs);
  }

  async expectPts5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.pts5), timeoutMs);
  }

  async expectPts5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.pts5), timeoutMs);
  }

  async expectPts5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.pts5), timeoutMs);
  }

  async expectPts5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.pts5), timeoutMs);
  }

  async expectPts5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.pts5), timeoutMs);
  }

  async expectPts5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.pts5), count, timeoutMs);
  }

  async clickAdoptionSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionSummary));
  }

  async doubleClickAdoptionSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionSummary));
  }

  async longPressAdoptionSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.adoptionSummary));
  }

  async expectAdoptionSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.adoptionSummary), value, timeoutMs);
  }

  async expectAdoptionSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.adoptionSummary), timeoutMs);
  }

  async expectAdoptionSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.adoptionSummary), timeoutMs);
  }

  async expectAdoptionSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.adoptionSummary), timeoutMs);
  }

  async expectAdoptionSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.adoptionSummary), timeoutMs);
  }

  async expectAdoptionSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.adoptionSummary), timeoutMs);
  }

  async expectAdoptionSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.adoptionSummary), count, timeoutMs);
  }

  async clickElement34(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element34));
  }

  async doubleClickElement34(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element34));
  }

  async longPressElement34(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element34));
  }

  async expectElement34Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element34), value, timeoutMs);
  }

  async expectElement34Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element34), timeoutMs);
  }

  async expectElement34Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element34), timeoutMs);
  }

  async expectElement34Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element34), timeoutMs);
  }

  async expectElement34Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element34), timeoutMs);
  }

  async expectElement34Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element34), timeoutMs);
  }

  async expectElement34Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element34), count, timeoutMs);
  }

  async clickYoYGrowth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.yoYGrowth));
  }

  async doubleClickYoYGrowth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.yoYGrowth));
  }

  async longPressYoYGrowth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.yoYGrowth));
  }

  async expectYoYGrowthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.yoYGrowth), value, timeoutMs);
  }

  async expectYoYGrowthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.yoYGrowth), timeoutMs);
  }

  async expectYoYGrowthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.yoYGrowth), timeoutMs);
  }

  async expectYoYGrowthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.yoYGrowth), timeoutMs);
  }

  async expectYoYGrowthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.yoYGrowth), timeoutMs);
  }

  async expectYoYGrowthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.yoYGrowth), timeoutMs);
  }

  async expectYoYGrowthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.yoYGrowth), count, timeoutMs);
  }

  async clickActiveProducts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.activeProducts));
  }

  async doubleClickActiveProducts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.activeProducts));
  }

  async longPressActiveProducts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.activeProducts));
  }

  async expectActiveProductsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.activeProducts), value, timeoutMs);
  }

  async expectActiveProductsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.activeProducts), timeoutMs);
  }

  async expectActiveProductsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.activeProducts), timeoutMs);
  }

  async expectActiveProductsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.activeProducts), timeoutMs);
  }

  async expectActiveProductsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.activeProducts), timeoutMs);
  }

  async expectActiveProductsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.activeProducts), timeoutMs);
  }

  async expectActiveProductsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.activeProducts), count, timeoutMs);
  }

  async clickElement36(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element36));
  }

  async doubleClickElement36(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element36));
  }

  async longPressElement36(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element36));
  }

  async expectElement36Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element36), value, timeoutMs);
  }

  async expectElement36Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element36), timeoutMs);
  }

  async expectElement36Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element36), timeoutMs);
  }

  async expectElement36Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element36), timeoutMs);
  }

  async expectElement36Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element36), timeoutMs);
  }

  async expectElement36Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element36), timeoutMs);
  }

  async expectElement36Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element36), count, timeoutMs);
  }

  async clickTopDriver(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.topDriver));
  }

  async doubleClickTopDriver(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.topDriver));
  }

  async longPressTopDriver(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.topDriver));
  }

  async expectTopDriverValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.topDriver), value, timeoutMs);
  }

  async expectTopDriverEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.topDriver), timeoutMs);
  }

  async expectTopDriverDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.topDriver), timeoutMs);
  }

  async expectTopDriverChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.topDriver), timeoutMs);
  }

  async expectTopDriverUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.topDriver), timeoutMs);
  }

  async expectTopDriverFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.topDriver), timeoutMs);
  }

  async expectTopDriverCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.topDriver), count, timeoutMs);
  }

  async clickDimensionCore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.dimensionCore));
  }

  async doubleClickDimensionCore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.dimensionCore));
  }

  async longPressDimensionCore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.dimensionCore));
  }

  async expectDimensionCoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.dimensionCore), value, timeoutMs);
  }

  async expectDimensionCoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.dimensionCore), timeoutMs);
  }

  async expectDimensionCoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.dimensionCore), timeoutMs);
  }

  async expectDimensionCoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.dimensionCore), timeoutMs);
  }

  async expectDimensionCoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.dimensionCore), timeoutMs);
  }

  async expectDimensionCoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.dimensionCore), timeoutMs);
  }

  async expectDimensionCoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.dimensionCore), count, timeoutMs);
  }

  async clickDesktopMobile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.desktopMobile));
  }

  async doubleClickDesktopMobile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.desktopMobile));
  }

  async longPressDesktopMobile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.desktopMobile));
  }

  async expectDesktopMobileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.desktopMobile), value, timeoutMs);
  }

  async expectDesktopMobileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.desktopMobile), timeoutMs);
  }

  async expectDesktopMobileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.desktopMobile), timeoutMs);
  }

  async expectDesktopMobileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.desktopMobile), timeoutMs);
  }

  async expectDesktopMobileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.desktopMobile), timeoutMs);
  }

  async expectDesktopMobileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.desktopMobile), timeoutMs);
  }

  async expectDesktopMobileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.desktopMobile), count, timeoutMs);
  }

  async clickElement38(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element38));
  }

  async doubleClickElement38(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element38));
  }

  async longPressElement38(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element38));
  }

  async expectElement38Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element38), value, timeoutMs);
  }

  async expectElement38Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element38), timeoutMs);
  }

  async expectElement38Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element38), timeoutMs);
  }

  async expectElement38Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element38), timeoutMs);
  }

  async expectElement38Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element38), timeoutMs);
  }

  async expectElement38Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element38), timeoutMs);
  }

  async expectElement38Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element38), count, timeoutMs);
  }

  async clickBilledQty(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.billedQty));
  }

  async doubleClickBilledQty(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.billedQty));
  }

  async longPressBilledQty(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.billedQty));
  }

  async expectBilledQtyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.billedQty), value, timeoutMs);
  }

  async expectBilledQtyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.billedQty), timeoutMs);
  }

  async expectBilledQtyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.billedQty), timeoutMs);
  }

  async expectBilledQtyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.billedQty), timeoutMs);
  }

  async expectBilledQtyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.billedQty), timeoutMs);
  }

  async expectBilledQtyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.billedQty), timeoutMs);
  }

  async expectBilledQtyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.billedQty), count, timeoutMs);
  }

  async clickElement39(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element39));
  }

  async doubleClickElement39(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element39));
  }

  async longPressElement39(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element39));
  }

  async expectElement39Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element39), value, timeoutMs);
  }

  async expectElement39Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element39), timeoutMs);
  }

  async expectElement39Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element39), timeoutMs);
  }

  async expectElement39Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element39), timeoutMs);
  }

  async expectElement39Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element39), timeoutMs);
  }

  async expectElement39Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element39), timeoutMs);
  }

  async expectElement39Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element39), count, timeoutMs);
  }

  async clickMinContracted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.minContracted));
  }

  async doubleClickMinContracted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.minContracted));
  }

  async longPressMinContracted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.minContracted));
  }

  async expectMinContractedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.minContracted), value, timeoutMs);
  }

  async expectMinContractedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.minContracted), timeoutMs);
  }

  async expectMinContractedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.minContracted), timeoutMs);
  }

  async expectMinContractedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.minContracted), timeoutMs);
  }

  async expectMinContractedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.minContracted), timeoutMs);
  }

  async expectMinContractedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.minContracted), timeoutMs);
  }

  async expectMinContractedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.minContracted), count, timeoutMs);
  }

  async clickElement40(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AdoptionPage.L.element40));
  }

  async doubleClickElement40(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AdoptionPage.L.element40));
  }

  async longPressElement40(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AdoptionPage.L.element40));
  }

  async expectElement40Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AdoptionPage.L.element40), value, timeoutMs);
  }

  async expectElement40Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AdoptionPage.L.element40), timeoutMs);
  }

  async expectElement40Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AdoptionPage.L.element40), timeoutMs);
  }

  async expectElement40Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AdoptionPage.L.element40), timeoutMs);
  }

  async expectElement40Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AdoptionPage.L.element40), timeoutMs);
  }

  async expectElement40Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AdoptionPage.L.element40), timeoutMs);
  }

  async expectElement40Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AdoptionPage.L.element40), count, timeoutMs);
  }

}

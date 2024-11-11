import * as fs from 'fs';
import { test } from '@playwright/test';
// eslint-disable-next-line import/no-unresolved
import { argosScreenshot } from '@argos-ci/playwright';
import * as cheerio from 'cheerio';

// Extract a list of pathnames, given a fs path to a sitemap.xml file
// Docusaurus generates a build/sitemap.xml file for you!
function extractSitemapPathnames(sitemapPath: string): string[] {
  const sitemap = fs.readFileSync(sitemapPath).toString();
  const $ = cheerio.load(sitemap, { xmlMode: true });
  const urls: string[] = [];
  $('loc').each(function handleLoc() {
    const url = new URL($(this).text()).pathname;
    if (url.startsWith('/docs/next') || !url.startsWith('/docs')) {
      urls.push(url);
    }
  });
  return urls;
}

// Converts a pathname to a decent screenshot name
function pathnameToArgosName(pathname: string): string {
  return pathname.replace(/^\/|\/$/g, '') || 'index';
}

// Constants
const siteUrl = 'http://localhost:3000';
const sitemapPath = '../../build/sitemap.xml';
const stylesheetPath = './tests/screenshot.css';
const stylesheet = fs.readFileSync(stylesheetPath).toString();

// Wait for hydration, requires Docusaurus v2.4.3+
// Docusaurus adds a <html data-has-hydrated="true"> once hydrated
// See https://github.com/facebook/docusaurus/pull/9256
function waitForDocusaurusHydration() {
  return document.documentElement.dataset.hasHydrated === 'true';
}

function screenshotPathname(pathname: string) {
  test(`pathname ${pathname}`, async ({ page }) => {
    const url = siteUrl + pathname;
    await page.goto(url);
    await page.waitForFunction(waitForDocusaurusHydration);
    await page.addStyleTag({ content: stylesheet });
    await argosScreenshot(page, pathnameToArgosName(pathname));
  });
}

test.describe('Docusaurus site screenshots', () => {
  const pathnames = extractSitemapPathnames(sitemapPath);
  pathnames.forEach(screenshotPathname);
});

import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
  },
  testDir: './tests',
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'playwright-report/report.json' }]
  ],
}); 
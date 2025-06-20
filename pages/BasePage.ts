import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async waitForSelector(selector: string) {
    await this.page.waitForSelector(selector);
  }

  async click(selector: string) {
    await this.page.click(selector);
  }

  async type(selector: string, text: string) {
    await this.page.fill(selector, text);
  }

  async getText(selector: string): Promise<string> {
    return (await this.page.textContent(selector)) ?? '';
  }
} 
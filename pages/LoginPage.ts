import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { ErrorHandler } from '../utils/ErrorHandler';

export class LoginPage extends BasePage {
  private usernameInput = '[data-test="username"]';
  private passwordInput = '[data-test="password"]';
  private loginButton = '[data-test="login-button"]';
  private title = '[data-test="title"]';

  async login(username: string, password: string) {
    try {
      await this.page.fill(this.usernameInput, username);
      await this.page.fill(this.passwordInput, password);
      await this.page.click(this.loginButton);
    } catch (error) {
      ErrorHandler.handle(error, 'LoginPage.login');
      throw error;
    }
  }

  async assertLoggedIn() {
    try {
      await expect(this.page.locator(this.title)).toContainText('Products');
    } catch (error) {
      ErrorHandler.handle(error, 'LoginPage.assertLoggedIn');
      throw error;
    }
  }

  public getPage() {
    return this.page;
  }
} 
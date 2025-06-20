// This file has been moved to the top-level fixtures directory. No code changes needed. 

import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ErrorHandler } from '../utils/ErrorHandler';
import * as config from '../config/dev.json';

export const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    try {
      const loginPage = new LoginPage(page);
      await loginPage.goto(config.baseURL);
      await loginPage.login(config.username, config.password);
      await loginPage.assertLoggedIn();
      await use(loginPage);
    } catch (error) {
      ErrorHandler.handle(error, 'fixture: login');
      throw error;
    }
  },
}); 
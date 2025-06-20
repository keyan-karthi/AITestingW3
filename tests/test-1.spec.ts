import { expect } from '@playwright/test';
import { test } from '../fixtures/loginFixture';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../testdata/loginData.json';
import { ErrorHandler } from '../utils/ErrorHandler';

test('login as standard user', async ({ loginPage }) => {
  try {
    await expect(loginPage.getPage().locator('[data-test="title"]')).toContainText('Products');
  } catch (error) {
    ErrorHandler.handle(error, 'Test: login as standard user');
    throw error;
  }
});

test('login fails with invalid credentials', async ({ page }) => {
  try {
    const loginPage = new LoginPage(page);
    await loginPage.goto('https://www.saucedemo.com');
    await loginPage.login(loginData.invalid.username, loginData.invalid.password);
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  } catch (error) {
    ErrorHandler.handle(error, 'Test: login fails with invalid credentials');
    throw error;
  }
});
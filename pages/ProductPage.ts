import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { ErrorHandler } from '../utils/ErrorHandler';

export class ProductPage extends BasePage {
  private itemLink = '[data-test="item-4-title-link"]';
  private itemName = '[data-test="inventory-item-name"]';
  private addToCartButton = '[data-test="add-to-cart"]';
  private cartLink = '[data-test="shopping-cart-link"]';
  private cartTitle = '[data-test="title"]';

  async selectProduct() {
    try {
      await this.page.locator(this.itemLink).click();
    } catch (error) {
      ErrorHandler.handle(error, 'ProductPage.selectProduct');
      throw error;
    }
  }

  async assertProductVisible(productName: string) {
    try {
      await expect(this.page.locator(this.itemName)).toBeVisible();
      await expect(this.page.locator(this.itemName)).toContainText(productName);
    } catch (error) {
      ErrorHandler.handle(error, 'ProductPage.assertProductVisible');
      throw error;
    }
  }

  async addToCart() {
    try {
      await this.page.locator(this.addToCartButton).click();
    } catch (error) {
      ErrorHandler.handle(error, 'ProductPage.addToCart');
      throw error;
    }
  }

  async goToCart() {
    try {
      await this.page.locator(this.cartLink).click();
    } catch (error) {
      ErrorHandler.handle(error, 'ProductPage.goToCart');
      throw error;
    }
  }

  async assertCartTitle(title: string) {
    try {
      await this.page.locator(this.cartTitle).click();
      await expect(this.page.locator(this.cartTitle)).toContainText(title);
    } catch (error) {
      ErrorHandler.handle(error, 'ProductPage.assertCartTitle');
      throw error;
    }
  }

  public getPage() {
    return this.page;
  }
} 
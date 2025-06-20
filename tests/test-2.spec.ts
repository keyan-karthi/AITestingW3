import { expect } from '@playwright/test';
import { test } from '../fixtures/loginFixture';
import { ProductPage } from '../pages/ProductPage';
import productData from '../testdata/productData.json';

// productPage is now created from the loginPage fixture

test('add Sauce Labs Backpack to cart and verify', async ({ loginPage }) => {
  const productPage = new ProductPage(loginPage.getPage());
  try {
    await productPage.selectProduct();
    await productPage.assertProductVisible(productData.productName);
    await productPage.addToCart();
    await productPage.goToCart();
    await productPage.assertProductVisible(productData.productName);
    await productPage.assertCartTitle(productData.cartTitle);
  } catch (error) {
    // ErrorHandler is already used in the fixture, but you can add here if needed
    throw error;
  }
});
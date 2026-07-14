import { expect, test } from '@playwright/test';

test('User can complete a purchase', async ({ page }) => {
  await page.goto('/');
  await page.fill('[data-test="username"]', 'manasse10s@gmail.com');
  await page.fill('[data-test="password"]', 'manasse_password');
  await page.click('[data-test="login-button"]');
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('[data-test="shopping-cart-link"]');
  await page.click('[data-test="checkout"]');
  await page.fill('[data-test="firstName"]', 'John');
  await page.fill('[data-test="lastName"]', 'Doe');
  await page.fill('[data-test="postalCode"]', '12345');
  await page.click('[data-test="continue"]');
  await page.click('[data-test="finish"]');

  await expect(page.locator('[data-test="complete-header"]')).toHaveText(
    'Thank you for your order!'
  );
});

test('User cannot log in with invalid credentials', async ({ page }) => {
  await page.goto('/');
  await page.fill('[data-test="username"]', 'invalid_user');
  await page.fill('[data-test="password"]', 'wrong_password');
  await page.click('[data-test="login-button"]');

  await expect(page.locator('[data-test="error"]')).toContainText(
    'Username and password do not match'
  );
});

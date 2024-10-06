import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/auth/login');
  await page.getByPlaceholder('username').click();
  await page.getByPlaceholder('username').fill('admin');
  await page.getByPlaceholder('username').press('Tab');
  await page.getByPlaceholder('password').fill('admin0000');
  await page.getByPlaceholder('password').press('Enter');

});
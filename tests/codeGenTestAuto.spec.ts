import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/auth/login');
  await page.getByPlaceholder('username').click();
  await page.getByPlaceholder('username').fill('admin');
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').fill('amin32894z2849284');
  await page.getByPlaceholder('password').press('Enter');
});
import { test } from '@playwright/test';


test.beforeAll(async ({ browser }) => {
  console.log('Before All Block'); 
});

test.beforeEach(async ({ browser }) => { 
  console.log('Login Block');
});

test('Test 1', async ({ page }) => {
  console.log('Add Items and Check out test');
});

test('Test 2', async ({ page }) => {
  console.log('Add Items and remove from Cart test');
});

test.afterEach(async ({ browser }) => { 
  console.log('Logout Block');
});

test.afterAll(async ({ browser }) => { 
  console.log('After All Hook');
});
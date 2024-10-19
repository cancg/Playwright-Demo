import{test, expect} from 'playwright/test';

// ID -- 1st prio if unique
// name --2nd prio
// data test ID, placeholder, type  
// class

// Syntax css   -->  tagname[attribute="value"]
// Syntax xpath -->  //tagName[@atribute="value"]
// Syntax ID in css --> #value
// Syntax class css --> .value

test('locator strategy', async ({page}) => {

    await page.goto("https://www.saucedemo.com/");
   // await page.pause();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('//input[@id="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForTimeout(5000);        
});
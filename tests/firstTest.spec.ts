import{expect, test} from '@playwright/test';


test('my first playwright test', async({page, context})=> {
    await page.goto('https://google.com');
    expect(await page.title()).toEqual('Google'); 
})

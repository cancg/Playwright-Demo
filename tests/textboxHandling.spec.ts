import  {test} from 'playwright/test';



test.skip('Fill Method',async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('input[name="username"]').fill('Admin');
})

test('Press Sequentially method',async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('input[name="username"]').pressSequentially('Admin');
})


test('Press - Sequentially method with Delay',async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.pause();
    await page.locator('input[name="username"]').pressSequentially('Admin',{delay:2000});
    await page.pause();
})
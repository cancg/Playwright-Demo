import{test, expect} from '@playwright/test'


test('google test', async({page,context}) => {

    await context.tracing.start({snapshots:true, screenshots:true});
    await page.goto('https://google.com');
    expect(await page.title()).toEqual('Google');
    expect.soft(await page.title()).toEqual('C');
    await context.tracing.stop({path: 'tracingProgramattic.zip'});

})
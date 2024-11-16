import {test} from '@playwright/test'

test('Upload Single Files', async({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    
    const uploadFile = await Promise.all([
        page.waitForEvent('filechooser'),
        await page.click('input[type="file"]')
    ]);

    await uploadFile[0].setFiles(['uploadFolder/free-sticker.jpg']);
    await page.waitForTimeout(5000);
})


// if you need upload multi files
test('pload multiple Files ', async({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    
    await page.setInputFiles('input[type="file"]',['uploadFolder/free-sticker.jpg','xxxxx']);
    await page.waitForTimeout(5000);


})

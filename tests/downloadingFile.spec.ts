import {test} from '@playwright/test'; 
import * as fs from 'fs';
import * as path from 'path';

test('Download a PDF file', async ({ page }) => {
    await page.goto('');
    await page.locator('//p[contains(text(),"Consent")]').click();
  
    const download = await Promise.all([
      page.waitForEvent('download'),
      await page.click('a[type="button"]')
    ]);
  
    const downloadedPath = await download[0].path();
    console.log('path is ' + downloadedPath);
  
    // Way 1 - Using suggested File name
    const suggestedName = download[0].suggestedFilename();
    await download[0].saveAs(suggestedName);
  
    // Way 2 - USing custom File name
    const customName = "tempFile.pdf";
    await download[0].saveAs(customName);
  });
  
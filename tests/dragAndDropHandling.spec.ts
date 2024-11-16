import{ test, expect} from '@playwright/test';


test('Drag and Drop - First Approach', async ({page}) => {
await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
const washington = await page.locator('#box3');
const unitedStates = await page.locator('#box103');
await washington.hover();
await page.mouse.down();
await unitedStates.hover();
await page.mouse.up();
await page.waitForTimeout(5000);
});

test('Drag and Drop - Second Approach', async({page}) => {
await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
const washington = await page.locator('#box3');
const unitedStates = await page.locator('#box103');
await washington.dragTo(unitedStates);

});
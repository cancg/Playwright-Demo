import {test, expect} from '@playwright/test';


test('Radio Button Handling', async({page}) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('//p[contains(text(),"Do not consent")]').click();
    const maleRadioButton = page.locator('input[value="Male"]');
    const femaleRadioButton = page.locator('input[value="Female"]');


    expect(maleRadioButton).not.toBeChecked();
    expect(femaleRadioButton).not.toBeChecked();

    await maleRadioButton.check();
    expect(maleRadioButton).toBeChecked();
    expect(femaleRadioButton).not.toBeChecked();
})
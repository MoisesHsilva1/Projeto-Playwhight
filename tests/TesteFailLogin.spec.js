import {test, expect } from '@playwright/test'


test('Teste',  async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/lookup.htm')

    await page.click('.button');
});
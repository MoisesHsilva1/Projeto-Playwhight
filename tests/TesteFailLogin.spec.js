import {test, expect } from '@playwright/test'

test('Teste',  async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
});
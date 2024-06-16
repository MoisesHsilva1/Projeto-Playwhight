import { test, expect } from '@playwright/test'

test.use({
    locale: 'pt-BR',
    headless: true
})

test('has titlle', async ({ page }) => {
    await page
    .goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
    
    const inputSelector = "#input-email"
    await page
    .fill(inputSelector, 'Teste teste' )

})
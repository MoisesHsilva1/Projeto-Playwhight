import {test} from '@playwright/test'

test.use({
    locale: 'pt-BR',
    headless: true
})

test('Realizando Login Correto', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/lookup.htm')
     
    await page.fill('#firstName', 'Teste Name');
    await page.fill('#lastname', 'Last Name test');

    await page.fill('');
    
})
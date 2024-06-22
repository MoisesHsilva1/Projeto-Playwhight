import {test} from '@playwright/test'

test.use({
    locale: 'pt-BR',
    headless: true
})

test('Realizando Login Correto', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/lookup.htm')
     
    await page.fill('#firstName', 'Teste Name');

    await page.fill('#lastName', 'Last Name test');

    await page.fill('#address\\.street', 'Rua da casa do QA');

    await page.fill('#address\\.city', 'Cidade do QA');

    await page.fill('#address\\.state', 'São Paulo');

    await page.fill('#address\\.zipCode', '086454120');
    
    await page.fill('#ssn', '036-56-0519');

    await page.click('.button'); 
})
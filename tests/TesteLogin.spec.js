import {test} from '@playwright/test'

test.use({
    locale: 'pt-BR',
    headless: true
})

test('Realizando Login Correto', async ({ page }) => {
    await page
    .goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')

    await page
    .fill('#input-firstname', 'Nome Teste')

    await page 
    .fill('#input-lastname', 'Ultimo nome teste')

    const inputEmail = '#inputEmail'
    await page
    .fill(inputEmail, 'teste@gmail.com') 
   


})
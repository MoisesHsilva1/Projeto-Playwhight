import {test} from '@playwright/test'

test.use({
    locale: 'pt-BR',
    headless: true
})

test('Realizando Login Correto', async ({ page }) => {
    await page
    .goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')

    await page.fill('#input-firstname', 'Nome Teste')
    await page.fill('#input-lastname', 'Ultimo nome teste')

    await page.fill('#input-email', 'teste@gmail.com') 
   
    await page.fill('#input-telephone', '11999999999')

    await page.fill('#input-password', '12345678')
    await page.fill('#input-confirm', '12345678')

    await page 
    .check('#input-newsletter-yes[value="1"]')

    await page
})
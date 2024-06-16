import { test, expect } from '@playwright/test'

test.use({
    locale: 'pt-BR',
    headless: true
})

test('has titlle', async ({ page }) => {
    await page
    .goto('https://phptravels.org/register.php')
    
    const inputFirstName =  '#inputFirstName'
    await page
    .fill(inputFirstName, 'Nome Teste')
   

    const inputLastName = '#inputLastName'
    await page 
    .fill(inputLastName, 'Ultimo nome teste')

    const inputEmail = '#inputEmail'
    await page
    .fill(inputEmail, 'teste@gmail.com') 
   
})
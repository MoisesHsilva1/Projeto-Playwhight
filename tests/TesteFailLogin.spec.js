import {test, expect } from '@playwright/test'


test('Teste visualizando as mensagem de obrigatoridade dos campos',  async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/lookup.htm')

    const mensagemFailName =  'First name is required.';
    const mensagemFailLastName = 'Last name is required.';
    const mensagemAddressFail  = 'Address is required.'
    const mensagemCityFail =  'span'
   
    const buttonFail =  'input.button'

    await page.click(buttonFail)

    await page.getByRole('span', {mensagemFailName}).isVisible();
    await page.getByRole('span', {mensagemFailLastName}).isVisible();
    await page.getByRole('span', {mensagemAddressFail}).isVisible();
    await page.getByRole(mensagemCityFail, { name: 'City is required.'}).isVisible();


    if(mensagemCityFail) {
        console.log('mensagem de falha esta visivel')
    } else {
        console.log('A mensagem não esta visivel')
    }

});
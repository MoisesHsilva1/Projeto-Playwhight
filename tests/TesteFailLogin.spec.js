import {test, expect } from '@playwright/test'


test('Teste visualizando as mensagem de obrigatoridade dos campos',  async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/lookup.htm')

    const mensagemFailName =  'First name is required.';
    const mensagemFailLastName = 'Last name is required.';
    const mensagemAddressFail  = 'Address is required.'
    const mensagemCityFail =  'City is required'
    const mensagemFailState = 'State is required.'
    const mensagemFailZIPCODE = 'Zip Code is required.'
    const mensagemFailSSN =  'Social Security Number is required.'
    const buttonFail =  'input.button'

    await page.click(buttonFail)

    await page.getByRole('span', {mensagemFailName}).isVisible();
    await page.getByRole('span', {mensagemFailLastName}).isVisible();
    await page.getByRole('span', {mensagemAddressFail}).isVisible();
    await page.getByRole('span', {mensagemCityFail}).isVisible();
    await page.getByRole('span', {mensagemFailState}).isVisible();
    await page.getByRole('span', {mensagemFailZIPCODE}).isVisible();
    await page.getByRole('span', {mensagemFailSSN}).isVisible();

    if(mensagemFailName || mensagemFailLastName) {
        console.log('mensagem de falha esta visivel')
    } else {
        console.log('A mensagem não esta visivel')
    }

});
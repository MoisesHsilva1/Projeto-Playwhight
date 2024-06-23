import { test } from "@playwright/test";


test('Teste visualizando as mensagem de obrigatoridade dos campos',  async ({ page }) => {
    const url = "https://parabank.parasoft.com/parabank/lookup.htm";
    const FistName = 'input#firstName';
    const LastName =  'input#lastName';
    const Addres = 'input#address\\.street';
    const City = 'input#address\\.city'
    const state = 'input#addres\\.state';


    await page.goto(url)

    await page.locator(FistName).waitFor({ state: 'visible' });
    await page.locator(LastName).waitFor({state: "visible"});
    await page.locator(Addres).waitFor({state: 'visible'});
    await page.locator(City).waitFor({state: 'visible'});
    await page.locator(state).waitFor({state: 'visible'});


})

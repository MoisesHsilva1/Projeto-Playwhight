import {test} from '@playwright/test'

test.use({
    locale: 'pt-BR',
    headless: true
})

test('Realizando Login Correto', async ({ page }) => {
    const RegisterUser = {
        "FirstName": "Celbato",
        "LastName": "Com sobrenome bonito",
        "Addres": "Rua do distante",
        "City": "São Paulo",
        "state": "São Paulo",
        "ZipCode": "086454120",
        "SSN": "036-56-0519"
    };
    const ButonCadastrar =  '.button'
    const url = 'https://parabank.parasoft.com/parabank/lookup.htm'

    await page.goto(url)
     
    await page.fill('#firstName', RegisterUser.FirstName);

    await page.fill('#lastName', RegisterUser.LastName);

    await page.fill('#address\\.street', RegisterUser.Addres);

    await page.fill('#address\\.city', RegisterUser.City);

    await page.fill('#address\\.state', RegisterUser.state);

    await page.fill('#address\\.zipCode', RegisterUser.ZipCode);
    
    await page.fill('#ssn', RegisterUser.SSN);

    await page.click(ButonCadastrar); 
})
import { test } from "@playwright/test";


test('Teste visualizando as mensagem de obrigatoridade dos campos',  async ({ page }) => {
     const url = "https://parabank.parasoft.com/parabank/lookup.htm"
     const FieldsRegisterUser = {
        "FistName": "firstName"
     }; 

    await page.goto(url)

    await page.isVisible(FistName)
})
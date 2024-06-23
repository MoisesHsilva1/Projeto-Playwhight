import { test } from "@playwright/test";


test('Teste visualizando as mensagem de obrigatoridade dos campos',  async ({ page }) => {
     const url = "https://parabank.parasoft.com/parabank/lookup.htm"
     const FistName = 'input#firstName'

    await page.goto(url)

    await page.locator(FistName).waitFor({ state: 'visible' });
})
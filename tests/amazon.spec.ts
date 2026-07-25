import {test, expect} from '@playwright/test'

test('Open Amazon Website' , async ({ page })=>

{
    await page.goto('https://www.amazon.in/');

    await page.locator('input#twotabsearchtextbox').fill('Mens Tshirts');

    await page.locator('input#nav-search-submit-button').click();

    await page.waitForLoadState('load');

    await page.locator("(//i[@class='a-icon a-icon-checkbox'])[2]").click();
   // await page.getByRole('checkbox' , {name: 'Allen Solly'}).check();

    await page.waitForTimeout(10000);
    const prices = await page.locator('span.a-price-whole').allTextContents();
    
    console.log(prices);

    for (const price of prices)
    {
        const amount = Number(price.replace(/[^\d]/g, ''));

            if (amount >= 700 && amount <= 1000)
         {

            console.log(price);
         }
    }
    


  


}

)
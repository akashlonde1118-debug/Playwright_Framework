import {test , expect} from '@playwright/test'

test('Open Automation Practice website' , async({ page }) =>

{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    await page.waitForLoadState('load');

   // await page.getByRole('link', {name: 'Home'}).click();
    await page.locator("(//a[text()='Home'])[1]").click();

    await page.waitForLoadState('load');

    await page.locator('input#name').fill('Akash Londe');

    await page.locator('input#email').fill('akashlonde822@gmail.com');

    await page.locator('input#phone').fill('9881578645');

    await page.locator('textarea#textarea').fill('Thane(Mumbai)');

    await page.waitForTimeout(3000);
   // await page.getByLabel('Male').click();
    await page.getByText('Male', { exact: true }).click();
   // await page.locator('input#male').check();

    await page.mouse.wheel(0,300);

    await page.locator('input#monday').check();

    await page.locator('select#country').selectOption('India');

    await page.locator('select#colors').selectOption('Green');

    await page.locator('select#animals').selectOption('Rabbit');

    await page.mouse.wheel(0,300);

    await page.locator('input#datepicker').click();

    const today = new Date();

    const day = today.getDate().toString();
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear().toString();

    await page.waitForTimeout(3000);
    
    while (true) {

        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        const currentYear = await page.locator('.ui-datepicker-year').textContent();

        if (currentMonth === month && currentYear === year) {
            break;
        }

        await page.locator('.ui-datepicker-next').click();
    }

    // Click today's date
    await page.locator(`//a[text()='${day}']`).click();


    await page.mouse.wheel(0,500);

  // await page.locator('input#txtDate').click();

    // while (true) {

    //     const currentMonth = await page.locator('.ui-datepicker-month').textContent();
    //     const currentYear = await page.locator('.ui-datepicker-year').textContent();

    //     if (currentMonth === month && currentYear === year) {
    //         break;
    //     }

       // await page.locator('.ui-datepicker-next').click();
   // }

   // Click today's date
    //await page.locator(`//a[text()='${day}']`).click();

    await page.waitForTimeout(3000);

    await page.locator('input#singleFileInput').setInputFiles('C:/Users/HP/Downloads/Sample/Sample_File1.pdf');

    await page.locator("//button[text()='Upload Single File']").click();

    await page.waitForTimeout(3000);

    await page.locator('input#multipleFilesInput').setInputFiles(['C:/Users/HP/Downloads/Sample/Sample_File1.pdf','C:/Users/HP/Downloads/Sample/Sample_File2.doc']);

    await page.locator("//button[text()='Upload Multiple Files']").click();

    await page.waitForTimeout(3000);

   // await page.locator("#shadow-host input[type='text']").first().fill('Akash Londe');

  await page.locator('#shadow_host > input').first().click();
  await page.locator('#shadow_host > input').first().fill('Akash');
  await page.locator('input:nth-child(7)').check();

  await












}


)
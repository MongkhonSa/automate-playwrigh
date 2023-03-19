import { test, expect } from '@playwright/test';
const randomTime = (timeout = 1000) => Math.round(Math.random() * 2000 + timeout);
test('put batch', async ({ page }) => {
  await page.goto('https://jobs.blognone.com/login');
  await page.fill('input[name="email"]', process.env.EMAIL as string);
  await page.waitForTimeout(randomTime(2222));
  await page.fill('input[name="password"]', process.env.PASSWORD as string);
  await page.waitForTimeout(randomTime(10000));
  await page.click('//*[@id="root"]/div/div/div/div/form/button');
  await page.waitForTimeout(randomTime(1000));
  await page.goto('https://jobs.blognone.com/user/')
  await page.waitForTimeout(2000);
  await page.click('//*[@id="root"]/div/div/div/div/div/div/ul/li[1]/div/div[2]/a[2]')
  await page.waitForTimeout(randomTime(2222));
  await page.click('//*[@id="root"]/div/div/div/div/div/form/div[2]/input[2]')
  await page.waitForTimeout(randomTime(2242));
});


import { test, expect } from '@playwright/test';
test('put batch', async ({ page }) => {
  await page.goto('https://jobs.blognone.com/login');
  await page.fill('input[name="email"]', process.env.EMAIL as string);
  await page.waitForTimeout(1500);
  await page.fill('input[name="password"]', process.env.PASSWORD as string);
  await page.waitForTimeout(1500);
  await page.click('//*[@id="root"]/div/div/div/div/form/button');
  await page.waitForTimeout(1000);
  await page.goto('https://jobs.blognone.com/user/')
  await page.waitForTimeout(2000);
  const jobPosts = await page.locator('li.card').all()
  for (let jobPost of jobPosts){
    await jobPost.getByText('Edit').click()
    await page.waitForTimeout(1000);
    await page.click('//*[@id="root"]/div/div/div/div/div/form/div[2]/input[2]')
    await page.waitForTimeout(2000);
  }
});


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.getsquire.com/login');
  await page.getByRole('textbox', { name: 'Username or Email' }).click();
  await page.getByRole('textbox', { name: 'Username or Email' }).fill('tempweb.willman@gmail.com');
  await page.getByRole('textbox', { name: 'Username or Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('$123squireTest');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('#root').getByText('Appointments').click();
});
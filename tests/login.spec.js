const { test, expect } = require('@playwright/test');
const { requireEnv } = require('../env');

const squireUser = requireEnv('SQUIRE_USER');
const squirePass = requireEnv('SQUIRE_PASS');

test('SQUIRE Login Test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://app.getsquire.com/login');

  await page.getByPlaceholder('Username or Email').fill(squireUser);
  await page.getByPlaceholder('Password').fill(squirePass);
  await page.getByRole('button', { name: 'Login' }).click();

  // Assert that the header "Appointments" is visible
  await expect(page.locator('div[data-automation-id="text:header"]')).toBeVisible();
});

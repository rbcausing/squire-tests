const { test, expect } = require('@playwright/test');

test('SQUIRE Login Test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://app.getsquire.com/login');

  await page.getByPlaceholder('Username or Email').fill('***REMOVED***');
  await page.getByPlaceholder('Password').fill('***REMOVED***');
  await page.getByRole('button', { name: 'Login' }).click();

  // Assert that the header "Appointments" is visible
  await expect(page.locator('div[data-automation-id="text:header"]')).toBeVisible();
});
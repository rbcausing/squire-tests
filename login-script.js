const { chromium } = require('playwright'); // or import { chromium } from 'playwright' in ES modules
const { requireEnv } = require('./env');

const squireUser = requireEnv('SQUIRE_USER');
const squirePass = requireEnv('SQUIRE_PASS');

(async () => {
  const browser = await chromium.launch({ headless: false }); // set headless: true to run without UI
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://app.getsquire.com/login');

  await page.getByPlaceholder('Username or Email').fill(squireUser);
  await page.getByPlaceholder('Password').fill(squirePass);
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByText('Appointments', { exact: true }).click();

  // Optional: Wait to see the result
  await page.waitForTimeout(5000);

  await browser.close();
})();

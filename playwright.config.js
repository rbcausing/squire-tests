/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'https://app.getsquire.com/', // Replace with SQUIRE's login URL
    headless: true, // Run tests in headless mode
    screenshot: 'only-on-failure', // Capture screenshots on test failure
    video: 'retain-on-failure', // Record videos on test failure
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    // Add more browsers (firefox, webkit) if needed
  ],
};

module.exports = config;
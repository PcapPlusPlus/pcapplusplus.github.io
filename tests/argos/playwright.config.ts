import { devices } from '@playwright/test';
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    port: 3000,
    command: 'npm start'
  },
  // reporter: [
  //   process.env.CI ? ['dot'] : ['list'],
  //   [
  //     '@argos-ci/playwright/reporter',
  //     {
  //       // // Upload to Argos on CI only.
  //       // uploadToArgos: !!process.env.CI,

  //       // Set your Argos token (required if not using GitHub Actions).
  //       // token: 'TOKEN'
  //     }
  //   ]
  // ],
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ]
};

export default config;

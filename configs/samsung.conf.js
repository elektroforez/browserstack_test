import { config as baseConfig } from "../wdio.conf";

export const config = {
  ...baseConfig,
  capabilities: [
    {
      project: "First Webdriverio Android Project",
      build: "Webdriverio Android",
      name: "first_test",
      device: "Samsung Galaxy S24",
      os_version: "9.0",
      app: process.env.BROWSERSTACK_APP_ID || "bs://<hashed app-id>",
      "browserstack.debug": true,
    },
  ],
};

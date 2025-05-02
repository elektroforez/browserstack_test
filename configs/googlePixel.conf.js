const { config } = require("../wdio.conf");

config.specs = ["../test/specs/**/*.e2e.js"];
config.capabilities = [
  {
    project: "First Webdriverio Android Project",
    build: "Webdriverio Android",
    name: "first_test",
    device: "Google Pixel 3",
    os_version: "9.0",
    app: process.env.BROWSERSTACK_APP_ID || "bs://<hashed app-id>",
    "browserstack.debug": true,
  },
];

exports.config = config;

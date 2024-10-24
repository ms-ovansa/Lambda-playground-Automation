const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true, 
  screenshotOnRunFailure: true,
  e2e: {
    baseUrl: 'https://ecommerce-playground.lambdatest.io',
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  },
});

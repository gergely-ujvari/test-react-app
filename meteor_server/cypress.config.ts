import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: 'tests/cypress/fixtures',
  screenshotsFolder: 'tests/cypress/screenshots',
  videosFolder: 'tests/cypress/videos',
  experimentalStudio: true,
  defaultCommandTimeout: 8000,
  viewportWidth: 1366,
  viewportHeight: 900,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./tests/cypress/plugins/index.js')(on, config)
    },
    specPattern: 'tests/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/*.data.*'],
    supportFile: 'tests/cypress/support/index.js',
    baseUrl: 'http://localhost:3000',
  },
})

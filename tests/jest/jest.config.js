module.exports = {
  testMatch: ["**/*.test.js"],
  verbose: true,
  bail: true,
  rootDir: "test",
  modulePaths: ["<rootDir>/src"],
  globalSetup: "<rootDir>/setup.js",
  globalTeardown: "<rootDir>/teardown.js",
  testEnvironment: "<rootDir>/environment.js",
  coverageReporters: ["lcov"]
};

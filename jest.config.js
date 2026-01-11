export default {
  testEnvironment: "node",
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.js", "!src/**/*.test.js"],
  testMatch: ["**/tests/**/*.test.js", "**/?(*.)+(spec|test).js"],
  transform: {},
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  verbose: true,
};

const jestModuleNameMapper = require('jest-module-name-mapper').default;

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: jestModuleNameMapper(),
};

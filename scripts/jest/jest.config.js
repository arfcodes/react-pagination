/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  verbose: true,
  collectCoverage: true,
  rootDir: '../../',
  coverageDirectory: './coverage/',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  setupFilesAfterEnv: [
    "<rootDir>/scripts/jest/test.shim.js",
    "<rootDir>/scripts/jest/test.setup.js"
  ],
  testRegex: '/src/__tests__/.*(\\.|/)(test|spec)\\.[jt]sx?$',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },
}

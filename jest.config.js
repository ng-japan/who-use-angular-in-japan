module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  setupFilesAfterEnv: [
    '<rootDir>/src/setup-jest.ts'
  ],
  globals: {
    'ts-jest': {
        tsconfig: '<rootDir>/src/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
     },
 },
};

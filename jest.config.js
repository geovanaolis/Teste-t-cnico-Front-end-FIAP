module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(png|jpg|jpeg|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js'
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};

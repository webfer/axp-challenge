module.exports = async () => {
  return {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.ts'],
    verbose: true,
  };
};

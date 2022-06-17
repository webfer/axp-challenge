module.exports = async () => {
  return {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.ts'],
    verbose: true,
    moduleNameMapper: {
      '^.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
        'jest-transform-stub',
    },
  };
};

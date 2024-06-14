export default {
    transform: {
      '^.+\\.js$': 'babel-jest',
       "^.+\\.vue$": "@vue/vue3-jest"
    },
    testEnvironment: 'jsdom',
    testMatch: ['**/tests/**/*.test.js'],
  };
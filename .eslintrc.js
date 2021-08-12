module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
      webpack: {
        config: './webpack.config.js',
      },
    },
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
};

module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  plugins: ['prettier', 'react'],
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    semi: ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'import/prefer-default-export': 'off',
    'arrow-body-style': ['error', 'as-needed'],
  },
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    node: true,
  },
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 1 }],
    'no-magic-numbers': [
      'warn',
      { detectObjects: true, enforceConst: true, ignoreArrayIndexes: true },
    ],
  },
  root: true,
};

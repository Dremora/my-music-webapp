const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks', '@typescript-eslint', 'sort-destructure-keys', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/all',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/strict',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  settings: {
    'import/core-modules': ['react'],
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@typescript-eslint/camelcase': ['error', { ignoreDestructuring: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'import/export': 'error',
    'import/extensions': ['error', 'always', { js: 'never', ts: 'never', tsx: 'never' }],
    'import/named': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-default': 'error',
    'import/no-self-import': 'error',
    'import/no-unresolved': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    'jsx-a11y/no-autofocus': 'off',
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-shadow': 'error',
    'no-useless-constructor': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
      { blankLine: 'always', prev: '*', next: 'multiline-const' },
      { blankLine: 'always', prev: '*', next: 'multiline-expression' },
      { blankLine: 'always', prev: '*', next: 'multiline-let' },
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
      { blankLine: 'always', prev: 'multiline-const', next: '*' },
      { blankLine: 'always', prev: 'multiline-expression', next: '*' },
      { blankLine: 'always', prev: 'multiline-let', next: '*' }
    ],
    'prefer-arrow-callback': 'error',
    'prefer-object-spread': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/forbid-component-props': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-max-depth': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-props-no-spreading': 'off',
    'sort-destructure-keys/sort-destructure-keys': 'error'
  }
};

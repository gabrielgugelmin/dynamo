module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'import/extensions': 'off',
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/prefer-stateless-function': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/state-in-constructor': 'off',
    'no-debugger': 'warn',
    'react/prop-types': 'warn',
    'react/no-unescaped-entities': 'off',
    'no-plusplus': 'off',
  },
};

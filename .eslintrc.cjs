module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    indent: ['error', 2],
    'react/jsx-no-target-blank': 'off',
    'no-console': ['warn'],
    'no-multi-spaces': ['error'],
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': ['error'],
    'react/jsx-uses-vars': ['error'],
    'react/boolean-prop-naming': ['error'],
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        warnOnDuplicates: true,
        checkKeyMustBeforeSpread: true,
      },
    ],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/no-unused-prop-types': ['error'],
    'react/prop-types': ['error'],
    'react/self-closing-comp': ['warn', { component: true, html: true }],

    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};

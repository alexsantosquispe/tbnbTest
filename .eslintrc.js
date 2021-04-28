module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // uses react-specific linting rules
    'prettier/react', // disables react-specific linting rules that conflict with prettier
    'plugin:prettier/recommended', // uses react-specific linting rules
    'react-hooks' // uses react hooks linting rules
  ],
  plugins: [
    'react',
    'react-native',
    'import' // eslint-plugin-import for custom configure
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  rules: {
    'react/display-name': 'off',
    // TODO: this rules must be removed to complete prop-types validation
    'react/prop-types': 0,
    // import plugins
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc'
        }
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  env: {
    node: true
  },
  settings: {
    'import/ignore': ['react-native']
  }
}

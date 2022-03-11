module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    'sort-destructure-keys'
  ],
  rules: {
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],
    'import/order': ['error', { groups: ['builtin', 'external', 'internal'], alphabetize: { order: 'asc' } }],
    'sort-destructure-keys/sort-destructure-keys': 'error'
  }
}

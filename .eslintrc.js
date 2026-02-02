module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['next/core-web-vitals', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y', '@typescript-eslint'],
  rules: {
    // enforce accessibility and code quality
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'off'
  },
};

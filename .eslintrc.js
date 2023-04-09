module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'parser': '@typescript-eslint/parser',
  'rules': {
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'semi': 'error',
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': 'error',
    'space-in-parens': 'error',
    'comma-dangle': 'error',
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    'key-spacing': 'error',
    'max-len': ['error', { 'tabWidth': 2 }],
    'indent': ['error', 2]
  }
};

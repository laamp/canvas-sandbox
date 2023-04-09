module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "rules": {
    "prefer-const": "error",
    "prefer-arrow-callback": "error",
    "semi": "error",
    "object-curly-spacing": ["error", "always"],
    "comma-spacing": "error",
    "space-in-parens": "error"
  }
};

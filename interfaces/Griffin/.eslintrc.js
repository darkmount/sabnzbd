module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    commonjs: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  parser: "babel-eslint",
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": 0,
  },
};

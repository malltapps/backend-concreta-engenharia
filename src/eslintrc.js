module.exports = {
  env: {
    es6: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "consistent-return": "off",

    camelcase: "off",
    "no-unused-vars": [
      "off",
      {
        argsIgnorePattern: "next",
      },
    ],
  },
};

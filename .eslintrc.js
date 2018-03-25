module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "windows"],
    quotes: ["off", "single"],
    semi: ["error", "always"]
  }
};

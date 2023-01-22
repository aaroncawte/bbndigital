module.exports = {
  extends: ["@krakentech/eslint-config", "plugin:@next/next/recommended"],
  rules: {
    "linebreak-style": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};

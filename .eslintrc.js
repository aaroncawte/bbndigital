module.exports = {
  extends: ["@krakentech/eslint-config", "plugin:@next/next/recommended"],
  rules: {
    "@typescript-eslint/ban-ts-comment": 0,
    "linebreak-style": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  ignores: [
    "public/"
  ]
};

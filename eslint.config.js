const linters = require("@krakentech/eslint-config");

module.exports = linters.load(
  {
    ignores: ["**/node_modules/**", "public/", ".next/"],
  },
  {
    files: ["**/*.{js,jsx,cjs,mjs}"],
    extends: linters.configs.react.recommended,
  },
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    extends: linters.configs.typescript.recommended,
    rules: {
      // TODO: Remove these overrides once violations are resolved
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
    },
  },
);

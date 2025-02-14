
// "plugin:@next/next/recommended"
//   rules: {
//     "@typescript-eslint/ban-ts-comment": 0,
//     "linebreak-style": 0,
//     "prettier/prettier": [
//       "error",
//       {
//         endOfLine: "auto",
//       },
//     ],
//   },
// };

const linters = require("@krakentech/eslint-config");


module.exports = linters.load(
  // Ignore all node_modules and dist folders
  {
    ignores: ["**/node_modules/**", "public/"],
  },
  // Apply recommended typescript rules to all
  // Typescript files in the repo
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    extends: linters.configs.typescript.recommended,
  },
);

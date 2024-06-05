import globals from "globals";
import js from "@eslint/js";


export default [
  {languageOptions: { globals: globals.node }},
  js.configs.all,
  {rules: {
    "new-cap": "off",
    "no-console": "off",
    "sort-vars": "off",
    "sort-keys": "off",
  }},
  {ignores: ["node_modules/"]},
];

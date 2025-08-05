import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {},
});

const eslintConfig = [
  {
    root: true,
    env: { 
      browser: true, 
      es2020: true 
    },
    ignores: ["dist/**"],
    settings: { 
      react: { 
        version: "18.2" 
      } 
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    }
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "next/core-web-vitals",
    "next/typescript"
  ),
  {
    rules: {
      "react/prop-types": "off",
      "react/jsx-no-target-blank": "off",
      "react-hooks/exhaustive-deps": "off",
      "no-unused-vars": "off",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
    }
  }
];


export default eslintConfig;

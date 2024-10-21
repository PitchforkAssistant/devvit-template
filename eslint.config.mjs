import typescriptEslint from "@typescript-eslint/eslint-plugin";
import vitest from "eslint-plugin-vitest";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/node_modules", "**/dist", "eslint.config.mjs"],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        vitest,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: true,
            tsconfigRootDir: "__dirname",

            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    rules: {
        "array-callback-return": "error",
        "comma-spacing": "error",
        "eol-last": "error",
        "guard-for-in": "error",
        "key-spacing": "error",
        "keyword-spacing": "error",
        "new-parens": "error",
        "no-array-constructor": "error",
        "no-console": 0,
        "no-implied-eval": "error",
        "no-multi-spaces": "error",
        "no-return-await": "error",
        "no-sequences": "error",
        "no-trailing-spaces": "error",
        "no-var": "error",
        "no-whitespace-before-property": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-numeric-literals": "error",
        "prefer-rest-params": "error",
        "prefer-template": "error",
        "require-await": "off",
        "@typescript-eslint/require-await": "off",
        "space-infix-ops": "error",
        "array-bracket-newline": ["error", "consistent"],
        "array-bracket-spacing": ["error", "never"],
        "array-element-newline": ["error", "consistent"],
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": ["error", "as-needed"],

        "arrow-spacing": ["error", {
            before: true,
            after: true,
        }],

        "block-spacing": ["error", "always"],
        "brace-style": ["error", "1tbs"],
        "comma-dangle": ["error", "always-multiline"],
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        curly: ["error", "all"],
        "dot-location": ["error", "property"],

        eqeqeq: ["error", "always", {
            null: "ignore",
        }],

        "func-call-spacing": ["error", "never"],

        "func-style": ["error", "declaration", {
            allowArrowFunctions: true,
        }],

        "function-paren-newline": ["error", "multiline"],
        "implicit-arrow-linebreak": ["error", "beside"],

        indent: ["error", 4, {
            VariableDeclarator: "first",
            SwitchCase: 0,
        }],

        "linebreak-style": ["error", "unix"],

        "no-extra-parens": ["error", "all", {
            conditionalAssign: false,
            ignoreJSX: "multi-line",
        }],

        "no-multiple-empty-lines": ["error", {
            max: 1,
        }],

        "no-use-before-define": ["error", "nofunc"],

        "object-curly-newline": ["error", {
            multiline: true,
            consistent: true,
        }],

        "object-curly-spacing": ["error", "never"],

        "object-property-newline": ["error", {
            allowAllPropertiesOnSameLine: true,
        }],

        "object-shorthand": ["error", "always"],
        "operator-assignment": ["error", "always"],
        "padded-blocks": ["error", "never"],
        "quote-props": ["error", "consistent-as-needed"],

        quotes: ["error", "double", {
            avoidEscape: true,
        }],

        semi: ["error", "always"],

        "semi-spacing": ["error", {
            before: false,
            after: true,
        }],

        "semi-style": ["error", "last"],
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", "always"],
        "space-in-parens": ["error", "never"],

        "space-unary-ops": ["error", {
            words: true,
            nonwords: false,
        }],

        "spaced-comment": ["error", "always"],

        "switch-colon-spacing": ["error", {
            before: false,
            after: true,
        }],

        "template-curly-spacing": ["error", "never"],
        "template-tag-spacing": ["error", "never"],
        "wrap-iife": ["error", "inside"],

        camelcase: ["error", {
            properties: "always",
        }],
    },
}];

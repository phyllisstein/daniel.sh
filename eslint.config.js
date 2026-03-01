import stylistic from "@stylistic/eslint-plugin";
import parserTS from "@typescript-eslint/parser";
import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores([
        "dist/",
        "node_modules/",
        "src/vendor/",
        "src/boneyard/",
    ]),
    eslint.configs.recommended,
    stylistic.configs["recommended"],
    react.configs.flat.recommended,
    react.configs.flat["jsx-runtime"],
    reactHooks.configs.flat.recommended,
    {
        languageOptions: {
            ecmaVersion: "latest",
            globals: {
                ...globals.browser,
                ...globals.es2020,
                ...globals.node,
                ...globals.worker,
            },
            sourceType: "module",
        },
        plugins: {
            "@next/next": nextPlugin,
            "jsx-a11y": jsxA11y,
        },
        rules: {
            ...jsxA11y.configs.recommended.rules,
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs["core-web-vitals"].rules,
            "@stylistic/arrow-parens": [
                "warn",
                "as-needed",
                {
                    requireForBlockBody: false,
                },
            ],
            "@stylistic/block-spacing": ["warn", "never"],
            "@stylistic/brace-style": [
                "warn",
                "1tbs",
                {
                    allowSingleLine: true,
                },
            ],
            "@stylistic/comma-dangle": [
                "warn",
                "always-multiline",
            ],
            "@stylistic/comma-spacing": [
                "warn",
                {
                    after: true,
                    before: false,
                },
            ],
            "@stylistic/eol-last": "warn",
            "@stylistic/indent": [
                "warn",
                4,
            ],
            "@stylistic/jsx-closing-bracket-location": ["warn", "after-props"],
            "@stylistic/jsx-closing-tag-location": "warn",
            "@stylistic/jsx-curly-newline": ["warn", "consistent"],
            "@stylistic/jsx-curly-spacing": [
                "warn",
                {
                    attributes: { when: "always" },
                    children: { when: "never" },
                    spacing: { objectLiterals: "never" },
                    when: "always",
                },
            ],
            "@stylistic/jsx-indent": [
                "warn",
                4,
                {
                    checkAttributes: true,
                    indentLogicalExpressions: true,
                },
            ],
            "@stylistic/jsx-indent-props": [
                "warn",
                4,
            ],
            "@stylistic/jsx-one-expression-per-line": ["warn", { allow: "single-line" }],
            "@stylistic/jsx-quotes": [
                "warn",
                "prefer-double",
            ],
            "@stylistic/jsx-sort-props": [
                "warn",
                {
                    callbacksLast: true,
                    ignoreCase: true,
                    noSortAlphabetically: true,
                    reservedFirst: true,
                    shorthandFirst: true,
                },
            ],
            "@stylistic/jsx-tag-spacing": [
                "warn",
                {
                    afterOpening: "never",
                    beforeClosing: "never",
                    beforeSelfClosing: "always",
                    closingSlash: "never",
                },
            ],
            "@stylistic/member-delimiter-style": [
                "warn",
                {
                    multiline: {
                        delimiter: "none",
                    },
                    singleline: {
                        delimiter: "comma",
                        requireLast: false,
                    },
                },
            ],
            "@stylistic/no-multiple-empty-lines": [
                "warn",
                {
                    max: 2,
                    maxBOF: 0,
                    maxEOF: 1,
                },
            ],
            "@stylistic/no-trailing-spaces": "warn",
            "@stylistic/object-curly-spacing": [
                "warn",
                "always",
            ],
            "@stylistic/operator-linebreak": "warn",
            "@stylistic/quote-props": ["warn", "consistent-as-needed"],
            "@stylistic/quotes": [
                "warn",
                "double",
                {
                    allowTemplateLiterals: "always",
                    avoidEscape: true,
                },
            ],
            "@stylistic/semi": [
                "warn",
                "always",
                {
                    omitLastInOneLineBlock: true,
                    omitLastInOneLineClassBody: true,
                },
            ],
            "@stylistic/space-before-function-paren": "warn",
            "@stylistic/template-curly-spacing": ["warn", "always"],
            "no-unused-vars": "warn",
            "react/prop-types": "off",
            "react-hooks/exhaustive-deps": [
                "warn",
                {
                    additionalHooks: "(useRecoilCallback|useRecoilTransaction_UNSTABLE)",
                },
            ],
            "react-hooks/refs": "off",
        },
        settings: {
            react: {
                version: "19.0",
            },
        },
    },
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        files: [
            "*.ts",
            "*.tsx",
            "**/*.ts",
            "**/*.tsx",
            "*.d.ts",
            "**/*.d.ts",
        ],
        languageOptions: {
            parser: parserTS,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            "@typescript-eslint/prefer-nullish-coalescing": "off",
            "@stylistic/block-spacing": ["warn", "always"],
            "@stylistic/object-curly-spacing": ["warn", "always"],
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    args: "after-used",
                    argsIgnorePattern: "^_",
                    destructuredArrayIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                    varsIgnorePattern: "^_",
                },
            ],
        },
    },
]);

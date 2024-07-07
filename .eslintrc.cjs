/**
 * This is intended to be a basic starting point for linting in the Indie Stack.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },

  // Base config
  extends: ["eslint:recommended"],
  rules: {
    'array-callback-return': ["error", { checkForEach: true }],
    'no-await-in-loop': 'error',
    'no-constant-binary-expression': 'error',
    'no-duplicate-imports': 'error',
    'no-nested-ternary': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-use-before-define': 'error',
  },

  overrides: [
    // React
    {
      files: ["**/*.{js,jsx,ts,tsx}", "!cypress.config.ts"],
      plugins: ["react", "jsx-a11y"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier",
      ],
      settings: {
        react: {
          version: "detect",
        },
        formComponents: ["Form"],
        linkComponents: [
          { name: "Link", linkAttribute: "to" },
          { name: "NavLink", linkAttribute: "to" },
        ],
      },
      rules: {
        "react/jsx-no-leaked-render": [
          "warn",
          { validStrategies: ["ternary"] },
        ],
      },
    },

    // Typescript
    {
      files: ["**/*.{ts,tsx}"],
      plugins: ["@typescript-eslint", "import"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"]
      },
      settings: {
        "import/internal-regex": "^~/",
        "import/resolver": {
          node: {
            extensions: [".ts", ".tsx"],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      extends: [
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "prettier",
      ],
      rules: {
        "import/order": [
          "error",
          {
            alphabetize: { caseInsensitive: true, order: "asc" },
            groups: ["builtin", "external", "internal", "parent", "sibling"],
            "newlines-between": "always",
          },
        ],

        'no-duplicate-imports': 'off',
        'import/no-duplicates': 'error',

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': "error",

        // disable this rule because remix commonly throws `redirect`
        '@typescript-eslint/only-throw-error': 'off',

        // this is just overly strict
        '@typescript-eslint/restrict-template-expressions': 'off'
      },
    },

    // Markdown
    {
      files: ["**/*.md"],
      plugins: ["markdown"],
      extends: ["plugin:markdown/recommended-legacy", "prettier"],
    },

    // Jest/Vitest
    {
      files: ["**/*.test.{js,jsx,ts,tsx}"],
      plugins: ["jest", "jest-dom", "testing-library"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react",
        "prettier",
      ],
      env: {
        "jest/globals": true,
      },
      settings: {
        jest: {
          // we're using vitest which has a very similar API to jest
          // (so the linting plugins work nicely), but it means we have to explicitly
          // set the jest version.
          version: 28,
        },
      },
    },

    // Cypress
    {
      files: ["cypress/**/*.ts"],
      plugins: ["cypress"],
      parserOptions: {
        project: ['./cypress/tsconfig.json']
      },
      extends: ["plugin:cypress/recommended", "prettier"],
    },

    // Node
    {
      files: [".eslintrc.cjs", "mocks/**/*.js"],
      env: {
        node: true,
      },
    },
  ],
};

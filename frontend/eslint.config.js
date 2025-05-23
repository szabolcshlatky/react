import js from "@eslint/js";
import tseslint from 'typescript-eslint';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
// import nextPlugin from '@next/eslint-plugin-next';

export default [
  js.configs.recommended, // or js.configs.all
  ...tseslint.configs.recommended, // or tseslint.configs.all
  prettierConfig,
  {
    "files": [
      "**/*.js",
      "**/*.mjs",
      "**/*.cjs",
      "**/*.jsx",
      "**/*.ts",
      "**/*.tsx"
    ],
    "ignores": [
      "**/*.d.ts",
      "**/*.config.js",
      "**/*.config.ts",
      "**/*.config.tsx",
      "**/*.config.jsx",
      ".next/*",
      ".git",
      "dist",
      "build",
      "node_modules",
      "public"
    ],
    "languageOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "parserOptions": {
        "ecmaFeatures": {
          "jsx": true,
          "globalReturn": true,
          "impliedStrict": true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es6,
        ...globals.commonjs,
        ...globals.worker,
        ...globals.serviceworker,
        ...globals.amd,
        ...globals.jest,
        ...globals.jasmine,
        ...globals.qunit,
        ...globals.jquery,
        ...globals.mocha,
        ...globals.es2020,
        ...globals.es2021,
        ...globals.es2022,
        ...globals.esnext,
        ...globals.webextensions,
        ...globals.greasemonkey,
        ...globals.contentScript,
        ...globals.chrome,
        ...globals.karma,
        ...globals.protractor,
        ...globals.angular,
        ...globals.embertest,
        ...globals.phantomjs,
        ...globals.globals,

      },
    },
    // "parserOptions": {},
    "linterOptions": {
      "noInlineConfig": false,
      "reportUnusedDisableDirectives": "warn"
    },
    // "processor": "eslint-processor",
    "plugins": {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
      // '@next/next': nextPlugin,
    },
    "rules": {
      // ...nextPlugin.configs.recommended.rules,
      // ...nextPlugin.configs['core-web-vitals'].rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      "react-hooks/rules-of-hooks": "error", // Enforces the rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
      "accessor-pairs": [
        "off"
      ],
      "array-callback-return": [
        "off"
      ],
      "arrow-body-style": [
        "off"
      ],
      "block-scoped-var": [
        "off"
      ],
      "camelcase": [
        "warn"
      ],
      "capitalized-comments": [
        "off"
      ],
      "class-methods-use-this": [
        "off"
      ],
      "complexity": [
        "off"
      ],
      "consistent-return": [
        "off"
      ],
      "consistent-this": [
        "off"
      ],
      "constructor-super": [
        "off"
      ],
      "curly": [
        "off"
      ],
      "default-case": [
        "off"
      ],
      "default-case-last": [
        "off"
      ],
      "default-param-last": [
        "off"
      ],
      "dot-notation": [
        "off"
      ],
      "eqeqeq": [
        "off"
      ],
      "for-direction": [
        "off"
      ],
      "func-name-matching": [
        "off"
      ],
      "func-names": [
        "off"
      ],
      "func-style": [
        "off"
      ],
      "getter-return": [
        "off"
      ],
      "grouped-accessor-pairs": [
        "off"
      ],
      "guard-for-in": [
        "off"
      ],
      "id-denylist": [
        "off"
      ],
      "id-length": [
        "off"
      ],
      "id-match": [
        "off"
      ],
      "init-declarations": [
        "off"
      ],
      "line-comment-position": [
        "off"
      ],
      "logical-assignment-operators": [
        "off"
      ],
      "max-classes-per-file": [
        "off"
      ],
      "max-depth": [
        "off"
      ],
      "max-lines": [
        "off"
      ],
      "max-lines-per-function": [
        "off"
      ],
      "max-nested-callbacks": [
        "off"
      ],
      "max-params": [
        "off"
      ],
      "max-statements": [
        "off"
      ],
      "multiline-comment-style": [
        "off"
      ],
      "new-cap": [
        "off"
      ],
      "no-alert": [
        "warn"
      ],
      "no-array-constructor": [
        "off"
      ],
      "no-async-promise-executor": [
        "off"
      ],
      "no-await-in-loop": [
        "off"
      ],
      "no-bitwise": [
        "off"
      ],
      "no-caller": [
        "off"
      ],
      "no-case-declarations": [
        "off"
      ],
      "no-class-assign": [
        "off"
      ],
      "no-compare-neg-zero": [
        "off"
      ],
      "no-cond-assign": [
        "off"
      ],
      "no-console": [
        "warn"
      ],
      "no-const-assign": [
        "off"
      ],
      "no-constant-binary-expression": [
        "off"
      ],
      "no-constant-condition": [
        "off"
      ],
      "no-constructor-return": [
        "off"
      ],
      "no-continue": [
        "off"
      ],
      "no-control-regex": [
        "off"
      ],
      "no-debugger": [
        "off"
      ],
      "no-delete-var": [
        "off"
      ],
      "no-div-regex": [
        "off"
      ],
      "no-dupe-args": [
        "off"
      ],
      "no-dupe-class-members": [
        "off"
      ],
      "no-dupe-else-if": [
        "off"
      ],
      "no-dupe-keys": [
        "off"
      ],
      "no-duplicate-case": [
        "off"
      ],
      "no-duplicate-imports": [
        "warn"
      ],
      "no-else-return": [
        "off"
      ],
      "no-empty": [
        "off"
      ],
      "no-empty-character-class": [
        "off"
      ],
      "no-empty-function": [
        "off"
      ],
      "no-empty-pattern": [
        "off"
      ],
      "no-empty-static-block": [
        "off"
      ],
      "no-eq-null": [
        "off"
      ],
      "no-eval": [
        "off"
      ],
      "no-ex-assign": [
        "off"
      ],
      "no-extend-native": [
        "off"
      ],
      "no-extra-bind": [
        "off"
      ],
      "no-extra-boolean-cast": [
        "off"
      ],
      "no-extra-label": [
        "off"
      ],
      "no-fallthrough": [
        "off"
      ],
      "no-func-assign": [
        "off"
      ],
      "no-global-assign": [
        "off"
      ],
      "no-implicit-coercion": [
        "off"
      ],
      "no-implicit-globals": [
        "off"
      ],
      "no-implied-eval": [
        "off"
      ],
      "no-import-assign": [
        "off"
      ],
      "no-inline-comments": [
        "off"
      ],
      "no-inner-declarations": [
        "off"
      ],
      "no-invalid-regexp": [
        "off"
      ],
      "no-invalid-this": [
        "off"
      ],
      "no-irregular-whitespace": [
        "off"
      ],
      "no-iterator": [
        "off"
      ],
      "no-label-var": [
        "off"
      ],
      "no-labels": [
        "off"
      ],
      "no-lone-blocks": [
        "off"
      ],
      "no-lonely-if": [
        "off"
      ],
      "no-loop-func": [
        "off"
      ],
      "no-loss-of-precision": [
        "off"
      ],
      "no-magic-numbers": [
        "off"
      ],
      "no-misleading-character-class": [
        "off"
      ],
      "no-mixed-operators": [
        "off"
      ],
      "no-multi-assign": [
        "off"
      ],
      "no-multi-str": [
        "off"
      ],
      "no-native-reassign": [
        "off"
      ],
      "no-negated-condition": [
        "off"
      ],
      "no-nested-ternary": [
        "off"
      ],
      "no-new": [
        "off"
      ],
      "no-new-func": [
        "off"
      ],
      "no-new-native-nonconstructor": [
        "off"
      ],
      "no-new-symbol": [
        "off"
      ],
      "no-new-wrappers": [
        "off"
      ],
      "no-nonoctal-decimal-escape": [
        "off"
      ],
      "no-obj-calls": [
        "off"
      ],
      "no-object-constructor": [
        "off"
      ],
      "no-octal": [
        "off"
      ],
      "no-octal-escape": [
        "off"
      ],
      "no-param-reassign": [
        "off"
      ],
      "no-plusplus": [
        "off"
      ],
      "no-promise-executor-return": [
        "off"
      ],
      "no-proto": [
        "off"
      ],
      "no-prototype-builtins": [
        "off"
      ],
      "no-redeclare": [
        "off"
      ],
      "no-regex-spaces": [
        "off"
      ],
      "no-restricted-exports": [
        "off"
      ],
      "no-restricted-globals": [
        "off"
      ],
      "no-restricted-imports": [
        "off"
      ],
      "no-restricted-properties": [
        "off"
      ],
      "no-restricted-syntax": [
        "off"
      ],
      "no-return-assign": [
        "off"
      ],
      "no-script-url": [
        "off"
      ],
      "no-self-assign": [
        "off"
      ],
      "no-self-compare": [
        "off"
      ],
      "no-sequences": [
        "off"
      ],
      "no-setter-return": [
        "off"
      ],
      "no-shadow": [
        "off"
      ],
      "no-shadow-restricted-names": [
        "off"
      ],
      "no-sparse-arrays": [
        "off"
      ],
      "no-template-curly-in-string": [
        "off"
      ],
      "no-ternary": [
        "off"
      ],
      "no-this-before-super": [
        "off"
      ],
      "no-throw-literal": [
        "off"
      ],
      "no-undef": [
        "off"
      ],
      "no-undef-init": [
        "off"
      ],
      "no-undefined": [
        "off"
      ],
      "no-underscore-dangle": [
        "off"
      ],
      "no-unexpected-multiline": [
        "off"
      ],
      "no-unmodified-loop-condition": [
        "off"
      ],
      "no-unneeded-ternary": [
        "off"
      ],
      "no-unreachable": [
        "off"
      ],
      "no-unreachable-loop": [
        "off"
      ],
      "no-unsafe-finally": [
        "off"
      ],
      "no-unsafe-negation": [
        "off"
      ],
      "no-unsafe-optional-chaining": [
        "off"
      ],
      "no-unused-expressions": [
        "off"
      ],
      "no-unused-labels": [
        "off"
      ],
      "no-unused-private-class-members": [
        "off"
      ],
      "no-unused-vars": [
        "off"
      ],
      "no-use-before-define": [
        "off"
      ],
      "no-useless-backreference": [
        "off"
      ],
      "no-useless-call": [
        "off"
      ],
      "no-useless-catch": [
        "off"
      ],
      "no-useless-computed-key": [
        "off"
      ],
      "no-useless-concat": [
        "off"
      ],
      "no-useless-constructor": [
        "off"
      ],
      "no-useless-escape": [
        "off"
      ],
      "no-useless-rename": [
        "off"
      ],
      "no-useless-return": [
        "off"
      ],
      "no-var": [
        "warn"
      ],
      "no-void": [
        "off"
      ],
      "no-warning-comments": [
        "off"
      ],
      "no-with": [
        "off"
      ],
      "object-shorthand": [
        "off"
      ],
      "one-var": [
        "off"
      ],
      "operator-assignment": [
        "off"
      ],
      "prefer-arrow-callback": [
        "off"
      ],
      "prefer-const": [
        "warn"
      ],
      "prefer-destructuring": [
        "off"
      ],
      "prefer-exponentiation-operator": [
        "off"
      ],
      "prefer-named-capture-group": [
        "off"
      ],
      "prefer-numeric-literals": [
        "off"
      ],
      "prefer-object-has-own": [
        "off"
      ],
      "prefer-object-spread": [
        "off"
      ],
      "prefer-promise-reject-errors": [
        "off"
      ],
      "prefer-regex-literals": [
        "off"
      ],
      "prefer-rest-params": [
        "off"
      ],
      "prefer-spread": [
        "off"
      ],
      "prefer-template": [
        "off"
      ],
      "radix": [
        "off"
      ],
      "require-atomic-updates": [
        "off"
      ],
      "require-await": [
        "off"
      ],
      "require-unicode-regexp": [
        "off"
      ],
      "require-yield": [
        "off"
      ],
      "sort-imports": [
        "off"
      ],
      "sort-keys": [
        "off"
      ],
      "sort-vars": [
        "off"
      ],
      "strict": [
        "off"
      ],
      "symbol-description": [
        "off"
      ],
      "unicode-bom": [
        "off"
      ],
      "use-isnan": [
        "off"
      ],
      "valid-typeof": [
        "off"
      ],
      "vars-on-top": [
        "off"
      ],
      "yoda": [
        "off"
      ]
    },
    "settings": {
      react: {
        version: 'detect', // You can add this if you get a warning about the React version when you lint
      },
    }
  }
];

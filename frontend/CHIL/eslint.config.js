import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', '**/coverage/'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import-plugin': importPlugin,
    },
    settings: {
      "import/resolver": {
        "typescript": true,
        "node": true,
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "sort-imports": [
          "error",
          {
            "ignoreCase": true,
            "ignoreDeclarationSort": true
          }
      ],
      'import/no-unresolved': 'off',
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            // disables cross-feature imports:
            // eg. src/features/foo should not import from src/features/bar, etc.
            {
              target: './src/features/login-form',
              from: './src/features',
              except: ['./login-form'],
            },

            // Add each feature here as it is developed

            // enforce unidirectional codebase:
            // e.g. src/app can import from src/features but not the other way around
            {
              target: './src/features',
              from: './src/app',
            },

            // e.g src/features and src/app can import from these shared modules but not the other way around
            {
              target: [
                './src/assets',
                './src/components',
                './src/config',
                './src/utils',
                './src/stories',
              ],
              from: ['./src/features', './src/app'],
            },
          ],
        },
      ],
    },
  },
)

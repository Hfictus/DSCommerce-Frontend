import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    //ADICIONADO: Configuração de regras personalizadas
    rules: {
      // Permite o uso do tipo Function
      '@typescript-eslint/ban-types': ['error', {
        types: {
          Function: false,
        },
        extendDefaults: true,
      }],
      
      // Permite o uso de any (ou use 'warn' para apenas avisar)
      '@typescript-eslint/no-explicit-any': 'off',
      
      // Permite arrays de dependências vazios no useEffect (ou use 'off' para desabilitar)
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
])

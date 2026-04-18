import globals from 'globals'
import pluginJs from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

export default [
  { ignores: ['node_modules/'] },
  { files: ['**/*.js'], languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  stylistic.configs.recommended,
]

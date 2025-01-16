import withNuxt from './.nuxt/eslint.config.mjs'
import prettier from 'eslint-plugin-prettier'

export default withNuxt({
  plugins: { prettier }, // Add Prettier plugin
  rules: {
    'vue/multi-word-component-names': 'off', // Disable multi-word component name rule
    'prettier/prettier': [
      'error',
      {
        semi: false,
        tabWidth: 2,
        useTabs: false,
        htmlSelfClosing: 'never',
      },
    ],
    'vue/html-self-closing': [
      'off',
      {
        html: {
          void: 'never', // Do not self-close void elements like <input>
          normal: 'never', // Do not self-close normal elements like <div>
          component: 'always', // Always self-close Vue components
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
  ignores: [
    'node_modules/**', // Ignore node_modules
    '.nuxt/**', // Ignore Nuxt-generated files
    'dist/**', // Ignore build output
  ],
})

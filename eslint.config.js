import antfu from '@antfu/eslint-config'

// import typescriptEslint from "@typescript-eslint"

export default antfu(
  {
    unocss: true,
    ignores: [
      'public',
      'dist*',
    ],
  },

  {
    rules: {
      'no-console': 'off',
      'eslint-comments/no-unlimited-disable': 'off',
      'curly': ['error', 'all'],
      'antfu/consistent-list-newline': 'off',
      '@typescript-eslint/no-namespace': 'off',
    },
  },
  {
    files: [
      'src/**/*.vue',
    ],
    rules: {
      '@typescript-eslint/no-namespace': 'off',
      'vue/block-order': ['error', {
        order: ['route', 'script', 'template', 'style'],
      }],
    },
  },
)

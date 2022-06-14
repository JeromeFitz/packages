const path = require('path')

module.exports = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  async viteFinal(config, { configType }) {
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: '@jeromefitz/design-system',
            replacement: path.resolve(__dirname, '../src/'),
          },
        ],
      },
    }
  },
}

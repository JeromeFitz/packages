// const path = require('path')
// const meta = require('meta')
// const { fileURLToPath } = require('url')

// const __filename2 = fileURLToPath(import.meta.url)
// const __dirname2 = path.dirname(__filename2)
// console.log('directory-name 👉️', __dirname2)
// console.log(path.join(__dirname2, '../src', 'index.ts'))

module.exports = {
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: true,
        backgrounds: false,
        controls: true,
        docs: true,
        toolbars: true,
        viewport: true,
      },
    },
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  // features: {
  //   previewCsfV3: true,
  // },
  framework: '@storybook/react',
  // typescript: {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: 'react-docgen-typescript',
  //   reactDocgenTypescriptOptions: {
  //     shouldExtractLiteralValuesFromEnum: true,
  //     propFilter: (prop) =>
  //       prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
  //   },
  // },
  stories: ['../src/**/*.stories.tsx'],
  async viteFinal(config, { configType }) {
    console.dir(`> config`)
    console.dir(config)
    return config
    // return {
    //   ...config,
    //   resolve: {
    //     alias: {
    //       ...config.resolve.alias,
    //       // find: '@jeromefitz/design-system',
    //       // replacement: path.resolve(path.join(__dirname, '..', 'src')),
    //     },
    //   },
    // }
  },
}

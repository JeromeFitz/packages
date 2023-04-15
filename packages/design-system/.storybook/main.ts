import type { StorybookConfig } from '@storybook/react-vite'
const config: StorybookConfig = {
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
    '@storybook/addon-mdx-gfm',
  ],
  core: {
    disableTelemetry: true,
  },
  features: {},
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  stories: ['../src/**.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  // async viteFinal(config, { configType }) {
  //   return config
  // },
  viteFinal(config, {}) {
    return config
  },
  docs: {
    autodocs: true,
  },
}
export default config

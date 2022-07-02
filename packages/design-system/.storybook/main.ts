import type { StorybookViteConfig } from '@storybook/builder-vite'

const config: StorybookViteConfig = {
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
    // 'storybook-addon-themes',
    'multiple-themes-stitches',
  ],
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  features: {
    previewCsfV3: true,
    previewMdx2: false,
    storyStoreV7: true,
  },
  framework: '@storybook/react',
  staticDirs: ['../public'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  stories: ['../src/**/*.stories.tsx'],
  // async viteFinal(config, { configType }) {
  //   return config
  // },
  viteFinal(config, {}) {
    return config
  },
}

export default config

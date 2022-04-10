/* eslint-disable @typescript-eslint/no-var-requires */
const { withPlugins } = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@jeromefitz/design-system'])

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  compress: true,
  eslint: {
    build: false,
  },
  experimental: {
    concurrentFeatures: false,
    serverComponents: false,
  },
  swcMinify: true,
}

/**
 * @note
 * [plugin, pluginConfig]
 */
module.exports = withPlugins([[withTM]], nextConfig)

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: false,
    transpilePackages: ['@jeromefitz/design-system'],
  },
  swcMinify: true,
}

/**
 * @note
 * [plugin, pluginConfig]
 */
// const plugins = []
// module.exports = plugins.reduce((config, plugin) => plugin(config), nextConfig)
module.exports = nextConfig

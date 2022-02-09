/* eslint-disable @typescript-eslint/no-var-requires */
const { withPlugins } = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@jeromefitz/design-system'])

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {}

/**
 * @note
 * [plugin, pluginConfig]
 */
module.exports = withPlugins([[withTM]], nextConfig)

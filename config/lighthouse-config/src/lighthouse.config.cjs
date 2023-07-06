const config = ({ website }) => ({
  ci: {
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'bf-cache': 'off',
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
        // @note(radix-ui) bg3+text11 passes, not sure what is going on here
        'color-contrast': 'warn',
        'csp-xss': 'off',
        'errors-in-console': 'off',
        'largest-contentful-paint': ['warn', { minScore: 0.8 }],
        'legacy-javascript': 'off',
        'non-composited-animations': 'off',
        'render-blocking-resources': 'off',
        'speed-index': 'off',
        // @note(lighthouse) this is not representative of production
        'server-response-time': 'off',
        'tap-targets': 'off',
        'unused-css-rules': 'warn',
        'unused-javascript': 'off',
        'uses-responsive-images': 'off',
      },
    },
    collect: {
      // Don't run certain audits
      skipAudits: ['redirects-http'],
      // Don't clear localStorage/IndexedDB/etc before loading the page.
      disableStorageReset: true,
      // Wait up to 90s for the page to load
      maxWaitForLoad: 90000,
      startServerCommand: `pnpm turbo run start --filter="${website}"`,
      startServerReadyPattern:
        'ready - started server on 0.0.0.0:3000, url: http://localhost:3000',
      url: ['http://localhost:3000'],
      numberOfRuns: 1,
      settings: {
        preset: 'desktop',
      },
    },
    server: {},
    upload: {
      target: 'temporary-public-storage',
    },
  },
})

module.exports = config

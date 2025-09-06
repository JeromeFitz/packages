import type { DocumentContext } from 'next/document'

import { getCssText, reset } from '@jeromefitz/design-system/src/lib/stitches.config'

import Document, { Head, Html, Main, NextScript } from 'next/document'

/**
 * @note
 * Get the css and reset the internal css representation.
 * This is very *IMPORTANT* to do as the server might handle multiple requests
 * and we don't want to have the css accumulated from previous requests
 *
 * ref: https://github.com/radix-ui/design-system/pull/360
 */
const getCssAndReset = () => {
  const css = getCssText()
  reset()
  return css
}

class MyDocument extends Document<DocumentContext> {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta content="no" name="msapplication-tap-highlight" />
          <meta content="nofish" name="superfish" />
          <meta content="origin-when-cross-origin" name="referrer" />
          <style
            // biome-ignore lint/security/noDangerouslySetInnerHtml: migrate
            dangerouslySetInnerHTML={{ __html: getCssAndReset() }}
            id="stitches"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

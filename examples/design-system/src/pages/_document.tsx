import { getCssText, reset } from '@jeromefitz/design-system/stitches.config'
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

import { mediaStyles } from '~context/Media'

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
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="superfish" content="nofish" />
          <meta content="origin-when-cross-origin" name="referrer" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssAndReset() }}
          />
          <style
            id="appmedia"
            type="text/css"
            dangerouslySetInnerHTML={{
              __html: mediaStyles.replace(/[\r\n]+/g, ' '),
              // .replace(/fresnel/g, 'f'),
            }}
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

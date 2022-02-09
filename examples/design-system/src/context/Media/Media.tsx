import { createMedia } from '@artsy/fresnel'

const AppMedia = createMedia({
  breakpoints: {
    xs: 0,
    sm: 768,
    md: 1000,
    lg: 1200,
  },
  interactions: {
    hover: '(hover: hover)',
    notHover: '(hover: none)',
    landscape: 'not all and (orientation: landscape)',
    portrait: 'not all and (orientation: portrait)',
  },
})

// Make styles for injection into the header of the page
// customizations in: _document
const mediaStyles = AppMedia.createMediaStyle()
const { Media, MediaContextProvider } = AppMedia

export { mediaStyles, Media, MediaContextProvider }

// import { Box, Emoji } from '../index'
import { Box } from '../index'

const Note = ({ children, label = 'Note:' }) => {
  return (
    <>
      <Box
        as="div"
        css={{
          p: '1rem',
          display: 'flex',
          alignItems: 'center',
          minHeight: '2rem',
          borderRadius: '$4',
          color: '$colors$gray12',
          backgroundColor: '$colors$gray1',
          border: '1px solid $colors$gray12',
          fontSize: '1rem',
          lineHeight: '1.5',
          wordBreak: 'break-work',
          boxSizing: 'border-box',
          my: '$6',
        }}
      >
        <span>
          {/* Label */}
          <span>
            <b>
              {/* <Emoji character={`📝️`} margin={true} /> */}
              <Box
                as="span"
                aria-label={`emoji memo`}
                // @hack(emoji) this breaks the underline on links
                css={{
                  fontStyle: 'normal',
                  mr: '$1',
                }}
                role="img"
                style={{
                  WebkitBackgroundClip: 'text',
                  // @note(WebkitTextFillColor) any color will break out of transparency
                  WebkitTextFillColor: 'inherit',
                }}
              >
                {`📝️`}
                {/* @hack(emoji) force two spaces */}
                {` `}
                {` `}
              </Box>
              {label}
              {` `}
            </b>
          </span>
          {/* Note */}
          {children}
        </span>
        {/* Action */}
        <Box
          as="div"
          css={{
            ml: 'auto',
            pl: '0.5rem',
          }}
        />
      </Box>
    </>
  )
}

export { Note }

// import { Box, Emoji } from '../index'
import { Box } from '../index'

const Note = ({ children, label = 'Note:' }) => {
  return (
    <>
      <Box
        as="div"
        css={{
          alignItems: 'center',
          backgroundColor: '$colors$gray1',
          border: '1px solid $colors$gray12',
          borderRadius: '$4',
          boxSizing: 'border-box',
          color: '$colors$gray12',
          display: 'flex',
          fontSize: '1rem',
          lineHeight: '1.5',
          minHeight: '2rem',
          my: '$6',
          p: '1rem',
          wordBreak: 'break-work',
        }}
      >
        <span>
          {/* Label */}
          <span>
            <b>
              {/* <Emoji character={`📝️`} margin={true} /> */}
              <Box
                aria-label={`emoji memo`}
                as="span"
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

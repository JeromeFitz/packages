import * as React from 'react'

import { Box, Emoji } from '../../components'

const Note = ({ children, label = 'Note:' }) => {
  return (
    <>
      <Box
        as="div"
        css={{
          // padding: 7px var(--geist-gap-half);
          // display: flex;
          // align-items: center;
          // min-height: var(--geist-form-height);
          // border-radius: var(--geist-radius);
          // color: var(--themed-fg);
          // background: var(--themed-bg);
          // border: 1px solid var(--themed-border,var(--accents-2));
          // font-size: 14px;
          // line-height: 24px;
          // word-break: break-word;
          // box-sizing: border-box;
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
              <Emoji character={`📝️`} margin={true} />
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
            // margin-left: auto;
            // padding-left: var(--geist-gap-half);
            ml: 'auto',
            pl: '0.5rem',
          }}
        />
      </Box>
    </>
  )
}

export default Note

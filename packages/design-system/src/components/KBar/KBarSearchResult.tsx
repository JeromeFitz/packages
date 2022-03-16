import { ReplyIcon } from '@heroicons/react/outline'
import { ActionImpl } from 'kbar/lib/action'

import { Box, Flex, Text, Kbd, Focused } from '../index'

const cssIconHeroToRadix = {
  marginTop: '3px',
  marginRight: '10px',
  width: '1rem',
  height: '1rem',
  transform: 'rotate(180deg) scaleX(-1)',
}

interface KBarSearchResultProps {
  active: boolean
  item: string | ActionImpl
}

const KBarSearchResult = ({ active, item }: KBarSearchResultProps) => {
  // const [focused, setFocused] = React.useState(null)

  if (typeof item == 'string') {
    return (
      <Box css={{ mt: '$1', pt: '$1', mb: '$3', pb: '$3', px: '$2' }}>
        <Text
          size="1"
          css={{ color: '$hiContrast', textTransform: 'uppercase' }}
          weight="semiBold"
        >
          {item}
        </Text>
      </Box>
    )
  }

  return (
    <Box
      css={{
        py: '$2',
        px: '$2',
        borderLeftWidth: '$2',
        cursor: 'pointer',
        // background: active ? '$colors$gray8' : 'transparent',
        borderRadius: '$2',
      }}
      role="button"
    >
      <Flex gap="4">
        {item.icon && (
          <Flex
            direction="column"
            justify="center"
            align="center"
            css={{
              mt: 0,
              '@bp1': {
                minWidth: '2rem',
              },
              '& svg': {
                height: '$3',
                width: '$3',
                color: '$hiContrast',
              },
            }}
          >
            <Text
              css={{
                color: '$hiContrast',
              }}
              size="1"
            >
              {item.icon}
            </Text>
          </Flex>
        )}
        <Flex
          css={{
            alignItems: 'center',
            flexGrow: '1',
            justifyContent: 'start',
            // @todo(design-system) turn this into variant "truncate"
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
          direction="row"
          gap="3"
        >
          <Text
            css={{
              color: '$hiContrast',
              // fontSize: '1rem',
              lineHeight: 1.2,
              // @todo(design-system) turn this into variant "truncate"
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              // '@bp1': {
              //   fontSize: '1.25rem',
              // },
            }}
            size="3"
            weight="bold"
          >
            {item.name}
          </Text>
          {!!item.subtitle && (
            <>
              <Text
                as="span"
                css={{ display: 'none', '@bp1': { display: 'inline-flex' } }}
                size="1"
              >
                —
              </Text>
              <Text
                as="span"
                css={{
                  color: '$hiContrast',
                  fontFamily: '$mono',
                  my: '$1',
                  display: 'none',
                  '@bp1': { display: 'inline-flex' },
                  // @todo(design-system) turn this into variant "truncate"
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
                size="1"
              >
                {item.subtitle}
              </Text>
            </>
          )}
        </Flex>
        {item.shortcut && (
          <Flex
            css={{
              alignItems: 'right',
              marginRight: '1.75rem',
              display: 'none',
              '@bp1': { display: 'inline-flex' },
            }}
            gap="2"
          >
            {item.shortcut.map((key, i) => (
              <Kbd
                key={`${item.id}-shortcut-key-${i}`}
                css={{
                  cursor: 'inherit',
                  fontFamily: '$mono',
                  fontSize: '$1',
                  // fontWeight: 700,
                  py: '$2',
                }}
              >
                {key}
              </Kbd>
            ))}
          </Flex>
        )}
      </Flex>
      {active && (
        <Focused
          css={{
            alignItems: 'center',
            borderRadius: '$3',
            display: 'flex',
            height: '100%',
            justifyContent: 'flex-end',
            left: '1px',
            width: '99%',
            '& svg': {
              display: 'none',
              '@bp1': { display: 'inline-flex' },
            },
          }}
          layoutId="highlight"
        >
          <ReplyIcon className="hi2ri" style={cssIconHeroToRadix} />
        </Focused>
      )}
    </Box>
  )
}

export { KBarSearchResult }

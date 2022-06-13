import { ActionImpl } from 'kbar/lib/action'

import { Box, Flex, Focused, Icon, Kbd, Text } from '../index'

interface KBarSearchResultProps {
  active: boolean
  item: string | ActionImpl
}

const KBarSearchResult = ({ active, item }: KBarSearchResultProps) => {
  // const [focused, setFocused] = React.useState(null)

  if (typeof item == 'string') {
    return (
      <Box css={{ mt: '$2', pt: '$2', mb: '$4', pb: '$4', px: '$3' }}>
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
        py: '$3',
        px: '$3',
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
                height: '$4',
                width: '$4',
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
            weight="7"
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
                  my: '$3',
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
                  py: '$3',
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
            top: '1px',
            width: '99%',
            '& svg': {
              display: 'none',
              '@bp1': { display: 'inline-flex' },
            },
          }}
          layoutId="highlight"
        >
          <Icon.Return
            style={{
              marginTop: '3px',
              marginRight: '10px',
              width: '0.75rem',
              height: '0.75rem',
            }}
          />
        </Focused>
      )}
    </Box>
  )
}

export { KBarSearchResult }

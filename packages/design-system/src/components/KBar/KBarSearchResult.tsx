import { ActionImpl } from 'kbar/lib/action'

import { Box, Flex, Text, Kbd, Focused, Separator } from '../index'

interface KBarSearchResultProps {
  active: boolean
  item: string | ActionImpl
}

const KBarSearchResult = ({ active, item }: KBarSearchResultProps) => {
  // const [focused, setFocused] = React.useState(null)

  if (typeof item == 'string') {
    return (
      <Box css={{ py: '$1', px: '$2' }}>
        <Separator decorative margin="my2" size="full" />
        <Text size="1" css={{ color: '$hiContrast', textTransform: 'uppercase' }}>
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
            justify={!!item.subtitle ? 'start' : 'center'}
            align="center"
            css={{
              mt: !!item.subtitle ? '3px' : 0,
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
          direction="column"
          css={{
            flexGrow: '1',
            justifyContent: 'center',
            // @todo(design-system) turn this into variant "truncate"
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
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
          {item.subtitle && (
            <Text
              size="1"
              css={{
                color: '$hiContrast',
                fontFamily: '$mono',
                my: '$1',
                // @todo(design-system) turn this into variant "truncate"
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {item.subtitle ?? ''}
            </Text>
          )}
        </Flex>
        {item.shortcut && (
          <Flex
            css={{
              alignItems: 'right',
              '$$tw-space-x-reverse': 0,
              marginRight: 'calc(0.25rem * $$tw-space-x-reverse)',
              marginLeft: 'calc(0.25rem * calc(1 - $$tw-space-x-reverse))',
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
          css={{ borderRadius: '$3', height: '100%', left: '1px', width: '99%' }}
          layoutId="highlight"
        />
      )}
    </Box>
  )
}

export { KBarSearchResult }

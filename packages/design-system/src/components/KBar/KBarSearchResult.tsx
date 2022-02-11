import {
  Box,
  Flex,
  Heading,
  Kbd,
  Text,
} from '@jeromefitz/design-system/src/components'
import { ActionImpl } from 'kbar/lib/action'

import { Separator } from '../Separator'

interface KBarSearchResultProps {
  active: boolean
  item: string | ActionImpl
}

const KBarSearchResult = ({ active, item }: KBarSearchResultProps) => {
  if (typeof item == 'string') {
    return (
      <Box css={{ py: '$1', px: '$4' }}>
        <Separator />
        <Heading size="1" css={{ color: '$hiContrast', textTransform: 'uppercase' }}>
          {item}
        </Heading>
      </Box>
    )
  }

  return (
    <Box
      css={{
        py: '$2',
        px: '$4',
        borderLeftWidth: '$2',
        cursor: 'pointer',
        background: active ? '$colors$gray8' : 'transparent',
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
              '& svg': {
                height: '$5',
                width: '$5',
                color: '$hiContrast',
              },
            }}
          >
            <Heading
              css={{
                color: '$hiContrast',
                fontSize: '1.5rem',
                // @hack(kbar)
                mb: !!item.subtitle ? '0' : '0',
                mt: !!item.subtitle ? '0' : '$1',
                '@bp1': {
                  fontSize: '1.75rem',
                },
              }}
              size="4"
            >
              {item.icon}
            </Heading>
            {/* {item.subtitle && ( */}
            <Text
              size="1"
              css={{
                color: '$hiContrast',
                fontFamily: '$mono',
                my: '$1',
                '&::after': {
                  background: 'transparent',
                  content: `"."`,
                  color: 'transparent',
                },
              }}
            />
            {/* )} */}
          </Flex>
        )}
        <Flex
          direction="column"
          css={{
            flexGrow: '1',
            // @todo(design-system) turn this into variant "truncate"
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          <Heading
            css={{
              color: '$hiContrast',
              fontSize: '1.5rem',
              // @todo(design-system) turn this into variant "truncate"
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              '@bp1': {
                fontSize: '1.75rem',
              },
            }}
            size="4"
          >
            {item.name}
          </Heading>
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
              {item.subtitle}
            </Text>
          )}
        </Flex>
        {item.shortcut && (
          <Flex
            css={{
              alignItems: 'center',
              '$$tw-space-x-reverse': 0,
              marginRight: 'calc(0.25rem * $$tw-space-x-reverse)',
              marginLeft: 'calc(0.25rem * calc(1 - $$tw-space-x-reverse))',
            }}
          >
            {item.shortcut.map((key, i) => (
              <Kbd
                key={`${item.id}-shortcut-key-${i}`}
                css={{
                  cursor: 'inherit',
                  fontFamily: '$mono',
                  fontSize: '$1',
                  py: '$2',
                }}
              >
                {key}
              </Kbd>
            ))}
          </Flex>
        )}
      </Flex>
    </Box>
  )
}

export { KBarSearchResult }

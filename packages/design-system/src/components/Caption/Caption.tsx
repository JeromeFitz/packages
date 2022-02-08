import { Text } from '@ds/components'

const Caption = ({ children }) => {
  return (
    <Text
      as="p"
      css={{
        fontSize: '$2',
        lineHeight: '1.25',
        ml: '$1',
        py: '$3',
      }}
    >
      {children}
    </Text>
  )
}

export { Caption }

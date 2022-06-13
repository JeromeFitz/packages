import { Text } from '../index'

const Caption = ({ children }) => {
  return (
    <Text
      as="p"
      css={{
        fontSize: '$1',
        lineHeight: '1.125',
        ml: '$2',
        py: '$4',
      }}
    >
      {children}
    </Text>
  )
}

export { Caption }

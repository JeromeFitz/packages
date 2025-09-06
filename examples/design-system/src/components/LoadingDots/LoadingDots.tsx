import {
  Flex,
  Heading,
  LoadingDots,
  Separator,
} from '@jeromefitz/design-system/src/components'

/**
 * @note uh, this seems odd to say the least
 */
type Sizes = '2' | '3' | '4' | '5' | '6'
const sizes: Sizes[] = ['6', '5', '4', '3', '2']

const _LoadingDots = () => {
  return (
    <>
      <Heading css={{ mb: '$4' }} size="3">
        ⏱️ Loading Dots
      </Heading>
      <Flex>
        {sizes.map((size, sizeIdx) => {
          return (
            <LoadingDots css={{ pr: '$4' }} key={`size-${sizeIdx}`} size={size}>
              <span />
              <span />
              <span />
            </LoadingDots>
          )
        })}
      </Flex>
      <Separator decorative my="3" size="full" />
      <LoadingDots
        css={{
          '& span': { backgroundColor: '$colors$green11' },
          '$$loading-dots-size': '16px',
        }}
      >
        <span />
        <span />
        <span />
      </LoadingDots>
      <Separator decorative my="3" size="full" />
      <LoadingDots
        css={{
          '& span': { backgroundColor: '$colors$red11' },
        }}
        size="6"
      >
        <span />
        <span />
        <span />
      </LoadingDots>
      <Separator decorative my="3" size="full" />
    </>
  )
}

export { _LoadingDots as LoadingDots }

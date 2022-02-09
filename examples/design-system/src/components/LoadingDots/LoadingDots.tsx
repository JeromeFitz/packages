import { Flex, Heading, LoadingDots } from '@jeromefitz/design-system/components'

import { Separator } from '../Separator'
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
      <Separator />
      <LoadingDots
        css={{
          '$$loading-dots-size': '16px',
          '& span': { backgroundColor: '$colors$green11' },
        }}
      >
        <span />
        <span />
        <span />
      </LoadingDots>
      <Separator />
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
      <Separator />
    </>
  )
}

export { _LoadingDots as LoadingDots }

import type { ParagraphWeightVariants } from '../Paragraph/Paragraph.types'

import { Heading, Paragraph, Skeleton } from '../index'

const SkeletonTitle = () => (
  <Skeleton
    as="span"
    css={{
      fontSize: 'inherit',
      height: '$fontSizes$8',
      mb: '$1',
      pr: 'var(--width-1_4)',
    }}
    variant="heading"
  >
    &nbsp;
  </Skeleton>
)

const SkeletonDescription = () => (
  <Skeleton
    as="span"
    css={{
      fontSize: 'inherit',
      height: '$fontSizes$5',
      //
      mb: '$7',
      ml: '$1',
      mt: '$2',
      pr: 'var(--width-2_4)',
    }}
    variant="text"
  >
    &nbsp;
  </Skeleton>
)

const SkeletonHeading = () => {
  return (
    <>
      <Heading size="4">
        <SkeletonTitle />
      </Heading>
      <Paragraph as="p" css={{ mb: '$7', ml: '$1', mt: '$2' }} size="2" weight="5">
        <SkeletonDescription />
      </Paragraph>
    </>
  )
}

type PageHeadingProps = {
  description: string
  title: string
  weight?: ParagraphWeightVariants
}
const PageHeading = ({ description, title, weight = '5' }: PageHeadingProps) => {
  return (
    <>
      <Heading size="4">{title}</Heading>
      <Paragraph
        as="p"
        css={{ mb: '$7', ml: '$1', mt: '$2' }}
        size="2"
        weight={weight}
      >
        {description}
      </Paragraph>
    </>
  )
}

export { PageHeading, SkeletonDescription, SkeletonHeading, SkeletonTitle }

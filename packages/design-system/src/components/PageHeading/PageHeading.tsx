import { Heading, Paragraph, Skeleton } from '../index'
import type { ParagraphWeightVariants } from '../Paragraph/Paragraph.types'
const SkeletonTitle = () => (
  <Skeleton
    as="span"
    variant="heading"
    css={{
      fontSize: 'inherit',
      height: '$fontSizes$8',
      mb: '$1',
      pr: 'var(--width-1_4)',
    }}
  >
    &nbsp;
  </Skeleton>
)

const SkeletonDescription = () => (
  <Skeleton
    as="span"
    variant="text"
    css={{
      fontSize: 'inherit',
      height: '$fontSizes$5',
      pr: 'var(--width-2_4)',
      //
      mb: '$7',
      mt: '$2',
      ml: '$1',
    }}
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
      <Paragraph size="2" as="p" css={{ mb: '$7', mt: '$2', ml: '$1' }} weight="5">
        <SkeletonDescription />
      </Paragraph>
    </>
  )
}

type PageHeadingProps = {
  title: string
  description: string
  weight?: ParagraphWeightVariants
}
const PageHeading = ({ title, description, weight = '5' }: PageHeadingProps) => {
  return (
    <>
      <Heading size="4">{title}</Heading>
      <Paragraph
        as="p"
        css={{ mb: '$7', mt: '$2', ml: '$1' }}
        size="2"
        weight={weight}
      >
        {description}
      </Paragraph>
    </>
  )
}

export { PageHeading, SkeletonHeading, SkeletonTitle, SkeletonDescription }

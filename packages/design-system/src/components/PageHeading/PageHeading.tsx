import { Heading, Paragraph, Skeleton } from '../../components'

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
      mb: '$7',
      mt: '$2',
      pr: 'var(--width-2_4)',
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
      <Paragraph size="2" as="p" css={{ mt: '$2', mb: '$7' }}>
        <SkeletonDescription />
      </Paragraph>
    </>
  )
}

const PageHeading = ({ title, description }) => {
  return (
    <>
      <Heading size="4">{title}</Heading>
      <Paragraph
        size="2"
        as="p"
        css={{ color: '$colors$gray11', mt: '$2', mb: '$7' }}
      >
        {description}
      </Paragraph>
    </>
  )
}

export { PageHeading, SkeletonHeading, SkeletonTitle, SkeletonDescription }

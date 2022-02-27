import { PageHeading, Text } from '@jeromefitz/design-system/src/components'

// import { LoadingDots } from '../components/LoadingDots'
import { NavigationMenu } from '../components/NavigationMenu'
import { Select } from '../components/Select'
import { Toast } from '../components/Toast'
import { LOTS_O_TEXT } from '../lib/constants'

function Home({}) {
  return (
    <>
      <PageHeading
        title="Design System"
        description="An example of in-progress work."
      />
      {/* <LoadingDots /> */}
      <NavigationMenu />
      <Select />
      <Toast />
      <Text css={{ lineHeight: '1.25' }} size="5">
        {LOTS_O_TEXT}
      </Text>
    </>
  )
}

export default Home

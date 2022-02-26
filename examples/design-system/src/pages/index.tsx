import { PageHeading } from '@jeromefitz/design-system/src/components'

// import { LoadingDots } from '../components/LoadingDots'
import { NavigationMenu } from '../components/NavigationMenu'
// import { Toast } from '../components/Toast'
// import { LOTS_O_TEXT } from '../lib/constants'

function Home({}) {
  return (
    <>
      <PageHeading
        title="Design System"
        description="An example of in-progress work."
      />
      {/* <LoadingDots /> */}
      {/* <Toast /> */}
      {/* <Text css={{ lineHeight: '1.25' }} size="5">
        {LOTS_O_TEXT}
      </Text> */}
      <NavigationMenu />
    </>
  )
}

export default Home

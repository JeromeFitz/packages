/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-ignore
import { PageHeading, Text } from '@jeromefitz/design-system/src/components'

// import { LoadingDots } from '../components/LoadingDots'
import { NavigationMenu } from '../components/NavigationMenu'
// import { Select } from '../components/Select'
import { Toast } from '../components/Toast'
// import { ToggleGroup } from '../components/ToggleGroup'
// import { Toolbar } from '../components/Toolbar'
// import { LOTS_O_TEXT } from '../lib/constants'

function Home({}) {
  return (
    <>
      <PageHeading
        title="Design System"
        description="An example of in-progress work."
      />
      {/* <LoadingDots /> */}
      <NavigationMenu />
      {/* <Select /> */}
      <Toast />
      {/* <ToggleGroup /> */}
      {/* <Toolbar /> */}
      {/* <Text css={{ lineHeight: '1.25' }} size="5">
        {LOTS_O_TEXT}
      </Text> */}
    </>
  )
}

export default Home

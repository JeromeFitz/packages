import { Box, PageHeading } from '@jeromefitz/design-system/components'

import { AppBar } from '../components/AppBar'
import { LoadingDots } from '../components/LoadingDots'
import { Toast } from '../components/Toast'

function Home({}) {
  return (
    <Box>
      <AppBar />
      <Box css={{ pt: '$4' }}>
        <PageHeading
          title="Design System"
          description="An example of in-progress work."
        />
        <LoadingDots />
        <Toast />
      </Box>
    </Box>
  )
}

export default Home

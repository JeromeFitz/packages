/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-ignore
import { Box, PageHeading, Text } from '@jeromefitz/design-system/src/components'
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from '@jeromefitz/design-system/src/custom/Tooltip'

// import { LoadingDots } from '../components/LoadingDots'
import { NavigationMenu } from '../components/NavigationMenu'
// import { Select } from '../components/Select'
// import { Switch } from '../components/Switch'
import { Toast } from '../components/Toast'

// import { ToggleGroup } from '../components/ToggleGroup'
// import { Toolbar } from '../components/Toolbar'
// import { LOTS_O_TEXT } from '../lib/constants'

function Home({}) {
  return (
    <>
      <PageHeading
        description="An example of in-progress work."
        title="Design System"
      />
      <Box css={{ width: '10%' }}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Text>Tooltip Trigger</Text>
            </TooltipTrigger>
            <TooltipPortal>
              <TooltipContent
                align="end"
                css={{ '@bp1': { display: 'inline-flex' }, display: 'none' }}
              >
                <>Tooltip Content</>
                <TooltipArrow />
              </TooltipContent>
            </TooltipPortal>
          </Tooltip>
        </TooltipProvider>
      </Box>
      {/* <LoadingDots /> */}
      <NavigationMenu />
      {/* <Select /> */}
      <Toast />
      {/* <Switch /> */}
      {/* <ToggleGroup /> */}
      {/* <Toolbar /> */}
      {/* <Text css={{ lineHeight: '1.25' }} size="5">
        {LOTS_O_TEXT}
      </Text> */}
    </>
  )
}

export default Home

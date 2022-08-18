import { CommandMenu } from '@jeromefitz/design-system/src/components'
import React from 'react'

import { CommandMenuData } from './CommandMenuData'

function CommandMenuWrapper() {
  return (
    <CommandMenu>
      <CommandMenuData />
    </CommandMenu>
  )
}

export { CommandMenuWrapper as CommandMenu }

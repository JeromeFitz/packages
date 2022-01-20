import * as LabelPrimitive from '@radix-ui/react-label'

import { Text } from '../../components'
import { styled } from '../../stitches.config'

const Label = styled(LabelPrimitive.Root, Text, {
  display: 'inline-block',
  verticalAlign: 'middle',
  cursor: 'default',
})

export { Label }

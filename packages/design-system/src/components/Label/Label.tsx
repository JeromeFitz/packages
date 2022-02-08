import { Text } from '@ds/components'
import { styled } from '@ds/stitches.config'
import * as LabelPrimitive from '@radix-ui/react-label'

const Label = styled(LabelPrimitive.Root, Text, {
  display: 'inline-block',
  verticalAlign: 'middle',
  cursor: 'default',
})

export { Label }

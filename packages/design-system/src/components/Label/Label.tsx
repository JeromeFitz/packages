import * as LabelPrimitive from '@radix-ui/react-label'

import { styled } from '../../stitches.config'
import { Text } from '../Text/Text'

const Label = styled(LabelPrimitive.Root, Text, {
  display: 'inline-block',
  verticalAlign: 'middle',
  cursor: 'default',
})

export { Label }

/**
 * https://www.radix-ui.com/docs/primitives/components/label
 */
import * as LabelPrimitive from '@radix-ui/react-label'

import { styled } from '../../lib/stitches.config'
import { Text } from '../Text'

const Label = styled(LabelPrimitive.Root, Text, {
  display: 'inline-block',
  verticalAlign: 'middle',
  cursor: 'default',
})

export { Label }

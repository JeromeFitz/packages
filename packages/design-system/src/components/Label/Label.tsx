/**
 * https://www.radix-ui.com/primitives/docs/components/label
 */
import * as LabelPrimitive from '@radix-ui/react-label'

import { styled } from '../../lib/stitches.config'
import { Text } from '../Text'

const Label = styled(LabelPrimitive.Root, Text, {
  cursor: 'default',
  display: 'inline-block',
  verticalAlign: 'middle',
})

export { Label }

/**
 * https://www.radix-ui.com/primitives/docs/utilities/visually-hidden
 */
import * as ReactVisuallyHidden from '@radix-ui/react-visually-hidden'

const VisuallyHidden = ({ children, ...props }) => (
  <ReactVisuallyHidden.Root {...props}>{children}</ReactVisuallyHidden.Root>
)

export { VisuallyHidden }

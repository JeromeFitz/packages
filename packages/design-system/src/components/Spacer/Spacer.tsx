// @todo(system)
import { Box } from '../index'

const Spacer = () => {
  return (
    <Box
      as="span"
      aria-hidden={true}
      css={{
        display: 'block',
        width: '1px',
        height: '1px',
        minWidth: '1px',
        minHeight: '1px',
        ml: 'calc(16px - 1px)',
        mt: 'calc(16px - 1px)',
      }}
    />
  )
}

export { Spacer }

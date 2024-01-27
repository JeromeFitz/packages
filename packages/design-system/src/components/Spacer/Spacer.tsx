// @todo(system)
import { Box } from '../index'

const Spacer = () => {
  return (
    <Box
      aria-hidden={true}
      as="span"
      css={{
        display: 'block',
        height: '1px',
        minHeight: '1px',
        minWidth: '1px',
        ml: 'calc(16px - 1px)',
        mt: 'calc(16px - 1px)',
        width: '1px',
      }}
    />
  )
}

export { Spacer }

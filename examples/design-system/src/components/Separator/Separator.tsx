import { Separator } from '@jeromefitz/design-system/components'

const _Separator = () => {
  return (
    <Separator
      aria-hidden={true}
      css={{ my: '1rem !important', width: '100% !important' }}
    />
  )
}

export { _Separator as Separator }

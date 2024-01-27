import * as DialogPrimitive from '@radix-ui/react-dialog'
import { useRef } from 'react'

import { ButtonDemo } from '../../components/Button/ButtonDemo'
import { ButtonDemoIcon } from '../../components/Button/ButtonDemoIcon'
import { Flex } from '../../components/Flex'
import { Icon } from '../../components/Icon'
import { Text } from '../../components/Text'
import { styled } from '../../lib/stitches.config'

const DialogContent = styled(DialogPrimitive.Content, {
  '& ::selection': {
    backgroundColor: '$blueA5',
  },
  bc: '$loContrast',
  boxShadow: '0px 5px 30px -5px rgba(0, 0, 0, 0.1)',
  br: '$2',
  left: '50%',
  marginTop: -15,
  position: 'absolute',
  px: 10,
  py: 10,
  top: '50%',
  transform: 'translate(-50%, -50%)',

  width: '80%',
})

function MainHeroDialog() {
  // We prevent the initial auto focus because it's a demo rather than a real UI,
  // so the parent page focus is not stolen.
  const initialAutoFocusPrevented = useRef(false)

  return (
    <DialogPrimitive.Root defaultOpen modal={false}>
      <DialogPrimitive.Trigger asChild>
        <ButtonDemo>Open Dialog</ButtonDemo>
      </DialogPrimitive.Trigger>

      <DialogContent
        onInteractOutside={(event) => event.preventDefault()}
        onOpenAutoFocus={(event) => {
          // We prevent the initial auto focus because it's a demo rather than a real UI,
          // so the parent page focus is not stolen.
          if (initialAutoFocusPrevented.current === false) {
            event.preventDefault()
            initialAutoFocusPrevented.current = true
          }
        }}
      >
        <DialogPrimitive.Title asChild>
          <Text
            as="h2"
            css={{ fontWeight: '500', lineHeight: 1.2, mb: '$2' }}
            size="4"
          >
            Dialog
          </Text>
        </DialogPrimitive.Title>

        <Text css={{ lineHeight: 1.5, mb: '$2' }} size="2">
          Far far away, behind the word mountains, far from the countries Vokalia and
          Consonantia, there live the blind texts.
        </Text>

        <Flex gap="2" justify="end">
          <DialogPrimitive.Close asChild>
            <ButtonDemo variant="gray">OK</ButtonDemo>
          </DialogPrimitive.Close>

          <DialogPrimitive.Close asChild>
            <ButtonDemo variant="gray">Cancel</ButtonDemo>
          </DialogPrimitive.Close>

          <DialogPrimitive.Close asChild>
            <ButtonDemoIcon>
              <Icon.Cross2 />
            </ButtonDemoIcon>
          </DialogPrimitive.Close>
        </Flex>
      </DialogContent>
    </DialogPrimitive.Root>
  )
}

export { MainHeroDialog }

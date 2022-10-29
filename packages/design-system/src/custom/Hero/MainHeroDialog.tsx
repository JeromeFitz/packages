import * as DialogPrimitive from '@radix-ui/react-dialog'
import { useRef } from 'react'

import { ButtonDemo } from '../../components/Button/ButtonDemo'
import { ButtonDemoIcon } from '../../components/Button/ButtonDemoIcon'
import { Flex } from '../../components/Flex'
import { Icon } from '../../components/Icon'
import { Text } from '../../components/Text'
import { styled } from '../../lib/stitches.config'

const DialogContent = styled(DialogPrimitive.Content, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bc: '$loContrast',
  br: '$2',
  py: 10,
  px: 10,
  marginTop: -15,
  boxShadow: '0px 5px 30px -5px rgba(0, 0, 0, 0.1)',

  '& ::selection': {
    backgroundColor: '$blueA5',
  },
})

function MainHeroDialog() {
  // We prevent the initial auto focus because it's a demo rather than a real UI,
  // so the parent page focus is not stolen.
  const initialAutoFocusPrevented = useRef(false)

  return (
    <DialogPrimitive.Root modal={false} defaultOpen>
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
            size="4"
            css={{ fontWeight: '500', mb: '$2', lineHeight: 1.2 }}
          >
            Dialog
          </Text>
        </DialogPrimitive.Title>

        <Text size="2" css={{ lineHeight: 1.5, mb: '$2' }}>
          Far far away, behind the word mountains, far from the countries Vokalia and
          Consonantia, there live the blind texts.
        </Text>

        <Flex justify="end" gap="2">
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

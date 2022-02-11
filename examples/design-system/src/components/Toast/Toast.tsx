import {
  useToast,
  Box,
  Button,
  Flex,
  Heading,
  Label,
  Select,
  Separator,
  Switch,
  TextField,
} from '@jeromefitz/design-system/src/components'
import type {
  IToast,
  ToastType,
} from '@jeromefitz/design-system/src/components/Toast/Toast.types'
import _debounce from 'lodash/debounce'
import * as React from 'react'

const text = 'Consciousness worldlets hearts of the stars two ghostly...'
const textJoiner = ' [oh look what we have here] '

interface IItems {
  title: string
  toast: Partial<IToast> | string
}

const types: ToastType[] = ['default', 'error', 'info', 'success', 'warning']

const items: IItems[] = [
  { title: 'Default', toast: { text } },
  {
    title: 'Multi-Line',
    toast: { text: [text, text, text, text].join(textJoiner) },
  },
  { title: 'Preserve', toast: { text, preserve: true } },
  { title: 'Action', toast: { action: 'Action', text } },
  {
    title: 'Action + Cancel Action',
    toast: { action: 'Action', cancelAction: 'Cancel', text },
  },
  { title: 'Error', toast: { text, type: 'error' } },
  { title: 'Info', toast: { text, type: 'info' } },
  { title: 'Success', toast: { text, type: 'success' } },
  { title: 'Warning', toast: { text, type: 'warning' } },
]

const _Toast = () => {
  const toasts = useToast()
  const [message, messageSet] = React.useState(text)
  const [preserve, preserveSet] = React.useState(false)
  const [type, typeSet] = React.useState('default')

  const handleTextFieldOnChange = (event) => {
    messageSet(event.target.value)
  }
  const debouncedChangeHandler = React.useMemo(
    () => _debounce(handleTextFieldOnChange, 300),
    []
  )
  React.useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel()
    }
  }, [debouncedChangeHandler])

  return (
    <>
      <Heading css={{ mb: '$4' }} size="3">
        🍞️ Toast
      </Heading>
      <Separator decorative margin="my3" size="full" />
      <Heading css={{ mb: '$4' }} size="2">
        📦️ Default
      </Heading>
      {items.map((item, itemIdx) => {
        return (
          <React.Fragment key={`toast-${itemIdx}`}>
            <Button
              css={{ mr: '$2', mb: '$2' }}
              onClick={() => {
                if (toasts && toasts.current) {
                  toasts.current.message(item.toast)
                }
              }}
            >
              {item.title}
            </Button>
          </React.Fragment>
        )
      })}
      <Separator decorative margin="my3" size="full" />
      <Heading css={{ mb: '$4' }} size="2">
        🎛️ Custom
      </Heading>
      <Flex css={{ flexDirection: 'column', gap: '$4' }}>
        <Flex
          css={{
            flexWrap: 'wrap',
            alignItems: 'center',
            '@bp1': { maxWidth: '25%' },
          }}
        >
          <Label
            htmlFor="message"
            css={{ fontWeight: 'bold', lineHeight: '35px', marginRight: 15 }}
          >
            Message
          </Label>
          <TextField
            type="text"
            id="message"
            defaultValue={message}
            onChange={handleTextFieldOnChange}
          />
        </Flex>
        <Flex
          css={{
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <Label css={{ fontWeight: 'bold', paddingRight: '$2' }} htmlFor="sw1">
            Preserve
          </Label>
          <Switch
            css={{}}
            id="sw1"
            checked={preserve}
            onCheckedChange={(checked) => preserveSet(checked)}
          />
        </Flex>
        <Flex css={{ mb: '$2', alignItems: 'center' }}>
          <Label css={{ fontWeight: 'bold', paddingRight: '$2' }} htmlFor="se1">
            Type
          </Label>
          <Box css={{ mx: -5 }}>
            <Select id="se1" value={type} onChange={(e) => typeSet(e.target.value)}>
              {(types || []).map((v, i) => {
                return (
                  <option key={`types-${i}`} value={v}>
                    {v}
                  </option>
                )
              })}
            </Select>
          </Box>
        </Flex>
        <Flex css={{ mb: '$2', alignItems: 'center', '@bp1': { maxWidth: '50%' } }}>
          <Button
            onClick={() => {
              if (toasts && toasts.current) {
                toasts.current.message({
                  text: message,
                  preserve,
                  type,
                })
              }
            }}
            size="3"
            type="button"
            variant="green"
          >
            Create Toast
          </Button>
        </Flex>
      </Flex>
    </>
  )
}

export { _Toast as Toast }

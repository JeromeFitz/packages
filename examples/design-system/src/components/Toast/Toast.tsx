import {
  Box,
  Button,
  Flex,
  Icon,
  Heading,
  Label,
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  Separator,
  TextField,
  Toaster,
} from '@jeromefitz/design-system/src/components'
import type {
  IToast,
  IToastVariant,
} from '@jeromefitz/design-system/src/components/Toast/Toast.types'
import _debounce from 'lodash/debounce'
import { useEffect, useMemo, useRef, useState, Fragment } from 'react'

const description = 'EARTHGANG Spillage Village...'
const descriptionJoiner = ' [JOIN] '

interface IItems {
  title: string
  toast: Partial<IToast>
}

// const variants: IToastVariant[] = ['default', 'error', 'info', 'success', 'warning']
interface IVariant {
  variant: IToastVariant
  icon: ReactElement
}
const variants: IVariant[] = [
  { variant: 'default', icon: <Icon.Bell /> },
  { variant: 'error', icon: <Icon.CrossCircled /> },
  { variant: 'info', icon: <Icon.InfoCircled /> },
  { variant: 'success', icon: <Icon.CheckCircled /> },
  { variant: 'warning', icon: <Icon.ExclamationTriangle /> },
]

const items: IItems[] = [
  { title: 'Default', toast: { description } },
  {
    title: 'Multi-Line',
    toast: {
      description: [description, description, description, description].join(
        descriptionJoiner
      ),
    },
  },
  {
    title: 'Action',
    toast: {
      action: () => console.dir(`> action (action)`),
      actionText: 'Text',
      description,
    },
  },
  {
    title: 'Close',
    toast: { close: () => console.dir(`> close (close)`), description },
  },
  {
    title: 'Action + Close',
    toast: {
      action: () => console.dir(`> action + close (action)`),
      actionText: 'Action',
      close: () => console.dir(`> action + close (clsoe)`),
      description,
    },
  },
  { title: 'Error', toast: { description, variant: 'error' } },
  { title: 'Info', toast: { description, variant: 'info' } },
  { title: 'Success', toast: { description, variant: 'success' } },
  { title: 'Warning', toast: { description, variant: 'warning' } },
]

const ToastDemo = () => {
  // @todo(types)
  const toaster = useRef<any>()

  const [description, descriptionSet] = useState('')
  const [title, titleSet] = useState('')
  const [variant, variantSet] = useState('default')

  const handleDescriptionChange = (event) => {
    descriptionSet(event.target.value)
  }
  const handleTitleChange = (event) => {
    titleSet(event.target.value)
  }
  const debouncedDescriptionHandler = useMemo(
    () => _debounce(handleDescriptionChange, 300),
    []
  )
  useEffect(() => {
    return () => {
      debouncedDescriptionHandler.cancel()
    }
  }, [debouncedDescriptionHandler])

  const debouncedTitleHandler = useMemo(() => _debounce(handleTitleChange, 300), [])
  useEffect(() => {
    return () => {
      debouncedTitleHandler.cancel()
    }
  }, [debouncedTitleHandler])

  return (
    <>
      <Toaster ref={toaster} />
      <Separator decorative my="3" size="full" />

      <>
        <Heading css={{ mb: '$4' }} size="3">
          🍞️ Toast
        </Heading>
        <Separator decorative my="3" size="full" />
        <Heading css={{ mb: '$4' }} size="2">
          📦️ Default
        </Heading>
        {items.map((item, itemIdx) => {
          return (
            <Fragment key={`toast-${itemIdx}`}>
              <Button
                css={{ mr: '$2', mb: '$2' }}
                onClick={() => {
                  if (toaster && toaster.current) {
                    toaster?.current?.createToast(item.toast)
                  }
                }}
              >
                {item.title}
              </Button>
            </Fragment>
          )
        })}
        <Separator decorative my="3" size="full" />
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
              htmlFor="title"
              css={{ fontWeight: 'bold', lineHeight: '35px', marginRight: 15 }}
            >
              Title
            </Label>
            <TextField
              css={{ fontFamily: '$mono', padding: '$3 $2', my: '$1' }}
              type="text"
              id="title"
              defaultValue={title}
              onChange={handleTitleChange}
            />
          </Flex>
          <Flex
            css={{
              flexWrap: 'wrap',
              alignItems: 'center',
              '@bp1': { maxWidth: '25%' },
            }}
          >
            <Label
              htmlFor="description"
              css={{ fontWeight: 'bold', lineHeight: '35px', marginRight: 15 }}
            >
              Description
            </Label>
            <TextField
              css={{ fontFamily: '$mono', padding: '$3 $2', my: '$1' }}
              type="text"
              id="description"
              defaultValue={description}
              onChange={handleDescriptionChange}
            />
          </Flex>
          <Flex
            css={{
              flexDirection: 'column',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              gap: '$3',
              '@bp1': { maxWidth: '25%' },
            }}
          >
            <Label css={{ fontWeight: 'bold', paddingRight: '$2' }} htmlFor="se1">
              Variant
            </Label>
            <Box>
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <Select id="se1" value={variant} onValueChange={variantSet}>
                <SelectTrigger aria-label="Toast Variant">
                  <SelectValue aria-label={variant} />
                  <SelectIcon>
                    <Icon.ChevronDown />
                  </SelectIcon>
                </SelectTrigger>
                <SelectContent>
                  <SelectViewport>
                    {(variants || []).map((item) => {
                      const { icon, variant } = item
                      return (
                        <SelectItem key={`variants-${variant}`} value={variant}>
                          <SelectItemText>
                            <Flex direction="row" align="center" gap="2">
                              {icon}
                              <Box as="span">{variant}</Box>
                            </Flex>
                          </SelectItemText>
                          <SelectItemIndicator>
                            <Icon.Check />
                          </SelectItemIndicator>
                        </SelectItem>
                      )
                    })}
                  </SelectViewport>
                </SelectContent>
              </Select>
            </Box>
          </Flex>
          <Flex
            css={{ mb: '$2', alignItems: 'center', '@bp1': { maxWidth: '50%' } }}
          >
            <Button
              onClick={() => {
                if (toaster && toaster.current) {
                  toaster?.current?.createToast({
                    action: () => console.dir(`> action`),
                    actionText: 'Action',
                    actionComponent: (
                      <Button css={{ my: '$1' }} ghost size="1">
                        ActionComp
                      </Button>
                    ),
                    // close: () => console.dir(`> cancel`),
                    // closeComponent: (
                    //   <Button css={{ my: '$1' }} ghost variant="gray" size="1">
                    //     Cancel
                    //   </Button>
                    // ),
                    description,
                    title,
                    variant,
                    //
                    // duration: 1000,
                  })
                }
              }}
              size="3"
              type="button"
              // variant="green"
            >
              Create Toast
            </Button>
          </Flex>
        </Flex>
      </>
    </>
  )
}

export { ToastDemo as Toast }

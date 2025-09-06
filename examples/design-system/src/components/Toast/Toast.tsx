import type {
  IToast,
  IToastVariant,
} from '@jeromefitz/design-system/src/components/Toast/Toast.types'

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Label,
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  Separator,
  TextField,
  Toaster,
} from '@jeromefitz/design-system/src/components'

import _debounce from 'lodash/debounce'
import { Fragment, useEffect, useMemo, useRef, useState } from 'react'

const description = 'EARTHGANG Spillage Village...'
const descriptionJoiner = ' [JOIN] '

interface IItems {
  title: string
  toast: Partial<IToast>
}

// const variants: IToastVariant[] = ['default', 'error', 'info', 'success', 'warning']
interface IVariant {
  icon: ReactElement
  variant: IToastVariant
}
const variants: IVariant[] = [
  { icon: <Icon.Bell />, variant: 'default' },
  { icon: <Icon.CrossCircled />, variant: 'error' },
  { icon: <Icon.InfoCircled />, variant: 'info' },
  { icon: <Icon.CheckCircled />, variant: 'success' },
  { icon: <Icon.ExclamationTriangle />, variant: 'warning' },
]

const items: IItems[] = [
  { title: 'Default', toast: { description } },
  {
    title: 'Multi-Line',
    toast: {
      description: [description, description, description, description].join(
        descriptionJoiner,
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
    [],
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
                css={{ mb: '$2', mr: '$2' }}
                onClick={() => {
                  if (toaster?.current) {
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
              '@bp1': { maxWidth: '25%' },
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Label
              css={{ fontWeight: 'bold', lineHeight: '35px', marginRight: 15 }}
              htmlFor="title"
            >
              Title
            </Label>
            <TextField
              css={{ fontFamily: '$mono', my: '$1', padding: '$3 $2' }}
              defaultValue={title}
              id="title"
              onChange={handleTitleChange}
              type="text"
            />
          </Flex>
          <Flex
            css={{
              '@bp1': { maxWidth: '25%' },
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Label
              css={{ fontWeight: 'bold', lineHeight: '35px', marginRight: 15 }}
              htmlFor="description"
            >
              Description
            </Label>
            <TextField
              css={{ fontFamily: '$mono', my: '$1', padding: '$3 $2' }}
              defaultValue={description}
              id="description"
              onChange={handleDescriptionChange}
              type="text"
            />
          </Flex>
          <Flex
            css={{
              '@bp1': { maxWidth: '25%' },
              alignItems: 'flex-start',
              flexDirection: 'column',
              flexWrap: 'wrap',
              gap: '$3',
            }}
          >
            <Label css={{ fontWeight: 'bold', paddingRight: '$2' }} htmlFor="se1">
              Variant
            </Label>
            <Box>
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <Select id="se1" onValueChange={variantSet} value={variant}>
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
                            <Flex align="center" direction="row" gap="2">
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
            css={{ '@bp1': { maxWidth: '50%' }, alignItems: 'center', mb: '$2' }}
          >
            <Button
              onClick={() => {
                if (toaster?.current) {
                  toaster?.current?.createToast({
                    action: () => console.dir(`> action`),
                    actionComponent: (
                      <Button css={{ my: '$1' }} ghost size="1">
                        ActionComp
                      </Button>
                    ),
                    actionText: 'Action',
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

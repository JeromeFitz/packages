import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { useRef, useState } from 'react'

import { Box } from '../../components/Box'
import { ButtonDemo } from '../../components/Button/ButtonDemo'
import { Icon } from '../../components/Icon'
import { styled } from '../../lib/stitches.config'

const DropdownMenuArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: '$loContrast',
})

const DropdownMenuContent: any = styled(DropdownMenuPrimitive.Content, {
  bc: '$loContrast',
  boxShadow:
    '0px 5px 30px -5px rgba(0, 0, 0, 0.1), 0 1px 3px -1px rgba(0, 0, 0, 0.2)',
  br: '$2',
  p: '$1',
})

const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, {
  bc: '$slate4',
  height: 1,
  ml: '$5',
  mr: '$1',
  my: '$1',
})

const itemCss = {
  // &:active for touch devices
  '&:focus, &:active': {
    backgroundColor: '$indigo9',
    color: 'white',
    outline: 0,
  },
  '&[data-state="open"]': {
    backgroundColor: '$slate3',
  },
  alignItems: 'center',
  br: '$1',
  color: '$hiContrast',
  cursor: 'default',
  display: 'flex',
  fontFamily: '$sans',
  fontSize: '$1',
  fontVariantNumeric: 'tabular-nums',
  height: '$5',
  lineHeight: '1',
  minWidth: 90,
  pl: '$5',
  pr: '$4',

  userSelect: 'none',

  whiteSpace: 'nowrap',
}

const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, itemCss)
const DropdownMenuSub = styled(DropdownMenuPrimitive.Sub, {})
const DropdownMenuSubContent = styled(DropdownMenuPrimitive.SubContent, {})
const DropdownMenuSubTrigger = styled(DropdownMenuPrimitive.SubTrigger, itemCss)
const DropdownMenuCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, itemCss)

function MainHeroDropdownMenu() {
  // We prevent the initial auto focus because it's a demo rather than a real UI,
  // so the parent page focus is not stolen.
  const initialAutoFocusPrevented = useRef(false)
  const [showToolbar, setShowToolbar] = useState<'indeterminate' | boolean>(true)
  const [showUrls, setShowUrls] = useState<'indeterminate' | boolean>(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(true)

  return (
    <DropdownMenuPrimitive.Root modal={false} onOpenChange={setOpen} open={open}>
      <DropdownMenuPrimitive.Trigger asChild>
        <ButtonDemo css={{ gap: 3, marginBottom: 120 }} ref={triggerRef}>
          Options <Icon.CaretDown style={{ marginRight: -5 }} />
        </ButtonDemo>
      </DropdownMenuPrimitive.Trigger>

      <Box
        // Position it manually because iOS Safari is buggy
        // with transforms and horizontal scroll containers
        css={{
          '[data-radix-popper-content-wrapper]': {
            left: '50% !important',
            transform: 'translate(-50%, 155px) !important',
          },
        }}
      >
        <DropdownMenuContent
          avoidCollisions={false}
          onEscapeKeyDown={(event) => {
            event.preventDefault()
            if (
              event.target instanceof HTMLElement &&
              contentRef.current?.contains(event.target)
            ) {
              setOpen(false)
            }
          }}
          onInteractOutside={(event) => {
            if (event.target !== triggerRef.current) {
              event.preventDefault()
            }
          }}
          onOpenAutoFocus={(event) => {
            // We prevent the initial auto focus because it's a demo rather than a real UI,
            // so the parent page focus is not stolen.
            if (initialAutoFocusPrevented.current === false) {
              event.preventDefault()
              initialAutoFocusPrevented.current = true
            }
          }}
          portalled={false}
          ref={contentRef}
          sideOffset={5}
        >
          <DropdownMenuArrow />
          <DropdownMenuItem>New Tab</DropdownMenuItem>
          <DropdownMenuItem>New Window</DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuPrimitive.Root>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                Favorites
                <Icon.CaretRight style={{ marginLeft: 'auto', marginRight: -5 }} />
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Icon.GitHubLogo style={{ marginLeft: -15, marginRight: 10 }} />
                  GitHub
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon.TwitterLogo style={{ marginLeft: -15, marginRight: 10 }} />
                  Twitter
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon.InstagramLogo style={{ marginLeft: -15, marginRight: 10 }} />
                  Instagram
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuPrimitive.Root>

          <DropdownMenuItem>Downloads</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showToolbar}
            onCheckedChange={setShowToolbar}
          >
            <DropdownMenuPrimitive.ItemIndicator>
              <Icon.Check style={{ marginLeft: -18, marginRight: 0 }} />
            </DropdownMenuPrimitive.ItemIndicator>
            Show Toolbar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showUrls} onCheckedChange={setShowUrls}>
            <DropdownMenuPrimitive.ItemIndicator>
              <Icon.Check style={{ marginLeft: -18, marginRight: 0 }} />
            </DropdownMenuPrimitive.ItemIndicator>
            Show Full URLs
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </Box>
    </DropdownMenuPrimitive.Root>
  )
}

export { MainHeroDropdownMenu }

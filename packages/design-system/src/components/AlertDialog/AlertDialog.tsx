/**
 * https://www.radix-ui.com/docs/primitives/components/alert-dialog
 */
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { styled, keyframes } from '@stitches/react'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: '$colors$blackA9',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

function Root({ children, ...props }) {
  return (
    <AlertDialogPrimitive.Root {...props}>
      <StyledOverlay />
      {children}
    </AlertDialogPrimitive.Root>
  )
}

const StyledContent = styled(AlertDialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
})

const StyledTitle = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  color: '$colores$slate12',
  fontSize: 17,
  fontWeight: 500,
})

const StyledDescription = styled(AlertDialogPrimitive.Description, {
  marginBottom: 20,
  color: '$colores$slate11',
  fontSize: 15,
  lineHeight: 1.5,
})

const Flex = styled('div', { display: 'flex' })

const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      default: {
        backgroundColor: 'white',
        color: '$colors$brand11',
        boxShadow: `0 2px 10px $colors$blackA7`,
        '&:hover': { backgroundColor: '$colors$slate3' },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

const AlertDialogDemo = ({ dialogText }) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>{dialogText?.dialogTrigger}</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogTitle>{dialogText?.dialogTitle}</AlertDialogTitle>
      <AlertDialogDescription>
        {dialogText?.dialogDescription}
      </AlertDialogDescription>
      <Flex css={{ justifyContent: 'flex-end' }}>
        <AlertDialogCancel asChild>
          <Button variant="default" css={{ marginRight: 25 }}>
            {dialogText?.dialogCancel}
          </Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button variant="default">{dialogText?.dialogAction}</Button>
        </AlertDialogAction>
      </Flex>
    </AlertDialogContent>
  </AlertDialog>
)

const AlertDialog = Root
const AlertDialogTrigger = AlertDialogPrimitive.Trigger
const AlertDialogContent = StyledContent
const AlertDialogTitle = StyledTitle
const AlertDialogDescription = StyledDescription
const AlertDialogAction = AlertDialogPrimitive.Action
const AlertDialogCancel = AlertDialogPrimitive.Cancel

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDemo,
}

/**
 * https://www.radix-ui.com/primitives/docs/components/alert-dialog
 */
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { keyframes, styled } from '@stitches/react'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  backgroundColor: '$colors$blackA9',
  inset: 0,
  position: 'fixed',
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
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  left: '50%',
  maxHeight: '85vh',
  maxWidth: '500px',
  padding: 25,
  position: 'fixed',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
})

const StyledTitle = styled(AlertDialogPrimitive.Title, {
  color: '$colores$slate12',
  fontSize: '$3',
  fontVariationSettings: '"wght" $fontWeights$5',
  fontWeight: '$fontWeights$5',
  margin: 0,
})

const StyledDescription = styled(AlertDialogPrimitive.Description, {
  color: '$colores$slate11',
  fontSize: '$3',
  lineHeight: 1.5,
  marginBottom: 20,
})

const Flex = styled('div', { display: 'flex' })

const Button = styled('button', {
  alignItems: 'center',
  all: 'unset',
  borderRadius: 4,
  defaultVariants: {
    variant: 'default',
  },
  display: 'inline-flex',
  fontSize: '$3',
  fontVariationSettings: '"wght" $fontWeights$5',
  fontWeight: '$fontWeights$5',
  height: 35,
  justifyContent: 'center',
  lineHeight: 1,

  padding: '0 15px',

  variants: {
    variant: {
      default: {
        '&:focus': { boxShadow: `0 0 0 2px black` },
        '&:hover': { backgroundColor: '$colors$slate3' },
        backgroundColor: 'white',
        boxShadow: `0 2px 10px $colors$blackA7`,
        color: '$colors$brand11',
      },
    },
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
          <Button css={{ marginRight: 25 }} variant="default">
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
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDemo,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
}

import type { IconProps } from './Icon.types'

import {
  ArrowUturnLeftIcon as ArrowUturnLeftHero,
  BookOpenIcon as BookOpenIconHero,
  MapIcon as MapIconHero,
  MapPinIcon as MapPinIconHero,
  MicrophoneIcon as MicrophoneIconHero,
  MusicalNoteIcon as MusicalNoteIconHero,
  TagIcon as TagIconHero,
  TicketIcon as TicketIconHero,
} from '@heroicons/react/24/outline'
import { AccessibleIcon } from '@radix-ui/react-accessible-icon'
import {
  ArrowLeftIcon as ArrowLeftIconRadix,
  ArrowRightIcon as ArrowRightIconRadix,
  ArrowTopRightIcon as ArrowTopRightIconRadix,
  BellIcon as BellIconRadix,
  BookmarkFilledIcon as BookmarkFilledIconRadix,
  BookmarkIcon as BookmarkIconRadix,
  CalendarIcon as CalendarIconRadix,
  CaretDownIcon as CaretDownIconRadix,
  CaretLeftIcon as CaretLeftIconRadix,
  CaretRightIcon as CaretRightIconRadix,
  CaretSortIcon as CaretSortIconRadix,
  CaretUpIcon as CaretUpIconRadix,
  ChatBubbleIcon as ChatBubbleIconRadix,
  CheckCircledIcon as CheckCircledIconRadix,
  CheckIcon as CheckIconRadix,
  ChevronDownIcon as ChevronDownIconRadix,
  ChevronLeftIcon as ChevronLeftIconRadix,
  ChevronRightIcon as ChevronRightIconRadix,
  ChevronUpIcon as ChevronUpIconRadix,
  ClockIcon as ClockIconRadix,
  Cross1Icon as Cross1IconRadix,
  Cross2Icon as Cross2IconRadix,
  CrossCircledIcon as CrossCircledIconRadix,
  DesktopIcon as DesktopIconRadix,
  EnterIcon as EnterIconRadix,
  EnvelopeOpenIcon as EnvelopeOpenIconRadix,
  ExclamationTriangleIcon as ExclamationTriangleIconRadix,
  ExitIcon as ExitIconRadix,
  ExternalLinkIcon as ExternalLinkIconRadix,
  FontBoldIcon as FontBoldIconRadix,
  FontItalicIcon as FontItalicIconRadix,
  GearIcon as GearIconRadix,
  GitHubLogoIcon as GitHubLogoIconRadix,
  HamburgerMenuIcon as HamburgerMenuIconRadix,
  HomeIcon as HomeIconRadix,
  IdCardIcon as IdCardIconRadix,
  ImageIcon as ImageIconRadix,
  InfoCircledIcon as InfoCircledIconRadix,
  InstagramLogoIcon as InstagramLogoIconRadix,
  Link1Icon as Link1IconRadix,
  LinkedInLogoIcon as LinkedInLogoIconRadix,
  ListBulletIcon as ListBulletIconRadix,
  MagnifyingGlassIcon as MagnifyingGlassIconRadix,
  MoonIcon as MoonIconRadix,
  Pencil1Icon as Pencil1IconRadix,
  Pencil2Icon as Pencil2IconRadix,
  QuoteIcon as QuoteIconRadix,
  Share1Icon as Share1IconRadix,
  SpeakerModerateIcon as SpeakerModerateIconRadix,
  SpeakerOffIcon as SpeakerOffIconRadix,
  StarIcon as StarIconRadix,
  StrikethroughIcon as StrikethroughIconRadix,
  SunIcon as SunIconRadix,
  TextAlignCenterIcon as TextAlignCenterIconRadix,
  TextAlignJustifyIcon as TextAlignJustifyIconRadix,
  TextAlignLeftIcon as TextAlignLeftIconRadix,
  TextAlignRightIcon as TextAlignRightIconRadix,
  TwitterLogoIcon as TwitterLogoIconRadix,
} from '@radix-ui/react-icons'

import { Box } from '../Box'

/**
 * @hack(icon)
 *  Hero Icons to Radix-UI mimicry
 *  A few icons we need are not in Radix-UI
 *
 * @note(icon)
 *  Still allow _this_ hack to be overriden
 *  Override by passing css object to Icon.XYZ
 *
 */
const cssHeroToRadix = {
  '& > path': {
    strokeWidth: '1.5',
  },
  marginTop: '1px',
  width: '1rem',
}

const ArrowLeftIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={label || 'An icon representing an arrow that is pointing to the left.'}
  >
    <Box as={ArrowLeftIconRadix} {...props} />
  </AccessibleIcon>
)

const ArrowRightIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={label || 'An icon representing an arrow that is pointing to the right.'}
  >
    <Box as={ArrowRightIconRadix} {...props} />
  </AccessibleIcon>
)

const ArrowTopRightIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an arrow pointing diagonally towards the top right.'
    }
  >
    <Box as={ArrowTopRightIconRadix} {...props} />
  </AccessibleIcon>
)

const BellIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a bell. A very small outline of the Liberty Bell without the crack.'
    }
  >
    <Box as={BellIconRadix} {...props} />
  </AccessibleIcon>
)

const BookmarkIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a bookmark. An outline of the part of the bookmark that hangs at the bottom of the book. It has a small triangle cut out at the bottom for flair.'
    }
  >
    <Box as={BookmarkIconRadix} {...props} />
  </AccessibleIcon>
)

const BookmarkFilledIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a bookmark. A filled in outline of the part of the bookmark that hangs at the bottom of the book. It has a small triangle cut out at the bottom for flair.'
    }
  >
    <Box as={BookmarkFilledIconRadix} {...props} />
  </AccessibleIcon>
)

const BookOpenIcon = ({ css, label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an open book. It has curved pages as it if is being actively read. There are no lines on the pages, this book icon is an outline.'
    }
  >
    <Box
      as={BookOpenIconHero}
      css={{
        ...cssHeroToRadix,
        ...css,
      }}
      {...props}
    />
  </AccessibleIcon>
)

const CalendarIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a calendar. It has two hooks as if the paper is a rip-off type of calendar per month, with small shaded squares with symbolizing days of a month.'
    }
  >
    <Box as={CalendarIconRadix} {...props} />
  </AccessibleIcon>
)

const CaretDownIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={label || 'An icon representing a caret. Its point is pointing down.'}
  >
    <Box as={CaretDownIconRadix} {...props} />
  </AccessibleIcon>
)

const CaretLeftIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={label || 'An icon representing a caret. Its point is pointing left.'}
  >
    <Box as={CaretLeftIconRadix} {...props} />
  </AccessibleIcon>
)

const CaretRightIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={label || 'An icon representing a caret. Its point is pointing right.'}
  >
    <Box as={CaretRightIconRadix} {...props} />
  </AccessibleIcon>
)

const CaretSortIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a caret sort. It is two carets with their points away from one another, pointing in opposite directions vertically.'
    }
  >
    <Box as={CaretSortIconRadix} {...props} />
  </AccessibleIcon>
)

const CaretUpIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={label || 'An icon representing a caret. Its point is pointing up.'}
  >
    <Box as={CaretUpIconRadix} {...props} />
  </AccessibleIcon>
)

const ChatBubbleIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a chat bubble. It is a rounded rectangle with no text within it, and a small upside down triangle as part of the rounded rectangle outline toward the bottom right which would point to someone or something talking.'
    }
  >
    <Box as={ChatBubbleIconRadix} {...props} />
  </AccessibleIcon>
)

const CheckIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon label={label || 'An icon representing a checkmark.'}>
    <Box as={CheckIconRadix} {...props} />
  </AccessibleIcon>
)

const CheckCircledIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon label={label || 'An icon representing a checkmark in a circle.'}>
    <Box as={CheckCircledIconRadix} {...props} />
  </AccessibleIcon>
)

const ChevronDownIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={label || 'An icon representing a chevron that is pointed down.'}
  >
    <Box as={ChevronDownIconRadix} {...props} />
  </AccessibleIcon>
)

const ChevronLeftIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a chevron that is pointed left. So kind of like a less than sign.'
    }
  >
    <Box as={ChevronLeftIconRadix} {...props} />
  </AccessibleIcon>
)

const ChevronRightIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a chevron that is pointed right. So kind of like a greater than sign.'
    }
  >
    <Box as={ChevronRightIconRadix} {...props} />
  </AccessibleIcon>
)

const ChevronUpIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={label || 'An icon representing a chevron that is pointed up.'}
  >
    <Box as={ChevronUpIconRadix} {...props} />
  </AccessibleIcon>
)

const ClockIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a clock. It is a circular clock with the hour hand at the four and minute at the twelve.'
    }
  >
    <Box as={ClockIconRadix} {...props} />
  </AccessibleIcon>
)

const Cross1Icon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an -x. It is a larger -x than the letter itself.'
    }
  >
    <Box as={Cross1IconRadix} {...props} />
  </AccessibleIcon>
)

const Cross2Icon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an -x. It is a smaller -x than the letter itself.'
    }
  >
    <Box as={Cross2IconRadix} {...props} />
  </AccessibleIcon>
)

const CrossCircledIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon label={label || 'An icon representing a crossmark in a circle.'}>
    <Box as={CrossCircledIconRadix} {...props} />
  </AccessibleIcon>
)

const DesktopIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a desktop computer. An outline of a large computer monitor sitting on a stand.'
    }
  >
    <Box as={DesktopIconRadix} {...props} />
  </AccessibleIcon>
)

const EnterIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an arrow that is pointing at an area that exhibits movement towards, or into.'
    }
  >
    <Box as={EnterIconRadix} {...props} />
  </AccessibleIcon>
)

const EnvelopeOpenIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an envelope that is in the process of being opened.'
    }
  >
    <Box as={EnvelopeOpenIconRadix} {...props} />
  </AccessibleIcon>
)

const ExclamationTriangleIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an exclamation mark in an octagon. Like a stop sign  with an exclamation mark.'
    }
  >
    <Box as={ExclamationTriangleIconRadix} {...props} />
  </AccessibleIcon>
)

const ExitIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an arrow that is pointing out of an area that exhibits movement away from, or out of.'
    }
  >
    <Box as={ExitIconRadix} {...props} />
  </AccessibleIcon>
)

const ExternalLinkIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an arrow pointing diagonally towards the top right corner of the screen.'
    }
  >
    <Box as={ExternalLinkIconRadix} {...props} />
  </AccessibleIcon>
)

const FontBoldIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a font bold. It is a capital letter -B with a font weight of bold or 700.'
    }
  >
    <Box as={FontBoldIconRadix} {...props} />
  </AccessibleIcon>
)

const FontItalicIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a font italic. It is a capital letter -I with that is slanted to the right, or with emphasis.'
    }
  >
    <Box as={FontItalicIconRadix} {...props} />
  </AccessibleIcon>
)

const GearIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a gear which is a cog with eight tooth like parts around the edge of its wheel.'
    }
  >
    <Box as={GearIconRadix} {...props} />
  </AccessibleIcon>
)

const GitHubLogoIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon that is an outline of an Octocat. An Octocat is an octopus cat hybrid with a cat head and octopus body. It is cute and not hideous despite how it may come off. This is the logo of GitHub.'
    }
  >
    <Box as={GitHubLogoIconRadix} {...props} />
  </AccessibleIcon>
)

const HamburgerMenuIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing three horizontal lines with some equal spacing between. Kind of like a hamburger where the top and bottom one are the bun, and the middle one is the meat (or plant based product if you prefer).'
    }
  >
    <Box as={HamburgerMenuIconRadix} {...props} />
  </AccessibleIcon>
)

const HomeIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a home. It is a straight forward view of a home with an angled roof, no windows, and a door slightly off-center to the right.'
    }
  >
    <Box as={HomeIconRadix} {...props} />
  </AccessibleIcon>
)

const IdCardIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an ID. A long rectangle like card with a shaded interior box for an image and some lines symbolizing text to its right.'
    }
  >
    <Box as={IdCardIconRadix} {...props} />
  </AccessibleIcon>
)

const ImageIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an image. A square outline with two rollling hills with a sun in the sky between the crests.'
    }
  >
    <Box as={ImageIconRadix} {...props} />
  </AccessibleIcon>
)

const InfoCircledIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={label || 'An icon representing the letter &lsquo;i&lsquo; in a circle.'}
  >
    <Box as={InfoCircledIconRadix} {...props} />
  </AccessibleIcon>
)

const InstagramLogoIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing the logo of Instagram. A rounded rectangle with a circle in the middle representing a camera lens and to its upper right a small dot which would be its flash.'
    }
  >
    <Box as={InstagramLogoIconRadix} {...props} />
  </AccessibleIcon>
)

const Link1Icon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a link. An outline of two links of a chain intersecting.'
    }
  >
    <Box as={Link1IconRadix} {...props} />
  </AccessibleIcon>
)

const LinkedInLogoIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing the logo of LinkedIn. A solid rounded rectangle with the letters -i and -n outlined within.'
    }
  >
    <Box as={LinkedInLogoIconRadix} {...props} />
  </AccessibleIcon>
)

const ListBulletIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a bulleted list. It is three bullet points with a line to the right of each symbolizing text.'
    }
  >
    <Box as={ListBulletIconRadix} {...props} />
  </AccessibleIcon>
)

const LocationMarkerIcon = ({ css, label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a location marker. This is an outline marker that looks like a guitar pick with the bigger side at the top with a circle cut out.'
    }
  >
    <Box
      as={MapPinIconHero}
      css={{
        ...cssHeroToRadix,
        ...css,
      }}
      {...props}
    />
  </AccessibleIcon>
)

const MagnifyingGlassIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a magnifying glass. It is an outline of a diagnol mangifying glass with its handle towards the bottom right, and the glass part towards the upper left.'
    }
  >
    <Box as={MagnifyingGlassIconRadix} {...props} />
  </AccessibleIcon>
)

const MapIcon = ({ css, label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a map. This is a page that has been folded into four equal rectangles each kind of askew a bit to show depth. There is nothing within this outline of the four rectangles.'
    }
  >
    <Box
      as={MapIconHero}
      css={{
        ...cssHeroToRadix,
        ...css,
      }}
      {...props}
    />
  </AccessibleIcon>
)

const MicrophoneIcon = ({ css, label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a microphone. This type of microphone is something a podcaster would use. A pill shaped outline of a microphone cradled in a sold outlined stand.'
    }
  >
    <Box
      as={MicrophoneIconHero}
      css={{
        ...cssHeroToRadix,
        ...css,
      }}
      {...props}
    />
  </AccessibleIcon>
)

const MoonIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing the moon. This moon is a half crescent with the left half missing. In that missing moon space towards the upper left are three stars in the distance in an isosceles triangle pattern.'
    }
  >
    <Box as={MoonIconRadix} {...props} />
  </AccessibleIcon>
)

const MusicalNoteIcon = ({ css, label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a musical note. This is a beamed note, with the second note slightly higher on the scale.'
    }
  >
    <Box
      as={MusicalNoteIconHero}
      css={{
        ...cssHeroToRadix,
        ...css,
      }}
      {...props}
    />
  </AccessibleIcon>
)

const Pencil1Icon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a pencil. An outline of a pencil that is diagonal with its tip pointing down and to the left.'
    }
  >
    <Box as={Pencil1IconRadix} {...props} />
  </AccessibleIcon>
)

const Pencil2Icon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a pencil writing on a piece of paper. An outline of a pencil coming from the top right corner of the paper with no hand attached.'
    }
  >
    <Box as={Pencil2IconRadix} {...props} />
  </AccessibleIcon>
)

const QuoteIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a quotation mark. An outline of a two quotation marks that would typically end a quote..'
    }
  >
    <Box as={QuoteIconRadix} {...props} />
  </AccessibleIcon>
)

const ArrowUturnLeftIcon = ({ css, label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a reply arrow. It is a left facing arrow with the right tail-end pointing curving down.'
    }
  >
    <Box
      as={ArrowUturnLeftHero}
      css={{
        ...cssHeroToRadix,
        ...css,
      }}
      {...props}
    />
  </AccessibleIcon>
)

const ReturnIcon = ({ css, label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a return arrow. It is a left facing arrow with the right tail-end curving up.'
    }
  >
    <Box
      as={ArrowUturnLeftHero}
      css={{
        ...cssHeroToRadix,
        ...css,
        transform: 'rotate(180deg) scaleX(-1)',
      }}
      {...props}
    />
  </AccessibleIcon>
)

const Share1Icon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a social share. An outline of a circle with two beams attached to two other circles symbolizing a share across a network.'
    }
  >
    <Box as={Share1IconRadix} {...props} />
  </AccessibleIcon>
)

const SpeakerModerateIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a single speaker point to the right with single curved line symbolizing moderate noise coming from it.'
    }
  >
    <Box as={SpeakerModerateIconRadix} {...props} />
  </AccessibleIcon>
)

const SpeakerOffIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a single speaker pointed to the right with an -x next to it representing that it is off, or muted.'
    }
  >
    <Box as={SpeakerOffIconRadix} {...props} />
  </AccessibleIcon>
)

const StarIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a star. It is the outline of a star that has five points.'
    }
  >
    <Box as={StarIconRadix} {...props} />
  </AccessibleIcon>
)

const StrikethroughIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a strikethrough. It is a capital letter -U with a line drawn horizontally across its center.'
    }
  >
    <Box as={StrikethroughIconRadix} {...props} />
  </AccessibleIcon>
)

const SunIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing the sun. In this instance though the sun is a circle with eight small rays of light shining in a circlular pattern around it.'
    }
  >
    <Box as={SunIconRadix} {...props} />
  </AccessibleIcon>
)

const TagIcon = ({ css, label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a tag. The tag has a small hole where it would be attached to something larger, and is pointing towards the upper left.'
    }
  >
    <Box
      as={TagIconHero}
      css={{
        ...cssHeroToRadix,
        ...css,
      }}
      {...props}
    />
  </AccessibleIcon>
)

const TextAlignCenterIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon label={label || 'An icon ...'}>
    <Box as={TextAlignCenterIconRadix} {...props} />
  </AccessibleIcon>
)

const TextAlignJustifyIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing text align justify. Three separate lines of equal length.'
    }
  >
    <Box as={TextAlignJustifyIconRadix} {...props} />
  </AccessibleIcon>
)

const TextAlignLeftIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing text align left. Three separate lines of varying length, left aligned.'
    }
  >
    <Box as={TextAlignLeftIconRadix} {...props} />
  </AccessibleIcon>
)

const TextAlignRightIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing text align right. Three separate lines of varying length, right aligned.'
    }
  >
    <Box as={TextAlignRightIconRadix} {...props} />
  </AccessibleIcon>
)

const TicketIcon = ({ css, label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a ticket. It is a singular ticket that looks like it is from a 50/50 raffle where the recipient keeps the larger piece, and there is a perforated top half that can be ripped off to go into the larger pool.'
    }
  >
    <Box
      as={TicketIconHero}
      css={{
        ...cssHeroToRadix,
        ...css,
      }}
      {...props}
    />
  </AccessibleIcon>
)

const TwitterLogoIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing the logo of Twitter. An outline of a blue bird that is facing to the right chirping.'
    }
  >
    <Box as={TwitterLogoIconRadix} {...props} />
  </AccessibleIcon>
)

export {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopRightIcon,
  ArrowUturnLeftIcon,
  BellIcon,
  BookOpenIcon,
  BookmarkFilledIcon,
  BookmarkIcon,
  CalendarIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CaretSortIcon,
  CaretUpIcon,
  ChatBubbleIcon,
  CheckCircledIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ClockIcon,
  Cross1Icon,
  Cross2Icon,
  CrossCircledIcon,
  DesktopIcon,
  EnterIcon,
  EnvelopeOpenIcon,
  ExclamationTriangleIcon,
  ExitIcon,
  ExternalLinkIcon,
  FontBoldIcon,
  FontItalicIcon,
  GearIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  HomeIcon,
  IdCardIcon,
  ImageIcon,
  InfoCircledIcon,
  InstagramLogoIcon,
  Link1Icon,
  LinkedInLogoIcon,
  ListBulletIcon,
  LocationMarkerIcon,
  MagnifyingGlassIcon,
  MapIcon,
  MicrophoneIcon,
  MoonIcon,
  MusicalNoteIcon,
  Pencil1Icon,
  Pencil2Icon,
  QuoteIcon,
  ReturnIcon,
  Share1Icon,
  SpeakerModerateIcon,
  SpeakerOffIcon,
  StarIcon,
  StrikethroughIcon,
  SunIcon,
  TagIcon,
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TicketIcon,
  TwitterLogoIcon,
}

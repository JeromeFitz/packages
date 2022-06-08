import { AccessibleIcon } from '@radix-ui/react-accessible-icon'
import {
  ArrowLeftIcon as ArrowLeftIconRadix,
  ArrowRightIcon as ArrowRightIconRadix,
  ArrowTopRightIcon as ArrowTopRightIconRadix,
  CalendarIcon as CalendarIconRadix,
  ChatBubbleIcon as ChatBubbleIconRadix,
  CheckIcon as CheckIconRadix,
  CheckCircledIcon as CheckCircledIconRadix,
  ChevronRightIcon as ChevronRightIconRadix,
  ClockIcon as ClockIconRadix,
  Cross1Icon as Cross1IconRadix,
  CrossCircledIcon as CrossCircledIconRadix,
  EnterIcon as EnterIconRadix,
  EnvelopeOpenIcon as EnvelopeOpenIconRadix,
  ExclamationTriangleIcon as ExclamationTriangleIconRadix,
  ExitIcon as ExitIconRadix,
  ExternalLinkIcon as ExternalLinkIconRadix,
  GearIcon as GearIconRadix,
  GitHubLogoIcon as GitHubLogoIconRadix,
  HamburgerMenuIcon as HamburgerMenuIconRadix,
  IdCardIcon as IdCardIconRadix,
  InfoCircledIcon as InfoCircledIconRadix,
  InstagramLogoIcon as InstagramLogoIconRadix,
  LinkedInLogoIcon as LinkedInLogoIconRadix,
  ListBulletIcon as ListBulletIconRadix,
  MoonIcon as MoonIconRadix,
  SpeakerModerateIcon as SpeakerModerateIconRadix,
  SpeakerOffIcon as SpeakerOffIconRadix,
  StarIcon as StarIconRadix,
  SunIcon as SunIconRadix,
  TwitterLogoIcon as TwitterLogoIconRadix,
} from '@radix-ui/react-icons'

import { IconProps } from './Icon.types'

const ArrowLeftIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={label || 'An icon representing an arrow that is pointing to the left.'}
  >
    <ArrowLeftIconRadix {...props} />
  </AccessibleIcon>
)

const ArrowRightIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={label || 'An icon representing an arrow that is pointing to the right.'}
  >
    <ArrowRightIconRadix {...props} />
  </AccessibleIcon>
)

const ArrowTopRightIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an arrow pointing diagonally towards the top right.'
    }
  >
    <ArrowTopRightIconRadix {...props} />
  </AccessibleIcon>
)

const CalendarIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a calendar. It has two hooks as if the paper is a rip-off type of calendar per month, with small shaded squares with symbolizing days of a month.'
    }
  >
    <CalendarIconRadix {...props} />
  </AccessibleIcon>
)

const ChatBubbleIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a chat bubble. It is a rounded rectangle with no text within it, and a small upside down triangle as part of the rounded rectangle outline toward the bottom right which would point to someone or something talking.'
    }
  >
    <ChatBubbleIconRadix {...props} />
  </AccessibleIcon>
)

const CheckIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon label={label || 'An icon representing a checkmark.'}>
    <CheckIconRadix {...props} />
  </AccessibleIcon>
)

const CheckCircledIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon label={label || 'An icon representing a checkmark in a circle.'}>
    <CheckCircledIconRadix {...props} />
  </AccessibleIcon>
)

const ChevronRightIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a chevron that is pointed right. So kind of like a greater than sign.'
    }
  >
    <ChevronRightIconRadix {...props} />
  </AccessibleIcon>
)

const ClockIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a clock. It is a circular clock with the hour hand at the four and minute at the twelve.'
    }
  >
    <ClockIconRadix {...props} />
  </AccessibleIcon>
)

const Cross1Icon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an -x. It is a larger -x than the letter itself.'
    }
  >
    <Cross1IconRadix {...props} />
  </AccessibleIcon>
)

const CrossCircledIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon label={label || 'An icon representing a crossmark in a circle.'}>
    <CrossCircledIconRadix {...props} />
  </AccessibleIcon>
)

const EnterIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an arrow that is pointing at an area that exhibits movement towards, or into.'
    }
  >
    <EnterIconRadix {...props} />
  </AccessibleIcon>
)

const EnvelopeOpenIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an envelope that is in the process of being opened.'
    }
  >
    <EnvelopeOpenIconRadix {...props} />
  </AccessibleIcon>
)

const ExclamationTriangleIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an exclamation mark in an octagon. Like a stop sign  with an exclamation mark.'
    }
  >
    <ExclamationTriangleIconRadix {...props} />
  </AccessibleIcon>
)

const ExitIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an arrow that is pointing out of an area that exhibits movement away from, or out of.'
    }
  >
    <ExitIconRadix {...props} />
  </AccessibleIcon>
)

const ExternalLinkIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an arrow pointing diagonally towards the top right corner of the screen.'
    }
  >
    <ExternalLinkIconRadix {...props} />
  </AccessibleIcon>
)

const GearIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a gear which is a cog with eight tooth like parts around the edge of its wheel.'
    }
  >
    <GearIconRadix {...props} />
  </AccessibleIcon>
)

const GitHubLogoIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon that is an outline of an Octocat. An Octocat is an octopus cat hybrid with a cat head and octopus body. It is cute and not hideous despite how it may come off. This is the logo of GitHub.'
    }
  >
    <GitHubLogoIconRadix {...props} />
  </AccessibleIcon>
)

const HamburgerMenuIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing three horizontal lines with some equal spacing between. Kind of like a hamburger where the top and bottom one are the bun, and the middle one is the meat (or plant based product if you prefer).'
    }
  >
    <HamburgerMenuIconRadix {...props} />
  </AccessibleIcon>
)

const IdCardIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing an ID. A long rectangle like card with a shaded interior box for an image and some lines symbolizing text to its right.'
    }
  >
    <IdCardIconRadix {...props} />
  </AccessibleIcon>
)

const InfoCircledIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={label || 'An icon representing the letter &lsquo;i&lsquo; in a circle.'}
  >
    <InfoCircledIconRadix {...props} />
  </AccessibleIcon>
)

const InstagramLogoIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing the logo of Instagram. A rounded rectangle with a circle in the middle representing a camera lens and to its upper right a small dot which would be its flash.'
    }
  >
    <InstagramLogoIconRadix {...props} />
  </AccessibleIcon>
)

const LinkedInLogoIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing the logo of LinkedIn. A solid rounded rectangle with the letters -i and -n outlined within.'
    }
  >
    <LinkedInLogoIconRadix {...props} />
  </AccessibleIcon>
)

const ListBulletIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a bulleted list. It is three bullet points with a line to the right of each symbolizing text.'
    }
  >
    <ListBulletIconRadix {...props} />
  </AccessibleIcon>
)

const MoonIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing the moon. This moon is a half crescent with the left half missing. In that missing moon space towards the upper left are three stars in the distance in an isosceles triangle pattern.'
    }
  >
    <MoonIconRadix {...props} />
  </AccessibleIcon>
)

const SpeakerModerateIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a single speaker point to the right with single curved line symbolizing moderate noise coming from it.'
    }
  >
    <SpeakerModerateIconRadix {...props} />
  </AccessibleIcon>
)

const SpeakerOffIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a single speaker pointed to the right with an -x next to it representing that it is off, or muted.'
    }
  >
    <SpeakerOffIconRadix {...props} />
  </AccessibleIcon>
)

const StarIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing a star. It is the outline of a star that has five points.'
    }
  >
    <StarIconRadix {...props} />
  </AccessibleIcon>
)

const SunIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing the sun. In this instance though the sun is a circle with eight small rays of light shining in a circlular pattern around it.'
    }
  >
    <SunIconRadix {...props} />
  </AccessibleIcon>
)

const TwitterLogoIcon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon
    label={
      label ||
      'An icon representing the logo of Twitter. An outline of a blue bird that is facing to the right chirping.'
    }
  >
    <TwitterLogoIconRadix {...props} />
  </AccessibleIcon>
)

export {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopRightIcon,
  CalendarIcon,
  ChatBubbleIcon,
  CheckIcon,
  CheckCircledIcon,
  ChevronRightIcon,
  ClockIcon,
  Cross1Icon,
  CrossCircledIcon,
  EnterIcon,
  EnvelopeOpenIcon,
  ExclamationTriangleIcon,
  ExitIcon,
  ExternalLinkIcon,
  GearIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  IdCardIcon,
  InfoCircledIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  ListBulletIcon,
  MoonIcon,
  SpeakerModerateIcon,
  SpeakerOffIcon,
  StarIcon,
  SunIcon,
  TwitterLogoIcon,
}

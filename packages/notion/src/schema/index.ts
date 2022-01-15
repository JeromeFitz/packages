type DatabaseType =
  | 'BLOG'
  | 'EPISODES'
  | 'EVENTS'
  | 'PAGES'
  | 'PEOPLE'
  | 'PODCASTS'
  | 'SEO'
  | 'SHOWS'
  | 'VENUES'

type DataTypes = 'LISTING' | 'LISTING_BY_DATE' | 'SLUG' | 'SLUG_BY_ROUTE'
type DataTypesObject = {
  [id in DataTypes]: DataTypes
}

type DatabaseInfo = {
  [key in DatabaseType]: {
    active: boolean
    database_id: string
    dataTypes: DataTypes[]
    name: string
    page_id__seo: string
    routeType: string
    slug: string
  }
}

type Databases = {
  [key in DatabaseType]: DatabaseType
}

interface Relation {
  database_id: string
  synced_property_name: string
  synced_property_id?: string
}

interface Rollup {
  relation_property_id?: string
  relation_property_name?: string
  rollup_property_id?: string
  rollup_property_name?: string
  function:
    | 'average'
    | 'count_all'
    | 'count_empty'
    | 'count_not_empty'
    | 'count_unique_values'
    | 'count_values'
    | 'max'
    | 'median'
    | 'min'
    | 'percent_empty'
    | 'percent_not_empty'
    | 'range'
    | 'show_original'
    | 'sum'
}

interface Property {
  init: boolean
  key: string
  notion: string
  format?:
    | 'baht'
    | 'canadian_dollar'
    | 'chilean_peso'
    | 'colombian_peso'
    | 'danish_krone'
    | 'dirham'
    | 'dollar'
    | 'euro'
    | 'forint'
    | 'franc'
    | 'hong_kong_dollar'
    | 'koruna'
    | 'krona'
    | 'leu'
    | 'lira'
    | 'mexican_peso'
    | 'new_taiwan_dollar'
    | 'new_zealand_dollar'
    | 'norwegian_krone'
    | 'number_with_commas'
    | 'number'
    | 'percent'
    | 'philippine_peso'
    | 'pound'
    | 'rand'
    | 'real'
    | 'ringgit'
    | 'riyal'
    | 'ruble'
    | 'rupee'
    | 'rupiah'
    | 'shekel'
    | 'won'
    | 'yen'
    | 'yuan'
    | 'zloty'
  relation?: Relation
  rollup?: Rollup
  type:
    | 'checkbox'
    | 'created_by'
    | 'created_time'
    | 'date'
    | 'email'
    | 'files'
    | 'formula'
    | 'last_edited_by'
    | 'last_edited_time'
    | 'multi_select'
    | 'number'
    | 'people'
    | 'phone_number'
    | 'relation'
    | 'rich_text'
    | 'rollup'
    | 'select'
    | 'title'
    | 'url'
}

interface Default {
  // authors: any
  dateCreated?: any
  datePublished: any
  isIndexed: any
  isPublished: any
  slug: any
  seoDescription: any
  seoImage: any
  seoImageDescription: any
}

type BlogPost = Default
type Blog = Record<string, BlogPost>

interface Episode extends Default {
  dateRecorded: any
  duration: any
  episode: any
  mp3: any
  season: any
  relationEpisodes__People_Guest: any
  relationEpisodes__People_Sound_Engineer: any
  relationEpisodes__People_Thanks: any
  relationEpisodes__Podcast: any
  relationEpisodes__Venues: any
  socialApple: any
  socialSpotify: any
  type: any
}
type Episodes = Record<string, Episode>
interface Event extends Default {
  dateEvent: any
  relationEvents__People_Guest: any
  relationEvents__People_Guest_Music: any
  relationEvents__People_Host: any
  relationEvents__Shows_Lineup: any
  relationEvents__Shows: any
  relationEvents__Venues: any
  rollupEvents__People_Cast: any
  rollupEvents__People_Guest: any
  rollupEvents__People_Guest_Music: any
  rollupEvents__People_Host: any
  rollupEvents__Shows_Lineup: any
  rollupEvents__Shows: any
  rollupEvents__Venues: any
  socialFacebook: any
  socialWebsite: any
  ticketUrl: any
}
type Events = Record<string, Event>

type Page = Default
type Pages = Record<string, Page>
interface Person extends Default {
  email: any
  nameFirst: any
  nameLast: any
  namePreferred: any
  relationPeople__Episodes_Guest: any
  relationPeople__Episodes_Sound_Engineer: any
  relationPeople__Episodes_Thanks: any
  relationPeople__Events_Guest: any
  relationPeople__Events_Guest_Music: any
  relationPeople__Events_Host: any
  relationPeople__Podcasts_Host: any
  relationPeople__Podcasts_Sound_Engineer: any
  relationPeople__Shows_Cast: any
  relationPeople__Shows_Cast_Past: any
  relationPeople__Shows_Director: any
  relationPeople__Shows_Director_Musical: any
  relationPeople__Shows_Director_Technical: any
  relationPeople__Shows_Producer: any
  relationPeople__Shows_Thanks: any
  relationPeople__Shows_Writer: any
}
type People = Record<string, Person>
interface Podcast extends Default {
  categories: any
  explicit: any
  podcastAuthor: any
  podcastAuthorEmail: any
  relationPodcasts__Episodes: any
  relationPodcasts__People_Host: any
  relationPodcasts__People_Sound_Engineer: any
  socialApple: any
  socialSpotify: any
  type: any
}
type Podcasts = Record<string, Podcast>

type SeoPost = Default
type Seo = Record<string, SeoPost>
interface Show extends Default {
  relationShows__Events: any
  relationShows__Events_Lineup: any
  relationShows__People_Cast: any
  relationShows__People_Cast_Past: any
  relationShows__People_Crew: any
  relationShows__People_Director: any
  relationShows__People_Director_Musical: any
  relationShows__People_Director_Technical: any
  relationShows__People_Producer: any
  relationShows__People_Thanks: any
  relationShows__People_Writer: any
  relationShows__Tags: any
  rollupShows__People_Cast: any
  rollupShows__People_Cast_Slug: any
  rollupShows__People_Cast_Past: any
  rollupShows__People_Crew: any
  rollupShows__People_Director: any
  rollupShows__People_Director_Musical: any
  rollupShows__People_Director_Technical: any
  rollupShows__People_Music: any
  rollupShows__People_Producer: any
  rollupShows__People_Thanks: any
  rollupShows__People_Writer: any
  rollupShows__Tags: any
  socialFacebook: string
  socialInstagram: string
  socialTwitter: string
  socialWebsite: string
}
type Shows = Record<string, Show>

interface Venue extends Default {
  addressCity: any
  addressLatitude: any
  addressLongitude: any
  addressNeighborhood: any
  addressState: any
  addressStreet: any
  addressZipCode: any
  phoneNumber: any
  relationVenues__Episodes: any
  relationVenues__Events: any
  socialFacebook: any
  socialInstagram: any
  socialTwitter: any
  socialWebsite: any
}
type Venues = Record<string, Venue>

interface NotionAnnotations {
  bold: boolean
  code: boolean
  color: string
  italic: boolean
  strikethrough: boolean
  underline: boolean
}

interface NotionTextContent {
  content: string
  link: string | null
}

interface NotionText {
  annotations: NotionAnnotations
  href: string | null
  plain_text: string
  text: NotionTextContent
  type: string
}

interface NotionUrl {
  url: string
}

interface NotionImage {
  file?: NotionUrl
  caption?: NotionText
  external?: NotionUrl
  type: string
}

interface NotionBlock {
  created_time: string
  has_children: string
  id: string
  last_edited_time: string
  object: string
  type: string
  //
  heading_1?: NotionText[]
  heading_2?: NotionText[]
  heading_3?: NotionText[]
  heading_4?: NotionText[]
  heading_5?: NotionText[]
  heading_6?: NotionText[]
  image?: NotionImage
  paragraph?: NotionText[]
}

export type {
  Blog,
  BlogPost,
  DatabaseInfo,
  Databases,
  DatabaseType,
  DataTypes,
  DataTypesObject,
  Episode,
  Episodes,
  Event,
  Events,
  NotionBlock,
  NotionText,
  Page,
  Pages,
  People,
  Person,
  Podcast,
  Podcasts,
  Property,
  Seo,
  SeoPost,
  Show,
  Shows,
  Venue,
  Venues,
}

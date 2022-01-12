import _filter from 'lodash/filter'
import _map from 'lodash/map'

import type { Property } from './types'

const getLookup = ({ key, notion, type }) => ({
  key,
  notion,
  type,
})

/**
 * @note
 * Valid Notion Property Types mapped to Normalizer w/ init info
 */
const PROPERTIES: Record<string, Property> = {
  addressCity: {
    init: true,
    key: 'addressCity',
    notion: 'Address.City',
    type: 'rich_text',
  },
  addressLatitude: {
    init: true,
    key: 'addressLatitude',
    notion: 'Address.Latitude',
    type: 'number',
    format: 'number',
  },
  addressLongitude: {
    init: true,
    key: 'addressLongitude',
    notion: 'Address.Longitude',
    type: 'number',
    format: 'number',
  },
  addressNeighborhood: {
    init: true,
    key: 'addressNeighborhood',
    notion: 'Address.Neighborhood',
    type: 'rich_text',
  },
  addressState: {
    init: true,
    key: 'addressState',
    notion: 'Address.State',
    type: 'select',
  },
  addressStreet: {
    init: true,
    key: 'addressStreet',
    notion: 'Address.Street',
    type: 'rich_text',
  },
  addressZipCode: {
    init: true,
    key: 'addressZipCode',
    notion: 'Address.ZipCode',
    type: 'number',
    format: 'number',
  },
  authors: {
    init: true,
    key: 'authors',
    notion: 'Authors',
    type: 'people',
  },
  categories: {
    init: true,
    key: 'categories',
    notion: 'Categories',
    type: 'multi_select',
  },
  dateCreated: {
    init: false,
    key: 'dateCreated',
    notion: 'Date.Created',
    type: 'created_time',
  },
  dateEdited: {
    init: false,
    key: 'dateEdited',
    notion: 'Date.Edited',
    type: 'last_edited_time',
  },
  dateEvent: {
    init: true,
    key: 'dateEvent',
    notion: 'Date.Event',
    type: 'date',
  },
  datePublished: {
    init: true,
    key: 'datePublished',
    notion: 'Date.Published',
    type: 'date',
  },
  dateRecorded: {
    init: true,
    key: 'dateRecorded',
    notion: 'Date.Recorded',
    type: 'date',
  },
  duration: {
    init: true,
    key: 'duration',
    notion: 'Duration',
    type: 'rich_text',
  },
  email: {
    init: true,
    key: 'email',
    notion: 'Email',
    type: 'rich_text',
  },
  episode: {
    init: true,
    key: 'episode',
    notion: 'Episode',
    type: 'number',
    format: 'number',
  },
  explicit: {
    init: true,
    key: 'explicit',
    notion: 'Explicit',
    type: 'checkbox',
  },
  festivals: {
    init: true,
    key: 'festivals',
    notion: 'Festival',
    type: 'multi_select',
  },
  food: {
    init: true,
    key: 'food',
    notion: 'Food',
    type: 'rich_text',
  },
  isIndexed: {
    init: true,
    key: 'isIndexed',
    notion: 'Is.Indexed',
    type: 'checkbox',
  },
  isPublished: {
    init: true,
    key: 'isPublished',
    notion: 'Is.Published',
    type: 'checkbox',
  },
  mp3: {
    init: true,
    key: 'mp3',
    notion: 'MP3',
    type: 'files',
  },
  name: {
    init: true,
    key: 'name',
    notion: 'Name',
    type: 'rich_text',
  },
  nameFirst: {
    init: true,
    key: 'nameFirst',
    notion: 'Name.First',
    type: 'rich_text',
  },
  nameLast: {
    init: true,
    key: 'nameLast',
    notion: 'Name.Last',
    type: 'rich_text',
  },
  namePreferred: {
    init: true,
    key: 'namePreferred',
    notion: 'Name.Preferred',
    type: 'rich_text',
  },
  phoneNumber: {
    init: true,
    key: 'phoneNumber',
    notion: 'Phone',
    type: 'rich_text',
  },
  podcastAuthor: {
    init: true,
    key: 'podcastAuthor',
    notion: 'Author',
    type: 'rich_text',
  },
  podcastAuthorEmail: {
    init: true,
    key: 'podcastAuthorEmail',
    notion: 'Author.Email',
    type: 'rich_text',
  },
  /**
   * @relation
   */
  relationEpisodes__Podcast: {
    init: true,
    key: 'relationEpisodes__Podcast',
    notion: 'Podcasts',
    type: 'relation',
    relation: {
      database_id: 'Podcasts',
      synced_property_name: 'Episodes',
    },
  },
  relationPodcasts__Episodes: {
    init: false,
    key: 'relationPodcasts__Episodes',
    notion: 'Episodes',
    type: 'relation',
    relation: {
      database_id: 'Episodes',
      synced_property_name: 'Podcasts',
    },
  },
  relationEpisodes__People_Guest: {
    init: true,
    key: 'relationEpisodes__People_Guest',
    notion: 'Guest',
    type: 'relation',
    relation: {
      database_id: 'People',
      synced_property_name: 'Episodes.Guest',
    },
  },
  relationPeople__Episodes_Guest: {
    init: false,
    key: 'relationPeople__Episodes_Guest',
    notion: 'Episodes.Guest',
    type: 'relation',
    relation: {
      database_id: 'Episodes',
      synced_property_name: 'Guest',
    },
  },
  relationEpisodes__People_Sound_Engineer: {
    init: true,
    key: 'relationEpisodes__People_Sound_Engineer',
    notion: 'Sound.Engineer',
    type: 'relation',
    relation: {
      database_id: 'People',
      synced_property_name: 'Episodes.Sound.Engineer',
    },
  },
  relationPeople__Episodes_Sound_Engineer: {
    init: false,
    key: 'relationPeople__Episodes_Sound_Engineer',
    notion: 'Episodes.Sound.Engineer',
    type: 'relation',
    relation: {
      database_id: 'Episodes',
      synced_property_name: 'Sound.Engineer',
    },
  },
  relationEpisodes__People_Thanks: {
    init: true,
    key: 'relationEpisodes__People_Thanks',
    notion: 'Thanks',
    type: 'relation',
    relation: {
      database_id: 'People',
      synced_property_name: 'Episodes.Thanks',
    },
  },
  relationPeople__Episodes_Thanks: {
    init: false,
    key: 'relationPeople__Episodes_Thanks',
    notion: 'Episodes.Thanks',
    type: 'relation',
    relation: {
      database_id: 'Episodes',
      synced_property_name: 'Thanks',
    },
  },
  relationEpisodes__Venues: {
    init: true,
    key: 'relationEpisodes__Venues',
    notion: 'Venues',
    type: 'relation',
    relation: {
      database_id: 'Venues',
      synced_property_name: 'Episodes',
    },
  },
  relationVenues__Episodes: {
    init: false,
    key: 'relationVenues__Episodes',
    notion: 'Episodes',
    type: 'relation',
    relation: {
      database_id: 'Episodes',
      synced_property_name: 'Venues',
    },
  },
  relationEvents__Venues: {
    init: true,
    key: 'relationEvents__Venues',
    notion: 'Venues',
    type: 'relation',
    relation: {
      database_id: 'Venues',
      synced_property_name: 'Events',
    },
  },
  relationVenues__Events: {
    init: false,
    key: 'relationVenues__Events',
    notion: 'Events',
    type: 'relation',
    relation: {
      database_id: 'Events',
      synced_property_name: 'Venues',
    },
  },
  relationEvents__Shows: {
    init: true,
    key: 'relationEvents__Shows',
    notion: 'Shows',
    type: 'relation',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Events',
    },
  },
  relationShows__Events: {
    init: false,
    key: 'relationShows__Events',
    notion: 'Events',
    type: 'relation',
    relation: {
      database_id: 'Events',
      synced_property_name: 'Shows',
    },
  },
  relationEvents__Shows_Lineup: {
    init: true,
    key: 'relationEvents__Shows_Lineup',
    notion: 'Shows.Lineup',
    type: 'relation',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Events.Lineup',
    },
  },
  relationShows__Events_Lineup: {
    init: false,
    key: 'relationShows__Events_Lineup',
    notion: 'Events.Lineup',
    type: 'relation',
    relation: {
      database_id: 'Events',
      synced_property_name: 'Shows.Lineup',
    },
  },
  relationShows__People_Cast: {
    init: true,
    key: 'relationShows__People_Cast',
    notion: 'Cast',
    type: 'relation',
    relation: {
      database_id: 'People',
      synced_property_name: 'Shows.Cast',
    },
  },
  relationPeople__Shows_Cast: {
    init: false,
    key: 'relationPeople__Shows_Cast',
    notion: 'Shows.Cast',
    type: 'relation',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Cast',
    },
  },
  relationShows__People_Cast_Past: {
    init: true,
    key: 'relationShows__People_Cast_Past',
    notion: 'Cast.Past',
    type: 'relation',
    relation: {
      database_id: 'People',
      synced_property_name: 'Shows.Cast.Past',
    },
  },
  relationPeople__Shows_Cast_Past: {
    init: false,
    key: 'relationPeople__Shows_Cast_Past',
    notion: 'Shows.Cast.Past',
    type: 'relation',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Cast.Past',
    },
  },
  relationShows_People_Crew: {
    init: true,
    key: 'relationShows_People_Crew',
    notion: 'Crew',
    type: 'relation',
    relation: {
      database_id: 'People',
      synced_property_name: 'Shows.Crew',
    },
  },
  relationPeople__Shows_Crew: {
    init: true,
    key: 'relationPeople__Shows_Crew',
    notion: 'Shows.Crew',
    type: 'relation',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Crew',
    },
  },
  relationShows__People_Director: {
    init: true,
    key: 'relationShows__People_Director',
    notion: 'Director',
    type: 'relation',
    relation: {
      database_id: 'People',
      synced_property_name: 'Shows.Director',
    },
  },
  relationPeople__Shows_Director: {
    init: false,
    key: 'relationPeople__Shows_Director',
    notion: 'Shows.Director',
    type: 'relation',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Director',
    },
  },
  relationShows__People_Director_Musical: {
    init: true,
    key: 'relationShows__People_Director_Musical',
    notion: 'Director.Musical',
    type: 'relation',
    relation: {
      database_id: 'People',
      synced_property_name: 'Shows.Director.Musical',
    },
  },
  relationPeople__Shows_Director_Musical: {
    init: false,
    key: 'relationPeople__Shows_Director_Musical',
    notion: 'Shows.Director.Musical',
    type: 'relation',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Director.Musical',
    },
  },
  relationShows__People_Director_Technical: {
    init: true,
    key: 'relationShows__People_Director_Technical',
    notion: 'Director.Technical',
    type: 'relation',
    relation: {
      database_id: 'People',
      synced_property_name: 'Shows.Director.Technical',
    },
  },
  relationPeople__Shows_Director_Technical: {
    init: false,
    key: 'relationPeople__Shows_Director_Technical',
    notion: 'Shows.Director.Technical',
    type: 'relation',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Director.Technical',
    },
  },
  relationEvents__People_Guest: {
    init: true,
    key: 'relationEvents__People_Guest',
    notion: 'Guest',
    type: 'relation',
    relation: {
      database_id: 'People',
      synced_property_name: 'Events.Guest',
    },
  },
  relationPeople__Events_Guest: {
    init: false,
    key: 'relationEvents__People_Guest',
    notion: 'Events.Guest',
    type: 'relation',
    relation: {
      database_id: 'Events',
      synced_property_name: 'Guest',
    },
  },
  relationPodcasts__People_Host: {
    init: true,
    key: 'relationPodcasts__People_Host',
    notion: 'Host',
    type: 'relation',
    relation: {
      database_id: 'People',
      synced_property_name: 'Podcasts.Host',
    },
  },
  relationPeople__Podcasts_Host: {
    init: false,
    key: 'relationPeople__Podcasts_Host',
    notion: 'Podcasts.Host',
    type: 'relation',
    relation: {
      database_id: 'Podcasts',
      synced_property_name: 'Host',
    },
  },
  relationEvents__People_Host: {
    init: true,
    key: 'relationEvents__People_Host',
    notion: 'Host',
    type: 'relation',
    relation: {
      database_id: 'People',
      synced_property_name: 'Events.Host',
    },
  },
  relationPeople__Events_Host: {
    init: false,
    key: 'relationPeople__Events_Host',
    notion: 'Events.Host',
    type: 'relation',
    relation: {
      database_id: 'Events',
      synced_property_name: 'Host',
    },
  },
  relationShows__People_Producer: {
    init: true,
    key: 'relationShows__People_Producer',
    notion: 'Producer',
    type: 'relation',
    relation: {
      database_id: 'People',
      synced_property_name: 'Shows.Producer',
    },
  },
  relationPeople__Shows_Producer: {
    init: false,
    key: 'relationPeople__Shows_Producer',
    notion: 'Shows.Producer',
    type: 'relation',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Producer',
    },
  },
  relationEvents__People_Guest_Music: {
    init: true,
    key: 'relationEvents__People_Guest_Music',
    notion: 'Guest.Music',
    type: 'relation',
    relation: {
      database_id: 'People',
      synced_property_name: 'Events.Guest.Music',
    },
  },
  relationPeople__Events_Guest_Music: {
    init: false,
    key: 'relationPeople__Events_Guest_Music',
    notion: 'Events.Guest.Music',
    type: 'relation',
    relation: {
      database_id: 'Events',
      synced_property_name: 'Guest.Music',
    },
  },
  relationPodcasts__People_Sound_Engineer: {
    init: true,
    key: 'relationPodcasts__People_Sound_Engineer',
    notion: 'Sound.Engineer',
    type: 'relation',
    relation: {
      database_id: 'Podcasts',
      synced_property_name: 'Podcasts.Sound.Engineer',
    },
  },
  relationPeople__Podcasts_Sound_Engineer: {
    init: false,
    key: 'relationPeople__Podcasts_Sound_Engineer',
    notion: 'Podcasts.Sound.Engineer',
    type: 'relation',
    relation: {
      database_id: 'Podcasts',
      synced_property_name: 'Sound.Engineer',
    },
  },
  relationShows__People_Thanks: {
    init: true,
    key: 'relationShows__People_Thanks',
    notion: 'Thanks',
    type: 'relation',
    relation: {
      database_id: 'People',
      synced_property_name: 'Shows.Thanks',
    },
  },
  relationPeople__Shows_Thanks: {
    init: false,
    key: 'relationPeople__Shows_Thanks',
    notion: 'Shows.Thanks',
    type: 'relation',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Thanks',
    },
  },
  relationShows__People_Writer: {
    init: true,
    key: 'relationShows__People_Writer',
    notion: 'Writer',
    type: 'relation',
    relation: {
      database_id: 'People',
      synced_property_name: 'Shows.Writer',
    },
  },
  relationPeople__Shows_Writer: {
    init: false,
    key: 'relationPeople__Shows_Writer',
    notion: 'Shows.Writer',
    type: 'relation',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Writer',
    },
  },
  relationShows__Tags: {
    init: true,
    key: 'relationShows__Tags',
    notion: 'Tags',
    type: 'relation',
    relation: {
      database_id: 'Tags',
      synced_property_name: 'Shows',
    },
  },
  relationTags__Shows: {
    init: false,
    key: 'relationTags__Shows',
    notion: 'Shows',
    type: 'relation',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Tags',
    },
  },
  rollupShows__Tags: {
    init: false,
    key: 'rollupShows__Tags',
    notion: 'Tags.Rollup',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Tags',
      rollup_property_id: 'Title',
      function: 'show_original',
    },
  },
  /**
   * @rollup
   */
  rollupShows__People_Cast: {
    init: false,
    key: 'rollupShows__People_Cast',
    notion: 'Cast.Rollup',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Cast',
      rollup_property_id: 'Title',
      function: 'show_original',
    },
  },
  rollupShows__People_Cast_Slug: {
    init: false,
    key: 'rollupShows__People_Cast_Slug',
    notion: 'Cast.Rollup.Slug',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Cast',
      rollup_property_name: 'Slug',
      function: 'show_original',
    },
  },
  rollupShows__People_Cast_Past: {
    init: false,
    key: 'rollupShows__People_Cast_Past',
    notion: 'Cast.Past.Rollup',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Cast.Past',
      rollup_property_id: 'Title',
      function: 'show_original',
    },
  },
  rollupShows__People_Crew: {
    init: false,
    key: 'rollupShows__People_Crew',
    notion: 'Crew.Rollup',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Crew',
      rollup_property_name: 'Title',
      function: 'show_original',
    },
  },
  rollupShows__People_Director: {
    init: false,
    key: 'rollupShows__People_Director',
    notion: 'Director.Rollup',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Director',
      rollup_property_name: 'Title',
      function: 'show_original',
    },
  },
  rollupShows__People_Director_Musical: {
    init: false,
    key: 'rollupShows__People_Director_Musical',
    notion: 'Director.Musical.Rollup',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Director.Musical',
      rollup_property_name: 'Title',
      function: 'show_original',
    },
  },
  rollupShows__People_Director_Technical: {
    init: false,
    key: 'rollupShows__People_Director_Technical',
    notion: 'Director.Technical.Rollup',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Director.Technical',
      rollup_property_name: 'Title',
      function: 'show_original',
    },
  },
  rollupShows__People_Music: {
    init: false,
    key: 'rollupShows__People_Music',
    notion: 'Music.Rollup',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Music',
      rollup_property_name: 'Title',
      function: 'show_original',
    },
  },
  rollupShows__People_Producer: {
    init: false,
    key: 'rollupShows__People_Producer',
    notion: 'Producer.Rollup',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Producer',
      rollup_property_name: 'Title',
      function: 'show_original',
    },
  },
  rollupShows__People_Thanks: {
    init: false,
    key: 'rollupShows__People_Thanks',
    notion: 'Thanks.Rollup',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Thanks',
      rollup_property_name: 'Title',
      function: 'show_original',
    },
  },
  rollupShows__People_Writer: {
    init: false,
    key: 'rollupShows__People_Writer',
    notion: 'Writer.Rollup',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Writer',
      rollup_property_name: 'Title',
      function: 'show_original',
    },
  },
  //
  rollupEvents__People_Cast: {
    init: false,
    key: 'rollupEvents__People_Cast',
    notion: 'Cast.Rollup',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Shows',
      rollup_property_id: 'Cast',
      function: 'show_original',
    },
  },
  rollupEvents__People_Guest: {
    init: false,
    key: 'rollupEvents__People_Guest',
    notion: 'Guest.Rollup',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Guest',
      rollup_property_id: 'Title',
      function: 'show_original',
    },
  },
  rollupEvents__People_Guest_Music: {
    init: false,
    key: 'rollupEvents__People_Guest_Music',
    notion: 'Guest.Music.Rollup',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Guest.Music',
      rollup_property_id: 'Title',
      function: 'show_original',
    },
  },
  rollupEvents__People_Host: {
    init: false,
    key: 'rollupEvents__People_Host',
    notion: 'Host.Rollup',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Host',
      rollup_property_id: 'Title',
      function: 'show_original',
    },
  },
  rollupEvents__Shows: {
    init: false,
    key: 'rollupEvents__Shows',
    notion: 'Shows.Rollup',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Shows',
      rollup_property_id: 'Title',
      function: 'show_original',
    },
  },
  rollupEvents__Shows_Lineup: {
    init: false,
    key: 'rollupEvents__Shows_Lineup',
    notion: 'Shows.Lineup.Rollup',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Shows.Lineup',
      rollup_property_id: 'Title',
      function: 'show_original',
    },
  },
  rollupEvents__Venues: {
    init: false,
    key: 'rollupEvents__Venues',
    notion: 'Venues.Rollup',
    type: 'rollup',
    rollup: {
      relation_property_name: 'Venues',
      rollup_property_id: 'Title',
      function: 'show_original',
    },
  },
  season: {
    init: true,
    key: 'season',
    notion: 'Season',
    type: 'number',
    format: 'number',
  },
  seoDescription: {
    init: true,
    key: 'seoDescription',
    notion: 'SEO.Description',
    type: 'rich_text',
  },
  seoImage: {
    init: true,
    key: 'seoImage',
    notion: 'SEO.Image',
    type: 'files',
  },
  seoImageDescription: {
    init: true,
    key: 'seoImageDescription',
    notion: 'SEO.Image.Description',
    type: 'rich_text',
  },
  slug: {
    init: true,
    key: 'slug',
    notion: 'Slug',
    type: 'rich_text',
  },
  socialFacebook: {
    init: true,
    key: 'socialFacebook',
    notion: 'Social.Facebook',
    type: 'url',
  },
  socialInstagram: {
    init: true,
    key: 'socialInstagram',
    notion: 'Social.Instagram',
    type: 'url',
  },
  socialTwitter: {
    init: true,
    key: 'socialTwitter',
    notion: 'Social.Twitter',
    type: 'url',
  },
  socialWebsite: {
    init: true,
    key: 'socialWebsite',
    notion: 'Social.Website',
    type: 'url',
  },
  socialSpotify: {
    init: true,
    key: 'socialSpotify',
    notion: 'Social.Spotify',
    type: 'url',
  },
  socialApple: {
    init: true,
    key: 'socialApple',
    notion: 'Social.Apple',
    type: 'url',
  },
  subtitle: {
    init: true,
    key: 'subtitle',
    notion: 'Subitle',
    type: 'rich_text',
  },
  ticketUrl: {
    init: true,
    key: 'ticketUrl',
    notion: 'TicketUrl',
    type: 'url',
  },
  title: {
    init: true,
    key: 'title',
    notion: 'Title',
    type: 'title',
  },
  type: {
    init: true,
    key: 'type',
    notion: 'Type',
    type: 'select',
  },
}

/**
 * @note
 * Limit Each Database (Route Type) to _only_
 *  have valid data for its schema
 */

const PROPERTIES_DEFAULT = [
  PROPERTIES.authors,
  // PROPERTIES.dateCreated,
  PROPERTIES.datePublished,
  PROPERTIES.isIndexed,
  PROPERTIES.isPublished,
  PROPERTIES.slug,
  PROPERTIES.seoDescription,
  PROPERTIES.seoImage,
  PROPERTIES.seoImageDescription,
  PROPERTIES.title,
]

const BLOG = [...PROPERTIES_DEFAULT]

const EPISODES = [
  ...PROPERTIES_DEFAULT,
  PROPERTIES.dateRecorded,
  PROPERTIES.duration,
  PROPERTIES.episode,
  PROPERTIES.mp3,
  PROPERTIES.season,
  PROPERTIES.relationEpisodes__People_Guest,
  PROPERTIES.relationEpisodes__People_Sound_Engineer,
  PROPERTIES.relationEpisodes__People_Thanks,
  PROPERTIES.relationEpisodes__Podcast,
  PROPERTIES.relationEpisodes__Venues,
  PROPERTIES.socialApple,
  PROPERTIES.socialSpotify,
  PROPERTIES.type,
]

const EVENTS = [
  ...PROPERTIES_DEFAULT,
  PROPERTIES.dateEvent,
  PROPERTIES.relationEvents__People_Guest_Music,
  PROPERTIES.relationEvents__People_Guest,
  PROPERTIES.relationEvents__People_Host,
  PROPERTIES.relationEvents__Shows_Lineup,
  PROPERTIES.relationEvents__Shows,
  PROPERTIES.relationEvents__Venues,
  PROPERTIES.socialFacebook,
  PROPERTIES.socialWebsite,
  PROPERTIES.ticketUrl,
  /**
   * @note(notion)
   * do not init/seed these values, they are updated _after_ init
   */
  PROPERTIES.rollupEvents__People_Cast,
  PROPERTIES.rollupEvents__People_Guest_Music,
  PROPERTIES.rollupEvents__People_Guest,
  PROPERTIES.rollupEvents__People_Host,
  PROPERTIES.rollupEvents__Shows_Lineup,
  PROPERTIES.rollupEvents__Shows,
  PROPERTIES.rollupEvents__Venues,
  /**
   * -------------------------------------
   */
]

const PAGES = [...PROPERTIES_DEFAULT]

const PEOPLE = [
  ...PROPERTIES_DEFAULT,
  PROPERTIES.email,
  PROPERTIES.nameFirst,
  PROPERTIES.nameLast,
  PROPERTIES.namePreferred,
  /**
   * @note(notion)
   * do not init/seed these values, they are updated _after_ init
   */
  PROPERTIES.relationPeople__Episodes_Guest,
  PROPERTIES.relationPeople__Episodes_Sound_Engineer,
  PROPERTIES.relationPeople__Episodes_Thanks,
  PROPERTIES.relationPeople__Events_Guest,
  PROPERTIES.relationPeople__Events_Guest_Music,
  PROPERTIES.relationPeople__Events_Host,
  PROPERTIES.relationPeople__Podcasts_Host,
  PROPERTIES.relationPeople__Podcasts_Sound_Engineer,
  PROPERTIES.relationPeople__Shows_Cast,
  PROPERTIES.relationPeople__Shows_Cast_Past,
  PROPERTIES.relationPeople__Shows_Director,
  PROPERTIES.relationPeople__Shows_Director_Musical,
  PROPERTIES.relationPeople__Shows_Director_Technical,
  PROPERTIES.relationPeople__Shows_Producer,
  PROPERTIES.relationPeople__Shows_Thanks,
  PROPERTIES.relationPeople__Shows_Writer,
  /**
   * -------------------------------------
   */
]

const PODCASTS = [
  ...PROPERTIES_DEFAULT,
  PROPERTIES.categories,
  PROPERTIES.explicit,
  PROPERTIES.podcastAuthor,
  PROPERTIES.podcastAuthorEmail,
  PROPERTIES.relationPodcasts__People_Host,
  PROPERTIES.relationPodcasts__People_Sound_Engineer,
  PROPERTIES.socialApple,
  PROPERTIES.socialSpotify,
  PROPERTIES.type,
  /**
   * @note(notion)
   * do not init/seed these values, they are updated _after_ init
   */
  PROPERTIES.relationPodcasts__Episodes,
  /**
   * -------------------------------------
   */
]

const SEO = [...PROPERTIES_DEFAULT]

const SHOWS = [
  ...PROPERTIES_DEFAULT,
  PROPERTIES.relationShows__People_Cast,
  PROPERTIES.relationShows__People_Cast_Past,
  PROPERTIES.relationShows__People_Director,
  PROPERTIES.relationShows__People_Director_Musical,
  PROPERTIES.relationShows__People_Director_Technical,
  PROPERTIES.relationShows__People_Producer,
  PROPERTIES.relationShows__People_Thanks,
  PROPERTIES.relationShows__People_Writer,
  PROPERTIES.relationShows__Tags,
  PROPERTIES.socialFacebook,
  PROPERTIES.socialInstagram,
  PROPERTIES.socialTwitter,
  PROPERTIES.socialWebsite,
  /**
   * @note(notion)
   * do not init/seed these values, they are updated _after_ init
   */
  PROPERTIES.relationShows__Events,
  PROPERTIES.relationShows__Events_Lineup,
  PROPERTIES.rollupShows__People_Cast,
  PROPERTIES.rollupShows__People_Cast_Slug,
  PROPERTIES.rollupShows__People_Cast_Past,
  PROPERTIES.rollupShows__People_Crew,
  PROPERTIES.rollupShows__People_Director,
  PROPERTIES.rollupShows__People_Director_Musical,
  PROPERTIES.rollupShows__People_Director_Technical,
  PROPERTIES.rollupShows__People_Music,
  PROPERTIES.rollupShows__People_Producer,
  PROPERTIES.rollupShows__People_Thanks,
  PROPERTIES.rollupShows__People_Writer,
  PROPERTIES.rollupShows__Tags,
  /**
   * -------------------------------------
   */
]

const VENUES = [
  ...PROPERTIES_DEFAULT,
  PROPERTIES.addressCity,
  PROPERTIES.addressLatitude,
  PROPERTIES.addressLongitude,
  PROPERTIES.addressNeighborhood,
  PROPERTIES.addressState,
  PROPERTIES.addressStreet,
  PROPERTIES.addressZipCode,
  PROPERTIES.phoneNumber,
  PROPERTIES.socialFacebook,
  PROPERTIES.socialInstagram,
  PROPERTIES.socialTwitter,
  PROPERTIES.socialWebsite,
  /**
   * @note(notion)
   * do not init/seed these values, they are updated _after_ init
   */
  PROPERTIES.relationVenues__Episodes,
  PROPERTIES.relationVenues__Events,
  /**
   * -------------------------------------
   */
]

/**
 * @note
 * hyper-specific for the init / see (secret/create/init)
 *
 * 0. Create DB w/o Relations|Rollups
 * 1. Update DB w/ Relations
 * 2. Update DB w/ Relation Naming Preference
 * 3. Update DB w/ Rollups
 */
const INIT = {
  BLOG: _filter(BLOG, { init: true }),
  EPISODES: _filter(EPISODES, { init: true }),
  EVENTS: _filter(EVENTS, { init: true }),
  PAGES: _filter(PAGES, { init: true }),
  PEOPLE: _filter(PEOPLE, { init: true }),
  PODCASTS: _filter(PODCASTS, { init: true }),
  SEO: _filter(SEO, { init: true }),
  SHOWS: _filter(SHOWS, { init: true }),
  VENUES: _filter(VENUES, { init: true }),
}

const LOOKUP = {
  BLOG: BLOG.map((item) => getLookup(item)),
  EPISODES: EPISODES.map((item) => getLookup(item)),
  EVENTS: EVENTS.map((item) => getLookup(item)),
  PAGES: PAGES.map((item) => getLookup(item)),
  PEOPLE: PEOPLE.map((item) => getLookup(item)),
  PODCASTS: PODCASTS.map((item) => getLookup(item)),
  SEO: SEO.map((item) => getLookup(item)),
  SHOWS: SHOWS.map((item) => getLookup(item)),
  VENUES: VENUES.map((item) => getLookup(item)),
}

const PROPERTIES_LOOKUP = _map(PROPERTIES, (item) => getLookup(item))

export { INIT, LOOKUP, PROPERTIES, PROPERTIES_LOOKUP }

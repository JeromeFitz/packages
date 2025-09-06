import type { DataTypes, DataTypesObject, Property } from '../schema/index.js'

import _filter from 'lodash/filter.js'
import _map from 'lodash/map.js'

const getLookup = ({ key, notion, type }) => ({
  key,
  notion,
  type,
})

/**
 * @note
 * Valid Notion Property Types mapped to Normalizer w/ init info
 *
 * *********************
 * RELATIONS and ROLLUPS
 * *********************
 *
 * For each RELATION or ROLLUP there can be only one init
 * During the build process this happens in waves
 *
 *
 */
const PROPERTIES: Record<string, Property> = {
  addressCity: {
    init: true,
    key: 'addressCity',
    notion: 'Address.City',
    type: 'rich_text',
  },
  addressLatitude: {
    format: 'number',
    init: true,
    key: 'addressLatitude',
    notion: 'Address.Latitude',
    type: 'number',
  },
  addressLongitude: {
    format: 'number',
    init: true,
    key: 'addressLongitude',
    notion: 'Address.Longitude',
    type: 'number',
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
    format: 'number',
    init: true,
    key: 'addressZipCode',
    notion: 'Address.ZipCode',
    type: 'number',
  },
  author: {
    init: true,
    key: 'author',
    notion: 'Author',
    type: 'rich_text',
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
    format: 'number',
    init: true,
    key: 'episode',
    notion: 'Episode',
    type: 'number',
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
  relationEpisodes__People_Guest: {
    init: true,
    key: 'relationEpisodes__People_Guest',
    notion: 'Guest',
    relation: {
      database_id: 'People',
      synced_property_name: 'Episodes.Guest',
    },
    type: 'relation',
  },
  relationEpisodes__People_Sound_Engineer: {
    init: true,
    key: 'relationEpisodes__People_Sound_Engineer',
    notion: 'Sound.Engineer',
    relation: {
      database_id: 'People',
      synced_property_name: 'Episodes.Sound.Engineer',
    },
    type: 'relation',
  },
  relationEpisodes__People_Thanks: {
    init: true,
    key: 'relationEpisodes__People_Thanks',
    notion: 'Thanks',
    relation: {
      database_id: 'People',
      synced_property_name: 'Episodes.Thanks',
    },
    type: 'relation',
  },
  /**
   * @relation
   */
  relationEpisodes__Podcasts: {
    init: true,
    key: 'relationEpisodes__Podcasts',
    notion: 'Podcasts',
    relation: {
      database_id: 'Podcasts',
      synced_property_name: 'Episodes',
    },
    type: 'relation',
  },
  relationEpisodes__Venues: {
    init: true,
    key: 'relationEpisodes__Venues',
    notion: 'Venues',
    relation: {
      database_id: 'Venues',
      synced_property_name: 'Episodes',
    },
    type: 'relation',
  },
  relationEvents__People_Guest: {
    init: true,
    key: 'relationEvents__People_Guest',
    notion: 'Guest',
    relation: {
      database_id: 'People',
      synced_property_name: 'Events.Guest',
    },
    type: 'relation',
  },

  relationEvents__People_Guest_Music: {
    init: true,
    key: 'relationEvents__People_Guest_Music',
    notion: 'Guest.Music',
    relation: {
      database_id: 'People',
      synced_property_name: 'Events.Guest.Music',
    },
    type: 'relation',
  },
  relationEvents__People_Host: {
    init: true,
    key: 'relationEvents__People_Host',
    notion: 'Host',
    relation: {
      database_id: 'People',
      synced_property_name: 'Events.Host',
    },
    type: 'relation',
  },
  relationEvents__Shows: {
    init: true,
    key: 'relationEvents__Shows',
    notion: 'Shows',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Events',
    },
    type: 'relation',
  },
  relationEvents__Shows_Lineup: {
    init: true,
    key: 'relationEvents__Shows_Lineup',
    notion: 'Shows.Lineup',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Events.Lineup',
    },
    type: 'relation',
  },
  relationEvents__Venues: {
    init: true,
    key: 'relationEvents__Venues',
    notion: 'Venues',
    relation: {
      database_id: 'Venues',
      synced_property_name: 'Events',
    },
    type: 'relation',
  },
  relationPeople__Episodes_Guest: {
    init: false,
    key: 'relationPeople__Episodes_Guest',
    notion: 'Episodes.Guest',
    relation: {
      database_id: 'Episodes',
      synced_property_name: 'Guest',
    },
    type: 'relation',
  },
  relationPeople__Episodes_Sound_Engineer: {
    init: false,
    key: 'relationPeople__Episodes_Sound_Engineer',
    notion: 'Episodes.Sound.Engineer',
    relation: {
      database_id: 'Episodes',
      synced_property_name: 'Sound.Engineer',
    },
    type: 'relation',
  },
  relationPeople__Episodes_Thanks: {
    init: false,
    key: 'relationPeople__Episodes_Thanks',
    notion: 'Episodes.Thanks',
    relation: {
      database_id: 'Episodes',
      synced_property_name: 'Thanks',
    },
    type: 'relation',
  },
  relationPeople__Events_Guest: {
    init: false,
    key: 'relationEvents__People_Guest',
    notion: 'Events.Guest',
    relation: {
      database_id: 'Events',
      synced_property_name: 'Guest',
    },
    type: 'relation',
  },
  relationPeople__Events_Guest_Music: {
    init: false,
    key: 'relationPeople__Events_Guest_Music',
    notion: 'Events.Guest.Music',
    relation: {
      database_id: 'Events',
      synced_property_name: 'Guest.Music',
    },
    type: 'relation',
  },
  relationPeople__Events_Host: {
    init: false,
    key: 'relationPeople__Events_Host',
    notion: 'Events.Host',
    relation: {
      database_id: 'Events',
      synced_property_name: 'Host',
    },
    type: 'relation',
  },
  relationPeople__Podcasts_Host: {
    init: false,
    key: 'relationPeople__Podcasts_Host',
    notion: 'Podcasts.Host',
    relation: {
      database_id: 'Podcasts',
      synced_property_name: 'Host',
    },
    type: 'relation',
  },
  relationPeople__Podcasts_Sound_Engineer: {
    init: false,
    key: 'relationPeople__Podcasts_Sound_Engineer',
    notion: 'Podcasts.Sound.Engineer',
    relation: {
      database_id: 'Podcasts',
      synced_property_name: 'Sound.Engineer',
    },
    type: 'relation',
  },
  relationPeople__Shows_Cast: {
    init: false,
    key: 'relationPeople__Shows_Cast',
    notion: 'Shows.Cast',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Cast',
    },
    type: 'relation',
  },
  relationPeople__Shows_Cast_Past: {
    init: false,
    key: 'relationPeople__Shows_Cast_Past',
    notion: 'Shows.Cast.Past',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Cast.Past',
    },
    type: 'relation',
  },
  relationPeople__Shows_Crew: {
    init: true,
    key: 'relationPeople__Shows_Crew',
    notion: 'Shows.Crew',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Crew',
    },
    type: 'relation',
  },
  relationPeople__Shows_Director: {
    init: false,
    key: 'relationPeople__Shows_Director',
    notion: 'Shows.Director',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Director',
    },
    type: 'relation',
  },
  relationPeople__Shows_Director_Musical: {
    init: false,
    key: 'relationPeople__Shows_Director_Musical',
    notion: 'Shows.Director.Musical',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Director.Musical',
    },
    type: 'relation',
  },
  relationPeople__Shows_Director_Technical: {
    init: false,
    key: 'relationPeople__Shows_Director_Technical',
    notion: 'Shows.Director.Technical',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Director.Technical',
    },
    type: 'relation',
  },
  relationPeople__Shows_Producer: {
    init: false,
    key: 'relationPeople__Shows_Producer',
    notion: 'Shows.Producer',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Producer',
    },
    type: 'relation',
  },
  relationPeople__Shows_Thanks: {
    init: false,
    key: 'relationPeople__Shows_Thanks',
    notion: 'Shows.Thanks',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Thanks',
    },
    type: 'relation',
  },
  relationPeople__Shows_Writer: {
    init: false,
    key: 'relationPeople__Shows_Writer',
    notion: 'Shows.Writer',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Writer',
    },
    type: 'relation',
  },
  relationPodcasts__Episodes: {
    init: false,
    key: 'relationPodcasts__Episodes',
    notion: 'Episodes',
    relation: {
      database_id: 'Episodes',
      synced_property_name: 'Podcasts',
    },
    type: 'relation',
  },
  relationPodcasts__People_Host: {
    init: true,
    key: 'relationPodcasts__People_Host',
    notion: 'Host',
    relation: {
      database_id: 'People',
      synced_property_name: 'Podcasts.Host',
    },
    type: 'relation',
  },
  relationPodcasts__People_Sound_Engineer: {
    init: true,
    key: 'relationPodcasts__People_Sound_Engineer',
    notion: 'Sound.Engineer',
    relation: {
      database_id: 'Podcasts',
      synced_property_name: 'Podcasts.Sound.Engineer',
    },
    type: 'relation',
  },
  relationShows__Events: {
    init: false,
    key: 'relationShows__Events',
    notion: 'Events',
    relation: {
      database_id: 'Events',
      synced_property_name: 'Shows',
    },
    type: 'relation',
  },
  relationShows__Events_Lineup: {
    init: false,
    key: 'relationShows__Events_Lineup',
    notion: 'Events.Lineup',
    relation: {
      database_id: 'Events',
      synced_property_name: 'Shows.Lineup',
    },
    type: 'relation',
  },
  relationShows__People_Cast: {
    init: true,
    key: 'relationShows__People_Cast',
    notion: 'Cast',
    relation: {
      database_id: 'People',
      synced_property_name: 'Shows.Cast',
    },
    type: 'relation',
  },
  relationShows__People_Cast_Past: {
    init: true,
    key: 'relationShows__People_Cast_Past',
    notion: 'Cast.Past',
    relation: {
      database_id: 'People',
      synced_property_name: 'Shows.Cast.Past',
    },
    type: 'relation',
  },
  relationShows__People_Director: {
    init: true,
    key: 'relationShows__People_Director',
    notion: 'Director',
    relation: {
      database_id: 'People',
      synced_property_name: 'Shows.Director',
    },
    type: 'relation',
  },
  relationShows__People_Director_Musical: {
    init: true,
    key: 'relationShows__People_Director_Musical',
    notion: 'Director.Musical',
    relation: {
      database_id: 'People',
      synced_property_name: 'Shows.Director.Musical',
    },
    type: 'relation',
  },
  relationShows__People_Director_Technical: {
    init: true,
    key: 'relationShows__People_Director_Technical',
    notion: 'Director.Technical',
    relation: {
      database_id: 'People',
      synced_property_name: 'Shows.Director.Technical',
    },
    type: 'relation',
  },
  relationShows__People_Producer: {
    init: true,
    key: 'relationShows__People_Producer',
    notion: 'Producer',
    relation: {
      database_id: 'People',
      synced_property_name: 'Shows.Producer',
    },
    type: 'relation',
  },
  relationShows__People_Thanks: {
    init: true,
    key: 'relationShows__People_Thanks',
    notion: 'Thanks',
    relation: {
      database_id: 'People',
      synced_property_name: 'Shows.Thanks',
    },
    type: 'relation',
  },
  relationShows__People_Writer: {
    init: true,
    key: 'relationShows__People_Writer',
    notion: 'Writer',
    relation: {
      database_id: 'People',
      synced_property_name: 'Shows.Writer',
    },
    type: 'relation',
  },
  relationShows__Tags: {
    init: true,
    key: 'relationShows__Tags',
    notion: 'Tags',
    relation: {
      database_id: 'Tags',
      synced_property_name: 'Shows',
    },
    type: 'relation',
  },
  relationShows_People_Crew: {
    init: true,
    key: 'relationShows_People_Crew',
    notion: 'Crew',
    relation: {
      database_id: 'People',
      synced_property_name: 'Shows.Crew',
    },
    type: 'relation',
  },
  relationTags__Shows: {
    init: false,
    key: 'relationTags__Shows',
    notion: 'Shows',
    relation: {
      database_id: 'Shows',
      synced_property_name: 'Tags',
    },
    type: 'relation',
  },
  relationVenues__Episodes: {
    init: false,
    key: 'relationVenues__Episodes',
    notion: 'Episodes',
    relation: {
      database_id: 'Episodes',
      synced_property_name: 'Venues',
    },
    type: 'relation',
  },
  relationVenues__Events: {
    init: false,
    key: 'relationVenues__Events',
    notion: 'Events',
    relation: {
      database_id: 'Events',
      synced_property_name: 'Venues',
    },
    type: 'relation',
  },
  rollupEpisodes__Podcasts: {
    init: false,
    key: 'rollupEpisodes__Podcasts',
    notion: 'Podcasts.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Podcasts',
      rollup_property_id: 'Title',
    },
    type: 'rollup',
  },
  rollupEpisodes__PodcastsSlugs: {
    init: false,
    key: 'rollupEpisodes__PodcastsSlugs',
    notion: 'Podcasts.Slug.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Podcasts',
      rollup_property_id: 'Slug',
    },
    type: 'rollup',
  },
  //
  rollupEvents__People_Cast: {
    init: false,
    key: 'rollupEvents__People_Cast',
    notion: 'Cast.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Shows',
      rollup_property_id: 'Cast',
    },
    type: 'rollup',
  },
  rollupEvents__People_Guest: {
    init: false,
    key: 'rollupEvents__People_Guest',
    notion: 'Guest.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Guest',
      rollup_property_id: 'Title',
    },
    type: 'rollup',
  },
  rollupEvents__People_Guest_Music: {
    init: false,
    key: 'rollupEvents__People_Guest_Music',
    notion: 'Guest.Music.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Guest.Music',
      rollup_property_id: 'Title',
    },
    type: 'rollup',
  },
  rollupEvents__People_Host: {
    init: false,
    key: 'rollupEvents__People_Host',
    notion: 'Host.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Host',
      rollup_property_id: 'Title',
    },
    type: 'rollup',
  },
  rollupEvents__Shows: {
    init: false,
    key: 'rollupEvents__Shows',
    notion: 'Shows.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Shows',
      rollup_property_id: 'Title',
    },
    type: 'rollup',
  },
  rollupEvents__Shows_Lineup: {
    init: false,
    key: 'rollupEvents__Shows_Lineup',
    notion: 'Shows.Lineup.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Shows.Lineup',
      rollup_property_id: 'Title',
    },
    type: 'rollup',
  },
  rollupEvents__Venues: {
    init: false,
    key: 'rollupEvents__Venues',
    notion: 'Venues.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Venues',
      rollup_property_id: 'Title',
    },
    type: 'rollup',
  },
  rollupPodcasts__Episodes: {
    init: false,
    key: 'rollupPodcasts__Episodes',
    notion: 'Episodes.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Episodes',
      rollup_property_id: 'Title',
    },
    type: 'rollup',
  },
  rollupPodcasts__EpisodesSlugs: {
    init: false,
    key: 'rollupPodcasts__EpisodesSlugs',
    notion: 'Episodes.Slug.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Episodes',
      rollup_property_id: 'Slug',
    },
    type: 'rollup',
  },
  /**
   * @rollup
   */
  rollupShows__People_Cast: {
    init: false,
    key: 'rollupShows__People_Cast',
    notion: 'Cast.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Cast',
      rollup_property_id: 'Title',
    },
    type: 'rollup',
  },
  rollupShows__People_Cast_Past: {
    init: false,
    key: 'rollupShows__People_Cast_Past',
    notion: 'Cast.Past.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Cast.Past',
      rollup_property_id: 'Title',
    },
    type: 'rollup',
  },
  rollupShows__People_Cast_Slug: {
    init: false,
    key: 'rollupShows__People_Cast_Slug',
    notion: 'Cast.Rollup.Slug',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Cast',
      rollup_property_name: 'Slug',
    },
    type: 'rollup',
  },
  rollupShows__People_Crew: {
    init: false,
    key: 'rollupShows__People_Crew',
    notion: 'Crew.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Crew',
      rollup_property_name: 'Title',
    },
    type: 'rollup',
  },
  rollupShows__People_Director: {
    init: false,
    key: 'rollupShows__People_Director',
    notion: 'Director.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Director',
      rollup_property_name: 'Title',
    },
    type: 'rollup',
  },
  rollupShows__People_Director_Musical: {
    init: false,
    key: 'rollupShows__People_Director_Musical',
    notion: 'Director.Musical.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Director.Musical',
      rollup_property_name: 'Title',
    },
    type: 'rollup',
  },
  rollupShows__People_Director_Technical: {
    init: false,
    key: 'rollupShows__People_Director_Technical',
    notion: 'Director.Technical.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Director.Technical',
      rollup_property_name: 'Title',
    },
    type: 'rollup',
  },
  rollupShows__People_Music: {
    init: false,
    key: 'rollupShows__People_Music',
    notion: 'Music.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Music',
      rollup_property_name: 'Title',
    },
    type: 'rollup',
  },
  rollupShows__People_Producer: {
    init: false,
    key: 'rollupShows__People_Producer',
    notion: 'Producer.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Producer',
      rollup_property_name: 'Title',
    },
    type: 'rollup',
  },
  rollupShows__People_Thanks: {
    init: false,
    key: 'rollupShows__People_Thanks',
    notion: 'Thanks.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Thanks',
      rollup_property_name: 'Title',
    },
    type: 'rollup',
  },
  rollupShows__People_Writer: {
    init: false,
    key: 'rollupShows__People_Writer',
    notion: 'Writer.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Writer',
      rollup_property_name: 'Title',
    },
    type: 'rollup',
  },
  rollupShows__Tags: {
    init: false,
    key: 'rollupShows__Tags',
    notion: 'Tags.Rollup',
    rollup: {
      function: 'show_original',
      relation_property_name: 'Tags',
      rollup_property_id: 'Title',
    },
    type: 'rollup',
  },
  season: {
    format: 'number',
    init: true,
    key: 'season',
    notion: 'Season',
    type: 'number',
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
  seoKeywords: {
    init: true,
    key: 'seoKeywords',
    notion: 'SEO.Keywords',
    type: 'rich_text',
  },
  slug: {
    init: true,
    key: 'slug',
    notion: 'Slug',
    type: 'rich_text',
  },
  socialApple: {
    init: true,
    key: 'socialApple',
    notion: 'Social.Apple',
    type: 'url',
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
  socialSpotify: {
    init: true,
    key: 'socialSpotify',
    notion: 'Social.Spotify',
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
  status: {
    init: true,
    key: 'status',
    notion: 'Status',
    type: 'select',
  },
  subtitle: {
    init: true,
    key: 'subtitle',
    notion: 'Subtitle',
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
  PROPERTIES.seoKeywords,
  PROPERTIES.title,
]

const BLOG = [...PROPERTIES_DEFAULT]

const BOOKS = [
  ...PROPERTIES_DEFAULT,
  PROPERTIES.author,
  PROPERTIES.status,
  PROPERTIES.subtitle,
]

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
  PROPERTIES.relationEpisodes__Podcasts,
  PROPERTIES.relationEpisodes__Venues,
  PROPERTIES.socialApple,
  PROPERTIES.socialSpotify,
  PROPERTIES.type,
  /**
   * @note(notion)
   * do not init/seed these values, they are updated _after_ init
   */
  // PROPERTIES.rollupEpisodes__People_Guest,
  // PROPERTIES.rollupEpisodes__People_Sound_Engineer,
  // PROPERTIES.rollupEpisodes__People_Thanks,
  PROPERTIES.rollupEpisodes__Podcasts,
  PROPERTIES.rollupEpisodes__PodcastsSlugs,
  // PROPERTIES.rollupEpisodes__Venues,
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
  PROPERTIES.rollupPodcasts__Episodes,
  PROPERTIES.rollupPodcasts__EpisodesSlugs,
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
  BOOKS: _filter(BOOKS, { init: true }),
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
  BOOKS: BOOKS.map((item) => getLookup(item)),
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

const dateTimestamp = new Date().toISOString()
// const dateTimestampBlog = new Date('2020-01-01').toISOString()

/**
 * @note(notion) right now we are only using `QUERIES.slug`
 */
const QUERIES = {
  // @todo(notion) Published or Event?
  dateBefore: {
    date: {
      before: dateTimestamp,
    },
    property: PROPERTIES.datePublished.notion,
  },
  // @todo(notion) Published or Event?
  dateOnOrAfter: {
    date: {
      on_or_after: dateTimestamp,
    },
    property: PROPERTIES.datePublished.notion,
  },
  published: {
    checkbox: {
      equals: false,
    },
    property: PROPERTIES.isPublished.notion,
  },
  slug: {
    property: PROPERTIES.slug.notion,
    rich_text: {
      equals: '',
    },
  },
}

const LISTING: DataTypes = 'LISTING'
const LISTING_BY_DATE: DataTypes = 'LISTING_BY_DATE'
const SLUG: DataTypes = 'SLUG'
const SLUG_BY_ROUTE: DataTypes = 'SLUG_BY_ROUTE'

const getDataTypes: DataTypes[] = [LISTING, LISTING_BY_DATE, SLUG, SLUG_BY_ROUTE]

const DATA_TYPES: DataTypesObject = Object.assign(
  {},
  // @ts-ignore
  ...getDataTypes.flatMap((d) => ({ [d]: d })),
)

export {
  DATA_TYPES,
  getDataTypes,
  INIT,
  LOOKUP,
  PROPERTIES,
  PROPERTIES_LOOKUP,
  QUERIES,
}

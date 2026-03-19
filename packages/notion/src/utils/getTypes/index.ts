import _unsupported from './_unsupported'
import checkbox from './checkbox'
import date from './date'
import email from './email'
import files from './files'
// import images from './images'
import multi_select from './multi_select'
import number from './number'
import people from './people'
import phone_number from './phone_number'
import relation from './relation'
import rich_text from './rich_text'
import rollup from './rollup'
import select from './select'
import title from './title'
import url from './url'

const getTypes = {
  checkbox,
  created_by: _unsupported,
  created_time: date,
  date,
  email,
  files,
  formula: _unsupported,
  image: files,
  last_edited_by: _unsupported,
  last_edited_time: date,
  multi_select,
  number,
  people,
  phone_number,
  relation,
  rich_text,
  rollup,
  select,
  title,
  url,
}

export default getTypes

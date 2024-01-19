import _unsupported from './_unsupported.js'
import checkbox from './checkbox.js'
import date from './date.js'
import email from './email.js'
import files from './files.js'
// import images from './images.js'
import multi_select from './multi_select.js'
import number from './number.js'
import people from './people.js'
import phone_number from './phone_number.js'
import relation from './relation.js'
import rich_text from './rich_text.js'
import rollup from './rollup.js'
import select from './select.js'
import title from './title.js'
import url from './url.js'

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

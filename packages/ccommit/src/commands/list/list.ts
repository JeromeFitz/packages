import commitTypes from '~ccommit/data/types.js'
import { formatCliTypes } from '~ccommit/utils/index.js'

const list = () => formatCliTypes(commitTypes)

export default list

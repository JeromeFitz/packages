import commitTypes from '~ccommit/data/types'
import { formatCliTypes } from '~ccommit/utils/index'

const list = () => formatCliTypes(commitTypes)

export default list

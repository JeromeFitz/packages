import isCI from 'is-ci'
!isCI && require('dotenv').config({ path: './.env' })

import _release from '../semantic/release.config.js'

const release = { ..._release }

export default release

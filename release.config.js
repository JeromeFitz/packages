import isCI from 'is-ci'
!isCI && require('dotenv').config({ path: './.env' })

import release from './packages/semantic/release.config.js'
export default { ...release }

/* eslint-disable id-match */
import _map from 'lodash/map.js'

import config from '../themes/gitmoji'

import { getConfig } from './getFile'
import getGitRootDir from './getGitRootDir'
import { TYPE_BRANCH, TYPE_COMMIT } from './questionConfig'
import sortObject from './sortObject'

/**
 * @todo(types)
 */
const setState = async (cliOptions: any) => {
  let root: string
  try {
    root = getGitRootDir()
  } catch (error) {
    throw new Error('Could not find Git root folder')
  }

  // const configDefault = optionsSet(cliOptions)
  const configDefault: any = config
  const configOverride: any = await getConfig(root)

  const state: any = {
    answers: {},
    config: {
      branch: { ...configDefault.branch, ...configOverride.branch },
      commit: { ...configDefault.commit, ...configOverride.commit },
      enabled: configOverride.enabled || configDefault.enabled,
      types: { ...configDefault.types, ...configOverride.types },
    },
    types: { branch: {}, commit: {} },
  }
  const { types } = state.config

  const typesBranch: any = {}
  _map(types, (type: any) => {
    if (Boolean(type.branch)) {
      typesBranch[type.branch] = type
    }
  })

  const typesCommit: any = {}
  _map(types, (type: any) => {
    if (Boolean(type.commit)) {
      typesCommit[type.commit] = type
    }
  })

  state.types.branch = await sortObject(typesBranch)
  state.types.commit = await sortObject(typesCommit)

  switch (cliOptions.mode) {
    case TYPE_BRANCH:
      state.answers = {
        branchFlag: '',
        branchName: '',
        branchPrefix: state.config.branch.prefix,
        branchTypes: '',
      }
      break
    case TYPE_COMMIT:
    default:
      state.answers = {
        branchFlag: '',
        branchName: '',
        branchPrefix: state.config.branch.prefix,
        branchTypes: '',
        commitBody: '',
        commitBodyFlag: false,
        commitBreaking: '',
        commitBreakingFlag: '',
        commitScopes: '',
        commitSubject: '',
        commitTypes: '',
      }
      break
  }

  return state
}

export default setState

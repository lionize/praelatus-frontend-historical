export { default as actions } from 'modules/teams/actions'
export { default as types } from 'modules/teams/types'
export * from 'modules/teams/selectors'
export { default as default } from 'modules/teams/reducers'

import { default as sagas } from 'modules/teams/sagas'
import sagasManager from 'sagasManager'
sagasManager.addSagaToRoot(sagas)

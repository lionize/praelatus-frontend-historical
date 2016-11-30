export { default as actions } from 'modules/projects/actions'
export { default as types } from 'modules/projects/types'
export * from 'modules/projects/selectors'
export { default as default } from 'modules/projects/reducers'

import { default as sagas } from 'modules/projects/sagas'
import sagasManager from 'sagasManager'
sagasManager.addSagaToRoot(sagas)

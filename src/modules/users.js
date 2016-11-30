export { default as actions } from 'modules/users/actions'
export { default as types } from 'modules/users/types'
export * from 'modules/users/selectors'
export { default as default } from 'modules/users/reducers'

import { default as sagas } from 'modules/users/sagas'
import sagasManager from 'sagasManager'
sagasManager.addSagaToRoot(sagas)

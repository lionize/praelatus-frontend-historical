export { default as actions } from 'modules/comments/actions'
export { default as types } from 'modules/comments/types'
export * from 'modules/comments/selectors'
export { default as default } from 'modules/comments/reducers'

import { default as sagas } from 'modules/comments/sagas'
import sagasManager from 'sagasManager'
sagasManager.addSagaToRoot(sagas)

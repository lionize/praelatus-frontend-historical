export { default as actions } from 'modules/tickets/actions'
export { default as types } from 'modules/tickets/types'
export { default as selectors } from 'modules/tickets/selectors'
export { default as default } from 'modules/tickets/reducers'

import { default as sagas } from 'modules/tickets/sagas'
import sagasManager from 'sagasManager'
sagasManager.addSagaToRoot(sagas)

import sagasManager from 'sagasManager'
import { ticketSagas } from 'modules/tickets'

sagasManager.addSagaToRoot(ticketSagas)

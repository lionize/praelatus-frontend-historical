import * as team from 'components/teams'
import * as ticket from 'components/tickets'

Object.keys(team).forEach(t => {
  module.exports[t] = team[t]
})

Object.keys(ticket).forEach(t => {
  module.exports[t] = ticket[t]
})

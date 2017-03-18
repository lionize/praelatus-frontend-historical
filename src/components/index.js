/* Subfolder Components Export */

import * as projects from 'components/projects'
import * as teams from 'components/teams'
import * as tickets from 'components/tickets'
import * as users from 'components/users'
import * as auth from 'components/auth'
import * as layout from 'components/layout'
import * as misc from 'components/misc'
import * as forms from 'components/forms'

const containers = [
  projects,
  teams,
  tickets,
  users,
  auth,
  layout,
  misc,
  forms,
]

containers.forEach(container => {
  Object.keys(container).forEach(k => {
    module.exports[k] = container[k]
  })
})

/* Single Component Export */

export { default as App } from 'components/App'

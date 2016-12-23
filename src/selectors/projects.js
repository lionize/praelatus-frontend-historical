import { userSelector } from 'selectors/users'

/** @module projects/selectors */

/**
 * Selector that fetches all projects from the project state.
 *
 * The selector collects all of the ids from projects.ids and then maps them into
 * the corresponding projects.
 *
 * @function
 * @param {Map} state - The global state.
 * @returns {List} - A List of selected projects.
 */
export const projectsSelector = (state, ids) => {
  let projectIds = state.getIn(['data', 'projects', 'ids'])

  if (ids) {
    projectIds = projectIds.filter(id => ids.includes(id))
  }

  return projectIds.map(id => projectSelector(state, id))
}

/**
 * Selector that fetches a single project from the project state.
 *
 * The selector gets all of the projects by id from projects.byId and then gets
 * the project by the passed id from that List.
 *
 * If the project has a lead id field, the selector finds
 * the specific user and replaces the field with that
 * user.
 *
 * @function
 * @param {Map} state - The global state.
 * @param {number|string} id - The id of the project being selected.
 * @returns {Map} - The selected project.
 */
export const projectSelector = (state, id) => {
  let project = state.getIn(['data', 'projects', 'byId']).get(String(id))

  if (project && project.lead != null) {
    project = project.set('lead', userSelector(state, project.lead))
  }

  return project
}

/**
 * Selector that fetches the loading state from the project state.
 *
 * @function
 * @param {Map} state - The global state.
 * @returns {boolean} - The current loading state.
 */
export const loadingSelector = state => state.getIn(['data', 'projects', 'loading'])

/**
 * Selector that fetches the error message from the project state.
 *
 * @function
 * @param {Map} state - The global state.
 * @returns {string?} - The current error message.
 */
export const errorSelector = state => state.getIn(['data', 'projects', 'error'])

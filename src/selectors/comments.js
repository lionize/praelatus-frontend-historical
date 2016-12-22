import { userSelector } from 'selectors/users'

/** @module comments/selectors */

/**
 * Selector that fetches all comments from the comment state.
 *
 * The selector collects all of the ids from comments.ids and then maps them into
 * the corresponding comments.
 *
 * @function
 * @param {Map} state - The global state.
 * @returns {List} - A List of selected comments.
 */
export const commentsSelector = (state, ids) => {
  let commentIds = state.getIn(['data', 'comments', 'ids'])

  if (ids) {
    commentIds = commentIds.filter(id => ids.includes(id))
  }

  return commentIds.map(id => commentSelector(state, id))
}

/**
 * Selector that fetches a single comment from the comment state.
 *
 * The selector gets all of the comments by id from comments.byId and then gets
 * the comment by the passed id from that List.
 *
 * @function
 * @param {Map} state - The global state.
 * @param {number|string} id - The id of the comment being selected.
 * @returns {Map} - The selected comment.
 */
export const commentSelector = (state, id) => {
  let comment = state.getIn(['data', 'comments', 'byId']).get(String(id))

  if (comment && comment.author != null) {
    comment = comment.set('author', userSelector(state, comment.author))
  }

  return comment
}

/**
 * Selector that fetches the loading state from the comment state.
 *
 * @function
 * @param {Map} state - The global state.
 * @returns {boolean} - The current loading state.
 */
export const loadingSelector = state => state.getIn(['data', 'comments', 'loading'])

/**
 * Selector that fetches the error message from the comment state.
 *
 * @function
 * @param {Map} state - The global state.
 * @returns {string?} - The current error message.
 */
export const errorSelector = state => state.getIn(['data', 'comments', 'error'])

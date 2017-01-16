import { userSelector } from 'selectors/users'

export const currentUserSelector = (state) => {
  const id = state.getIn(['auth', 'currentUser'])

  return userSelector(state, id)
}

export const loadingSelector = state => state.getIn(['data', 'auth', 'loading'])

export const errorSelector = state => state.getIn(['data', 'auth', 'error'])

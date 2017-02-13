import { expect } from 'chai'
import actions, {
  reducer,
  INITIAL_STATE,
  isLoggedIn,
  currentUser,
  fetching,
  error,
} from 'modules/authRedux'

describe('Auth - Redux', () => {
  describe('reducers', () => {
    it('request', () => {
      const startingState = INITIAL_STATE.merge({
        error: 'Error',
      })
      const state = reducer(startingState, actions.loginRequest())

      expect(state.fetching).to.be.true
      expect(state.error).to.be.null
    })

    it('success', () => {
      const user = {
        id: 0,
        username: 'user0',
      }
      const state = reducer(INITIAL_STATE, actions.loginSuccess(user))

      expect(state.fetching).to.be.false
      expect(state.error).to.be.null
      expect(state.currentUser).to.deep.eq(user)
    })

    it('failure', () => {
      const state = reducer(INITIAL_STATE, actions.loginFailure('Error'))

      expect(state.fetching).to.be.false
      expect(state.error).to.eq('Error')
    })

    it('logout', () => {
      const startingState = INITIAL_STATE.merge({
        fetching: true,
        error: 'Error',
        currentUser: 'user0',
      })
      const state = reducer(startingState, actions.logout())

      expect(state.fetching).to.be.false
      expect(state.error).to.be.null
      expect(state.currentUser).to.be.null
    })
  })

  describe('selectors', () => {
    const state = {
      fetching: true,
      error: 'Error',
      currentUser: 'user0',
    }

    it('isLoggedIn', () => {
      expect(isLoggedIn(state)).to.be.true
    })

    it('currentUser', () => {
      expect(currentUser(state)).to.eq('user0')
    })

    it('fetching', () => {
      expect(fetching(state)).to.be.true
    })

    it('error', () => {
      expect(error(state)).to.eq('Error')
    })
  })
})

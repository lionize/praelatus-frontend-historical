import { expect } from 'chai'
import actions, {
  reducer,
  INITIAL_STATE,
  user,
  users,
  fetching,
  error,
} from 'modules/user'

describe('User - ', () => {
  describe('reducers', () => {
    it('request', () => {
      const startingState = INITIAL_STATE.merge({
        error: 'Error',
      })
      const state = reducer(startingState, actions.fetchRequest())

      expect(state.fetching).to.be.true
      expect(state.error).to.be.null
    })

    it('success', () => {
      const data = {
        keys: ['user0'],
        entities: {
          user0: {
            id: 0,
            username: 'user0',
          },
        }
      }
      const state = reducer(INITIAL_STATE, actions.fetchSuccess(data))
      expect(state.fetching).to.be.false
      expect(state.error).to.be.null
      expect(state.usernames).to.include('user0')
      expect(state.byUsername['user0']).to.deep.eq(data.entities.user0)
    })

    it('failure', () => {
      const state = reducer(INITIAL_STATE, actions.updateFailure('Error'))

      expect(state.fetching).to.be.false
      expect(state.error).to.eq('Error')
    })

    it('remove', () => {
      const startingState = INITIAL_STATE.merge({
        usernames: ['user0'],
        byKey: { 'user0': { username: 'user0' } },
        fetching: true,
        error: 'Error',
      })
      const state = reducer(startingState, actions.deleteSuccess('user0'))

      expect(state.error).to.be.null
      expect(state.fetching).to.be.false
      expect(state.usernames).to.not.include('user0')
      expect(state.byUsername).to.not.have.key('user0')
    })
  })

  describe('selectors', () => {
    const state = {
      usernames: ['user0', 'user1'],
      byUsername: {
        'user0': {
          id: 0,
          username: 'user0',
        },
        'user1': {
          id: 1,
          username: 'user1'
        },
      },
      fetching: true,
      error: 'Error',
    }

    it('user', () => {
      expect(user(state, 'user0')).to.eq(state.byUsername['user0'])
    })

    it('users', () => {
      const expected = [state.byUsername['user0'], state.byUsername['user1']]
      expect(users(state, ['user0', 'user1'])).to.deep.eq(expected)
    })

    it('fetching', () => {
      expect(fetching(state)).to.be.true
    })

    it('error', () => {
      expect(error(state)).to.eq('Error')
    })
  })
})

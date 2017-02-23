import { expect } from 'chai'
import actions, {
  reducer,
  INITIAL_STATE,
  team,
  teams,
  fetching,
  error,
} from 'modules/team'

describe('Team - ', () => {
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
        result: ['team0', 'team1'],
        entities: {
          teams: {
            team0: {
              id: 0,
              name: 'team0',
            },
            team1: {
              id: 1,
              name: 'team1',
            },
          }
        }
      }
      const state = reducer(INITIAL_STATE, actions.fetchSuccess(data))

      expect(state.fetching).to.be.false
      expect(state.error).to.be.null
      expect(state.names).to.include('team0')
      expect(state.byName['team0']).to.eq(data.entities.teams.team0)
    })

    it('failure', () => {
      const state = reducer(INITIAL_STATE, actions.updateFailure('Error'))

      expect(state.fetching).to.be.false
      expect(state.error).to.eq('Error')
    })

    it('remove', () => {
      const startingState = INITIAL_STATE.merge({
        names: ['team0'],
        byName: { 'team0': { name: 'team0' } },
        fetching: true,
        error: 'Error',
      })
      const state = reducer(startingState, actions.deleteSuccess('team0'))

      expect(state.error).to.be.null
      expect(state.fetching).to.be.false
      expect(state.names).to.not.include('team0')
      expect(state.byName).to.not.have.key('team0')
    })
  })

  describe('selectors', () => {
    const state = {
      names: ['team0', 'team1'],
      byName: {
        'team0': {
          id: 0,
          name: 'team0',
        },
        'team1': {
          id: 1,
          name: 'team1'
        },
      },
      fetching: true,
      error: 'Error',
    }

    it('team', () => {
      expect(team(state, 'team0')).to.eq(state.byName['team0'])
    })

    it('teams', () => {
      const expected = [state.byName['team0'], state.byName['team1']]
      expect(teams(state, ['team0', 'team1'])).to.deep.eq(expected)
    })

    it('fetching', () => {
      expect(fetching(state)).to.be.true
    })

    it('error', () => {
      expect(error(state)).to.eq('Error')
    })
  })
})

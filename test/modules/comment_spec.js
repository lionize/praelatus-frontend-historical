import { expect } from 'chai'
import actions, {
  reducer,
  INITIAL_STATE,
  comment,
  comments,
  fetching,
  error,
} from 'modules/commentRedux'

describe('Comment - Redux', () => {
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
        result: [0],
        entities: {
          comments: {
            '0': {
              id: 0,
              body: 'A Comment!',
            },
          },
        }
      }
      const state = reducer(INITIAL_STATE, actions.fetchSuccess(data))

      expect(state.fetching).to.be.false
      expect(state.error).to.be.null
      expect(state.ids).to.include(0)
      expect(state.byId['0']).to.eq(data.entities.comments['0'])
    })

    it('failure', () => {
      const state = reducer(INITIAL_STATE, actions.updateFailure('Error'))

      expect(state.fetching).to.be.false
      expect(state.error).to.eq('Error')
    })

    it('remove', () => {
      const startingState = INITIAL_STATE.merge({
        ids: [0],
        byKey: { '0': { body: 'Comment' } },
        fetching: true,
        error: 'Error',
      })
      const state = reducer(startingState, actions.deleteSuccess(0))

      expect(state.error).to.be.null
      expect(state.fetching).to.be.false
      expect(state.ids).to.not.include(0)
      expect(state.byId).to.not.have.key('0')
    })
  })

  describe('selectors', () => {
    const state = {
      ids: [0, 1],
      byId: {
        '0': {
          id: 0,
          body: 'comment-0',
        },
        '1': {
          id: 1,
          body: 'comment-1'
        },
      },
      fetching: true,
      error: 'Error',
    }

    it('comment', () => {
      expect(comment(state, 0)).to.eq(state.byId['0'])
    })

    it('comments', () => {
      const expected = [state.byId['0'], state.byId['1']]
      expect(comments(state, [0, 1])).to.deep.eq(expected)
    })

    it('fetching', () => {
      expect(fetching(state)).to.be.true
    })

    it('error', () => {
      expect(error(state)).to.eq('Error')
    })
  })
})

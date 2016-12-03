import { expect } from 'chai'
import { List, Map } from 'immutable'
import reducer from 'reducers/comments'
import * as actions from 'actions/comments'
import { fetchDataSuccess } from 'actions/data'

describe('comments module reducers', () => {
  const state = Map({
    loading: true,
    error: 'Error!',
    ids: List(),
    byId: Map()
  })

  it('returns a default state', () => {
    const expectedResult = Map({
      loading: false,
      error: null,
      ids: List(),
      byId: Map()
    })
    const nextState = reducer(undefined, {})

    expect(nextState).to.eq(expectedResult)
  })

  describe('FETCH_COMMENTS_REQUEST', () => {
    const nextState = reducer(state, actions.fetchCommentsRequest())

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })
  })

  describe('FETCH_DATA_SUCCESS', () => {
    const fixture = [{
			id: 1,
			body: "A Comment",
    }]
    const nextState = reducer(state, fetchDataSuccess(fixture, 'comment'))

    it('adds comments to the state', () => {
      const expectedResult = state.merge(Map({
        ids: List.of(1),
        byId: (Map({1: Map(fixture[0])})),
        error: null,
        loading: false
      }))

      expect(nextState).to.eq(expectedResult)
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })

  describe('FETCH_COMMENTS_FAILURE', () => {
    const fixture = {
      message: 'Error!'
    }
    const nextState = reducer(state.set('loading', false), actions.fetchCommentsFailure(fixture))

    it('adds the error message to the state', () => {
      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })

  describe('CREATE_COMMENT_REQUEST', () => {
    const nextState = reducer(state.set('loading', false), actions.createCommentRequest())

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })
  })
  describe('CREATE_COMMENT_SUCCESS', () => {
    const fixture = {
      id: 1,
      body: "A Comment",
    }
    const nextState = reducer(state, actions.createCommentSuccess(fixture))

    it('adds the comment to the state', () => {
      const expectedResult = state.merge(Map({
        ids: List.of(1),
        byId: Map({ 1: Map(fixture) }),
        error: null,
        loading: false
      }))

      expect(nextState).to.eq(expectedResult)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })
  })

  describe('CREATE_COMMENT_FAILURE', () => {
    const fixture = {
      message: 'Error!'
    }
    const nextState = reducer(state, actions.createCommentFailure(fixture))

    it('adds the error to the state', () => {
      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })

  describe('UPDATE_COMMENT_REQUEST', () => {
    const nextState = reducer(state.set('loading', false), actions.updateCommentRequest())

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })
  })

  describe('UPDATE_COMMENT_SUCCESS', () => {
    const fixture = {
      id: 1,
      body: 'A Comment'
    }
    const newState = state.merge(Map({
      ids: List.of(1),
      byId: Map({ 1: Map({
        id: 1,
        name: "B Comment",
      }) })
    }))
    const nextState = reducer(newState, actions.updateCommentSuccess(fixture))

    it('replaces the old comment in the state', () => {
      const expectedResult = state.merge(Map({
        ids: List.of(1),
        byId: Map({ 1: Map(fixture) }),
        error: null,
        loading: false
      }))

      expect(nextState).to.eq(expectedResult)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })
  })

  describe('UPDATE_COMMENT_FAILURE', () => {
    const fixture = { message: 'Error!' }
    const nextState = reducer(state, actions.updateCommentFailure(fixture))

    it('adds the error to state', () => {
      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })

  describe('DELETE_COMMENT_REQUEST', () => {
    const nextState = reducer(state, actions.deleteCommentRequest())

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })
  })

  describe('DELETE_COMMENT_SUCCESS', () => {
    const fixture = { id: 1 }
    const newState = state.merge(Map({
      ids: List.of(1),
      byId: Map({ 1: Map({ id: 1 }) })
    }))
    const nextState = reducer(newState, actions.deleteCommentSuccess(fixture.id))

    it('removes the comment from the state', () => {
      const expectedResult = state.merge(Map({
        ids: List(),
        byId: Map(),
        error: null,
        loading: false
      }))

      expect(nextState).to.eq(expectedResult)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })
  })

  describe('DELETE_COMMENT_FAILURE', () => {
    const fixture = { message: 'Error!' }
    const nextState = reducer(state, actions.deleteCommentFailure(fixture))

    it('adds the error to state', () => {
      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })
})

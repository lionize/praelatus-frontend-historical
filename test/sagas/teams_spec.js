import { expect } from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { fromJS } from 'immutable'
import api from 'api'
import * as actions from 'actions/teams'
import * as dataActions from 'actions/data'
import * as sagas from 'sagas/teams'

describe('teams module sagas', () => {
  describe('GET: fetch teams', () => {
    it('calls the api method', () => {
      const generator = sagas.fetchTeams()

      expect(generator.next().value).to.deep.eq(call(api.fetchTeams, {}))
    })

    it('fetches teams', () => {
      const generator = sagas.fetchTeams()
      generator.next()
      const response = []
      const next = generator.next(response).value
      const expected = put(dataActions.fetchDataSuccess(response, 'team'))

      expect(next.PUT.action.type).to.eq(expected.PUT.action.type)
      expect(next.PUT.action.response).to.eq(expected.PUT.action.response)
    })

    it('returns an error if fetching fails', () => {
      const generator = sagas.fetchTeams()
      generator.next()
      const response = { message: 'Error!' }

      expect(generator.throw(response).value).to.deep.eq(put(actions.fetchTeamsFailure(response)))
    })
  })

  describe('POST: create team', () => {
    const fixture = {
      icon: "",
      name: 'The A Team',
      urlSlug: 'the-a-team'
    }

    it('calls the api method', () => {
      const generator = sagas.createTeam({ payload: fixture })

      expect(generator.next().value).to.deep.eq(call(api.createTeam, fixture))
    })

    it('creates a team', () => {
      const generator = sagas.createTeam({ payload: fixture })
      generator.next()
      const response = {
        id: 0,
        ...fixture
      }
      const next = generator.next(response).value
      const expected = put(actions.createTeamSuccess(response))

      expect(next.PUT.action.type).to.equal(expected.PUT.action.type)
      expect(next.PUT.action.response).to.equal(expected.PUT.action.response)
    })

    it('redirects to new team page', () => {
      const generator = sagas.createTeam({ payload: fixture })
      generator.next()
      const response = fromJS({
        id: 0,
        ...fixture
      })
      generator.next(response).value

      const next = generator.next().value
      const expected = put(push(`/teams/${response.id}`))

      expect(next.PUT.action.type).to.equal(expected.PUT.action.type)
      expect(next.PUT.action.response).to.equal(expected.PUT.action.response)
    })

    it('returns an error if creation fails', () => {
      const generator = sagas.createTeam({ payload: fixture })
      generator.next()
      const response = { message: 'Error!' }

      expect(generator.throw(response).value).to.deep.eq(put(actions.createTeamFailure(response)))
    })
  })

  describe('PUT: update team', () => {
    const fixture = {
      icon: "",
      name: 'The A Team',
      urlSlug: 'the-a-team'
    }

    it('calls the api method', () => {
      const generator = sagas.updateTeam({ payload: fixture })

      expect(generator.next().value).to.deep.eq(call(api.updateTeam, fixture))
    })

    it('updates the ticket', () => {
      const generator = sagas.updateTeam({ payload: fixture })
      generator.next()
      const response = fixture
      const next = generator.next(response).value
      const expected = put(actions.updateTeamSuccess(response))

      expect(next.PUT.action.type).to.equal(expected.PUT.action.type)
      expect(next.PUT.action.response).to.equal(expected.PUT.action.response)
    })

    it('generates an error if updating fails', () => {
      const generator = sagas.updateTeam({ payload: fixture })
      generator.next()
      const response = { message: 'Error!' }

      expect(generator.throw(response).value).to.deep.eq(put(actions.updateTeamFailure(response)))
    })
  })

  describe('DELETE: delete team', () => {
    const fixture = { id: 0 }

    it('calls the api method', () => {
      const generator = sagas.deleteTeam({ payload: fixture })

      expect(generator.next().value).to.deep.eq(call(api.deleteTeam, fixture))
    })

    it('deletes a team', () => {
      const generator = sagas.deleteTeam({ payload: fixture })
      generator.next()
      const response = fixture
      const next = generator.next(response).value
      const expected = put(actions.deleteTeamSuccess(response))

      expect(next.PUT.action.type).to.equal(expected.PUT.action.type)
      expect(next.PUT.action.id).to.equal(expected.PUT.action.id)
    })
  })
})

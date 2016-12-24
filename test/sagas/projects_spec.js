import { expect } from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { fromJS } from 'immutable'
import api from 'api'
import * as actions from 'actions/projects'
import * as dataActions from 'actions/data'
import * as sagas from 'sagas/projects'

describe('projects module sagas', () => {
  describe('GET: fetch projects', () => {
    it('calls the api method', () => {
      const generator = sagas.fetchProjects()

      expect(generator.next().value).to.deep.eq(call(api.fetchProjects, {}))
    })

    it('fetches projects', () => {
      const generator = sagas.fetchProjects()
      generator.next()
      const response = []
      const next = generator.next(response).value
      const expected = put(dataActions.fetchDataSuccess(response, 'project'))

      expect(next.PUT.action.type).to.eq(expected.PUT.action.type)
      expect(next.PUT.action.response).to.eq(expected.PUT.action.response)
    })

    it('returns an error if fetching fails', () => {
      const generator = sagas.fetchProjects()
      generator.next()
      const response = { message: 'Error!' }

      expect(generator.throw(response).value).to.deep.eq(put(actions.fetchProjectsFailure(response)))
    })
  })

  describe('POST: create project', () => {
    const fixture = {
      name: 'The A Project',
    }

    it('calls the api method', () => {
      const generator = sagas.createProject({ payload: fixture })

      expect(generator.next().value).to.deep.eq(call(api.createProject, fixture))
    })

    it('creates a project', () => {
      const generator = sagas.createProject({ payload: fixture })
      generator.next()
      const response = {
        id: 0,
        ...fixture
      }
      const next = generator.next(response).value
      const expected = put(actions.createProjectSuccess(response))

      expect(next.PUT.action.type).to.equal(expected.PUT.action.type)
      expect(next.PUT.action.response).to.equal(expected.PUT.action.response)
    })

    it('redirects to new project page', () => {
      const generator = sagas.createProject({ payload: fixture })
      generator.next()
      const response = fromJS({
        id: 0,
        ...fixture
      })
      generator.next(response).value

      const next = generator.next().value
      const expected = put(push(`/projects/${response.id}`))

      expect(next.PUT.action.type).to.equal(expected.PUT.action.type)
      expect(next.PUT.action.response).to.equal(expected.PUT.action.response)
    })

    it('returns an error if creation fails', () => {
      const generator = sagas.createProject({ payload: fixture })
      generator.next()
      const response = { message: 'Error!' }

      expect(generator.throw(response).value).to.deep.eq(put(actions.createProjectFailure(response)))
    })
  })

  describe('PUT: update project', () => {
    const fixture = {
      icon: "",
      name: 'The A Project',
      urlSlug: 'the-a-project'
    }

    it('calls the api method', () => {
      const generator = sagas.updateProject({ payload: fixture })

      expect(generator.next().value).to.deep.eq(call(api.updateProject, fixture))
    })

    it('updates the ticket', () => {
      const generator = sagas.updateProject({ payload: fixture })
      generator.next()
      const response = fixture
      const next = generator.next(response).value
      const expected = put(actions.updateProjectSuccess(response))

      expect(next.PUT.action.type).to.equal(expected.PUT.action.type)
      expect(next.PUT.action.response).to.equal(expected.PUT.action.response)
    })

    it('generates an error if updating fails', () => {
      const generator = sagas.updateProject({ payload: fixture })
      generator.next()
      const response = { message: 'Error!' }

      expect(generator.throw(response).value).to.deep.eq(put(actions.updateProjectFailure(response)))
    })
  })

  describe('DELETE: delete project', () => {
    const fixture = { id: 0 }

    it('calls the api method', () => {
      const generator = sagas.deleteProject({ payload: fixture })

      expect(generator.next().value).to.deep.eq(call(api.deleteProject, fixture))
    })

    it('deletes a project', () => {
      const generator = sagas.deleteProject({ payload: fixture })
      generator.next()
      const response = fixture
      const next = generator.next(response).value
      const expected = put(actions.deleteProjectSuccess(response))

      expect(next.PUT.action.type).to.equal(expected.PUT.action.type)
      expect(next.PUT.action.id).to.equal(expected.PUT.action.id)
    })
  })
})

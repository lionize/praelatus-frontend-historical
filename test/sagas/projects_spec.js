import { expect } from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import actions from 'modules/projectRedux'
import {
  fetchProject,
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
} from 'sagas/projects'

const projects = [
  {
    id: 0,
    key: 'KEY-0',
    name: 'Best Project'
  }
]

const api = {
  fetchProject() {},
  fetchProjects() {},
  createProject() {},
  updateProject() {},
  deleteProject() {},
}

describe('Project - Sagas', () => {
  describe('fetchProject', () => {
    it('success', () => {
      const generator = fetchProject(api, { key: 'KEY-0' })

      expect(generator.next().value).to.deep.eq(call(api.fetchProject, 'KEY-0'))

      const response = {
        result: ['KEY-0'],
        entities: {
          projects: {
            'KEY-0': projects[0]
          }
        }
      }

      const next = generator.next(response).value
      const expected = put(actions.fetchSuccess(response))

      expect(next).to.deep.eq(expected)
    })

    it('failure', () => {
      const generator = fetchProject(api, { key: 'KEY-0' })
      generator.next()

      const error = {
        message: 'Error!'
      }

      const next = generator.throw(error).value
      const expected = put(actions.fetchFailure(error))

      expect(next).to.deep.eq(expected)
    })
  })

  describe('fetchProjects', () => {
    it('success', () => {
      const generator = fetchProjects(api)

      expect(generator.next().value).to.deep.eq(call(api.fetchProjects))

      const response = {
        result: ['KEY-0'],
        entities: {
          projects: {
            'KEY-0': projects[0]
          }
        }
      }

      const next = generator.next(response).value
      const expected = put(actions.fetchSuccess(response))

      expect(next).to.deep.eq(expected)
    })

    it('failure', () => {
      const generator = fetchProjects(api)
      generator.next()

      const error = {
        message: 'Error!'
      }

      const next = generator.throw(error).value
      const expected = put(actions.fetchFailure(error))

      expect(next).to.deep.eq(expected)
    })
  })

  describe('createProject', () => {
    it('success', () => {
      const generator = createProject(api, { payload: projects[0] })

      expect(generator.next().value).to.deep.eq(call(api.createProject, projects[0]))

      const response = {
        result: ['KEY-0'],
        entities: {
          projects: {
            'KEY-0': projects[0]
          }
        }
      }

      let next = generator.next(response).value
      let expected = put(actions.createSuccess(response))

      expect(next).to.deep.eq(expected)

      next = generator.next().value
      expected = put(push(`/projects/${projects[0].key}`))

      expect(next).to.deep.eq(expected)
    })

    it('failure', () => {
      const generator = createProject(api, { payload: projects[0] })
      generator.next()

      const error = {
        message: 'Error!'
      }

      const next = generator.throw(error).value
      const expected = put(actions.createFailure(error))

      expect(next).to.deep.eq(expected)
    })
  })

  describe('updateProject', () => {
    it('success', () => {
      const generator = updateProject(api, { payload: projects[0] })

      expect(generator.next().value).to.deep.eq(call(api.updateProject, projects[0]))

      const response = {
        result: ['KEY-0'],
        entities: {
          projects: {
            'KEY-0': projects[0]
          }
        }
      }

      let next = generator.next(response).value
      let expected = put(actions.updateSuccess(response))

      expect(next).to.deep.eq(expected)

      next = generator.next().value
      expected = put(push(`/projects/${projects[0].key}`))

      expect(next).to.deep.eq(expected)
    })

    it('failure', () => {
      const generator = updateProject(api, { payload: projects[0] })
      generator.next()

      const error = {
        message: 'Error!'
      }

      const next = generator.throw(error).value
      const expected = put(actions.updateFailure(error))

      expect(next).to.deep.eq(expected)
    })
  })

  describe('deleteProject', () => {
    it('success', () => {
      const generator = deleteProject(api, { key: 'KEY-0' })

      expect(generator.next().value).to.deep.eq(call(api.deleteProject, 'KEY-0'))

      const response = { key: 'KEY-0' }

      let next = generator.next(response).value
      let expected = put(actions.deleteSuccess(response))

      expect(next).to.deep.eq(expected)

      next = generator.next().value
      expected = put(push('/projects'))

      expect(next).to.deep.eq(expected)
    })

    it('failure', () => {
      const generator = deleteProject(api, { key: 'TICKET-0' })
      generator.next()

      const error = {
        message: 'Error!'
      }

      const next = generator.throw(error).value
      const expected = put(actions.deleteFailure(error))

      expect(next).to.deep.eq(expected)
    })
  })
})

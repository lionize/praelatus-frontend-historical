import { expect } from 'chai'
import types from 'types/projects'
import * as actions from 'actions/projects'
import * as dataActions from 'actions/data'

describe('projects module actions', () => {
  const userFixture = {
    id: 0,
    username: 'user0',
    email: 'user0@users.com',
    fullName: 'User 0',
    gravatar: 'user0@users.com',
    profilePic: '',
    isAdmin: false,
  }

  describe('fetchProjectsRequest', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: types.FETCH_PROJECTS_REQUEST,
        payload: {},
      }

      expect(actions.fetchProjectsRequest({})).to.deep.eq(expectedResult)
    })
  })

  describe('fetchDataSuccess', () => {
    it('should return the correct type and the correct response', () => {
      const fixture = [{
        id: 1,
        createdDate: '',
        name: 'A Project',
        key: 'a-project',
        homepage: '',
        iconURL: '',
        repo: '',
        lead: userFixture,
      }]
      const expectedResult = {
        type: types.FETCH_PROJECTS_SUCCESS,
        response: {
          result: {
            projects: [1],
            users: [0],
          },
          entities: {
            projects: {
              1: {
                ...fixture[0],
                lead: 0,
              }
            },
            users: {
              0: userFixture,
            }
          }
        }
      }

      expect(dataActions.fetchDataSuccess(fixture, 'project').response.toJS()).to.deep.eq(expectedResult.response)
    })
  })

  describe('fetchProjectsFailure', () => {
    it('should return the correct type and error message', () => {
      const fixture = {
        message: 'Error!'
      }
      const expectedResult = {
        type: types.FETCH_PROJECTS_FAILURE,
        message: fixture.message
      }

      expect(actions.fetchProjectsFailure(fixture)).to.deep.eq(expectedResult)
    })
  })

  describe('createProjectRequest', () => {
    const fixture = {
      id: 1,
      createdDate: '',
      name: 'A Project',
      key: 'a-project',
      homepage: '',
      iconURL: '',
      repo: '',
    }
    const expectedResult = {
      type: types.CREATE_PROJECT_REQUEST,
      payload: fixture
    }

    it('should return the correct type', () => {
      expect(actions.createProjectRequest(fixture).type).to.eq(expectedResult.type)
    })

    it('should contain the payload', () => {
      expect(actions.createProjectRequest(fixture).payload).to.deep.eq(expectedResult.payload)
    })
  })

  describe('createProjectSuccess', () => {
    const fixture = {
      id: 1,
      createdDate: '',
      name: 'A Project',
      key: 'a-project',
      homepage: '',
      iconURL: '',
      repo: '',
      lead: userFixture,
    }
    const expectedResult = {
      type: types.CREATE_PROJECT_SUCCESS,
      response: {
        result: 1,
        entities: {
          projects: {
            1: {
              ...fixture,
              lead: 0,
            }
          },
          users: {
            0: userFixture,
          }
        }
      }
    }
    const result = actions.createProjectSuccess(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(result.response.toJS()).to.deep.eq(expectedResult.response)
    })
  })

  describe('createProjectFailure', () => {
    const fixture = {
      message: 'Error!'
    }
    const expectedResult = {
      type: types.CREATE_PROJECT_FAILURE,
      message: fixture.message
    }
    const result = actions.createProjectFailure(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(result.message).to.eq(expectedResult.message)
    })
  })

  describe('updateProjectRequest', () => {
    const fixture = {
      id: 1,
      createdDate: '',
      name: 'A Project',
      key: 'a-project',
      homepage: '',
      iconURL: '',
      repo: '',
    }
    const expectedResult = {
      type: types.UPDATE_PROJECT_REQUEST,
      payload: fixture
    }
    const result = actions.updateProjectRequest(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should contain the payload', () => {
      expect(result.payload).to.eq(expectedResult.payload)
    })
  })

  describe('updateProjectSuccess', () => {
    const fixture = {
      id: 1,
      createdDate: '',
      name: 'A Project',
      key: 'a-project',
      homepage: '',
      iconURL: '',
      repo: '',
      lead: userFixture,
    }
    const expectedResult = {
      type: types.UPDATE_PROJECT_SUCCESS,
      response: {
        result: 1,
        entities: {
          projects: {
            1: {
              ...fixture,
              lead: 0,
            }
          },
          users: {
            0: userFixture,
          }
        }
      }
    }
    const result = actions.updateProjectSuccess(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(result.response.toJS()).to.deep.eq(expectedResult.response)
    })
  })

  describe('updateProjectFailure', () => {
    const fixture = {
      message: 'Error!'
    }
    const expectedResult = {
      type: types.UPDATE_PROJECT_FAILURE,
      message: fixture.message
    }
    const result = actions.updateProjectFailure(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the error message', () => {
      expect(result.message).to.eq(expectedResult.message)
    })
  })

  describe('deleteProjectRequest', () => {
    const fixture = { id: 0 }
    const expectedResult = {
      type: types.DELETE_PROJECT_REQUEST,
      payload: fixture
    }
    const result = actions.deleteProjectRequest(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should contain the payload', () => {
      expect(result.payload).to.eq(expectedResult.payload)
    })
  })

  describe('deleteProjectSuccess', () => {
    const expectedResult = {
      type: types.DELETE_PROJECT_SUCCESS,
      id: 1,
    }
    const result = actions.deleteProjectSuccess(1)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct id', () => {
      expect(result.id).to.eq(expectedResult.id)
    })
  })

  describe('deleteProjectFailure', () => {
    const fixture = {
      message: 'Error!'
    }
    const expectedResult = {
      type: types.DELETE_PROJECT_FAILURE,
      message: fixture.message
    }
    const result = actions.deleteProjectFailure(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the error message', () => {
      expect(result.message).to.eq(expectedResult.message)
    })
  })
})

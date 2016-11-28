import { expect } from 'chai'
import { types, actions } from 'modules/teams'

describe('teams module actions', () => {
  describe('fetchTeamsRequest', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: types.FETCH_TEAMS_REQUEST,
      }

      expect(actions.fetchTeamsRequest()).to.deep.eq(expectedResult)
    })
  })

  describe('fetchTeamsSuccess', () => {
    it('should return the correct type and the correct response', () => {
      const fixture = [{
        id: 1,
        name: 'A Team',
        icon: "",
        createdAt: "",
        urlSlug: ""
      }]
      const expectedResult = {
        type: types.FETCH_TEAMS_SUCCESS,
        response: {
          result: [1],
          entities: {
            teams: {
              1: fixture[0]
            }
          }
        }
      }

      expect(actions.fetchTeamsSuccess(fixture).response.toJS()).to.deep.eq(expectedResult.response)
    })
  })

  describe('fetchTeamsFailure', () => {
    it('should return the correct type and error message', () => {
      const fixture = {
        message: 'Error!'
      }
      const expectedResult = {
        type: types.FETCH_TEAMS_FAILURE,
        message: fixture.message
      }

      expect(actions.fetchTeamsFailure(fixture)).to.deep.eq(expectedResult)
    })
  })

  describe('createTeamRequest', () => {
    const fixture = {
      id: 0,
      name: 'A Team',
      icon: "",
      createdAt: "",
      urlSlug: ""
    }
    const expectedResult = {
      type: types.CREATE_TEAM_REQUEST,
      payload: fixture
    }

    it('should return the correct type', () => {
      expect(actions.createTeamRequest(fixture).type).to.eq(expectedResult.type)
    })

    it('should contain the payload', () => {
      expect(actions.createTeamRequest(fixture).payload).to.deep.eq(expectedResult.payload)
    })
  })

  describe('createTeamSuccess', () => {
    const fixture = {
      id: 0,
      name: 'A Team',
      icon: "",
      createdAt: "",
      urlSlug: ""
    }
    const expectedResult = {
      type: types.CREATE_TEAM_SUCCESS,
      response: {
        result: 0,
        entities: {
          teams: {
            0: fixture
          }
        }
      }
    }
    const result = actions.createTeamSuccess(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(result.response.toJS()).to.deep.eq(expectedResult.response)
    })
  })

  describe('createTeamFailure', () => {
    const fixture = {
      message: 'Error!'
    }
    const expectedResult = {
      type: types.CREATE_TEAM_FAILURE,
      message: fixture.message
    }
    const result = actions.createTeamFailure(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(result.message).to.eq(expectedResult.message)
    })
  })

  describe('updateTeamRequest', () => {
    const fixture = {
      id: 0,
      name: 'A Team',
      icon: "",
      createdAt: "",
      urlSlug: ""
    }
    const expectedResult = {
      type: types.UPDATE_TEAM_REQUEST,
      payload: fixture
    }
    const result = actions.updateTeamRequest(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should contain the payload', () => {
      expect(result.payload).to.eq(expectedResult.payload)
    })
  })

  describe('updateTeamSuccess', () => {
    const fixture = {
      id: 0,
      name: 'A Team',
      icon: "",
      createdAt: "",
      urlSlug: ""
    }
    const expectedResult = {
      type: types.UPDATE_TEAM_SUCCESS,
      response: {
        result: 0,
        entities: {
          teams: {
            0: fixture
          }
        }
      }
    }
    const result = actions.updateTeamSuccess(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(result.response.toJS()).to.deep.eq(expectedResult.response)
    })
  })

  describe('updateTicketFailure', () => {
    const fixture = {
      message: 'Error!'
    }
    const expectedResult = {
      type: types.UPDATE_TEAM_FAILURE,
      message: fixture.message
    }
    const result = actions.updateTeamFailure(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the error message', () => {
      expect(result.message).to.eq(expectedResult.message)
    })
  })

  describe('deleteTeamRequest', () => {
    const fixture = { id: 0 }
    const expectedResult = {
      type: types.DELETE_TEAM_REQUEST,
      payload: fixture
    }
    const result = actions.deleteTeamRequest(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should contain the payload', () => {
      expect(result.payload).to.eq(expectedResult.payload)
    })
  })

  describe('deleteTeamSuccess', () => {
    const expectedResult = {
      type: types.DELETE_TEAM_SUCCESS,
      id: 1,
    }
    const result = actions.deleteTeamSuccess(1)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct id', () => {
      expect(result.id).to.eq(expectedResult.id)
    })
  })

  describe('deleteTeamFailure', () => {
    const fixture = {
      message: 'Error!'
    }
    const expectedResult = {
      type: types.DELETE_TEAM_FAILURE,
      message: fixture.message
    }
    const result = actions.deleteTeamFailure(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the error message', () => {
      expect(result.message).to.eq(expectedResult.message)
    })
  })
})

import { expect } from 'chai'
import types from 'types/teams'
import * as actions from 'actions/teams'
import * as dataActions from 'actions/data'

describe('teams module actions', () => {
  const membersFixture = [
    {
      id: 0,
      username: 'user0',
      email: 'user0@users.com',
      fullName: 'User 0',
      gravatar: 'user0@users.com',
      profilePic: 'user0@users.com',
      isAdmin: true,
    },
    {
      id: 1,
      username: 'user1',
      email: 'user1@users.com',
      fullName: 'User 1',
      gravatar: 'user1@users.com',
      profilePic: 'user1@users.com',
      isAdmin: false,
    }
  ]

  describe('fetchTeamsRequest', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: types.FETCH_TEAMS_REQUEST,
        payload: {},
      }

      expect(actions.fetchTeamsRequest({})).to.deep.eq(expectedResult)
    })
  })

  describe('fetchDataSuccess', () => {
    it('should return the correct type and the correct response', () => {
    const fixture = [{
      id: 0,
      name: 'A Team',
      lead: membersFixture[0],
      members: membersFixture
    }]
    const expectedResult = {
      type: types.FETCH_DATA_SUCCESS,
      response: {
        result: {
          teams: [0],
          users: [0, 1],
        },
        entities: {
          teams: {
            0: {
              ...fixture[0],
              lead: 0,
              members: [0, 1],
            }
          },
          users: {
            ...membersFixture
          },
        }
      }
    }

      expect(dataActions.fetchDataSuccess(fixture, 'team').response.toJS()).to.deep.eq(expectedResult.response)
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
      lead: membersFixture[0],
      members: membersFixture
    }
    const expectedResult = {
      type: types.CREATE_TEAM_SUCCESS,
      response: {
        result: 0,
        entities: {
          teams: {
            0: {
              ...fixture,
              lead: 0,
              members: [0, 1],
            }
          },
          users: {
            ...membersFixture
          },
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
      lead: membersFixture[0],
      members: membersFixture
    }
    const expectedResult = {
      type: types.UPDATE_TEAM_SUCCESS,
      response: {
        result: 0,
        entities: {
          teams: {
            0: {
              ...fixture,
              lead: 0,
              members: [0, 1],
            }
          },
          users: {
            ...membersFixture
          },
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

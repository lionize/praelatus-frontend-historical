import { expect } from 'chai'
import { normalize } from 'normalizr'
import {
  usersSchema,
  ticketsSchema,
  teamsSchema,
  projectsSchema,
  commentsSchema,
} from 'schema'

describe('Schema', () => {
  const user = {
    id: 0,
    username: 'user0',
    name: 'User 0',
  }

  it('usersSchema', () => {
    const data = [{
      id: 0,
      username: 'user0',
      name: 'User 0',
    }]
    const expected = {
      entities: {
        users: {
          user0: data[0],
        }
      },
      result: ['user0'],
    }
    const normalized = normalize(data, usersSchema)

    expect(normalized).to.deep.eq(expected)
  })

  it('ticketsSchema', () => {
    const data = [{
      id: 0,
      key: 'TICKET-0',
      reporter: user,
      assignee: user,
    }]
    const expected = {
      entities: {
        tickets: {
          'TICKET-0': {
            id: 0,
            key: 'TICKET-0',
            reporter: 'user0',
            assignee: 'user0'
          }
        },
        users: {
          user0: user
        }
      },
      result: ['TICKET-0'],
    }
    const normalized = normalize(data, ticketsSchema)

    expect(normalized).to.deep.eq(expected)
  })

  it('teamSchema', () => {
    const data = [{
      id: 0,
      name: 'Best Team',
      lead: user,
      members: [user],
    }]
    const expected = {
      entities: {
        teams: {
          'Best Team': {
            id: 0,
            name: 'Best Team',
            lead: 'user0',
            members: ['user0'],
          }
        },
        users: {
          'user0': user,
        },
      },
      result: ['Best Team'],
    }
    const normalized = normalize(data, teamsSchema)

    expect(normalized).to.deep.eq(expected)
  })

  it('projectSchema', () => {
    const data = [{
      id: 0,
      key: 'BEST-PROJECT-0',
      lead: user,
    }]
    const expected = {
      entities: {
        projects: {
          'BEST-PROJECT-0': {
            id: 0,
            key: 'BEST-PROJECT-0',
            lead: 'user0',
          },
        },
        users: {
          user0: user
        },
      },
      result: ['BEST-PROJECT-0'],
    }
    const normalized = normalize(data, projectsSchema)

    expect(normalized).to.deep.eq(expected)
  })

  it('commentSchema', () => {
    const data = [{
      id: 0,
      body: 'Hello world!',
      author: user,
    }]
    const expected = {
      entities: {
        comments: {
          '0': {
            id: 0,
            body: 'Hello world!',
            author: 'user0',
          },
        },
        users: {
          user0: user,
        },
      },
      result: [0],
    }
    const normalized = normalize(data, commentsSchema)

    expect(normalized).to.deep.eq(expected)
  })
})

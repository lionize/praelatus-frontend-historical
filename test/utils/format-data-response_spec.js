import { expect } from 'chai'
import { normalize, arrayOf } from 'normalizr-immutable'
import formatDataResponse from 'utils/format-data-response'
import * as schema from 'schema'
import dataTypes from 'types/data'

describe('formatDataResponse', () => {
  const author = {
    id: 1,
    username: 'mark',
    email: 'mark@test.com',
    fullName: 'Mark',
    gravatar: 'mark@test.com',
    profilePic: 'mark@test.com',
    isAdmin: false,
  }
  const comment = [{
    id: 2,
    body: 'A Comment',
    author: author,
  }]
  const normalized = normalize(comment, arrayOf(schema.comment))
  const result = formatDataResponse(normalized)

  it('should return the correct entities', () => {
    expect(result.get('entities').toJS()).to.deep.eq({
      users: {
        '1': author,
      },
      comments: {
        '2': {
          id: 2,
          body: 'A Comment',
          author: author.id,
        }
      },
    })
  })

  it('should return the correct result', () => {
    expect(result.get('result').toJS()).to.deep.eq({
      users: [1],
      comments: [2],
    })
  })
})

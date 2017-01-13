import { expect } from 'chai'
import formatAuthResponse from 'utils/format-auth-response'

describe('formatAuthResponse', () => {
  const token = 'TOKEN_STRING'
  const user = {
    id: 0,
    username: 'user0',
    fullName: 'User 0',
    email: 'user0@users.com',
  }
  const result = formatAuthResponse({token, user})

  it('should return the token as a key', () => {
    expect(result.get('token')).to.eq(token)
  })

  it('should return the normalized user as a key', () => {
    expect(result.get('user').toJS()).to.deep.eq(user)
  })
})

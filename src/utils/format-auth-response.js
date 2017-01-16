import { Map } from 'immutable'
import { User } from 'schema'

const formatAuthResponse = ({ token, user }) => {
  const data = Map({
    token,
    user: new User(user)
  })

  return data
}

export default formatAuthResponse

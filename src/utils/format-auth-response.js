import { Map } from 'immutable'

const formatAuthResponse = ({token, user}) => {
  const data = Map({
    token,
    user: Map(user)
  })

  return data
}

export default formatAuthResponse

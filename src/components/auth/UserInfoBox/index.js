import React from 'react'
import { ProfileBox, LoginLink } from 'components'

const UserInfoBox = ({ user }) => {
  if (user) {
    return <ProfileBox user={user} />
  }
  else {
    return <LoginLink />
  }
}

export default UserInfoBox

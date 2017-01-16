import React from 'react'
import { ProfileBox, LoginLink, RegisterLink } from 'components'

const UserInfoBox = ({ user }) => {
  if (user) {
    return <ProfileBox user={user} />
  }

  return (
    <div>
      <LoginLink />
      <RegisterLink />
    </div>
  )
}

export default UserInfoBox

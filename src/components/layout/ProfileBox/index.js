import React from 'react'
import { LogoutLink } from 'components'

const ProfileBox = ({ user }) => (
  <div>
    Logged in as: {user.username}
    <LogoutLink />
  </div>
)

export default ProfileBox
import React from 'react'
import { LogoutLink } from 'components'

const ProfileBox = ({ user }) => (
  <div>
    Logged in as: {user.username}
    <LogoutLink />
  </div>
)

ProfileBox.propTypes = {
  user: React.PropTypes.object.isRequired,
}

export default ProfileBox

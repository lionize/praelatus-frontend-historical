import React from 'react'
import { Card, CardBlock, CardTitle, CardText } from 'reactstrap'

const User = ({user}) => {
  if (user) {
    return (
      <div>
        <Card>
          <CardBlock>
            <CardTitle>{user.username}</CardTitle>
            <CardText>email: {user.email}</CardText>
            <CardText>fullName: {user.fullName}</CardText>
            <CardText>gravatar: {user.gravatar}</CardText>
          </CardBlock>
        </Card>
      </div>
    )
  } else {
    return (
      <div>
        <p>No user by that id found!</p>
      </div>
    )
  }
}

export default User

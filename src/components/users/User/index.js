import React from 'react'
import { Button, Card, CardBlock, CardTitle, CardText } from 'reactstrap'
import { Gravatar } from 'components/misc'
import { NotFoundCard, ErrorCard } from 'components/cards'
import './user.css'

const User = ({ user, loading, error }) => {
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (user) {
    return (
      <div>
        <Card>
          <CardBlock>
            <CardTitle><Gravatar email={user.email} /> {user.username}</CardTitle>
            <CardText>email: {user.email}</CardText>
            <CardText>fullName: {user.fullName}</CardText>
            <CardText>gravatar: {user.gravatar}</CardText>
          </CardBlock>
        </Card>
      </div>
    )
  } else {
    return error
      ? <ErrorCard error={error} />
      : <NotFoundCard type="User" />
  }
}

export default User

import React from 'react'
import { Button, Card, CardBlock, CardTitle, CardText } from 'reactstrap'
import Gravatar from 'components/Gravatar'
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
    return (
      <div>
        <Card block inverse color="danger">
          <CardTitle>User Not Found</CardTitle>
          <CardText>No user with that id was found.</CardText>
          { error ? <CardText>Error: {error}</CardText> : '' }
          <Button color="secondary">See a list of all users</Button>
        </Card>
      </div>
    )
  }
}

export default User

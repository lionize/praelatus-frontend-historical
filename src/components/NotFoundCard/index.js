import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'

const NotFoundCard = ({ type }) => (
  <div>
    <Card block inverse color="danger">
      <CardTitle>{type} Not Found</CardTitle>
      <CardText>No {type.toLowerCase()} with that id was found.</CardText>
    </Card>
  </div>
)

export default NotFoundCard

import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'

const ErrorCard = ({ error }) => (
  <div>
    <Card block inverse color="danger">
      <CardTitle>API Error</CardTitle>
      <CardText>Error: {error}</CardText>
    </Card>
  </div>
)

export default ErrorCard
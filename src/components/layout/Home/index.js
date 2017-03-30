import React from 'react'
import { Button, Card, CardTitle, CardText, Row, Col } from 'reactstrap'

const Home = () => (
  <Row>
    <Col md="6">
      <Card block>
        <CardTitle>Welcome to Praelatus</CardTitle>
        <CardText>New to Praelatus?</CardText>
        <Button color="primary">See the User&apos;s Guide</Button>
      </Card>
    </Col>
  </Row>
 )

export default Home

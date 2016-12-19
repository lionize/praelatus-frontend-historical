import React from 'react'
import { Card, CardBlock, CardTitle, CardText } from 'reactstrap'
import { NotFoundCard, ErrorCard } from 'components/cards'

const Ticket = ({ ticket, reporter, assignee, loading, error }) => {
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (ticket) {
    return (
      <div>
        <Card>
          <CardBlock>
            <CardTitle>{ticket.key}</CardTitle>
            <CardText>Summary: {ticket.summary}</CardText>
            <CardText>Description: {ticket.description}</CardText>
            <CardText>Reporter (from ticket): {ticket.reporter}</CardText>
            {reporter && <CardText>Reporter: {reporter.userName}</CardText>}
            {assignee && <CardText>Assignee: {assignee.userName}</CardText>}
          </CardBlock>
        </Card>
      </div>
    )
  } else {
    return error
      ? <ErrorCard error={error} />
      : <NotFoundCard type="Ticket" />
  }
}

export default Ticket

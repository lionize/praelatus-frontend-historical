import React from 'react'
import { Card, CardBlock, CardTitle, CardText } from 'reactstrap'
import { UserLink, NotFoundCard, ErrorCard } from 'components'

const Ticket = ({ ticket, loading, error }) => {
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
            {ticket.reporter &&
              <CardText>
                Reporter: <UserLink id={ticket.reporter.id}>{ticket.reporter.username}</UserLink>
              </CardText>
            }
            {ticket.assignee &&
              <CardText>
                Assignee: <UserLink id={ticket.assignee.id}>{ticket.assignee.username}</UserLink>
              </CardText>
            }
          </CardBlock>
        </Card>
      </div>
    )
  }

  return error
    ? <ErrorCard error={error} />
    : <NotFoundCard type="Ticket" />
}

export default Ticket

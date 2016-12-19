import React from 'react'
import { Card, CardBlock, CardTitle, CardText } from 'reactstrap'
import { Link } from 'react-router'
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
            {reporter && 
              <CardText>
                Reporter: <Link to={`/users/${reporter.id}`}>{reporter.username}</Link>
              </CardText>
            }
            {assignee && 
              <CardText>
                Assignee: <Link to={`/users/${assignee.id}`}>{assignee.username}</Link>
              </CardText>
            }
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

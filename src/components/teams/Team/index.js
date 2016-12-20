import React from 'react'
import { Card, CardBlock, CardTitle, CardText } from 'reactstrap'
import { Link } from 'react-router'
import { NotFoundCard, ErrorCard } from 'components/cards'

const Team = ({ team, lead, members, loading, error }) => {
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (team) {
    return (
      <div>
        <Card>
          <CardBlock>
            <CardTitle>{team.name}</CardTitle>
            {lead &&
              <CardText>
                Lead: <Link to={`/users/${lead.id}`}>{lead.username}</Link>
              </CardText>
            }
          </CardBlock>
        </Card>
      </div>
    )
  } else {
    return error
      ? <ErrorCard error={error} />
      : <NotFoundCard type="Team" />
  }
}

export default Team

import React from 'react'
import { Button, Card, CardBlock, CardTitle, CardText } from 'reactstrap'
import { Link } from 'react-router'
import { NotFoundCard, ErrorCard } from 'components/cards'

const Project = ({ project, lead, error }) => {
  if (project) {
    return (
      <div>
        <Card>
          <CardBlock>
            <CardTitle>{project.name}</CardTitle>
            <CardText>key: {project.key}</CardText>
            <CardText>homepage: {project.homepage}</CardText>
            {lead &&
              <CardText>Lead: <Link to={`/users/${lead.id}`}>{lead.username}</Link></CardText>
            }
          </CardBlock>
        </Card>

        <Link to={`/projects/${project.id + 1}`}>Next</Link>
      </div>
    )
  } else {
    return error
      ? <ErrorCard error={error} />
      : <NotFoundCard type="Project" />
  }
}

export default Project

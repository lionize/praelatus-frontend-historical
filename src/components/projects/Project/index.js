import React from 'react'
import { Card, CardBlock, CardTitle, CardText } from 'reactstrap'
import { UserLink } from 'components/links'
import { NotFoundCard, ErrorCard } from 'components/cards'

const Project = ({ project, error }) => {
  if (project) {
    return (
      <div>
        <Card>
          <CardBlock>
            <CardTitle>{project.name}</CardTitle>
            <CardText>key: {project.key}</CardText>
            <CardText>homepage: {project.homepage}</CardText>
            {project.lead &&
              <CardText>
                Lead: <UserLink id={project.lead.id}>{project.lead.username}</UserLink>
              </CardText>
            }
          </CardBlock>
        </Card>
      </div>
    )
  }

  return error
    ? <ErrorCard error={error} />
    : <NotFoundCard type="Project" />
}

export default Project

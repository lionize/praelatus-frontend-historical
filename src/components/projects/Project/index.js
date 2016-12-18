import React from 'react'
import { Button, Card, CardBlock, CardTitle, CardText } from 'reactstrap'
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
          </CardBlock>
        </Card>
      </div>
    )
  } else {
    return error
      ? <ErrorCard error={error} />
      : <NotFoundCard type="Project" />
  }
}

export default Project

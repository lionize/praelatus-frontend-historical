import React from 'react'
import { Button, Card, CardBlock, CardTitle, CardText } from 'reactstrap'

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
    return (
      <div>
        <Card block inverse color="danger">
          <CardTitle>Project Not Found</CardTitle>
          <CardText>No project with that id was found.</CardText>
          { error ? <CardText>Error: {error}</CardText> : '' }
          <Button color="secondary">See a list of all projects</Button>
        </Card>
      </div>
    )
  }
}

export default Project

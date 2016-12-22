import React from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router'
import { ProjectLink, UserLink } from 'components/links'

const ProjectList = ({ projects }) => ( 
  <div>
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Key</th>
          <th>Lead</th>
          <th>Created Date</th>
          <th>Homepage</th>
          <th>Repo</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, i)=>
          <tr key={i}>
            <td>
              <ProjectLink id={project.id}>{project.name}</ProjectLink>
            </td>
            <td>
              <ProjectLink id={project.id}>{project.key}</ProjectLink>
            </td>
            <td>
              {project.lead &&
                <UserLink id={project.lead.id}>{project.lead.username}</UserLink>
              }
            </td>
            <td>{project.createdDate}</td>
            <td>{project.homepage}</td>
            <td>{project.repo}</td>
          </tr>
        )}
      </tbody>
    </Table>
  </div>
)

export default ProjectList

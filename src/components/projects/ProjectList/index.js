import React from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router'

const ProjectList = ({ projects }) => ( 
  <div>
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Key</th>
          <th>Created Date</th>
          <th>Homepage</th>
          <th>Repo</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, i)=>
          <tr key={i}>
            <td>
              <Link to={`/projects/${project.id}`}>{project.name}</Link>
            </td>
            <td>
              <Link to={`/projects/${project.id}`}>{project.key}</Link>
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

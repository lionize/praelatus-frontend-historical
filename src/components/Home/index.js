import React from 'react'
import { Button, Card, CardTitle, CardText, CardHeader, CardFooter, Row, Col, Nav, NavLink } from 'reactstrap'
import './home.css'

const Home = () => ( 
  <Row>
    <Col md="6">
      <Card block>
        <CardTitle>Welcome to Praelatus</CardTitle>
        <CardText>New to Praelatus?</CardText>
        <Button color="primary" href="#">See the User's Guide</Button>
      </Card>
    </Col>

    <Col md="6">
      <Card>
        <CardHeader>Assigned to Me</CardHeader>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Type</th>
              <th>Key</th>
              <th>Summary</th>
              <th>P &#8595;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task</td>
              <td><a href="#">PRA-7</a></td>
              <td><a href="#">Install Bootstrap</a></td>
              <td className="priority-high">&#8593;</td>
            </tr>
            <tr>
              <td>Task</td>
              <td><a href="#">PRA-115</a></td>
              <td><a href="#">Install react-bootstrap</a></td>
              <td className="priority-high">&#8593;</td>
            </tr>
            <tr>
              <td>Story</td>
              <td><a href="#">PRA-136</a></td>
              <td><a href="#">Default Dashboard</a></td>
              <td className="priority-high">&#8593;</td>
            </tr>
          </tbody>
        </table>
        <CardFooter>
          1-3 of <a href="#">3</a>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>Activity Stream</CardHeader>
        <Card block>
          <CardTitle>Your Company Praelatus</CardTitle>
          <hr />

          <Card block>
            <img className="activity-profile-pic" src="https://secure.gravatar.com/avatar/876c9e4ae6c7e93eccbeebfe84ab316b?r=g&d=https://avatar-cdn.atlassian.com/default/96&s=128" />
            <p><a href="#">Mark Chandler</a> changed the Assignee to '<a href="#">Mark Chandler</a>' on <a href="#">PRA-115 - Setup react-bootstrap</a></p>
            <nav className="nav nav-inline">
              <a className="nav-link" href="#">Comment</a>
              <a className="nav-link" href="#">Vote</a>
              <a className="nav-link" href="#">Watch</a>
            </nav>
          </Card>

          <Card block>
            <img className="activity-profile-pic" src="https://secure.gravatar.com/avatar/876c9e4ae6c7e93eccbeebfe84ab316b?r=g&d=https://avatar-cdn.atlassian.com/default/96&s=128" />
            <p><a href="#">Mark Chandler</a> changed the Assignee to '<a href="#">Mark Chandler</a>' on <a href="#">PRA-115 - Setup react-bootstrap</a></p>
            <Nav inline>
              <NavLink href="#">Comment</NavLink>
              <NavLink href="#">Vote</NavLink>
              <NavLink href="#">Watch</NavLink>
            </Nav>
          </Card>

          <Card block>
            <img className="activity-profile-pic" src="https://secure.gravatar.com/avatar/876c9e4ae6c7e93eccbeebfe84ab316b?r=g&d=https://avatar-cdn.atlassian.com/default/96&s=128" />
            <p><a href="#">Mark Chandler</a> changed the Assignee to '<a href="#">Mark Chandler</a>' on <a href="#">PRA-7 - Install Bootstrap</a></p>
            <Nav inline>
              <NavLink href="#">Comment</NavLink>
              <NavLink href="#">Vote</NavLink>
              <NavLink href="#">Watch</NavLink>
            </Nav>
          </Card>

          <Card block>
            <img className="activity-profile-pic" src="https://jsnyder.atlassian.net/secure/useravatar?avatarId=10336&noRedirect=true" />
            <p><a href="#">Justin Snyder</a> updated the Rank of <a href="#">PRA-46 - Redux module for users</a></p>
            <Nav inline>
              <NavLink href="#">Comment</NavLink>
            </Nav>
          </Card>

          <Card block>
            <img className="activity-profile-pic" src="https://jsnyder.atlassian.net/secure/useravatar?avatarId=10336&noRedirect=true" />
            <p><a href="#">Justin Snyder</a> updated the Rank of <a href="#">PRA-27 - Redux module for comments</a></p>
            <Nav inline>
              <NavLink href="#">Comment</NavLink>
            </Nav>
          </Card>

          <Card block>
            <img className="activity-profile-pic" src="https://jsnyder.atlassian.net/secure/useravatar?avatarId=10336&noRedirect=true" />
            <p><a href="#">Justin Snyder</a> changed the Sprint of <a href="#">PRA-46 - Redux module for users</a></p>
            <Nav inline>
              <NavLink href="#">Comment</NavLink>
            </Nav>
          </Card>

          <Button href="#" color="secondary" className="btn-show-more">Show more...</Button>
        </Card>
      </Card>

    </Col>
  </Row>
 )

export default Home

import React from 'react'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import './app.css'

const App = props => (
  <div className="container-fluid">
    <Header />
    <div className="row">
      <div className="col-md-6">
        <div className="card card-block">
          <h3 className="card-title">Welcome to Praelatus</h3>
          <p className="card-text">New to Praelatus?</p>
          <a href="#" className="btn btn-primary">See the User's Guide</a>
        </div>
      </div>
      
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">Assigned to Me</div>
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
          <div className="card-footer">
            1-3 of <a href="#">3</a>
          </div>
        </div>
        
        <div className="card">
          <div className="card-header">Activity Stream</div>
          <div className="card-block">
            <h6 className="card-title">Your Company Praelatus</h6>
            <hr />
            
            <div className="card card-block">
              <img className="activity-profile-pic" src="https://secure.gravatar.com/avatar/876c9e4ae6c7e93eccbeebfe84ab316b?r=g&d=https://avatar-cdn.atlassian.com/default/96&s=128" />
              <p><a href="#">Mark Chandler</a> changed the Assignee to '<a href="#">Mark Chandler</a>' on <a href="#">PRA-115 - Setup react-bootstrap</a></p>
              <nav className="nav nav-inline">
                <a className="nav-link" href="#">Comment</a>
                <a className="nav-link" href="#">Vote</a>
                <a className="nav-link" href="#">Watch</a>
              </nav>
            </div>
            
            <div className="card card-block">
              <img className="activity-profile-pic" src="https://secure.gravatar.com/avatar/876c9e4ae6c7e93eccbeebfe84ab316b?r=g&d=https://avatar-cdn.atlassian.com/default/96&s=128" />
              <p><a href="#">Mark Chandler</a> changed the Assignee to '<a href="#">Mark Chandler</a>' on <a href="#">PRA-7 - Install Bootstrap</a></p>
              <nav className="nav nav-inline">
                <a className="nav-link" href="#">Comment</a>
                <a className="nav-link" href="#">Vote</a>
                <a className="nav-link" href="#">Watch</a>
              </nav>
            </div>
            
            <div className="card card-block">
              <img className="activity-profile-pic" src="https://jsnyder.atlassian.net/secure/useravatar?avatarId=10336&noRedirect=true" />
              <p><a href="#">Justin Snyder</a> updated the Rank of <a href="#">PRA-46 - Redux module for users</a></p>
              <nav className="nav nav-inline">
                <a className="nav-link" href="#">Comment</a>
              </nav>
            </div>
            
            <div className="card card-block">
              <img className="activity-profile-pic" src="https://jsnyder.atlassian.net/secure/useravatar?avatarId=10336&noRedirect=true" />
              <p><a href="#">Justin Snyder</a> updated the Rank of <a href="#">PRA-27 - Redux module for comments</a></p>
              <nav className="nav nav-inline">
                <a className="nav-link" href="#">Comment</a>
              </nav>
            </div>
            
            <div className="card card-block">
              <img className="activity-profile-pic" src="https://jsnyder.atlassian.net/secure/useravatar?avatarId=10336&noRedirect=true" />
              <p><a href="#">Justin Snyder</a> changed the Sprint of <a href="#">PRA-46 - Redux module for users</a></p>
              <nav className="nav nav-inline">
                <a className="nav-link" href="#">Comment</a>
              </nav>
            </div>
            
            <a href="#" className="btn btn-secondary btn-show-more">Show more...</a>
          </div>
          
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default App

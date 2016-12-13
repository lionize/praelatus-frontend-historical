import React, { PropTypes } from 'react'

const App = props => (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        First
      </div>
      <div className="col-md-6">
        Second
      </div>
    </div>
  </div>
)
App.propTypes = {
  sidebar: PropTypes.object,
  main: PropTypes.object,
}

export default App

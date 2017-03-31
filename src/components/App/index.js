import React, { PropTypes } from 'react'
import { Header, Footer } from 'components'

const App = ({ children }) => (
  <div className="container-fluid">
    <Header />
    { children }
    <Footer />
  </div>
)

App.propTypes = {
  children: PropTypes.any,
}

export default App

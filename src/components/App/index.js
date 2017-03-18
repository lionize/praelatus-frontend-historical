import React from 'react'
import { Header, Footer } from 'components'

const App = ({ children }) => (
  <div className="container-fluid">
    <Header />
    { children }
    <Footer />
  </div>
)

export default App

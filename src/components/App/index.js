import React from 'react'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import './app.css'

const App = ({ children }) => (
  <div className="container-fluid">
    <Header />
    { children }
    <Footer />
  </div>
)

export default App

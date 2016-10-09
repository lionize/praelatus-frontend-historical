import React from 'react'
import styles from './app.css'
import Header from 'components/layout/Header'
import 'styles/core.css'

const App = (props) => (
  <div>
    <Header />
    <main className={styles.main}>
      {/*props.sidebar*/}
      {props.main}
    </main>
  </div>
)

export default App

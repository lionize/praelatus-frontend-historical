import React from 'react'
import styles from './app.css'
import Header from 'components/layout/Header'
import 'styles/core.css'

const App = (props) => (
  <div>
    <Header />
    <main className={styles.container}>
      <div className={styles.sidebar}>
        {props.sidebar}
      </div>
      <div className={styles.main}>
        {props.main}
      </div>
    </main>
  </div>
)

export default App

import React from 'react'
import styles from './app.css'

const App = (props) => (
  <div>
    <h1 class={styles.title}>The App</h1>
    {props.children}
  </div>
)

export default App

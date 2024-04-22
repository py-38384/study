import React from 'react'
import styles from './style.module.css'
import ComponentD from './ComponentD.jsx'

const ComponentC = () => {
  return (
    <div className={styles.box}>
        <h3>Component C</h3>
        <ComponentD/>
    </div>
  )
}

export default ComponentC
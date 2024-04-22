import React from 'react'
import styles from './style.module.css'
import ComponentC from './ComponentC.jsx'

const ComponentB = () => {
  return (
    <div className={styles.box}>
        <h3>Component B</h3>
        <ComponentC/>
    </div>
  )
}

export default ComponentB
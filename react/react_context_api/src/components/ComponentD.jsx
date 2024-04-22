import React from 'react'
import styles from './style.module.css'
import { useContext } from 'react'
import { UserContext } from './ComponentA.jsx'

const ComponentD = () => {
    const user = useContext(UserContext)
  return (
    <div className={styles.box}>
        <h3>Component D</h3>
        <p>{user}</p>
    </div>
  )
}

export default ComponentD
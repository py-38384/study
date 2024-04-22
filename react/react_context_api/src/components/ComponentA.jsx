import React from 'react'
import styles from './style.module.css'
import ComponentB from './ComponentB.jsx'
import { useState, createContext } from 'react'

export const UserContext = createContext()

const ComponentA = () => {
    const [user, setUser] = useState('Piyal Hossein')
  return (
    <div className={styles.box}>
        <h3>Component A</h3>
        <p>{user}</p>
        <UserContext.Provider value={user}>
            <ComponentB/>
        </UserContext.Provider>
    </div>
    
  )
}

export default ComponentA
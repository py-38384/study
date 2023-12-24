import { useState } from 'react'
import Login from './components/login.jsx'
import Profile from './components/profile.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'

function App() {

  return (
    <>
      <UserContextProvider>
      <Login />
      <Profile />
      </UserContextProvider>
    </>
  )
}

export default App

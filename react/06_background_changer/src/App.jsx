import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorButton from './components/basic_components'
function App() {
  return (
    <>
      <div className='button-bar bg-slate-200 p-4 rounded-xl'>
        <ColorButton innerText='White' color='white' textColor='black' />
        <ColorButton innerText='Yellow' color='yellow' textColor='black' />
        <ColorButton innerText='Blue' color='Blue' textColor='white' />
        <ColorButton innerText='Aqua' color='aqua' textColor='black' />
        <ColorButton innerText='Aquamarine' color='aquamarine' textColor='black' />
        <ColorButton innerText='Azure' color='azure' textColor='black' />
        <ColorButton innerText='Bisque' color='bisque' textColor='black' />
        <ColorButton innerText='Blueviolet' color='blueviolet' textColor='white' />
        <ColorButton innerText='Gold' color='gold' textColor='black' />
        <ColorButton innerText='Ghostwhite' color='ghostwhite' textColor='black' />
        <ColorButton innerText='Greenyellow' color='greenyellow' textColor='black' />
      </div>
    </>
  )
}

export default App

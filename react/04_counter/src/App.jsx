import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, set_counter] = useState(0)
  let [add_button_innerHTML, set_add_button_innerHTML] = useState('Add value')
  let [decrese_button_innerHTML, set_decrese_button_innerHTML] = useState('Dislable')
  const AddValue = () => {
    if(counter<10){
      set_add_button_innerHTML('Add value')
      set_decrese_button_innerHTML('Decrese Value')
      counter++
      set_counter(counter)
      if(counter===10){
        set_add_button_innerHTML('Dislable')
      }
    }else{
    }
  }
  const DecreseValue = () => {
    if(counter>1){
      set_add_button_innerHTML('Add value')
      set_decrese_button_innerHTML('Decrese Value')
      counter--
      set_counter(counter)
    }else{
      set_decrese_button_innerHTML('Dislable')
    }
  }
  return (
    <>
      <h1>React Counter Website</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={AddValue}>{add_button_innerHTML}</button>
      <br />
      <br />
      <h2>Counter value2: {counter}</h2>
      <button onClick={DecreseValue}>{decrese_button_innerHTML}</button>
      <h2>Counter value3: {counter}</h2>
    </>
  )
}

export default App

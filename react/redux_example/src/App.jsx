import { useState, useRef } from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [editID, setEditID] = useState(undefined)
  const inputRef = useRef()
  const [btnText,setBtnText] = useState('Add todo')
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo input={input} setInput={setInput} editID={editID} setEditID={setEditID} inputRef={inputRef} btnText={btnText} setBtnText={setBtnText}/>
      <Todo setInput={setInput} setEditID={setEditID} inputRef={inputRef} setBtnText={setBtnText}/>
    </>
  )
}

export default App

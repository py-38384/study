import { useState } from 'react'

import './App.css'

const Wrapper = ({children}) => {
  return (
    <div style={{color: 'red'}}>
      {children}
    </div>
  )
}
const Comp = ({name='Piyal'}) => {
  return (
    <div>
      My name is {name}
    </div>
  )
}
function App() {
  const [name, setName] = useState('Piyal')
  setTimeout(()=>{
    setName('Onika')
  },5000)
  const [counter, setCounter] = useState(0)
  return (
    <>
      {/* <Wrapper>
        <Comp name='Ridoy'/>
      </Wrapper>
      <Wrapper>
        <Comp name={name}/>
      </Wrapper> */}
      <button onClick={()=>setCounter(prev=>prev+1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(prev=>prev-1)}>-</button>
    </>
  )
}

export default App

import { useState } from 'react'
import ComponentA from './components/ComponentA.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponentA/>
    </>
  )
}

export default App

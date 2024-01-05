import { useState } from 'react'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL)
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React complete project</h1>
    </>
  )
}

export default App

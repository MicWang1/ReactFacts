import { useState } from 'react'
import NavBar from './components/NavBar'
import MainComp from './components/MainComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <MainComp />
    </>
  )
}

export default App

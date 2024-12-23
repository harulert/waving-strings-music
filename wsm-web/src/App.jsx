import { useState } from 'react'
import './App.css'
import Navigator from './assets/Components/Header/Navigator/Navigator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Navigator />
      </header>
      <main></main>
      <footer></footer>
    </>
  )
}

export default App

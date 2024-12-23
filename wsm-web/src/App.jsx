import { useState } from 'react'
import './App.css'
import Navigator from './assets/Components/Header/Navigator/Navigator'
import Banner from './assets/Components/Main/Banner/Banner'
import Carousel from './assets/Components/Main/Carousel/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Navigator />
      </header>

      <main>
        <div className='container-fluid mt-5 mb-3 pt-5'>
          <Banner />
        </div>
        <div className='container-fluid mt-5 mb-3'>
          <Carousel />
        </div>
      </main>

      <footer></footer>
    </>
  )
}

export default App

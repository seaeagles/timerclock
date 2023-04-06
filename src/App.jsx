import { useState, useRef } from 'react'
import clockLogo from '/clocklogo.svg'
import './App.css'
import Timer from './components/timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
          <img src={clockLogo} className="logo" alt="Clock logo" />
      </div>
      <h1>Time a Clock</h1>
      <div className="card">
        <Timer />
      </div>
    </div>
  )
}

export default App

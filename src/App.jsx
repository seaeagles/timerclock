import { useState } from 'react'
import clockLogo from '/clocklogo.svg'
import './App.css'
import BreakLength from './components/breakLength'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
          <img src={clockLogo} className="logo" alt="Clock logo" />
      </div>
      <h1>Time a Clock</h1>
      <BreakLength />
      <div className="card">
        <button class="btn-primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App

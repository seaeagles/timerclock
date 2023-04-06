import { useState, useRef } from 'react'
import clockLogo from '/clocklogo.svg'
import './App.css'
import BreakLength from './components/breakLength'
import SessionLength from './components/sessionLength'
import Timer from './components/timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
          <img src={clockLogo} className="logo" alt="Clock logo" />
      </div>
      <h1>Time a Clock</h1>
       <SessionLength
                length={sessionLengthRef.current}
                onDecrement={handleSessionDecrement}
                onIncrement={handleSessionIncrement}
            />
            <BreakLength
                length={breakLengthRef.current}
                onDecrement={handleBreakDecrement}
                onIncrement={handleBreakIncrement}
            />
      <div className="card">
        <Timer />
      </div>
    </div>
  )
}

export default App

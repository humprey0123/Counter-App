import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };  
  const reset = () => setCount(0);

  return (
    <>
      <h1>Counter App</h1>

      <div className="card">
        <p style={{ fontSize: '24px' }}>Count: {count}</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button onClick={increase}>➕ Increase</button>
          <button onClick={decrease} disabled={count === 0}>➖ Decrease</button>
        </div>

          <div style={{ marginTop: '10px' }}>
            <button onClick={reset}>🔁 Reset</button>
          </div>

        {count >= 5 && (
          <p>You're clicking too much! </p>
        )}
        {count >= 10 && (
          <p>
            Stop!
          </p>
        )}
        {count >= 15 && (
          <p style={{ color: 'red', marginTop: '20px' }}>
            !!!
          </p>
        )}
        
      </div>
      <p className="read-the-docs">
        Discovering and Experimenting with React
      </p>
    </>
  )
}

export default App

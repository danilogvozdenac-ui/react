import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Wilkommen</h1>
      <div className="card-container">
      <div className="card">
        <h2>Susi</h2>
        <img src="https://picsum.photos/200/300" alt="Hero" />
      </div>
      <div className="card">
        <h2>Susi</h2>
        <img src="https://picsum.photos/200/300" alt="Hero" />
      </div>
      <div className="card">
        <h2>Susi</h2>
        <img src="https://picsum.photos/200/300" alt="Hero" />
      </div>
      </div>
      
    </>
  )
}

export default App

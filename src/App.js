import React, { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<div>hello</div>} />
      </Routes>
    </div>
  )
}

export default App

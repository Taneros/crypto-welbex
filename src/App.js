import React, { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>hello</div>} />
      </Routes>
    </div>
  )
}

export default App

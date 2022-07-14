import React, { Route, Routes } from 'react-router-dom'
import { Featured } from './components/Featured'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* //TODO: create main container to put all inside */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Featured />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App

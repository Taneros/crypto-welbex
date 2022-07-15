import React, { Route, Routes } from 'react-router-dom'
import { Featured } from './components/Featured'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Signup } from './components/Signup'

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
              <Signup />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App

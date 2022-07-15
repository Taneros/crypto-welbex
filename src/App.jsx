import React, { Route, Routes } from 'react-router-dom'
import { Featured } from './components/Featured'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Market } from './components/Market'
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
            </>
          }
        />
        <Route path="/market" element={<Market />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

import React, { useState } from 'react'
import './style.css'
import { FaBars, FaTimes } from 'react-icons/fa'

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev)
  }

  return (
    <nav className="header">
      <div className="container">
        <h1 style={{ position: 'absolute', top: '-500px', left: '-500px' }}>
          CryptoWelbeX
        </h1>
        <h2>
          Crypto<span className="primary">WelbeX</span>
        </h2>
        <ul className={showMenu ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">List</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Button</button>
        </div>
        <div className="humburger" onClick={handleShowMenu}>
          {showMenu ? (
            <FaTimes size={25} style={{ color: '#333' }} />
          ) : (
            <FaBars size={25} style={{ color: '#333' }} />
          )}
        </div>
      </div>
    </nav>
  )
}

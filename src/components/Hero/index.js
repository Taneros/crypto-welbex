import React from 'react'
import './style.css'

export const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* Left */}
        <div className="left">
          <p>Покупай и продавай криптовалюты 24/7</p>
          <h2>Инвестируй от 1 тыс. руб.</h2>
          <p>Покупай, продавай и держи в кошельке криптовалюты</p>
          <div className="input-container">
            <input type={'email'} placeholder="Твой email"></input>
            <button className="btn">Узнать больше</button>
          </div>
        </div>
        {/* Right */}
        <div className="right">
          <div className="img-container">
            <img
              src={require('../../assets/men-exchanging-bitcoin-with-copy-space.jpg')}
              alt="hero"
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

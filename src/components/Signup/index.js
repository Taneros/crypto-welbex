import React from 'react'
import './style.css'

export const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        {/* Left */}
        <div className="left">
          <img
            src={require('../../assets/mobile-app.png')}
            alt="mobile-app"
          ></img>
        </div>
        {/* Right */}
        <div className="right">
          <h2>Получай пассивный доход в криптовалютею</h2>
          <p>
            Зарабатывай до 12% в годовых бонусах на 30+ видах валют. Просто
            открой счет и держи в нем криптовалюту.
          </p>
          <div>
            <input className="input-container" placeholder="Твой email" />
            <button className="btn">Узнать больше</button>
          </div>
        </div>
      </div>
    </div>
  )
}

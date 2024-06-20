import React from 'react'
import style from './nav.module.css'

const Nav = () => {
  return (
    <header>
      <img src="images/logo.png" alt="" />
      <div className={style.aContainer}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Contact Me</a>
        <div className={style.switchContainer}>
          <label className={style.switch}>
            <input type="checkbox" />
            <div>
              <span></span>
            </div>
          </label>
          <h4>Light</h4>
        </div>
      </div>
    </header>
  )
}

export default Nav

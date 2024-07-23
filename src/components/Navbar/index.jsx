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
      </div>
    </header>
  )
}

export default Nav

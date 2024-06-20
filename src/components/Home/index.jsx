import React from 'react'
import style from './home.module.css'

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.infoContainer}>
        <h4>HI THERE 👋🏾 I'M</h4>
        <h1>Enmanuel Zorrilla <br /> Pimentel</h1>
        <p>Front-End Developer</p>
        <button>Resume</button>
      </div>
      <div className={style.imageContainer}>
        <img src="images/HomeImage.webp" alt="" />
      </div>
    </div>
  )
}

export default Home

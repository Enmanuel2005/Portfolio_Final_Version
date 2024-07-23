import React from 'react'
import style from './contact.module.css'
const Contact = () => {
  return (
    <div className={style.contactContainer}>
      <div className={style.messageMediaContainer}>
        <div className={style.tittle}>
          <h1>Send me a message!</h1>
          <hr />
        </div>

        <div className={style.buttonsFormContainer}>

          <div className={style.buttonsContainer}>
            <h3>Contact With Me!</h3>
            <div className={style.buttons}>
              <div className={style.mediaContainer}>
                <img src="images/ig.png" alt="" />
              </div>
              <div className={style.mediaContainer}>
                <img src="images/linked.png" alt="" />
              </div>
              <div className={style.mediaContainer}>
                <img src="images/gmail.png" alt="" />
              </div>
            </div>
          </div>

          <div className={style.formContainer}>
            <form action="">
              <input type="text" placeholder='Your name' />
              <input type="text" placeholder='Your email' />
              <textarea name="" id="" placeholder='Write me!'></textarea>
              <div className={style.formButton}>
                <button>Send Message</button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact

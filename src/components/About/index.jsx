import React from 'react'
import style from './about.module.css'

const About = () => {
    return (
        <div className={style.aboutContainer}>
            <div className={style.infoAboutMeContainer}>
                <div className={style.textInfoContainer}>
                    <h1>About Me</h1>
                    <p>I'm a Front-End Developer specializing in React, passionate about crafting intuitive web applications. Proficient in JavaScript, HTML, CSS, and experienced with Python and Odoo projects, I excel at translating ideas into compelling digital experiences. Eager to tackle new challenges and expand my technical expertise.</p>
                    <div className={style.socialMediasContainer}>
                        <button className={style.media}>
                            <h4>GitHub</h4>
                            <img src="images/github.png" alt="" />
                        </button>
                        <button className={style.media}>
                            <h4>LinkedIn</h4>
                            <img src="images/linkedin.png" alt="" />
                        </button>
                    </div>
                </div>
                <img src="images/profile.png" alt="" />
            </div>

            <div className={style.educationExperienceContainer}>
                <div className={style.principalContainer}>
                    <h1>Education</h1>
                    <div className={style.infoContainer}>
                        <div className={style.circleLineContainer}>
                            <div className={style.line}>
                                <div className={style.circle}>
                                    <div className={style.circleContainer}></div>
                                </div>
                                <hr />
                                <div className={style.circleContainer}></div>
                            </div>
                        </div>
                        <div className={style.sectionsContainer}>
                            <div className={style.sectionInfo}>

                                <div className={style.textContainer}>
                                    <h4>2022 - Currently</h4>
                                    <h2>Associate's Degree in Software Development</h2>
                                    <p>Currently, I am pursuing a Technology degree in Software Development at Instituto Tecnológico de las Américas, with an expected completion date in 2025. This program equips me with practical skills and knowledge in various aspects of software development, preparing me to contribute effectively to the dynamic tech industry upon graduation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.principalContainer}>
                    <h1>Experience</h1>
                    <div className={style.infoContainer}>
                        <div className={style.circleLineContainer}>
                            <div className={style.line}>
                                <div className={style.circle}>
                                    <div className={style.circleContainer}></div>
                                </div>
                                <hr />
                                <div className={style.circleContainer}></div>
                            </div>
                        </div>
                        <div className={style.sectionsContainer}>
                            <div className={style.sectionInfo}>
                                <div className={style.textContainer}>
                                    <h4>2024 - Currently</h4>
                                    <h2>Xser Solutions | Junior Developer</h2>
                                    <p>Currently, I am gaining work experience at a company specializing in technological solutions with Odoo and Python. I am involved in the development and implementation of software aimed at enhancing business efficiency, utilizing Odoo's versatile framework and Python's robust capabilities. This experience allows me to delve into the development of scalable and customized solutions tailored to specific client needs.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className={style.mySkillsContainer}>
                <h1>My Skills</h1>
                <div className={style.skillsContainer}>
                    <div className={style.SkillContainer}>
                        <img src="images/react.png" alt="" />
                        <h4>React</h4>
                    </div>

                    <div className={style.SkillContainer}>
                        <img src="images/js.png" alt="" />
                        <h4>JavaScript</h4>
                    </div>

                    <div className={style.SkillContainer}>
                        <img src="images/github.png" alt="" />
                        <h4>GitHub</h4>
                    </div>

                    <div className={style.SkillContainer} id='htmlAndCssSkillContainer'>
                        <div className={style.imgContainer}>
                            <img src="images/css.png" alt="" />
                            <img src="images/html.png" alt="" />
                        </div>
                        <h4>HTML & CSS</h4>
                    </div>

                    <div className={style.SkillContainer}>
                        <img src="images/py.png" alt="" />
                        <h4>Python</h4>
                    </div>

                    <div className={style.SkillContainer}>
                        <img src="images/sql.png" alt="" />
                        <h4>SQL Server</h4>
                    </div>

                    <div className={style.SkillContainer}>
                        <img src="images/odoo.png" alt="" />
                        <h4>Odoo</h4>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About

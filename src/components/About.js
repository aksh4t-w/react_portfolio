import React from 'react'
import '../css/About.css'

const About = () => {
    return (
        <div className="about" id="about">
            <div className="about__avatar">
                <img src={process.env.PUBLIC_URL + '/images/profilePic.jpg'} alt="" />
            </div>
            <div className="about__me">
                <h2>About Me</h2>
                <p>My name is Akshat, I'm a Full Stack ReactJS Developer. Currently I'm freelancing while also learning</p>
                <h2>Contact Details</h2>
                <p className="address"><span>Akshat Wagadre </span><br/>
                    <span>+91 7550172421</span><br/>
                    <span>akshat.w97@gmail.com</span></p>
            </div>
        </div>
    )
}

export default About

import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__avatar">
        <img src={process.env.PUBLIC_URL + "/images/profilePic.jpg"} alt="" />
      </div>
      <div className="about__me">
        <h2>About Me</h2>
        <p>
          My name is Akshat, a Full Stack ReactJS Developer from India. I am
          currently pursuing my Master's in Computer Science at The University
          of Illinois, Chicago. With a passion to develop scalable web apps and
          to grow my skill set, I'm looking for summer internships as a
          web/software developer.
        </p>
        <a href={process.env.PUBLIC_URL + "/resume.pdf"} target="_blank">
          <button class="resume_button">Resume</button>
        </a>
        <h2>Contact Details</h2>
        <p className="address">
          <span>Akshat Wagadre </span>
          <br />
          <span>+1 312-900-6615 (US)</span>
          <br />
          <span>akshat.w97@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default About;

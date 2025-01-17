import React from 'react'
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about_profile.png";
const About = () => {
  return (
    <div id='About' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={about_profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>As a dedicated Software Engineer specializing in full-stack web development, I thrive on designing and building scalable, efficient, and user-friendly software solutions. My expertise spans both front-end and back-end technologies, including JavaScript, React, Node.js, and cloud platforms, enabling me to deliver seamless digital experiences.</p>
                    <p>Driven by a passion for innovation and problem-solving, I constantly explore new tools and techniques to adapt to the ever-evolving tech landscape. Whether developing complex software systems or crafting intuitive web applications, I am committed to creating impactful solutions that merge functionality with exceptional user experience.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}></hr></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"850%"}}></hr></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"80%"}}></hr></div>
                    <div className="about-skill"><p>Node JS</p><hr style={{width:"75%"}}></hr></div>
                </div>
            </div>
        </div>
        <div className="about-achievments">
            <div className="about-achievment">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About 
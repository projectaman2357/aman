import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile_img.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  const resumeLink = import.meta.env.VITE_CONTACT_FORM_RESUME;
  const  resumehandler=()=>{
    const link = document.createElement('a');
    link.href ={resumeLink};
    link.download = 'My_Resume.pdf';
    link.click();
  }

  return (
    <div id='Home' className='hero'>
        <img src={profile_img} alt="Profile Image" className='profile-img'/>
        <h1><span>Hi, I’m Aman Tiwari, </span>a Software Engineer from INDIA.</h1>
        <p>I am a software engineering spcialized in full-stack web development, crafting scalable and efficient solutions using modern technologies like JavaScript, React, and Node.js. Passionate about solving complex problems, I specialize in turning ideas into seamless digital experiences. Let’s create something exceptional together!</p>
        <div className="hero-action">
            <AnchorLink className='anchor-link' offset={50} href='#Contact' ><div className="hero-connect">Connect with me</div></AnchorLink>
            <div className="hero-resume" onClick={resumehandler}>My Resume</div>
        </div>
    </div>
  )
}

export default Hero 
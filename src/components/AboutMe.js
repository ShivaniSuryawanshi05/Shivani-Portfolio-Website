import React from 'react';
import profilePic from "../assets/img/profile.jpeg"; 
import colorSharp from "../assets/img/color-sharp.png"
import colorSharp2 from "../assets/img/color-sharp2.png"

const AboutMe = () => {
  return (
    <section className="about-me" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about-me-bx wow zoomIn">
                        <h2>About Me</h2>
                        <div className="about-photo">
                            <img src={profilePic} alt="My Profile" className="profile-img" />
                        </div>
                        <p>With 3 years of experience in software development and currently pursuing a Master's in Business Analytics and Information Systems at the University of South Florida, I specialize in full-stack development, cloud technologies, and optimizing system performance. I've developed REST APIs, engineered responsive web applications, and managed cloud-based solutions.<br></br><br></br>Fun Fact : "I'm comfortable with failing, learning, and improving rather than getting it right the first time."</p>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-button"
                            download
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="BackgroundImg" />
        <img className="background-image-right" src={colorSharp2} alt="BackgroundImg" />
    </section>
  );
};

export default AboutMe;

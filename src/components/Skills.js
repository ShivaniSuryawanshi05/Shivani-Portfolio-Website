import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import meter6 from "../assets/img/meter6.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
/* import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg"; */
// import colorSharp from "../assets/img/color-sharp.png"
// import colorSharp2 from "../assets/img/color-sharp2.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I’m passionate about using technology to solve real-world problems, from building full-stack apps to optimizing cloud systems.<br></br> I’m always excited to create efficient, impactful solutions that drive innovation and make a real difference.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="MeterImg1" />
                                <h5>Programming Languages</h5>
                                <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.5' }}> Python, C, C++, C#, HTML, JavaScript, CSS, TypeScript, GraphQL, Shell Scripting</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="MeterImg2" />
                                <h5>Frameworks</h5>
                                <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.5' }}>Angular, React, Bootstrap, ASP.NET, Node.js, Next.js, Tailwind CSS, DevExpress</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="MeterImg3" />
                                <h5>Databases</h5>
                                <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.5' }}>Microsoft SQL Server, PostgreSQL, MongoDB, Oracle, DynamoDB</p>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="MeterImg4" />
                                <h5>Tools</h5>
                                <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.5' }}>GitHub, VS Code, DBeaver, JIRA, Webpack, Kafka, Selenium, Docker, AWS, Azure</p>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="MeterImg5" />
                                <h5>Core CS Concepts</h5>
                                <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.5' }}>DSA, OOP, SDLC, Problem-Solving, Web Development, DBMS</p>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="MeterImg6" />
                                <h5>Cloud Services</h5>
                                <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.5' }}>AWS (S3, EC2, IAM, Lambda), Azure, Docker</p>
                            </div>
                        </Carousel>

                    </div>
                </div>
            </div>
        </div>
       {/* <img className="background-image-left" src={colorSharp} alt="BackgroundImg" />
       <img className="background-image-right" src={colorSharp2} alt="BackgroundImg" /> */}
        
    </section>
  )
}
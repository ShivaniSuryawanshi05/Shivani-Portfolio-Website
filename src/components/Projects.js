import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "USF Survey Bull App",
      description: "A tool developed for USF students, featuring real-time updates.",
      imgUrl: projImg1,
      link: "http://myweb.usf.edu/~suraj36/SurveyBull/index.html", 
    },
    {
      title: "Weather App",
      description: "A real-time weather app showing temperature and forecasts by city.",
      imgUrl: projImg2,
      link: "https://github.com/ShivaniSuryawanshi05/Portfolio-Projects/tree/main/weather-app", 
    },
    {
      title: "Snake-Game",
      description:"A classic game where you control a snake to eat and avoid collisions.",
      imgUrl: projImg3,
      link: "https://github.com/ShivaniSuryawanshi05/Portfolio-Projects/tree/main/snake-game", 
    },
    {
      title: "Quiz App",
      description: "An app to test knowledge with multiple-choice quizzes on various topics.",
      imgUrl: projImg4,
      link: "https://github.com/ShivaniSuryawanshi05/Portfolio-Projects/tree/main/quiz-app", 
    },
    {
      title: "QR Code Generator",
      description: "A tool to create and download QR codes for URLs.",
      imgUrl: projImg5,
      link: "https://github.com/ShivaniSuryawanshi05/Portfolio-Projects/tree/main/qrcode-generator", 
    },
    {
      title: "Simple Calculator",
      description:"A basic calculator for performing arithmetic operations.",
      imgUrl: projImg6,
      link: "https://github.com/ShivaniSuryawanshi05/Portfolio-Projects/tree/main/calculator", 
    },
  ];

  const tab2Projects = [
    {
      title: "Worldwide Impact of Child Malnutrition",
      description: "Dashboard visualizing the global impact of child malnutrition.",
      imgUrl: projImg7,
      link: "https://github.com/ShivaniSuryawanshi05/Impact-of-Child-Malnutrition-WorldWide", 
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I’ve worked on projects ranging from building apps to creating dashboards each one sharpened my skills and fueled my love for problem-solving.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="g-4">
                        {projects.map((project, index) => (
                          <Col key={index} xs={12} sm={6} md={4}>
                            <ProjectCard {...project} />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="g-4">
                        {tab2Projects.map((project, index) => (
                          <Col key={index} xs={12} sm={6} md={4}>
                            <ProjectCard {...project} />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* Add content for Tab 3 if needed */}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="BackgroundImg" />
      <img className="background-image-left" src={colorSharp} alt="BackgroundImg" />
    </section>
  );
}

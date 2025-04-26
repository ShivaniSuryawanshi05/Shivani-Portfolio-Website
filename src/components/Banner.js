import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import sdImg from "../assets/img/sd-img.svg";
//import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      const toRotate = [ "Front-End Developer", "Full Stack Developer", "Software Developer" ];
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    };
  
    let ticker = setInterval(() => {
      tick();
    }, delta);
  
    return () => { clearInterval(ticker); };
  }, [loopNum, isDeleting, text, delta, period, index]);
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
               <div className={isVisible ? "animate__animated animate__fadeIn text-center mb-4" : "text-center mb-4"}>
                <span className="tagline">Welcome to my Portfolio</span> <br/><br/>
                    <h1>
                      <div>
                        {`Hi! I'm Shivani`}
                        <br />
                        <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Front-End Developer", "Full Stack Developer", "Software Developer" ]'>
                        <span className="wrap">{text}</span>
                        </span>
                      </div>
                    </h1>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={sdImg} alt="SD Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Countdown
import Countdown from "react-countdown";
import { LoginButton } from 'components/Common/LoginButton';
import { SignupButton } from "components/Common/SignupButton";

const Section = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>You are good to go!</span>;
    } else {
      return (
        <>
          <div className="counter-number ico-countdown">
            <div id="days" className="coming-box">
              {days}
              <span>Days</span>
            </div>
            <div id="hours" className="coming-box">
              {hours}
              <span>Hours</span>
            </div>
            <div id="mins" className="coming-box">
              {minutes}
              <span>Hours</span>
            </div>
            <div id="secs" className="coming-box">
              {seconds}
              <span>Seconds</span>
            </div>
            <div id="end" className="h1"></div>
          </div>
        </>
      );
    }
  };

  return (
    <React.Fragment>
      <section className="section hero-section " id="home">
        <div className="bg-overlay bg-dark"></div>

        <Container> 
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="text-white-50">
                <h1 className="text-white fw-semibold mb-3 hero-title">HySportx - Iconic Landing Page for a Sports and Fitness Platform</h1>
                <p className="font-size-14">HySportx offers a user-friendly experience, making it as straightforward as it can be. To an English speaker, it will feel as clear and intuitive as a critical thinker at Cambridge University</p>

                <div className="d-flex flex-wrap gap-2 mt-4">
                  <LoginButton/>
                  <SignupButton/>
                </div>
              </div>
            </Col>
           
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Section;

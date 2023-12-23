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
<<<<<<< HEAD
import SlideMain from "../CarouselTypes/SlideMain";
import OurTeam from "../CarouselTypes/OurTeam";
import Competition from "../CarouselTypes/competition";

=======
import Countdown from "react-countdown";
import { LoginButton } from 'components/Common/LoginButton';
import { SignupButton } from "components/Common/SignupButton";
>>>>>>> e8dffe4ad0634a3a61bb6c947478f40b24ce2dd2

const Section = () => {
 

  return (
    <React.Fragment>
<<<<<<< HEAD
      <div className="mb-5">
      <SlideMain /> 
      <OurTeam />
      <Competition />
     </div>
=======
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
>>>>>>> e8dffe4ad0634a3a61bb6c947478f40b24ce2dd2
    </React.Fragment>
  );
};

export default Section;

import React from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";


//Import Countdown
import SlideMain from "../CarouselTypes/SlideMain";
import OurTeam from "../CarouselTypes/OurTeam";
import Competition from "../CarouselTypes/competition";
import { LoginButton } from 'components/Common/LoginButton';
import { SignupButton } from "components/Common/SignupButton";


const Section = () => {
 

  return (
    <React.Fragment>

      <div className="mb-5">
      <SlideMain /> 
      <OurTeam />
      <Competition />
     </div>
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

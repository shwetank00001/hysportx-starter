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
import Vacancy from "../CarouselTypes/Vacancy";
import LeftSlideCompetition from "../CarouselTypes/LeftSlideCompetition";
import CompetitionRightSide from "../CarouselTypes/CompetitionRightSide";


const Section = () => {


  return (
    <React.Fragment>

      <div className="">
        <SlideMain />
        <OurTeam />
        <Competition />
        <Vacancy />
      </div>
      <section className="section  " id="home">
        <div className="bg-overlay bg-light"></div>

        <Container fluid>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <div className="small-title text-dark">Activity</div>
                <h4>Key Activity of the Details</h4>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center mx-5">
            <Col lg={1}></Col>
            <Col lg={4} >
              <LeftSlideCompetition />
            </Col>
            <Col lg={7} className="">
              <CompetitionRightSide />
            </Col>

          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Section;

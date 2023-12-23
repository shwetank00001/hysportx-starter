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
import SlideMain from "../CarouselTypes/SlideMain";
import OurTeam from "../CarouselTypes/OurTeam";
import Competition from "../CarouselTypes/competition";


const Section = () => {
 

  return (
    <React.Fragment>
      <div className="mb-5">
      <SlideMain /> 
      <OurTeam />
      <Competition />
     </div>
    </React.Fragment>
  );
};

export default Section;

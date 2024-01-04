import React from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
// import FeatureBox from "./feature-box";

//Import images
import LeftSlidecompetition from "./LeftSlideCompetition";
import CompetitionRightSide from "./CompetitionRightSide";

const Activity = () => {
  const features1 = [
    { id: 1, desc: "Donec pede justo vel aliquet" },
    { id: 2, desc: "Aenean et nisl sagittis" },
  ];
  const features2 = [
    { id: 1, desc: "Donec pede justo vel aliquet" },
    { id: 2, desc: "Aenean et nisl sagittis" },
  ];

  return (
    <React.Fragment>
      <section className="section" style={{backgroundColor:"rgb(255 255 255)",color:"black"}} >
        <div className="container-fluid">
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <div className="small-title text-dark">Activity</div>
                <h4>Key Activity of the Details</h4>
              </div>
            </Col>
          </Row>

          <Row className="">
            <Col lg="4"  className="">
              {/* <div className="row">
                <div className="col-lg-2 col-md-2"></div>
                <div className="col-lg-9 col-md-9"> */}

              <LeftSlidecompetition />
                {/* </div>
              </div> */}
            </Col>
            <Col lg="8"  >
              <CompetitionRightSide />
            </Col>
          </Row>

        </div>
      </section>
    </React.Fragment>
  );
};

export default Activity;

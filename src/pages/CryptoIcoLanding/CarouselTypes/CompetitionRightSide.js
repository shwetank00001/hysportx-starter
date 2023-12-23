import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    CardSubtitle,
    CardImg,
    Col,
    Collapse,
    Container,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
    UncontrolledCollapse
} from "reactstrap";

import { Link } from "react-router-dom";
import classnames from "classnames";
import img1 from "assets/images/small/img-1.jpg";
import img2 from "assets/images/small/img-2.jpg";
import img3 from "assets/images/small/img-3.jpg";
import img4 from "assets/images/small/img-4.jpg";

const CompetitionRightSide = () => {
    const [customActiveTab, setcustomActiveTab] = useState("1");

    const toggleCustom = tab => {
        if (customActiveTab !== tab) {
            setcustomActiveTab(tab);
        }
    };
    return (
        <React.Fragment>

            <Nav tabs className="nav-tabs-custom nav-justified">
                <NavItem>
                    <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                            active: customActiveTab === "1",
                        })}
                        onClick={() => {
                            toggleCustom("1");
                        }}
                    >
                        <span className="d-block d-sm-none">
                            <i className="fas fa-home"></i>
                        </span>
                        <span className="d-none d-sm-block">Inter</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                            active: customActiveTab === "2",
                        })}
                        onClick={() => {
                            toggleCustom("2");
                        }}
                    >
                        <span className="d-block d-sm-none">
                            <i className="far fa-user"></i>
                        </span>
                        <span className="d-none d-sm-block">District</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                            active: customActiveTab === "3",
                        })}
                        onClick={() => {
                            toggleCustom("3");
                        }}
                    >
                        <span className="d-block d-sm-none">
                            <i className="far fa-envelope"></i>
                        </span>
                        <span className="d-none d-sm-block">State</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                            active: customActiveTab === "4",
                        })}
                        onClick={() => {
                            toggleCustom("4");
                        }}
                    >
                        <span className="d-block d-sm-none">
                            <i className="fas fa-cog"></i>
                        </span>
                        <span className="d-none d-sm-block">National</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                            active: customActiveTab === "5",
                        })}
                        onClick={() => {
                            toggleCustom("5");
                        }}
                    >
                        <span className="d-block d-sm-none">
                            <i className="fas fa-cog"></i>
                        </span>
                        <span className="d-none d-sm-block">International</span>
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent
                activeTab={customActiveTab}
                className="p-3 text-muted"
            >
                <TabPane tabId="1">
                    
          <Row>
            <Col lg={12}>
              <Card>
                <Row className="no-gutters align-items-center">
                  <Col md={4}>
                    <CardImg className="img-fluid" src={img2} alt="Skote" />
                  </Col>
                  <Col md={8}>
                    <CardBody>
                      <CardTitle>intermediate school</CardTitle>
                      <CardText>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </CardText>
                      <CardText>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </CardText>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg={12}>
              <Card>
                <Row className="no-gutters align-items-center">
                  <Col md={4}>
                    <CardImg className="img-fluid" src={img2} alt="Skote" />
                  </Col>
                  <Col md={8}>
                    <CardBody>
                      <CardTitle>Card edit</CardTitle>
                      <CardText>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </CardText>
                      <CardText>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </CardText>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>
           
          </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <CardText className="mb-0">
                                Food truck fixie locavore, accusamus mcsweeney&apos;s
                                marfa nulla single-origin coffee squid. Exercitation
                                +1 labore velit, blog sartorial PBR leggings next
                                level wes anderson artisan four loko farm-to-table
                                craft beer twee. Qui photo booth letterpress,
                                commodo enim craft beer mlkshk aliquip jean shorts
                                ullamco ad vinyl cillum PBR. Homo nostrud organic,
                                assumenda labore aesthetic magna delectus mollit.
                                Keytar helvetica VHS salvia yr, vero magna velit
                                sapiente labore stumptown. Vegan fanny pack odio
                                cillum wes anderson 8-bit.
                            </CardText>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <Col sm="12">
                            <CardText className="mb-0">
                                Etsy mixtape wayfarers, ethical wes anderson tofu
                                before they sold out mcsweeney&apos;s organic lomo retro
                                fanny pack lo-fi farm-to-table readymade. Messenger
                                bag gentrify pitchfork tattooed craft beer, iphone
                                skateboard locavore carles etsy salvia banksy hoodie
                                helvetica. DIY synth PBR banksy irony. Leggings
                                gentrify squid 8-bit cred pitchfork. Williamsburg
                                banh mi whatever gluten-free, carles pitchfork
                                biodiesel fixie etsy retro mlkshk vice blog.
                                Scenester cred you probably haven&apos;t heard of them,
                                vinyl craft beer blog stumptown. Pitchfork
                                sustainable tofu synth chambray yr.
                            </CardText>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="4">
                    <Row>
                        <Col sm="12">
                            <CardText className="mb-0">
                                Trust fund seitan letterpress, keytar raw denim
                                keffiyeh etsy art party before they sold out master
                                cleanse gluten-free squid scenester freegan cosby
                                sweater. Fanny pack portland seitan DIY, art party
                                locavore wolf cliche high life echo park Austin.
                                Cred vinyl keffiyeh DIY salvia PBR, banh mi before
                                they sold out farm-to-table VHS viral locavore cosby
                                sweater. Lomo wolf viral, mustache readymade
                                thundercats keffiyeh craft beer marfa ethical. Wolf
                                salvia freegan, sartorial keffiyeh echo park vegan.
                            </CardText>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>

        </React.Fragment>
    )
}

export default CompetitionRightSide
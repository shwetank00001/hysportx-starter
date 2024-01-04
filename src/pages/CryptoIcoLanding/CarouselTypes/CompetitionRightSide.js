import React, { useState, useRef,useEffect } from "react";
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

// simple bar
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

import { Link } from "react-router-dom";
import classnames from "classnames";

import img1 from "assets/images/slider/img1.jpg";
import img2 from "assets/images/slider/img2.jpg";
import img3 from "assets/images/slider/img3.jpg";
import img5 from "assets/images/slider/img5.jpg";
import img6 from "assets/images/slider/img6.jpg";
import img7 from "assets/images/slider/img7.jpg";
const competitioninter = [
    {
        image: img5,
        title: "inter school",
        desc: "inter  school competition start",
        date: ""
    },
    {
        image: img6,
        title: "intermediate ",
        desc: "intermediate level competition start",
        date: ""
    },
    {
        image: img7,
        title: "High level",
        desc: "High level school competition start",
        date: ""
    },
];
const competitiondistrict = [
    {
        image: img1,
        title: "inter school",
        desc: "inter  school competition start",
        date: ""
    },
    {
        image: img2,
        title: "intermediate ",
        desc: "intermediate level competition start",
        date: ""
    },
    {
        image: img3,
        title: "High level",
        desc: "High level school competition start",
        date: ""
    },
];

const CompetitionRightSide = () => {
    const [customActiveTab, setcustomActiveTab] = useState("1");
  // scroll simple bar
     const scroollRef = useRef(null);
     useEffect(() => {
        if (scroollRef.current) {
          scroollRef.current.getScrollElement().scrollTop = scroollRef.current.getScrollElement().scrollHeight;
        }
      }, [competitiondistrict])
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

                    <Row >
                    <SimpleBar ref={scroollRef} style={{ height: "380px" }}>
                        {competitioninter.map(item => (
                            <Col lg={12} key={item.id}>
                                <Card>
                                    <Row className="no-gutters align-items-center">
                                        <Col md={4}>
                                            <CardImg className="img-fluid" src={item.image} alt="image" />
                                        </Col>
                                        <Col md={8}>
                                            <CardBody>
                                                <CardTitle>{item.title}</CardTitle>
                                                <CardText>
                                                    {item.desc}
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

                        ))}
                        </SimpleBar>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                    <SimpleBar ref={scroollRef} style={{ height: "340px" }}>
                        {competitiondistrict.map(item => (
                            <Col lg={12} key={item.id}>
                                <Card>
                                    <Row className="no-gutters align-items-center">
                                        <Col md={4}>
                                            <CardImg className="img-fluid" src={item.image} alt="image" />
                                        </Col>
                                        <Col md={8}>
                                            <CardBody>
                                                <CardTitle>{item.title}</CardTitle>
                                                <CardText>
                                                    {item.desc}
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

                        ))}
                        </SimpleBar>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                    <SimpleBar ref={scroollRef} style={{ height: "340px" }}>
                        {competitioninter.map(item => (
                            <Col lg={12} key={item.id}>
                                <Card>
                                    <Row className="no-gutters align-items-center">
                                        <Col md={4}>
                                            <CardImg className="img-fluid" src={item.image} alt="image" />
                                        </Col>
                                        <Col md={8}>
                                            <CardBody>
                                                <CardTitle>{item.title}</CardTitle>
                                                <CardText>
                                                    {item.desc}
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

                        ))}
                        </SimpleBar>
                    </Row>
                </TabPane>
                <TabPane tabId="4">
                    <Row>
                    <SimpleBar ref={scroollRef} style={{ height: "340px" }}>
                        {competitiondistrict.map(item => (
                            <Col lg={12} key={item.id}>
                                <Card>
                                    <Row className="no-gutters align-items-center">
                                        <Col md={4}>
                                            <CardImg className="img-fluid" src={item.image} alt="image" />
                                        </Col>
                                        <Col md={8}>
                                            <CardBody>
                                                <CardTitle>{item.title}</CardTitle>
                                                <CardText>
                                                    {item.desc}
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

                        ))}
                        </SimpleBar>
                    </Row>
                </TabPane>
                <TabPane tabId="5">
                    <Row>
                    <SimpleBar ref={scroollRef} style={{ height: "340px" }}>
                        {competitioninter.map(item => (
                            <Col lg={12} key={item.id}>
                                <Card>
                                    <Row className="no-gutters align-items-center">
                                        <Col md={4}>
                                            <CardImg className="img-fluid" src={item.image} alt="image" />
                                        </Col>
                                        <Col md={8}>
                                            <CardBody>
                                                <CardTitle>{item.title}</CardTitle>
                                                <CardText>
                                                    {item.desc}
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

                        ))}
                        </SimpleBar>
                    </Row>
                </TabPane>
            </TabContent>

        </React.Fragment>
    )
}

export default CompetitionRightSide
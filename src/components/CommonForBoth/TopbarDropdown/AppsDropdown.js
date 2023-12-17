import React, { useState } from 'react'
import { Link } from "react-router-dom";

// //Import Scrollbar
import SimpleBar from "simplebar-react";
import {
    Row,
    Col,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    UncontrolledTooltip,
} from "reactstrap";

// import image
import icon1 from 'assets/images/App-icon/Activities.svg'
import icon2 from 'assets/images/App-icon/Community.svg'
import icon3 from 'assets/images/App-icon/Competition.svg'
import icon4 from 'assets/images/App-icon/Connection.svg'
import icon5 from 'assets/images/App-icon/Consultancy.svg'
import icon6 from 'assets/images/App-icon/Courses-Certificate.svg'
import icon7 from 'assets/images/App-icon/Diets.svg'
import icon8 from 'assets/images/App-icon/Exercises.svg'
import icon9 from 'assets/images/App-icon/Fitness-Calculator.svg'
import icon10 from 'assets/images/App-icon/Fitness-Cliniq.svg'
import icon11 from 'assets/images/App-icon/GPRRating.svg'
import icon12 from 'assets/images/App-icon/HSXStudio.svg'
import icon13 from 'assets/images/App-icon/HireProfessional.svg'
import icon15 from 'assets/images/App-icon/Jobs.svg'
import icon16 from 'assets/images/App-icon/Leaderboard.svg'
import icon17 from 'assets/images/App-icon/Live.svg'
import icon18 from 'assets/images/App-icon/Shop.svg'
import icon19 from 'assets/images/App-icon/SportsEvent.svg'
import icon20 from 'assets/images/App-icon/Training.svg'
import icon21 from 'assets/images/App-icon/Vendors.svg'

export const AppsDropdown = () => {
    const [socialDrp, setsocialDrp] = useState(false);
  return (
    <React.Fragment>
          <Dropdown
              className="d-none d-lg-inline-block ms-1"
              isOpen={socialDrp}
              toggle={() => {
                setsocialDrp(!socialDrp);
              }}
              id='appstooltip'
            >
              <UncontrolledTooltip placement="left" target={`appstooltip`}>
               HySport Apps
              </UncontrolledTooltip>
              <DropdownToggle
                className="btn header-item noti-icon "
                caret
                tag="button"
              >
                <i className="bx bx-customize" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-lg dropdown-menu-end">
                <SimpleBar style={{ maxHeight: "300px", maxWidth: "1000px", overflowX: "hidden" }}>
                  <div className="px-lg-2">
                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon1} alt="Activities" />
                          <span>Activities</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon2} alt="Community" />
                          <span>Community</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon4} alt="Connection" />
                          <span>Connection</span>
                        </Link>
                      </Col>
                    </Row>
                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon5} alt="Consultancy" />
                          <span>Consultancy</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon6} alt="Course" />
                          <span>Course</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon7} alt="Diets" />
                          <span>Diets</span>
                        </Link>
                      </Col>
                    </Row>
                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon3} alt="Competition" />
                          <span>Competition</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon8} alt="Exercises" />
                          <span>Exercises</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon9} alt="Fitness-Calculator" />
                          <span>Calculator</span>
                        </Link>
                      </Col>
                    </Row>
                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon10} alt="Fitness-Clinic" />
                          <span>Fitness-Clinic</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon11} alt="GPRRating" />
                          <span>GPRRating</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon12} alt="HSX Studio" />
                          <span>HSX Studio</span>
                        </Link>
                      </Col>
                    </Row>
                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon13} alt="Hire Professional" />
                          <span>Hire Professional</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon3} alt="Jobs" />
                          <span>Jobs</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon15} alt="slack" />
                          <span>Slack</span>
                        </Link>
                      </Col>
                    </Row>
                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon16} alt="Leader Board" />
                          <span>Leader Board</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon17} alt="Live" />
                          <span>Live</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon18} alt="Shop" />
                          <span>Shop</span>
                        </Link>
                      </Col>
                    </Row>
                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon19} alt="Sports Event" />
                          <span>Sports Event</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon20} alt="Training" />
                          <span>Training</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={icon21} alt="Vendors" />
                          <span>Vendors</span>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </SimpleBar>
              </DropdownMenu>
            </Dropdown>
    </React.Fragment>
  )
}

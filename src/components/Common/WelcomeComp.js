import React from "react"

import { Row, Col, Card, CardBody,CardTitle } from "reactstrap"
import { Link } from "react-router-dom"
import { activityDataDashboard } from 'common/data/participatar'

// import avatar1 from "../../assets/images/users/avatar-1.jpg"
import avatar1 from "../../assets/images/users/avatar-1.jpg"
import profileImg from "../../assets/images/fw-logoold.png"
// import profileImg from "../../assets/images/logo.svg"

const WelcomeComp = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const username = userData.first_name + " " + userData.last_name;
  return (
    <React.Fragment>
      <Card className="overflow-hidden">
        <div className="bg-light">
          <Row>
            <Col xs="7">
              <div className="text-primary p-3">
                <h5 className="text-primary">Welcome Back !</h5>
                <p>Hyposportx-Dashboard (FW)</p>
              </div>
            </Col>
            <Col xs="5" className="align-self-end">
              <img src={profileImg} alt="" className="img-fluid" />
            </Col>
          </Row>
        </div>
        <CardBody className="pt-0">
          <Row>
            <Col sm="4">
              <div className="avatar-md profile-user-wid mb-4">
                <img
                  src={avatar1}
                  alt=""
                  className="img-thumbnail rounded-circle"
                />
              </div>
              <h6>Hello, <span>{username ? username : ''}</span></h6>
              <h5 className="font-size-15 text-truncate">Master</h5>
              <p className="text-muted mb-0 text-truncate">Expert Player</p>
            </Col>

            <Col sm="8">
              <div className="pt-4">
                <Row>
                  <Col xs="5">
                    <h5 className="font-size-15">1225</h5>
                    <p className="text-muted mb-0">Total User</p>
                  </Col>
                  <Col xs="5">
                    <h5 className="font-size-15">$1245</h5>
                    <p className="text-muted mb-0">Revenue</p>
                  </Col>
                  <Col xs="2" className="text-end">
                    <h5 className="font-size-15 dripicons-document-edit"></h5>
                    <p className="text-muted mb-0"></p>
                  </Col>
                </Row>
                <div className="mt-4 mr-4">
                  <Link
                    to=""
                    className="btn btn-primary  btn-sm"
                  >
                    View Profile <i className="mdi mdi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle className="mb-5">Activity</CardTitle>
          <ul className="verti-timeline list-unstyled">
            {
              (activityDataDashboard || []).map((item, index) => (
                <li className={`event-list ${item.active && "active"}`} key={index}>
                  <div className="event-timeline-dot">
                    <i className={`bx bx-right-arrow-circle font-size-18 ${item.active && "bx-fade-right"}`} />
                  </div>
                  <div className="flex-shrink-0 d-flex">
                    <div className="me-3">
                      <h5 className="font-size-14">
                        {item.date}
                        <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                      </h5>
                    </div>
                    <div className="flex-grow-1">
                      <div>{item.activity}</div>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
          <div className="text-center mt-4">
            <Link
              to="#"
              className="btn btn-primary waves-effect waves-light btn-sm"
            >
              View More <i className="mdi mdi-arrow-right ms-1" />
            </Link>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}
export default WelcomeComp

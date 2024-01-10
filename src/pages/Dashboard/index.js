import Breadcrumb from "components/Common/Breadcrumb"
import React, { useState } from "react"
import { Link } from "react-router-dom";
import { Container, Row, Col, CardGroup, Card, CardTitle, CardText, CardBody, CardFooter, Toast, ToastHeader, ToastBody, } from "reactstrap"
import PropTypes from "prop-types"
//i18n
import { withTranslation } from "react-i18next"
import WelcomeComp from "components/Common/WelcomeComp"
import { reports } from 'common/data'

const Dashboard = props => {
  //meta title
  document.title = "Dashboard | Participator"
  const [toast, setToast] = useState(true);
  const [toast1, setToast1] = useState(true);
  const toggleToast = () => {
    setToast(!toast);
  };
  const toggleToast1 = () => {
    setToast1(!toast1);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb
            title={props.t("Participator")}
            breadcrumbItem={props.t("Dashboard")}
          />
          <Row className="mb-3">
            <Col lg={12}>
              <Toast isOpen={toast} className="w-100 bg-info-subtle text-primary">
                <ToastHeader toggle={toggleToast} className="bg-info-subtle text-primary">
                  Offer
                </ToastHeader>
                <ToastBody>
                  <h3 className="text-center">Advertisment Contents</h3>
                </ToastBody>
              </Toast>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <WelcomeComp />
            </Col>

            <Col lg={6}>
              <Row>

                <CardGroup>
                  {reports.map((data, key) => (
                    <Col xs="6" key={key}>
                      <Card className="mx-2" >
                        <CardBody>
                          <div className="d-flex justify-content-between align-item-center">
                            <CardTitle>{data.title} Status</CardTitle>
                            <button className="btn btn-sm btn-soft-success">
                              <i className="mdi mdi-run"></i>
                            </button>
                          </div>
                          <CardText className="pt-1">
                            <Row className="my-3">
                              <Col className="d-flex justify-content-between">
                                <span className="fw-bold">Total:</span>
                                <span>500</span>
                              </Col>
                            </Row>
                            <div className="d-lg-flex d-md-block d-flex justify-content-between">
                              <div className="d-lg-block d-md-flex d-block justify-content-between mb-1">
                                <span className="fw-bold">Total Avaiable:</span>
                                <span className="ms-2">480</span>
                              </div>
                              <div className="d-lg-block d-md-flex d-block justify-content-between">
                                <span className="fw-bold">Total Left:</span>
                                <span className="ms-2">20</span>
                              </div>
                            </div>
                          </CardText>
                          <CardFooter className="text-center" style={{ cursor: 'pointer' }}><span>{data.title} Details</span></CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </CardGroup>
              </Row>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={12}>
              <Toast isOpen={toast1} className="w-100 bg-info-subtle text-primary">
                <ToastHeader toggle={toggleToast1} className="bg-info-subtle text-primary">
                  Offer
                </ToastHeader>
                <ToastBody>
                  <h3 className="text-center">Advertisment Contents</h3>
                </ToastBody>
              </Toast>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment >
  )
}

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
}
export default withTranslation()(Dashboard)

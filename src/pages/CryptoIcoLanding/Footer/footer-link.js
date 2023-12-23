import React from "react"
import { Row, Col } from "reactstrap"

//Import Images
import logohysport from "assets/images/logo/hysportsdark.svg"
import logofw from "assets/images/fw-logo.png"

const FooterLink = () => {
  return (
    <React.Fragment>
      <Row>
        <Col lg="4">
          <div className="mb-4">
            <img src={logohysport} alt="" height="50" />
          </div>

          <p className="mb-2">
            {new Date().getFullYear()} © HySportx. Design & Develop by Our Team
          </p>
          <p >
          Indian largest independent wool broker Indian Wool Network has acquired Victorian knitwear manufacturer Hysport.
          </p>
        </Col>

        <Col lg={4}></Col>
        <Col lg={4} className="">
          <div className="mb-4">
            <img src={logofw} alt="" height="30" width="150" />
          </div>

          <p className="mb-2 ">
            {new Date().getFullYear()} © Fittest Warrior. Design & Develop by Our Team
          </p>
          <p className="" >
          Indian largest independent wool broker Indian Wool Network has acquired Victorian knitwear manufacturer Hysport.
          </p>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default FooterLink

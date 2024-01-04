import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "react-router-dom"

//Import Components
import FooterLink from "./footer-link"

const Features = () => {
  const footerLinks = [
    {
      title: "Knows",
      links: [
        { title: "Hybrid sport", link: "#" },
        { title: "Rules", link: "#" },
        { title: "Team", link: "#" },
        { title: "News", link: "#" },
        { title: "FAQs", link: "#" },
      ],
    },
    {
      title: "Quick Menu",
      links: [
        { title: "Find/Post Job ", link: "#" },
        { title: "Find Network", link: "#" },
        { title: "Get Scholarship", link: "#" },
        { title: "Get Your Hysportx", link: "#" },
        { title: "Share Your Story", link: "#" },
      ],
    },
    {
      title: "Competitions",
      links: [
        { title: "About Competition", link: "#" },
        { title: "Create Own Competition ", link: "#" },
        { title: "Hysportx Competition", link: "#" },
      ],
    },
  ]

  return (
    <React.Fragment>
      <footer className="landing-footer">
        <Container>
          <Row className="mx-auto">
            {footerLinks.map((footerLink, key) => (
              <Col lg="3" sm="4" xs="3" key={key}>
                <div className="mb-4 mb-lg-0">
                  <h5 className="mb-3 footer-list-title">{footerLink.title}</h5>
                  <ul className="list-unstyled footer-list-menu">
                    {footerLink.links.map((Flink, key) => (
                      <li key={key}>
                        <Link to={Flink.link}>{Flink.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}

            <Col lg="3" sm="6" xs="6">
              <div className="mb-4 mb-lg-0">
                <h5 className="mb-3 footer-list-title">Address</h5>
                <div className="blog-post">
                  <Link to="#" className="post">
                    <div className="badge badge-soft-primary font-size-12 mb-3">
                    3ree6ix Advertising & marketing pvt ltd
                    </div>
                    <h5 className="post-title">118/A, T-Extension, Gali No. 6 Vipin Garden, Uttam Nagar </h5>
                    <p className="mb-0">
                      <i className="bx bx-map-pin me-1"/> New Delhi New Delhi DL 110059 IN
                    </p>
                  </Link>
                  <Link to="#" className="post">
                    <div className="badge badge-soft-primary font-size-12 mb-3">
                    3ree6ix Company
                    </div>
                    <h5 className="post-title">118/A, T-Extension, Gali No. 6 Vipin Garden, Uttam Nagar</h5>
                    <p className="mb-0">
                      <i className="bx bx-map-pin me-1"/> New Delhi New Delhi DL 110059 IN
                    </p>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>

          <hr className="footer-border my-3" />

          <FooterLink />
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Features

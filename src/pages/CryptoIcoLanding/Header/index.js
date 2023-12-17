import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Row, Col, Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import withRouter from "components/Common/withRouter";
import classname from "classnames";

//i18n
import { withTranslation } from "react-i18next";

import { connect } from "react-redux";

const Navbar = props => {

  const [dashboard, setdashboard] = useState(false);
  const [ui, setui] = useState(false);
  const [app, setapp] = useState(false);
  const [email, setemail] = useState(false);
  const [ecommerce, setecommerce] = useState(false);
  const [crypto, setcrypto] = useState(false);
  const [project, setproject] = useState(false);
  const [task, settask] = useState(false);
  const [contact, setcontact] = useState(false);
  const [blog, setBlog] = useState(false);
  const [job, setJob] = useState(false);
  const [candidate, setCandidate] = useState(false);
  const [component, setcomponent] = useState(false);
  const [form, setform] = useState(false);
  const [table, settable] = useState(false);
  const [chart, setchart] = useState(false);
  const [icon, seticon] = useState(false);
  const [map, setmap] = useState(false);
  const [extra, setextra] = useState(false);
  const [invoice, setinvoice] = useState(false);
  const [auth, setauth] = useState(false);
  const [utility, setutility] = useState(false);

  useEffect(() => {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    var items = ul.getElementsByTagName("a");
    removeActivation(items);
    for (var i = 0; i < items.length; ++i) {
      if (window.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });

  const removeActivation = items => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;
      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        if (parent.classList.contains("active")) {
          parent.classList.remove("active");
        }
      }
    }
  };

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }


  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault();
                      setdashboard(!dashboard);
                    }}
                    to="#"
                  >
                    <i className="bx bx-home-circle me-2"></i>
                    {props.t("Home")} {props.menuOpen}
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname("dropdown-menu", { show: dashboard })}
                  >
                    <Link to="#" className="dropdown-item">
                      {props.t("Default")}
                    </Link>
                    <Link to="#" className="dropdown-item">
                      {props.t("Saas")}
                    </Link>
                    <Link to="/dashboard-crypto" className="dropdown-item">
                      {props.t("Crypto")}
                    </Link>
                    <Link to="/blog" className="dropdown-item">
                      {props.t("Blog")}
                    </Link>
                    <Link to="/dashboard-job" className="dropdown-item">
                      {props.t("Jobs")}
                    </Link>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setui(!ui);
                    }}
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <i className="bx bx-tone me-2"></i>
                    {props.t("Consultancy")} <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname(
                      "dropdown-menu mega-dropdown-menu dropdown-menu-left dropdown-mega-menu-xl",
                      { show: ui }
                    )}
                  >
                    <Row>
                      <Col lg={4}>
                        <div>
                          <Link to="#" className="dropdown-item">
                            {props.t("Alerts")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Buttons")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Cards")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Carousel")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Dropdowns")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Grid")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Images")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Lightbox")}
                          </Link>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div>
                          <Link to="#" className="dropdown-item">
                            {props.t("Modals")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Offcanvas")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Range Slider")}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {props.t("Session Timeout")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Progress Bars")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Placeholders")}
                          </Link>
                          {/* <Link to="#t" className="dropdown-item">
                              {props.t("Sweet-Alert")}
                            </Link> */}
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            {props.t("Tabs & Accordions")}
                          </Link>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div>
                          <Link to="#" className="dropdown-item">
                            {props.t("Typography")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Toasts")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Video")}
                          </Link>
                          <Link to="#l" className="dropdown-item">
                            {props.t("General")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Colors")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Rating")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Notifications")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Utilities")}
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setapp(!app);
                    }}
                    className="nav-link dropdown-togglez arrow-none"
                  >
                    <i className="bx bx-customize me-2"></i>
                    {props.t("Jobs")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: app })}>
                    <Link to="#" className="dropdown-item">
                      {props.t("Calendar")}
                    </Link>
                    <Link to="#" className="dropdown-item">
                      {props.t("Chat")}
                    </Link>
                    <Link to="#" className="dropdown-item">
                      {props.t("File Manager")}
                    </Link>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setemail(!email);
                        }}
                      >
                        {props.t("Email")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: email })}
                      >
                        <Link to="#" className="dropdown-item">
                          {props.t("Inbox")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Read Email")}
                        </Link>
                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setemail(!email);
                            }}
                          >
                            <span key="t-email-templates">Templates</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: email,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Basic Action")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Alert Email")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Billing Email")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
             
                  </div>
                </li>

              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
};

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout;
  return { leftMenu };
};

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
);

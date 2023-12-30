import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Row, Col, Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import withRouter from "components/Common/withRouter";
import classname from "classnames";

//i18n 
import { withTranslation } from "react-i18next";

import { connect } from "react-redux";
import { competition } from "helpers/api";

const Navbar = props => {

  const [dashboard, setdashboard] = useState(false);
  const [ui, setui] = useState(false);
  const [app, setapp] = useState(false);
  const [email, setemail] = useState(false);
  const [competition, setcompetition] = useState(false);


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
        <div className="container-fluid">
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
                    {props.t("Know Us")} {props.menuOpen}
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname("dropdown-menu", { show: dashboard })}
                  >
                    <Link to="#" className="dropdown-item">
                      {props.t("HSX- Hybrid Sports")}
                    </Link>
                    <Link to="#" className="dropdown-item">
                      {props.t("HSX-Sports Eco System")}
                    </Link>
                    <Link to="#" className="dropdown-item">
                      {props.t("Rules")}
                    </Link>
                    <Link to="#" className="dropdown-item">
                      {props.t("Invest")}
                    </Link>
                    <Link to="#" className="dropdown-item">
                      {props.t("Scholarship")}
                    </Link>
                    <Link to="#" className="dropdown-item">
                      {props.t("Start your HYSPORTX")}
                    </Link>
                    <Link to="#" className="dropdown-item">
                      {props.t("Faqs")}
                    </Link>
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
                    {props.t("Community")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: app })}>
                    <Link to="#" className="dropdown-item">
                      {props.t("Find Community")}
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
                        {props.t("Join Community")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: email })}
                      >
                        <Link to="#" className="dropdown-item">
                          {props.t("Education")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Read Wellness & Health")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Gym & Fitness Club")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Services")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Private Sector")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Celebrities")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Sports Professionals")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Vendors")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Supporter/Volunteer")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Brands & Investors")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Others")}
                        </Link>
                      </div>
                    </div>

                  </div>
                </li>

              {/* Competition */}

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
                    {props.t("Competition")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: app })}>
                    <div className="dropdown">
                      <Link to="/#" className="dropdown-item dropdown-toggle arrow-none" >
                        {props.t("About Competition")} <div className="arrow-down"></div>
                      </Link>
                      <div className="dropdown-menu" >
                        <Link to="#" className="dropdown-item"> {props.t("Introduction page")}</Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link to="/#" className="dropdown-item dropdown-toggle arrow-none" >
                        {props.t("Create Own Competition")} <div className="arrow-down"></div>
                      </Link>
                      <div className="dropdown-menu" >
                        <Link to="#" className="dropdown-item"> {props.t("Direct Create Page")}</Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link to="/#" className="dropdown-item dropdown-toggle arrow-none" >
                        {props.t("Challenge 1 to 1")} <div className="arrow-down"></div>
                      </Link>
                      <div className="dropdown-menu" >
                        <Link to="#" className="dropdown-item"> {props.t("Invite Challenge")}</Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setcompetition(!competition);
                        }}
                      >
                        {props.t("Hysportx Competition")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: competition })}
                      >

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setcompetition(!competition);
                            }}
                          >
                            <span key="t-email-templates">Inter Competition</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: competition,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Inter School")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Inter College/University")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Inter Services")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Inter Corporate")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Inter Gym")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Inter Celebrities")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Inter Open")}
                            </Link>
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setcompetition(!competition);
                            }}
                          >
                            <span key="t-email-templates">National Competition</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: competition,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("District")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("State")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("National")}
                            </Link>
                           
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setcompetition(!competition);
                            }}
                          >
                            <span key="t-email-templates">International Competition</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: competition,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Survival of the Fittest")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("HSX Champiors Trophy")}
                            </Link>
                           
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("HSX World Cup")}
                            </Link>
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setcompetition(!competition);
                            }}
                          >
                            <span key="t-email-templates">Leagues</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: competition,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Other")}
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="dropdown">
                      <Link to="/#" className="dropdown-item dropdown-toggle arrow-none" >
                        {props.t("Find Competitions")} <div className="arrow-down"></div>
                      </Link>
                      <div className="dropdown-menu" >
                        <Link to="#" className="dropdown-item"> {props.t("Competitors Search Page")}</Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link to="/#" className="dropdown-item dropdown-toggle arrow-none" >
                        {props.t("Recent Competitions")} <div className="arrow-down"></div>
                      </Link>
                      <div className="dropdown-menu" >
                        <Link to="#" className="dropdown-item"> {props.t("Auto Drop Recent Page")}</Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link to="/#" className="dropdown-item dropdown-toggle arrow-none" >
                        {props.t("Live Competitions")} <div className="arrow-down"></div>
                      </Link>
                      <div className="dropdown-menu" >
                        <Link to="#" className="dropdown-item"> {props.t("Which is running today")}</Link>
                      </div>
                    </div>

                  </div>
                </li>

              {/* Sports Eco System		 */}

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
                    {props.t("Sports Eco System")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: app })}>
                  

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setcompetition(!competition);
                        }}
                      >
                        {props.t("Eco Services")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: competition })}
                      >

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setcompetition(!competition);
                            }}
                          >
                            <span key="t-email-templates">Jobs</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: competition,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("For Employer")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("For Employee")}
                            </Link>
                           
                           
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setcompetition(!competition);
                            }}
                          >
                            <span key="t-email-templates">Consultancy</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: competition,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Get Appointment")}
                            </Link>
                           
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setcompetition(!competition);
                            }}
                          >
                            <span key="t-email-templates">Hire Professional</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: competition,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Book Schedule")}
                            </Link>
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setcompetition(!competition);
                            }}
                          >
                            <span key="t-email-templates">Exercises</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: competition,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("View Exercises")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Create Exercise")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Preset Exercises")}
                            </Link>
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setcompetition(!competition);
                            }}
                          >
                            <span key="t-email-templates">Diets</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: competition,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("View Diet")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Create Diet")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Preset Diet")}
                            </Link>
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setcompetition(!competition);
                            }}
                          >
                            <span key="t-email-templates">Fitness Calculator</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: competition,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Direct to page")}
                            </Link>
                            
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setcompetition(!competition);
                            }}
                          >
                            <span key="t-email-templates">Workout</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: competition,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Plan/Schedule")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Today's Workout")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Preset Workout")}
                            </Link>
                            
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setcompetition(!competition);
                            }}
                          >
                            <span key="t-email-templates">Coaching/Training</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: competition,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Analyse Test")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Plan/Schedule")}
                            </Link>
                            
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setcompetition(!competition);
                            }}
                          >
                            <span key="t-email-templates">Sports Events</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: competition,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Organisers")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Participators")}
                            </Link>
                            
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setcompetition(!competition);
                            }}
                          >
                            <span key="t-email-templates">Certification</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: competition,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Course Page")}
                            </Link>

                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setcompetition(!competition);
                            }}
                          >
                            <span key="t-email-templates">Networking/Connections</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: competition,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Social media")}
                            </Link>

                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setcompetition(!competition);
                            }}
                          >
                            <span key="t-email-templates">Promotions</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: competition,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Online Web/App/Dashboards")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Social - Insta/Linkedin/Facebook/Youtube")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("In Competitions")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("In Sports Events")}
                            </Link>

                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setcompetition(!competition);
                            }}
                          >
                            <span key="t-email-templates">Live</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: competition,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Live your Games & Events")}
                            </Link>
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              setcompetition(!competition);
                            }}
                          >
                            <span key="t-email-templates">Gym Management</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: competition,
                            })}
                          >
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Manage your Gym")}
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="dropdown">
                      <Link to="/#" className="dropdown-item dropdown-toggle arrow-none" >
                        {props.t("Eco Hub")} <div className="arrow-down"></div>
                      </Link>
                      <div className="dropdown-menu" >
                        <Link to="#" className="dropdown-item"> {props.t("athelete/participator")}</Link>
                        <Link to="#" className="dropdown-item"> {props.t("supporter/Vendor")}</Link>
                        <Link to="#" className="dropdown-item"> {props.t("volunteers")}</Link>
                        <Link to="#" className="dropdown-item"> {props.t("Referee/judge")}</Link>
                        <Link to="#" className="dropdown-item"> {props.t("Coach/Trainer")}</Link>
                        <Link to="#" className="dropdown-item"> {props.t("partner gym")}</Link>
                        <Link to="#" className="dropdown-item"> {props.t("Mentors")}</Link>
                        <Link to="#" className="dropdown-item"> {props.t("Incubation")}</Link>
                        <Link to="#" className="dropdown-item"> {props.t("Investors")}</Link>
                      </div>
                    </div>

                  </div>
                </li>


              

                <li className="nav-item dropdown">
                  <Link to="/#" className="nav-link dropdown-togglez arrow-none" >
                    <i className="bx bx-customize me-2"></i>
                    {props.t("Courses")} <div className="arrow-down"></div>
                  </Link>
                  <div className="dropdown-menu">
                    
                    <div className="dropdown">
                      <Link to="/#" className="dropdown-item dropdown-toggle arrow-none" >
                        {props.t("Explore Courses")} <div className="arrow-down"></div>
                      </Link>
                      <div className="dropdown-menu" >
                        <Link to="#" className="dropdown-item"> {props.t("Trainer Course")}</Link>
                        <Link to="#" className="dropdown-item"> {props.t("Referee Course")}</Link>
                      </div>
                    </div>
                    
                    <div className="dropdown">
                      <Link to="/#" className="dropdown-item dropdown-toggle arrow-none" >
                        {props.t("Resources")} <div className="arrow-down"></div>
                      </Link>
                      <div className="dropdown-menu" >
                        <Link to="#" className="dropdown-item"> {props.t("Take to the page")}</Link>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link to="/#" className="nav-link dropdown-togglez arrow-none" >
                    <i className="bx bx-customize me-2"></i>
                    {props.t("Community")} <div className="arrow-down"></div>
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="#" className="dropdown-item"> {props.t("Find Community")}</Link>
                    <div className="dropdown">
                      <Link to="/#" className="dropdown-item dropdown-toggle arrow-none" >
                        {props.t("Join Community")} <div className="arrow-down"></div>
                      </Link>
                      <div className="dropdown-menu" >
                        <Link to="#" className="dropdown-item"> {props.t("Education")}</Link>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link to="/#" className="nav-link dropdown-togglez arrow-none" >
                    <i className="bx bx-customize me-2"></i>
                    {props.t("Leaderboard")} <div className="arrow-down"></div>
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="#" className="dropdown-item"> {props.t("Find Your Leaderboard")}</Link>
                    <Link to="#" className="dropdown-item"> {props.t("Challenge Leaderboard")}</Link>
                    <Link to="#" className="dropdown-item"> {props.t("Inter Competition L")}</Link>
                    <Link to="#" className="dropdown-item"> {props.t("National Competition L")}</Link>
                    <Link to="#" className="dropdown-item"> {props.t("International L")}</Link>
                    <Link to="#" className="dropdown-item"> {props.t("Leagues L")}</Link>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link to="/#" className="nav-link dropdown-togglez arrow-none" >
                    <i className="bx bx-customize me-2"></i>
                    {props.t("Blogs")} <div className="arrow-down"></div>
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="#" className="dropdown-item"> {props.t("Create Blogs")}</Link>
                    <Link to="#" className="dropdown-item"> {props.t("Recent Blogs")}</Link>
                    <Link to="#" className="dropdown-item"> {props.t("Find Blogs")}</Link>
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

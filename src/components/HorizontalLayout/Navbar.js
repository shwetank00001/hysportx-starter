import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Row, Col, Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import withRouter from "components/Common/withRouter";
import classname from "classnames";
import { authProtectedRoutes } from "../../routes/index";

//i18n
import { withTranslation } from "react-i18next";

import { connect } from "react-redux";

const Navbar = props => {

  const [dashboard, setdashboard] = useState(false);
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

  const userData = JSON.parse(localStorage.getItem('userData'));
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
              {authProtectedRoutes.map((route, idx) => (
                route.user === userData.role.type ?(
                  route.children.length ?
                  <li className="nav-item dropdown" key={idx}>
                    <Link  className="nav-link dropdown-toggle arrow-none"
                      onClick={e => { e.preventDefault(); setdashboard(!dashboard); }}
                      to={route.path}
                    > <i className={`me-2 ${route.icon ? route.icon : 'bx bx-home-circle'}`}></i>
                      {props.t(route.label)} {props.menuOpen}
                      <div className="arrow-down"></div>
                    </Link>
                    <div className={classname("dropdown-menu", { show: dashboard })}>
                      {route.children.map((child,id)=>(
                        <Link to={child.path} className="dropdown-item"key={id}>
                          {props.t(child.label)}
                        </Link>
                      ))}
                      
                    </div>
                  </li>
                  :
                 <li 
                  className="nav-item dropdown"
                  key={idx}
                 >
                 <Link
                   className="nav-link dropdown-toggle arrow-none"
                   to={route.path}
                 >
                  
                  
                   <i className={`me-2 ${route.icon ? route.icon : 'bx bx-home-circle'}`}></i>
                   {props.t(route.label)} {props.menuOpen}
                 </Link>

               </li>
                ): null
              ))}
                {/* <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/dashboard"
                  >
                    <i className="bx bx-home-circle me-2"></i>
                    {props.t("Dashboard")} {props.menuOpen}
                  </Link>

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
                    {props.t("Exercise")} <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname(
                      "dropdown-menu mega-dropdown-menu dropdown-menu-left dropdown-mega-menu-xl",
                      { show: ui }
                    )}
                  >
                        <div>
                          <Link to="/hysport" className="dropdown-item">
                            {props.t("Create Exercise")}
                          </Link>
                          <Link to="/exercise" className="dropdown-item">
                            {props.t("Exercises")}
                          </Link>
                        </div>
                  </div>
                </li> */}
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

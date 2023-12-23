import PropTypes from 'prop-types';
import React from "react";
import {
  Nav,
  Collapse,
  UncontrolledTooltip,
} from "reactstrap";
import { Link } from "react-router-dom";



//Import Images
import logo from 'assets/images/logo/hysportsdark.svg'


//Import Component
import LanguageDropdown from "components/CommonForBoth/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "components/CommonForBoth/TopbarDropdown/NotificationDropdown";
import { AppsDropdown } from 'components/CommonForBoth/TopbarDropdown/AppsDropdown';

import { LoginButton } from 'components/Common/LoginButton';
import { RegstrationButton } from 'components/Common/RegstrationButton';




const Navbar_Page = props => {

  
  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  return (
    <React.Fragment>
      <nav
        className={"navbar navbar-expand-lg  navigation fixed-top bg-dark" }>
      
        <div className="container-fluid">

          <Collapse id="topnav-menu-content" navbar>

            <Nav className="ms-2 navbar-nav" id="topnav-menu">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logo} alt="" height="70" />
                </span>
              </Link>

            </Nav>
            <form className="app-search d-none d-lg-block ms-5">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="bx bx-search-alt" />
              </div>
            </form>

          </Collapse>
          <div className="me-lg-5">
            <LanguageDropdown />

            <NotificationDropdown />

            <AppsDropdown />

            <div className="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                className="btn header-item noti-icon"
                onClick={() => {
                  toggleFullscreen();
                }}
                data-toggle="fullscreen"
                id='fullscreentooltip'
              >
                <i className="bx bx-fullscreen" />
              </button>

              <UncontrolledTooltip placement="left" target={`fullscreentooltip`}>
               Full Screen
              </UncontrolledTooltip>
            </div>
            <div className="ms-3 d-lg-inline-block">
              <LoginButton />
            </div>

          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

Navbar_Page.propTypes = {
  imglight: PropTypes.any,
  navClass: PropTypes.string
};

export default Navbar_Page;

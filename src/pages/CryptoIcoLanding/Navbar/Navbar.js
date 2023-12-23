import PropTypes from "prop-types"
import React, { useState } from "react"

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  Collapse,
  UncontrolledTooltip,
} from "reactstrap"
import { Link } from "react-router-dom"

//Import Images
import logo from "assets/images/logo/hysportsdark.svg"

//Import Component
import LanguageDropdown from "components/CommonForBoth/TopbarDropdown/LanguageDropdown"
import NotificationDropdown from "components/CommonForBoth/TopbarDropdown/NotificationDropdown"
import { AppsDropdown } from "components/CommonForBoth/TopbarDropdown/AppsDropdown"

import { LoginButton } from "components/Common/LoginButton"
import { RegstrationButton } from "components/Common/RegstrationButton"

const Navbar_Page = props => {
  const [menu, setMenu] = useState(false)

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }

  return (
    <React.Fragment>
      <nav className={"navbar navbar-expand-lg  navigation fixed-top bg-dark"}>
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

            <Dropdown
              className="dropdown-mega d-none d-lg-block ms-2"
              isOpen={menu}
              toggle={() => setMenu(!menu)}
              direction="right"
            >
              <DropdownToggle
                className="btn header-item text-light"
                caret
                tag="button"
              >
                Quick Menu <i className="mdi mdi-chevron-down" />
              </DropdownToggle>
              <DropdownMenu>
                <Link to="#" className="dropdown-item">
                  Find/Post Job
                </Link>
                <Link to="#" className="dropdown-item">
                  Find Network
                </Link>
                <Link to="#" className="dropdown-item">
                  Get Scholarship
                </Link>
                <Link to="#" className="dropdown-item">
                  Get Your Hysportx
                </Link>
                <Link to="#" className="dropdown-item">
                  Share Your Story
                </Link>
              </DropdownMenu>
            </Dropdown>
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
                  toggleFullscreen()
                }}
                data-toggle="fullscreen"
                id="fullscreentooltip"
              >
                <i className="bx bx-fullscreen text-light" />
              </button>

              <UncontrolledTooltip
                placement="left"
                target={`fullscreentooltip`}
              >
                Full Screen
              </UncontrolledTooltip>
            </div>

            <div className="dropdown d-inline-block">
              <button
                // onClick={() => {
                //   props.showRightSidebarAction(!props.showRightSidebar);
                // }}
                type="button"
                className="btn header-item noti-icon right-bar-toggle "
              >
                <i className="bx bx-cog bx-spin text-light" />
              </button>
              <div className="ms-3 d-lg-inline-block">
                <LoginButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

Navbar_Page.propTypes = {
  imglight: PropTypes.any,
  navClass: PropTypes.string,
}

export default Navbar_Page

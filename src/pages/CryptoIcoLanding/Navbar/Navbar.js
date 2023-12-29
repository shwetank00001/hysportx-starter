import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  UncontrolledTooltip,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { Link } from "react-router-dom"

//Import Images
import logo from "assets/images/logo/hysportsdark.svg"
import LanguageDropdown from 'components/CommonForBoth/TopbarDropdown/LanguageDropdown';
import NotificationDropdown from 'components/CommonForBoth/TopbarDropdown/NotificationDropdown';
import { AppsDropdown } from 'components/CommonForBoth/TopbarDropdown/AppsDropdown';
import { LoginButton } from 'components/Common/LoginButton';

const Navbar_page = props => {
  const [isCollapse, setCollapseBtn] = useState(false);
  const [menu, setMenu] = useState(false)

  const toggleCollapseBtn = () => setCollapseBtn(!isCollapse);


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
    <div>
      <React.Fragment >
        <Navbar className={"navbar navbar-expand-lg  navigation fixed-top bg-dark"}>
          <NavbarBrand className='text-light' href="/">
            <span className="logo-lg  ">
              <img src={logo} alt="" height="60" />
            </span>
          </NavbarBrand>
          <NavbarToggler className='bg-light' onClick={toggleCollapseBtn} />
          <Collapse isOpen={isCollapse} className='' navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <form className="app-search d-none d-lg-block  ms-5">
                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <span className="bx bx-search-alt" />
                  </div>
                </form>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className='text-light' nav caret>
                  Quick Menu <i className="mdi mdi-chevron-down" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="#" className="dropdown-item">
                      Find/Post Job
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="#" className="dropdown-item">
                      Find Network
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="#" className="dropdown-item">
                      Get Scholarship
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="#" className="dropdown-item">
                      Get Your Hysportx
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="#" className="dropdown-item">
                      Share Your Story
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

            </Nav>
            <NavbarText>
              <LanguageDropdown />
            </NavbarText>
            <NavbarText>
              <NotificationDropdown />
            </NavbarText>
            <NavbarText>
              <AppsDropdown />
            </NavbarText>
            <NavbarText>
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
            </NavbarText>

            <NavbarText>
              <LoginButton />
            </NavbarText>
          </Collapse>
        </Navbar>
      </React.Fragment>
    </div>
  );
}

export default Navbar_page;
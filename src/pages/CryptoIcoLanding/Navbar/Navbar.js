import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  UncontrolledDropdown,
  UncontrolledTooltip,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { Link } from "react-router-dom"

//Import Images
import logo from "assets/images/logo/hysportsdark.svg"
import logo2 from "assets/images/logo/hysportslight.svg"
import LanguageDropdown from 'components/CommonForBoth/TopbarDropdown/LanguageDropdown';
import NotificationDropdown from 'components/CommonForBoth/TopbarDropdown/NotificationDropdown';
import { AppsDropdown } from 'components/CommonForBoth/TopbarDropdown/AppsDropdown';
import { LoginButton } from 'components/Common/LoginButton';
import MenuBar from '../Header/MenuBar';


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

  const [isRight, setIsRight] = useState(false);
  const toggleRightCanvas = () => {
    setIsRight(!isRight);
};

  return (
    <div>
      <React.Fragment >
        <Navbar className={"navbar navbar-expand-lg  navigation bg-dark"} >
          <NavbarBrand className='text-light' href="/">
            <span className="logo-lg  ">
              <img src={logo} alt="" height="60" />
            </span>
          </NavbarBrand>
          {/* <NavbarToggler className='bg-light' onClick={toggleCollapseBtn} /> */}
          <NavbarToggler className='bg-light '  onClick={toggleRightCanvas}>
            <i className='mdi mdi-menu-open fs-1' />
          </NavbarToggler>

          <Offcanvas
            isOpen={isRight}
            className='text-light'
            direction="end"
            toggle={toggleRightCanvas}>
            <OffcanvasHeader toggle={toggleRightCanvas}>
            <span className="logo-lg  ">
              <img src={logo2} alt="" height="60" />
            <LoginButton />
            </span>
            </OffcanvasHeader>
            <hr className="border border-danger border-1 opacity-10 mt-0"></hr>
            <OffcanvasBody>

            <div className='d-block d-lg-none'>
            <nav
            className="navbar navbar-light navbar-expand topnav-menu"
            id="navigation"
          > 
          
          <ul className="navbar-nav d-block">
            <MenuBar />
          </ul>
          </nav>
          </div>

            {/* <Nav className="me-auto" navbar>
            <NavItem>
            <Link to="#" className="dropdown-item">
                      Get Your Hysportx
                    </Link>
            </NavItem>
           
            <UncontrolledDropdown nav inNavbar className="d-lg-block">
                <DropdownToggle className='text-dark' nav caret>
                  Quick Menu <i className="mdi mdi-chevron-down" />
                </DropdownToggle>
                <DropdownMenu>
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
            </Nav> */}
         
            </OffcanvasBody>
          </Offcanvas>

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
              <UncontrolledDropdown nav inNavbar className="d-none d-lg-block">
                <DropdownToggle className='text-light' nav caret>
                  Quick Menu <i className="mdi mdi-chevron-down" />
                </DropdownToggle>
                <DropdownMenu>
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
            <NavbarText className="d-none d-lg-block">
              <LanguageDropdown  />
            </NavbarText>
            <NavbarText className="d-none d-lg-block">
              <NotificationDropdown  />
            </NavbarText>
            <NavbarText className="d-none d-lg-block">
              <AppsDropdown  />
            </NavbarText>
            <NavbarText className='d-none d-lg-block'>
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

            <NavbarText className='d-none d-lg-block'>
              <LoginButton />
            </NavbarText>
          </Collapse>
        </Navbar>
      </React.Fragment>
    </div>
  );
}

export default Navbar_page;
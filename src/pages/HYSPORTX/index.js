import React, { useEffect, useMemo, useState } from 'react';
// import Breadcrumb from 'components/Common/Breadcrumb'
import Breadcrumb from '../../components/Common/Breadcrumb'
import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink, Row, Spinner, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';
import Select from "react-select";
import { Await, Link, Route, redirect, useLocation, useNavigate } from 'react-router-dom';
import TableContainer from 'components/Common/TableContainer';
import { ToastContainer } from "react-toastify"

import HExercise from './HExercise';
import HCondition from './HCondition';
import HActivity from './HActivity';
import Activity from './Activity';
import Condition from './Condition';



function index() {


     const navigate = useNavigate();
     const [loading, setLoading] = useState(false)
    const [activeTabVartical, setoggleTabVertical] = useState(1)
    const [passedStepsVertical, setPassedStepsVertical] = useState([1])
   
   
    const [selectedMulti, setselectedMulti] = useState(null);
    const [activeTab, setactiveTab] = useState(1);
    const [verticalActiveTab, setverticalActiveTab] = useState("1");

    // Exercise fetch single data for edit  start
      const location = useLocation();
      const editdata = location.state === null ? null : location.state;
      let editTitleName = "Create Exercise | Activity | Competition ";
      if (editdata) {
        editTitleName = editdata.EditTitleName || "Edit Exercise | Activity | Competition ";
      }


      function toggleTabVertical(tab) {
        if (activeTabVartical !== tab) {
          var modifiedSteps = [...passedStepsVertical, tab]
    
          if (tab >= 1 && tab <= 4) {
            setoggleTabVertical(tab)
            setPassedStepsVertical(modifiedSteps)
          }
        }
      }
  useEffect(() => {
    loadings()
  
    
  }, [])
  
 function loadings(){
    // if( localStorage.getItem('_token') != 'null'){
    
    //   if( localStorage.getItem('_token') == '11111'){
    //     window.location.href ="https://hysprtsx.com"
    //     setLoading(false)
    //   }else{
    //     setLoading(false)
    //     window.location.href ="https://fittestwarrior.com/front/#/login";  
    //   }
    // }
    // if(localStorage.getItem('_token') == 'null'){
    //   window.location.href ="https://fittestwarrior.com/front/#/login";

    // }
  }



 function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }





  const [selectedGroup, setselectedGroup] = useState(null)

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup)
  }
  



 


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumb title="fwgames" breadcrumbItem="hyposports" />

          {loading ? (
            <>
              <Spinner color="success"></Spinner>
              <Spinner color="success"></Spinner>
            </>
          ) : (
            <>
              <Row> 
                
              </Row>
              <Row>
                <Col lg="12">
                  <Card>
                    <CardBody>
                      <CardTitle className="h4 mb-4">
                        <h4>{editTitleName}</h4>
                      </CardTitle>
                      <div className="vertical-wizard wizard clearfix vertical">
                        <div className="steps clearfix ">
                          <ul>
                            <NavItem
                              className={classNames({
                                current: activeTabVartical === 1,
                              })}
                            >
                              <NavLink
                                className={classNames({
                                  active: activeTabVartical === 1,
                                })}
                                onClick={() => {
                                  toggleTabVertical(1)
                                }}
                              >
                                <span className="number">1.</span>
                                <span className="font-size-10">
                                  Create Execise
                                </span>
                              </NavLink>
                            </NavItem>
                            <NavItem
                              className={classNames({
                                current: activeTabVartical === 2,
                              })}
                            >
                              <NavLink
                                className={classNames({
                                  active: activeTabVartical === 2,
                                })}
                                onClick={() => {
                                  toggleTabVertical(2)
                                }}
                              >
                                <span className="number">2.</span>{" "}
                                <span className="font-size-10">
                                  Create Condition
                                </span>
                              </NavLink>
                            </NavItem>
                            <NavItem
                              className={classNames({
                                current: activeTabVartical === 3,
                              })}
                            >
                              <NavLink
                                className={
                                  (classNames({
                                    active: activeTabVartical === 3,
                                  }),
                                  "done")
                                }
                                onClick={() => {
                                  toggleTabVertical(3)
                                }}
                              >
                                <span className="number">3.</span>
                                <span className="font-size-10">
                                  Create Acitivity 
                                </span>
                              </NavLink>
                            </NavItem>
                            <NavItem
                              className={classNames({
                                current: activeTabVartical === 4,
                              })}
                            >
                              <NavLink
                                className={
                                  (classNames({
                                    active: activeTabVartical === 4,
                                  }),
                                  "done")
                                }
                                onClick={() => {
                                  toggleTabVertical(4)
                                }}
                              >
                                <span className="number">4.</span>
                                <span className="font-size-10">
                                Create Competition
                                </span>
                              </NavLink>
                            </NavItem>
                          </ul>
                        </div>
                        <div className="content clearfix">
                          <TabContent
                            activeTab={activeTabVartical}
                            className="body"
                          >
                            <TabPane tabId={1}>
                              <Card>
                                <HExercise />
                              </Card>
                            </TabPane>

                            <TabPane tabId={2}>
                              <Condition />
                            </TabPane>

                            <TabPane tabId={3}>
                            <Activity />
                            </TabPane>

                            <TabPane tabId={4}>
                              <div className="row justify-content-center">
                                <Col lg="6">
                                  <div className="text-center">
                                    <div className="mb-4">
                                      <i className="mdi mdi-check-circle-outline text-success display-4" />
                                    </div>
                                    <div>
                                      <h5>Confirm Detail</h5>
                                      <p className="text-muted">
                                        If several languages coalesce, the
                                        grammar of the resulting
                                      </p>
                                    </div>
                                  </div>
                                </Col>
                              </div>
                            </TabPane>
                          </TabContent>
                        </div>
                        {/* <div className="actions clearfix">
                          <ul>
                            <li
                              className={activeTabVartical === 1
                                ? "previous disabled"
                                : "previous"}
                            >
                              <Link
                                to="#"
                                onClick={() => {
                                  toggleTabVertical(activeTabVartical - 1);
                                } }
                              >
                                Previous
                              </Link>
                            </li>
                            <li
                              className={activeTabVartical === 4 ? "next disabled" : "next"}
                            >
                              <Link
                                to="#"
                                onClick={() => {
                                  toggleTabVertical(activeTabVartical + 1);
                                } }
                              >
                                Next
                              </Link>
                            </li>
                          </ul>
                        </div> */}
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </>
          )}
        </Container>
        <ToastContainer />
      </div>
    </React.Fragment>
  )
}

export default index
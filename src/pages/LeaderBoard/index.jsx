import React, { useState } from 'react'
import { Breadcrumb, Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import LeaderBoard from './LeaderBoard'
import TopPerformer from './TopPerformer'
//  import  crypto from '../../assets/images/crypto/bg-ico-hero.jpg'
 import classnames from 'classnames'
import { PushUps, Running, Squats, weightLifting } from 'common/data/LeaderBoard'
function index() {

  const [activeTab1, setactiveTab1] = useState("5");

  const toggle1 = tab => {
    if (activeTab1 !== tab) {
      setactiveTab1(tab);
    }
  };
  

  return (
    <React.Fragment>
      <TabContent activeTab={activeTab1} className="p-3 text-muted">
               <TabPane tabId="5">
            <Row  className=' text-center'>
                <TopPerformer  sports='Weight Lifting' />
            </Row>
          </TabPane>
               <TabPane tabId="6">
            <Row  className=' text-center'>
                <TopPerformer  sports='Running' />
            </Row>
          </TabPane>
               <TabPane tabId="7">
            <Row  className=' text-center'>
                <TopPerformer  sports='Push Ups' />
            </Row>
          </TabPane>
               <TabPane tabId="8">
            <Row  className=' text-center'>
                <TopPerformer  sports='Squats' />
            </Row>
          </TabPane>
          </TabContent>
      {/* <div  className="page-content bg-default"> */}
      
       
        {/* <Container  > */}
          {/* Render Breadcrumbs */}
          {/* <Breadcrumb title="fwgames" breadcrumbItem="hyposports" /> */}
          {/* <img alt='img' src='../../assets/images/crypto/bg-ico-hero.jpg'> */}
          {/* <Card style={{backgroundImage:url(crypto)}}> */}

          <Row  className='text-center bg-transparent'>
           
            <h3><b>Leader Board</b></h3>
            
      <div  className=" bg-default mt-3">
        <Container fluid>

            <Nav pills className="navtab-bg bg-info mx-5 nav-justified">
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab1 === "5",
                        })}
                        onClick={() => {
                          toggle1("5");
                        }}
                        >
                       Weight Liftig
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab1 === "6",
                        })}
                        onClick={() => {
                          toggle1("6");
                        }}
                      >
                        Running
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab1 === "7",
                        })}
                        onClick={() => {
                          toggle1("7");
                        }}
                      >
                        Push Ups
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab1 === "8",
                        })}
                        onClick={() => {
                          toggle1("8");
                        }}
                      >
                        Squats
                      </NavLink>
                    </NavItem>
                  </Nav>
                        </Container>
                  </div>
            
       
            </Row>
          


         <Row>
          
         <TabContent activeTab={activeTab1} className="p-3 text-muted">
                    <TabPane tabId="5">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            <LeaderBoard  data={weightLifting} />
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="6">
                      <Row>
                        <Col sm="12">
                        <CardText className="mb-0">
                            <LeaderBoard  data={Running} />
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="7">
                      <Row>
                        <Col sm="12">
                        <CardText className="mb-0">
                            <LeaderBoard  data={PushUps} />
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>

                    <TabPane tabId="8">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            <LeaderBoard  data={Squats} />
                           
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
           
         </Row>
           
            
      
          {/* </Card> */}
    {/* </Container> */}
 
    {/* </div> */}

    </React.Fragment>
  )
}

export default index
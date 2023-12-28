import React, { useState } from 'react'
import { useRef } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardText,
    CardTitle,
    Col,
    Container, Nav, NavItem, NavLink, Row, TabContent, TabPane
  } from "reactstrap";
  import classnames from "classnames";
  
function Navcards(props) {
    const [tab, setTab] = useState(props.index[0].title);
    const [tabActiv, settabActiv] = useState()
        // tab.className= 'active'
  let  index = props.index
  const toggle = e => {
    if (tab !== e) {
      setTab(e);
    }
  };
    // const tabActive = useRef()
    // tabActive.tab.className = 'Active'
    const tabActive = useRef()
    // tabActive.className ='active'
    // if(tabActive.current.props.children = tab){
      // if(tabActive.current.props.children = tab){

      //   console.log(tabActive.current.props.className)
        
      // }

    // }
    
  return (
      <>
    
    <Card
    className=""
   
  >
    <CardHeader className="" >
      <Row  className='  d-flex  justify-content-evenly'>
        <div className=" h6  "><b>{props.Heading}</b></div>
        <div style={{fontSize:'0.8vw'}} className="  ">       
        <Nav tabs  className=""  >
      {index.map((key)=><>
        <NavItem key={key} className="m-0 p-0 ">
        <NavLink 
             ref={tabActive}
              // className='m-xxl-0 p-1 '
              style={{ cursor: "pointer" }}
              className={classnames({
                active: tab === key.title,
              })}
              onClick={function noRefCheck(){
                var e =key.title
                toggle(e)
                // setTab(key.title)
              }}
              >
            {key.title}
            </NavLink>
            </NavItem>
          
            </>)}
    </Nav>
        </div>
  </Row>
    {/* <Col className='text-end'>{props.icon}</Col> */}
     </CardHeader>
    
    <CardBody>
    <TabContent activeTab={tab}>
        {
            index.map((e)=><><TabPane key={e} tabId={e.title}>
            <Row>
              <Col sm="12">
             
              {e.description}
                
              </Col>
            </Row>
          </TabPane>
          </>)
        }
    </TabContent>
      {/* <CardTitle tag="h5">
        Special Title Treatment
        </CardTitle>
        <CardText>
        With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>
        Go somewhere
    </Button> */}
    </CardBody>
   
  </Card>
    </>
   
  )
}

export default Navcards
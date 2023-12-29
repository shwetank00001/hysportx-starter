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
  
function Navcards({icon ,index, Heading}) {
    const [tab, setTab] = useState(index[0].title);
    const [tabActiv, settabActiv] = useState()
        // tab.className= 'active'

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
    className=" mx-0 px-0"
   
  >
    <CardHeader className=" d-flex justify-content-between col-lg-12  mx-0 px-0" >
      <div className='  d-flex mx-3 w-100 justify-content-between'>
        <div className=" h6  "><b>{Heading ? Heading : ''}</b></div>
        {index ?
        <div style={{fontSize:'0.6vw'}} className=" d-flex  ">       
        <Nav tabs  className=" d-flex"  >
      {index.map((key)=><>
        <NavItem key={key} className="m-0 p-0 ">
        <NavLink 
             ref={tabActive}
              // className='m-xxl-0 p-1 '
              style={{ cursor: "pointer" }}
              className={classnames({
                'my-0 mx-1 p-0': true,
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
        </div>:" "}
       </div>
        {icon ?<i className='font-size-15  dripicons-document-edit'></i> :''}
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
import Breadcrumb from 'components/Common/Breadcrumb'
import React from 'react'
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap'
import PropTypes from "prop-types"
//i18n
import { withTranslation } from "react-i18next"
import WelcomeComp from "components/Common/WelcomeComp"
import Navcards from 'components/Common/Navcards'
import {event, competition,inetrSchool, national,reports, broadcast, kyc,connect,post, fitness,support, app,fwgbm} from '../../../common/data'


const Dashboard = props => {
    //meta title
    document.title = "Dashboard | Participator"

   

  return (
    <React.Fragment>
    <div className="page-content">
        <Container fluid>
           {/* Render Breadcrumb */}
           <Breadcrumb
              title={props.t("Participator")}
              breadcrumbItem={props.t("Dashboard")}
            />
        </Container>
     
      
        <Row className='text-center mb-3 rounded- bg-info my-2'>
             <Col className='text-center py-5'>
              <div className=" my-5 py-5">
  
               Advertisment Contents
              </div>
             </Col>
         </Row>

             <Container>
            
            <Row>
              <Col lg='8'>
              <WelcomeComp/>
              <Row>
                <Col>
                <Navcards index={kyc}  Heading="FWG National" icon={<><Button /><Button /></>}/>
                </Col>
                <Col>
                  <Navcards index={national}  Heading="FWG National" icon={<><Button /><Button /></>}/>
                  <Navcards index={inetrSchool}  Heading="FWG InterSchool" icon={<><Button /><Button /></>}/>
                </Col>
              </Row>
              <Row>
                <Col>
                <Navcards index={post}  Heading="Post" icon={<><Button /><Button /></>}/>
                </Col>
                <Col>
                {/* <Navcards   Heading="Comments" icon={<><Button /><Button /></>}/> */}
                </Col>
              </Row>
              <Row>
                <Navcards index={support}  Heading="Help & Support" icon={<><Button /><Button /></>}/>
              </Row>
              <Row>
                <Navcards index={app}  Heading="Other Utility App" icon={<><Button /><Button /></>}/>
              </Row>
              </Col>
                <Col>
                <Row>
  
                {reports.map((report, key)=>(
                  <Col xl='6' key={key}>
                    <Card className="mini-stats-wid">
                      <CardBody>
                        <div className="d-flex">
                          <div className=" justify-evenly">
                          <p className="text-muted fw-medium">
                                {report.title}
                              </p>
                             
                              <h5 className="mb-0">{report.description}</h5>
                           
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
                </Row>
              
                <Navcards index={broadcast}  Heading="Broadcast" icon={<><Button /><Button /></>}/>
                <Navcards index={event}  Heading="Organise Your Sport Event" />
                <Navcards index={connect}  Heading="Connect" icon={<><Button /><Button /></>}/>
                <Navcards index={fitness}  Heading="Fitness $ Health" icon={<><Button /><Button /></>}/>
                {/* <Navcards  Heading="Activity" icon={<><Button /><Button /></>}/> */}
                <Navcards index={fwgbm}  Heading="FWG School BM" icon={<><Button /><Button /></>}/>
                </Col>
            </Row>
                {/* <Navcards index={competition}  Heading={<h2 className='  text-danger'> FW Comptitions </h2>} icon={<><Button /><Button /></>}/> */}
                
  
  
            </Container>
            <Row className='text-center mb-3 rounded mx-1 bg-info my-2'>
             <Col className='text-center py-5'>
              <div className=" my-5 py-5">
  
               Advertisment Contents
              </div>
             </Col>
            </Row>
            
    </div>
    </React.Fragment>
  )
}

Dashboard.propTypes = {
    t: PropTypes.any,
    chartsData: PropTypes.any,
    onGetChartsData: PropTypes.func,
  }
  export default withTranslation()(Dashboard)
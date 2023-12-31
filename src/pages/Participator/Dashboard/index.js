import Breadcrumb from 'components/Common/Breadcrumb'
import React from 'react'
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap'
import PropTypes from "prop-types"
//i18n
import { withTranslation } from "react-i18next"
import WelcomeComp from "components/Common/WelcomeComp"
import Navcards from 'components/Common/Navcards'
import {event, competition,inetrSchool, national,reports,connect,post, fitness,support, app,fwgbm} from '../../../common/data/'
import Participatar from './Participatar'
import {indivisual} from '../../../common/data/participatar'

import Activity from './Activity'
import Posts from './Posts'
import Comments from './Comments'
import PopularPost from './PopularPost'


const kyc =[
  { title: "Personal", iconClass: "bx-copy-alt", description: <Participatar type={indivisual}/> },
  { title: "Bussiness", iconClass: "bx-copy-alt", description: <Participatar type={'Business'} />  },
  { title: "Account", iconClass: "bx-copy-alt", description: <Participatar />  },
  
]
const broadcast =[
  { title: "Whatsapp", iconClass: "bx-copy-alt", description: "Whatspp messages" },
  { title: "SMS Message", iconClass: "bx-copy-alt", description: "Sms List" },
  { title: "Email", iconClass: "bx-copy-alt", description: "Email Accounts" },
  
]


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
                <Navcards index={kyc}  Heading="KYC Details" icon={<><Button /><Button /></>}/>
                </Col>
                <Col>
                <Activity heading='National Comptition'/>
             
                <Activity heading='Inter School'/>
                 
                </Col>
              </Row>
              <Row>
                <Col>
                <Posts heading={'Post'}/>
                {/* <Navcards index={post}  Heading="Post" icon={<><Button /><Button /></>}/> */}
                </Col>
                <Col>
                <Comments />
                {/* <Navcards   Heading="Comments" icon={<><Button /><Button /></>}/> */}
                </Col>
              </Row>
             
              </Col>
                <Col>
                <Row>
  
                {reports.map((report, key)=>(
                  <Col xl='6' key={key}>
                    <Card className="mini-stats-wid ">
                      <CardBody className='m-1 p-0'>
                        <div className="d-flex">
                          <div className=" justify-evenly">
                          <p className="text-muted fw-small">
                                {report.title}
                              </p>
                             
                              <h5 className="mb-0 ">{report.description}</h5>
                           
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
                </Row>
              
                <Posts heading='Broadcast'/>
                <Posts heading='Organise  Event'/>
               
                <Posts heading='Connect'/>
                <Posts heading='Fitness & Health'/>
                
                
                  
                {/* <Navcards index={fwgbm}  Heading="FWG School BM" icon={<><Button /><Button /></>}/> */}
                </Col>
            </Row>
            <Row>
              <Col lg={8}>
                <PopularPost heading='Help & Support'/>
              </Col>
              <Col lg={4}>
              <Activity heading='Activity'/>
              </Col>
              </Row>
              <Row>
              <Col lg={8}>

                <PopularPost heading='Other Utility App'/>
                </Col>
             <Col lg={4}>
                  <Activity heading='FWG School'/>
             </Col>
                
              </Row>
                
  
  
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
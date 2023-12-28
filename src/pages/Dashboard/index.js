import PropTypes from "prop-types"
import React from "react"
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap"


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//i18n
import { withTranslation } from "react-i18next"
import { useNavigate } from "react-router"
import WelcomeComp from "./WelcomeComp"
import Navcards from "./Navcards"
const Dashboard = props => {
  //meta title
  document.title = "Dashboard | Admin"

  const [roleType, setRoleType] = React.useState([])

  React.useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"))
    setRoleType(userData.role.type)
  }, [])

  // console.log("Admin dash", roleType)
  
  // if(roleType !== "Admin"){
  //     const nav = useNavigate()
  //     nav('/error')
  const reports = [
    { title: "Community Status", iconClass: "bx-copy-alt", description: "$1,235" },
    {
      title: "ASSOCIATION STATUS",
      iconClass: "bx-purchase-tag-alt",
      description: "$16.2",
    },
    { title: "Election Selection", iconClass: "bx-copy-alt", description: "$1,232" },
    {
      title: "SHOPPING STATUS",
      iconClass: "bx-purchase-tag-alt",
      description: "$16.2",
    },
    { title: "HIRE PROFESSIONALS", iconClass: "bx-archive-in", description: "$35, 723" },
    { title: "POST ADVERTISEMENT", iconClass: "bx-archive-in", description: "$35, 723" },
  
  ]
  // }
  const national =[
    { title: "City", iconClass: "bx-copy-alt", description: "City" },
    { title: "State", iconClass: "bx-copy-alt", description: "State" },
    { title: "National", iconClass: "bx-copy-alt", description: "National" },
    
  ]
  const inetrSchool =[
    { title: "10", iconClass: "bx-copy-alt", description: "Age is 10" },
    { title: "12", iconClass: "bx-copy-alt", description: "Age is 12" },
    { title: "14 ", iconClass: "bx-copy-alt", description: "Age is 14" },
    { title: "16", iconClass: "bx-copy-alt", description: "Age is 16" },
    { title: "18", iconClass: "bx-copy-alt", description: "Age is 18" },
    
  ]
  const event =[
    { title: "EventList", iconClass: "bx-copy-alt", description: "Event lists" },
    { title: "Sports List", iconClass: "bx-copy-alt", description: "sports lists" },
    { title: "", iconClass: "bx-copy-alt", description: "Email Accounts" },
    
  ]

  return (
    <React.Fragment>
        <div className="page-content">
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs
              title={props.t("Dashboards")}
              breadcrumbItem={props.t("Dashboard")}
            />
          </Container>
             <Row className='text-center mb-3 rounded- bg-info my-2'>
              <Col className='text-center py-5'>
              <div className="my-5 py-5">

            Advertisment Contents
              </div>
              </Col>
          </Row>
          <Container>
            
          <Row>
            <Col lg='7'>
            <WelcomeComp/>
            <Row>
              <Col>
              <Navcards index={national}  Heading="FWG National" icon={<><Button /><Button /></>}/>
              </Col>
              <Col>
                <Navcards index={inetrSchool}  Heading="FWG InterSchool" icon={<><Button /><Button /></>}/>
              </Col>
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
            
              <Navcards index={event}  Heading="Organise Your Sport Event" icon={<><Button /><Button /></>}/>
              </Col>
          </Row>


          </Container>
          <Row className='text-center mb-3 rounded- bg-info my-2'>
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

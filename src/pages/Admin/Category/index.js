import React, { useEffect, useMemo, useState } from "react"
import Breadcrumb from "../../../components/Common/Breadcrumb"
import { Card, CardBody, CardTitle, Col,Container,NavItem,NavLink, Row, TabContent,TabPane,} from "reactstrap"
import classNames from "classnames"
import BenefitsCategory from "./Options/BenefitsCategory"
import EquipmentCategory from "./Options/EquipmentCategory"
import ModalityCategory from "./Options/ModalityCategory"
import PerformanceTagCategory from "./Options/PerformanceTagCategory"
import MuscleCategory from "./Options/MuscleCategory"
function Index() {
  const [activeTabVartical, setToggleTabVertical] = useState(1)
  const [passedStepsVertical, setPassedStepsVertical] = useState([1])
  const toggleTabVertical = tab => {
    if (tab >= 1 && tab <= 7) {
      setToggleTabVertical(tab)
      setPassedStepsVertical([...passedStepsVertical, tab])
    }
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="fwgames" breadcrumbItem="hyposports" />
              <Row>
                <Col lg="12">
                  <Card>
                    <CardBody>
                      <CardTitle className="h4 mb-4">
                        <h4>Add Category</h4>
                      </CardTitle>
                      <div className="vertical-wizard wizard clearfix vertical">
                        <div className="steps clearfix ">
                          <ul>
                            {[1, 2, 3, 4, 5].map(tab => (
                              <NavItem
                                key={tab}
                                className={classNames({
                                  current: activeTabVartical === tab,
                                })}
                              >
                                <NavLink
                                  className={classNames({
                                    active: activeTabVartical === tab,
                                  })}
                                  onClick={() => {
                                    toggleTabVertical(tab)
                                  }}
                                >
                                  <span className="number">{tab}.</span>
                                  <span className="font-size-10">
                                    {getTabLabel(tab)}
                                  </span>
                                </NavLink>
                              </NavItem>
                            ))}
                          </ul>
                        </div>
                        <div className="content clearfix pt-0">
                          <TabContent
                            activeTab={activeTabVartical}
                            className="body"
                          >
                            {[1, 2, 3, 4, 5].map(tab => (
                              <TabPane key={tab} tabId={tab} className="mt-0">
                                {getTabContent(tab)}
                              </TabPane>
                            ))}
                          </TabContent>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}
const getTabLabel = tab => {
  switch (tab) {
    case 1:
      return "Modality"
    case 2:
      return "Performance"
    case 3:
      return "Equipment"
    case 4:
      return "Muscle"
    case 5:
      return "Benefits"
    default:
      return ""
  }
}

const getTabContent = tab => {
  switch (tab) {
    case 1:
      return (<ModalityCategory />)
    case 2:
      return (<PerformanceTagCategory />)
    case 3:
      return (<EquipmentCategory />)
    case 4:
      return (<MuscleCategory />)
    case 5:
      return (<BenefitsCategory />)
    default:
      return null
  }
}

export default Index

import React, { useEffect, useMemo, useState } from "react"
import Breadcrumb from "../../../components/Common/Breadcrumb"
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  Row,
  Spinner,
  TabContent,
  TabPane,
} from "reactstrap"
import classNames from "classnames"
import Select from "react-select"
import { Link, TabContainer, TabLink, TabPanel } from "react-router-dom"
import TableContainer from "components/Common/TableContainer"

import Category from "./Category"
import BenefitsCategory from "./Options/BenefitsCategory"
import EquipmentCategory from "./Options/EquipmentCategory"
import ExcerciseNameCategory from "./Options/ExcerciseNameCategory"
import ExerciseDescriptionCategory from "./Options/ExerciseDescriptionCategory"
import ModalityCategory from "./Options/ModalityCategory"
import PerformanceTagCategory from "./Options/PerformanceTagCategory"
import MuscleCategory from "./Options/MuscleCategory"

function Index() {
  const [loading, setLoading] = useState(false)
  const [activeTabVartical, setToggleTabVertical] = useState(1)
  const [passedStepsVertical, setPassedStepsVertical] = useState([1])

  const [selectedMulti, setselectedMulti] = useState(null)
  const [activeTab, setactiveTab] = useState(1)
  const [verticalActiveTab, setVerticalActiveTab] = useState("1")

  const toggleTabVertical = tab => {
    if (tab >= 1 && tab <= 7) {
      setToggleTabVertical(tab)
      setPassedStepsVertical([...passedStepsVertical, tab])
    }
  }

  useEffect(() => {
    loadings()
  }, [])

  const loadings = () => {
    // Add your loading logic here
  }

  const handleMulti = selectedMulti => {
    setselectedMulti(selectedMulti)
  }

  const [selectedGroup, setselectedGroup] = useState(null)

  const handleSelectGroup = selectedGroup => {
    setselectedGroup(selectedGroup)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="fwgames" breadcrumbItem="hyposports" />

          {loading ? (
            <>
              <Spinner color="success"></Spinner>
              <Spinner color="success"></Spinner>
            </>
          ) : (
            <>
              <Row></Row>
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
                        <div className="content clearfix">
                          <TabContent
                            activeTab={activeTabVartical}
                            className="body"
                          >
                            {[1, 2, 3, 4, 5].map(tab => (
                              <TabPane key={tab} tabId={tab}>
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
            </>
          )}
        </Container>
      </div>
    </React.Fragment>
  )
}

// Helper functions to get tab labels and content
const getTabLabel = tab => {
  switch (tab) {
    // case 1:
    //   return "Exercise"
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
    // case 7:
    //   return "Description"
    default:
      return ""
  }
}

const getTabContent = tab => {
  switch (tab) {
    // case 1:
    //   return (
    //     <Card>
    //       <ExcerciseNameCategory />
    //     </Card>
    //   )
    case 1:
      return (
        <Card>
          <ModalityCategory />
        </Card>
      )
    case 2:
      return (
        <Card>
          <PerformanceTagCategory />
        </Card>
      )
    case 3:
      return (
        <Card>
          <EquipmentCategory />
        </Card>
      )
    case 4:
      return (
        <Card>
          <MuscleCategory />
        </Card>
      )
    case 5:
      return (
        <Card>
          <BenefitsCategory />
        </Card>
      )
    // case 7:
    //   return (
    //     <Card>
    //       <ExerciseDescriptionCategory />
    //     </Card>
    //   )
    // case 8:
    //   return (
    //     <div className="row justify-content-center">
    //       <Col lg="6">
    //         <div className="text-center">
    //           <div className="mb-4">
    //             <i className="mdi mdi-check-circle-outline text-success display-4" />
    //           </div>
    //           <div>
    //             <h5>Confirm Detail</h5>
    //             <p className="text-muted">
    //               If several languages coalesce, the grammar of the resulting
    //             </p>
    //           </div>
    //         </div>
    //       </Col>
    //     </div>
    //   )
    default:
      return null
  }
}

export default Index

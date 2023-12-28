import React from "react"
import { Container, Row } from "reactstrap"
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import CreateCompetition from "./CreateCompetition"

const index = () => {
  document.title = "Competition List | Community"

  return (
    <React.Fragment>
      <div className="page-content">
        <CreateCompetition />
      </div>
    </React.Fragment>
  )
}

export default index

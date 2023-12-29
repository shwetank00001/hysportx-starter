import React from "react"
import { Container, Row } from "reactstrap"
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import Participator from "./participator"

const index = () => {
  document.title = "Participator List | Community"

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Breadcrumbs title="Participator" breadcrumbItem="Requests" />
          <Participator />
        </div>
     </Container>

    </React.Fragment>
  )
}


export default index

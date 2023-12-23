import React from "react"
import { Container,Row } from "reactstrap"
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import Participator from "./participator"

const index = () => {
    document.title = "Participator List | Community"

  return (
    <React.Fragment>
        <div className="page-content">
            <Participator/>
        </div>

    </React.Fragment>
  )
}


export default index

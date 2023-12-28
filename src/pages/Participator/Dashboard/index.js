import Breadcrumb from 'components/Common/Breadcrumb'
import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from "prop-types"
//i18n
import { withTranslation } from "react-i18next"


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
            <div>Participator</div>
        </Container>
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
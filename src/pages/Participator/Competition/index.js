import Breadcrumb from 'components/Common/Breadcrumb'
import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from "prop-types"
//i18n
import { withTranslation } from "react-i18next"



const Competition = props => {
  return (
    <React.Fragment>
    <div className="page-content">
        <Container fluid>
           {/* Render Breadcrumb */}
           <Breadcrumb
              title={props.t("Participator")}
              breadcrumbItem={props.t("Competition")}
            />
            
        </Container>
    </div>
    </React.Fragment>
  )
}
Competition.propTypes = {
    t: PropTypes.any,
    chartsData: PropTypes.any,
    onGetChartsData: PropTypes.func,
  }
export default withTranslation()(Competition)
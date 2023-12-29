import Breadcrumb from 'components/Common/Breadcrumb'
import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from "prop-types"
//i18n
import { withTranslation } from "react-i18next"



const Profile = props => {
  return (
    <React.Fragment>
    <div className="page-content">
        <Container fluid>
           {/* Render Breadcrumb */}
           <Breadcrumb
              title={props.t("Profile")}
              breadcrumbItem={props.t("Profile")}
            />
            
        </Container>
    </div>
    </React.Fragment>
  )
}
Profile.propTypes = {
    t: PropTypes.any,
    chartsData: PropTypes.any,
    onGetChartsData: PropTypes.func,
  }
export default withTranslation()(Profile)
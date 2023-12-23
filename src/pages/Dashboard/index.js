import PropTypes from "prop-types"
import React from "react"
import { Container } from "reactstrap"


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//i18n
import { withTranslation } from "react-i18next"
import { useNavigate } from "react-router"
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
  // }

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

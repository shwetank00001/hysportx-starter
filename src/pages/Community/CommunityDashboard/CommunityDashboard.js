import React from 'react'

const CommunityDashboard = () => {
    document.title = "Dashboard"

    const [roleType, setRoleType] = React.useState([])

    React.useEffect(() => {
      const userData = JSON.parse(localStorage.getItem("userData"))
      setRoleType(userData.role.type)
    }, [])

  return (
    <React.Fragment>
      <div className="page-content">
        <p>Community Dashboard Working</p>
      </div>
    </React.Fragment>
  )
}

export default CommunityDashboard
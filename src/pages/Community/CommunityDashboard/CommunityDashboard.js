import React from 'react'

const CommunityDashboard = () => {
    document.title = "Dashboard | Skote - React Admin & Dashboard Template"

    const [roleType, setRoleType] = React.useState([])

    React.useEffect(() => {
      const userData = JSON.parse(localStorage.getItem("userData"))
      setRoleType(userData.role.type)
    }, [])

    console.log("Admin dash", roleType)

    if (roleType !== "Admin") {
      const nav = useNavigate()
      nav("/error")
    }
  return (
    <React.Fragment>
      <div className="page-content">
        <p>Community Dashboard Working</p>
      </div>
    </React.Fragment>
  )
}

export default CommunityDashboard
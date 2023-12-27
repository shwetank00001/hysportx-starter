import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { get, setToken } from "../helpers/api_helper";
import Spinners from "components/Common/Spinner";
import NotFound from "pages/Errors/NotFound";



export const Authmiddleware = ({ user, children }) => {
  const [isLoading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userRoleType, setUserRoleType] = useState();
  useEffect(() => {
    const checkAuthentication = async () => {
      if (localStorage.getItem("_token")) {
        let token = localStorage.getItem("_token");
        setToken(token);
        try {
          let response=await get("/validate");
          if (response.message=='authenticated') {        
            setUserRoleType(response.data.user.role.type);
            localStorage.setItem('userData',JSON.stringify(response.data.user));
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem("_token");
            localStorage.removeItem("userData");
            setIsAuthenticated(false);
          }
        } catch (error) {
          localStorage.removeItem("_token");
          localStorage.removeItem("userData");
          setIsAuthenticated(false);
        }
      } else setIsAuthenticated(false);
    };

    checkAuthentication();
  }, []);

  if (isAuthenticated === null) 
    return  (  isLoading ? <Spinners setLoading={setLoading} />: "Loading....");
  else if (isAuthenticated) {
    return  (user === userRoleType)? <React.Fragment>{children}</React.Fragment>:<NotFound/>;
  }
  else return ( <Navigate to={{ pathname: "/" }} /> );
};

export const GuestMiddleware = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userRoleType, setUserRoleType] = useState();
  useEffect(() => {
    const checkAuthentication = async () => {
      if (localStorage.getItem("_token")) {
        let token = localStorage.getItem("_token");
        setToken(token);
        try {
          let response = await get("/validate");
          setUserRoleType(response.data.user.role.type);
          setIsAuthenticated(true);
        } catch (error) {
          setIsAuthenticated(false);
        }
      } else setIsAuthenticated(false);
    };

    checkAuthentication();
  }, []);

  if (isAuthenticated === null) return (  isLoading ? <Spinners setLoading={setLoading} />: "Loading...")
  else if (isAuthenticated) return ( <Navigate to={{ pathname: userRoleType +"/dashboard", state: { from: props.location } }} /> );
  else return <React.Fragment>{props.children}</React.Fragment>;
  
};





// const RoleMiddleware = (props, roleType) => {
//   const token = localStorage.getItem("_token")
//   const user = JSON.parse(localStorage.getItem("user"))

//   if (token && user.role.role_type.toLowerCase() === roleType.toLowerCase()) {
//     return <React.Fragment>{props.children}</React.Fragment>
//   }

//   return (
//     <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
//   )
// }


// const Adminmiddleware = props => RoleMiddleware(props, "admin")
// const Communitymiddleware = props => RoleMiddleware(props, "community")
// const Participatormiddleware = props => RoleMiddleware(props, "participator")
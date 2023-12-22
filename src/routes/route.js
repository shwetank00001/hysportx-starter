import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { get, setToken } from "../helpers/api_helper";
import Spinners from "components/Common/Spinner";



export const Authmiddleware = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    const checkAuthentication = async () => {
      if (localStorage.getItem("_token")) {
        let token = localStorage.getItem("_token");
        setToken(token);
        try {
          let response=await get("/validate");
          if (response.message=='authenticated') {        
            localStorage.setItem('userData',JSON.stringify(response.data.user));
            console.log({"data": response.data.user})
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

  if (isAuthenticated === null) return  (  isLoading ? <Spinners setLoading={setLoading} />: 'Loding....');
  else if (isAuthenticated) return <React.Fragment>{props.children}</React.Fragment>;
  else return ( <Navigate to={{ pathname: "/", state: { from: props.location } }} /> );
};

export const GuestMiddleware = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    const checkAuthentication = async () => {
      if (localStorage.getItem("_token")) {
        let token = localStorage.getItem("_token");
        setToken(token);
        try {
          await get("/validate");
          setIsAuthenticated(true);
        } catch (error) {
          setIsAuthenticated(false);
        }
      } else setIsAuthenticated(false);
    };

    checkAuthentication();
  }, []);

  if (isAuthenticated === null) return (  isLoading ? <Spinners setLoading={setLoading} />: 'Loding....')
  else if (isAuthenticated) return ( <Navigate to={{ pathname: "/dashboard", state: { from: props.location } }} /> );
  else return <React.Fragment>{props.children}</React.Fragment>;
  
};

export const Communitymiddleware = (props) => {

}




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
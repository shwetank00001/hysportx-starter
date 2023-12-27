import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { get, setToken } from "../helpers/api_helper";
import Spinners from "components/Common/Spinner";
import NotFound from "pages/Errors/NotFound";
import { toast } from "react-toastify";


const validate = async (s, u) => {
  const t = localStorage.getItem('_token');
  if (t) {
    setToken(t);
    try {
      const response = await get('/validate');
      const userData = response.data.user;
      localStorage.setItem('userData', JSON.stringify(userData));
      s(response.message === 'authenticated');
      u(userData.role.type);
    } catch (error) {
      s(false);
      localStorage.removeItem('_token');
      localStorage.removeItem('user');
      toast.error(`Session time out: ${error.response.data.message}`, { autoClose: 2000 });
    }
  } else {
    s(false);
  }
};

export const Authmiddleware = ({ user, children }) => {
  const [tokenIsValid,setTokenIsValid] = useState(null);
  const [loading,setLoading] = useState(true);
  const [userRoleType, setUserRoleType] = useState();
<<<<<<< HEAD
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
=======
  useEffect(() => {validate(setTokenIsValid,setUserRoleType);}, []);
  return (tokenIsValid)?((user === userRoleType)? <React.Fragment>{children}</React.Fragment>:<NotFound/>)
  :((tokenIsValid === null)?(<Spinners setLoading={setLoading}></Spinners>):(<Navigate to={{ pathname: "/"}} />));
>>>>>>> a794b97e0978fbe8b1ab7f8c23e5e8edf3769f0a
};

export const GuestMiddleware = (props) => {
  const [tokenIsValid,setTokenIsValid] = useState(null);
  const [loading,setLoading] = useState(true);
  const [userRoleType, setUserRoleType] = useState();
  useEffect(() => {validate(setTokenIsValid,setUserRoleType);}, []);

<<<<<<< HEAD
    checkAuthentication();
  }, []);

  if (isAuthenticated === null) return (  isLoading ? <Spinners setLoading={setLoading} />: "Loading...")
  else if (isAuthenticated) return ( <Navigate to={{ pathname: userRoleType +"/dashboard", state: { from: props.location } }} /> );
  else return <React.Fragment>{props.children}</React.Fragment>;
  
=======
  return (tokenIsValid)
  ?(<Navigate to={{ pathname: userRoleType +"/dashboard" }} />)
  :((tokenIsValid == null)?(<Spinners setLoading={setLoading}></Spinners>):(<React.Fragment> {props.children} </React.Fragment>));  
>>>>>>> a794b97e0978fbe8b1ab7f8c23e5e8edf3769f0a
};

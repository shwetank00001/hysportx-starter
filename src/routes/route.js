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
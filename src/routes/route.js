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

  useEffect(() => {validate(setTokenIsValid,setUserRoleType);}, []);
  return (tokenIsValid)?((user === userRoleType)? <React.Fragment>{children}</React.Fragment>:<NotFound/>)
  :((tokenIsValid === null)?(<Spinners setLoading={setLoading}></Spinners>):(<Navigate to={{ pathname: "/"}} />));

};

export const GuestMiddleware = (props) => {
  const [tokenIsValid,setTokenIsValid] = useState(null);
  const [loading,setLoading] = useState(true);
  const [userRoleType, setUserRoleType] = useState();
  useEffect(() => {validate(setTokenIsValid,setUserRoleType);}, []);

  return (tokenIsValid)
  ?(<Navigate to={{ pathname: userRoleType +"/dashboard" }} />)
  :((tokenIsValid == null)?(<Spinners setLoading={setLoading}></Spinners>):(<React.Fragment> {props.children} </React.Fragment>));  
};

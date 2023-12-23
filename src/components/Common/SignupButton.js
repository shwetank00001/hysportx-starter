import React from 'react'
import { Button } from 'reactstrap'
import { Link } from "react-router-dom";
export const SignupButton = () => {
  function signup() {
    window.location.href = "https://hysportx.com/application/login";
  }
  return (
    <React.Fragment>
    
        <Link
            className="btn btn-light"
          color="success"
          outline
          onClick={signup}>
        <i className='bx bx-lock-alt'  />  Sign Up
        </Link>
      
    </React.Fragment>
  )
}

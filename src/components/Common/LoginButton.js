import React from 'react'
import { Button } from 'reactstrap'
export const LoginButton = () => {
  function login() {
    window.location.href = "https://hysportx.com/application/login";
  }
  return (
    <React.Fragment>
    
        <Button
        className=''
          color="success"
          outline
          onClick={login}>
        <i className='bx bx-lock-alt'  />  Login
        </Button>
      
    </React.Fragment>
  )
}

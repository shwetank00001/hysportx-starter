import React from 'react'
import { Button } from 'reactstrap'
export const LoginButton = () => {
  function login() {
    window.location.href = "https://hysportx.com/application/login";
  }
  return (
    <React.Fragment>
      <div className="ms-lg-2">
        <Button
          color="success"
          outline
          onClick={login}>
          Login
        </Button>
      </div>
    </React.Fragment>
  )
}

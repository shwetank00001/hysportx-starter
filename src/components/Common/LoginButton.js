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
<<<<<<< HEAD
        <i className='bx bx-lock-alt'  />  Login
=======
        <i className='bx bx-lock-alt'  />  Log In
>>>>>>> e8dffe4ad0634a3a61bb6c947478f40b24ce2dd2
        </Button>
      
    </React.Fragment>
  )
}

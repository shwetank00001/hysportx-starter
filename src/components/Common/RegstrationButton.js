import React from 'react'
import { Button } from 'reactstrap'
export const RegstrationButton = () => {
  // function login() {
  //   window.location.href = "https://hysportx.com/application/login";
  // }
  return (
    <React.Fragment>
      
        <Button
       className="btn btn-soft-success waves-effect waves-light"
          // onClick={login}
          >
         <i className='bx bxs-user-minus' /> SignIn
        </Button>
      
    </React.Fragment>
  )
}

import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import avatar1 from "../../assets/images/users/avatar-1.jpg"
import profileImg from "../../assets/images/profile-img.png"



function ProfileCard() {


  return (
    <Card color='primary' className=''>
  

              <div className="avatar-md mt-2 mx-auto">
                <img
                  src={avatar1}
                  alt=""
                  className="img-thumbnail rounded-circle"
                />
                
              
              <h4 className="font-size-15 text-truncate">Admin Trate</h4>
              <h5 className="font-size-15 text-truncate">Developer</h5>
              <div className='d-flex gap-1'>
                <div>California</div>
                <div>California</div>
              </div>
              </div>
                <div>California</div>
  
              {/* <p className="text-muted mb-0 text-truncate">UI/UX Designer</p> */}
            {/* </Col> */}

    </Card>
  )
}

export default ProfileCard
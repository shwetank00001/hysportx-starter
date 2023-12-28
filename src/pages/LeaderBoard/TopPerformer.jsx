import React from 'react'
import { Card, Col, Row, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap'
import images from 'assets/images/crypto/blog/img-2.jpg'
// import img from 'assets/images/crypto/open.jpg'
import img from '../../assets/images/crypto/open.jpg'
function TopPerformer({sports}) {
  return (
    <>
   
           
           <Col lg={12}>
             <Card >
               <Row>
              <Col lg={12} className='mx-0 px-0'>
               <CardImg height='auto' className="fluid  mx-0 " src={img} alt="2000*2000" />
              </Col>
              {/* <Col lg={6} className='mx-0 px-0'>
               <CardImg height='auto' className="img-fluid  mx-0" src={images} alt="200*200" />
              </Col> */}
               </Row>
                 
             
               <CardImgOverlay  className=' fluid mt-5' >
               {/* #leaderboardSponsorVisible > div > div.hero-bg > div > div.heading-text */}
                 <CardTitle className="text-white  mt-5 heading-text mt-0"><h1  style={{fontSize:'5vw'}} ><b>Leader Board</b></h1></CardTitle>
                 <CardText className="text-warning text-start bottom-0 position-absolute   mt-5">
                   <div>
                     <h3 style={{fontSize:'5vw'}} className='text-danger  text-center mx-auto  mb-5'>{sports}</h3>
                     <h1>Jennifer Chang</h1>
                     <h4>2023 Champion Ship</h4>
                     <span className='text-danger'>Singapore</span>
                     <div>

                       <span>
                         At Malasiya Champion Ship
                      </span>
                     </div>
                     
                  
                   </div>
                 </CardText>
                 <CardText className='text-center'>
                     <h2>2023 Champion Ship</h2>
                 </CardText>
               </CardImgOverlay>
                   {/* <small className="text-success position-absolute bottom-0 right-0 me-5  text-end ">
                     <h2>2023 Champion Ship</h2>
                   <p>
                  At Malasiya Champion Ship
                  </p>
                   </small> */}
             </Card>
           </Col>
        
    </>
  )
}

export default TopPerformer
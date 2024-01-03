import React, { useState } from 'react'
import { Card, CardText, Col, Row } from 'reactstrap'

function Kyc({data}) {
    const [kyc, setKyc] = useState([])

       setKyc([...data])
   
  return (
  
    <CardText className='my-2'>
        {kyc.map((i)=>
       <Row key={i} className='d-flex my-1 p-0'>
       <div style={{width:'100%'}} className='d-flex  my-0 p-0'>

       {/* <div className='mx-1' >

          <i className="fas fa-caret-right d-block  align-middle m-0 p-0  "></i>
       </div> */}
     <div className='m-0 p-0 d-flex' style={{fontSize:'10px', width:'90%'}}>
      <Row className='' style={{width:'100%'}} xl={12}>
       <Col  className='m-0 py-0' xl={6}>
       <div style={{width:'100%'}} >
       <b>

       {i.title}
       </b>
      </div>
       </Col>
     <Col xl={6}>
       <div style={{fontSize:'10px', width:'100%'}} className='mx-0 mt-0 p-0'>{i.data}</div>
     </Col>
     <hr/>
      </Row>
        </div>
       </div>
      </Row>
           )}
      
    </CardText>
  )

}

export default Kyc
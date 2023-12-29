import React from 'react'
import { Button, Card, CardHeader, CardText, Col, Row } from 'reactstrap'

function PresentAddress() {
    const social =[
        {title:'Address :', data :'Check the address here if address Is big than it wil'},
        {title:'City :', data :'Delhi'},
        {title:'Pincode :', data :'208001'},
        {title:'District :', data :'New Delhi'},
        {title:'State :', data :'Uttar Pradesh'},
        {title:'Country :', data :'India'},
       
    ] 
  return (
    <Card color=' '>
    <CardHeader className=' d-flex justify-content-between mt-1 card-soft-primary waves-effect waves-light  m-0 py-1'>
        <h6 className='d-flex gap-1' style={{color:'blue'}}><i className="mdi mdi-eye-outline d-block  align-middle  "></i>Present Address</h6>
    <Button className=' m-0 py-0 px-1 btn-soft-success  waves-effect waves-light' ><i className="mdi mdi-pencil text-primary d-block "></i></Button>
    </CardHeader>
    <CardText>
        {social.map((i)=>
       <Row key={i} className='d-flex'>
        <div style={{width:'100%'}} className='d-flex gap-2 mx-4 my-0 p-0'>

        <div className='mx-1'>

           <i className="fas fa-caret-right d-block  align-middle m-0 p-0  "></i>
        </div>
      <div className='m-0 p-0 d-flex' style={{fontSize:'10px', width:'90%'}}>
       <Row className='' style={{width:'100%'}} xl={12}>
        <Col xl={6} >
       <div style={{width:'100%'}}>
      
        {i.title}
       </div>
        </Col>
      <Col xl={6} className='m-0 p-0'>
        <div style={{fontSize:'10px'}} className='mx-0 mt-0 p-0'>{i.data}</div>
      </Col>
       </Row>
         </div>
        </div>
       </Row>
           )}
      
    </CardText>
</Card>
  )
}

export default PresentAddress
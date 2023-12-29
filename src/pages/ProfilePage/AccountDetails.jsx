import React from 'react'
import { Button, Card, CardHeader, CardText, Col, Row } from 'reactstrap'



function AccountDetails({data}) {
  const social =[
    {title:'Bank Name : ', data :'Punjab National Bank'},
    {title:'IFSC Code :', data :'PUNB010008'},
    {title:'Account Number :', data :'123456789101112'},
    {title:'Bank Address Branch : ', data :'California, United States'},
    {title:'UPI ID :', data :'7678597421@PAYTM'},
    
] 
  return (
    <Card color=' m-1'>
    <CardHeader className=' d-flex justify-content-between  card-soft-primary waves-effect waves-light  m-0 py-1 px-2'>
        <h6 className='d-flex gap-1' style={{color:'blue'}}><i className="mdi mdi-eye-outline d-block  align-middle  "></i>Account Detail</h6>
    <Button className=' m-0 py-0 px-1 btn-soft-success  waves-effect waves-light' ><i className="mdi mdi-pencil text-primary d-block "></i></Button>
    </CardHeader>
    <CardText>
        {social.map((i)=>
       <Row key={i} className='d-flex m-0 p-0'>
       <div style={{width:'100%'}} className='d-flex  my-0 p-0'>

       <div className='mx-1' >

          <i className="fas fa-caret-right d-block  align-middle m-0 p-0  "></i>
       </div>
     <div className='m-0 p-0 d-flex' style={{fontSize:'8px', width:'90%'}}>
      <Row className='' style={{width:'100%'}} xl={12}>
       <Col  className='m-0 py-0' xl={6}>
       <div style={{width:'100%'}} >

       {i.title}
      </div>
       </Col>
     <Col xl={6}>
       <div style={{fontSize:'10px', width:'100%'}} className='mx-0 mt-0 p-0'>{i.data}</div>
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

export default AccountDetails
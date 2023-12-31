import React, { useEffect, useState } from 'react'
// import { LoadingIndicator } from 'react-select/dist/declarations/src/components/indicators'
import { Col, Row } from 'reactstrap'
import{indivisual} from '../../../common/data/participatar'


function Participatar({type}) {
  const [data, setdata] = useState([])
  // setdata(indivisual)
  // useEffect(() => {
    
 
   
  // }, [])
  
  const social =[
    
    {title:'Full Name : ', data :'Punjab National Bank'},
    {title:'Mobile :', data :'PUNB010008'},
    {title:'Email :', data :'123456789101112'},
    {title:'Location : ', data :'California, United States'},
    {title:'Full Name : ', data :'Punjab National Bank'},
    {title:'Mobile :', data :'PUNB010008'},
    {title:'Email :', data :'123456789101112'},
    {title:'Location : ', data :'California, United States'},
    {title:'Full Name : ', data :'Punjab National Bank'},
    {title:'Mobile :', data :'PUNB010008'},
    {title:'Email :', data :'123456789101112'},
    {title:'Location : ', data :'California, United States'},
    {title:'Full Name : ', data :'Punjab National Bank'},
    {title:'Mobile :', data :'PUNB010008'},
    {title:'Email :', data :'123456789101112'},
    {title:'Location : ', data :'California, United States'},
    {title:'Location : ', data :'California, United States'},
    {title:'Full Name : ', data :'Punjab National Bank'},
    {title:'Mobile :', data :'PUNB010008'},
    {title:'Email :', data :'123456789101112'},
    {title:'Location : ', data :'California, United States'},
    
  ] 



  return (
 <div>
     {data ? <>
    {social.map((i)=>
   <Row key={i} className='d-flex my-1 mx-1 p-0'>
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
  </Row>
  <hr/>
    </div>
   </div>
  </Row>
       )}</> :''}
  

     </div>
  )
  
}

export default Participatar
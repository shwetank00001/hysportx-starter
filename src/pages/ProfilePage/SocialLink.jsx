import React from 'react'
import { Button, Card, CardHeader, CardText, Row } from 'reactstrap'

function SocialLink() {
    const social =[
        {title:'Instagram :', data :'8957065208', icon :'fab fa-instagram'},
        {title:'Facebook :', data :'8957065208',icon : 'fab fa-facebook-square'},
        {title:'Twitter :', data :'mfu739@gmail.com', icon :'fab fa-youtube'},
        {title:'YouTube :', data :'24-04-2004', icon :'fab fa-youtube'},
        {title:'Linkedin :', data :'Male', icon:'fab fa-skype'},
        {title:'Skype :', data :'171', icon:'fab fa-skype'},
        {title:'Website :', data :'65', icon: 'fas fa-globe-americas'},
       
    ] 
  return (
    
    <Card color=' m-1'>
    <CardHeader className=' d-flex mt-1 justify-content-between  card-soft-primary waves-effect waves-light  mx-0 py-1 px-2'>
        <h6 className='d-flex gap-1' style={{color:'blue'}}><i className="mdi mdi-eye-outline d-block  align-middle  "></i>Social Links</h6>
    <Button className=' m-0 py-0 px-1 btn-soft-success  waves-effect waves-light' ><i className="mdi mdi-pencil text-primary d-block "></i></Button>
    </CardHeader>
    <CardText>
        {social.map((i)=>
       <Row key={i} className='d-flex'>
        <div className='d-flex gap-2 mx-4 my-0 p-0'>

        <div >

           <i className={i.icon}></i>
        </div>
      <div className='m-0 p-0' style={{fontSize:'.8vw'}}>
     

        {i.title}
      
      
        <div style={{fontSize:'10px'}} className='mx-0  mt-0 p-0'><a href=''>Link</a></div>
         </div>
        </div>
       </Row>
           )}
      
    </CardText>
</Card>
  )
}

export default SocialLink
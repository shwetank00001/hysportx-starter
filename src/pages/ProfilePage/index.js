import React, { useState } from 'react'
import { Button, Card, CardTitle, Col, Container, Input, Modal, Row } from 'reactstrap'
import Breadcrumbs from "../../components/Common/Breadcrumb";
import WelcomeComp from './WelcomeComp';
import SocialLink from './SocialLink';
import PresentAddress from './PresentAddress';
import AccountDetails from './AccountDetails';
import ActivityComp from './ActivityComp';
import DatePicker from 'react-flatpickr';
import AboutMe from './AboutMe';
import ProfileCard from './ProfileCard';



function index() {
  const [modal_standard, setmodal_standard] = useState(false);
  const [modal_standard1, setmodal_standard1] = useState(false);

  function tog_standard() {
    setmodal_standard(!modal_standard);
    removeBodyCss();

  }
  function tog_standard1() {
    setmodal_standard1(!modal_standard1);
    removeBodyCss();

  }
  function removeBodyCss() {
    document.body.classList.add("no_padding");
  }

    const details =[
        {title :'User Id : manishkumarsangwan@gmail.com'},
        {title:'User Password : XXXXXXXXXXX', button :'Change Password', color:'text-danger ', onclick:''},
        {title:'Know Your Client (KYC) ', button :'Completed',color:'text-success', onclick:tog_standard1},
        {title:'Tell About You', button :'Pending',color:'text-danger', onclick : tog_standard},
        {title:'Community Registered ', button :'View', color:'text-primary', onclick:''},
        {title:'FW Games ', button :'Leaderboard', color:'text-primary', onclick:''},
        {title:'FW Sports Kutumb ', button :'Leaderboard', color:'text-primary', onclick:''},
    ]
  return (
    <>
    <React.Fragment>
    <div className="page-content">
      <Container fluid >
        {/* Render Breadcrumb */}
        <Breadcrumbs className=''
          title="Profile"
          breadcrumbItem="Profile"
          />
          </Container>
          <Row>
            <Card color='danger rounded text-center py-5'>Content</Card>
          </Row>
          <Container>
            <Row className='gap-'>
              <Col lg={4}> 
               <Row className=''>
                
                 {/* <ProfileCard/> */}
                <WelcomeComp />
               
                <Row >
                {details.map((i)=>
                <Card  className='border' key={i}>
                  <div className='d-flex text-center justify-content-between align-items-center'>
                      <div>

                    <p style={{fontSize:'11px'}} >{i.title} </p>
                      </div>
                      <div className='text-end'>

                    <h5
                     onClick={i.onclick}
                      style={{fontSize:'12px'}} className={i.color}>{i.button}</h5>
                      </div>
                    </div>
                  </Card>
                )}
              </Row>
                </Row>
              </Col>
              <Col lg={3}  className=''> 
              <div className='mx-2'>

                <Row>
                        <PresentAddress/>
                </Row>
                <Row>
                        <SocialLink/>
                </Row>
                <Row>
                        <PresentAddress/>
                </Row>
                <Row>
                        <AccountDetails/>
                </Row>
              </div>
                </Col>
              <Col lg={5}  className=''> 
               <Row>
                        
                     <AboutMe/>
               </Row>
               <Row>
                    <ActivityComp heading='Education' />
               </Row>
               <Row>
                    <ActivityComp heading='Professional Experience' />
                       
               </Row>
               <Row>
                      <Card>
                        <CardTitle className='text-primary'>Other Details</CardTitle>
                        <Row  className='mt-2 '>
                           <Col sm={5}>
                          <Card className='bg-primary-subtle font-size-10'>Current Earning : 5,00,000 Annually</Card>
                           </Col>
                           <Col sm={5}>
                          <Card className='bg-danger-subtle font-size-10'>Expecng Earning : 6,00,000 Annually</Card>
                           </Col>
                        </Row>
                      </Card>
                 </Row>
              </Col>
             
            </Row>
          
                <Modal
                      isOpen={modal_standard}
                      toggle={() => {
                        tog_standard();
                      }}
                    >
                      <div className="modal-header">
                        <h5 className="modal-title primary mt-0" id="myModalLabel">
                          About Me
                        </h5>

                        <button
                          type="button"
                          onClick={() => {
                            setmodal_standard(false);
                          }}
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                       
                       <Row className='mt-2 ' >
                        <Col xl={12} className="d-grid  gap-2  place-item-center">
                        <Row >
                          
                       </Row>
                        <Row className="d-flex flex-wrap justify-center mb-2  align-item-center">
                           <div className="col-md-12">
                            <textarea className="form-control" rows='5' placeholder='Type 250 words about yourself'>
                             {/* <option>Select User Role Category</option> */}
                             {/* <option>Large select</option> */}
                             {/* <option>Small select</option> */}
                             </textarea>
                           </div>
                       </Row>
                    
                        <Row  className='d-flex'>
                          <Col sm={4} >
                         <h2 style={{fontSize:'15px'}}>Education :</h2>
                          </Col>
                          <Col >
                         <Button className='bg-white text-danger btn-outline-danger'>Add More +</Button>
                          </Col>
                         
                        </Row>
                        <Row xl={12} className='d-flex'>
                          <Col >
                         <Input placeholder='Name Of Degree'></Input>
                          </Col>
                          <Col>
                         <Input placeholder='Name of Instuon/college/school/others'></Input>
                         {/* <Button classNam/e='bg-white text-danger'>Add More</Button> */}
                          </Col>
                         
                        </Row>
                        <Row xl={12} className='d-flex gap-3'>
                          <Col sm={4}>
                         {/* <DatePicker placeholder='Date: From' ></DatePicker> */}
                         <Input type='date' placeholder='Name of Instuon/college/school/others'></Input>
                          </Col>
                          <Col sm={4}>
                         {/* <DatePicker placeholder='Date : Till'></DatePicker> */}
                         <Input type='date' placeholder='Name of Instuon/college/school/others'></Input>
                         {/* <Button classNam/e='bg-white text-danger'>Add More</Button> */}
                          </Col>
                         </Row>
                       <Row>
                       <div className="col-md-12">
                        <Input placeholder='Descripon about your Educaon'></Input>
                       </div>
                       </Row>
                       <Row  className='d-flex '>
                          <Col  style={{fontSize:'10px'}} sm={5} >
                         <h2 className='px-1' style={{fontSize:'14px'}}>Professional Experience :</h2>
                          </Col>
                          <Col >
                         <Button className='bg-white btn-outline-danger text-danger'>Add More +</Button>
                          </Col>
                         
                        </Row>
                        <Row xl={12} className='d-flex'>
                          <Col >
                         <Input placeholder='Job Title Name :'></Input>
                          </Col>
                          <Col>
                         <Input placeholder='Company Name :'></Input>
                         {/* <Button classNam/e='bg-white text-danger'>Add More</Button> */}
                          </Col>
                         
                        </Row>
                        <Row xl={12} className='d-flex'>
                          <Col >
                         <Input placeholder='Location :'></Input>
                          </Col>
                          <Col>
                         <Input placeholder='Experience (Select Months) :'></Input>
                         {/* <Button classNam/e='bg-white text-danger'>Add More</Button> */}
                          </Col>
                          <Col>
                         <Input placeholder='Posion / Designation'></Input>
                         {/* <Button classNam/e='bg-white text-danger'>Add More</Button> */}
                          </Col>
                         
                        </Row>
                        <Row xl={12} className='d-flex'>
                          <Col sm={4} >
                        
                    {/* <label className="col-md-2 col-form-label">Select</label> */}
                    <div className="col-md-12">
                      <select className="form-control">
                        <option>Select</option>
                        <option>Large select</option>
                        <option>Small select</option>
                      </select>
                    </div>
                  
                          </Col>
                          <Col sm={4}>
                          {/* <DatePicker placeholder='Joining Date'></DatePicker> */}
                         <Input type='date' placeholder='Experience (Select Months) :'></Input>
                         {/* <Button classNam/e='bg-white text-danger'>Add More</Button> */}
                          </Col>
                          <Col sm={4}>
                          {/* <DatePicker placeholder='Leaving Date '></DatePicker> */}
                         <Input type='date' placeholder='Posion / Designation'></Input>
                         {/* <Button classNam/e='bg-white text-danger'>Add More</Button> */}
                          </Col>
                         
                        </Row>
                         <Row>
                         <div className="col-md-12">
                          <Input placeholder='Descripon about your Job Responsibilies'></Input>
                           </div>
                         </Row>
                           <Row>
                            {/* <Row className="d-flex flex-wrap justify-center mb-2  align-item-center"> */}
                            <h2 style={{fontSize:'15pxpx'}}>Key Skills :</h2>
                           <div className="col-md-12">
                            <textarea className="form-control" rows='5' placeholder='Type 250 words about yourself'>
                             {/* <option>Select User Role Category</option> */}
                             {/* <option>Large select</option> */}
                             {/* <option>Small select</option> */}
                             </textarea>
                           </div>
                             {/* </Row> */}
                           </Row>
                           <Row>
                            <h3>Others</h3>
                            <Col sm={3}>
                              <h6 style={{fontSize:'8px'}}>Your Last Earning :</h6>
                              <Input></Input>
                            </Col>
                            <Col sm={3}>
                              <h6 style={{fontSize:"8px"}}>Your Exectional Earning: </h6>
                              <Input></Input>
                            </Col>
                            <Col sm={3}>
                              <h6 style={{fontSize:"8px"}}>Select Comfortable Job </h6>
                              <div className="col-md-12">
                      <select className="form-control">
                        <option>Select</option>
                        <option>Large select</option>
                        <option>Small select</option>
                      </select>
                    </div>
                            </Col>
                            <Col sm={3}>
                              <h6 style={{fontSize:"8px"}}>How Soon You Can Jion </h6>
                              <div className="col-md-12">
                             <select className="form-control">
                              <option>Select</option>
                            <option>Large select</option>
                            <option>Small select</option>
                              </select>
                    </div>
                            </Col>
                           </Row>
                      
                      
                    
                        </Col>
                       </Row>
                       
                     
                    
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          onClick={() => {
                            tog_standard();
                          }}
                          className="btn btn-secondary "
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary "
                        >
                          Save changes
                        </button>
                      </div>
                </Modal> 
                <Modal
                      isOpen={modal_standard1}
                      toggle={() => {
                        tog_standard1();
                      }}
                    >
                      {/* <div className="modal-header">
                        <h5 className="modal-title primary mt-0" id="myModalLabel">
                          About Me
                        </h5>

                        <button
                          type="button"
                          onClick={() => {
                            setmodal_standard(false);
                          }}
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div> */}
                      <div className="modal-body">
                       
                       <Row className='mt-2 ' >
                        <Col xl={12} className="d-grid  gap-2  place-item-center">
                        <Row >
                          
                       </Row>
                        {/* <Row className="d-flex flex-wrap justify-center mb-2  align-item-center">
                           <div className="col-md-12">
                            <textarea className="form-control" rows='5' placeholder='Type 250 words about yourself'>
                             <option>Select User Role Category</option>
                             <option>Large select</option>
                             <option>Small select</option>
                             </textarea>
                           </div>
                       </Row> */}
                    
                        {/* <Row  className='d-flex'>
                          <Col sm={4} >
                         <h2 style={{fontSize:'15px'}}>Education :</h2>
                          </Col>
                          <Col >
                         <Button className='bg-white text-danger btn-outline-danger'>Add More +</Button>
                          </Col>
                         
                        </Row> */}
                        {/* <Row xl={12} className='d-flex'>
                          <Col >
                         <Input placeholder='Name Of Degree'></Input>
                          </Col>
                          <Col>
                         <Input placeholder='Name of Instuon/college/school/others'></Input>
                 
                          </Col>
                         
                        </Row> */}
                        {/* <Row xl={12} className='d-flex gap-3'>
                          <Col sm={4}>
                       
                         <Input type='date' placeholder='Name of Instuon/college/school/others'></Input>
                          </Col>
                          <Col sm={4}>
                         <DatePicker placeholder='Date : Till'></DatePicker>
                         <Input type='date' placeholder='Name of Instuon/college/school/others'></Input>

                          </Col>
                         </Row> */}
                       {/* <Row>
                       <div className="col-md-12">
                        <Input placeholder='Descripon about your Educaon'></Input>
                       </div>
                       </Row> */}
                       <Row  className='d-flex '>
                          <Col  style={{fontSize:'10px'}} sm={5} >
                         <h2 className='px-1' style={{fontSize:'14px'}}>Professional Experience :</h2>
                          </Col>
                          <Col >
                         <Button className='bg-white btn-outline-danger text-danger'>Add More +</Button>
                          </Col>
                         
                        </Row>
                        <Row xl={12} className='d-flex'>
                          <Col >
                         <Input placeholder='Job Title Name :'></Input>
                          </Col>
                          <Col>
                         <Input placeholder='Company Name :'></Input>

                          </Col>
                         
                        </Row>
                        <Row xl={12} className='d-flex'>
                          <Col >
                         <Input placeholder='Location :'></Input>
                          </Col>
                          <Col>
                         <Input placeholder='Experience (Select Months) :'></Input>

                          </Col>
                          <Col>
                         <Input placeholder='Posion / Designation'></Input>
                  </Col>
                         
                        </Row>
                        <Row xl={12} className='d-flex'>
                          <Col sm={4} >
                        
                    {/* <label className="col-md-2 col-form-label">Select</label> */}
                    <div className="col-md-12">
                      <select className="form-control">
                        <option>Select</option>
                        <option>Large select</option>
                        <option>Small select</option>
                      </select>
                    </div>
                  
                          </Col>
                          <Col sm={4}>
                          {/* <DatePicker placeholder='Joining Date'></DatePicker> */}
                         <Input type='date' placeholder='Experience (Select Months) :'></Input>
                         {/* <Button classNam/e='bg-white text-danger'>Add More</Button> */}
                          </Col>
                          <Col sm={4}>
                          {/* <DatePicker placeholder='Leaving Date '></DatePicker> */}
                         <Input type='date' placeholder='Posion / Designation'></Input>
                         {/* <Button classNam/e='bg-white text-danger'>Add More</Button> */}
                          </Col>
                         
                        </Row>
                         <Row>
                         <div className="col-md-12">
                          <Input placeholder='Descripon about your Job Responsibilies'></Input>
                           </div>
                         </Row>
                           <Row>
                            {/* <Row className="d-flex flex-wrap justify-center mb-2  align-item-center"> */}
                            <h2 style={{fontSize:'15pxpx'}}>Key Skills :</h2>
                           <div className="col-md-12">
                            <textarea className="form-control" rows='5' placeholder='Type 250 words about yourself'>
                             {/* <option>Select User Role Category</option> */}
                             {/* <option>Large select</option> */}
                             {/* <option>Small select</option> */}
                             </textarea>
                           </div>
                             {/* </Row> */}
                           </Row>
                           <Row>
                            <h3>Others</h3>
                            <Col sm={3}>
                              <h6 style={{fontSize:'8px'}}>Your Last Earning :</h6>
                              <Input></Input>
                            </Col>
                            <Col sm={3}>
                              <h6 style={{fontSize:"8px"}}>Your Exectional Earning: </h6>
                              <Input></Input>
                            </Col>
                            <Col sm={3}>
                              <h6 style={{fontSize:"8px"}}>Select Comfortable Job </h6>
                              <div className="col-md-12">
                      <select className="form-control">
                        <option>Select</option>
                        <option>Large select</option>
                        <option>Small select</option>
                      </select>
                    </div>
                            </Col>
                            <Col sm={3}>
                              <h6 style={{fontSize:"8px"}}>How Soon You Can Jion </h6>
                              <div className="col-md-12">
                             <select className="form-control">
                              <option>Select</option>
                            <option>Large select</option>
                            <option>Small select</option>
                              </select>
                    </div>
                            </Col>
                           </Row>
                      
                      
                    
                        </Col>
                       </Row>
                       
                     
                    
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          onClick={() => {
                            tog_standard();
                          }}
                          className="btn btn-secondary "
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary "
                        >
                          Save changes
                        </button>
                      </div>
                </Modal> 
                </Container>
                </div>
                </React.Fragment>
                </>
  )
}

export default index
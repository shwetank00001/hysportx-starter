// import React, { useState } from "react"
// import { Card, Input, CardBody, CardTitle, Col, Container, Label, NavItem, NavLink, Row, TabContent, TabPane, Button} from "reactstrap";
// import classnames from "classnames"
// import { Link } from "react-router-dom"
// import { Formik, Form, Field  } from 'formik'
// import KycRepresentor from "../../components/Common/KycRepresentor";
// import { useDispatch, useSelector } from "react-redux";
// // import { organization_representor_verify, organization_representor_request } from "../../store/actions";

// const Business = () => {

//     document.title="Form Wizard | Skote - React Admin & Dashboard Template";
//     const [activeTab, setactiveTab] = useState(1)
//     const [passedSteps, setPassedSteps] = useState([1])
//     const dispatch = useDispatch();
//     const data = useSelector(state => state.kycReducer);
//     // const { setFieldValue } = useFormikContext();
    
//     function toggleTab(tab) {
//         if (activeTab !== tab) {
//             var modifiedSteps = [...passedSteps, tab]
//             if (tab >= 1 && tab <= 3) {
//                 setactiveTab(tab)
//                 setPassedSteps(modifiedSteps)
//             }
//         }
//     }
//     // const handleFileChange = (e) => {
//     //     console.log(e.target.name,'e.target.name');
//     //       setFieldValue(e.target.name, e.currentTarget.files[0]);
//     //   };

//     const initialValues = {
//         name: "",
//         mobile: "",
//         passport_photo: null,
//         whatsapp: "",
//         email: "",
//         dob: "",
//         height: "",
//         weight: "",
//         gender: "",
//         aadhar_card: "",
//         pan_card: "",
//         father_name: "",
//         mother_name: "",
//         spouse_name: "",
//         profession: "",
//         instagram_link: "",
//         facebook_link: "",
//         youtube_link: "",
//         twitter_link: "",
//         linkedin_link: "",
//         skype_link: "",
//         website_link: "",
//         permanent_city: "",
//         permanent_district: "",
//         permanent_pincode: "",
//         permanent_state: "",
//         permanent_country: "",
//         permanent_address: "",
//         temporary_city: "",
//         temporary_district: "",
//         temporary_pincode: "",
//         temporary_state: "",
//         temporary_country: "",
//         temporary_address: "",
//         organization_name: "",
//         brand_name: "",
//         logo: null,
//         about_your_company: "",
//         org_mobile: "",
//         org_whatsapp: "",
//         org_desk: "",
//         org_email: "",
//         org_instagram_link: "",
//         org_facebook_link: "",
//         org_youtube_link: "",
//         org_twitter_link: "",
//         org_linkedin_link: "",
//         org_skype_link: "",
//         org_city: "",
//         org_pincode: "",
//         org_district: "",
//         org_state: "",
//         org_country: "",
//         address_proof_file: null,
//         business_type: "",
//         registration_number: "",
//         registration_date: "",
//         registration_place: "",
//         proof_docs: null,
//         prospectus_docs_name: "",
//         prospectus_docs_number: "",
//         prospectus_docs_upload: null,
//         taxation_docs_name: "",
//         taxation_docs_number: "",
//         taxation_docs_upload: null,
//         pan_card_name: "",
//         pan_card_number: "",
//         pan_card_upload: null,
//         msme_docs_name: "",
//         msme_docs_number: "",
//         msme_docs_upload: null,
//         municipal_docs_name: "",
//         municipal_docs_number: "",
//         municipal_docs_upload: null,
//         iso_docs_name: "",
//         iso_docs_number: "",
//         iso_docs_upload: null,
//         other_docs_name:"",
//         other_docs_number:"",
//         other_docs_upload:null,
//         docs_name: "",
//         docs_number: "",
//         upload_docs: null,
//         gross_annual_income: "",
//         latest_worth_rupees: "",
//         itr_acknowledgement: "",
//         upload_itr_acknowlegement: null,
//     };
    
//     const handleSubmit = (values) => {
//         dispatch(organization_representor_request());
//         dispatch(organization_representor_verify(values));
//         console.log(data,'useSelector');
//     }

// return (
//     <React.Fragment>
//       <div className="page-content">
//         <Container fluid={true}>
//             <Formik
//                 initialValues={initialValues}
//                 onSubmit={handleSubmit}
//                 >
//                     {({ values, setFieldValue }) => (
//                     <Form>
//                         <Col lg="12">
//                             <div className="wizard clearfix">
//                                 <div className="steps clearfix">
//                                     <ul>
//                                         <NavItem className={classnames({ current: activeTab === 1 })} >
//                                             <NavLink className={classnames({ current: activeTab === 1 })} onClick={() => { setactiveTab(1) }} disabled={!(passedSteps || []).includes(1)} >
//                                                 <span className="number">1.</span>Organization Representor
//                                             </NavLink>
//                                         </NavItem>
//                                         <NavItem className={classnames({ current: activeTab === 2 })} >
//                                             <NavLink className={classnames({ active: activeTab === 2 })} onClick={() => { setactiveTab(2) }} disabled={!(passedSteps || []).includes(2)} >
//                                                 <span className="number">2.</span>Business Details
//                                             </NavLink>
//                                         </NavItem>
//                                         <NavItem className={classnames({ current: activeTab === 3 })} >
//                                             <NavLink className={classnames({ active: activeTab === 3 })} onClick={() => { setactiveTab(3) }} disabled={!(passedSteps || []).includes(3)} >
//                                                 <span className="number">3.</span>Legal Details
//                                             </NavLink>
//                                         </NavItem>
//                                     </ul>
//                                 </div>
//                                 <div className="content clearfix">
//                                     <TabContent activeTab={activeTab} className="body">
                                        
//                                         <TabPane tabId={1}>
//                                             <KycRepresentor title="Organization Representor" />
//                                         </TabPane>
//                                         <TabPane tabId={2}>
//                                             <Row>
//                                                 <Card>
//                                                     <CardBody>
//                                                         <CardTitle>Organization Details</CardTitle>
//                                                         <Row>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="organization_name" className="form-label">Organization Name</Label>
//                                                                 <Field type="text" className="form-control" id="organization_name" name="organization_name" />
//                                                             </Col>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="brand_name" className="form-label">Brand / Branch Name</Label>
//                                                                 <Field type="text" className="form-control" id="brand_name" name="brand_name" />
//                                                             </Col>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="logo" className="form-label">Brand / Branch Logo</Label>
//                                                                 <Input type="file" className="form-control" id="logo" name="logo"
//                                                                 accept=".pdf,.doc,.docx,.txt"  onChange={(event) => {
//                                                                     setFieldValue('logo', event.currentTarget.files[0]);
//                                                                   }} />
//                                                             </Col>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="about_your_company" className="form-label">Tell Us About Your Company</Label>
//                                                                 <Field as="textarea" className="form-control" id="about_your_company" name="about_your_company" />
//                                                             </Col>
//                                                         </Row>
//                                                     </CardBody>
//                                                 </Card>

//                                                 <Card>
//                                                     <CardBody>
//                                                         <CardTitle>Organization Contact Details</CardTitle>
//                                                         <Row>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="org_mobile" className="form-label">Mobile</Label>
//                                                                 <Field type="number" className="form-control" id="org_mobile" name="org_mobile" />
//                                                             </Col>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="org_whatsapp" className="form-label">WhatsApp</Label>
//                                                                 <Field type="number" className="form-control" id="org_whatsapp" name="org_whatsapp" />
//                                                             </Col>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="org_desk" className="form-label">Desk/Fax</Label>
//                                                                 <Field type="text" className="form-control" id="org_desk" name="org_desk" />
//                                                             </Col>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="org_email" className="form-label">Email</Label>
//                                                                 <Field type="email" className="form-control" id="org_email" name="org_email" />
//                                                             </Col>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="org_instagram_link" className="form-label">Instagram Link</Label>
//                                                                 <Field type="url" className="form-control" id="org_instagram_link" name="org_instagram_link" />
//                                                             </Col>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="org_facebook_link" className="form-label">Facebook Link</Label>
//                                                                 <Field type="url" className="form-control" id="org_facebook_link" name="org_facebook_link" />
//                                                             </Col>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="org_youtube_link" className="form-label">Youtube Link</Label>
//                                                                 <Field type="url" className="form-control" id="org_youtube_link" name="org_youtube_link" />
//                                                             </Col>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="org_twitter_link" className="form-label">Twitter Link</Label>
//                                                                 <Field type="url" className="form-control" id="org_twitter_link" name="org_twitter_link" />
//                                                             </Col>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="org_linkedin_link" className="form-label">Linkedin Link</Label>
//                                                                 <Field type="url" className="form-control" id="org_linkedin_link" name="org_linkedin_link" />
//                                                             </Col>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="org_skype_link" className="form-label">Skype Link</Label>
//                                                                 <Field type="url" className="form-control" id="org_skype_link" name="org_skype_link" />
//                                                             </Col>
//                                                         </Row>
//                                                     </CardBody>
//                                                 </Card>

//                                                 <Card>
//                                                     <CardBody>
//                                                         <CardTitle>Organization Address</CardTitle>
//                                                         <Row>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="org_city" className="form-label">City</Label>
//                                                                 <Field type="text" className="form-control" id="org_city" name="org_city" />
//                                                             </Col>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="org_pincode" className="form-label">Pincode</Label>
//                                                                 <Field type="text" className="form-control" id="org_pincode" name="org_pincode" />
//                                                             </Col>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="org_district" className="form-label">District</Label>
//                                                                 <Field type="text" className="form-control" id="org_district" name="org_district" />
//                                                             </Col>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="org_state" className="form-label">State</Label>
//                                                                 <Field type="text" className="form-control" id="org_state" name="org_state" />
//                                                             </Col>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="org_country" className="form-label">Country</Label>
//                                                                 <Field type="text" className="form-control" id="org_country" name="org_country" />
//                                                             </Col>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="address_proof_file" className="form-label">Address Proof File</Label>
//                                                                 <Field type="file" className="form-control" id="address_proof_file" name="address_proof_file" />
//                                                             </Col>
//                                                             <Col lg="12" className="mb-3">
//                                                                 <Label for="address_proof_file" className="form-label">Address Proof File</Label>
//                                                                 <Field as="textarea" className="form-control" id="address_proof_file" name="address_proof_file" />
//                                                             </Col>
//                                                         </Row>
//                                                     </CardBody>
//                                                 </Card>
//                                             </Row>

//                                             <Row>
//                                                 <Card className="card border-dark">
//                                                     <CardBody>
//                                                         <CardTitle>Company Legals</CardTitle>
//                                                         <Row>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="business_type">What’s your business type:</Label>
//                                                                 <Field type="text" className="form-control" id="business_type" name="business_type" />
//                                                             </Col>

//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="registration_number">Registration Number/CIN:</Label>
//                                                                 <Field type="text" className="form-control" id="registration_number" name="registration_number" />
//                                                             </Col>

//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="registration_date">Date of Registration/CIN:</Label>
//                                                                 <Field type="date" className="form-control" id="registration_date" name="registration_date" />
//                                                             </Col>

//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="registration_place">Place of Registration/CIN:</Label>
//                                                                 <Field type="text" className="form-control" id="registration_place" name="registration_place" />
//                                                             </Col>
//                                                             <Col lg="6" className="mb-3">
//                                                                 <Label for="proof_docs">Upload Any Proof Docs:</Label>
//                                                                 <Field type="file" className="form-control" id="proof_docs" name="proof_docs" />
//                                                             </Col>
//                                                         </Row>
//                                                     </CardBody>
//                                                 </Card>
//                                             </Row>
//                                         </TabPane>
//                                         <TabPane tabId={3}>
//                                             <Row>
//                                                 <Col lg="6">
//                                                     <Card>
//                                                         <CardBody>
//                                                             <CardTitle className="">Prospectus Docs</CardTitle>
//                                                             <Col className="mb-3">
//                                                                 <Label for="prospectus_docs_number">Docs Number:</Label>
//                                                                 <Field type="text" className="form-control" id="prospectus_docs_number" name="prospectus_docs_number" />
//                                                             </Col>

//                                                             <Col className="mb-3">
//                                                                 <Label for="prospectus_docs_upload">Upload Docs:</Label>
//                                                                 <Field type="file" className="form-control" id="prospectus_docs_upload" name="prospectus_docs_upload" />
//                                                             </Col>
//                                                         </CardBody>
//                                                     </Card>
//                                                 </Col>

//                                                 <Col lg="6">
//                                                     <Card className="card border-dark">
//                                                         <CardBody>
//                                                             <CardTitle className="">Taxation Docs</CardTitle>
//                                                             <Col className="mb-3">
//                                                                 <Label for="taxation_docs_number">Docs Number:</Label>
//                                                                 <Field type="text" className="form-control" id="taxation_docs_number" name="taxation_docs_number" />
//                                                             </Col>

//                                                             <Col className="mb-3">
//                                                                 <Label for="taxation_docs_upload">Upload Docs:</Label>
//                                                                 <Field type="file" className="form-control" id="taxation_docs_upload" name="taxation_docs_upload" />
//                                                             </Col>
//                                                         </CardBody>
//                                                     </Card>
//                                                 </Col>
//                                             </Row>

//                                             <Row>
//                                                 <Col lg="6">
//                                                     <Card>
//                                                         <CardBody>
//                                                             <CardTitle>MSME Docs</CardTitle>
//                                                             <Col className="mb-3">
//                                                                 <Label for="msme_docs_number">Docs Number:</Label>
//                                                                 <Field className="form-control" type="text" id="msme_docs_number" name="msme_docs_number"   />
//                                                             </Col>

//                                                             <Col className="mb-3">
//                                                                 <Label for="msme_docs_upload">Upload Docs:</Label>
//                                                                 <Field className="form-control" type="file" id="msme_docs_upload" name="msme_docs_upload"  />
//                                                             </Col>
//                                                         </CardBody>
//                                                     </Card>
//                                                 </Col>
//                                                 <Col lg="6">
//                                                     <Card>
//                                                         <CardBody>
//                                                             <CardTitle>Muncipal / Shop Act Docs</CardTitle>
//                                                             <Col className="mb-3">
//                                                                 <Label for="municipal_docs_number">Docs Number:</Label>
//                                                                 <Field className="form-control" type="text" id="municipal_docs_number" name="municipal_docs_number" />
//                                                             </Col>
//                                                             <Col className="mb-3">
//                                                                 <Label for="municipal_docs_upload">Upload Docs:</Label>
//                                                                 <Field className="form-control" type="file" id="municipal_docs_upload" name="municipal_docs_upload" />
//                                                             </Col>
//                                                         </CardBody>
//                                                     </Card>
//                                                 </Col>
//                                             </Row>
//                                             <Row>
//                                                 <Col lg="6">
//                                                     <Card>
//                                                         <CardBody>
//                                                             <CardTitle>ISO Certificate Docs</CardTitle>
//                                                             <Col className="mb-3">
//                                                                 <Label for="iso_docs_number">Docs Number:</Label>
//                                                                 <Field className="form-control" type="text" id="iso_docs_number" name="iso_docs_number" />
//                                                             </Col>
//                                                             <Col className="mb-3">
//                                                                 <Label for="iso_docs_upload">Upload Docs:</Label>
//                                                                 <Field className="form-control" type="file" id="iso_docs_upload" name="iso_docs_upload" />
//                                                             </Col>
//                                                         </CardBody>
//                                                     </Card>
//                                                 </Col>
//                                                 <Col lg="6">
//                                                     <Card>
//                                                         <CardBody>
//                                                             <CardTitle>Importer-Exporter Code Application</CardTitle>
//                                                             <Col className="mb-3">
//                                                                 <Label for="docs_number">Docs Number:</Label>
//                                                                 <Field type="text" className="form-control" id="docs_number" name="docs_number" />
//                                                             </Col>
//                                                             <Col className="mb-3">
//                                                                 <Label for="upload_docs">Upload Docs:</Label>
//                                                                 <Field type="file" className="form-control" id="upload_docs" name="upload_docs" />
//                                                             </Col>
//                                                         </CardBody>
//                                                     </Card>
//                                                 </Col>
//                                             </Row>
//                                             <Card>
//                                                 <CardBody>
//                                                     <CardTitle>Pan Card</CardTitle>
//                                                     <Col className="mb-3">
//                                                         <Label for="pan_card_number">Docs Number:</Label>
//                                                         <Field type="text" className="form-control" id="pan_card_number" name="pan_card_number" />
//                                                     </Col>

//                                                     <Col className="mb-3">
//                                                         <Label for="pan_card_upload">Upload Docs:</Label>
//                                                         <Field type="file" className="form-control" id="pan_card_upload" name="pan_card_upload" />
//                                                     </Col>
//                                                 </CardBody>
//                                             </Card>
//                                             <Row>
//                                                 <Col lg="6">
//                                                     <Card>
//                                                         <CardBody>
//                                                             <CardTitle>Finance Details</CardTitle>
//                                                             <Col className="mb-3">
//                                                                 <Label for="gross_annual_income">Gross Annual Income/Turn Over:</Label>
//                                                                 <Field type="number" className="form-control" id="gross_annual_income" name="gross_annual_income" />
//                                                             </Col>
//                                                             <Col className="mb-3">
//                                                                 <Label for="latest_worth_rupees">Latest Net Worth Rupees:</Label>
//                                                                 <Field type="number" className="form-control" id="latest_worth_rupees" name="latest_worth_rupees" />
//                                                             </Col>
//                                                             <Col className="mb-3">
//                                                                 <Label for="itr_acknowledgement">ITR Acknowledgement, Balance Sheet, Computation, P & L:</Label>
//                                                                 <Field type="number" className="form-control" id="itr_acknowledgement" name="itr_acknowledgement" />
//                                                             </Col>
//                                                             <Col className="mb-3">
//                                                                 <Label for="upload_itr_acknowlegement">Upload ITR Acknowlegement:</Label>
//                                                                 <Field type="file" className="form-control" id="upload_itr_acknowlegement" name="upload_itr_acknowlegement" />
//                                                             </Col>
//                                                         </CardBody>
//                                                     </Card>
//                                                 </Col>
//                                                 <Col lg="6">
//                                                     <Card>
//                                                         <CardBody>
//                                                             <CardTitle>Any Other Docs</CardTitle>
//                                                             <Col className="mb-3">
//                                                                 <Label for="iso_docs_number">Docs Name:</Label>
//                                                                 <Field className="form-control" type="text" id="other_docs_name" name="other_docs_name" />
//                                                             </Col>
//                                                             <Col className="mb-3">
//                                                                 <Label for="iso_docs_number">Docs Number:</Label>
//                                                                 <Field className="form-control" type="text" id="other_docs_number" name="other_docs_number" />
//                                                             </Col>
//                                                             <Col className="mb-3">
//                                                                 <Label for="iso_docs_upload">Upload Docs:</Label>
//                                                                 <Field className="form-control" type="file" id="other_docs_upload" name="other_docs_number" />
//                                                             </Col>
//                                                         </CardBody>
//                                                     </Card>
//                                                 </Col>
//                                             </Row>
//                                         </TabPane>
//                                     </TabContent>
//                                 </div>
//                                 <div className="actions clearfix">
//                                     <Button style={{float:'left', marginBottom:'10px'}}>Submit</Button>
//                                     <ul>
//                                         <li className={  activeTab === 1 ? "previous disabled" : "previous" }>
//                                             <Link to="#" onClick={() => { toggleTab(activeTab - 1) }} >
//                                                 Previous
//                                             </Link>
//                                         </li>
//                                         <li className={activeTab === 4 ? "next disabled" : "next"} >
//                                             <Link to="#"     onClick={() => { toggleTab(activeTab + 1) }} >
//                                                     Next
//                                             </Link>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </Col>
//                     </Form>
//                     )}
//             </Formik>
//         </Container>
//       </div>
//     </React.Fragment>
//   )
// }

// export default Business;
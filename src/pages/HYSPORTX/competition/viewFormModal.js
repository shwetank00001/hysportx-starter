import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Yup from "yup";
import { useFormik } from "formik";
import { Row, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input, FormFeedback,Button,UncontrolledTooltip } from 'reactstrap'
import {useSelector, useDispatch } from "react-redux";
const viewFormModal = (props) => {
    const [competitionModal, setCompetitionModal] = useState(false);
    const [preview, setPreview] = useState('');
    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            competition_id: (props.data && props.data.id) || "",
            name: (props.data && props.data.name) || "",
            description:(props.data && props.data.description) || "",
            social_link: (props.data && props.data.social_link) || "",
            image: "",
        },
        onSubmit: (values) => {
        }
    });

    return (
        <React.Fragment>
             <Link to="#" className="btn btn-sm btn-soft-primary" id={`viewtooltip`} onClick={() => {setCompetitionModal(true)  }} >
             <i className="mdi mdi-eye-outline" />
                 <UncontrolledTooltip placement="top" target={`viewtooltip`} > view </UncontrolledTooltip>
              </Link> 


            <Modal isOpen={competitionModal} toggle={() => { setCompetitionModal(); }} id="activity"size="lg">
                <div className="modal-content">
                    <Form className="form-horizontal" onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false;}} encType="multipart/form-data">
                        <ModalHeader toggle={() => setCompetitionModal()} id="activitiesLabel" className="modal-header"> view Competition</ModalHeader>
                        <ModalBody style={{ maxHeight: 'calc(100vh - 210px)', overflowY: 'auto' }}>
                            <Row className='mx-auto'>
                                <div className="row mb-3">
                                    <div className="col-lg-3 col-md-3 text-md-end text-lg-end ">
                                        <Label htmlFor="name" className="mt-2">Competition Name</Label>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <Input type="text" id="name" name="name" value={validation.values.name} onChange={validation.handleChange} onBlur={validation.handleBlur}
                                           readOnly/>
                                       
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-3 col-md-3 text-md-end text-lg-end ">
                                        <Label htmlFor="desc" className="mt-2">Description</Label>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <textarea className="form-control" name='description' onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.description || ""} id="desc" readOnly></textarea>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-3 col-md-3 text-md-end text-lg-end ">
                                        <Label htmlFor="social_link" className="mt-2">Socail Link</Label>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <Input type="text" id="social_link" name="social_link" value={validation.values.social_link} onChange={validation.handleChange} onBlur={validation.handleBlur} readOnly />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-3 col-md-3 text-md-end text-lg-end ">
                                       
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        {preview ? <img src={preview} width="200px" height="200px" /> : ''}
                                    </div>
                                </div>
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <div className="text-end">
                                <button type='button' onClick={() => setCompetitionModal()} className="btn btn-secondary me-1">cancel</button>
                            </div>
                        </ModalFooter>
                    </Form>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default viewFormModal
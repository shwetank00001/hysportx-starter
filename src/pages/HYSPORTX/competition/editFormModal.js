import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Yup from "yup";
import { useFormik } from "formik";
import { Row, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input, FormFeedback, Button, UncontrolledTooltip } from 'reactstrap'
import { useSelector, useDispatch } from "react-redux";
import { editCompetitionRequest } from '../../../store/actions'
const EditFormModal = (props) => {
    const baseUrl = 'https://hysportx.com/';
    const imageupload = baseUrl + (props.image ? props.image : '');
    const dispatch = useDispatch();
    const [competitionModal, setCompetitionModal] = useState(false);
    const [preview, setPreview] = useState(imageupload);

    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            competition_id: (props.data && props.data.id) || "",
            name: (props.data && props.data.name) || "",
            description: (props.data && props.data.description) || "",
            social_link: (props.data && props.data.social_link) || "",
            image: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please Enter Competition Name"),
            image: Yup.mixed().test('fileSize', 'File size is too large size, you can upload min 2 MB size  ',
                (value) => !value || (value && value.size <= 1024 * 1024) // Adjust the size limit
            ).test('fileType', 'Invalid file type. Only jpg,jpeg,png,svg format are allowed',
                (value) => !value || (value && ['image/jpeg', 'image/png'].includes(value.type)))
        }),
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append('competition_id', values.competition_id);
            formData.append('name', values.name);
            formData.append('description', values.description);
            formData.append('socail_link', values.social_link
);
            values.image && formData.append('image', values.image);
            dispatch(editCompetitionRequest(formData));
            validation.resetForm();
            setCompetitionModal();
            setPreview();
        }
    });

    return (
        <React.Fragment>
            <Link to="#" className="btn btn-sm btn-soft-info" id={`edittooltip`} onClick={() => { setCompetitionModal(true) }} >
                <i className="bx bx-pencil" />
                <UncontrolledTooltip placement="top" target={`edittooltip`} > update Competition </UncontrolledTooltip>
            </Link>
            <Modal isOpen={competitionModal} toggle={() => { setCompetitionModal(); }} id="activity" size="lg">
                <div className="modal-content">
                    <Form className="form-horizontal" onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }} encType="multipart/form-data">
                        <ModalHeader toggle={() => setCompetitionModal()} id="activitiesLabel" className="modal-header"> Edit Competition</ModalHeader>
                        <ModalBody style={{ maxHeight: 'calc(100vh - 210px)', overflowY: 'auto' }}>
                            <Row className='mx-auto'>
                                <Input type="hidden" id="competition_id" name="competition_id" value={validation.values.competition_id} onChange={validation.handleChange} onBlur={validation.handleBlur} />
                                <div className="row mb-3">
                                    <div className="col-lg-3 col-md-3 text-md-end text-lg-end ">
                                        <Label htmlFor="name" className="mt-2">Competition Name</Label>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <Input type="text" id="name" name="name" value={validation.values.name} onChange={validation.handleChange} onBlur={validation.handleBlur}
                                            invalid={validation.touched.name && validation.errors.name ? true : false} />
                                        {validation.touched.name && validation.errors.name ? (<FormFeedback type="invalid">{validation.errors.name}</FormFeedback>) : null}
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-3 col-md-3 text-md-end text-lg-end ">
                                        <Label htmlFor="desc" className="mt-2">Description</Label>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <textarea className="form-control" name='description' onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.description || ""} id="desc"></textarea>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-3 col-md-3 text-md-end text-lg-end ">
                                        <Label htmlFor="social_link" className="mt-2">Socail Link</Label>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <Input type="text" id="social_link" name="social_link" value={validation.values.social_link} onChange={validation.handleChange} onBlur={validation.handleBlur} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-3 col-md-3 text-md-end text-lg-end ">
                                        <Label htmlFor="social_link" className="mt-2">Upload Image</Label>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <Input type="file" name='image' className="form-control" id='image' onBlur={validation.handleBlur}
                                            onChange={(event) => {
                                                const file = event.target.files[0]; validation.setFieldValue('image', event.currentTarget.files[0]);
                                                if (file) {
                                                    const fileDetails = {
                                                        name: file.name,
                                                        path: event.target.value,
                                                        dataURL: null,
                                                    };

                                                    let reader = new FileReader();
                                                    reader.onload = () => {
                                                        if (reader.readyState === 2) {
                                                           setPreview(reader.result);
                                                            fileDetails.dataURL = reader.result;
                                                        }
                                                    }
                                                    reader.readAsDataURL(file);
                                                }
                                            }
                                            }
                                        />
                                        {validation.errors.image && <div className="text-danger">{validation.errors.image}</div>}
                                        <br />
                                        {preview ? <img src={preview} width="200px" height="200px" /> : ''}
                                    </div>
                                </div>
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <div className="text-end">
                                <button type='submit' className="btn btn-success me-1">Edit Competition <i className="bx bx-send align-middle"></i></button>
                            </div>
                        </ModalFooter>
                    </Form>
                </div>
            </Modal>
        </React.Fragment>
    )
}
export default EditFormModal
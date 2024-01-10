import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { createSelector } from "reselect"
import Select from 'react-select';
import { Link } from 'react-router-dom'
import * as Yup from "yup";
import { useFormik } from "formik";
import { Row, Modal, ModalBody, ModalHeader, ModalFooter, Form, Label, Input, FormFeedback } from 'reactstrap'
import { conditionListRequest,addActivityRequest as addActivityForm } from "../../../store/actions";
const ActivityModal = () => {
    const dispatch = useDispatch();
    const [ActivityModal, setActivityModal] = useState(false)
    // -----add multi field  start ---
    const [inputData, setInputData] = useState(
        [
            { activity_reps: '', exercise_id: '', ptag_id: '', per_time: '', per_dis_metter: '', comment: '' }
        ]
    );
    const handleSelectChange = (e, index) => {
        // console.log("select",e);
        const { name, value } = e.value;
        const list = [...inputData];
        list[index][name] = value;
        setInputData(list);
    }
    const handleInputChange = (e, index) => {
        // console.log("input",e);
        const { name, value } = e.target;
        const list = [...inputData];
        list[index][name] = value;
        setInputData(list);
    }

    const handleAddField = () => {
        setInputData([...inputData, { activity_reps: '', exercise_id: '', ptag_id: '', per_time: '', per_dis_metter: '', comment: '' }]);
    }

    const handleRemoveField = (index) => {
        const list = [...inputData];
        list.splice(index, 1);
        setInputData(list);
    }
    //------add multi field end ------

    const fetchCondtionList = state => state.conditionReducer
    const conditionDataProperties = createSelector(
        fetchCondtionList,
        conditionReducer => ({
            Condition: conditionReducer.condition,
            error: conditionReducer.error,
            errors: conditionReducer.adderrors,
        })
    )
    const { Condition, error, errors } = useSelector(conditionDataProperties)
    useEffect(() => { dispatch(conditionListRequest()) }, [dispatch])

    const conditionOptions = Condition.conditions && Condition.conditions.map(condition => ({
        label: condition.code,
        value: condition.id,
    }));



    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            name: "",
            condition_id: "",
            description: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required(
                "Please Enter Activity Name"
            ),
        }),
        onSubmit: (values) => {
            dispatch(addActivityForm(values));
            setActivityModal();
            validation.resetForm();
        }
    });


    return (
        <React.Fragment>
            <Link to="#" onClick={() => { setActivityModal(true); }} className="btn  btn-primary"><i className="mdi mdi-plus me-1"></i>Create Activity</Link>
            {/* <Button onClick={e => { setActivityExerciseModal(true); }} className="btn btn-soft-success" >
                <i className="bx bx-add-to-queue" />
            </Button> */}
            {/* Activity Create Modal */}
            <Modal
                isOpen={ActivityModal}
                toggle={() => {
                    setActivityModal();
                }}
                id="activity"
                size="lg"
            >
                <div className="modal-content">
                    <Form
                        className="form-horizontal"
                        onSubmit={(e) => {
                            e.preventDefault();
                            validation.handleSubmit();
                            return false;
                        }}
                    >
                        <ModalHeader toggle={() => setActivityModal()} id="activitiesLabel" className="modal-header">
                            Create Activities
                        </ModalHeader>
                        <ModalBody style={{
                            maxHeight: 'calc(100vh - 210px)',
                            overflowY: 'auto'
                        }}>
                            <Row className='mx-auto'>
                                <div className="row mb-3">
                                    <div className="col-lg-3 col-md-3 text-md-end text-lg-end ">
                                        <Label htmlFor="name" className="mt-2">Activities Name</Label>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <Input type="text"
                                            id="name"
                                            name="name"
                                            value={validation.values.name}
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            invalid={
                                                validation.touched.name && validation.errors.name ? true : false
                                            }
                                        />
                                        {validation.touched.name && validation.errors.name ? (
                                            <FormFeedback type="invalid">{validation.errors.name}</FormFeedback>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-3 col-md-3 text-md-end text-lg-end ">
                                        <Label htmlFor="condition_id" className="mt-2">Condition</Label>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <div className='row'>
                                            <div className='col-lg-5 col-md-5 col-sm-6 col-xs-6'>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    name="condition_id"
                                                    id="condition_id"
                                                    placeholder="select condition"
                                                    options={conditionOptions}
                                                    onChange={(selectedOption) => {
                                                        validation.setFieldValue("condition_id", selectedOption.value);
                                                    }}
                                                    onBlur={validation.handleBlur}
                                                />
                                            </div>
                                            <div className='col-lg-7 col-md-7 col-sm-6 col-xs-6'>
                                                <div className='row'>
                                                    <div className='col-lg-5 col-md-5'>
                                                        <Select
                                                            className="basic-single"
                                                            classNamePrefix="select"
                                                            name="condition_distance"
                                                            id="condition_distance"
                                                            placeholder="distance"
                                                        // value={activityOptions.find((option) => option.value === validation.values.condition_distance)}
                                                        // onChange={(selectedOption) => {
                                                        //     validation.setFieldValue("condition_distance", selectedOption.value);
                                                        // }}
                                                        // onBlur={() => {
                                                        //     validation.setFieldTouched("condition_distance", true);
                                                        // }}
                                                        />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3'>
                                                        <Input type="text"
                                                            id="activity_con_time"
                                                            name="activity_con_time"
                                                            placeholder=""
                                                        // value={validation.values.eactivity_con_time || ""}
                                                        />
                                                    </div>
                                                    <div className='col-lg-4 col-md-4'>
                                                        <Select
                                                            className="basic-single"
                                                            classNamePrefix="select"
                                                            name="con_dis_metter"
                                                            id="con_dis_metter"
                                                            placeholder="mtr"
                                                        // value={activityOptions.find((option) => option.value === validation.values.con_dis_metter)}
                                                        // onChange={(selectedOption) => {
                                                        //     validation.setFieldValue("con_dis_metter", selectedOption.value);
                                                        // }}
                                                        // onBlur={() => {
                                                        //     validation.setFieldTouched("con_dis_metter", true);
                                                        // }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div id='add_form_field' className='mt-1' >
                                    {
                                        inputData.map((x, i) => {
                                            return (
                                                <div key={i} className="row mb-3">
                                                    <div className='col-lg-4 col-md-4'>
                                                        <div className='row'>
                                                            <div className='col-lg-1 col-md-1 text-center pt-2'>{i + 1}</div>
                                                            <div className='col-lg-4 col-md-4'>
                                                                <Input type="text"
                                                                    id="reps"
                                                                    name="activity_reps"
                                                                    placeholder="Reps"
                                                                    // value={validation.values.activity_reps || ""}
                                                                    onChange={e => handleInputChange(e, i)}
                                                                />
                                                            </div>
                                                            <div className='col-lg-6 col-md-6'>
                                                                <Select
                                                                    className="basic-single"
                                                                    classNamePrefix="select"
                                                                    name="activity_exercise"
                                                                    id="activity_exercise"
                                                                    placeholder="Exercise"
                                                                    onChange={e => handleInputChange(e, i)}
                                                                // value={activityOptions.find((option) => option.value === validation.values.activity_exercise)}
                                                                // onChange={(selectedOption) => {
                                                                //     validation.setFieldValue("activity_exercise", selectedOption.value);
                                                                // }}
                                                                // onBlur={() => {
                                                                //     validation.setFieldTouched("activity_exercise", true);
                                                                // }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-5 col-md-5'>
                                                        <div className='row'>
                                                            <div className='col-lg-5 col-md-5'>
                                                                <Select
                                                                    className="basic-single"
                                                                    // classNamePrefix="select"
                                                                    name="activity_performance"
                                                                    id="activity_performance"
                                                                    placeholder="Performance"
                                                                    // value={activityOptions.find((option) => option.value === validation.values.activity_performance)}
                                                                    // onChange={(selectedOption) => {
                                                                    //     validation.setFieldValue("activity_performance", selectedOption.value);
                                                                    // }}
                                                                    // onBlur={() => {
                                                                    //     validation.setFieldTouched("activity_performance", true);
                                                                    // }}
                                                                    onChange={e => handleInputChange(e, i)}
                                                                />
                                                            </div>
                                                            <div className='col-lg-3 col-md-3'>
                                                                <Input type="text"
                                                                    id="reps"
                                                                    name="per_time"
                                                                    placeholder="time"
                                                                // value={validation.values.per_time || ""}
                                                                />
                                                            </div>
                                                            <div className='col-lg-4 col-md-4'>
                                                                <Select
                                                                    className="basic-single"
                                                                    // classNamePrefix="select"
                                                                    name="per_dis_metter"
                                                                    id="per_dis_metter"
                                                                    placeholder="mtr"
                                                                    onChange={e => handleInputChange(e, i)}
                                                                // value={activityOptions.find((option) => option.value === validation.values.per_dis_metter)}
                                                                // onChange={(selectedOption) => {
                                                                //     validation.setFieldValue("per_dis_metter", selectedOption.value);
                                                                // }}
                                                                // onBlur={() => {
                                                                //     validation.setFieldTouched("per_dis_metter", true);
                                                                // }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3'>
                                                        <div className='row'>
                                                            <div className='col-lg-9 col-md-9'>
                                                                <textarea className="form-control" rows={1} id="comment" placeholder='comment' name='comment' onChange={e => handleInputChange(e, i)}></textarea>
                                                            </div>
                                                            <div className='col-lg-3 col-md-3 pt-1'>
                                                                {
                                                                    (inputData.length !== 1 && inputData.length - 1 !== i) &&
                                                                    <Link to="#" onClick={() => { handleRemoveField(i) }} className="btn btn-sm btn-soft-danger"><i className="bx bx-trash me-1" /></Link>
                                                                }
                                                                {
                                                                    inputData.length - 1 === i &&
                                                                    <Link to="#" onClick={() => { handleAddField() }} className="btn btn-sm btn-soft-primary"><i className="mdi mdi-plus me-1" /></Link>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }

                                </div>
                                <hr />
                                <div className='row mb-3'>

                                    <div className="col-lg-3 col-md-3 text-md-end text-lg-end ">
                                        <Label htmlFor="activity_name" className="mt-2">Overall Description</Label>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <div className="form-floating">
                                            <textarea className="form-control" name='description' onChange={validation.handleChange}
                                                onBlur={validation.handleBlur} value={validation.values.description || ""} id="overalldesc"></textarea>

                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <div className="text-end">
                                <button type='submit' className="btn btn-success me-1">Save Acitivities <i className="bx bx-send align-middle"></i></button>
                            </div>
                        </ModalFooter>
                    </Form>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default ActivityModal;


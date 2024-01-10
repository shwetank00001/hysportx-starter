import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { createSelector } from "reselect"
import { Link } from 'react-router-dom'
import Select from 'react-select';
import * as Yup from "yup";
import { useFormik } from "formik";
import { Row, Modal, ModalBody, ModalHeader, ModalFooter, Form, Label, Input, Button, FormFeedback } from 'reactstrap'
import { exerciseListRequest,addActivityExerciseRequest } from "../../../store/actions";
const ActivityExerciseModal = ({ id }) => {
   
    
    const dispatch = useDispatch();
    const [activityExerciseModal, setActivityExerciseModal] = useState(false)
    //Execise data fetch and create select option
    
    const fetchExerciseList = state => state.exerciseReducer
    const exerciseDataProperties = createSelector(
        fetchExerciseList,
        exerciseReducer => ({
            exercise: exerciseReducer.exercise
        })
    )
    const { exercise } = useSelector(exerciseDataProperties)
    useEffect(() => { dispatch(exerciseListRequest()) }, [dispatch])
    const exerciseOptions = exercise.exercise && exercise.exercise.map(exercise => ({
        label: exercise.name,
        value: exercise.id,
    }));

    const ptagOptions = exercise.exercise && exercise.exercise.ptag && exercise.exercise.ptag.map(ptag => ({
        label: ptag.name,
        value: ptag.id,
    }));
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

          
    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            activity_id: (id && id.id) || "",
            // name: (id && id.name) || "",
            exercise_id: "",
            ptag_id: 13,
            comment: "some thing comment ",
        },
        onSubmit: (values) => {
            dispatch(addActivityExerciseRequest(values));
        }
    });

    return (
        <React.Fragment>
            <Button onClick={e => { setActivityExerciseModal(true); }} className="btn btn-sm btn-soft-success" >
                <i className="bx bx-add-to-queue" />
            </Button>

            {/* Activity Exercise Modal */}
            <Modal
                isOpen={activityExerciseModal}
                toggle={() => {
                    setActivityExerciseModal();
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
                        <ModalHeader toggle={() => setActivityExerciseModal()} id="activitiesLabel" className="modal-header">
                            Add Activity Exercise
                        </ModalHeader>
                        <ModalBody style={{
                            maxHeight: 'calc(100vh - 210px)',
                            overflowY: 'auto'
                        }}>
                            <Row className='mx-auto'>
                                <div className="row mb-3">
                                    <div className="col-lg-3 col-md-3 text-md-end text-lg-end ">
                                        <Label htmlFor="_name" className="mt-2">Activity</Label>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <Input type="text"
                                            id="name"
                                            name="name"

                                            value={id && id.name}
                                            readOnly
                                        />

                                    </div>
                                </div>
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
                                                                    name="exercise_id"
                                                                    id="exercise_id"
                                                                    placeholder="Exercise"
                                                                    options={exerciseOptions}

                                                                    onChange={(selectedOption) => {
                                                                        handleSelectChange(selectedOption, i),
                                                                            validation.setFieldValue("exercise_id", selectedOption.value);
                                                                    }}
                                                                    onBlur={validation.handleBlur}
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
                                                                    name="ptag_id"
                                                                    id="ptag_id"
                                                                    placeholder="Performance"
                                                                    options={ptagOptions}
                                                                    onChange={(selectedOption) => {
                                                                        handleSelectChange(selectedOption, i)
                                                                        validation.setFieldValue("ptag_id", selectedOption.value);
                                                                    }}
                                                                    onBlur={validation.handleBlur}

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
                                                                    defaultValue=""

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
                                                                <textarea name='comment'  className="form-control" rows={1} id="comment" placeholder='comment'  onChange={e => handleInputChange(e, i)}>
                                                                    
                                                                </textarea>
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

                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <div className="text-end">
                                <button type='submit' className="btn btn-success me-1">Save Exercise <i className="bx bx-send align-middle"></i></button>
                            </div>
                        </ModalFooter>
                    </Form>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default ActivityExerciseModal
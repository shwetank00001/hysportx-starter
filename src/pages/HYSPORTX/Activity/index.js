import React, { useMemo, useState } from 'react'
import { Row, Col, Card, CardHeader, CardBody, Button, UncontrolledTooltip, Modal, ModalBody, ModalHeader, ModalFooter, Form, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import TableContainer from 'components/Common/TableContainer'
import Select from 'react-select';
import * as Yup from "yup";
import { useFormik } from "formik";

const activity = [
    {
        id: 1,
        activity_name: "Jennifer Chang",
        desc: "Regional Director",

    },
    {
        id: 2,
        activity_name: "Jennifer Chang",
        desc: "Regional Director",

    },
]
const index = () => {
    const [ActivityModal, setActivityModal] = useState(false)

    const [inputData, setInputData] = useState(
        [
            { activity_reps: '', activity_exercise: '', activity_performance: '', per_time: '', per_dis_metter: '', comment: '' }
        ]
    );
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputData];
        list[index][name] = value;
        setInputData(list);
    }
    const handleAddField = () => {
        setInputData([...inputData, { activity_reps: '', activity_exercise: '', activity_performance: '', per_time: '', per_dis_metter: '', comment: '' }]);
    }

    const handleRemoveField = (index) => {
        const list = [...inputData];
        list.splice(index, 1);
        setInputData(list);
    }

    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            // activity_name: viewexercisedata && viewexercisedata.name || "",
            // exercise_description: viewexercisedata && viewexercisedata.description || "",
            // exercise_level: viewexercisedata && viewexercisedata.level || "",
            // exercise_modality: viewexercisedata && viewexercisedata.modalities.map(item => item.name).join(' , ') || "",
            // exercise_equipments: viewexercisedata && viewexercisedata.equipments.map(item => item.name).join(' , ') || "",
            // exercise_muscles: viewexercisedata && viewexercisedata.muscles.map(item => item.name).join(' , ') || "",
            // exercise_benifits: viewexercisedata && viewexercisedata.benifits.map(item => item.point).join(' , ') || "",
            // exercise_ptags: viewexercisedata && viewexercisedata.ptags.map(item => item.name).join(' , ') || "",
        },
        validationSchema: Yup.object({
            // email: Yup.string().required("Please Enter Your Email"),
            // password: Yup.string().required("Please Enter Your Password"),
          }),

        onSubmit: (values) => {

        }
    });

    //coloums header start
    const columns = useMemo(
        () => [
            {
                Header: 'No',
                accessor: 'id',
                Cell: (cellProps) => {
                    return (
                        <>
                            <p className="">{cellProps.row.index + 1}</p>
                        </>
                    )
                },
            },


            {
                Header: 'Activity Name',
                accessor: 'activity_name',
            },
            {
                Header: 'Description',
                accessor: 'desc',
            },


            {
                Header: 'Action',
                accessor: 'action',
                disableFilters: true,
                Cell: (cellProps) => {
                    return (
                        <ul className="list-unstyled hstack gap-1 mb-0">
                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                <Button
                                    className="btn btn-sm btn-soft-info"
                                    id={`viewtooltip-${cellProps.row.original.id}`} //use param Hook  

                                >
                                    <i className="mdi mdi-eye-outline" />
                                </Button>
                            </li>
                            <UncontrolledTooltip placement="top" target={`viewtooltip-${cellProps.row.original.id}`}>
                                View
                            </UncontrolledTooltip>

                            <li>
                                <Button

                                    className="btn btn-sm btn-soft-primary"
                                    id={`edittooltip-${cellProps.row.original.id}`}
                                >
                                    <i className="mdi mdi-pencil-outline" />
                                    <UncontrolledTooltip placement="top" target={`edittooltip-${cellProps.row.original.id}`} >
                                        Edit
                                    </UncontrolledTooltip>
                                </Button>
                            </li>

                            <li>
                                <Link
                                    to="#"
                                    className="btn btn-sm btn-soft-danger"

                                    id={`deletetooltip-${cellProps.row.original.id}`}
                                >
                                    <i className="mdi mdi-delete-outline" />
                                    <UncontrolledTooltip placement="top" target={`deletetooltip-${cellProps.row.original.id}`}>
                                        Delete
                                    </UncontrolledTooltip>
                                </Link>
                            </li>
                        </ul>
                    );
                }
            },
        ],

        []
    );
    return (
        <React.Fragment>
            <div className="d-flex align-items-center border-bottom pb-3">
                <h5 className="mb-0 card-title flex-grow-1">Acitivity Lists</h5>
                <div className="flex-shrink-0">
                    <Link to="#!" className="btn btn-light me-1"><i className="mdi mdi-refresh"></i></Link>
                    <Link to="#" onClick={() => { setActivityModal(true); }} className="btn btn-primary"><i className="mdi mdi-plus me-1"></i>Create Activity</Link>
                </div>
            </div>
            <CardBody>
                <TableContainer
                    columns={columns}
                    data={activity}
                    isGlobalFilter={true}
                    isPagination={true}
                    // iscustomPageSizeOptions={true}
                    isShowingPageLength={true}
                    customPageSize={5}
                    tableClass=" align-middle nowrap mt-2"
                    paginationDiv="col-sm-12 col-md-7"
                    pagination="pagination justify-content-end pagination-rounded"
                />
            </CardBody>

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
                            // validation.handleSubmit();
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
                                        <Label htmlFor="activity_name" className="mt-2">Activities Name</Label>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <Input type="text"
                                            id="activity_name"
                                            name="activity_name"
                                            placeholder=""
                                        // value={validation.values.eactivity_name || ""}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-3 col-md-3 text-md-end text-lg-end ">
                                        <Label htmlFor="activity_condition" className="mt-2">Condition</Label>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <div className='row'>
                                            <div className='col-lg-5 col-md-5 col-sm-6 col-xs-6'>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    name="activity_condition"
                                                    id="activity_condition"
                                                    placeholder="select condition"
                                                // value={activityOptions.find((option) => option.value === validation.values.activity_condition)}
                                                // onChange={(selectedOption) => {
                                                //     validation.setFieldValue("activity_condition", selectedOption.value);
                                                // }}
                                                // onBlur={() => {
                                                //     validation.setFieldTouched("activity_condition", true);
                                                // }}
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
                                                                    inputData.length !== 1 &&
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
                                            <textarea className="form-control" name='overalldesc' id="overalldesc"></textarea>
                                            <Label htmlFor="overalldesc">Description</Label>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <div className="text-end">
                                <button type='submit'  className="btn btn-success me-1">Save Acitivities <i className="bx bx-send align-middle"></i></button>
                            </div>
                        </ModalFooter>
                    </Form>
                </div>
            </Modal>
        </React.Fragment> 
    )
}

export default index;

import React, { useState, useEffect, useMemo } from "react"
import { Link, json, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

//components
import Breadcrumbs from "components/Common/Breadcrumb";
import DeleteModal from 'components/Common/DeleteModal';
import { ToastContainer } from "react-toastify";


import { Col, Row, Card, CardBody, Label, Form, Input, Modal, ModalHeader, ModalBody, FormFeedback, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledTooltip, Badge, Button } from "reactstrap";
import TableContainer from 'components/Common/TableContainer';
import Spinners from "components/Common/Spinner";

import { createSelector } from "reselect"

import { exerciseListRequest, deleteExerciseRequest as onDeleteExerciseList } from "store/actions";

const index = () => {
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false)

    const fetchExeciseList = state => state.exerciseReducer
    const ExeciseDataProperties = createSelector(
        fetchExeciseList,
        exerciseReducer => ({
            Execise: exerciseReducer.exercise,
            loading: exerciseReducer.loading,
        })
    )

    const { Execise, loading } = useSelector(ExeciseDataProperties)
    const [isLoading, setLoading] = useState(loading)
    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            dispatch(exerciseListRequest());
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };
        fetchData();
    }, []);


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
                Header: 'Exercise Name',
                accessor: 'name',

            },
            {
                Header: 'Description',
                accessor: 'description',

            },
            {
                Header: 'Performance',
                accessor: 'how_to_perform',
            },
            {
                Header: 'Level',
                accessor: 'level',
            },

            // {
            //     Header: 'Posted Date',
            //     accessor: 'duration_start',
            // },
            // {
            //     Header: 'Last Date',
            //     accessor: 'duration_end',
            // },

            {
                Header: 'Action',
                accessor: 'action',
                disableFilters: true,
                Cell: (cellProps) => {
                    return (
                        <ul className="list-unstyled hstack gap-1 mb-0">
                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                <Button className="btn btn-sm btn-soft-primary"
                                    id={`viewtooltip-${cellProps.row.original.id}`} //use param Hook  
                                    onClick={() => {
                                        const exercise_id = cellProps.row.original;
                                        onClickView(exercise_id);
                                        setModal(true);
                                    }}
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
                                    onClick={() => {
                                        const exercise_id = cellProps.row.original;
                                        onClickDelete(exercise_id);
                                    }}
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



    //delete exercise list start
    const [deleteModal, setDeleteModal] = useState(false);
    const [exercise, setExercise] = useState(null);
    const onClickDelete = (exercise) => {
        setExercise(exercise);
        setDeleteModal(true);
    };
    const handleDeleteexercise = () => {
        if (exercise && exercise.id) {
            setLoading(true);
            dispatch(onDeleteExerciseList(exercise.id));
            setDeleteModal(false);
            setTimeout(() => {
                dispatch(exerciseListRequest());
                setLoading(false);
            }, 1000);

        }
    };
    //delete excise list end

    function modalities(data) {
        const value = data.map(item => {
            return item.name;

        })
        const commaSeparatedString = value.join(',');
        return commaSeparatedString;
    }
    // view exercise list data start
    const [viewexercisedata, setExerciseData] = useState(null);
    const onClickView = (exercise) => {
        setExerciseData(exercise);
    }
    console.log(viewexercisedata);

    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            exercise_name: viewexercisedata && viewexercisedata.name || "",
            exercise_level: viewexercisedata && viewexercisedata.level || "",
            exercise_modality: viewexercisedata && modalities(viewexercisedata.modalities) || "",
        },
        validationSchema: Yup.object({
            exercise_name: Yup.string().required("Please Enter Your Email"),
        }),
        onSubmit: (values) => {

        }
    });

    return (
        <React.Fragment >
            <DeleteModal
                show={deleteModal}
                onDeleteClick={handleDeleteexercise}
                onCloseClick={() => setDeleteModal(false)}
            />
            {/*  Modal view and edit */}

            <div className="page-content">
                <div className="container-fluid">
                    <Breadcrumbs title="" breadcrumbItem="Execise List" />
                    <Row>
                        <Col lg="12">
                            <Card>
                                <CardBody className="border-bottom">
                                    <div className="d-flex align-items-center">
                                        <h5 className="mb-0 card-title flex-grow-1">Execise Lists</h5>
                                        <div className="flex-shrink-0">

                                            <Link to="#!" className="btn btn-light me-1"><i className="mdi mdi-refresh"></i></Link>

                                            <button className="btn btn-primary" > <i className="mdi mdi-plus me-1" />Create Execise</button>
                                        </div>
                                    </div>
                                </CardBody>
                                {
                                    isLoading ? <Spinners setLoading={setLoading} />
                                        :
                                        <CardBody>
                                            <TableContainer
                                                columns={columns}
                                                data={Execise.exercise ? Execise.exercise : [{}]}
                                                isGlobalFilter={true}
                                                isPagination={true}
                                                iscustomPageSizeOptions={true}
                                                isShowingPageLength={true}
                                                customPageSize={5}
                                                tableClass="table-bordered align-middle nowrap mt-2"
                                                paginationDiv="col-sm-12 col-md-7"
                                                pagination="pagination justify-content-end pagination-rounded"
                                            />
                                        </CardBody>
                                }
                            </Card>
                        </Col>
                    </Row>

                    <ToastContainer />
                </div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={modal}
                toggle={() => {
                    setModal();
                }}
                id="exercise"
            >
                <div className="modal-content">
                    <ModalHeader toggle={() => setModal()} id="exerciseLabel" className="modal-header">
                        View Execise
                    </ModalHeader>
                    <ModalBody>
                        <Form
                            className="form-horizontal"
                            onSubmit={(e) => {
                                e.preventDefault();
                                validation.handleSubmit();
                                return false;
                            }}
                        >
                            <Row>
                                <div className="row mb-3">
                                    <div className="col-lg-4 col-md-4 text-md-end text-lg-end ">
                                        <Label htmlFor="execise_name" className="mt-2">Execise Name</Label>
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        <Input type="text"
                                            id="execise_name"
                                            name="execise_name"
                                            placeholder=""
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.exercise_name || ""}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-4 col-md-4 text-md-end text-lg-end ">
                                        <Label htmlFor="execise_level" className="mt-2">Execise level</Label>
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        <Input type="text"
                                            id="execise_level"
                                            name="execise_level"
                                            placeholder=""
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.exercise_level || ""}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-4 col-md-4 text-md-end text-lg-end ">
                                        <Label htmlFor="exercise_modality" className="mt-2">modalities</Label>
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        <Input type="text"
                                            id="exercise_modality"
                                            name="exercise_modality"
                                            placeholder=""
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.exercise_modality || ""}
                                            readOnly
                                        />
                                    </div>
                                </div>


                                <Col lg={12}>
                                    <div className="text-end">
                                        {/* <button type='submit' className="btn btn-success me-1">Send Application <i className="bx bx-send align-middle"></i></button> */}
                                        <button className="btn btn-outline-secondary" onClick={() => setModal()}>Cancel</button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                </div>
            </Modal>
        </React.Fragment >
    )
}

export default index


import React, { useState, useEffect, useMemo } from "react"
import { Link, json, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { format } from 'date-fns';
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

//components
import Breadcrumbs from "components/Common/Breadcrumb";
import DeleteModal from 'components/Common/DeleteModal';


import { Col, Row, Card, CardBody, Label, Form, Input, Modal, ModalHeader, ModalBody, UncontrolledTooltip, Badge, Button } from "reactstrap";
import TableContainer from 'components/Common/TableContainer';
import Spinners from "components/Common/Spinner";

import { createSelector } from "reselect"

import { exerciseListRequest, deleteExerciseRequest as onDeleteExerciseList } from "store/actions";

const index = () => {
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false)
    const [userRole, setUserRole] = useState(null)

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

        setUserRole(JSON.parse(localStorage.getItem('userData')).role.type)
    }, []);


    //coloums header start
    const columns = useMemo(
        () => {
            let columnArray = [
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
                    Header: 'Level',
                    accessor: 'level',
                },
                {
                    Header: 'Date',
                    accessor: 'created_at',
                    Cell: (cellProps) => (cellProps.row.original.created_at) ? format(new Date(cellProps.row.original.created_at), 'dd MMM, yyyy') : ""
                },
            ];
           
            if (JSON.parse(localStorage.getItem('userData')).role.type == "Admin") {
                columnArray.push({

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
                                        onClick={() => sendListData(cellProps.row.original, "Edit Exercise")}
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

                })
            }else{
                columnArray.push({

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
                               

                            </ul>
                        );
                    }

                })

            }
            return columnArray;

        },
     
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

    // view exercise list data start
    const [viewexercisedata, setExerciseData] = useState(null);
    const onClickView = (exercise) => {
        setExerciseData(exercise);
    }

    //Edit send data navigate
    const navigate = useNavigate();
    function sendListData(data, EditTitleName = "Edit Exercise Application") {
        navigate(`/Admin/hysport`, {
            state: { data, EditTitleName, }
        })
    }

    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            exercise_name: viewexercisedata && viewexercisedata.name || "",
            exercise_description: viewexercisedata && viewexercisedata.description || "",
            exercise_level: viewexercisedata && viewexercisedata.level || "",
            exercise_modality: viewexercisedata && viewexercisedata.modalities.map(item => item.name).join(' , ') || "",
            exercise_equipments: viewexercisedata && viewexercisedata.equipments.map(item => item.name).join(' , ') || "",
            exercise_muscles: viewexercisedata && viewexercisedata.muscles.map(item => item.name).join(' , ') || "",
            exercise_benifits: viewexercisedata && viewexercisedata.benifits.map(item => item.point).join(' , ') || "",
            exercise_ptags: viewexercisedata && viewexercisedata.ptags.map(item => item.name).join(' , ') || "",
        },

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
                                            {userRole=="Admin"? <Link to="/Admin/hysport" className="btn btn-primary"><i className="mdi mdi-plus me-1"></i>Create Execise</Link> :""}
                                            

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
                        Exercise Detail
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
                                            value={validation.values.exercise_modality || ""}
                                            readOnly
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-lg-4 col-md-4 text-md-end text-lg-end ">
                                        <Label htmlFor="exercise_equipments" className="mt-2">Equipments</Label>
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        <Input type="text"
                                            id="exercise_equipments"
                                            name="exercise_equipments"
                                            placeholder=""
                                            value={validation.values.exercise_equipments || ""}
                                            readOnly
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-lg-4 col-md-4 text-md-end text-lg-end ">
                                        <Label htmlFor="exercise_muscles" className="mt-2">Muscles</Label>
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        <Input type="text"
                                            id="exercise_muscles"
                                            name="exercise_muscles"
                                            placeholder=""
                                            value={validation.values.exercise_muscles || ""}
                                            readOnly
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-lg-4 col-md-4 text-md-end text-lg-end ">
                                        <Label htmlFor="exercise_benifits" className="mt-2">Benifits</Label>
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        <Input type="text"
                                            id="exercise_benifits"
                                            name="exercise_benifits"
                                            placeholder=""
                                            value={validation.values.exercise_benifits || ""}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-4 col-md-4 text-md-end text-lg-end ">
                                        <Label htmlFor="exercise_ptags" className="mt-2">Performance Tags</Label>
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        <Input type="text"
                                            id="exercise_ptags"
                                            name="exercise_ptags"
                                            placeholder=""
                                            value={validation.values.exercise_ptags || ""}
                                            readOnly
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-lg-4 col-md-4 text-md-end text-lg-end ">
                                        <Label htmlFor="exercise_description" className="mt-2">Description</Label>
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        <textarea className="form-control"
                                            id="exercise_description"
                                            name="exercise_description"
                                            placeholder=""
                                            value={validation.values.exercise_description || ""}
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

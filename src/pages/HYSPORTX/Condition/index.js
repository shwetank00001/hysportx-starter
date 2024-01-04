import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import * as Yup from "yup"
import { useFormik } from "formik"
import { useSelector, useDispatch } from "react-redux"
import { createSelector } from "reselect"
import { Row, Col, Card, CardHeader, CardBody, Button, UncontrolledTooltip, Modal, ModalBody, ModalHeader, ModalFooter, Form, Label, Input, FormFeedback } from 'reactstrap'
import TableContainer from "components/Common/TableContainer"
import DeleteModal from "components/Common/DeleteModal"
import { onAddCondition as addConditionForm, conditionListRequest,deleteConditionRequest } from "../../../store/actions";
const index = () => {

    const dispatch = useDispatch();
    const [conditionModal, setConditionModal] = useState(false)
    const [viewConditionData, setConditionViewData] = useState(null)
    const [modalReadOnly, setModalReadOnly] = useState(false)
    const fetchCondtionList = state => state.conditionReducer
    let modalTitle="Create Condition";
    if(viewConditionData !=null){
        modalTitle="View Condition";
    }

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
    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            code:(viewConditionData && viewConditionData.code) || "",
            name:(viewConditionData && viewConditionData.name) ||  "",
            description:(viewConditionData && viewConditionData.description) ||  "",
        },
        validationSchema: Yup.object({
            code: Yup.string().required(
                "Please Enter condition short Name"
            ),
        }),
        onSubmit: values => {
            dispatch(addConditionForm(values));
        },
    })
    useEffect(() => {
        if (errors === null) {
            setConditionModal(false);
            validation.resetForm();
        }

    }, [dispatch, errors])

    const columns = useMemo(
        () => [
            {
                Header: "No",
                accessor: "id",
                Cell: cellProps => {
                    return (
                        
                        <>
                            <p className="">{cellProps.rows.length-cellProps.row.index}</p>
                        </>
                    )
                },
            },
            {
                Header: "Condition Code",
                accessor: "code",
            },
            {
                Header: "Name",
                accessor: "name",
            },

            {
                Header: "Description",
                accessor: "description",
            },
            {
                Header: "Action",
                accessor: "action",
                disableFilters: true,
                Cell: cellProps => {
                    return (
                        <ul className="list-unstyled hstack gap-1 mb-0">
                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                <Button
                                    className="btn btn-sm btn-soft-primary"
                                    id={`viewtooltip-${cellProps.row.original ? cellProps.row.original.code : ''}`}
                                onClick={() => {
                                  const singleConitionData = cellProps.row.original
                                  setConditionViewData(singleConitionData)
                                  setConditionModal(true)
                                  setModalReadOnly(true);
                                }}
                                >
                                    <i className="mdi mdi-eye-outline" />
                                </Button>
                            </li>
                            <UncontrolledTooltip
                                placement="top"
                                target={`viewtooltip-${cellProps.row.original ? cellProps.row.original.code : ''}`}
                            >
                                View
                            </UncontrolledTooltip>
                            <li>
                                <Link
                                    to="#"
                                    onClick={() => {
                                        const condition_code = cellProps.row.original
                                        onClickDelete(condition_code)
                                    }}
                                    className="btn btn-sm btn-soft-danger"
                                    id={`deletetooltip-${cellProps.row.original ? cellProps.row.original.code : ''}`}
                                >
                                    <i className="mdi mdi-delete-outline" />
                                    <UncontrolledTooltip
                                        placement="top"
                                        target={`deletetooltip-${cellProps.row.original ? cellProps.row.original.code : ''}`}
                                    >
                                        Delete
                                    </UncontrolledTooltip>
                                </Link>
                            </li>
                        </ul>
                    )
                },
            },
        ],
        []
    )

   

    const [deleteModal, setDeleteModal] = useState(false)
    const [condition, setCondition] = useState(null)
    const onClickDelete = data => {
        setCondition(data)
        setDeleteModal(true)
    }
    const handleDeleteCondition = () => {
        setDeleteModal(false)
        dispatch(deleteConditionRequest(condition.code))
    }

    return (
        <React.Fragment>
            <DeleteModal
                text={'Are you Sure you want to Delete the Condition list ?'}
                show={deleteModal}
                onDeleteClick={handleDeleteCondition}
                onCloseClick={() => setDeleteModal(false)}
            />
            <div className="d-flex align-items-center border-bottom pb-3">
                <h5 className="mb-0 card-title flex-grow-1">Condition Lists</h5>
                <div className="flex-shrink-0">
                    <Link to="#!" onClick={()=>{dispatch(conditionListRequest())}} className="btn btn-light me-1"><i className="mdi mdi-refresh"></i></Link>
                    <Link to="#" onClick={() => { setConditionModal(true); setModalReadOnly(false) }} className="btn btn-primary"><i className="mdi mdi-plus me-1"></i>Create Condition</Link>
                </div>
            </div>
            <CardBody>
                <TableContainer
                    columns={columns}
                    data={Condition.conditions ? Condition.conditions : [{}]}
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

            <Modal
                isOpen={conditionModal}
                toggle={() => {
                    setConditionViewData(null);
                    setConditionModal()
                }}
                id="condition"
            >
                <div className="modal-content">
                    <ModalHeader
                        toggle={() => {setConditionModal(),setConditionViewData(null);}}
                        id="ConditionLabel"
                        className="modal-header"
                    >
                        {modalTitle}
                    </ModalHeader>
                    <ModalBody>
                        <Form
                            className="form-horizontal"
                            onSubmit={e => {
                                e.preventDefault()
                                validation.handleSubmit()
                                return false
                            }}
                        >
                            <Row>
                                <div className="row mb-3">
                                    <div className="col-lg-4 col-md-4 text-md-end text-lg-end ">
                                        <Label htmlFor="code" className="mt-2">
                                            Condition Code
                                        </Label>
                                    </div>
                                    <div className="col-lg-8 col-md-8">

                                        <Input
                                            type="text"
                                            id="code"
                                            name="code"
                                            placeholder=""
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.code || ""}
                                            invalid={
                                                validation.touched.code && validation.errors.code ? true : false
                                            }
                                            readOnly={modalReadOnly}
                                        />

                                        {validation.touched.code && validation.errors.code ? (
                                            <FormFeedback type="invalid">{validation.errors.code}</FormFeedback>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-4 col-md-4 text-md-end text-lg-end ">
                                        <Label htmlFor="name" className="mt-2">
                                            Name
                                        </Label>
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        <Input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder=""
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.name || ""}
                                            readOnly={modalReadOnly}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-4 col-md-4 text-md-end text-lg-end ">
                                        <Label htmlFor="participator_modality" className="mt-2">
                                            Description
                                        </Label>
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        <div className="form-floating">
                                            <textarea className="form-control" name='description' id="description"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.description || ""}
                                                readOnly={modalReadOnly}
                                            ></textarea>
                                            <Label htmlFor="description">code Description</Label>
                                        </div>

                                    </div>
                                </div>
                                <Col lg={12} className={modalReadOnly?'d-none':'d-block'}>
                                    
                                        
                                    
                                    <div className="text-end">
                                        <button
                                            className="btn btn-success me-1"
                                        // onClick={(e) => {e.preventDefault(),setConditionModal()}}
                                        >
                                            Save Condition <i className="bx bx-send align-middle"></i>
                                        </button>
                                    </div>
                                    
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default index;
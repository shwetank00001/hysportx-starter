import React, { useEffect, useState, useMemo } from "react"
import { useSelector, useDispatch } from "react-redux"
import { benefitListRequest,deleteBenefitRequest,addBenefitRequest } from "../../../../store/benifit/actions"
import TableContainer from "components/Common/TableContainer"
import { createSelector } from "reselect"
import { Link } from 'react-router-dom'
import * as Yup from "yup"
import { useFormik } from "formik"
import DeleteModal from "components/Common/DeleteModal"
import { Row, Col, Card, CardHeader, CardBody, Button, UncontrolledTooltip, Modal, ModalBody, ModalHeader, ModalFooter, Form, Label, Input, FormFeedback } from 'reactstrap'

const BenefitsCategory = () => {
  const dispatch = useDispatch();
  const [benefitModal, setBenifitModal] = useState(false)
  const fetchBenifitList = state => state.benefitReducer
  const benifitDataProperties = createSelector(
    fetchBenifitList,
    benifitReducer => ({
      Benifit: benifitReducer.benefit,
      error: benifitReducer.error,
      errors: benifitReducer.adderrors,
    })
  )
  const { Benifit, error, errors } = useSelector(benifitDataProperties)
  useEffect(() => { dispatch(benefitListRequest()) }, [dispatch])

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {  
      point: "",
      description: "",
    },
    validationSchema: Yup.object({
      point: Yup.string().required(
        "Please Enter Benifit Name"
      ),
    }),
    onSubmit: values => {
      dispatch(addBenefitRequest(values));
      setBenifitModal();
      validation.resetForm();
    },
  })

  //---bug issue modal not close after submit
  // useEffect(() => {
  //   if (errors===null) {
  //       setBenifitModal();
  //       validation.resetForm();
  //   }
  // }, [errors])

  const columns = useMemo(
    () => [
      {
        Header: "No",
        accessor: "id",
        Cell: cellProps => {
          return (

            <>
              <p className="">{cellProps.rows.length - cellProps.row.index}</p>
            </>
          )
        },
      },

      {
        Header: "Benefit Name",
        accessor: "point",
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
              {/* <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
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
                        </UncontrolledTooltip> */}
              {/* <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                            <Button
                                className="btn btn-sm btn-soft-info"
                                id={`edittooltip-${cellProps.row.original ? cellProps.row.original.code : ''}`}
                            onClick={() => {
                              const singleConitionData = cellProps.row.original
                              setConditionEditData(singleConitionData)
                              setConditionModal(true)
                              setModalReadOnly(false);
                            }}
                            >
                                <i className="bx bx-pencil" />
                            </Button>
                        </li>
                        <UncontrolledTooltip
                            placement="top"
                            target={`edittooltip-${cellProps.row.original ? cellProps.row.original.code : ''}`}
                        >
                            update condition
                        </UncontrolledTooltip> */}
              <li>
                <Link
                  to="#"
                  onClick={() => {
                    const benefit_id = cellProps.row.original
                    onClickDelete(benefit_id)
                  }}
                  className="btn btn-sm btn-danger"
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
  const [benefit, setBenefit] = useState(null)
  const onClickDelete = data => {
    setBenefit(data)
    setDeleteModal(true)
  }
  const handleDeleteBenefit = () => {
    setDeleteModal(false)
    dispatch(deleteBenefitRequest(benefit.id))
  }


  return (

<React.Fragment>

      <DeleteModal
        text={'Are you Sure you want to Delete the Benefit list ?'}
        show={deleteModal}
        onDeleteClick={handleDeleteBenefit}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="d-flex align-items-center border-bottom  p-3 pt-0">
        <h5 className="mb-0 card-title flex-grow-1">Benefit Lists</h5>
        <div className="flex-shrink-0">
          <Link to="#!" onClick={() => { dispatch(benefitListRequest()) }} className="btn btn-light me-1"><i className="mdi mdi-refresh"></i></Link>
          <Link to="#" onClick={() => { setBenifitModal(true); }} className="btn btn-primary"><i className="mdi mdi-plus me-1"></i>Create Benefit</Link>
        </div>
      </div>
      <TableContainer
        columns={columns}
        data={Benifit.benifit ? Benifit.benifit : [{}]}
        isGlobalFilter={true}
        isPagination={true}
        // iscustomPageSizeOptions={true}
        isShowingPageLength={true}
        customPageSize={3}
        tableClass=" align-middle nowrap mt-2"
        paginationDiv="col-sm-12 col-md-7"
        pagination="pagination justify-content-end pagination-rounded"
      />
      <Modal
        isOpen={benefitModal}
        toggle={() => {

          setBenifitModal();
        }}
        id="condition"
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => { setBenifitModal() }}
            id="ConditionLabel"
            className="modal-header"
          >
            Add Benefit
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
                    <Label htmlFor="point" className="mt-2">
                      Benefit Name
                    </Label>
                  </div>
                  <div className="col-lg-8 col-md-8">

                    <Input
                      type="text"
                      id="point"
                      name="point"
                      placeholder=""
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.point || ""}
                      invalid={
                        validation.touched.point && validation.errors.point ? true : false
                      }
                      readOnly={false}
                    />

                    {validation.touched.point && validation.errors.point ? (
                      <FormFeedback type="invalid">{validation.errors.point}</FormFeedback>
                    ) : null}
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
                        readOnly={false}
                      ></textarea>
                      
                    </div>

                  </div>
                </div>
                <Col lg={12}>



                  <div className="text-end">
                    <button
                      className="btn btn-success me-1"
                    // onClick={(e) => {e.preventDefault(),setConditionModal()}}
                    >
                      Save Benifit  <i className="bx bx-send align-middle"></i>
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

export default BenefitsCategory

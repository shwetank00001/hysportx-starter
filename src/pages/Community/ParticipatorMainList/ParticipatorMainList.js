import React, { useState, useEffect, useMemo } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import * as Yup from "yup"
import { useFormik } from "formik"
import {Col,Row,Card,CardBody, Label,Form,Input,Modal,ModalHeader, ModalBody,UncontrolledTooltip,Button,FormFeedback,} from "reactstrap"
import TableContainer from "components/Common/TableContainer"
import Breadcrumbs from "components/Common/Breadcrumb"
import DeleteModal from "components/Common/DeleteModal"
import { ToastContainer } from "react-toastify"
import { createSelector } from "reselect"
import {participatorMainListRequest,deleteParticipatorRequest,onAddParticipator as addParticipatorForm,} from "../../../store/actions";
const ParticipatorMainList = () => {
  const dispatch = useDispatch()
  const [addParticipatorModal, setAddParticipatorModal] = useState(false)
  const [viewModal, setviewModal] = useState(false)
  const fetchParticipatorList = state => state.participatorReducer
  const ParticipatorDataProperties = createSelector(
    fetchParticipatorList,
    participatorReducer => ({
      Participator: participatorReducer.participator,
      error: participatorReducer.error,
      errors: participatorReducer.adderrors,
    })
  )
  const { Participator,error,errors } = useSelector(ParticipatorDataProperties)
  useEffect(() => {dispatch(participatorMainListRequest()) }, [dispatch])
  const columns = useMemo(
    () => [
      {
        Header: "No",
        accessor: "id",
        Cell: cellProps => {
          return (
            <>
              <p className="">{cellProps.row.index + 1}</p>
            </>
          )
        },
      },
      {
        Header: "Participator Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
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
                  id={`viewtooltip-${cellProps.row.original?cellProps.row.original.id:''}`}
                // onClick={() => {
                //   const participator_id = cellProps.row.original
                //   onClickView(participator_id)
                //   setModal(true)
                // }}
                >
                  <i className="mdi mdi-eye-outline" />
                </Button>
              </li>
              <UncontrolledTooltip
                placement="top"
                target={`viewtooltip-${cellProps.row.original?cellProps.row.original.id:''}`}
              >
                View
              </UncontrolledTooltip>
              <li>
                <Button
                  className="btn btn-sm btn-soft-primary"
                  id={`edittooltip-${cellProps.row.original?cellProps.row.original.id:''}`}
                >
                  <i className="mdi mdi-pencil-outline" />
                  <UncontrolledTooltip
                    placement="top"
                    target={`edittooltip-${cellProps.row.original?cellProps.row.original.id:''}`}
                  >
                    Edit
                  </UncontrolledTooltip>
                </Button>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() => {
                    const participator_id = cellProps.row.original
                    onClickDelete(participator_id)
                  }}
                  className="btn btn-sm btn-soft-danger"
                  id={`deletetooltip-${cellProps.row.original?cellProps.row.original.id:''}`}
                >
                  <i className="mdi mdi-delete-outline" />
                  <UncontrolledTooltip
                    placement="top"
                    target={`deletetooltip-${cellProps.row.original?cellProps.row.original.id:''}`}
                  >
                    Remove Partcipator
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
  const [participator, setParticipator] = useState(null)
  const onClickDelete = participator => {
    setParticipator(participator)
    setDeleteModal(true)
  }
const handleDeleteParticipator = () => {
  setDeleteModal(false)
  dispatch(deleteParticipatorRequest(participator.id))
}
  // Handle create participator start 
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name:  "",
      last_name:  "",
      email:  "",
      phone:"",
      password:"",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Please Enter Your Name"),
      email: Yup.string().email("Invalid email address format").required("Email is required"),
      phone:Yup.string().matches(phoneRegExp, 'Phone number is not valid') .min(10, "please enter only 10 digit number").max(10, "not valid only 10 digit number valid"),
    }),
    onSubmit: (values) => {
      dispatch(addParticipatorForm(values));     
    }
  });
  useEffect(() => {
    if(errors===null){
      setAddParticipatorModal(false);
      validation.resetForm();
    }

  }, [dispatch,errors])
  // Handle create participator end

  return (
    <React.Fragment>
      <DeleteModal
        text={'Are you Sure you want to remove the participator ?'}
        show={deleteModal}
        onDeleteClick={handleDeleteParticipator}
        onCloseClick={() => setDeleteModal(false)}
      />
      {/*  Modal view and edit */}
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="" breadcrumbItem="Participator List" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody className="border-bottom">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0 card-title flex-grow-1">
                      Participator Lists
                    </h5>
                    <div className="flex-shrink-0">
                      <Link to="#!" className="btn btn-light me-1">
                        <i className="mdi mdi-refresh"></i>
                      </Link>
                      <button className="btn btn-primary"
                        onClick={() => {
                          setAddParticipatorModal(true)
                        }}
                      >
                        {" "}
                        <i className="mdi mdi-plus me-1" />
                        Create Participator
                      </button>
                    </div>
                  </div>
                </CardBody>
            
                  <CardBody>
                    <TableContainer
                      columns={columns}
                      data={
                        Participator.participators
                          ? Participator.participators
                          : [{}]
                      }
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
                
              </Card>
            </Col>
          </Row>
          <ToastContainer />
        </div>
      </div>
      <Modal isOpen={viewModal}toggle={() => {setviewModal()}} id="participator">
        <div className="modal-content">
          <ModalHeader toggle={() => setviewModal()} id="participatorLabel" className="modal-header"> View Participator </ModalHeader>
          <ModalBody>
            <Form className="form-horizontal"onSubmit={e => { e.preventDefault()
                validation.handleSubmit()
                return false
              }}
            >
              <Row>
                <div className="row mb-3">
                  <div className="col-lg-4 col-md-4 text-md-end text-lg-end ">
                    <Label htmlFor="participator_name" className="mt-2">
                      Participator Name
                    </Label>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <Input
                      type="text"
                      id="participator_name"
                      name="participator_name"
                      placeholder=""
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.participator_name || ""}
                      readOnly
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-4 col-md-4 text-md-end text-lg-end ">
                    <Label htmlFor="participator_level" className="mt-2">
                      Participator level
                    </Label>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <Input
                      type="text"
                      id="participator_level"
                      name="participator_level"
                      placeholder=""
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.participator_level || ""}
                      readOnly
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-4 col-md-4 text-md-end text-lg-end ">
                    <Label htmlFor="participator_modality" className="mt-2">
                      modalities
                    </Label>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <Input
                      type="text"
                      id="participator_modality"
                      name="participator_modality"
                      placeholder=""
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.participator_modality || ""}
                      readOnly
                    />
                  </div>
                </div>
                <Col lg={12}>
                  <div className="text-end">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setviewModal()}
                    >
                      Cancel
                    </button>
                  </div>
                </Col>
              </Row>
            </Form>
          </ModalBody>
        </div>
      </Modal> 
      {/* Create participator form start */}
      <Modal
        isOpen={addParticipatorModal}
        toggle={() => {
          setAddParticipatorModal()
        }}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Add New Participator{" "}
          </h5>
          <button
            type="button"
            onClick={() => {
              setAddParticipatorModal(false)
            }}
            className="btn-close"
          ></button>
        </div>
        <Form
          className="form-horizontal"
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
            return false;
          }}
        >
          <div className="modal-body px-5">
            <Row className="mb-4">
              <Label
                htmlFor="horizontal-lastname-Input"
                className="col-sm-3 col-form-label"
              >
                First name <span className="text-danger">*</span>
              </Label>
              <Col sm={9}>
                <Input
                  name="first_name"
                  className="form-control"
                  placeholder="Enter First Name"
                  type="text"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.first_name || ""}
                  invalid={
                    validation.touched.first_name && validation.errors.first_name ? true : false
                  }
                />
                {validation.touched.first_name && validation.errors.first_name ? (
                <FormFeedback type="invalid">{validation.errors.first_name}</FormFeedback>
              ) : null}
              </Col>
            </Row>
            <Row className="mb-4">
              <Label
                htmlFor="horizontal-lastname-Input"
                className="col-sm-3 col-form-label"
              >
                Last name
              </Label>
              <Col sm={9}>
                <Input
                  name="last_name"
                  className="form-control"
                  placeholder="Enter Last Name"
                  type="text"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.last_name || ""}     
                />
              </Col>
            </Row>

            <Row className="mb-4">
              <Label
                htmlFor="horizontal-lastname-Input"
                className="col-sm-3 col-form-label"
              >
                Email <span className="text-danger">*</span>
              </Label>
              <Col sm={9}>
                <Input
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  type="email"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.email || ""}
                  invalid={
                    validation.touched.email && validation.errors.email ? true : false
                  }
                />
                {validation.touched.email && validation.errors.email ? (
                <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
              ) : null}
              </Col>
            </Row>

            <Row className="mb-4">
              <Label
                htmlFor="horizontal-lastname-Input"
                className="col-sm-3 col-form-label"
              >
                Phone
              </Label>
              <Col sm={9}>
                <Input
                  name="phone"
                  className="form-control"
                  placeholder="Enter phone number"
                  type="text"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.phone || ""}
                  invalid={
                    validation.touched.phone && validation.errors.phone ? true : false
                  }
                />
                {validation.touched.phone && validation.errors.phone ? (
                <FormFeedback type="invalid">{validation.errors.phone}</FormFeedback>
              ) : null}
              </Col>
            </Row>

            <Row className="mb-4">
              <Label
                htmlFor="horizontal-lastname-Input"
                className="col-sm-3 col-form-label"
              >
               password
              </Label>
              <Col sm={9}>
                <Input
                  name="password"
                  className="form-control"
                  placeholder="Create Password"
                  type="text"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.password || ""}
                />
              </Col>
            </Row>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-success">Create Participator <i className="bx bx-send align-middle"></i> </button>
          </div>
        </Form>
      </Modal>
      {/* Create participator form end */}
    </React.Fragment>
  )
}

export default ParticipatorMainList

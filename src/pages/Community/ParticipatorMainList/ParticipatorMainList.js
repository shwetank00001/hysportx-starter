import React, { useState, useEffect, useMemo } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import * as Yup from "yup"
import { useFormik } from "formik"
import {
  Col,
  Row,
  Card,
  CardBody,
  Label,
  Form,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  UncontrolledTooltip,
  Button,
} from "reactstrap"
import TableContainer from "components/Common/TableContainer"
import Spinners from "components/Common/Spinner"
import Breadcrumbs from "components/Common/Breadcrumb"
import DeleteModal from "components/Common/DeleteModal"
import { ToastContainer } from "react-toastify"
import { createSelector } from "reselect"
import {
  participatorMainListRequest,
  deleteParticipatorRequest,
} from "../../../store/participator/actions"

const ParticipatorMainList = () => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)

  const fetchParticipatorList = state => state.participatorReducer
  const ParticipatorDataProperties = createSelector(
    fetchParticipatorList,
    participatorReducer => ({
      Participator: participatorReducer.participator,
      loading: participatorReducer.loading,
    })
  )

  const { Participator, loading } = useSelector(ParticipatorDataProperties)
  const [isLoading, setLoading] = useState(loading)

  useEffect(() => {
    const fetchData = () => {
      setLoading(true)
      dispatch(participatorMainListRequest())
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
    fetchData()
  }, [dispatch])

  console.log("Participator here", Participator.participators)

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
                  id={`viewtooltip-${cellProps.row.original.id}`}
                  onClick={() => {
                    const participator_id = cellProps.row.original
                    onClickView(participator_id)
                    setModal(true)
                  }}
                >
                  <i className="mdi mdi-eye-outline" />
                </Button>
              </li>
              <UncontrolledTooltip
                placement="top"
                target={`viewtooltip-${cellProps.row.original.id}`}
              >
                View
              </UncontrolledTooltip>
              <li>
                <Button
                  className="btn btn-sm btn-soft-primary"
                  id={`edittooltip-${cellProps.row.original.id}`}
                >
                  <i className="mdi mdi-pencil-outline" />
                  <UncontrolledTooltip
                    placement="top"
                    target={`edittooltip-${cellProps.row.original.id}`}
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
                  id={`deletetooltip-${cellProps.row.original.id}`}
                >
                  <i className="mdi mdi-delete-outline" />
                  <UncontrolledTooltip
                    placement="top"
                    target={`deletetooltip-${cellProps.row.original.id}`}
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
  const [participator, setParticipator] = useState(null)

  const onClickDelete = participator => {
    setParticipator(participator)
    setDeleteModal(true)
  }

  const handleDeleteParticipator = () => {
    if (participator && participator.id) {
      setLoading(true)
      dispatch(deleteParticipatorRequest(participator.id))
      setDeleteModal(false)
      setTimeout(() => {
        dispatch(participatorMainListRequest())
        setLoading(false)
      }, 1000)
    }
  }

  const modalities = data => {
    const value = data.map(item => {
      return item.name
    })
    const commaSeparatedString = value.join(",")
    return commaSeparatedString
  }

  const [viewparticipatordata, setParticipatorData] = useState(null)

  const onClickView = item => {
    setParticipatorData(item)
  }

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      participator_name:
        (viewparticipatordata && viewparticipatordata.name) || "",
      participator_level:
        (viewparticipatordata && viewparticipatordata.level) || "",
      participator_modality:
        (viewparticipatordata && modalities(viewparticipatordata.modalities)) ||
        "",
    },
    validationSchema: Yup.object({
      participator_name: Yup.string().required(
        "Please Enter Participator Name"
      ),
    }),
    onSubmit: values => {},
  })

  return (
    <React.Fragment>
      <DeleteModal
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
                      <button className="btn btn-primary">
                        {" "}
                        <i className="mdi mdi-plus me-1" />
                        Create Participator
                      </button>
                    </div>
                  </div>
                </CardBody>
                {isLoading ? (
                  <Spinners setLoading={setLoading} />
                ) : (
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
                )}
              </Card>
            </Col>
          </Row>
          <ToastContainer />
        </div>
      </div>
      <Modal
        isOpen={modal}
        toggle={() => {
          setModal()
        }}
        id="participator"
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => setModal()}
            id="participatorLabel"
            className="modal-header"
          >
            View Participator
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
                      onClick={() => setModal()}
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
    </React.Fragment>
  )
}

export default ParticipatorMainList

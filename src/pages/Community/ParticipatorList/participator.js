import React, { useState, useMemo, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import {
  Col,
  Input,
  Row,
  Label,
  Modal,
  Form,
  Card,
  CardBody,
  Button,
  UncontrolledTooltip,
  Container,
} from "reactstrap"
import TableContainer from "components/Common/TableContainer"
//import components
import Breadcrumbs from 'components/Common/Breadcrumb';

import { participatorListRequest } from '../../../store/participator/actions'


const participatorList = [
  {
    id: 1,
    index: 1,
    firstName: "Jennifer Chang",
    lastName: "Jennifer Chang",
    email: "shwetank",
    mobile: "88888888888",
  },
  {
    id: 1,
    index: 2,
    firstName: "Jennifer Chang",
    lastName: "Jennifer Chang",
    email: "shwetank",
    mobile: "88888888888",
  },
  {
    id: 1,
    index: 3,
    firstName: "Jennifer Chang",
    lastName: "Jennifer Chang",
    email: "shwetank",
    mobile: "88888888888",
  },
  {
    id: 1,
    index: 4,
    firstName: "Jennifer Chang",
    lastName: "Jennifer Chang",
    email: "shwetank",
    mobile: "88888888888",
  },
  {
    id: 1,
    index: 5,
    firstName: "Jennifer Chang",
    lastName: "Jennifer Chang",
    email: "shwetank",
    mobile: "88888888888",
  },
]



const Participator = () => {

  const dispatch = useDispatch()
  const parti = useSelector(state => state.participatorReducer.participator)
  console.log("participator data", parti)

  useEffect( () => {
    dispatch(participatorListRequest())
  }, [dispatch])




  const [open, setOpen] = useState(false)

  function removeBodyCss() {
    document.body.classList.add("no_padding")
  }

  //coloums header start
  const columns = useMemo(
    () => [
      {
        Header: "Sr No",
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
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },

      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Mobile No",
        accessor: "mobile",
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
                  id={`viewtooltip-${cellProps.row.original.id}`} //use param Hook
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
                  className="btn btn-sm btn-soft-danger"
                  // onClick={() => {
                  //     const jobData = cellProps.row.original;
                  //     onClickDelete(jobData);
                  // }}
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
  return (
    <React.Fragment>
      <Container fluid>
        {/* Render Breadcrumbs */}
        <Breadcrumbs title="fwgames" breadcrumbItem="hyposports" />
        
        <Card>

          <Col xl={12}>
            <Card>
              <CardBody className="border-bottom">
                <div className="d-flex align-items-center">
                  <h5 className="mb-0 card-title flex-grow-1">Participator Lists</h5>
                  <div className="flex-shrink-0">
                    <Link to="#!" className="btn btn-light me-1"><i className="mdi mdi-refresh"></i></Link>
                    <button className="btn btn-primary" onClick={() => {setOpen(!open), removeBodyCss() }}> <i className="mdi mdi-plus me-1" />Create Participator</button>

                  </div>
                </div>
              </CardBody>
              <CardBody>
                <TableContainer
                  columns={columns}
                  data={participatorList}
                  isGlobalFilter={true}
                  customPageSizeOptions={3}
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
            <div>
              <Modal
                isOpen={open}
                toggle={() => {
                  setOpen(false)
                }}
              >
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add New Participator{" "}
                  </h5>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false)
                    }}
                    className="btn-close"
                  ></button>
                </div>
                <Form>
                  <div className="modal-body px-5">
                    <Row className="mb-4">
                      <Label
                        htmlFor="horizontal-firstname-Input"
                        className="col-sm-3 col-form-label"
                      >
                        First name
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          name="first_name"
                          className="form-control"
                          id="horizontal-firstname-Input"
                          placeholder="Enter Your first name"
                        />
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
                          type="text"
                          name="last_name"
                          className="form-control"
                          id="horizontal-lastname-Input"
                          placeholder="Enter Your Last Name"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Label
                        htmlFor="horizontal-email-Input"
                        className="col-sm-3 col-form-label"
                      >
                        Email
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="email"
                          name="email"
                          className="form-control"
                          id="horizontal-email-Input"
                          placeholder="Enter Your Email ID"
                        />
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
                          type="text"
                          name="phone"
                          className="form-control"
                          id="horizontal-lastname-Input"
                          placeholder="Enter Your Mobile"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Label
                        htmlFor="horizontal-password-Input"
                        className="col-sm-3 col-form-label"
                      >
                        Password
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="password"
                          autoComplete="off"
                          className="form-control"
                          id="horizontal-password-Input"
                          placeholder="Enter Your Password"
                        />
                      </Col>
                    </Row>

                  
                  </div>
                  <div className="modal-footer">
                    <button
                      onClick={() => setOpen(false)}
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      + ADD
                    </button>
                  </div>
                </Form>
              </Modal>
            </div>
          </Col>
        </Card>
      </Container>
    </React.Fragment>
  )
}

export default Participator

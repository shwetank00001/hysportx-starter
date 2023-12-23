import React, { useState, useMemo, useEffect } from "react"
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
  Breadcrumb,
} from "reactstrap"
import TableContainer from "components/Common/TableContainer"

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
          <Breadcrumb title="fwgames" breadcrumbItem="hyposports" />
          <Card>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <TableContainer
                    columns={columns}
                    data={participatorList}
                    isGlobalFilter={true}
                    isAddParticipator={1}
                    isJobListGlobalFilter={false}
                    handleNewParticipator={() => {
                      setOpen(!open)
                      removeBodyCss()
                    }}
                    customPageSizeOptions={3}
                    // isJobListGlobalFilter={true}
                    isPagination={true}
                    iscustomPageSizeOptions={true}
                    isShowingPageLength={true}
                    customPageSize={5}
                    tableClass="table-bordered text-center align-middle nowrap mt-2"
                    paginationDiv="col-sm-12 col-md-7"
                    pagination="pagination justify-content-end pagination  pagination-rounded"
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
                      Add New Participent{" "}
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
                    <div className="modal-body">
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
                          Mobile No
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="text"
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

                      <Row className="justify-content-end">
                        <Col sm={9}>
                          <div className="form-check mb-4">
                            <Input
                              type="checkbox"
                              className="form-check-Input"
                              id="horizontal-customCheck"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="horizontal-customCheck"
                            >
                              Remember me
                            </Label>
                          </div>

                          {/* <div>
                          <Button
                            type="submit"
                            color="primary"
                            className="w-md"
                          >
                            Submit
                          </Button>
                        </div> */}
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

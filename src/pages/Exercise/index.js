<<<<<<< HEAD
import React, { useState, useEffect, useMemo } from 'react'
import { Link, json, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
=======
import React, { useState, useEffect, useMemo } from "react"
import { Link, json, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
>>>>>>> e8dffe4ad0634a3a61bb6c947478f40b24ce2dd2

//components
import Breadcrumbs from "components/Common/Breadcrumb"
import DeleteModal from "components/Common/DeleteModal"

<<<<<<< HEAD
import { Col, Row, Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledTooltip, Badge, Button } from "reactstrap";
import TableContainer from 'components/Common/TableContainer';
import Spinners from "components/Common/Spinner";
=======
import {
  Col,
  Row,
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledTooltip,
  Badge,
  Button,
} from "reactstrap"
import TableContainer from "components/Common/TableContainer"
import Spinners from "components/Common/Spinner"
>>>>>>> e8dffe4ad0634a3a61bb6c947478f40b24ce2dd2

import { createSelector } from "reselect"

import { exerciseListRequest } from "../../store/exercises/actions"
import { exercise } from "helpers/api"

const index = () => {
  const dispatch = useDispatch()

<<<<<<< HEAD
=======
  const fetchExeciseList = state => state.exerciseReducer
  const ExeciseDataProperties = createSelector(
    fetchExeciseList,
    exerciseReducer => ({
      Execise: exerciseReducer.exercise,
      loading: exerciseReducer.loading,
    })
  )
>>>>>>> e8dffe4ad0634a3a61bb6c947478f40b24ce2dd2

  const { Execise, loading } = useSelector(ExeciseDataProperties)

  const [isLoading, setLoading] = useState(loading)
  useEffect(() => {
    const fetchData = () => {
      setLoading(true)
      dispatch(exerciseListRequest())
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
    fetchData()
  }, [])

<<<<<<< HEAD



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
        <React.Fragment >
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
                                            <UncontrolledDropdown className="dropdown d-inline-block me-1">
                                                <DropdownToggle type="menu" className="btn btn-success" id="dropdownMenuButton1">
                                                    <i className="mdi mdi-dots-vertical"></i></DropdownToggle>
                                                <DropdownMenu>
                                                    <li><DropdownItem href="#">Action</DropdownItem></li>
                                                    <li><DropdownItem href="#">Another action</DropdownItem></li>
                                                    <li><DropdownItem href="#">Something else here</DropdownItem></li>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                            <Link to="#" className="btn btn-danger me-1"><i className="bx bxs-grid"></i></Link>
                                        </div>
                                    </div>
                                </CardBody>
                                {
                                    isLoading ? <Spinners setLoading={setLoading} />
                                        :
                                        <CardBody>
                                            <TableContainer
                                                columns={columns}
                                                data={Execise.exercise ? Execise.exercise :[{}] }
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
        </React.Fragment >
    )
=======
  //coloums header start
  const columns = useMemo(
    () => [
      {
        Header: "No",
        accessor: "id",
        Cell: cellProps => {
          return (
            <>
              {" "}
              <p className="">{cellProps.row.index + 1}</p>{" "}
            </>
          )
        },
      },
      {
        Header: "Exercise Name",
        accessor: "name",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Performance",
        accessor: "how_to_perform",
      },
      {
        Header: "Level",
        accessor: "level",
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
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="" breadcrumbItem="Execise List" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody className="border-bottom">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0 card-title flex-grow-1">
                      Execise Lists
                    </h5>
                    <div className="flex-shrink-0">
                      <Link to="#!" className="btn btn-light me-1">
                        <i className="mdi mdi-refresh"></i>
                      </Link>
                      <UncontrolledDropdown className="dropdown d-inline-block me-1">
                        <DropdownToggle
                          type="menu"
                          className="btn btn-success"
                          id="dropdownMenuButton1"
                        >
                          <i className="mdi mdi-dots-vertical"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <li>
                            <DropdownItem href="#">Action</DropdownItem>
                          </li>
                          <li>
                            <DropdownItem href="#">Another action</DropdownItem>
                          </li>
                          <li>
                            <DropdownItem href="#">
                              Something else here
                            </DropdownItem>
                          </li>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <Link to="#" className="btn btn-danger me-1">
                        <i className="bx bxs-grid"></i>
                      </Link>
                    </div>
                  </div>
                </CardBody>
                {isLoading ? (
                  <Spinners setLoading={setLoading} />
                ) : (
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
                )}
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
>>>>>>> e8dffe4ad0634a3a61bb6c947478f40b24ce2dd2
}

export default index

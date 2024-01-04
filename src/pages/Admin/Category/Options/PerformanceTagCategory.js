// PerformanceTagCategory.js

import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { performanceListRequest } from "../../../../store/performance/actions"
import TableContainer from "components/Common/TableContainer"
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input,
} from "reactstrap"

const PerformanceTagCategory = () => {
  const [modal, setModal] = useState(false)
  const [performanceData, setPerformanceData] = useState([])

  const dispatch = useDispatch()
  const performanceDispatch = useSelector(
    state => state.performanceReducer.performance
  )

  console.log("performanceData", performanceData)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(performanceListRequest())
      setPerformanceData(performanceDispatch)
    }

    fetchData()
  }, [dispatch, performanceDispatch])

  // Assuming performanceData has a structure similar to the data in your table
  const tableData = performanceData.ptag
    ? performanceData.ptag.map(item => item) : []

    console.log("TD", tableData)

  const columns = [
    // Define your columns here similar to ModalityCategory component
    {
      Header: "ID",
      accessor: "id",
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
    },
    // Add more columns as needed
  ]

  return (
    <div>
      <Card>
        <CardTitle className="d-flex">
          <Col sm={6}>Performance Tag Category</Col>
          <Col sm={6} onClick={() => setModal(!modal)} className="text-end">
            <Button color="secondary">+ Add New</Button>
          </Col>
        </CardTitle>
        <CardText>
          <TableContainer
            columns={columns}
            data={tableData}
            isGlobalFilter={true}
            isAddOptions={false}
            customPageSize={10}
            isPagination={true}
            tableClass="align-middle table-nowrap table-check table"
            theadClass="table-light"
            paginationDiv="col-12"
            pagination="justify-content-center pagination pagination-rounded"
          />
        </CardText>
      </Card>
      <Modal
        isOpen={modal}
        autoFocus={true}
        centered={true}
        toggle={() => {
          setModal(!modal)
        }}
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => {
              setModal(!modal)
            }}
          >
            Manage Performance Tag
          </ModalHeader>
          <ModalBody>
            <form>
              {/* Add your form inputs here */}
              <div className="mb-3">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Performance Tag Name"
                />
              </div>
              {/* Add more form inputs as needed */}
            </form>
          </ModalBody>
          <ModalFooter className="">
            <Col className="text-center">
              <Button
                type="button"
                className="col-sm-12 btn-soft-secondary"
                color="secondary"
                onClick={() => {
                  setModal(!modal)
                }}
              >
                Cancel
              </Button>
            </Col>
            <Col className="text-center">
              <Button
                className="col-sm-12 btn-soft-info"
                type="button"
                color="primary"
                onClick={() => setModal(!modal)}
              >
                ADD
              </Button>
            </Col>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  )
}

export default PerformanceTagCategory

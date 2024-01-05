import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  performanceListRequest,
  addPerformanceRequest,
  deletePerformanceRequest,
} from "../../../../store/performance/actions"
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

function PerformanceTagCategory() {
  const [modal, setModal] = useState(false)
  const [performanceName, setPerformanceName] = useState("")
  const [performanceDescription, setPerformanceDescription] = useState("")

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(performanceListRequest())
  }, [])

  const performances = useSelector(
    state => state.performanceReducer.performance.ptag
  )

  const addPerformanceHandler = () => {
    dispatch(
      addPerformanceRequest({
        name: performanceName,
        description: performanceDescription,
      })
    )
    dispatch(performanceListRequest())
    setPerformanceName("")
    setPerformanceDescription("")
    setModal(false)
  }

  const columns = [
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
      Cell: ({ row }) => (
        <div>
          <Button
            color="danger"
            onClick={() => dispatch(deletePerformanceRequest(row.original.id))}
          >
            Delete
          </Button>
        </div>
      ),
    },
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
            data={performances || []}
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
        toggle={() => setModal(!modal)}
      >
        <div className="modal-content">
          <ModalHeader toggle={() => setModal(!modal)}>
            Manage Performance Tag
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Performance Tag Name"
                  value={performanceName}
                  onChange={e => setPerformanceName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Performance Tag Description"
                  value={performanceDescription}
                  onChange={e => setPerformanceDescription(e.target.value)}
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter className="">
            <Col className="text-center">
              <Button
                type="button"
                className="col-sm-12 btn-soft-secondary"
                color="secondary"
                onClick={() => setModal(!modal)}
              >
                Cancel
              </Button>
            </Col>
            <Col className="text-center">
              <Button
                className="col-sm-12 btn-soft-info"
                type="button"
                color="primary"
                onClick={addPerformanceHandler}
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

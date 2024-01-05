import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  performanceListRequest,
  addPerformanceRequest,
  deletePerformanceRequest,
} from "../../../../store/performance/actions"
import TableContainer from "components/Common/TableContainer"
import DeleteModal from "components/Common/DeleteModal"
import { Link } from 'react-router-dom'
import {
  Button,
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
  const [deleteModal, setDeleteModal] = useState(false)

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

  const handleDelete = data => {
    // setDeleteModal(true)
    dispatch(deletePerformanceRequest(data))
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
            color="btn btn-sm btn-danger"
            onClick={() => handleDelete(row.original.id)}
          >
            <i className="mdi mdi-delete-outline" />
          </Button>
        </div>
      ),
    },
  ]

  return (


    <React.Fragment>

      <DeleteModal
        text={'Are you Sure you want to Delete the Performance list ?'}
        show={deleteModal}
        onDeleteClick={handleDelete}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="d-flex align-items-center border-bottom  p-3 pt-0">
        <h5 className="mb-0 card-title flex-grow-1">Performance</h5>
        <div className="flex-shrink-0">
          <Link to="#!" onClick={() => { dispatch(performanceListRequest()) }} className="btn btn-light me-1"><i className="mdi mdi-refresh"></i></Link>
          <Link to="#" onClick={() => { setModal(!modal) }} className="btn btn-primary"><i className="mdi mdi-plus me-1"></i>Create Performance</Link>
        </div>
      </div>
      <TableContainer
        columns={columns}
        data={performances || []}
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
    </React.Fragment>
  )
}

export default PerformanceTagCategory

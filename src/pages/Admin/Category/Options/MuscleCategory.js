import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  muscleListRequest,
  addMuscleRequest,
  deleteMuscleRequest,
} from "../../../../store/muscle/actions"
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

function MuscleCategory() {
  const [modal, setModal] = useState(false)
  const [muscleName, setMuscleName] = useState("")
  const [muscleDescription, setMuscleDescription] = useState("")
  const [deleteModal, setDeleteModal] = useState(false)

  const dispatch = useDispatch()
  const muscleDispatch = useSelector(state => state.muscleReducer.muscle)



  useEffect(() => {
    dispatch(muscleListRequest())
  }, [dispatch])

  const muscles = muscleDispatch.muscle
    ? muscleDispatch.muscle.map(item => item)
    : []



  const handleDelete = muscleId => {
    // setDeleteModal(true)
    dispatch(deleteMuscleRequest(muscleId))
  }

  const addMuscleHandler = () => {
    dispatch(
      addMuscleRequest({
        name: muscleName,
        description: muscleDescription,
      })
    )
    dispatch(muscleListRequest())
    setMuscleName("")
    setMuscleDescription("")
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
  text={'Are you Sure you want to Delete the Muscle list ?'}
  show={deleteModal}
  onDeleteClick={handleDelete}
  onCloseClick={() => setDeleteModal(false)}
/>
<div className="d-flex align-items-center border-bottom  p-3 pt-0">
  <h5 className="mb-0 card-title flex-grow-1">Muscle</h5>
  <div className="flex-shrink-0">
    <Link to="#!" onClick={() => { dispatch(muscleListRequest()) }} className="btn btn-light me-1"><i className="mdi mdi-refresh"></i></Link>
    <Link to="#" onClick={() => { setModal(!modal) }} className="btn btn-primary"><i className="mdi mdi-plus me-1"></i>Create Muscle</Link>
  </div>
</div>
          <TableContainer
            columns={columns}
            data={muscles || []}
            isGlobalFilter={true}
            isAddOptions={false}
            customPageSize={10}
            isPagination={true}
            tableClass="align-middle table-nowrap table-check table"
            theadClass="table-light"
            paginationDiv="col-12"
            pagination="justify-content-center pagination pagination-rounded"
          />
  
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
            Manage Muscle
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Muscle Name"
                  value={muscleName}
                  onChange={e => setMuscleName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Muscle Description"
                  value={muscleDescription}
                  onChange={e => setMuscleDescription(e.target.value)}
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
                onClick={addMuscleHandler}
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

export default MuscleCategory

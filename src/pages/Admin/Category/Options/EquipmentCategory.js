import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  equipmentListRequest,
  addEquipmentRequest,
  deleteEquipmentRequest,
} from "store/equipment/actions"
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

const EquipmentCategory = () => {
  const [modal, setModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [equipmentName, setEquipmentName] = useState("")
  const [equipmentDescription, setEquipmentDescription] = useState("")

  const dispatch = useDispatch()
  const equipmentDispatch = useSelector(
    state => state.equipmentReducer.equipment
  )


  useEffect(() => {
    dispatch(equipmentListRequest())
  }, [dispatch])



  const equipments = equipmentDispatch.equipment
    ? equipmentDispatch.equipment.map(item => item)
    : []

  const handleDelete = equipmentId => {
    setDeleteModal(false)
    dispatch(deleteEquipmentRequest(equipmentId))
  }

  const addEquipmentHandler = () => {
    dispatch(
      addEquipmentRequest({
        name: equipmentName,
        description: equipmentDescription,
      })
    )
    dispatch(equipmentListRequest())
    setEquipmentName("")
    setEquipmentDescription("")
    setModal(false)
  }

  const columns = [
    {
      Header: "ID",
      accessor: "id",
      Cell: cellProps => { return (<p className="">{cellProps.rows.length - cellProps.row.index}</p> )},
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
          <Button color="btn btn-sm btn-danger" onClick={() => handleDelete(row.original.id)}>
          <i className="mdi mdi-delete-outline" />
          </Button>
        </div>
      ),
    },
  ]

 
  return (

<React.Fragment>
          
      <DeleteModal
        text={'Are you Sure you want to Delete the Equipment list ?'}
        show={deleteModal}
        onDeleteClick={handleDelete}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="d-flex align-items-center border-bottom  p-3 pt-0">
        <h5 className="mb-0 card-title flex-grow-1">Equipment</h5>
        <div className="flex-shrink-0">
          <Link to="#!" onClick={() => { dispatch(equipmentListRequest()) }} className="btn btn-light me-1"><i className="mdi mdi-refresh"></i></Link>
          <Link to="#" onClick={() => { setModal(!modal)}} className="btn btn-primary"><i className="mdi mdi-plus me-1"></i>Create Equipment</Link>
        </div>
      </div>
          <TableContainer
            columns={columns}
            data={equipments}
            isGlobalFilter={true}
            isPagination={true}
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
            Manage Equipment
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Equipment Name"
                  value={equipmentName}
                  onChange={e => setEquipmentName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Equipment Description"
                  value={equipmentDescription}
                  onChange={e => setEquipmentDescription(e.target.value)}
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
                onClick={addEquipmentHandler}
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

export default EquipmentCategory

import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  equipmentListRequest,
  addEquipmentRequest,
  deleteEquipmentRequest,
} from "store/equipment/actions"
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

const EquipmentCategory = () => {
  const [modal, setModal] = useState(false)
  const [equipmentName, setEquipmentName] = useState("")
  const [equipmentDescription, setEquipmentDescription] = useState("")

  const dispatch = useDispatch()
  const equipmentDispatch = useSelector(
    state => state.equipmentReducer.equipment
  )

  useEffect(() => {
    dispatch(equipmentListRequest())
  }, [dispatch])

  console.log("equipmentData", equipmentDispatch)

  const equipments = equipmentDispatch.equipment
    ? equipmentDispatch.equipment.map(item => item)
    : []

  const handleDelete = equipmentId => {
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
          <Button color="danger" onClick={() => handleDelete(row.original.id)}>
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
          <Col sm={6}>Equipment Category</Col>
          <Col sm={6} onClick={() => setModal(!modal)} className="text-end">
            <Button color="secondary">+ Add New</Button>
          </Col>
        </CardTitle>
        <CardText>
          <TableContainer
            columns={columns}
            data={equipments}
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
    </div>
  )
}

export default EquipmentCategory

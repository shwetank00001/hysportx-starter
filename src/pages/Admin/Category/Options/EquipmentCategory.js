// EquipmentCategory.js

import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { equipmentListRequest } from "store/equipment/actions"
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
  const [equipmentData, setEquipmentData] = useState([])

  const dispatch = useDispatch()
  const equipmentDispatch = useSelector(
    state => state.equipmentReducer.equipment
  )

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(equipmentListRequest())
      setEquipmentData(equipmentDispatch)
    }

    fetchData()
  }, [dispatch, equipmentDispatch])

  // Assuming equipmentData has a structure similar to the data in your table
  const tableData = equipmentData.equipment
    ? equipmentData.equipment.map(item => item)
    : []

    console.log("equipmentData", equipmentData)
  const columns = [
    // Define your columns here similar to PerformanceTagCategory component
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
          <Col sm={6}>Equipment Category</Col>
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
            Manage Equipment
          </ModalHeader>
          <ModalBody>
            <form>
              {/* Add your form inputs here */}
              <div className="mb-3">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Equipment Name"
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

export default EquipmentCategory

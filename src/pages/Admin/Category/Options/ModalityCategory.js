import TableContainer from "components/Common/TableContainer"
import React, { useEffect } from "react"
import { useState } from "react"
import { useMemo } from "react"
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap"

import { listModalityRequest } from "store/modality/actions"
import {
  addModalityRequest,
  editModalityRequest,
  deleteModalityRequest,
} from "../../../../store/modality/actions"


import { useSelector, useDispatch } from "react-redux"



function ModalityCategory() {
  const [modal6, setmodal6] = useState(false)

  
  const [modalityData, setModalityData] = useState([])

  
  const dispatch = useDispatch()

  const modalityDispatch = useSelector(state => state.ModalityReducer.modality)
  
useEffect(() => {
  const fetchData = async () => {
    await dispatch(listModalityRequest())
    setModalityData(modalityDispatch)
  }

  fetchData()
}, [dispatch, modalityDispatch, modalityData])

  console.log("modalityData", modalityData)

const ele = modalityData.exercise ? modalityData.exercise.map(item => item) : []
  console.log("ele", ele)




  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: " Name",
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
    ],
    []
  )

  // const data = [
  //   {
  //     id: "1",
  //     name: "Jennifer Chang",
  //     code: "Regional Director",
  //     link: 28,
  //     Description: "Singapore hfhfhfhhfhfh",
  //     action: "2010/11/14",
  //   },
  //   {
  //     id: "2",
  //     name: "Jennifer Chang",
  //     code: "Regional Director",
  //     link: 28,
  //     Description: "Singapore hfhfhfhhfhfh",
  //     action: "2010/11/14",
  //   },
  //   {
  //     id: "3",
  //     name: "Jennifer Chang",
  //     code: "Regional Director",
  //     link: 28,
  //     Description: "Singapore hfhfhfhhfhfh",
  //     action: "2010/11/14",
  //   },
  // ]

  return (
    <div>
      <Card>
        <CardTitle className="d-flex">
          <Col sm={6}>Hypersports Conditions</Col>
          <Col sm={6} onClick={() => setmodal6(!modal6)} className="text-end">
            <Button color="secondary">+ Add New</Button>
          </Col>
        </CardTitle>
        <CardText>
          <TableContainer
            columns={columns}
            data={ele}
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
        isOpen={modal6}
        autoFocus={true}
        centered={true}
        toggle={() => {
          setmodal6(!modal6)
        }}
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => {
              setmodal6(!modal6)
            }}
          >
            Manage Shortcut
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Short Name"
                />
              </div>
              <div className="mb-3">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Term Name"
                />
              </div>
              <div className="mb-3">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Description"
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
                  setmodal6(!modal6)
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
                onClick={() => setmodal6(!modal6)}
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

export default ModalityCategory

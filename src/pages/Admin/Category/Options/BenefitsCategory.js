import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { benefitListRequest } from "../../../../store/benifit/actions"
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

const BenefitsCategory = () => {
  const [modal, setModal] = useState(false)
  const [benefitsData, setBenefitsData] = useState([])

  const dispatch = useDispatch()
  const benefitsDispatch = useSelector(state => state.benefitReducer.benefits)

  console.log("benefitsData", benefitsData)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(benefitListRequest())
      setBenefitsData(benefitsDispatch)
    }

    fetchData()
  }, [dispatch, benefitsDispatch])


const tableData = benefitsData?.benefits
  ? benefitsData.benefits.map(item => item)
  : []


  console.log("Benefits Table Data", tableData)

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
    },
  ]

  return (
    <div>
      <Card>
        <CardTitle className="d-flex">
          <Col sm={6}>Benefits Category</Col>
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
            Manage Benefits
          </ModalHeader>
          <ModalBody>
            <form>

              <div className="mb-3">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Benefits Name"
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

export default BenefitsCategory

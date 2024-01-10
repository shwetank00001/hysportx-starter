import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  exerciseListRequest,
  addExerciseRequest,
  deleteExerciseRequest,
} from "../../../../store/exercises/actions"
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

const ExerciseNameCategory = () => {
  const [modal, setModal] = useState(false)
  const [exerciseName, setExerciseName] = useState("")
  const [exerciseDescription, setExerciseDescription] = useState("")

  const dispatch = useDispatch()
  const exerciseDispatch = useSelector(state => state.exerciseReducer.exercise)

  console.log("exerciseData", exerciseDispatch)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(exerciseListRequest())
      // setExerciseData(exerciseDispatch); // Removed this line
    }

    fetchData()
  }, [dispatch, exerciseDispatch])

  const tableData = exerciseDispatch.exercise
    ? exerciseDispatch.exercise.map(item => item)
    : []

  console.log("Exercise Table Data", tableData)

  const handleDelete = exerciseId => {
    dispatch(deleteExerciseRequest(exerciseId))
  }

  const addExerciseHandler = () => {
    dispatch(
      addExerciseRequest({
        name: exerciseName,
        description: exerciseDescription,
      })
    )
    dispatch(exerciseListRequest())
    setExerciseName("")
    setExerciseDescription("")
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
          <Col sm={6}>Exercise Name Category</Col>
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
            Manage Exercise Name
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Exercise Name"
                  value={exerciseName}
                  onChange={e => setExerciseName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Exercise Description"
                  value={exerciseDescription}
                  onChange={e => setExerciseDescription(e.target.value)}
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
                onClick={addExerciseHandler}
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

export default ExerciseNameCategory

import TableContainer from "components/Common/TableContainer"
import React, { useEffect, useState } from "react"
import { useMemo } from "react"
import DeleteModal from "components/Common/DeleteModal"
import { Link } from 'react-router-dom'
import {Button,Col,Modal,ModalBody,ModalFooter, ModalHeader,Input,} from "reactstrap"
import {listModalityRequest,addModalityRequest,deleteModalityRequest,} from "store/modality/actions"
import { useSelector, useDispatch } from "react-redux"
function ModalityCategory() {
  const [modal6, setModal6] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [modalityName, setModalityName] = useState("")
  const [modalityDescription, setModalityDescription] = useState("")
  const dispatch = useDispatch()
  useEffect(() => {dispatch(listModalityRequest())}, [])
  const modalities = useSelector( state => state.ModalityReducer.modality.exercise )
  const addModalityHandler = () => {
    dispatch(addModalityRequest({name: modalityName,description: modalityDescription,}))
    setModalityName("")
    setModalityDescription("")
    setModal6(false)
  }
  const handleDelete = data => {dispatch(deleteModalityRequest(data))}
  const columns = useMemo(() => [
    {
      Header: "ID",
      accessor: "id",
      Cell: cellProps => { return (<p className="">{cellProps.rows.length - cellProps.row.index}</p> )},
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
  ])
  return (
  <React.Fragment>
    <DeleteModal text={'Are you Sure you want to Delete the Modalities list ?'} show={deleteModal}onDeleteClick={handleDelete}onCloseClick={() => setDeleteModal(false)}/>
      <div className="d-flex align-items-center border-bottom  p-3 pt-0">
        <h5 className="mb-0 card-title flex-grow-1">Modality</h5>
        <div className="flex-shrink-0">
          <Link to="#!" onClick={() => { dispatch(listModalityRequest()) }} className="btn btn-light me-1"><i className="mdi mdi-refresh"></i></Link>
          <Link to="#" onClick={() => { setModal6(!modal6)}} className="btn btn-primary"><i className="mdi mdi-plus me-1"></i>Create Modality</Link>
        </div>
      </div>
          <TableContainer
            columns={columns}
            data={modalities || []}
            isGlobalFilter={true}
            isPagination={true}
            isShowingPageLength={true}
            customPageSize={3}
            tableClass=" align-middle nowrap mt-2"
            paginationDiv="col-sm-12 col-md-7"
            pagination="pagination justify-content-end pagination-rounded"
          />  
      <Modal isOpen={modal6} autoFocus={true}centered={true}toggle={() => setModal6(!modal6)}>
        <div className="modal-content">
          <ModalHeader toggle={() => setModal6(!modal6)}> Manage Shortcut</ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input type="email" className="form-control"placeholder="Modality Name"value={modalityName}onChange={e => setModalityName(e.target.value)}/>
              </div>
              <div className="mb-3">
                <Input type="email" className="form-control"placeholder="Description"value={modalityDescription} onChange={e => setModalityDescription(e.target.value)}/>
              </div>
            </form>
          </ModalBody>
          <ModalFooter className="">
            <Col className="text-center">
              <Button type="button"className="col-sm-12 btn-soft-secondary"color="secondary"onClick={() => setModal6(!modal6)}> Cancel</Button>
            </Col>
            <Col className="text-center">
              <Button className="col-sm-12 btn-soft-info"type="button"color="primary" onClick={addModalityHandler} > ADD</Button>
            </Col>
          </ModalFooter>
        </div>
      </Modal>
      </React.Fragment>
  )
}
export default ModalityCategory

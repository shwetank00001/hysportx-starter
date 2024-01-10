
import React,{useMemo,useEffect,useState} from 'react'
import { Button,UncontrolledTooltip} from 'reactstrap'
import DeleteModal from "components/Common/DeleteModal"
import AddFormModal from './addFormModal'
import EditFormModal from './editFormModal'
import ViewFormModal from './viewFormModal'
import TableContainer from "components/Common/TableContainer"
import { competitionListRequest,deleteCompetitionRequest} from "../../../store/actions";
import { createSelector } from "reselect"
import { useSelector, useDispatch } from "react-redux"
const index = () => {
  const dispatch = useDispatch();
  const fetchDataList = state => state.competitionReducer
  const allDataProperties = createSelector( fetchDataList,Reducer => ({ Competition: Reducer.competition,}))
const { Competition } = useSelector(allDataProperties)
  useEffect(() => { dispatch(competitionListRequest()) }, [dispatch])
  const baseUrl = 'https://hysportx.com/';
  const columns = useMemo(
    () => [
      {
        Header: "No",
        accessor: "id",
        Cell: cellProps => {
          return (

            <>
              <p className="">{cellProps.rows.length - cellProps.row.index}</p>
            </>
          )
        },
      },
      {
        Header: "Image",
        accessor: "code",
        Cell:(cellProps)=>{
          return (
            <img src={`${baseUrl}${cellProps.row.original ? cellProps.row.original.image : ''}`} alt='' width={50} height={50} />
          );
        }

      },
      {
        Header: "Competiton Name",
        accessor: "name",
      },

      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Action",
        accessor: "action",
        disableFilters: true,
        Cell: cellProps => {
          return (
            <ul className="list-unstyled hstack gap-1 mb-0">
              <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
               <ViewFormModal data={cellProps.row.original ? cellProps.row.original : ''}/>
              </li>
              
              <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                <EditFormModal data={cellProps.row.original ? cellProps.row.original : ''} id={cellProps.row.original ? cellProps.row.original.id : ''} image={cellProps.row.original ? cellProps.row.original.image : ''}/>
              </li>
             
              <li>
                <Button onClick={() => {const data = cellProps.row.original; onClickDelete(data)}} className="btn btn-sm btn-soft-danger"
                  id={`deletetooltip`}><i className="mdi mdi-delete-outline" />
                  <UncontrolledTooltip placement="top" target={`deletetooltip`}> Delete </UncontrolledTooltip>
                </Button>
              </li>
            </ul>
          )
        },
      },
    ],
    []
  )

  const [deleteModal, setDeleteModal] = useState(false)
  const [competition, setCompetiton] = useState(null)
  const onClickDelete = data => { setCompetiton(data),setDeleteModal(true) }
  const handleDelete= () => {setDeleteModal(false), dispatch(deleteCompetitionRequest(competition.id)) }
  return (
    <React.Fragment>
       <DeleteModal text={'Are you Sure you want to Delete the Competition list ?'} show={deleteModal} onDeleteClick={handleDelete} onCloseClick={() => setDeleteModal(false)} />
      <div className="d-flex align-items-center border-bottom pb-3">
        <h5 className="mb-0 card-title flex-grow-1">Competition Lists</h5>
        <div className="flex-shrink-0">
          <Button onClick={() => {dispatch(competitionListRequest()) }} className="btn btn-light me-1"><i className="mdi mdi-refresh"></i></Button>
          <AddFormModal />
        </div>
      </div>
      <TableContainer
        columns={columns}
        data={Competition.competitions ? Competition.competitions : []}
        isGlobalFilter={true}
        isPagination={true}
        // iscustomPageSizeOptions={true}
        isShowingPageLength={true}
        customPageSize={5}
        tableClass=" align-middle nowrap mt-2"
        paginationDiv="col-sm-12 col-md-7"
        pagination="pagination justify-content-end pagination-rounded"
      />
    </React.Fragment>
  )
}
export default index
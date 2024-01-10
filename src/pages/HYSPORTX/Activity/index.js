import React, { useMemo,useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { createSelector } from "reselect"
import { Link } from 'react-router-dom'
import { Button, UncontrolledTooltip} from 'reactstrap'
import TableContainer from 'components/Common/TableContainer'
import DeleteModal from "components/Common/DeleteModal"
import { addActivityRequest as addActivityForm,deleteActivityRequest,activityListRequest,} from "../../../store/actions";
import ActivityExerciseModal from './ActivityExerciseModal'
import ActivityModal from './activityModal'


const index = () => {
    const [activityDelete, setActivityDelete] = useState(null)
    const [deleteModal, setDeleteModal] = useState(false)  
    const dispatch = useDispatch();
    const fetchActivityList = state => state.activityReducer
    const activityDataProperties = createSelector(
        fetchActivityList,
        activityReducer => ({
            activity: activityReducer.activity,
            adderrors: activityReducer.adderrors,
        })
    )
    const { activity,  adderrors } = useSelector(activityDataProperties)
    useEffect(() => { dispatch(activityListRequest()) }, [dispatch])

//----bug modal pending..
    // useEffect(() => {
    //     if (adderrors==null) {
    //         setActivityModal(false);
    //         validation.resetForm();
    //     }
    // }, [dispatch,adderrors])
    //coloums header start

    const columns = useMemo(
        () => [
            {
                Header: 'No',
                accessor: 'id',
                Cell: (cellProps) => {
                    return (
                        <>
                            <p className="">{cellProps.rows.length-cellProps.row.index}</p>
                        </>
                    )
                },
            },


            {
                Header: 'Activity Name',
                accessor: 'name',
            },
            {
                Header: 'Condition Name',
                accessor: 'condition_name',
            },
            {
                Header: 'Description',
                accessor: 'description',
            },


            {
                Header: 'Action',
                accessor: 'action',
                disableFilters: true,
                Cell: (cellProps) => {
                    return (
                        <ul className="list-unstyled hstack gap-1 mb-0">
                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                <Button
                                    className="btn btn-sm btn-soft-info"
                                    id={`viewtooltip-${cellProps.row.original.id}`} //use param Hook  

                                >
                                    <i className="mdi mdi-eye-outline" />
                                </Button>
                            </li>
                            <UncontrolledTooltip placement="top" target={`viewtooltip-${cellProps.row.original.id}`}>
                                View
                            </UncontrolledTooltip>

                           

                            <li>
                                <Link
                                    to="#"
                                    onClick={() => {
                                        const activity = cellProps.row.original
                                        onClickDelete(activity)
                                    }}
                                    className="btn btn-sm btn-danger"
                                    id={`deletetooltip-${cellProps.row.original.id}`}

                                >
                                    <i className="mdi mdi-delete-outline" />
                                    <UncontrolledTooltip placement="top" target={`deletetooltip-${cellProps.row.original.id}`}>
                                       Activity Delete
                                    </UncontrolledTooltip>
                                </Link>
                            </li>
                            <li>
                                <ActivityExerciseModal id={cellProps.row.original} />
                            </li>
                        </ul>
                    );
                }
            },
        ],

        []
    );


    const onClickDelete = data => {
        setActivityDelete(data)
        setDeleteModal(true)
    }
    const handleDeleteActivity = () => {
        setDeleteModal(false)
        dispatch(deleteActivityRequest(activityDelete.id))
    }


    return (
        <React.Fragment>
            <DeleteModal
                text={'Are you Sure you want to Delete the Activity list ?'}
                show={deleteModal}
                onDeleteClick={handleDeleteActivity}
                onCloseClick={() => setDeleteModal(false)}
            />
            <div className="d-flex align-items-center border-bottom pb-3">
                <h5 className="mb-0 card-title flex-grow-1">Acitivity Lists</h5>
                <div className="flex-shrink-0">
                    <Link to="#!" className="btn btn-light me-1"><i className="mdi mdi-refresh"></i></Link>
                    <ActivityModal />
                </div>
            </div>
         
                <TableContainer
                    columns={columns}
                    data={activity.activities ? activity.activities : []}
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

export default index;
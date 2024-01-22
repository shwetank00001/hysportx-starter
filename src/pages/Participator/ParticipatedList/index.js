import React,{ useMemo, useEffect, useState } from 'react'
import { Container, Button, Card, CardBody,UncontrolledTooltip} from 'reactstrap'
import Breadcrumb from 'components/Common/Breadcrumb'
import PropTypes from "prop-types"
//i18n
import { withTranslation } from "react-i18next"
import { createSelector } from "reselect"
import { useSelector, useDispatch } from "react-redux"
import {allParticipatedList} from "../../../store/participator/actions"
import TableContainer from 'components/Common/TableContainer'

const Competition = props => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem("userData")) {
      const uid=JSON.parse(localStorage.getItem("userData"));
      dispatch(allParticipatedList(uid.id))
    }
  }, [dispatch,props.success]);

  const fetchDataList = state => state.participatorReducer
  const allDataProperties = createSelector(fetchDataList, Reducer => ({
    Competition: Reducer.competition,
  }))
  const {Competition} = useSelector(allDataProperties)
  const baseUrl = "https://hysportx.com/"
  const columns = useMemo(
    () => [
      {
        Header: "No",
        accessor: "id",
        Cell: cellProps => { return (<p className="">{cellProps.rows.length - cellProps.row.index}</p>) },
      },
      {
        Header: "Image",
        accessor: "image",
        Cell: cellProps => {return (<img src={`${baseUrl}${cellProps.row.original ? cellProps.row.original.image : ""}`}alt="" width={50} height={50}/>)},
      },
      {Header: "Competiton Name",accessor: "name",},
      {Header: "Description",accessor: "description",},
    
    ],
    []
  )

  return (
    <React.Fragment>
      <div className="page-content">
        <div className='container-fluid'>
          <Breadcrumb title={props.t("Participator")} breadcrumbItem={props.t("Competition")} />
        <Card>
          <CardBody>
          <div className="d-flex align-items-center border-bottom pb-3 mb-3">
            <h5 className="mb-0 card-title flex-grow-1">Competition Lists</h5>
            </div>
            <TableContainer 
              columns={columns}
              data={Competition.competitons ? Competition.competitons: []}
              isGlobalFilter={true}
              isPagination={true}
              isShowingPageLength={true}
              customPageSize={5}
              tableClass=" align-middle nowrap mt-2"
              paginationDiv="col-sm-12 col-md-7"
              pagination="pagination justify-content-end pagination-rounded"
            />
      </CardBody>
      </Card>
        </div>
      </div>
    </React.Fragment>
  )
}
Competition.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
}
export default withTranslation()(Competition)
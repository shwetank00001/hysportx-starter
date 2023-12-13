import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
//import components
import Breadcrumbs from "components/Common/Breadcrumb"

import { listModalityRequest } from "store/modality/actions"
const index = () => {
  const dispatch = useDispatch()
  const list = useSelector(state => state.ModalityReducer.modality)

  console.log("Modality page", list)

  useEffect(() => {
    dispatch(listModalityRequest())
  }, [])
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Modality" breadcrumbItem="Modality" />
          Modality testing here- EG
        </div>
      </div>
    </React.Fragment>
  )
}

export default index

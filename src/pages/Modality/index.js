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
  }, [dispatch])

    const test = [list]
  const ele = test.map(function(item){
    return(
      <div key={item.id}>
        <p>{item.name}</p>
      </div>
    )
  })
   
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Modality" breadcrumbItem="Modality" />
          Modality testing here- EG

        </div>
        {ele}
      </div>
    </React.Fragment>
  )
}

export default index

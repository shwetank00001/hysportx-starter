import React,{ useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
//import components
import Breadcrumbs from 'components/Common/Breadcrumb';


import { demoListRequest } from "store/demo/actions";
import { listModalityRequest } from "store/modality/actions"

const index = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.DemoReducer.demo);
  const modality = useSelector(state => state.ModalityReducer.modality);

  console.log("main file listing data",list);
  console.log("modality data", modality)

  useEffect(() => {
    dispatch(demoListRequest());
    dispatch(listModalityRequest())
},[]);
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Demo" breadcrumbItem="Demo" />
          your content here............
        </div>
      </div>
    </React.Fragment>
  )
}

export default index
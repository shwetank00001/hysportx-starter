import React,{ useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
//import components
import Breadcrumbs from 'components/Common/Breadcrumb';


import { demoListRequest } from "store/demo/actions";
const index = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.DemoReducer.demo);

  console.log("main file listing data",list);

  useEffect(() => {
    dispatch(demoListRequest());
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
import React,{ useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
//import components
import Breadcrumbs from 'components/Common/Breadcrumb';


import { demoListRequest } from "store/demo/actions";
import { listModalityRequest } from "store/modality/actions"
import { activityListRequest } from "store/activity/actions"
import { equipmentListRequest } from "store/equipment/actions"
import { benefitListRequest } from "store/benifit/actions"

const index = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.DemoReducer.demo);
  const modality = useSelector(state => state.ModalityReducer.modality);
  const activity = useSelector(state => state.activityReducer.activity)
  const equipment = useSelector(state => state.equipmentReducer.equipment)
  const benefit = useSelector(state => state.benefitReducer.benefit)



  console.log("main file listing data",list);
  console.log("modality data", modality)
  console.log("activity data", activity)
  console.log("equipment data", equipment)
  console.log("benefit data: ", benefit)

  useEffect(() => {
    dispatch(demoListRequest());
    dispatch(listModalityRequest())
    dispatch(activityListRequest())
    dispatch(equipmentListRequest())
    dispatch(benefitListRequest())
},[dispatch]);
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
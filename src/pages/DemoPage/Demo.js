import React,{ useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
//import components
import Breadcrumbs from 'components/Common/Breadcrumb';


import { demoListRequest } from "store/demo/actions";
import { listModalityRequest } from "store/modality/actions"
import { activityListRequest } from "store/activity/actions"
import { equipmentListRequest } from "store/equipment/actions"
import { benefitListRequest } from "store/benifit/actions"
import { muscleListRequest } from "store/muscle/actions"
import { performanceListRequest } from "store/performance/actions"
import { exerciseListRequest } from "store/exercises/actions"
import { competitionListRequest } from "store/competition/actions"

const Demo = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.DemoReducer.demo);
  const modality = useSelector(state => state.ModalityReducer.modality);
  const activity = useSelector(state => state.activityReducer.activity)
  const equipment = useSelector(state => state.equipmentReducer.equipment)
  const benefit = useSelector(state => state.benefitReducer.benefit)
  const muscles = useSelector(state => state.muscleReducer.muscle)
  const performance = useSelector(state => state.performanceReducer.performance)
  const exercise = useSelector(state => state.exerciseReducer.exercise)
  const competition = useSelector(state => state.competitionReducer.competition)



  console.log("main file listing data",list);
  console.log("modality data", modality)
  console.log("activity data", activity)
  console.log("equipment data", equipment)
  console.log("benefit data: ", benefit)
  console.log("muscles data:- ", muscles)
  console.log("performance data: ", performance)
  console.log("exercise data:->  ", exercise)
  console.log("competition data: ", competition)

  useEffect(() => {
    dispatch(demoListRequest());
    dispatch(listModalityRequest())
    dispatch(activityListRequest())
    dispatch(equipmentListRequest())
    dispatch(benefitListRequest())
    dispatch(muscleListRequest())
    dispatch(performanceListRequest())
    dispatch(exerciseListRequest())
    dispatch(competitionListRequest())
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

export default Demo
// saga.js

import { takeLatest, put, call } from "redux-saga/effects"
import { activity } from "helpers/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import {
  ACTIVITY_LIST_REQUEST,
  ACTIVITY_LIST_SUCCESS,
  ACTIVITY_LIST_FAIL,
  ADD_ACTIVITY_REQUEST,
  ADD_ACTIVITY_SUCCESS,
  ADD_ACTIVITY_FAILURE,
  EDIT_ACTIVITY_REQUEST,
  EDIT_ACTIVITY_SUCCESS,
  EDIT_ACTIVITY_FAILURE,
  DELETE_ACTIVITY_REQUEST,
  DELETE_ACTIVITY_SUCCESS,
  DELETE_ACTIVITY_FAILURE,
  
  ADD_ACTIVITY_EXERCISE_REQUEST,
  ADD_ACTIVITY_EXERCISE_SUCCESS,
  ADD_ACTIVITY_EXERCISE_FAILURE,
  DELETE_ACTIVITY_EXERCISE_REQUEST,
  DELETE_ACTIVITY_EXERCISE_SUCCESS,
  DELETE_ACTIVITY_EXERCISE_FAILURE,
} from "./actionTypes"
import {CHANGE_PRELOADER} from "../layout/actionTypes";

function* listActivitySaga() {
  try {
    // yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Fetching Activity Data Please wait ...'}})
    const data = yield call(activity.list)
    yield put({ type: ACTIVITY_LIST_SUCCESS, payload: data.data })
    // yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
  } catch (error) {
    if(error.response && error.response.status===404){
      yield put({ type: ACTIVITY_LIST_SUCCESS,payload: []})
    }
    yield put({ type: ACTIVITY_LIST_FAIL, payload: error })
    // toast.error("Failed to fetch activity data. Please try again.", {
    //   autoClose: 2000,
    // })
  }
}


function* addActivitySaga(action) {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Creating Activity Please wait ...'}})
    const response = yield call(activity.add, action.payload)
    yield put({ type: ADD_ACTIVITY_SUCCESS })
    yield put({ type: ACTIVITY_LIST_REQUEST })
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
      toast.success(response.message, { autoClose: 2000 });
  } catch (error) {
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    yield put({ type: ADD_ACTIVITY_FAILURE, payload: error.response.data.message})
    toast.error(error.response.data.message, {
      autoClose: 2000,
    })
  }
}

function* addActivityExerciseSaga(action) {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Creating Activity Exercise Please wait ...'}})
    const response = yield call(activity.addActivityExercise, action.payload)
    yield put({ type: ADD_ACTIVITY_EXERCISE_SUCCESS })
    yield put({ type: ACTIVITY_LIST_REQUEST })
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
      toast.success(response.message, { autoClose: 2000 });
  } catch (error) {
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    yield put({ type: ADD_ACTIVITY_EXERCISE_FAILURE, payload: error.response.data.message})
    toast.error(error.response.data.message, {
      autoClose: 2000,
    })
  }
}


function* editActivitySaga(action) {
  try {
    yield call(activity.edit, action.payload.id, action.payload.data)
    yield put({ type: EDIT_ACTIVITY_SUCCESS })
    toast.success("Activity edited successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: EDIT_ACTIVITY_FAILURE, payload: error })
    toast.error("Failed to edit activity. Please try again.", {
      autoClose: 2000,
    })
  }
}


function* deleteActivitySaga(action) {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Removing Activity Please wait ...'}})
    const response =yield call(activity.delete, action.payload)
    yield put({ type: DELETE_ACTIVITY_SUCCESS })
    yield put({ type: ACTIVITY_LIST_REQUEST })
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
      toast.success(response.message, { autoClose: 2000 });
  } catch (error) {
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    yield put({ type: DELETE_ACTIVITY_FAILURE, payload: error.response.data.message })
    toast.error(error.response.data.message, {
      autoClose: 2000,
    })
  }
}

function* deleteActivityExerciseSaga(action) {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Removing Activity Execise Please wait ...'}})
    const response =yield call(activity.deleteActivityExercise, action.payload)
    yield put({ type: DELETE_ACTIVITY_EXERCISE_SUCCESS })
    yield put({ type: ACTIVITY_LIST_REQUEST })
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
      toast.success(response.message, { autoClose: 2000 });
  } catch (error) {
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    yield put({ type: DELETE_ACTIVITY_EXERCISE_FAILURE, payload: error.response.data.message })
    toast.error(error.response.data.message, {
      autoClose: 2000,
    })
  }
}


export default function* activitySaga() {
  yield takeLatest(ACTIVITY_LIST_REQUEST, listActivitySaga)
  yield takeLatest(ADD_ACTIVITY_REQUEST, addActivitySaga)
  yield takeLatest(ADD_ACTIVITY_EXERCISE_REQUEST, addActivityExerciseSaga)
  yield takeLatest(EDIT_ACTIVITY_REQUEST, editActivitySaga)
  yield takeLatest(DELETE_ACTIVITY_REQUEST, deleteActivitySaga)
  yield takeLatest(DELETE_ACTIVITY_EXERCISE_REQUEST, deleteActivityExerciseSaga)

}

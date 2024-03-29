// saga.js
import { takeLatest, put, call } from "redux-saga/effects"
import { exercise } from "helpers/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import {CHANGE_PRELOADER} from "../layout/actionTypes";
import {
  EXERCISE_LIST_REQUEST,
  EXERCISE_LIST_SUCCESS,
  EXERCISE_LIST_FAIL,
  ADD_EXERCISE_REQUEST,
  ADD_EXERCISE_SUCCESS,
  ADD_EXERCISE_FAILURE,
  EDIT_EXERCISE_REQUEST,
  EDIT_EXERCISE_SUCCESS,
  EDIT_EXERCISE_FAILURE,
  DELETE_EXERCISE_REQUEST,
  DELETE_EXERCISE_SUCCESS,
  DELETE_EXERCISE_FAILURE,
} from "./actionTypes"
function* listExerciseSaga() {
  try {
    // yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Fetching Exercise list data Please wait ...'}})
    const data = yield call(exercise.list)
    yield put({ type: EXERCISE_LIST_SUCCESS, payload: data.data })
    // yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
  } catch (error) {
    if(error.response && error.response.status===404){
      yield put({ type: EXERCISE_LIST_SUCCESS,payload: []})
    }
    yield put({ type: EXERCISE_LIST_FAIL, payload: error })
    // yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
  }
}



function* addExerciseSaga(action) {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Creating Exercise data Please wait ...'}})
    const response=yield call(exercise.add, action.payload)
    yield put({ type: ADD_EXERCISE_SUCCESS })
    yield put({ type: EXERCISE_LIST_REQUEST})
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    toast.success(response.message, { autoClose: 2000 })
  } catch (error) {
    yield put({ type: ADD_EXERCISE_FAILURE, payload: error.response.data.message })
    toast.error(error.response.data.message, {autoClose: 2000,})
  }
}

function* editExerciseSaga(action) {
  try {
    yield call(exercise.edit, action.payload.id, action.payload.data)
    yield put({ type: EDIT_EXERCISE_SUCCESS })
    toast.success("Exercise edited successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: EDIT_EXERCISE_FAILURE, payload: error })
    toast.error("Failed to edit exercise. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* deleteExerciseSaga(action) {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Deleting Exercise list data Please wait ...'}})
    const response=yield call(exercise.delete, action.payload)
    yield put({ type: DELETE_EXERCISE_SUCCESS })
    yield put({ type: EXERCISE_LIST_REQUEST})
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    toast.success(response.message, { autoClose: 2000 })
  } catch (error) {
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    yield put({ type: DELETE_EXERCISE_FAILURE, payload: error.response.data.message })
    toast.error(error.response.data.message, {autoClose: 2000,})
  }
}

export default function* exerciseSaga() {
  yield takeLatest(EXERCISE_LIST_REQUEST, listExerciseSaga)
  yield takeLatest(ADD_EXERCISE_REQUEST, addExerciseSaga)
  yield takeLatest(EDIT_EXERCISE_REQUEST, editExerciseSaga)
  yield takeLatest(DELETE_EXERCISE_REQUEST, deleteExerciseSaga)
}

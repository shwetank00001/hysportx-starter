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
} from "./actionTypes"

function* listActivitySaga() {
  try {
    const data = yield call(activity.list)
    yield put({ type: ACTIVITY_LIST_SUCCESS, payload: data.data })
  } catch (error) {
    yield put({ type: ACTIVITY_LIST_FAIL, payload: error })
    toast.error("Failed to fetch activity data. Please try again.", {
      autoClose: 2000,
    })
  }
}


function* addActivitySaga(action) {
  try {
    yield call(activity.add, action.payload)
    yield put({ type: ADD_ACTIVITY_SUCCESS })
    toast.success("Activity added successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: ADD_ACTIVITY_FAILURE, payload: error })
    toast.error("Failed to add activity. Please try again.", {
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
    yield call(activity.delete, action.payload)
    yield put({ type: DELETE_ACTIVITY_SUCCESS })
    toast.success("Activity deleted successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: DELETE_ACTIVITY_FAILURE, payload: error })
    toast.error("Failed to delete activity. Please try again.", {
      autoClose: 2000,
    })
  }
}


export default function* activitySaga() {
  yield takeLatest(ACTIVITY_LIST_REQUEST, listActivitySaga)
  yield takeLatest(ADD_ACTIVITY_REQUEST, addActivitySaga)
  yield takeLatest(EDIT_ACTIVITY_REQUEST, editActivitySaga)
  yield takeLatest(DELETE_ACTIVITY_REQUEST, deleteActivitySaga)

}

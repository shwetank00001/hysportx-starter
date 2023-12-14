// saga.js
import { takeLatest, put, call } from "redux-saga/effects"
import { performance } from "helpers/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import {
  PERFORMANCE_LIST_REQUEST,
  PERFORMANCE_LIST_SUCCESS,
  PERFORMANCE_LIST_FAIL,
  ADD_PERFORMANCE_REQUEST,
  ADD_PERFORMANCE_SUCCESS,
  ADD_PERFORMANCE_FAILURE,
  EDIT_PERFORMANCE_REQUEST,
  EDIT_PERFORMANCE_SUCCESS,
  EDIT_PERFORMANCE_FAILURE,
  DELETE_PERFORMANCE_REQUEST,
  DELETE_PERFORMANCE_SUCCESS,
  DELETE_PERFORMANCE_FAILURE,
} from "./actionTypes"

function* listPerformanceSaga() {
  try {
    const data = yield call(performance.list)
    yield put({ type: PERFORMANCE_LIST_SUCCESS, payload: data.data })
  } catch (error) {
    yield put({ type: PERFORMANCE_LIST_FAIL, payload: error })
    toast.error("Failed to fetch performance data. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* addPerformanceSaga(action) {
  try {
    yield call(performance.add, action.payload)
    yield put({ type: ADD_PERFORMANCE_SUCCESS })
    toast.success("Performance added successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: ADD_PERFORMANCE_FAILURE, payload: error })
    toast.error("Failed to add performance. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* editPerformanceSaga(action) {
  try {
    yield call(performance.edit, action.payload.id, action.payload.data)
    yield put({ type: EDIT_PERFORMANCE_SUCCESS })
    toast.success("Performance edited successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: EDIT_PERFORMANCE_FAILURE, payload: error })
    toast.error("Failed to edit performance. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* deletePerformanceSaga(action) {
  try {
    yield call(performance.delete, action.payload)
    yield put({ type: DELETE_PERFORMANCE_SUCCESS })
    toast.success("Performance deleted successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: DELETE_PERFORMANCE_FAILURE, payload: error })
    toast.error("Failed to delete performance. Please try again.", {
      autoClose: 2000,
    })
  }
}

export default function* performanceSaga() {
  yield takeLatest(PERFORMANCE_LIST_REQUEST, listPerformanceSaga)
  yield takeLatest(ADD_PERFORMANCE_REQUEST, addPerformanceSaga)
  yield takeLatest(EDIT_PERFORMANCE_REQUEST, editPerformanceSaga)
  yield takeLatest(DELETE_PERFORMANCE_REQUEST, deletePerformanceSaga)
  // Add additional takeLatest for other actions if needed
}

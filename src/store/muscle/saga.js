
import { takeLatest, put, call } from "redux-saga/effects"
import { muscle } from "helpers/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import {
  MUSCLE_LIST_REQUEST,
  MUSCLE_LIST_SUCCESS,
  MUSCLE_LIST_FAIL,
  ADD_MUSCLE_REQUEST,
  ADD_MUSCLE_SUCCESS,
  ADD_MUSCLE_FAILURE,
  EDIT_MUSCLE_REQUEST,
  EDIT_MUSCLE_SUCCESS,
  EDIT_MUSCLE_FAILURE,
  DELETE_MUSCLE_REQUEST,
  DELETE_MUSCLE_SUCCESS,
  DELETE_MUSCLE_FAILURE,
} from "./actionTypes"

function* listMuscleSaga() {
  try {
    const data = yield call(muscle.list)
    yield put({ type: MUSCLE_LIST_SUCCESS, payload: data.data })
  } catch (error) {
    yield put({ type: MUSCLE_LIST_FAIL, payload: error })
    toast.error("Failed to fetch muscle data. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* addMuscleSaga(action) {
  try {
     console.log("Adding muscle:", action.payload)
    yield call(muscle.add, action.payload)
    yield put({ type: ADD_MUSCLE_SUCCESS })
    toast.success("Muscle added successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: ADD_MUSCLE_FAILURE, payload: error })
    toast.error("Failed to add muscle. Please try again.", { autoClose: 2000 })
  }
}

function* editMuscleSaga(action) {
  try {
    yield call(muscle.edit, action.payload.id, action.payload.data)
    yield put({ type: EDIT_MUSCLE_SUCCESS })
    toast.success("Muscle edited successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: EDIT_MUSCLE_FAILURE, payload: error })
    toast.error("Failed to edit muscle. Please try again.", { autoClose: 2000 })
  }
}

function* deleteMuscleSaga(action) {
  try {
    yield call(muscle.delete, action.payload)
    yield put({ type: DELETE_MUSCLE_SUCCESS })
    toast.success("Muscle deleted successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: DELETE_MUSCLE_FAILURE, payload: error })
    toast.error("Failed to delete muscle. Please try again.", {
      autoClose: 2000,
    })
  }
}

export default function* muscleSaga() {
  yield takeLatest(MUSCLE_LIST_REQUEST, listMuscleSaga)
  yield takeLatest(ADD_MUSCLE_REQUEST, addMuscleSaga)
  yield takeLatest(EDIT_MUSCLE_REQUEST, editMuscleSaga)
  yield takeLatest(DELETE_MUSCLE_REQUEST, deleteMuscleSaga)
}

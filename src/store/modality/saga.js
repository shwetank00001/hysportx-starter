// saga.js
import { takeLatest, put, call } from "redux-saga/effects"
import { modality } from "helpers/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  MODALITY_LIST_REQUEST,
  MODALITY_LIST_SUCCESS,
  MODALITY_LIST_FAIL,
  ADD_MODALITY_REQUEST,
  ADD_MODALITY_SUCCESS,
  ADD_MODALITY_FAILURE,
  EDIT_MODALITY_REQUEST,
  EDIT_MODALITY_SUCCESS,
  EDIT_MODALITY_FAILURE,
  DELETE_MODALITY_REQUEST,
  DELETE_MODALITY_SUCCESS,
  DELETE_MODALITY_FAILURE,
} from "./actionTypes"

function* listModalitySaga() {
  try {
    const data = yield call(modality.list)
    yield put({ type: MODALITY_LIST_SUCCESS, payload: data.data })
  } catch (error) {
    yield put({ type: MODALITY_LIST_FAIL, payload: error })
    toast.error("Please fix all errors.", { autoClose: 2000 })
  }
}

function* addModalitySaga(action) {
  try {
    console.log("Saga received addModalityRequest with data:", action.payload)
    yield call(modality.add, action.payload)
    yield put({ type: ADD_MODALITY_SUCCESS })
  } catch (error) {
    yield put({ type: ADD_MODALITY_FAILURE, payload: error })
    toast.error("Failed to add modality. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* editModalitySaga(action) {
  const { id, data } = action.payload
  try {
    yield call(modality.edit, id, data)
    yield put({ type: EDIT_MODALITY_SUCCESS })
    // You can dispatch another action to refresh the modality list if needed
  } catch (error) {
    yield put({ type: EDIT_MODALITY_FAILURE, payload: error })
    toast.error("Failed to edit modality. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* deleteModalitySaga(action) {
  const { id } = action.payload
  try {
    yield call(modality.delete, id)
    yield put({ type: DELETE_MODALITY_SUCCESS })
    // You can dispatch another action to refresh the modality list if needed
  } catch (error) {
    yield put({ type: DELETE_MODALITY_FAILURE, payload: error })
    toast.error("Failed to delete modality. Please try again.", {
      autoClose: 2000,
    })
  }
}

export default function* modalitySaga() {
  yield takeLatest(MODALITY_LIST_REQUEST, listModalitySaga)
  yield takeLatest(ADD_MODALITY_REQUEST, addModalitySaga)
  yield takeLatest(EDIT_MODALITY_REQUEST, editModalitySaga)
  yield takeLatest(DELETE_MODALITY_REQUEST, deleteModalitySaga)
}

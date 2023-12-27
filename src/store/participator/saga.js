import { takeLatest, put, call } from "redux-saga/effects"
import { participator } from "helpers/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import {
  PARTICIPATOR_LIST_REQUEST,
  PARTICIPATOR_LIST_SUCCESS,
  PARTICIPATOR_LIST_FAIL,
  ADD_PARTICIPATOR_REQUEST,
  ADD_PARTICIPATOR_SUCCESS,
  ADD_PARTICIPATOR_FAILURE,
  EDIT_PARTICIPATOR_REQUEST,
  EDIT_PARTICIPATOR_SUCCESS,
  EDIT_PARTICIPATOR_FAILURE,
  DELETE_PARTICIPATOR_REQUEST,
  DELETE_PARTICIPATOR_SUCCESS,
  DELETE_PARTICIPATOR_FAILURE,
} from "./actionTypes"

function* listParticipatorSaga() {
  try {
    const data = yield call(participator.list)
    yield put({ type: PARTICIPATOR_LIST_SUCCESS, payload: data.data })
  } catch (error) {
    yield put({ type: PARTICIPATOR_LIST_FAIL, payload: error })
    toast.error("Failed to fetch participator data. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* addParticipatorSaga(action) {
  try {
    yield call(participator.add, action.payload)
    yield put({ type: ADD_PARTICIPATOR_SUCCESS })
    toast.success("Participator added successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: ADD_PARTICIPATOR_FAILURE, payload: error })
    toast.error("Failed to add participator. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* editParticipatorSaga(action) {
  try {
    yield call(participator.edit, action.payload.id, action.payload.data)
    yield put({ type: EDIT_PARTICIPATOR_SUCCESS })
    toast.success("Participator edited successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: EDIT_PARTICIPATOR_FAILURE, payload: error })
    toast.error("Failed to edit participator. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* deleteParticipatorSaga(action) {
  try {
    yield call(participator.delete, action.payload)
    yield put({ type: DELETE_PARTICIPATOR_SUCCESS })
    toast.success("Participator deleted successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: DELETE_PARTICIPATOR_FAILURE, payload: error })
    toast.error("Failed to delete participator. Please try again.", {
      autoClose: 2000,
    })
  }
}

export default function* participatorSaga() {
  yield takeLatest(PARTICIPATOR_LIST_REQUEST, listParticipatorSaga)
  yield takeLatest(ADD_PARTICIPATOR_REQUEST, addParticipatorSaga)
  yield takeLatest(EDIT_PARTICIPATOR_REQUEST, editParticipatorSaga)
  yield takeLatest(DELETE_PARTICIPATOR_REQUEST, deleteParticipatorSaga)
  // Add additional takeLatest for other actions if needed
}

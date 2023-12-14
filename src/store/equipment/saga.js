
import { takeLatest, put, call } from "redux-saga/effects"
import { equipment } from "helpers/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import {
  EQUIPMENT_LIST_REQUEST,
  EQUIPMENT_LIST_SUCCESS,
  EQUIPMENT_LIST_FAIL,
  ADD_EQUIPMENT_REQUEST,
  ADD_EQUIPMENT_SUCCESS,
  ADD_EQUIPMENT_FAILURE,
  EDIT_EQUIPMENT_REQUEST,
  EDIT_EQUIPMENT_SUCCESS,
  EDIT_EQUIPMENT_FAILURE,
  DELETE_EQUIPMENT_REQUEST,
  DELETE_EQUIPMENT_SUCCESS,
  DELETE_EQUIPMENT_FAILURE,
} from "./actionTypes"

function* listEquipmentSaga() {
  try {
    const data = yield call(equipment.list)
    yield put({ type: EQUIPMENT_LIST_SUCCESS, payload: data.data })
  } catch (error) {
    yield put({ type: EQUIPMENT_LIST_FAIL, payload: error })
    toast.error("Failed to fetch equipment data. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* addEquipmentSaga(action) {
  try {
    yield call(equipment.add, action.payload)
    yield put({ type: ADD_EQUIPMENT_SUCCESS })
    toast.success("Equipment added successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: ADD_EQUIPMENT_FAILURE, payload: error })
    toast.error("Failed to add equipment. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* editEquipmentSaga(action) {
  try {
    yield call(equipment.edit, action.payload.id, action.payload.data)
    yield put({ type: EDIT_EQUIPMENT_SUCCESS })
    toast.success("Equipment edited successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: EDIT_EQUIPMENT_FAILURE, payload: error })
    toast.error("Failed to edit equipment. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* deleteEquipmentSaga(action) {
  try {
    yield call(equipment.delete, action.payload)
    yield put({ type: DELETE_EQUIPMENT_SUCCESS })
    toast.success("Equipment deleted successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: DELETE_EQUIPMENT_FAILURE, payload: error })
    toast.error("Failed to delete equipment. Please try again.", {
      autoClose: 2000,
    })
  }
}

export default function* equipmentSaga() {
  yield takeLatest(EQUIPMENT_LIST_REQUEST, listEquipmentSaga)
  yield takeLatest(ADD_EQUIPMENT_REQUEST, addEquipmentSaga)
  yield takeLatest(EDIT_EQUIPMENT_REQUEST, editEquipmentSaga)
  yield takeLatest(DELETE_EQUIPMENT_REQUEST, deleteEquipmentSaga)
}

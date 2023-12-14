// actions.js
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

export const equipmentListRequest = () => ({
  type: EQUIPMENT_LIST_REQUEST,
})

export const equipmentListSuccess = data => ({
  type: EQUIPMENT_LIST_SUCCESS,
  payload: data,
})

export const equipmentListFail = error => ({
  type: EQUIPMENT_LIST_FAIL,
  payload: error,
})

export const addEquipmentRequest = data => ({
  type: ADD_EQUIPMENT_REQUEST,
  payload: data,
})

export const addEquipmentSuccess = () => ({
  type: ADD_EQUIPMENT_SUCCESS,
})

export const addEquipmentFailure = error => ({
  type: ADD_EQUIPMENT_FAILURE,
  payload: error,
})

export const editEquipmentRequest = (id, data) => ({
  type: EDIT_EQUIPMENT_REQUEST,
  payload: { id, data },
})

export const editEquipmentSuccess = () => ({
  type: EDIT_EQUIPMENT_SUCCESS,
})

export const editEquipmentFailure = error => ({
  type: EDIT_EQUIPMENT_FAILURE,
  payload: error,
})

export const deleteEquipmentRequest = id => ({
  type: DELETE_EQUIPMENT_REQUEST,
  payload: id,
})

export const deleteEquipmentSuccess = () => ({
  type: DELETE_EQUIPMENT_SUCCESS,
})

export const deleteEquipmentFailure = error => ({
  type: DELETE_EQUIPMENT_FAILURE,
  payload: error,
})

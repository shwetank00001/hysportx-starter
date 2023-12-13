// actions.js
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

export const listModalityRequest = () => ({
  type: MODALITY_LIST_REQUEST,
})

export const listModalitySuccess = data => ({
  type: MODALITY_LIST_SUCCESS,
  payload: data,
})

export const listModalityFail = error => ({
  type: MODALITY_LIST_FAIL,
  payload: error,
})

export const addModalityRequest = data => ({
  type: ADD_MODALITY_REQUEST,
  payload: data,
})

export const addModalitySuccess = () => ({
  type: ADD_MODALITY_SUCCESS,
})

export const addModalityFailure = error => ({
  type: ADD_MODALITY_FAILURE,
  payload: error,
})

export const editModalityRequest = (id, data) => ({
  type: EDIT_MODALITY_REQUEST,
  payload: { id, data },
})

export const editModalitySuccess = () => ({
  type: EDIT_MODALITY_SUCCESS,
})

export const editModalityFailure = error => ({
  type: EDIT_MODALITY_FAILURE,
  payload: error,
})

export const deleteModalityRequest = id => ({
  type: DELETE_MODALITY_REQUEST,
  payload: { id },
})

export const deleteModalitySuccess = () => ({
  type: DELETE_MODALITY_SUCCESS,
})

export const deleteModalityFailure = error => ({
  type: DELETE_MODALITY_FAILURE,
  payload: error,
})

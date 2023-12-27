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

export const participatorListRequest = () => ({
  type: PARTICIPATOR_LIST_REQUEST,
})

export const participatorListSuccess = data => ({
  type: PARTICIPATOR_LIST_SUCCESS,
  payload: data,
})

export const participatorListFail = error => ({
  type: PARTICIPATOR_LIST_FAIL,
  payload: error,
})

export const addParticipatorRequest = data => ({
  type: ADD_PARTICIPATOR_REQUEST,
  payload: data,
})

export const addParticipatorSuccess = () => ({
  type: ADD_PARTICIPATOR_SUCCESS,
})

export const addParticipatorFailure = error => ({
  type: ADD_PARTICIPATOR_FAILURE,
  payload: error,
})

export const editParticipatorRequest = (id, data) => ({
  type: EDIT_PARTICIPATOR_REQUEST,
  payload: { id, data },
})

export const editParticipatorSuccess = () => ({
  type: EDIT_PARTICIPATOR_SUCCESS,
})

export const editParticipatorFailure = error => ({
  type: EDIT_PARTICIPATOR_FAILURE,
  payload: error,
})

export const deleteParticipatorRequest = id => ({
  type: DELETE_PARTICIPATOR_REQUEST,
  payload: id,
})

export const deleteParticipatorSuccess = () => ({
  type: DELETE_PARTICIPATOR_SUCCESS,
})

export const deleteParticipatorFailure = error => ({
  type: DELETE_PARTICIPATOR_FAILURE,
  payload: error,
})

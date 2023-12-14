
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

export const muscleListRequest = () => ({
  type: MUSCLE_LIST_REQUEST,
})

export const muscleListSuccess = data => ({
  type: MUSCLE_LIST_SUCCESS,
  payload: data,
})

export const muscleListFail = error => ({
  type: MUSCLE_LIST_FAIL,
  payload: error,
})

export const addMuscleRequest = data => ({
  type: ADD_MUSCLE_REQUEST,
  payload: data,
})

export const addMuscleSuccess = () => ({
  type: ADD_MUSCLE_SUCCESS,
})

export const addMuscleFailure = error => ({
  type: ADD_MUSCLE_FAILURE,
  payload: error,
})

export const editMuscleRequest = (id, data) => ({
  type: EDIT_MUSCLE_REQUEST,
  payload: { id, data },
})

export const editMuscleSuccess = () => ({
  type: EDIT_MUSCLE_SUCCESS,
})

export const editMuscleFailure = error => ({
  type: EDIT_MUSCLE_FAILURE,
  payload: error,
})

export const deleteMuscleRequest = id => ({
  type: DELETE_MUSCLE_REQUEST,
  payload: id,
})

export const deleteMuscleSuccess = () => ({
  type: DELETE_MUSCLE_SUCCESS,
})

export const deleteMuscleFailure = error => ({
  type: DELETE_MUSCLE_FAILURE,
  payload: error,
})

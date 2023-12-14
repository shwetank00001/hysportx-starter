// actions.js
import {
  EXERCISE_LIST_REQUEST,
  EXERCISE_LIST_SUCCESS,
  EXERCISE_LIST_FAIL,
  ADD_EXERCISE_REQUEST,
  ADD_EXERCISE_SUCCESS,
  ADD_EXERCISE_FAILURE,
  EDIT_EXERCISE_REQUEST,
  EDIT_EXERCISE_SUCCESS,
  EDIT_EXERCISE_FAILURE,
  DELETE_EXERCISE_REQUEST,
  DELETE_EXERCISE_SUCCESS,
  DELETE_EXERCISE_FAILURE,
} from "./actionTypes"

export const exerciseListRequest = () => ({
  type: EXERCISE_LIST_REQUEST,
})

export const exerciseListSuccess = data => ({
  type: EXERCISE_LIST_SUCCESS,
  payload: data,
})

export const exerciseListFail = error => ({
  type: EXERCISE_LIST_FAIL,
  payload: error,
})

export const addExerciseRequest = data => ({
  type: ADD_EXERCISE_REQUEST,
  payload: data,
})

export const addExerciseSuccess = () => ({
  type: ADD_EXERCISE_SUCCESS,
})

export const addExerciseFailure = error => ({
  type: ADD_EXERCISE_FAILURE,
  payload: error,
})

export const editExerciseRequest = (id, data) => ({
  type: EDIT_EXERCISE_REQUEST,
  payload: { id, data },
})

export const editExerciseSuccess = () => ({
  type: EDIT_EXERCISE_SUCCESS,
})

export const editExerciseFailure = error => ({
  type: EDIT_EXERCISE_FAILURE,
  payload: error,
})

export const deleteExerciseRequest = id => ({
  type: DELETE_EXERCISE_REQUEST,
  payload: id,
})

export const deleteExerciseSuccess = () => ({
  type: DELETE_EXERCISE_SUCCESS,
})

export const deleteExerciseFailure = error => ({
  type: DELETE_EXERCISE_FAILURE,
  payload: error,
})

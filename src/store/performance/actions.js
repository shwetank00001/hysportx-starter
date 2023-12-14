// actions.js
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

export const performanceListRequest = () => ({
  type: PERFORMANCE_LIST_REQUEST,
})

export const performanceListSuccess = data => ({
  type: PERFORMANCE_LIST_SUCCESS,
  payload: data,
})

export const performanceListFail = error => ({
  type: PERFORMANCE_LIST_FAIL,
  payload: error,
})

export const addPerformanceRequest = data => ({
  type: ADD_PERFORMANCE_REQUEST,
  payload: data,
})

export const addPerformanceSuccess = () => ({
  type: ADD_PERFORMANCE_SUCCESS,
})

export const addPerformanceFailure = error => ({
  type: ADD_PERFORMANCE_FAILURE,
  payload: error,
})

export const editPerformanceRequest = (id, data) => ({
  type: EDIT_PERFORMANCE_REQUEST,
  payload: { id, data },
})

export const editPerformanceSuccess = () => ({
  type: EDIT_PERFORMANCE_SUCCESS,
})

export const editPerformanceFailure = error => ({
  type: EDIT_PERFORMANCE_FAILURE,
  payload: error,
})

export const deletePerformanceRequest = id => ({
  type: DELETE_PERFORMANCE_REQUEST,
  payload: id,
})

export const deletePerformanceSuccess = () => ({
  type: DELETE_PERFORMANCE_SUCCESS,
})

export const deletePerformanceFailure = error => ({
  type: DELETE_PERFORMANCE_FAILURE,
  payload: error,
})

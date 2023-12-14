
import {
  ACTIVITY_LIST_REQUEST,
  ACTIVITY_LIST_SUCCESS,
  ACTIVITY_LIST_FAIL,
  ADD_ACTIVITY_REQUEST,
  ADD_ACTIVITY_SUCCESS,
  ADD_ACTIVITY_FAILURE,
  EDIT_ACTIVITY_REQUEST,
  EDIT_ACTIVITY_SUCCESS,
  EDIT_ACTIVITY_FAILURE,
  DELETE_ACTIVITY_REQUEST,
  DELETE_ACTIVITY_SUCCESS,
  DELETE_ACTIVITY_FAILURE,
} from "./actionTypes"


export const activityListRequest = () => ({
  type: ACTIVITY_LIST_REQUEST,
})


export const activityListSuccess = data => ({
  type: ACTIVITY_LIST_SUCCESS,
  payload: data,
})


export const activityListFail = error => ({
  type: ACTIVITY_LIST_FAIL,
  payload: error,
})


export const addActivityRequest = data => ({
  type: ADD_ACTIVITY_REQUEST,
  payload: data,
})


export const addActivitySuccess = () => ({
  type: ADD_ACTIVITY_SUCCESS,
})


export const addActivityFailure = error => ({
  type: ADD_ACTIVITY_FAILURE,
  payload: error,
})


export const editActivityRequest = (id, data) => ({
  type: EDIT_ACTIVITY_REQUEST,
  payload: { id, data },
})


export const editActivitySuccess = () => ({
  type: EDIT_ACTIVITY_SUCCESS,
})


export const editActivityFailure = error => ({
  type: EDIT_ACTIVITY_FAILURE,
  payload: error,
})


export const deleteActivityRequest = id => ({
  type: DELETE_ACTIVITY_REQUEST,
  payload: id,
})

export const deleteActivitySuccess = () => ({
  type: DELETE_ACTIVITY_SUCCESS,
})


export const deleteActivityFailure = error => ({
  type: DELETE_ACTIVITY_FAILURE,
  payload: error,
})



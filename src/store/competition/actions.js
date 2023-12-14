// actions.js
import {
  COMPETITION_LIST_REQUEST,
  COMPETITION_LIST_SUCCESS,
  COMPETITION_LIST_FAIL,
  ADD_COMPETITION_REQUEST,
  ADD_COMPETITION_SUCCESS,
  ADD_COMPETITION_FAILURE,
  EDIT_COMPETITION_REQUEST,
  EDIT_COMPETITION_SUCCESS,
  EDIT_COMPETITION_FAILURE,
  DELETE_COMPETITION_REQUEST,
  DELETE_COMPETITION_SUCCESS,
  DELETE_COMPETITION_FAILURE,
} from "./actionTypes"

export const competitionListRequest = () => ({
  type: COMPETITION_LIST_REQUEST,
})

export const competitionListSuccess = data => ({
  type: COMPETITION_LIST_SUCCESS,
  payload: data,
})

export const competitionListFail = error => ({
  type: COMPETITION_LIST_FAIL,
  payload: error,
})

export const addCompetitionRequest = data => ({
  type: ADD_COMPETITION_REQUEST,
  payload: data,
})

export const addCompetitionSuccess = () => ({
  type: ADD_COMPETITION_SUCCESS,
})

export const addCompetitionFailure = error => ({
  type: ADD_COMPETITION_FAILURE,
  payload: error,
})

export const editCompetitionRequest = (id, data) => ({
  type: EDIT_COMPETITION_REQUEST,
  payload: { id, data },
})

export const editCompetitionSuccess = () => ({
  type: EDIT_COMPETITION_SUCCESS,
})

export const editCompetitionFailure = error => ({
  type: EDIT_COMPETITION_FAILURE,
  payload: error,
})

export const deleteCompetitionRequest = id => ({
  type: DELETE_COMPETITION_REQUEST,
  payload: id,
})

export const deleteCompetitionSuccess = () => ({
  type: DELETE_COMPETITION_SUCCESS,
})

export const deleteCompetitionFailure = error => ({
  type: DELETE_COMPETITION_FAILURE,
  payload: error,
})

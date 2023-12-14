// actions.js
import {
  BENEFIT_LIST_REQUEST,
  BENEFIT_LIST_SUCCESS,
  BENEFIT_LIST_FAIL,
  ADD_BENEFIT_REQUEST,
  ADD_BENEFIT_SUCCESS,
  ADD_BENEFIT_FAILURE,
  EDIT_BENEFIT_REQUEST,
  EDIT_BENEFIT_SUCCESS,
  EDIT_BENEFIT_FAILURE,
  DELETE_BENEFIT_REQUEST,
  DELETE_BENEFIT_SUCCESS,
  DELETE_BENEFIT_FAILURE,
} from "./actionTypes"

export const benefitListRequest = () => ({
  type: BENEFIT_LIST_REQUEST,
})

export const benefitListSuccess = data => ({
  type: BENEFIT_LIST_SUCCESS,
  payload: data,
})

export const benefitListFail = error => ({
  type: BENEFIT_LIST_FAIL,
  payload: error,
})

export const addBenefitRequest = data => ({
  type: ADD_BENEFIT_REQUEST,
  payload: data,
})

export const addBenefitSuccess = () => ({
  type: ADD_BENEFIT_SUCCESS,
})

export const addBenefitFailure = error => ({
  type: ADD_BENEFIT_FAILURE,
  payload: error,
})

export const editBenefitRequest = (id, data) => ({
  type: EDIT_BENEFIT_REQUEST,
  payload: { id, data },
})

export const editBenefitSuccess = () => ({
  type: EDIT_BENEFIT_SUCCESS,
})

export const editBenefitFailure = error => ({
  type: EDIT_BENEFIT_FAILURE,
  payload: error,
})

export const deleteBenefitRequest = id => ({
  type: DELETE_BENEFIT_REQUEST,
  payload: id,
})

export const deleteBenefitSuccess = () => ({
  type: DELETE_BENEFIT_SUCCESS,
})

export const deleteBenefitFailure = error => ({
  type: DELETE_BENEFIT_FAILURE,
  payload: error,
})

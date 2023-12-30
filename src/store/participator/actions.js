import {
  ADD_PARTICIPATOR,
  ADD_PARTICIPATOR_SUCCESS,
  ADD_PARTICIPATOR_FAIL,

  FETCH_PARTICIPATOR_cOMMUNITIES,
  FETCH_PARTICIPATOR_cOMMUNITIES_SUCCESS,
  FETCH_PARTICIPATOR_cOMMUNITIES__FAIL,
  
  PARTICIPATOR_LIST_REQUEST,
  PARTICIPATOR_LIST_SUCCESS,
  PARTICIPATOR_LIST_FAIL,
  ADD_PARTICIPATOR_REQUEST,
  ADD_PARTICIPATOR_FAILURE,
  ACCEPT_PARTICIPATOR_REQUEST,
  ACCEPT_PARTICIPATOR_SUCCESS,
  ACCEPT_PARTICIPATOR_FAILURE,
  DELETE_PARTICIPATOR_REQUEST,
  DELETE_PARTICIPATOR_SUCCESS,
  DELETE_PARTICIPATOR_FAILURE,
  PARTICIPATOR_LIST_MAIN_REQUEST,
  PARTICIPATOR_LIST_MAIN_SUCCESS,
  PARTICIPATOR_LIST_MAIN_FAIL,
} from "./actionTypes"


// participator data submit handle
export const onAddParticipator = (data) => ({
  type: ADD_PARTICIPATOR,
  payload:data,
})
export const onAddParticipatorSuccess = (success) => ({
  type: ADD_PARTICIPATOR_SUCCESS,
  payload:success
})
export const onAddParticipatorFail = (error) => ({
  type: ADD_PARTICIPATOR_FAIL,
  payload:error
})

export const fetchParticipatorCommunities = () => ({
  type: FETCH_PARTICIPATOR_cOMMUNITIES,
})

export const fetchParticipatorCommunitiesSuccess = (data) => ({
  type: FETCH_PARTICIPATOR_cOMMUNITIES_SUCCESS,
  payload:data
})

export const fetchParticipatorCommunitiesFail = error => ({
  type: FETCH_PARTICIPATOR_cOMMUNITIES__FAIL,
  payload: error,
})


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
export const participatorMainListRequest = () => ({
  type: PARTICIPATOR_LIST_MAIN_REQUEST,
})

export const participatorMainListSuccess = data => ({
  type: PARTICIPATOR_LIST_MAIN_SUCCESS,
  payload: data,
})

export const participatorMainListFail = error => ({
  type: PARTICIPATOR_LIST_FAIL,
  payload: error,
})

export const addParticipatorRequest = data => ({
  type: ADD_PARTICIPATOR_REQUEST,
  payload: data,
})

export const addParticipatorSuccess = () => ({
  type: PARTICIPATOR_LIST_MAIN_FAIL,
})

export const addParticipatorFailure = error => ({
  type: ADD_PARTICIPATOR_FAILURE,
  payload: error,
})

export const acceptParticipatorRequest = (id) => ({
  type: ACCEPT_PARTICIPATOR_REQUEST,
  payload:  id ,
})

export const acceptParticipatorSuccess = () => ({
  type: ACCEPT_PARTICIPATOR_SUCCESS,
})

export const acceptParticipatorFailure = error => ({
  type: ACCEPT_PARTICIPATOR_FAILURE,
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

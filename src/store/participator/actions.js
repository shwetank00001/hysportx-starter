import {
  ADD_PARTICIPATOR,
  ADD_PARTICIPATOR_SUCCESS,
  ADD_PARTICIPATOR_FAIL,

  REMOVE_PARTICIPATOR_REQUEST_LIST,
  REMOVE_PARTICIPATOR_REQUEST_LIST_SUCCESS,
  REMOVE_PARTICIPATOR_REQUEST_LIST_FAIL,

  FETCH_PARTICIPATOR_cOMMUNITIES,
  FETCH_PARTICIPATOR_cOMMUNITIES_SUCCESS,
  FETCH_PARTICIPATOR_cOMMUNITIES__FAIL,

  ALL_COMPETITION_LIST,
  ALL_COMPETITION_LIST_SUCCESS,
  ALL_COMPETITION_LIST__FAIL,

  ALL_PARTICIPATED_LIST,
  ALL_PARTICIPATED_LIST_SUCCESS,
  ALL_PARTICIPATED_LIST_FAIL,

  JOIN_PARTICIPATE,
  JOIN_PARTICIPATE_SUCCESS,
  JOIN_PARTICIPATE_FAIL,
  
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

export const onRemovePartipator = (data) => ({
  type: REMOVE_PARTICIPATOR_REQUEST_LIST,
  payload:data,
})
export const onRemovePartipatorSuccess = (success) => ({
  type: REMOVE_PARTICIPATOR_REQUEST_LIST_SUCCESS,
  payload:success
})
export const onRemovePartipatorFail = (error) => ({
  type: REMOVE_PARTICIPATOR_REQUEST_LIST_FAIL,
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

export const allCompetitionList = (id) => ({
  type: ALL_COMPETITION_LIST,
  payload:id,
})

export const allCompetitionListSuccess = (data) => ({
  type:ALL_COMPETITION_LIST_SUCCESS,
  payload:data
})

export const allCompetitionListFail = error => ({
  type: ALL_COMPETITION_LIST__FAIL,
  payload: error,
})


export const acceptParticipated = (pid,jid) => ({
  type: JOIN_PARTICIPATE,
  payload:{pid,jid},
})

export const allParticipatedList = (id) => ({
  type: ALL_PARTICIPATED_LIST,
  payload:id,
})

export const allParticipatedListSuccess = (data) => ({
  type:ALL_PARTICIPATED_LIST_SUCCESS,
  payload:data
})

export const allParticipatedListFail = error => ({
  type: ALL_PARTICIPATED_LIST_FAIL,
  payload: error,
})
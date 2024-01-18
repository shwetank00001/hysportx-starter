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
  ADD_ROUND_REQUEST,
  ADD_ROUND_SUCCESS,
  ADD_ROUND_FAILURE,
  REMOVE_ROUND_ACTIVITY_REQUEST,
  REMOVE_ROUND_ACTIVITY_SUCCESS,
  REMOVE_ROUND_ACTIVITY_FAILURE,
  REMOVE_ROUND_REQUEST,
  REMOVE_ROUND_SUCCESS,
  REMOVE_ROUND_FAILURE,
  MAKE_PARTICIPATION_REQUEST,
  MAKE_PARTICIPATION_SUCCESS,
  MAKE_PARTICIPATION_FAILURE,
  PARTICIPATED_COMPETITION_LIST_REQUEST,
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

export const editCompetitionRequest = data => ({
  type: EDIT_COMPETITION_REQUEST,
  payload: { data },
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

// New Actions for additional endpoints
export const addRoundRequest = data => ({
  type: ADD_ROUND_REQUEST,
  payload: data,
})

export const addRoundSuccess = () => ({
  type: ADD_ROUND_SUCCESS,
})

export const addRoundFailure = error => ({
  type: ADD_ROUND_FAILURE,
  payload: error,
})

export const removeRoundActivityRequest = data => ({
  type: REMOVE_ROUND_ACTIVITY_REQUEST,
  payload: data,
})

export const removeRoundActivitySuccess = () => ({
  type: REMOVE_ROUND_ACTIVITY_SUCCESS,
})

export const removeRoundActivityFailure = error => ({
  type: REMOVE_ROUND_ACTIVITY_FAILURE,
  payload: error,
})

export const removeRoundRequest = (compId, roundName) => ({
  type: REMOVE_ROUND_REQUEST,
  payload: { compId, roundName },
})

export const removeRoundSuccess = () => ({
  type: REMOVE_ROUND_SUCCESS,
})

export const removeRoundFailure = error => ({
  type: REMOVE_ROUND_FAILURE,
  payload: error,
})

export const makeParticipationRequest = data => ({
  type: MAKE_PARTICIPATION_REQUEST,
  payload: data,
})

export const makeParticipationSuccess = () => ({
  type: MAKE_PARTICIPATION_SUCCESS,
})

export const makeParticipationFailure = error => ({
  type: MAKE_PARTICIPATION_FAILURE,
  payload: error,
})

export const participatedCompetitionListRequest = participatior_id => ({
  type: PARTICIPATED_COMPETITION_LIST_REQUEST,
  payload: participatior_id,
})

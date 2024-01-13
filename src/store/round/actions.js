// roundActions.js
import {
  ADD_ROUND_REQUEST,
  ADD_ROUND_SUCCESS,
  ADD_ROUND_FAILURE,
  REMOVE_ACTIVITY_FROM_ROUND_REQUEST,
  REMOVE_ACTIVITY_FROM_ROUND_SUCCESS,
  REMOVE_ACTIVITY_FROM_ROUND_FAILURE,
  REMOVE_ROUND_REQUEST,
  REMOVE_ROUND_SUCCESS,
  REMOVE_ROUND_FAILURE,
} from "./actionTypes"

export const addRoundRequest = data => ({
  type: ADD_ROUND_REQUEST,
  payload: data,
})
export const addRoundSuccess = () => ({ type: ADD_ROUND_SUCCESS })
export const addRoundFailure = error => ({
  type: ADD_ROUND_FAILURE,
  payload: error,
})

export const removeActivityFromRoundRequest = (
  competitionId,
  activityId,
  roundName
) => ({
  type: REMOVE_ACTIVITY_FROM_ROUND_REQUEST,
  payload: { competitionId, activityId, roundName },
})
export const removeActivityFromRoundSuccess = () => ({
  type: REMOVE_ACTIVITY_FROM_ROUND_SUCCESS,
})
export const removeActivityFromRoundFailure = error => ({
  type: REMOVE_ACTIVITY_FROM_ROUND_FAILURE,
  payload: error,
})

export const removeRoundRequest = (competitionId, roundName) => ({
  type: REMOVE_ROUND_REQUEST,
  payload: { competitionId, roundName },
})
export const removeRoundSuccess = () => ({ type: REMOVE_ROUND_SUCCESS })
export const removeRoundFailure = error => ({
  type: REMOVE_ROUND_FAILURE,
  payload: error,
})

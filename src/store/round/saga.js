// roundSaga.js
import { takeLatest, call, put } from "redux-saga/effects"
import {
  ADD_ROUND_REQUEST,
  REMOVE_ACTIVITY_FROM_ROUND_REQUEST,
  REMOVE_ROUND_REQUEST,
} from "./actionTypes"
import { roundApi } from "helpers/api"
import {
  addRoundSuccess,
  addRoundFailure,
  removeActivityFromRoundSuccess,
  removeActivityFromRoundFailure,
  removeRoundSuccess,
  removeRoundFailure,
} from "./actions"

function* addRound(action) {
  try {
    yield call(roundApi.add, action.payload)
    yield put(addRoundSuccess())
  } catch (error) {
    yield put(addRoundFailure(error))
  }
}

function* removeActivityFromRound(action) {
  try {
    yield call(
      roundApi.removeActivity,
      action.payload.competitionId,
      action.payload.activityId,
      action.payload.roundName
    )
    yield put(removeActivityFromRoundSuccess())
  } catch (error) {
    yield put(removeActivityFromRoundFailure(error))
  }
}

function* removeRound(action) {
  try {
    yield call(
      roundApi.removeRound,
      action.payload.competitionId,
      action.payload.roundName
    )
    yield put(removeRoundSuccess())
  } catch (error) {
    yield put(removeRoundFailure(error))
  }
}

export default function* roundSaga() {
  yield takeLatest(ADD_ROUND_REQUEST, addRound)
  yield takeLatest(REMOVE_ACTIVITY_FROM_ROUND_REQUEST, removeActivityFromRound)
  yield takeLatest(REMOVE_ROUND_REQUEST, removeRound)
}

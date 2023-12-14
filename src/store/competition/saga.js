// saga.js
import { takeLatest, put, call } from "redux-saga/effects"
import { competition } from "helpers/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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

function* listCompetitionSaga() {
  try {
    const data = yield call(competition.list)
    yield put({ type: COMPETITION_LIST_SUCCESS, payload: data.data })
  } catch (error) {
    yield put({ type: COMPETITION_LIST_FAIL, payload: error })
    toast.error("Failed to fetch competition data. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* addCompetitionSaga(action) {
  try {
    yield call(competition.add, action.payload)
    yield put({ type: ADD_COMPETITION_SUCCESS })
    toast.success("Competition added successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: ADD_COMPETITION_FAILURE, payload: error })
    toast.error("Failed to add competition. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* editCompetitionSaga(action) {
  try {
    yield call(competition.edit, action.payload.id, action.payload.data)
    yield put({ type: EDIT_COMPETITION_SUCCESS })
    toast.success("Competition edited successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: EDIT_COMPETITION_FAILURE, payload: error })
    toast.error("Failed to edit competition. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* deleteCompetitionSaga(action) {
  try {
    yield call(competition.delete, action.payload)
    yield put({ type: DELETE_COMPETITION_SUCCESS })
    toast.success("Competition deleted successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: DELETE_COMPETITION_FAILURE, payload: error })
    toast.error("Failed to delete competition. Please try again.", {
      autoClose: 2000,
    })
  }
}

export default function* competitionSaga() {
  yield takeLatest(COMPETITION_LIST_REQUEST, listCompetitionSaga)
  yield takeLatest(ADD_COMPETITION_REQUEST, addCompetitionSaga)
  yield takeLatest(EDIT_COMPETITION_REQUEST, editCompetitionSaga)
  yield takeLatest(DELETE_COMPETITION_REQUEST, deleteCompetitionSaga)
}

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
  ADD_ROUND_REQUEST,
  ADD_ROUND_SUCCESS,
  ADD_ROUND_FAILURE,
  REMOVE_ROUND_ACTIVITY_REQUEST,
  REMOVE_ROUND_ACTIVITY_SUCCESS,
  REMOVE_ROUND_ACTIVITY_FAILURE,
  REMOVE_ROUND_REQUEST,
  REMOVE_ROUND_SUCCESS,
  REMOVE_ROUND_FAILURE,
} from "./actionTypes"
import { CHANGE_PRELOADER } from "../layout/actionTypes"

function* listCompetitionSaga() {
  try {
    // yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Fetching Competition Data Please wait ...'}})
    const response = yield call(competition.list)
    yield put({ type: COMPETITION_LIST_SUCCESS, payload: response.data })
    // yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
  } catch (error) {
    if (error.response && error.response.status === 404) {
      yield put({ type: COMPETITION_LIST_SUCCESS, payload: [] })
    }
    yield put({ type: COMPETITION_LIST_FAIL, payload: error })
  }
}

function* addCompetitionSaga(action) {
  try {
    yield put({
      type: CHANGE_PRELOADER,
      payload: { status: true, text: "Creating Competiton Please wait ..." },
    })
    const response = yield call(competition.add, action.payload)
    yield put({ type: ADD_COMPETITION_SUCCESS })
    yield put({ type: COMPETITION_LIST_REQUEST })
    yield put({ type: CHANGE_PRELOADER, payload: { status: false, text: "" } })
    toast.success(response.message, { autoClose: 2000 })
  } catch (error) {
    yield put({ type: CHANGE_PRELOADER, payload: { status: false, text: "" } })
    yield put({
      type: ADD_COMPETITION_FAILURE,
      payload: error.response.data.message,
    })
    toast.error(error.response.data.message, { autoClose: 2000 })
  }
}

function* editCompetitionSaga(action) {
  try {
    yield put({
      type: CHANGE_PRELOADER,
      payload: { status: true, text: "Updating Competiton Please wait ..." },
    })
    const response = yield call(competition.update, action.payload.data)
    yield put({ type: EDIT_COMPETITION_SUCCESS })
    yield put({ type: COMPETITION_LIST_REQUEST })
    yield put({ type: CHANGE_PRELOADER, payload: { status: false, text: "" } })
    toast.success(response.message, { autoClose: 2000 })
  } catch (error) {
    yield put({ type: CHANGE_PRELOADER, payload: { status: false, text: "" } })
    yield put({
      type: EDIT_COMPETITION_FAILURE,
      payload: error.response.data.message,
    })
    toast.error(error.response.data.message, { autoClose: 2000 })
  }
}

function* deleteCompetitionSaga(action) {
  try {
    yield put({
      type: CHANGE_PRELOADER,
      payload: {
        status: true,
        text: "Deleting Your Competiton data Please wait ...",
      },
    })
    const response = yield call(competition.delete, action.payload)
    yield put({ type: DELETE_COMPETITION_SUCCESS })
    yield put({ type: COMPETITION_LIST_REQUEST })
    yield put({ type: CHANGE_PRELOADER, payload: { status: false, text: "" } })
    toast.success(response.message, { autoClose: 2000 })
  } catch (error) {
    yield put({ type: CHANGE_PRELOADER, payload: { status: false, text: "" } })
    yield put({ type: DELETE_COMPETITION_FAILURE, payload: error })
    toast.error(error.response.data.message, { autoClose: 2000 })
  }
}

function* addRoundSaga(action) {
  try {
    yield put({
      type: CHANGE_PRELOADER,
      payload: { status: true, text: "Adding Round. Please wait..." },
    })
    const response = yield call(competition.addRound, action.payload)
    yield put({ type: ADD_ROUND_SUCCESS })
    yield put({ type: COMPETITION_LIST_REQUEST })
    yield put({
      type: CHANGE_PRELOADER,
      payload: { status: false, text: "" },
    })
    toast.success(response.message, { autoClose: 2000 })
  } catch (error) {
    yield put({
      type: CHANGE_PRELOADER,
      payload: { status: false, text: "" },
    })
    yield put({ type: ADD_ROUND_FAILURE, payload: error })
    toast.error(error.response.data.message, { autoClose: 2000 })
  }
}

function* removeRoundActivitySaga(action) {
  try {
    yield put({
      type: CHANGE_PRELOADER,
      payload: {
        status: true,
        text: "Removing Round Activity. Please wait...",
      },
    })
    const response = yield call(competition.removeRoundActivity, action.payload)
    yield put({ type: REMOVE_ROUND_ACTIVITY_SUCCESS })
    yield put({ type: COMPETITION_LIST_REQUEST })
    yield put({
      type: CHANGE_PRELOADER,
      payload: { status: false, text: "" },
    })
    toast.success(response.message, { autoClose: 2000 })
  } catch (error) {
    yield put({
      type: CHANGE_PRELOADER,
      payload: { status: false, text: "" },
    })
    yield put({ type: REMOVE_ROUND_ACTIVITY_FAILURE, payload: error })
    toast.error(error.response.data.message, { autoClose: 2000 })
  }
}

function* removeRoundSaga(action) {
  try {
    yield put({
      type: CHANGE_PRELOADER,
      payload: { status: true, text: "Removing Round. Please wait..." },
    })
    const response = yield call(competition.removeRound, action.payload)
    yield put({ type: REMOVE_ROUND_SUCCESS })
    yield put({ type: COMPETITION_LIST_REQUEST })
    yield put({
      type: CHANGE_PRELOADER,
      payload: { status: false, text: "" },
    })
    toast.success(response.message, { autoClose: 2000 })
  } catch (error) {
    yield put({
      type: CHANGE_PRELOADER,
      payload: { status: false, text: "" },
    })
    yield put({ type: REMOVE_ROUND_FAILURE, payload: error })
    toast.error(error.response.data.message, { autoClose: 2000 })
  }
}

export default function* competitionSaga() {
  yield takeLatest(COMPETITION_LIST_REQUEST, listCompetitionSaga)
  yield takeLatest(ADD_COMPETITION_REQUEST, addCompetitionSaga)
  yield takeLatest(EDIT_COMPETITION_REQUEST, editCompetitionSaga)
  yield takeLatest(DELETE_COMPETITION_REQUEST, deleteCompetitionSaga)

  yield takeLatest(ADD_ROUND_REQUEST, addRoundSaga)
  yield takeLatest(REMOVE_ROUND_ACTIVITY_REQUEST, removeRoundActivitySaga)
  yield takeLatest(REMOVE_ROUND_REQUEST, removeRoundSaga)
}

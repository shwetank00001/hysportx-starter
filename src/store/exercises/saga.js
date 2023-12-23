// saga.js
import { takeLatest, put, call } from "redux-saga/effects"
import { exercise } from "helpers/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import {
  EXERCISE_LIST_REQUEST,
  EXERCISE_LIST_SUCCESS,
  EXERCISE_LIST_FAIL,
  ADD_EXERCISE_REQUEST,
  ADD_EXERCISE_SUCCESS,
  ADD_EXERCISE_FAILURE,
  EDIT_EXERCISE_REQUEST,
  EDIT_EXERCISE_SUCCESS,
  EDIT_EXERCISE_FAILURE,
  DELETE_EXERCISE_REQUEST,
  DELETE_EXERCISE_SUCCESS,
  DELETE_EXERCISE_FAILURE,
} from "./actionTypes"

function* listExerciseSaga() {
  try {
    const data = yield call(exercise.list)
    yield put({ type: EXERCISE_LIST_SUCCESS, payload: data.data })
  } catch (error) {
    yield put({ type: EXERCISE_LIST_FAIL, payload: error })
    toast.error("Failed to fetch exercise data. Please try again.", {
      autoClose: 2000,
    })
  }
}



function* addExerciseSaga(action) {
  try {
    yield call(exercise.add, action.payload)
    yield put({ type: ADD_EXERCISE_SUCCESS })
    toast.success("Exercise added successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: ADD_EXERCISE_FAILURE, payload: error })
    toast.error("Failed to add exercise. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* editExerciseSaga(action) {
  try {
    yield call(exercise.edit, action.payload.id, action.payload.data)
    yield put({ type: EDIT_EXERCISE_SUCCESS })
    toast.success("Exercise edited successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: EDIT_EXERCISE_FAILURE, payload: error })
    toast.error("Failed to edit exercise. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* deleteExerciseSaga(action) {
  try {
    yield call(exercise.delete, action.payload)
    yield put({ type: DELETE_EXERCISE_SUCCESS })
    toast.success("Exercise deleted successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: DELETE_EXERCISE_FAILURE, payload: error })
    toast.error("Failed to delete exercise. Please try again.", {
      autoClose: 2000,
    })
  }
}

export default function* exerciseSaga() {
  yield takeLatest(EXERCISE_LIST_REQUEST, listExerciseSaga)
  yield takeLatest(ADD_EXERCISE_REQUEST, addExerciseSaga)
  yield takeLatest(EDIT_EXERCISE_REQUEST, editExerciseSaga)
  yield takeLatest(DELETE_EXERCISE_REQUEST, deleteExerciseSaga)
}

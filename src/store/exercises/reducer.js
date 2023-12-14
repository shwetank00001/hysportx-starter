// reducer.js
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

const initialState = {
  exercise: [],
  loading: false,
  error: null,
}

const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXERCISE_LIST_REQUEST:
    case ADD_EXERCISE_REQUEST:
    case EDIT_EXERCISE_REQUEST:
    case DELETE_EXERCISE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case EXERCISE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        exercise: action.payload,
      }
    case ADD_EXERCISE_SUCCESS:
    case EDIT_EXERCISE_SUCCESS:
    case DELETE_EXERCISE_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case EXERCISE_LIST_FAIL:
    case ADD_EXERCISE_FAILURE:
    case EDIT_EXERCISE_FAILURE:
    case DELETE_EXERCISE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default exerciseReducer

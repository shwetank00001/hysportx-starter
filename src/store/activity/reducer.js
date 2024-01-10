
import {
  ACTIVITY_LIST_REQUEST,
  ACTIVITY_LIST_SUCCESS,
  ACTIVITY_LIST_FAIL,
  ADD_ACTIVITY_REQUEST,
  ADD_ACTIVITY_SUCCESS,
  ADD_ACTIVITY_FAILURE,
  EDIT_ACTIVITY_REQUEST,
  EDIT_ACTIVITY_SUCCESS,
  EDIT_ACTIVITY_FAILURE,
  DELETE_ACTIVITY_REQUEST,
  DELETE_ACTIVITY_SUCCESS,
  DELETE_ACTIVITY_FAILURE,

  ADD_ACTIVITY_EXERCISE_REQUEST,
  ADD_ACTIVITY_EXERCISE_SUCCESS,
  ADD_ACTIVITY_EXERCISE_FAILURE,
  DELETE_ACTIVITY_EXERCISE_REQUEST,
  DELETE_ACTIVITY_EXERCISE_SUCCESS,
  DELETE_ACTIVITY_EXERCISE_FAILURE,
} from "./actionTypes"

const initialState = {
  activity: [],
  loading: false,
  error: null,
  adderrors:null,
}

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVITY_LIST_REQUEST:
    case ADD_ACTIVITY_REQUEST:
    case EDIT_ACTIVITY_REQUEST:
    case DELETE_ACTIVITY_REQUEST:
    case ADD_ACTIVITY_EXERCISE_REQUEST:
    case DELETE_ACTIVITY_EXERCISE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case ACTIVITY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        activity: action.payload,
      }
    case ADD_ACTIVITY_SUCCESS:
    case ADD_ACTIVITY_EXERCISE_SUCCESS:
    case EDIT_ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: false,
        adderrors:null
      }
    case DELETE_ACTIVITY_SUCCESS:
    case DELETE_ACTIVITY_EXERCISE_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case ADD_ACTIVITY_FAILURE:
    case ADD_ACTIVITY_EXERCISE_FAILURE:
    case EDIT_ACTIVITY_FAILURE:
      return {
        ...state,
        loading: false,
        adderrors: action.payload,
      }
    case ACTIVITY_LIST_FAIL:
    case DELETE_ACTIVITY_FAILURE:
    case DELETE_ACTIVITY_EXERCISE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default activityReducer

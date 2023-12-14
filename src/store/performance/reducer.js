// reducer.js
import {
  PERFORMANCE_LIST_REQUEST,
  PERFORMANCE_LIST_SUCCESS,
  PERFORMANCE_LIST_FAIL,
  ADD_PERFORMANCE_REQUEST,
  ADD_PERFORMANCE_SUCCESS,
  ADD_PERFORMANCE_FAILURE,
  EDIT_PERFORMANCE_REQUEST,
  EDIT_PERFORMANCE_SUCCESS,
  EDIT_PERFORMANCE_FAILURE,
  DELETE_PERFORMANCE_REQUEST,
  DELETE_PERFORMANCE_SUCCESS,
  DELETE_PERFORMANCE_FAILURE,
} from "./actionTypes"

const initialState = {
  performance: [],
  loading: false,
  error: null,
}

const performanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERFORMANCE_LIST_REQUEST:
    case ADD_PERFORMANCE_REQUEST:
    case EDIT_PERFORMANCE_REQUEST:
    case DELETE_PERFORMANCE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case PERFORMANCE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        performance: action.payload,
      }
    case ADD_PERFORMANCE_SUCCESS:
    case EDIT_PERFORMANCE_SUCCESS:
    case DELETE_PERFORMANCE_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case PERFORMANCE_LIST_FAIL:
    case ADD_PERFORMANCE_FAILURE:
    case EDIT_PERFORMANCE_FAILURE:
    case DELETE_PERFORMANCE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default performanceReducer

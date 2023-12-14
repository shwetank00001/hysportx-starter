
import {
  MUSCLE_LIST_REQUEST,
  MUSCLE_LIST_SUCCESS,
  MUSCLE_LIST_FAIL,
  ADD_MUSCLE_REQUEST,
  ADD_MUSCLE_SUCCESS,
  ADD_MUSCLE_FAILURE,
  EDIT_MUSCLE_REQUEST,
  EDIT_MUSCLE_SUCCESS,
  EDIT_MUSCLE_FAILURE,
  DELETE_MUSCLE_REQUEST,
  DELETE_MUSCLE_SUCCESS,
  DELETE_MUSCLE_FAILURE,
} from "./actionTypes"

const initialState = {
  muscle: [],
  loading: false,
  error: null,
}

const muscleReducer = (state = initialState, action) => {
  switch (action.type) {
    case MUSCLE_LIST_REQUEST:
    case ADD_MUSCLE_REQUEST:
    case EDIT_MUSCLE_REQUEST:
    case DELETE_MUSCLE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case MUSCLE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        muscle: action.payload,
      }
    case ADD_MUSCLE_SUCCESS:
    case EDIT_MUSCLE_SUCCESS:
    case DELETE_MUSCLE_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case MUSCLE_LIST_FAIL:
    case ADD_MUSCLE_FAILURE:
    case EDIT_MUSCLE_FAILURE:
    case DELETE_MUSCLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default muscleReducer

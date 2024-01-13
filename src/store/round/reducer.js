// roundReducer.js
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

const initialState = {
  loading: false,
  error: null,
}

const roundReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROUND_REQUEST:
    case REMOVE_ACTIVITY_FROM_ROUND_REQUEST:
    case REMOVE_ROUND_REQUEST:
      return { ...state, loading: true, error: null }

    case ADD_ROUND_SUCCESS:
    case REMOVE_ACTIVITY_FROM_ROUND_SUCCESS:
    case REMOVE_ROUND_SUCCESS:
      return { ...state, loading: false }

    case ADD_ROUND_FAILURE:
    case REMOVE_ACTIVITY_FROM_ROUND_FAILURE:
    case REMOVE_ROUND_FAILURE:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

export default roundReducer


import {
  PARTICIPATOR_LIST_REQUEST,
  PARTICIPATOR_LIST_SUCCESS,
  PARTICIPATOR_LIST_FAIL,
  ADD_PARTICIPATOR_REQUEST,
  ADD_PARTICIPATOR_SUCCESS,
  ADD_PARTICIPATOR_FAILURE,
  EDIT_PARTICIPATOR_REQUEST,
  EDIT_PARTICIPATOR_SUCCESS,
  EDIT_PARTICIPATOR_FAILURE,
  DELETE_PARTICIPATOR_REQUEST,
  DELETE_PARTICIPATOR_SUCCESS,
  DELETE_PARTICIPATOR_FAILURE,
} from "./actionTypes"

const initialState = {
  participator: [],
  loading: false,
  error: null,
}

const participatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case PARTICIPATOR_LIST_REQUEST:
    case ADD_PARTICIPATOR_REQUEST:
    case EDIT_PARTICIPATOR_REQUEST:
    case DELETE_PARTICIPATOR_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case PARTICIPATOR_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        participator: action.payload,
      }
    case ADD_PARTICIPATOR_SUCCESS:
    case EDIT_PARTICIPATOR_SUCCESS:
    case DELETE_PARTICIPATOR_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case PARTICIPATOR_LIST_FAIL:
    case ADD_PARTICIPATOR_FAILURE:
    case EDIT_PARTICIPATOR_FAILURE:
    case DELETE_PARTICIPATOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default participatorReducer
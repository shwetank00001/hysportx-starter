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
  MAKE_PARTICIPATION_REQUEST,
  MAKE_PARTICIPATION_SUCCESS,
  MAKE_PARTICIPATION_FAILURE,
  PARTICIPATED_COMPETITION_LIST_REQUEST,
} from "./actionTypes"

const initialState = {
  competition: [],
  loading: false,
  error: null,
}

const competitionReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPETITION_LIST_REQUEST:
    case ADD_COMPETITION_REQUEST:
    case EDIT_COMPETITION_REQUEST:
    case DELETE_COMPETITION_REQUEST:
    case ADD_ROUND_REQUEST:
    case REMOVE_ROUND_ACTIVITY_REQUEST:
    case REMOVE_ROUND_REQUEST:
    case MAKE_PARTICIPATION_REQUEST:
    case PARTICIPATED_COMPETITION_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case COMPETITION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        competition: action.payload,
      }
    case ADD_COMPETITION_SUCCESS:
    case EDIT_COMPETITION_SUCCESS:
    case DELETE_COMPETITION_SUCCESS:
    case ADD_ROUND_SUCCESS:
    case REMOVE_ROUND_ACTIVITY_SUCCESS:
    case REMOVE_ROUND_SUCCESS:
    case MAKE_PARTICIPATION_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case COMPETITION_LIST_FAIL:
    case ADD_COMPETITION_FAILURE:
    case EDIT_COMPETITION_FAILURE:
    case DELETE_COMPETITION_FAILURE:
    case ADD_ROUND_FAILURE:
    case REMOVE_ROUND_ACTIVITY_FAILURE:
    case REMOVE_ROUND_FAILURE:
    case MAKE_PARTICIPATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default competitionReducer

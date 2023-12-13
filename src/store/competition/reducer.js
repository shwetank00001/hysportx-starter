import {
  COMPETITION_LIST_REQUEST,
  COMPETITION_LIST_SUCCESS,
  COMPETITION_LIST_FAIL,
} from "./actionTypes"

const initialState = {
  competition: [],
  loading: false,
  error: null,
}

const CompetitionReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPETITION_LIST_REQUEST:
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

    case COMPETITION_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default CompetitionReducer

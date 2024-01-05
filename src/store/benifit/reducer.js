// reducer.js
import {
  BENEFIT_LIST_REQUEST,
  BENEFIT_LIST_SUCCESS,
  BENEFIT_LIST_FAIL,
  ADD_BENEFIT_REQUEST,
  ADD_BENEFIT_SUCCESS,
  ADD_BENEFIT_FAILURE,
  EDIT_BENEFIT_REQUEST,
  EDIT_BENEFIT_SUCCESS,
  EDIT_BENEFIT_FAILURE,
  DELETE_BENEFIT_REQUEST,
  DELETE_BENEFIT_SUCCESS,
  DELETE_BENEFIT_FAILURE,
} from "./actionTypes"

const initialState = {
  benefit: [],
  loading: false,
  error: null,
  adderrors:null,
}

const benefitReducer = (state = initialState, action) => {
  switch (action.type) {
    case BENEFIT_LIST_REQUEST:
    case ADD_BENEFIT_REQUEST:
    case EDIT_BENEFIT_REQUEST:
    case DELETE_BENEFIT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case BENEFIT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        benefit: action.payload,
      }
    
    case EDIT_BENEFIT_SUCCESS:
    case DELETE_BENEFIT_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case ADD_BENEFIT_SUCCESS:
    return {
      ...state,
      adderrors:null,
      loading: false,
    }
    case BENEFIT_LIST_FAIL:
    case EDIT_BENEFIT_FAILURE:
    case DELETE_BENEFIT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case ADD_BENEFIT_FAILURE:
    return {
      ...state,
      loading: false,
      adderrors: action.payload,
    }
    default:
      return state
  }
}

export default benefitReducer

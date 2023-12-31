
import {
  ADD_PARTICIPATOR,
  ADD_PARTICIPATOR_SUCCESS,
  ADD_PARTICIPATOR_FAIL,

  FETCH_PARTICIPATOR_cOMMUNITIES,
  FETCH_PARTICIPATOR_cOMMUNITIES_SUCCESS,
  FETCH_PARTICIPATOR_cOMMUNITIES__FAIL,

  
  REMOVE_PARTICIPATOR_REQUEST_LIST,
  REMOVE_PARTICIPATOR_REQUEST_LIST_SUCCESS,
  REMOVE_PARTICIPATOR_REQUEST_LIST_FAIL,

  PARTICIPATOR_LIST_REQUEST,
  PARTICIPATOR_LIST_SUCCESS,
  PARTICIPATOR_LIST_FAIL,
  ADD_PARTICIPATOR_REQUEST,
  ADD_PARTICIPATOR_FAILURE,
  ACCEPT_PARTICIPATOR_REQUEST,
  ACCEPT_PARTICIPATOR_SUCCESS,
  ACCEPT_PARTICIPATOR_FAILURE,
  DELETE_PARTICIPATOR_REQUEST,
  DELETE_PARTICIPATOR_SUCCESS,
  DELETE_PARTICIPATOR_FAILURE,
  PARTICIPATOR_LIST_MAIN_REQUEST,
  PARTICIPATOR_LIST_MAIN_SUCCESS,
  PARTICIPATOR_LIST_MAIN_FAIL,
} from "./actionTypes"

const initialState = {
  participator: [],
  loading: false,
  error: null,
  adderrors: null,
}

const participatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PARTICIPATOR:  
    case REMOVE_PARTICIPATOR_REQUEST_LIST:  
    case PARTICIPATOR_LIST_REQUEST:
    case PARTICIPATOR_LIST_MAIN_REQUEST:
    case ADD_PARTICIPATOR_REQUEST:
    case ACCEPT_PARTICIPATOR_REQUEST:
    case DELETE_PARTICIPATOR_REQUEST:
    case FETCH_PARTICIPATOR_cOMMUNITIES:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case ADD_PARTICIPATOR_SUCCESS:
    case FETCH_PARTICIPATOR_cOMMUNITIES_SUCCESS:
    case REMOVE_PARTICIPATOR_REQUEST_LIST_SUCCESS: 
    case PARTICIPATOR_LIST_SUCCESS:
    case PARTICIPATOR_LIST_MAIN_SUCCESS:
      return {
        ...state,
        loading: false,
        adderrors:null,
        participator: action.payload,
      }

    case ACCEPT_PARTICIPATOR_SUCCESS:
    case DELETE_PARTICIPATOR_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case ADD_PARTICIPATOR_FAIL:
    case REMOVE_PARTICIPATOR_REQUEST_LIST_FAIL:
    case FETCH_PARTICIPATOR_cOMMUNITIES__FAIL:
    case PARTICIPATOR_LIST_FAIL:
    case PARTICIPATOR_LIST_MAIN_FAIL:
    case ACCEPT_PARTICIPATOR_FAILURE:
    case DELETE_PARTICIPATOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
      case ADD_PARTICIPATOR_FAILURE:
      return {
        ...state,
        loading: false,
        adderrors: action.payload,
      }
    default:
      return state
  }
}

export default participatorReducer

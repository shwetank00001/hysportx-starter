// reducer.js
import {
  MODALITY_LIST_REQUEST,
  MODALITY_LIST_SUCCESS,
  MODALITY_LIST_FAIL,
  ADD_MODALITY_REQUEST,
  ADD_MODALITY_SUCCESS,
  ADD_MODALITY_FAILURE,
  EDIT_MODALITY_REQUEST,
  EDIT_MODALITY_SUCCESS,
  EDIT_MODALITY_FAILURE,
  DELETE_MODALITY_REQUEST,
  DELETE_MODALITY_SUCCESS,
  DELETE_MODALITY_FAILURE,
} from "./actionTypes"

const initialState = {
  modality: [],
  loading: false,
  error: null,
}

const ModalityReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODALITY_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case MODALITY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        modality: action.payload,
      }
    case ADD_MODALITY_SUCCESS:
    case EDIT_MODALITY_SUCCESS:
    case DELETE_MODALITY_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case MODALITY_LIST_FAIL:
    case ADD_MODALITY_FAILURE:
    case EDIT_MODALITY_FAILURE:
    case DELETE_MODALITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default ModalityReducer

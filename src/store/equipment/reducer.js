// reducer.js
import {
  EQUIPMENT_LIST_REQUEST,
  EQUIPMENT_LIST_SUCCESS,
  EQUIPMENT_LIST_FAIL,
  ADD_EQUIPMENT_REQUEST,
  ADD_EQUIPMENT_SUCCESS,
  ADD_EQUIPMENT_FAILURE,
  EDIT_EQUIPMENT_REQUEST,
  EDIT_EQUIPMENT_SUCCESS,
  EDIT_EQUIPMENT_FAILURE,
  DELETE_EQUIPMENT_REQUEST,
  DELETE_EQUIPMENT_SUCCESS,
  DELETE_EQUIPMENT_FAILURE,
} from "./actionTypes"

const initialState = {
  equipment: [],
  loading: false,
  error: null,
}

const equipmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case EQUIPMENT_LIST_REQUEST:
    case ADD_EQUIPMENT_REQUEST:
    case EDIT_EQUIPMENT_REQUEST:
    case DELETE_EQUIPMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case EQUIPMENT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        equipment: action.payload,
      }
    case ADD_EQUIPMENT_SUCCESS:
    case EDIT_EQUIPMENT_SUCCESS:
    case DELETE_EQUIPMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case EQUIPMENT_LIST_FAIL:
    case ADD_EQUIPMENT_FAILURE:
    case EDIT_EQUIPMENT_FAILURE:
    case DELETE_EQUIPMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default equipmentReducer

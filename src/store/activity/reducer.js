import {
  ACTIVITY_LIST_REQUEST,
  ACTIVITY_LIST_SUCCESS,
  ACTIVITY_LIST_FAIL,
} from "./actionTypes"

const initialState = {
    activity: [],
    loading: false,
    error: null,
};

const ActivityReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTIVITY_LIST_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        }
      case ACTIVITY_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          modality: action.payload,
        }

      case ACTIVITY_LIST_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        }
      default:
        return state
    }
}

export default ActivityReducer;
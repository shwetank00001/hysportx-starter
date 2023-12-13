import {
  BENEFIT_LIST_REQUEST,
  BENEFIT_LIST_SUCCESS,
  BENEFIT_LIST_FAIL,
} from "./actionTypes"

const initialState = {
  benefit: [],
  loading: false,
  error: null,
}

const BenefitReducer = (state = initialState, action) => {
    switch (action.type) {
      case BENEFIT_LIST_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        }
      case BENEFIT_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          modality: action.payload,
        }

      case BENEFIT_LIST_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        }
      default:
        return state
    }
}

export default BenefitReducer;
import {
    ADD_CONDITION,
    ADD_CONDITION_SUCCESS,
    ADD_CONDITION_FAIL,

    CONDITION_LIST_REQUEST,
    CONDITION_LIST_SUCCESS,
    CONDITION_LIST_FAIL,

    CONDITION_DELETE_REQUEST,
    CONDITION_DELETE_SUCCESS,
    CONDITION_DELETE_FAIL,

} from './actionTypes'

const initialState = {
    condition: [],
    loading: false,
    error: null,
    adderrors: null,
  }

  
  const conditionReducer = (state = initialState, action) => {
    switch (action.type) {
        // add condtion 
      case ADD_CONDITION:  
        return {
          ...state,
          loading: true,
          error: null,
        }
      case ADD_CONDITION_SUCCESS:
        return {
          ...state,
          loading: false,
          adderrors:null,
        }
        case ADD_CONDITION_FAIL:
        return {
          ...state,
          loading: false,
          adderrors: action.payload,
        }

        // listing conditon
        case CONDITION_LIST_REQUEST:  
        return {
          ...state,
          loading: true,
          error: null,
        }
      case CONDITION_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          adderrors:null,
          error:null,
          condition: action.payload,
        }
        case CONDITION_LIST_FAIL:
        return {
          ...state,
          loading: false,
          adderrors:null,
          error: action.payload,
        }

        //delete condition
        case CONDITION_DELETE_REQUEST:  
        return {
          ...state,
          loading: true,
          error: null,
        }
      case CONDITION_DELETE_SUCCESS:
        return {
          ...state,
          loading: false,
          adderrors:null,
          error:null,
          
        }
        case CONDITION_DELETE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        }


      default:
        return state
    }
  }
  
  export default conditionReducer;
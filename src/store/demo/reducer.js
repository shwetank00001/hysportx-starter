import {
    DEMO_LIST_REQUEST,
    DEMO_LIST_SUCCESS,
    DEMO_LIST_FAIL,
} from './actionTypes'

const initialState = {
    demo: [],
    loading: false,
    error: null,
};

const DemoReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEMO_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case DEMO_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                demo: action.payload,
            };

        case DEMO_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export default DemoReducer;
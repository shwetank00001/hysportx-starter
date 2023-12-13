import {
    MODALITY_LIST_REQUEST,
    MODALITY_LIST_SUCCESS,
    MODALITY_LIST_FAIL,
} from './actionTypes'

const initialState = {
    modality: [],
    loading: false,
    error: null,
};

const ModalityReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODALITY_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case MODALITY_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                modality: action.payload,
            };

        case MODALITY_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export default ModalityReducer;
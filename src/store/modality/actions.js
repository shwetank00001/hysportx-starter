import {
  MODALITY_LIST_REQUEST,
  MODALITY_LIST_SUCCESS,
  MODALITY_LIST_FAIL,
} from "./actionTypes"


export const modalityListRequest = () => ({
    type:  MODALITY_LIST_REQUEST,
});

export const modalityListSuccess = (modality) => ({
    type: MODALITY_LIST_SUCCESS,
    payload: modality,
});

export const modalityListFail = (error) => ({
    type: MODALITY_LIST_FAIL,
    payload: error,
});

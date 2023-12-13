
import {
  COMPETITION_LIST_REQUEST,
  COMPETITION_LIST_SUCCESS,
  COMPETITION_LIST_FAIL,
} from "./actionTypes"


export const competitionListRequest = () => ({
    type:  COMPETITION_LIST_REQUEST,
});

export const competitionListSuccess = (modality) => ({
    type: COMPETITION_LIST_SUCCESS,
    payload: competition,
});

export const competitionListFail = error => ({
  type: COMPETITION_LIST_FAIL,
  payload: error,
})

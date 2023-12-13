import {
  BENEFIT_LIST_REQUEST,
  BENEFIT_LIST_SUCCESS,
  BENEFIT_LIST_FAIL,
} from "./actionTypes"


export const benefitListRequest = () => ({
    type:  BENEFIT_LIST_REQUEST,
});

export const benefitListSuccess = (benefit) => ({
    type: BENEFIT_LIST_SUCCESS,
    payload: benefit,
});

export const benefitListFail = error => ({
  type: BENEFIT_LIST_FAIL,
  payload: error,
})

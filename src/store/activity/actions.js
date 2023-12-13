import {
  ACTIVITY_LIST_REQUEST,
  ACTIVITY_LIST_SUCCESS,
  ACTIVITY_LIST_FAIL,
} from "./actionTypes"


export const activityListRequest = () => ({
    type: ACTIVITY_LIST_REQUEST,
});

export const activityListSuccess = (activity) => ({
    type: ACTIVITY_LIST_SUCCESS,
    payload: modality,
});

export const activityListFail = error => ({
  type: ACTIVITY_LIST_FAIL,
  payload: error,
})

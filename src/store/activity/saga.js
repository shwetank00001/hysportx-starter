import { takeLatest, put, call } from 'redux-saga/effects';
import { activity } from 'helpers/api';

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {
  ACTIVITY_LIST_REQUEST,
  ACTIVITY_LIST_SUCCESS,
  ACTIVITY_LIST_FAIL,
} from "./actionTypes"


function* listActivitySaga() {
    // console.log("working saga....")
    try {
        const data = yield call(activity.list);
        console.log(data.data);
        yield put({ type: ACTIVITY_LIST_SUCCESS, payload: data.data });
    } catch (error) {

        console.log("saga error",error);
        yield put({ type: ACTIVITY_LIST_FAIL, payload: error });
        toast.error("Please Fixed all errors.", { autoClose: 2000 });
    }
}


export default function* activitySaga() {
    yield takeLatest(ACTIVITY_LIST_REQUEST, listActivitySaga);   
}
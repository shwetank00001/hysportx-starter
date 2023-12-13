import { takeLatest, put, call } from 'redux-saga/effects';
import { benefit } from "helpers/api"

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {
  BENEFIT_LIST_REQUEST,
  BENEFIT_LIST_SUCCESS,
  BENEFIT_LIST_FAIL,
} from "./actionTypes"


function* listBenefitSaga() {
    // console.log("working saga....")
    try {
        const data = yield call(benefit.list);
        console.log(data.data);
        yield put({ type: BENEFIT_LIST_SUCCESS, payload: data.data });
    } catch (error) {

        console.log("saga error",error);
        yield put({ type: BENEFIT_LIST_FAIL, payload: error });
        toast.error("Please Fixed all errors.", { autoClose: 2000 });
    }
}


export default function* benefitSaga() {
    yield takeLatest(BENEFIT_LIST_REQUEST, listBenefitSaga);   
}
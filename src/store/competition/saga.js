import { takeLatest, put, call } from 'redux-saga/effects';
import { competition } from "helpers/api"

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {
  COMPETITION_LIST_REQUEST,
  COMPETITION_LIST_SUCCESS,
  COMPETITION_LIST_FAIL,
} from "./actionTypes"


function* listCompetitionSaga() {
    // console.log("working saga....")
    try {
        const data = yield call(competition.list);
        console.log(data.data);
        yield put({ type: COMPETITION_LIST_SUCCESS, payload: data.data });
    } catch (error) {
        console.log("saga error",error);
        yield put({ type: COMPETITION_LIST_FAIL, payload: error });
        toast.error("Please Fixed all errors.", { autoClose: 2000 });
    }
}


export default function* competitionSaga() {
    yield takeLatest(COMPETITION_LIST_REQUEST, listCompetitionSaga);   
}
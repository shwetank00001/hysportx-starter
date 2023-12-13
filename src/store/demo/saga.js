import { takeLatest, put, call } from 'redux-saga/effects';
import { demo } from 'helpers/api';

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {
    DEMO_LIST_REQUEST,
    DEMO_LIST_SUCCESS,
    DEMO_LIST_FAIL,
} from './actionTypes'


function* listDemoSaga() {
    // console.log("working saga....")
    try {
        const data = yield call(demo.list);
        console.log(data.data);
        yield put({ type: DEMO_LIST_SUCCESS, payload: data.data });
    } catch (error) {

        console.log("saga error",error);
        yield put({ type: DEMO_LIST_FAIL, payload: error });
        toast.error("Please Fixed all errors.", { autoClose: 2000 });
    }
}


export default function* demoSaga() {
    yield takeLatest(DEMO_LIST_REQUEST, listDemoSaga);   
}
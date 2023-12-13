import { takeLatest, put, call } from 'redux-saga/effects';
import { modality } from 'helpers/api';

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {
    MODALITY_LIST_REQUEST,
    MODALITY_LIST_SUCCESS,
    MODALITY_LIST_FAIL,
} from './actionTypes'


function* listModalitySaga() {
    // console.log("working saga....")
    try {
        const data = yield call(modality.list);
        console.log(data.data);
        yield put({ type: MODALITY_LIST_SUCCESS, payload: data.data });
    } catch (error) {

        console.log("saga error",error);
        yield put({ type: MODALITY_LIST_FAIL, payload: error });
        toast.error("Please Fixed all errors.", { autoClose: 2000 });
    }
}


export default function* modalitySaga() {
    yield takeLatest(MODALITY_LIST_REQUEST, listDemoSaga);   
}
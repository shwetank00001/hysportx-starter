// saga.js
import { takeLatest, put, call } from "redux-saga/effects"
import { benefit } from "helpers/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import {
  BENEFIT_LIST_REQUEST,
  BENEFIT_LIST_SUCCESS,
  BENEFIT_LIST_FAIL,
  ADD_BENEFIT_REQUEST,
  ADD_BENEFIT_SUCCESS,
  ADD_BENEFIT_FAILURE,
  EDIT_BENEFIT_REQUEST,
  EDIT_BENEFIT_SUCCESS,
  EDIT_BENEFIT_FAILURE,
  DELETE_BENEFIT_REQUEST,
  DELETE_BENEFIT_SUCCESS,
  DELETE_BENEFIT_FAILURE,
} from "./actionTypes"
import {CHANGE_PRELOADER} from "../layout/actionTypes";
function* listBenefitSaga() {
  try {
    // yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Fetching Benefit list Please wait ...'}})
    const data = yield call(benefit.list)
    yield put({ type: BENEFIT_LIST_SUCCESS, payload: data.data })
    // yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
  } catch (error) {
    if(error.response && error.response.status===404){
      yield put({ type: BENEFIT_LIST_SUCCESS,payload: []})
    }
    // yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    yield put({ type: BENEFIT_LIST_FAIL, payload: error })
  }
}

function* addBenefitSaga(action) {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Creating Benefit Please wait ...'}})
    const response = yield call(benefit.add, action.payload)
    yield put({ type: ADD_BENEFIT_SUCCESS })
    yield put({ type: BENEFIT_LIST_REQUEST })
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
      toast.success(response.message, { autoClose: 2000 });
  } catch (error) {
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    yield put({ type: ADD_BENEFIT_FAILURE, payload: error.response.data.message })
    toast.error(error.response.data.message, { autoClose: 2000 })
  }
}

function* editBenefitSaga(action) {
  try {
    yield call(benefit.edit, action.payload.id, action.payload.data)
    yield put({ type: EDIT_BENEFIT_SUCCESS })
    toast.success("Benefit edited successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: EDIT_BENEFIT_FAILURE, payload: error })
    toast.error("Failed to edit benefit. Please try again.", {
      autoClose: 2000,
    })
  }
}

function* deleteBenefitSaga(action) {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Deleting Benefit Please wait ...'}})
    const response = yield call(benefit.delete, action.payload)
    yield put({ type: DELETE_BENEFIT_SUCCESS })
    yield put({ type: BENEFIT_LIST_REQUEST })
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
      toast.success(response.message, { autoClose: 2000 });
  } catch (error) {
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    yield put({ type: DELETE_BENEFIT_FAILURE, payload: error.response.data.message })
    toast.error(error.response.data.message, { autoClose: 2000 })
  }
}

export default function* benefitSaga() {
  yield takeLatest(BENEFIT_LIST_REQUEST, listBenefitSaga)
  yield takeLatest(ADD_BENEFIT_REQUEST, addBenefitSaga)
  yield takeLatest(EDIT_BENEFIT_REQUEST, editBenefitSaga)
  yield takeLatest(DELETE_BENEFIT_REQUEST, deleteBenefitSaga)

}

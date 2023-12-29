import { takeLatest, put, call } from "redux-saga/effects"
import { participator } from "helpers/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import {
  ADD_PARTICIPATOR,
  ADD_PARTICIPATOR_SUCCESS,
  ADD_PARTICIPATOR_FAIL,

  PARTICIPATOR_LIST_REQUEST,
  PARTICIPATOR_LIST_SUCCESS,
  PARTICIPATOR_LIST_FAIL,
  ADD_PARTICIPATOR_REQUEST,
  ADD_PARTICIPATOR_FAILURE,
  EDIT_PARTICIPATOR_REQUEST,
  EDIT_PARTICIPATOR_SUCCESS,
  EDIT_PARTICIPATOR_FAILURE,
  DELETE_PARTICIPATOR_REQUEST,
  DELETE_PARTICIPATOR_SUCCESS,
  DELETE_PARTICIPATOR_FAILURE,
  PARTICIPATOR_LIST_MAIN_REQUEST,
  PARTICIPATOR_LIST_MAIN_SUCCESS,
  PARTICIPATOR_LIST_MAIN_FAIL,
} from "./actionTypes"
import {CHANGE_PRELOADER} from "../layout/actionTypes";

function* listParticipatorRequestsSaga() {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Retriving Participator List Please wait ...'}})
    const data = yield call(participator.listParticipatorRequests)
    yield put({ type: PARTICIPATOR_LIST_SUCCESS, payload: data.data })
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:''}})
  } catch (error) {
    yield put({ type: PARTICIPATOR_LIST_FAIL, payload: error })
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:''}})
    toast.error(error.response?error.response.data.message:(error.message?error.message:"Something Went wrong"), {
      autoClose: 2000,
    })
  }
}
function* listParticipatorMainListSaga() {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Retriving Participator Please wait ...'}})
    const data = yield call(participator.listParticipators)
    yield put({ type: PARTICIPATOR_LIST_MAIN_SUCCESS, payload: data.data })
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
  } catch (error) {
    yield put({ type: PARTICIPATOR_LIST_MAIN_FAIL, payload: error })
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    toast.error(error.response?error.response.data.message:error.message, {
      autoClose: 2000,
    })
  }
}

function* addParticipatorSaga(action) {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Creating Participator Please wait ...'}})
    const response = yield call(participator.addParticipator, action.payload);
    yield put({ type: ADD_PARTICIPATOR_SUCCESS, payload: response.data });
    yield put({type:PARTICIPATOR_LIST_MAIN_REQUEST})
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    toast.success(response.message, { autoClose: 2000 });
  } catch (error) {
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    yield put({ type: ADD_PARTICIPATOR_FAILURE, payload: error.response.data.message })
    toast.error(error.response?error.response.data.message:error.message, {
      autoClose: 2000,
    })
  }
}

function* editParticipatorSaga(action) {
  try {

    yield call(participator.edit, action.payload.id, action.payload.data)
    yield put({ type: EDIT_PARTICIPATOR_SUCCESS })
    toast.success("Participator edited successfully!", { autoClose: 2000 })
  } catch (error) {
    yield put({ type: EDIT_PARTICIPATOR_FAILURE, payload: error })
    toast.error(error.response?error.response.data.message:error.message, {
      autoClose: 2000,
    })
  }
}

function* deleteParticipatorSaga(action) {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Removing Participator Please wait ...'}})
    const response = yield call(participator.removeParticipator, action.payload);
    yield put({ type: DELETE_PARTICIPATOR_SUCCESS })
    yield put({type:PARTICIPATOR_LIST_REQUEST})
    yield put({type:PARTICIPATOR_LIST_MAIN_REQUEST})
    toast.success(response.message, { autoClose: 2000 })
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:''}})
  } catch (error) {
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:''}})
    yield put({ type: DELETE_PARTICIPATOR_FAILURE, payload: error })
    toast.error(error.response?error.response.data.message:error.message, {
      autoClose: 2000,
    })
  }
}

export default function* participatorSaga() {
  yield takeLatest(ADD_PARTICIPATOR, addParticipatorSaga)
  yield takeLatest(PARTICIPATOR_LIST_REQUEST, listParticipatorRequestsSaga)
  // yield takeLatest(ADD_PARTICIPATOR_REQUEST, addParticipatorSaga)
  yield takeLatest(EDIT_PARTICIPATOR_REQUEST, editParticipatorSaga)
  yield takeLatest(DELETE_PARTICIPATOR_REQUEST, deleteParticipatorSaga)
  yield takeLatest(PARTICIPATOR_LIST_MAIN_REQUEST, listParticipatorMainListSaga)
}

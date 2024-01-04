// saga.js
import { takeLatest, put, call } from "redux-saga/effects"
import { modality } from "helpers/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  MODALITY_LIST_REQUEST,
  MODALITY_LIST_SUCCESS,
  MODALITY_LIST_FAIL,
  ADD_MODALITY_REQUEST,
  ADD_MODALITY_SUCCESS,
  ADD_MODALITY_FAILURE,
  EDIT_MODALITY_REQUEST,
  EDIT_MODALITY_SUCCESS,
  EDIT_MODALITY_FAILURE,
  DELETE_MODALITY_REQUEST,
  DELETE_MODALITY_SUCCESS,
  DELETE_MODALITY_FAILURE,
} from "./actionTypes";
import {CHANGE_PRELOADER} from "../layout/actionTypes";

function* listModalitySaga() {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Fetching Modality Please wait ...'}})
    const data = yield call(modality.list)
    yield put({ type: MODALITY_LIST_SUCCESS, payload: data.data })
    toast.success(data.message, { autoClose: 2000 });
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
  } catch (error) {
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    yield put({ type: MODALITY_LIST_FAIL, payload: error })
    toast.error(error.response?error.response.data.message:error.message, {
      autoClose: 2000,
    })
  }
}

function* addModalitySaga(action) {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Adding Modality Please wait ...'}})
    const response = yield call(modality.add, action.payload)
    yield put({ type: ADD_MODALITY_SUCCESS })
    yield put({type:MODALITY_LIST_REQUEST})
    toast.success(response.message, { autoClose: 2000 });
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
  } catch (error) {
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    yield put({ type: ADD_MODALITY_FAILURE, payload: error })
    toast.error(error.response?error.response.data.message:error.message, {
      autoClose: 2000,
    })
  }
}

function* editModalitySaga(action) {
  const { id, data } = action.payload
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Updating Modality Please wait ....'}})
    const response = yield call(modality.edit, id, data)
    yield put({ type: EDIT_MODALITY_SUCCESS })
    yield put({type:MODALITY_LIST_REQUEST})
    toast.success(response.message, { autoClose: 2000 });
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    // You can dispatch another action to refresh the modality list if needed
  } catch (error) {
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    yield put({ type: EDIT_MODALITY_FAILURE, payload: error })
    toast.error(error.response?error.response.data.message:error.message, {
      autoClose: 2000,
    })
  }
}

function* deleteModalitySaga(action) {
  const { id } = action.payload
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Deleting Modality Please wait ....'}})
    const response = yield call(modality.delete, id)
    yield put({ type: DELETE_MODALITY_SUCCESS })
    yield put({type:MODALITY_LIST_REQUEST})
    toast.success(response.message, { autoClose: 2000 });
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
  } catch (error) {
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    yield put({ type: DELETE_MODALITY_FAILURE, payload: error })
    toast.error(error.response?error.response.data.message:error.message, {
      autoClose: 2000,
    })
  }
}

export default function* modalitySaga() {
  yield takeLatest(MODALITY_LIST_REQUEST, listModalitySaga)
  yield takeLatest(ADD_MODALITY_REQUEST, addModalitySaga)
  yield takeLatest(EDIT_MODALITY_REQUEST, editModalitySaga)
  yield takeLatest(DELETE_MODALITY_REQUEST, deleteModalitySaga)
}

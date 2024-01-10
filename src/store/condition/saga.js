import {
    ADD_CONDITION,
    ADD_CONDITION_SUCCESS,
    ADD_CONDITION_FAIL,

    UPDATE_CONDITION,
    UPDATE_CONDITION_SUCCESS,
    UPDATE_CONDITION_FAIL,

    CONDITION_LIST_REQUEST,
    CONDITION_LIST_SUCCESS,
    CONDITION_LIST_FAIL,

    CONDITION_DELETE_REQUEST,
    CONDITION_DELETE_SUCCESS,
    CONDITION_DELETE_FAIL,

} from './actionTypes'
import {CHANGE_PRELOADER} from "../layout/actionTypes";

import { takeLatest, put, call } from "redux-saga/effects"
import { condition } from "helpers/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function* addconditionSaga(action) {
    try {
      yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Creating condition Please wait ...'}})
      const response = yield call(condition.add, action.payload);

      yield put({ type: ADD_CONDITION_SUCCESS });
      yield put({ type: CONDITION_LIST_REQUEST })
      
      yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
      toast.success(response.message, { autoClose: 2000 });
    } catch (error) {
      yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
      yield put({ type: ADD_CONDITION_FAIL, payload: error.response.data.message })
      toast.error(error.response?error.response.data.message:error.message, {
        autoClose: 2000,
      })
    }
  }

function* updateConditionSaga(action) {
    try {
      yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Creating condition Please wait ...'}})
      const response = yield call(condition.update, action.payload);

      yield put({ type: UPDATE_CONDITION_SUCCESS });
      yield put({ type: CONDITION_LIST_REQUEST })
      
      yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
      toast.success(response.message, { autoClose: 2000 });
    } catch (error) {
      yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
      yield put({ type: UPDATE_CONDITION_FAIL, payload: error.response.data.message })
      toast.error(error.response?error.response.data.message:error.message, {
        autoClose: 2000,
      })
    }
  }

  function* conditionListSaga() {
    try {
      // yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Fetching Conditon list Please wait ...'}})
      const data = yield call(condition.list)
      yield put({ type: CONDITION_LIST_SUCCESS, payload: data.data })
      // yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    } catch (error) {
      yield put({ type: CONDITION_LIST_FAIL, payload: error })
      // yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
      // toast.error(error.response?error.response.data.message:error.message, {
      //   autoClose: 2000,
      // })
    }
  }


function* deleteConditionSaga(action) {
    try {
      yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Removing condition Please wait ...'}})
      const response = yield call(condition.delete, action.payload);
      yield put({ type: CONDITION_DELETE_SUCCESS })
      yield put({ type: CONDITION_LIST_REQUEST})
      toast.success(response.message, { autoClose: 2000 })
      yield put({type:CHANGE_PRELOADER,payload:{status:false,message:''}})
    } catch (error) {
      yield put({type:CHANGE_PRELOADER,payload:{status:false,message:''}})
      yield put({ type: CONDITION_DELETE_FAIL, payload: error })
      toast.error(error.response?error.response.data.message:error.message, {
        autoClose: 2000,
      })
    }
  }


export default function* conditionSaga() {
    yield takeLatest(ADD_CONDITION, addconditionSaga)
    yield takeLatest(UPDATE_CONDITION, updateConditionSaga)
    yield takeLatest(CONDITION_LIST_REQUEST, conditionListSaga)
    yield takeLatest(CONDITION_DELETE_REQUEST, deleteConditionSaga)
    
  }
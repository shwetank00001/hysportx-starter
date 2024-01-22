import { takeLatest, put, call } from "redux-saga/effects"
import { participator } from "helpers/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import {
  ADD_PARTICIPATOR,
  ADD_PARTICIPATOR_SUCCESS,
  ADD_PARTICIPATOR_FAIL,
  FETCH_PARTICIPATOR_cOMMUNITIES,
  FETCH_PARTICIPATOR_cOMMUNITIES_SUCCESS,
  FETCH_PARTICIPATOR_cOMMUNITIES__FAIL,
  ALL_COMPETITION_LIST,
  ALL_COMPETITION_LIST_SUCCESS,
  ALL_COMPETITION_LIST__FAIL,
  ALL_PARTICIPATED_LIST,
  ALL_PARTICIPATED_LIST_SUCCESS,
  ALL_PARTICIPATED_LIST_FAIL,
  JOIN_PARTICIPATE,
  JOIN_PARTICIPATE_SUCCESS,
  JOIN_PARTICIPATE_FAIL,

  REMOVE_PARTICIPATOR_REQUEST_LIST,
  REMOVE_PARTICIPATOR_REQUEST_LIST_SUCCESS,
  REMOVE_PARTICIPATOR_REQUEST_LIST_FAIL,

  PARTICIPATOR_LIST_REQUEST,
  PARTICIPATOR_LIST_SUCCESS,
  PARTICIPATOR_LIST_FAIL,
  ADD_PARTICIPATOR_REQUEST,
  ADD_PARTICIPATOR_FAILURE,
  ACCEPT_PARTICIPATOR_REQUEST,
  ACCEPT_PARTICIPATOR_SUCCESS,
  ACCEPT_PARTICIPATOR_FAILURE,
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
    // yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Retriving Participator List Please wait ...'}})
    const data = yield call(participator.listParticipatorRequests)
    yield put({ type: PARTICIPATOR_LIST_SUCCESS, payload: data.data })
    // toast.success(data.message, { autoClose: 2000 });
    // yield put({type:CHANGE_PRELOADER,payload:{status:false,message:''}})
  } catch (error) {
    if(error.response && error.response.status===404){
      yield put({ type: PARTICIPATOR_LIST_SUCCESS,payload: []})
    }
    yield put({ type: PARTICIPATOR_LIST_FAIL, payload: error })
    // yield put({type:CHANGE_PRELOADER,payload:{status:false,message:''}})
  }
}
function* listParticipatorMainListSaga() {
  try {
    // yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Retriving Participator Please wait ...'}})
    const data = yield call(participator.listParticipators)
    yield put({ type: PARTICIPATOR_LIST_MAIN_SUCCESS, payload: data.data })
    // toast.success(data.message, { autoClose: 2000 });
    // yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
  } catch (error) {
    // yield put({ type: PARTICIPATOR_LIST_MAIN_FAIL, payload: error })
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
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

function* removeParticipatorRequestSaga(action) {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Removing Your Request Please wait ...'}})
    const response = yield call(participator.removeParticipatorRequest, action.payload);
    yield put({ type: REMOVE_PARTICIPATOR_REQUEST_LIST_SUCCESS, payload: response.data });
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    toast.success(response.message, { autoClose: 2000 });
  } catch (error) {
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:''}})
    yield put({ type: REMOVE_PARTICIPATOR_REQUEST_LIST_FAIL, payload: error.response.data.message })
    toast.error(error.response?error.response.data.message:error.message, {
      autoClose: 2000,
    })
  }
}

function* acceptParticipatorSaga(action) {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Accepting Participator Please wait ...'}})
    const response = yield call(participator.confirmParticipatorRequest, action.payload);
    yield put({ type: ACCEPT_PARTICIPATOR_SUCCESS })
    yield put({type:PARTICIPATOR_LIST_REQUEST})
    toast.success(response.message, { autoClose: 2000 });
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:''}})
  } catch (error) {
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:''}})
    yield put({ type: DELETE_PARTICIPATOR_FAILURE, payload: error })
    toast.error(error.response?error.response.data.message:error.message, {
      autoClose: 2000,
    })
    console.log("error", error)
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

function* fetchParticipatorCommunitiesSaga() {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Fetch Participator Request Please wait ...'}})
    const response = yield call(participator.participatedcommunities);
    yield put({ type: FETCH_PARTICIPATOR_cOMMUNITIES_SUCCESS,payload:response.data })
    toast.success(response.message, { autoClose: 2000 })
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:''}})
  } catch (error) {
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:''}})
    yield put({ type: FETCH_PARTICIPATOR_cOMMUNITIES__FAIL, payload: error })
   
  }
}

function* allCompetitionList(action) {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Fetching All Competition List Please wait ...'}})
    const response = yield call(participator.allcompetition,action.payload);
    yield put({ type: ALL_COMPETITION_LIST_SUCCESS,payload:response.data })
    toast.success(response.message, { autoClose: 2000 })
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:''}})
  } catch (error) {
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:''}})
    yield put({ type: ALL_COMPETITION_LIST__FAIL, payload: error })
   
  }
}

function* allParticipatedList(action) {
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Fetching All already Pariticipated Please wait ...'}})
    const response = yield call(participator.allParticipated,action.payload);
    yield put({ type: ALL_PARTICIPATED_LIST_SUCCESS,payload:response.data })
    toast.success(response.message, { autoClose: 2000 })
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:''}})
  } catch (error) {
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:''}})
    yield put({ type: ALL_PARTICIPATED_LIST_FAIL, payload: error })
   
  }
}
function* joinParticipator(action) {
  const {pid,jid}=action.payload;
  console.log("join file saga",pid,jid)
  try {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:'Joing participate Please wait ...'}})
    const response = yield call(participator.joinParticipate,action.payload);
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:''}})
    yield put({type: ALL_COMPETITION_LIST,payload:pid});
    toast.success(response.message, { autoClose: 2000 })
  } catch (error) {
    console.log(error)
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:''}})
    toast.error(error.response?error.response.data.message:error.message, {
      autoClose: 2000,
    })
  }
}

export default function* participatorSaga() {
  yield takeLatest(ADD_PARTICIPATOR, addParticipatorSaga)
  yield takeLatest( REMOVE_PARTICIPATOR_REQUEST_LIST, removeParticipatorRequestSaga)
  yield takeLatest(FETCH_PARTICIPATOR_cOMMUNITIES, fetchParticipatorCommunitiesSaga)
  yield takeLatest(PARTICIPATOR_LIST_REQUEST, listParticipatorRequestsSaga)
  yield takeLatest(ACCEPT_PARTICIPATOR_REQUEST, acceptParticipatorSaga)
  yield takeLatest(DELETE_PARTICIPATOR_REQUEST, deleteParticipatorSaga)
  yield takeLatest(PARTICIPATOR_LIST_MAIN_REQUEST, listParticipatorMainListSaga)
  yield takeLatest(ALL_COMPETITION_LIST, allCompetitionList)
  yield takeLatest(ALL_PARTICIPATED_LIST, allParticipatedList)
  yield takeLatest(JOIN_PARTICIPATE, joinParticipator)
}

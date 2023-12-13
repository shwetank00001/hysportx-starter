import {
    DEMO_LIST_REQUEST,
    DEMO_LIST_SUCCESS,
    DEMO_LIST_FAIL,
} from './actionTypes'


export const demoListRequest = () => ({
    type:  DEMO_LIST_REQUEST,
});

export const demoListSuccess = (demo) => ({
    type: DEMO_LIST_SUCCESS,
    payload: demo,
});

export const demoListFail = (error) => ({
    type: DEMO_LIST_FAIL,
    payload: error,
});

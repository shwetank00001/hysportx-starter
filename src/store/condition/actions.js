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

export const onAddCondition = data => ({
    type: ADD_CONDITION,
    payload: data,
    
})

export const onAddConditionSuccess = (success) => ({
    type: ADD_CONDITION_SUCCESS,
    payload: success,
})

export const onAddConditionFail = error => ({
    type: ADD_CONDITION_FAIL,
    payload: error,
})

export const updateCondition = data => ({
    type: UPDATE_CONDITION,
    payload: data,
    
})

export const updateConditionSuccess = (success) => ({
    type: UPDATE_CONDITION_SUCCESS,
    payload: success,
})

export const updateConditionFail = error => ({
    type: UPDATE_CONDITION_FAIL,
    payload: error,
})

export const conditionListRequest = () => ({
    type: CONDITION_LIST_REQUEST,
})

export const conditionListSuccess = data => ({
    type: CONDITION_LIST_SUCCESS,
    payload: data,
})
export const conditionListFail = error => ({
    type: CONDITION_LIST_FAIL,
    payload: error,
})


export const deleteConditionRequest = id => ({
    type: CONDITION_DELETE_REQUEST,
    payload: id,
})

export const deleteConditionSuccess = () => ({
    type: CONDITION_DELETE_SUCCESS,
})

export const deleteConditionFail = error => ({
    type: CONDITION_DELETE_FAIL,
    payload: error,
})


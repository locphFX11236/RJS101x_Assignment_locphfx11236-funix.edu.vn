import * as ActionTypes from './ActionTypes';
import { staffsUrl, departsUrl, salarysUrl } from '../shared/baseUrl';

export const addStaff = ( newStaff ) => ({
    type: ActionTypes.ADD_STAFF,
    payload: newStaff
});

export const fetchStaffs = () => (dispatch) => {

    dispatch(staffsLoading(true));

    return fetch(staffsUrl)
    .then(response => response.json())
    .then(staffs => dispatch(addStaffs(staffs)));
}

export const staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
})

export const staffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
})

export const addStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
})


export const fetchDeparts = () => (dispatch) => {

    dispatch(departsLoading(true));

    return fetch(departsUrl)
    .then(response => response.json())
    .then(departs => dispatch(addDeparts(departs)));
}

export const departsLoading = () => ({
    type: ActionTypes.DEPARTS_LOADING
})

export const departsFailed = (errmess) => ({
    type: ActionTypes.DEPARTS_FAILED,
    payload: errmess
})

export const addDeparts = (departs) => ({
    type: ActionTypes.ADD_DEPARTS,
    payload: departs
})


export const fetchSalarys = () => (dispatch) => {

    dispatch(salarysLoading(true));

    return fetch(salarysUrl)
    .then(response => response.json())
    .then(salarys => dispatch(addSalarys(salarys)));
}

export const salarysLoading = () => ({
    type: ActionTypes.SALARYS_LOADING
})

export const salarysFailed = (errmess) => ({
    type: ActionTypes.SALARYS_FAILED,
    payload: errmess
})

export const addSalarys = (salarys) => ({
    type: ActionTypes.ADD_SALARYS,
    payload: salarys
})
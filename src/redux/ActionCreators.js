import * as ActionTypes from './ActionTypes';

export const addStaff = (id, name, doB, salaryScale, startDate, department, annualLeave, overTime, image) => ({
    type: ActionTypes.ADD_STAFF,
    payload: {
        id: id,
        name: name,
        doB: doB,
        salaryScale: salaryScale,
        startDate: startDate,
        department: department,
        annualLeave: annualLeave,
        overTime: overTime,
        image: image
    }
});
import { STAFFS } from '../shared/staffs';
import * as ActionTypes from './ActionTypes';

export const Staffs = (state = STAFFS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STAFF:
            let newStaff = action.payload;
            newStaff.id = state.length;
            console.log("New Staff: ", newStaff);
            return state = state.concat([newStaff]);

        default:
            return state;
    }
};
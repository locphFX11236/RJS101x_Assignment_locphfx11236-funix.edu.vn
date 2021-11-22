import { STAFFS } from '../shared/staffs.jsx';

export const initialState = {
    staffs: STAFFS,
    searchs: []
}

export const Reducer = ( state = initialState, action ) => {

    switch (action.type) {
        case 'ADD_STAFF':
            return state = { ...state, staffs: [...state.staffs, action.payload] }

        case 'SEARCH_STAFF':
            return(
                state = { ...state, searchs: state.staffs.filter(
                    (staff) => staff.name.toLowerCase().includes(action.payload)
                ) }
            )

        default:
            return state;
    }
}
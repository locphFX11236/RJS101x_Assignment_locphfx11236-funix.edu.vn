import { createStore, combineReducers } from 'redux';
// import { Reducer, initialState } from './reducer'
import { Staffs } from './staffs';

export const ConfigureStore = () => {
    const store = createStore(
        // Reducer,
        // initialState,
        combineReducers({
            staffs: Staffs
        })
    );

    return store;
}
import { createStore, combineReducers } from 'redux';
import { Staffs } from './staffs';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs
        })
    );

    return store;
}
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { Staffs } from './staffs';
import { InitialModal } from './modalForm';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            ...createForms({
                modalForm: InitialModal
            })
        }),
        applyMiddleware( thunk, logger )
    );

    return store;
}
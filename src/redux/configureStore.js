import { createStore } from 'redux';
import { Reducer } from './reducer'

export const ConfigureStore = () => {
    const store = createStore( Reducer )
    return store
}
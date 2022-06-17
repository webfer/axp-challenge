import { markersReducer } from './markersReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    markers: markersReducer
})
import { combineReducers } from 'redux';
import loader from './common/loader';

const rootReducer = combineReducers({
    loaderReducer: loader
});

export default rootReducer;

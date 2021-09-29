import { combineReducers } from 'redux';
import envReducer from './env';

const rootReducer = combineReducers({
	env: envReducer,
});

export default rootReducer;

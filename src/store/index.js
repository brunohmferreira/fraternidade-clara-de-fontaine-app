import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const loggerMiddleware = (store) => {
    if (process.env.NODE_ENV === 'development')
        console.log('Redux state: ', store.getState());
}

const middleware = store => next => action => {
    loggerMiddleware(store);

    next(action);
};

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(routerMiddleware(BrowserRouter), middleware)
    )
);

export default store;

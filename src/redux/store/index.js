import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducer from '../reducers';

const store = createStore(
    reducer,
    applyMiddleware(
        logger
    )
);

console.log(store, "store");

export default store;
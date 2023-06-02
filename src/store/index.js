import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
// import mySaga from './sagas';

// const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer);
// sagaMiddleware.run(mySaga);

export default store;
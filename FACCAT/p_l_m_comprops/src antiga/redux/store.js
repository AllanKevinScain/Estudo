import { createStore, compose } from 'redux';
import { persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

export default (rootPersistConfig, reducers) => {
  const enhancers = [];

  const composeEnhancers = __DEV__
    ? composeWithDevTools({ hostname: 'localhost', port: 8000 })
    : compose;
  const rootReducer = persistReducer(rootPersistConfig, reducers);
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  return store;
};
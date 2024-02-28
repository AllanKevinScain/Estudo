import { persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import configureStore from './store';
import reducers from './ducks/index'

const rootPersistConfig = { key: 'root', storage: AsyncStorage };

export default () => {
  const store = configureStore(rootPersistConfig, reducers);
  const persistor = persistStore(store);
  if (module.hot) module.hot.accept(() => store.replaceReducer(reducers));
  return { store, persistor };
};
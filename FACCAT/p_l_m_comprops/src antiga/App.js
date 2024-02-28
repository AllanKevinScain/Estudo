import React from 'react';

//React Native Components
import {
  StatusBar
} from 'react-native';

//UI Kitten Components
import {
  ApplicationProvider,
  IconRegistry
} from '@ui-kitten/components';

//Ícones
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import * as eva from '@eva-design/eva';

//Route
import Route from './navigation/index';



import createStore from './redux/index'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

const { store, persistor } = createStore()

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>

        <StatusBar barStyle="light-content" />
        <Route />

      </ApplicationProvider>
    </PersistGate>
  </Provider>
)
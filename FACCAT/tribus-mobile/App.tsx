import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { Router } from './src/navigation/index';
import theme from './src/theme/index';
import { Provider } from 'react-redux';
import store from '@app/redux/store'

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NativeBaseProvider config={{ theme, suppressColorAccessibilityWarning: true }}>
          <Router />
        </NativeBaseProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;

import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

//componentes
import Login from './pages/login';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={styles.allPage}>
        <Layout >
          <Login />
        </Layout>
      </View>
    </ApplicationProvider>
  </>
);

const styles = StyleSheet.create({
  allPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centralizar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    marginVertical: 5,
  },
});
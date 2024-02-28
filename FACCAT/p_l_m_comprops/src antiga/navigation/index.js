import React from 'react';

import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

//Components
import Login from '../pages/Login/Login';
import Cadastro from '../pages/Cadastro/Cadastro';
import Dashboard from '../pages/Home/Dashboard';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

function DrawerScreen() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  )
}

export default () => (
  <>
    <NavigationContainer>
      <Stack.Navigator
        //Configurações de estilo do navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTitleStyle: {
            color: '#FFF'
          }
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="Drawer" component={DrawerScreen} options={{ title: 'Drawer' }} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);
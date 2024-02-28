import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//utils
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DrawerContent from '@app/components/drawer/index';

//Screens
import { Login } from '@app/screens/login/Login';
import { Cadastro } from '@app/screens/cadastro/Cadastro';
import { RegisterMaterial } from '@app/screens/registerMaterial/RegisterMaterial';
import { Sobre } from '@app/screens/sobre/Sobre';
import { Materiais } from '@app/screens/materiais/Materiais';
import { UserProfile } from '@app/screens/userProfile/index';
import { Busca } from '@app/screens/busca/Index';
import { Perfis } from '@app/screens/perfis/Index';
import { Interesses } from '@app/screens/interesses/Index';
import { PerfilDoInteressado } from '@app/screens/perfilDoInteressado/Index';
import { TouchableOpacity } from 'react-native';

type StackProps = {
  Login: undefined,
  Cadastro: undefined,
  Home: undefined,
};

type DrawerProps = {
  RegistrarMateriais: undefined,
  Home: undefined,
  Sobre: undefined,
  Interesses: undefined,
  PerfilDoInteressado: undefined
  UserProfile: undefined,
};

type TabProps = {
  Busca: undefined,
  Perfis: undefined,
  Materiais: undefined
};

const Stack = createStackNavigator<StackProps>();
const Drawer = createDrawerNavigator<DrawerProps>();
const Tab = createMaterialTopTabNavigator<TabProps>();

const TabNav: React.FC = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Materiais"
      tabBarOptions={{
        style: {
          backgroundColor: '#fff',
          marginTop: insets.top,
        },
        labelStyle: {
          fontSize: 18,
        },
        indicatorStyle: {
          backgroundColor: '#B5E6BA',
        },
        activeTintColor: '#32925E',
        inactiveTintColor: '#a5d6a7'
      }}
    >
      {/* <Tab.Screen name="Busca" component={Busca} /> */}
      {/* <Tab.Screen name="Perfis" component={Perfis} /> */}
      <Tab.Screen
        name="Materiais"
        component={Materiais}
        options={{
          tabBarLabel: "Home"
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerNav: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent name={''} component={undefined} options={undefined} {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={TabNav} options={{ headerShown: false }} />
      <Drawer.Screen name="RegistrarMateriais" component={RegisterMaterial} options={{ headerShown: false }} />
      <Drawer.Screen name="Sobre" component={Sobre} options={{ headerShown: false }} />
      <Drawer.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }} />
      {/* <Drawer.Screen name="Interesses" component={Interesses} options={{ headerShown: false }} /> */}
      {/* <Drawer.Screen name="PerfilDoInteressado" component={PerfilDoInteressado} options={{ headerShown: false }} /> */}
    </Drawer.Navigator>
  )
};

export const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={DrawerNav} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

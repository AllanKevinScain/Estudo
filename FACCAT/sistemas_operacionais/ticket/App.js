
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './navigationPages/home/index';
import Ticket from './navigationPages/ticket/index';

const Stack = createStackNavigator();

export default () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Ticket" component={Ticket} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
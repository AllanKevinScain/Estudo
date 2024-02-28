import React from 'react';
import { Text } from 'react-native';

import Estilo from './style';

function ComponentDefault() {
  return <Text style={Estilo.fontMm}>Component One</Text>
}

function ComponentTwo() {
  return <Text style={Estilo.fontM}>Component Two</Text>
}

function ComponentTree() {
  return <Text style={Estilo.fontG}>Component Tree</Text>
}

export { ComponentDefault, ComponentTwo, ComponentTree }
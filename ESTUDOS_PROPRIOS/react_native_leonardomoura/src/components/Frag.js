import React from 'react';
import { Text } from 'react-native';
import Estilo from './style';

export default prop => (
  <>
    <Text style={Estilo.fontG}>{prop.principal}</Text>
    <Text style={Estilo.fontM}>{prop.secundario}</Text>
  </>
)

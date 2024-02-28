import React from 'react';
import { Text, View } from 'react-native';
import Estilo from './style';

export default ({ num = 0 }) => {

  return (
    <View>
      <Text style={Estilo.fontM}>O Texto é:</Text>
      {num % 2 === 0
        ? <Text style={Estilo.fontM}>Par</Text>
        : <Text style={Estilo.fontM}>Ímpar</Text>
      }
    </View>
  )

}
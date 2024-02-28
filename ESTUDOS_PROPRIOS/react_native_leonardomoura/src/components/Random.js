import React from 'react';
import { Text } from 'react-native';
import Estilo from './style';

export default ({ val1, val2 }) => {
  let valor1 = val1,
    valor2 = val2,
    calc,
    delta,
    random;

  if (val1 > val2) {
    valor1 = val1;
    valor2 = val2;
  } else {
    valor1 = val2;
    valor2 = val1;
  }
  calc = valor1 - valor2;

  //Generator of random valors
  delta = valor1 - valor2 + 1;
  random = parseInt(Math.random() * delta) + valor2;

  return (
    <Text style={Estilo.fontG}>
      O resultado de {valor1} menos {valor2} é {calc}! E o valor aleatório é {random}!
    </Text>
  )
}
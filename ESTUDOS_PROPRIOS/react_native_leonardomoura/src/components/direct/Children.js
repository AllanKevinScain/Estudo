import React from 'react';
import { Text } from 'react-native';
import Estilo from '../style';

export default props => {
  return (
    <>
      <Text style={Estilo.fontG}>
        {props.A}
      </Text>
      <Text style={Estilo.fontG}>
        {props.B}
      </Text>
    </>
  )
}
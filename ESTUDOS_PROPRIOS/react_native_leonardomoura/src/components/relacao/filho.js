import React from 'react';
import { Text } from 'react-native';
import Estilo from '../style';

export default props => {
  return (
    <>
      <Text style={Estilo.fontM}>
        {props.nome} {props.sobrenome}
      </Text>
    </>
  )
}
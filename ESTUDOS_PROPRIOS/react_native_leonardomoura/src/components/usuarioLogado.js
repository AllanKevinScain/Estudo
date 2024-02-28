import React from 'react';
import { Text } from 'react-native';
import Estilo from './style';

import If from './if';

export default props => {
  const usuario = props.usuario || {};
  return (
    <>
      <If teste={usuario && usuario.nome && usuario.email}>
        <Text style={Estilo.fontM}>Usuario:</Text>
        <Text style={Estilo.fontM}>{usuario.nome} - {usuario.email}</Text>
      </If>
    </>
  )
}
import React from 'react';
import { Text } from 'react-native';
import Estilo from '../style';
import produtos from './produtos';

import Produtos from './produtos';

export default props => {
  function lista() {
    return produtos.map(p => {
      return (
        <Text style={Estilo.fontMm} key={p.id}>
          {p.id}{p.nome} tem $ {p.preco}
        </Text>
      )
    })
  }
  return (
    <>
      <Text style={Estilo.fontM}>
        Lista de Produtos
      </Text>
      {lista()}
    </>
  )
}
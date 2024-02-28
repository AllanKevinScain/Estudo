import React from 'react';
import { Text, FlatList } from 'react-native';
import Estilo from '../style';

import Produtos from './produtos';

export default props => {
  const produtoRender = ({ item: p }) => {
    return (
      <Text>
        {p.id} {p.nome} - R$ {p.preco}
      </Text>
    )
  }
  return (
    <>
      <Text style={Estilo.fontM}>
        Lista de Produtos
      </Text>
      <FlatList
        data={Produtos}
        keyExtractor={i => `${i.id}`}
        renderItem={produtoRender}
      />
    </>
  )
}
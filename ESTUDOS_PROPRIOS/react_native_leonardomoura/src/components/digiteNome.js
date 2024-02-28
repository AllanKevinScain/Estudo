import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Estilo from './style';

export default props => {
  const [nome, setNome] = useState('Teste');
  return (
    <>
      <View>
        <Text>{nome}</Text>
        <TextInput
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={text => setNome(text)}
        />
      </View>
    </>
  )
}
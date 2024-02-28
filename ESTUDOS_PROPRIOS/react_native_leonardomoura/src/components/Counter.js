import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import Estilo from './style';

export default ({ valor = 0, passo = 1 }) => {
  const [numero, setNumero] = useState(valor)

  const inc = () => setNumero(numero + passo);
  const dec = () => setNumero(numero - passo);

  return (
    <>
      <Text style={Estilo.fontM}>{numero}</Text>
      <Button
        title="mais"
        onPress={inc}
      />
      <Button title="menos" onPress={dec} />
    </>
  )
}
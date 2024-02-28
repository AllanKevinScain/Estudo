import React, { useState } from 'react';
import { Text } from 'react-native';
import Filho from './Children';
import Estilo from '../style';

export default props => {
  const [num, setNum] = useState(0);

  function exibirValor(numero) {
    setNum(numero);
  }

  return (
    <>
      <Text style={Estilo.fontG}>{num}</Text>
      <Filho
        min={1}
        max={60}
        funcao={exibirValor}
      />
    </>
  )
}
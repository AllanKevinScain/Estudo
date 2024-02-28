import React from 'react';
import { Button } from 'react-native';

export default prop => {

  function Salvar() {
    console.warn('Salvado!')
  }

  return (
    <>
      <Button
        title="Salvar"
        onPress={Salvar}
      />
      <Button
        title="Salvar no Celular"
        onPress={function () {
          console.warn('Salvado no celula!')
        }}
      />
      <Button
        title="Salvar no PC"
        onPress={() => console.warn('Salvado no PC!')}
      />
    </>
  )
}
import React, { Component } from 'react';
import { Button, Text, TextInput } from 'react-native';
import Estilo from '../style';

export default class Mega extends Component {

  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [],
  };

  alterarQtNumero = (qtde) => {
    this.setState({ qtdeNumeros: +qtde })
  };

  gerarNumeroNaoContido = nums => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdeNumeros)
      .fill()
      .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
      .sort((a, b) => a - b)
    this.setState({ numeros })
  };


  render() {
    return (
      <>
        <Text style={Estilo.fontG}>
          Ola mundo!
          {this.state.qtdeNumeros}
        </Text>
        <TextInput
          placeholder="Quant"
          keyboardType={'numeric'}
          value={`${this.state.qtdeNumeros}`}
          onChangeText={quant => this.alterarQtNumero(quant)}
        />
        <Button
          title="Gerar"
          onPress={this.gerarNumeros}
        />
        <Text>
          {this.state.numeros.join(',')}
        </Text>
      </>
    )
  }
}
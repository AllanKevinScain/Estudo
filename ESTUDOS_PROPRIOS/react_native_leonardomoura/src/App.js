import React from 'react';
import {
  SafeAreaView, //evita algumas margens dos dispositivos
  StyleSheet, //
} from 'react-native';

//componentes
//import { ComponentTwo, ComponentTree, ComponentDefault } from './components/Multiple';
//import First from './components/First';
//import MinMax from './components/MinMax';
//import Calc from './components/Random';
// import Frag from './components/Frag';
// import Buton from './components/Button';
// import Cont from './components/Counter';
// import Pai from './components/direct/Father';
// import Pai from './components/indirect/Father';
// import ContadorV2 from './components/contador/contadorV2';
// import Plat from './components/diferenciar';
// import ParImapar from './components/parImpar';
// import Pai from './components/relacao/pai';
// import Filho from './components/relacao/filho';
// import Usuario from './components/usuarioLogado';
// import Produtos from './components/produtos/lista';
// import Produtos2 from './components/produtos/lista copy';
// import Digite from './components/digiteNome';
// import Squad from './components/flexBoxV1';
import Mega from './components/mega/mgea';

export default () => (
  <SafeAreaView style={style.App}>
    <Mega qtdeNumeros={7} />
    {/* 
    <Squad />
    <Digite />
    <Produtos2 />
    <Usuario usuario={{
      nome: "Gui",
      email: "Gui"
    }}
    />
    <Usuario usuario={{
      nome: "",
      email: ""
    }}
    />
    <Usuario usuario={{
      nome: "Carlos",
      email: "carlos"
    }}
    />
    <Pai>
      <Filho nome="Bia" sobrenome="silva" />
      <Filho nome="Carlos" sobrenome="silva" />
    </Pai>
    <Pai>
      <Filho nome="Ana" sobrenome="silva" />
      <Filho nome="Julia" sobrenome="silva" />
    </Pai>
    <ParImapar num={0} />
    <Plat />
    <ContadorV2 />
    <Pai />
    <MinMax min={3} max={20} />
    <Cont valor={1000} passo={2} />
    <Cont />
    <Buton />
    <Frag principal="cadastro do Produto" secundario="Tela de Cadastro" />
    <MinMax min={1} max={90} />
    <Calc val1={1} val2={60} />
    <ComponentDefault />
    <ComponentTwo />
    <ComponentTree />
    <First /> 
    */}
  </SafeAreaView>
)

//estilização
const style = StyleSheet.create({
  App: {
    backgroundColor: '#121212',
    flexGrow: 1, //aumenta o componente
    justifyContent: 'center', //eixo da linha
    alignItems: 'center', //eixo da coluna toda
    padding: 20
  },
});
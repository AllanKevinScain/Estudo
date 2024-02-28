import React from 'react';

//componentes
import BotaoSemIcone from '../components/ButtonDontIcon';
import ButtonWithIcon from '../components/ButtonWithIcon';
import InputWithIcon from '../components/InputDontIcon';
import Txt from '../components/Text';
import Cabecalho from '../components/Cabecalho';

export default () => {

  function fazerLogin() {
    apiLogin(
      function (mesagem, statusLogin) {
        if (statusLogin === 0) {
          // console.log(mesagem); //Mensagem da API de Login inválido
          setStatusEmail('danger')
          setStatusPass('danger')
          setMsgError('Login inválido!')
          setIsHidden(false)
        } else {
          toDashboard(); //Redireciona o usuário para dashboard (homepage)
        }
      },
      'http://localhost:5000/logarusuario', //end point
      'POST', //method
      emailValue, //email digitado pelo usuário
      passwordValue //senha digitada pelo usuário
    )
  }

  return (
    <>
      <Cabecalho largura={300} altura={70} texto="Faça seu Login" textoLink="" />
      <InputWithIcon
        customBorderColor="#000"
        customStatusInput={'basic'}
        onFunctionChange={() => { }}
        onFunctionFocus={() => { }}
        val={'none'}
        customAutoCompleteType="email"
        customTextContentType="emailAddress"
        customKeyboard="email-address"
        placeholder="steve@apple.com"
        customWidth={300}
        iconType="email"
      />
      <InputWithIcon
        customBorderColor="#000"
        customStatusInput={'basic'}
        onFunctionChange={() => { }}
        onFunctionFocus={() => { }}
        val={'none'}
        customTextContentType="password"
        customSecureTextEntry={true}
        customKeyboard="default"
        placeholder="•••••••••••••"
        customWidth={300}
        iconType="lock"
      />
      <Txt texto="" link="Esqueci a senha" />
      <BotaoSemIcone cor="#00D954" textoInterno="Fazer Login" />
      <Txt texto="OU" link="" />
      <ButtonWithIcon
        iconType="facebook"
        customBackgroundColor="#172EAB"
        customBorderColor="#172EAB"
        textContent="Entrar com Facebook"
        customWidth={300}
      />
      <ButtonWithIcon
        iconType="twitter"
        customBackgroundColor="#175EAA"
        customBorderColor="#175EAA"
        textContent="Entrar com Twitter"
        customWidth={300}
      />
      <Txt texto="Ainda não possui conta?" link="Clique aqui" />
    </>
  )
}

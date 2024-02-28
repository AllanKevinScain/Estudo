import React, { useState } from 'react';
import apiLogin from '../../services/apiLogin'

//React Native Components
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

//My Components
import Title from '../../components/Title';
import InputWithIcon from '../../components/InputWithIcon';
import LinkText from '../../components/LinkText';
import ButtonWithoutIcon from '../../components/ButtonWithoutIcon';
import ButtonWithIcon from '../../components/ButtonWithIcon';

import { setIsLoading } from '../../redux/ducks/user';

import { DrawerActions } from '@react-navigation/native';

export default ({ navigation }) => {

  //UseStates
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [statusInput, setStatusInput] = useState('')
  const [statusEmail, setStatusEmail] = useState('')
  const [statusPass, setStatusPass] = useState('')
  const [isHidden, setIsHidden] = useState(true)
  const [msgError, setMsgError] = useState('Login Inválido!')

  //Funções de Navegação
  function toCadastro() {
    navigation.navigate('Cadastro')
  }

  function toDashboard() {
    navigation.navigate('Drawer')
  }

  //LOGIN

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

  function validarLogin() {
    if (emailValue.includes('@') === false || emailValue.includes('.') === false) {
      // console.log('email inválido!')
      setStatusEmail('danger')
      setMsgError('E-mail inválido!')
      setIsHidden(false)
    } else if (passwordValue.length < 6) {
      // console.log('senha inválida!')
      setStatusPass('danger')
      setMsgError('Senha inválida!')
      setIsHidden(false)
    } else {
      fazerLogin()
    }
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          alignItems: 'center'
        }}>
          {/* Imagem Logo */}
          <View>
            <Image
              source={
                require('./../../../src/assets/logoProvisorio.png')
              }
              style={styles.imgLogo}
            />
          </View>

          {/* Título */}
          <View style={{ marginTop: 20 }}>
            <Title
              customColor="#575757"
              customFontSize={22}
              customFontWeight="bold"
              textContent="Faça o seu Login"
            />
          </View>

          {/* Login */}

          {/* Label E-mail */}
          <View style={styles.inputContainer}>
            <Text style={styles.labelInput}>
              Insira seu e-mail
            </Text>

            {/* Input E-mail */}
            <InputWithIcon
              customBorderColor="#000"
              customStatusInput={statusEmail}
              onFunctionChange={email => {
                setEmailValue(email)
                // console.log(`email: ${email}`)
                // console.log(emailValue)
              }}
              onFunctionFocus={() => {
                setStatusEmail('basic')
                setIsHidden(true)
              }}
              val={emailValue}
              customAutoCompleteType="email"
              customTextContentType="emailAddress"
              customKeyboard="email-address"
              placeholder="steve@apple.com"
              customWidth={300}
              customSize="large"
              iconType="email"
            />
          </View>

          {/* Label Senha */}
          <View style={styles.inputContainer}>
            <Text style={styles.labelInput}>
              Insira sua senha
            </Text>

            {/* Input Senha */}
            <InputWithIcon
              customBorderColor="#000"
              customStatusInput={statusPass}
              onFunctionChange={senha => {
                setPasswordValue(senha)
                // console.log(`senha: ${senha}`)
                //console.log(passwordValue)
              }}
              onFunctionFocus={() => {
                setStatusPass('basic')
                setIsHidden(true)
              }}
              val={passwordValue}
              customTextContentType="password"
              customSecureTextEntry={true}
              customKeyboard="default"
              placeholder="•••••••••••••"
              customWidth={300}
              customSize="large"
              iconType="lock"
            />
          </View>

          {/* Mensagem Erro no Login */}
          <Text
            style={{
              display: isHidden ? 'none' : 'flex',
              color: '#db1212',
              fontFamily: 'bold',
              fontSize: 16,
              marginTop: 15
            }}
          >
            {msgError}
          </Text>

          {/* Esqueci a senha */}
          <View
            style={{ marginTop: 10 }}
          >
            <TouchableOpacity
              onPress={() => {
                //dispatch(setIsLoading(true))
              }}
            >
              <LinkText
                customFontSize={16}
                customFontWeight="bold"
                customColor="#00D954"
                textContent="Esqueci a senha"
              />
            </TouchableOpacity>
          </View>

          {/* Botão Entrar */}
          <View style={styles.buttonMarginTop}>
            <ButtonWithoutIcon
              // onFunction={fazerLogin}
              onFunction={validarLogin}
              customBackgroundColor="#00D954"
              customBorderColor="#00D954"
              customWidth={300}
              customSize="giant"
              textContent="Entrar"
            />
          </View>

          {/* OU */}
          <Text style={styles.ouText}>
            OU
          </Text>

          {/* Botão Facebook */}
          <View style={styles.buttonMarginTop}>
            <ButtonWithIcon
              customBackgroundColor="#172EAB"
              customBorderColor="#172EAB"
              customWidth={300}
              customSize="giant"
              textContent="Entrar com Facebook"
              iconType="facebook"
            />
          </View>

          {/* Botão Twitter */}
          <View style={{ marginTop: 10 }}>
            <ButtonWithIcon
              customBackgroundColor="#1DA1F2"
              customBorderColor="#1DA1F2"
              customWidth={300}
              customSize="giant"
              textContent="Entrar com Twitter"
              iconType="twitter"
            />
          </View>

          {/* Ainda não possui sua conta? Clique aqui */}
          <View style={styles.naoPossuiContaContainer}>
            <Text style={styles.naoPossuiContaText} >
              Ainda não possui sua conta?
            </Text>
            <TouchableOpacity
              onPress={toCadastro}
            >
              <LinkText
                customFontSize={15}
                customFontWeight="bold"
                customColor="#00D954"
                textContent=" Clique aqui"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  imgLogo: {
    width: 200,
    height: 60,
    marginTop: 50,
  },
  inputContainer: {
    marginTop: 40,
  },
  labelInput: {
    color: '#5A5773',
    fontSize: 18,
    marginBottom: 5
  },
  ouText: {
    color: '#666666',
    fontSize: 18,
    marginTop: 20
  },
  buttonMarginTop: {
    marginTop: 20
  },
  naoPossuiContaContainer: {
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 30
  },
  naoPossuiContaText: {
    color: '#5A5773',
    fontSize: 15,
  }
})
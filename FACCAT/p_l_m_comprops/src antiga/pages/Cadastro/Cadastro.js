import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';

//apis
import APICADASTRAR from '../../services/apiCadastrar';

//My Components
import Title from '../../components/Title'
import InputWithIcon from '../../components/InputWithIcon'
import ButtonWithoutIcon from '../../components/ButtonWithoutIcon'
import LinkText from '../../components/LinkText'

export default ({ navigation }) => {

  //Dados Inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');

  //Status Inputs
  const [statusNome, setStatusNome] = useState('')
  const [statusEmail, setStatusEmail] = useState('')
  const [statusPhone, setStatusPhone] = useState('')
  const [statusPass, setStatusPass] = useState('')

  const [isHiddenName, setIsHiddenName] = useState(true)
  const [isHiddenEmail, setIsHiddenEmail] = useState(true)
  const [isHiddenPhone, setIsHiddenPhone] = useState(true)
  const [isHiddenPass, setIsHiddenPass] = useState(true)


  function logon() {
    navigation.navigate('Login')
  }

  function toDashboard() {
    navigation.navigate('Dashboard');
  };

  function cadastro() {
    APICADASTRAR(
      function (mensagem, statusCadastro) {
        if (statusCadastro === 0) {
          console.log(mensagem); //Mensagem da API de cadastro inválido
        } else {
          toDashboard(); //Redireciona o usuário para dashboard (homepage)
        }
      },
      "http://localhost:5000/cadastrarusuario",
      name,
      email,
      phone,
      pass
    )
  };

  function vaidarCadastro() {
    if (name.length < 3) {
      setIsHiddenName(false)
      setStatusNome('danger')
      console.log('nome muito curto')
    } else if (email.includes('@') === false || email.includes('.') === false) {
      setIsHiddenEmail(false)
      setStatusEmail('danger')
      console.log('email inválido')
    } else if (phone.length < 11 || phone.length > 11 || isNaN(phone)) {
      setIsHiddenPhone(false)
      setStatusPhone('danger')
      console.log("telefone inválido")
    } else if (pass.length < 6) {
      setIsHiddenPass(false)
      setStatusPass('danger')
      console.log('senha inválida!')
    } else {
      cadastro()
    }
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          alignItems: 'center'
        }}>

          {/* Imagem Logo */}
          <View style={styles.containerImg}>
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
              textContent="Crie sua Conta"
            />
          </View>

          {/* Label Nome */}
          <View style={styles.inputContainer}>
            <Text style={styles.labelInput}>
              Nome
            </Text>

            {/* Input Nome */}
            <InputWithIcon
              customStatusInput={statusNome}
              customCaption={isHiddenName ? '' : 'O nome deve possuir pelo menos 3 caracteres'}
              onFunctionChange={texto => setName(texto)}
              onFunctionFocus={() => {
                setStatusNome('basic')
                setIsHiddenName(true)
              }}
              customBorderColor="#000"
              customAutoCompleteType="name"
              customTextContentType="name"
              customKeyboard="default"
              placeholder="Kristine Froseth"
              customWidth={300}
              customSize="large"
              iconType="person"
            />
          </View>

          {/* Label E-mail */}
          <View style={styles.inputContainer}>
            <Text style={styles.labelInput}>
              Insira seu e-mail
            </Text>

            {/* Input E-mail */}
            <InputWithIcon
              customCaption={isHiddenEmail ? '' : 'Insira um e-mail válido!'}
              customStatusInput={statusEmail}
              onFunctionChange={texto => setEmail(texto)}
              onFunctionFocus={() => {
                setStatusEmail('basic')
                setIsHiddenEmail(true)
              }}
              customBorderColor="#000"
              customAutoCompleteType="email"
              customTextContentType="emailAddress"
              customKeyboard="email-address"
              placeholder="steve@apple.com"
              customWidth={300}
              customSize="large"
              iconType="email"
            />
          </View>

          {/* Label Telefone */}
          <View style={styles.inputContainer}>
            <Text style={styles.labelInput}>
              Telefone
            </Text>

            {/* Input Telefone */}
            <InputWithIcon
              customCaption={isHiddenPhone ? '' : 'O telefone deve ter 11 dígitos'}
              customStatusInput={statusPhone}
              onFunctionChange={texto => setPhone(texto)}
              onFunctionFocus={() => {
                setStatusPhone('basic')
                setIsHiddenPhone(true)
              }}
              customBorderColor="#000"
              customAutoCompleteType="tel"
              customTextContentType="telephoneNumber"
              customKeyboard="phone-pad"
              placeholder="11 99489043"
              customWidth={300}
              customSize="large"
              iconType="smartphone"
            />
          </View>

          {/* Label Senha */}
          <View style={styles.inputContainer}>
            <Text style={styles.labelInput}>
              Insira sua senha
            </Text>

            {/* Input Senha */}
            <InputWithIcon
              customCaption={isHiddenPass ? '' : 'a senha deve ter pelo menos 6 caracteres'}
              customStatusInput={statusPass}
              onFunctionChange={texto => setPass(texto)}
              onFunctionFocus={() => {
                setStatusPass('basic')
                setIsHiddenPass(true)
              }}
              customBorderColor="#000"
              customTextContentType="password"
              customSecureTextEntry={true}
              customKeyboard="default"
              placeholder="•••••••••••••"
              customWidth={300}
              customSize="large"
              iconType="lock"
            />
          </View>

          {/* Botão Salvar */}
          <View style={styles.buttonMarginTop}>
            <ButtonWithoutIcon
              // onFunction={cadastro}
              onFunction={vaidarCadastro}
              customBackgroundColor="#00D954"
              customBorderColor="#00D954"
              customWidth={300}
              customSize="medium"
              textContent="Salvar"
            />
          </View>

          {/* Voltar */}
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              onPress={logon}
            >
              <LinkText
                customFontSize={15}
                customFontWeight="normal"
                customColor="#666666"
                textContent=" Voltar"
              />
            </TouchableOpacity>
          </View>

          {/* Ainda não possui sua conta? Clique aqui */}
          <View style={styles.naoPossuiContaContainer}>
            <Text style={styles.naoPossuiContaText}>
              Já possui sua conta?
            </Text>
            <TouchableOpacity
              onPress={logon}
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  imgLogo: {
    width: 200,
    height: 50,
    marginTop: 50,
  },
  inputContainer: {
    marginTop: 20,
  },
  labelInput: {
    color: '#5A5773',
    fontSize: 18,
    marginBottom: 5
  },
  buttonMarginTop: {
    marginTop: 20
  },
  naoPossuiContaContainer: {
    marginTop: 30,
    marginBottom: 30,
    flexDirection: 'row',
  },
  naoPossuiContaText: {
    color: '#5A5773',
    fontSize: 15,
  }
})
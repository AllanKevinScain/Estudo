
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Center, Flex, Text, Image, Heading, Button } from 'native-base'
import Card from '@app/components/gerais/card/Card'
import Header from '@app/components/gerais/header/Header';
import InputCustom from '@app/components/inputs/InputCustom'
import SecureCustom from '@app/components/inputs/SecureCustom'
import LinkUlr from '@app/components/gerais/linkUrl/LinkUrl'
import Footer from '@app/components/gerais/footer/Footer'
import textConst from '@app/mocks/locales/pt.json'
import SelectCustom from '@app/components/inputs/SelectCustom'
import ErrorText from '@app/components/gerais/ErrorText'
import { validate } from '@app/helpers/validate'
import api from '@app/services/api'
import { useDispatch } from 'react-redux';
import { maskPhone } from '@lighthouseapps/utils';
import Error from '@app/components/Error/Error';
import { ResponseData } from '@app/models/ResponseData';
interface Props {
  navigation: any;
}
interface User {
  nome: string;
  email: string;
  telefone: string;
  password: string;
  confirmPassword: string;
  tipo: string;
}

export const Cadastro: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User>({ nome: '', email: '', telefone: '', password: '', confirmPassword: '', tipo: '' });
  const [isNomeInvalid, setIsNomeInvalid] = useState<boolean>();
  const [nomeErrorMsg, setNomeErrorMsg] = useState<string>('');
  const [isEmailInvalid, setIsEmailInvalid] = useState<boolean>(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState<string>('');
  const [isTelefoneInvalid, setIsTelefoneInvalid] = useState<boolean>(false);
  const [telefoneErrorMsg, setTelefoneErrorMsg] = useState<string>('');
  const [isPasswordInvalid, setIsPasswordInvalid] = useState<boolean>(false);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string>('');
  const [isConfirmPasswordInvalid, setIsConfirmPasswordInvalid] = useState<boolean>(false);
  const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState<string>('');
  const [isTipoInvalid, setIsTipoInvalid] = useState<boolean>(false);
  const [tipoErrorMsg, setTipoErrorMsg] = useState<string>('');
  const [hasError, setHasError] = useState<{ status: boolean, msg: string }>({ status: false, msg: '' });

  const [items, setItems] = useState([
    { id: 1, label: 'Empresário', value: 'empresa' },
    { id: 2, label: 'Coletor', value: 'coletor' },
    { id: 3, label: 'Doador', value: 'doador' },
  ])

  const cadastrar = () => {
    // const data = { ...user, tipo: selectedValueState }
    const data = user;
    console.log(data)

    setIsLoading(true);

    let nomeStatus = validate({ type: 'nome', value: user.nome });
    if (nomeStatus.hasError) {
      setIsNomeInvalid(true);
      setNomeErrorMsg(nomeStatus.msg);
      setIsLoading(false);
      return;
    }

    let emailStatus = validate({ type: 'email', value: user.email });
    if (emailStatus.hasError) {
      setIsEmailInvalid(true);
      setEmailErrorMsg(emailStatus.msg);
      setIsLoading(false);
      return;
    }
    console.log(user.telefone.replace(/[^0-9]/g, ''))
    // user.telefone.replace(/[^0-9]/g, '') -> deixa apenas os numeros para a validacao
    let telefoneStatus = validate({ type: 'telefone', value: user.telefone.replace(/[^0-9]/g, '') });
    if (telefoneStatus.hasError) {
      setIsTelefoneInvalid(true);
      setTelefoneErrorMsg(telefoneStatus.msg);
      setIsLoading(false);
      return;
    }

    let passwordStatus = validate({ type: 'password', value: user.password });
    if (passwordStatus.hasError) {
      setIsPasswordInvalid(true);
      setPasswordErrorMsg(passwordStatus.msg);
      setIsLoading(false);
      return;
    }

    let confirmPasswordStatus = validate({ type: 'password', value: user.confirmPassword, value2: user.password });
    if (confirmPasswordStatus.hasError) {
      setIsConfirmPasswordInvalid(true);
      setConfirmPasswordErrorMsg(confirmPasswordStatus.msg);
      setIsLoading(false);
      return;
    }

    let tipoStatus = validate({ type: 'tipo-usuario', value: user.tipo });
    if (tipoStatus.hasError) {
      setIsTipoInvalid(true);
      setTipoErrorMsg(tipoStatus.msg);
      setIsLoading(false);
      return;
    }

    console.log(user);

    try {
      setHasError({ status: false, msg: '' });
      delete user.confirmPassword;
      data.telefone = data.telefone.replace(/[^0-9]/g, '');

      api
        .post<ResponseData<User>>('user/cadastro', data)
        .then(({ data }) => {
          dispatch({
            type: 'user/userRequestSuccess',
            payload: data.data,
          });
          dispatch({
            type: 'user/setUserType',
            payload: data.data.tipo
          })
          navigation.navigate('Home')
        })
        .catch((e)=>{
            console.log(e)
        })
    } catch (error) {
      setIsLoading(false);
      setHasError({ status: true, msg: 'Erro ao cadastrar!' });
      dispatch({
        type: 'user/userRequestError',
        payload: 'Erro ao cadastrar',
      });
      console.log(error)
    }
  }

  return (
    <ScrollView>
      <Header close={() => navigation.goBack()} />
      <Image w='full' h='52.5' source={require('../../assets/image/fundo.png')} />
      <Flex bg='primary.300' h='20' mb='-20' />

      <Flex mx={8} mt={8}>
        <Card>
          <Flex px={5}>
            <Center>
              <Image mt={5} w='70' h='22.5' source={require('../../assets/image/logo.png')} />
              <Heading color='primary.400' fontSize='xl' fontWeight='bold' mt='5'>
                {textConst.lema}
              </Heading>
            </Center>

            <Flex mt='2.5'>
              <Flex mt='4'>
                <InputCustom
                  icon="account"
                  placeholder={textConst.namePlaceholder}
                  label={textConst.nameLabel}
                  isInvalid={isNomeInvalid}
                  onTextChange={value => {
                    setUser({ ...user, nome: value });
                  }}
                  onFocus={() =>
                    isNomeInvalid ? setIsNomeInvalid(false) : null
                  }
                />
                {isNomeInvalid ? <ErrorText msg={nomeErrorMsg} /> : null}
              </Flex>

              <Flex mt='4'>
                <InputCustom
                  icon="email"
                  keyboardType="email-address"
                  isInvalid={isEmailInvalid}
                  placeholder={textConst.emailPlaceholder}
                  label={textConst.emailLabel}
                  onTextChange={value => {
                    setUser({ ...user, email: value });
                  }}
                  onFocus={() =>
                    isEmailInvalid ? setIsEmailInvalid(false) : null
                  }
                />
                {isEmailInvalid ? <ErrorText msg={emailErrorMsg} /> : null}
              </Flex>

              <Flex mt='4'>
                <InputCustom
                  icon="phone"
                  maxLength={15}
                  keyboardType="numeric"
                  placeholder="(99) 99999-9999"
                  label="Telefone"
                  isInvalid={isTelefoneInvalid}
                  value={user.telefone}
                  onTextChange={value => {
                    value = value.replace(/[^0-9]/g, '');

                    setUser({ ...user, telefone: value.length > 10 ? maskPhone(value) : value });
                  }}
                  onFocus={() => {
                    isTelefoneInvalid ? setIsTelefoneInvalid(false) : null
                  }}
                />
                {isTelefoneInvalid ? <ErrorText msg={telefoneErrorMsg} /> : null}
              </Flex>

              <Flex mt='4'>
                <SecureCustom
                  isInvalid={isPasswordInvalid}
                  onTextChange={value => {
                    setUser({ ...user, password: value });
                  }}
                  onFocus={() =>
                    isPasswordInvalid ? setIsPasswordInvalid(false) : null
                  }
                />
                {isPasswordInvalid ? <ErrorText msg={passwordErrorMsg} /> : null}
              </Flex>

              <Flex mt='4'>
                <SecureCustom
                  isInvalid={isConfirmPasswordInvalid}
                  label={textConst.confirmPasswordLabel}
                  onTextChange={value => {
                    setUser({ ...user, confirmPassword: value });
                  }}
                  onFocus={() =>
                    isConfirmPasswordInvalid ? setIsConfirmPasswordInvalid(false) : null
                  }
                />
                {isConfirmPasswordInvalid ? <ErrorText msg={confirmPasswordErrorMsg} /> : null}
              </Flex>

              <Flex mt='4'>
                <SelectCustom
                  selectedValue={user.tipo}
                  label="Você é ?"
                  icon="clipboard-account"
                  items={items}
                  isInvalid={isTipoInvalid}
                  onValueChange={(itemValue: string) => {
                    setUser({ ...user, tipo: itemValue })
                    isTipoInvalid ? setIsTipoInvalid(false) : null
                  }}
                />
                {isTipoInvalid ? <ErrorText msg={tipoErrorMsg} /> : null}
              </Flex>

              {hasError.status && <Error msg="Erro ao cadastrar!" />}

              <Flex mt='8'>
                <Button
                  isLoading={isLoading}
                  size="lg"
                  onPress={() => cadastrar()}
                >
                  {textConst.cadastrar.toUpperCase()}
                </Button>
              </Flex>

              <Center>
                <Flex>
                  <Flex direction="row" alignItems="center" my="5">
                    <Text fontSize="md">{textConst.ja_possui_conta}</Text>
                    <LinkUlr linkText={textConst.clique_aqui} onFunction={() => navigation.navigate('Login')} />
                  </Flex>
                </Flex>
              </Center>
            </Flex >
          </Flex >
        </Card >
      </Flex >
      <Flex mt={5}>
        <Footer />
      </Flex>
    </ScrollView >
  )
}


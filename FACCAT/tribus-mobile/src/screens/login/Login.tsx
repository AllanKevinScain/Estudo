import React, { useEffect, useState } from 'react';
import {
  Image,
  Center,
  Text,
  Heading,
  Flex,
  Button,
} from 'native-base';
import Screen from '@app/components/Screen'
import api from '@app/services/api';
import { ResponseData } from '../../models/ResponseData';
import Card from '@app/components/gerais/card/Card'
import InputCustom from '@app/components/inputs/InputCustom'
import SecureCustom from '@app/components/inputs/SecureCustom'
import LinkUlr from '@app/components/gerais/linkUrl/LinkUrl'
import ErrorText from '@app/components/gerais/ErrorText'
import { validate } from '@app/helpers/validate'
import Error from '@app/components/Error/Error'
import textConst from '../../mocks/locales/pt.json'
import { useDispatch } from 'react-redux';

interface Props {
  navigation: any;
}

interface User {
  email: string;
  password: string;
  tipo: string;
}

export const Login: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState<User>({ email: '', password: '', tipo: '' });
  const [isEmailInvalid, setIsEmailInvalid] = useState<boolean>(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState<string>('');
  const [isPasswordInvalid, setIsPasswordInvalid] = useState<boolean>(false);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<{ status: boolean, msg: string }>({ status: false, msg: '' });

  useEffect(() => {
    console.log(user);
  }, [user]);

  const login = () => {

    let emailStatus = validate({ type: 'email', value: user.email });
    setIsLoading(true);

    if (emailStatus.hasError) {
      setIsEmailInvalid(true);
      setEmailErrorMsg(emailStatus.msg);
      setIsLoading(false);
      return;
    }

    if (!user.password) {
      setIsPasswordInvalid(true);
      setPasswordErrorMsg('Senha inválida');
      setIsLoading(false);
      return;
    }

    if (user.email && user.password) {
      setHasError({ status: false, msg: '' });
      api
        .post<ResponseData<User>>('login', user)
        .then(({ data }) => {
          console.log(data)
          if (data.success) {
            dispatch({
              type: 'user/userRequestSuccess',
              payload: data.data,
            });
            dispatch({
              type: 'user/setUserType',
              payload: data.data.tipo
            })
            setIsLoading(false);
            navigation.navigate('Home')
          } else {
            setIsLoading(false);
            setHasError({ status: true, msg: 'Ocorreu um erro ao logar' });
            dispatch({
              type: 'user/userRequestError',
              payload: 'Erro ao logar',
            });
          }
        }).catch((error) => {
          setHasError({ status: true, msg: 'Ocorreu um erro ao logar' });
          dispatch({
            type: 'user/userRequestError',
            payload: 'Erro ao logar',
          });
          setIsLoading(false);
        })
    }
  }

  return (
    <Screen isScrollable>
      <Flex>
        <Image
          w="full"
          h="52.5"
          source={require('../../assets/image/fundo.png')}
        />
        <Flex bg="primary.300" h="20" mb="-20" />

        <Flex mx={8} mt={8}>
          <Card mb={2}>
            <Flex px={5}>
              <Center>
                <Image
                  mt={5}
                  w="70"
                  h="22.5"
                  source={require('../../assets/image/logo.png')}
                />
                <Heading
                  color="primary.400"
                  fontSize="xl"
                  fontWeight="bold"
                  mt="5">
                  {textConst.lema}
                </Heading>
              </Center>
              <Flex mt="2.5">
                <Flex mt="4">
                  <InputCustom
                    icon="email"
                    returnKeyType="next"
                    isInvalid={isEmailInvalid}
                    placeholder="pedro@gmail.com"
                    label={textConst.emailLabel}
                    keyboardType="email-address"
                    onTextChange={value => {
                      setUser({ ...user, email: value });
                    }}
                    onFocus={() =>
                      isEmailInvalid ? setIsEmailInvalid(false) : null
                    }
                  />
                  {isEmailInvalid ? <ErrorText msg={emailErrorMsg} /> : null}
                </Flex>
                <Flex mt="4">
                  <SecureCustom
                    isInvalid={isPasswordInvalid}
                    onTextChange={value => {
                      setUser({ ...user, password: value });
                    }}
                    onSubmitEditing={login}
                    onFocus={() => {
                      isPasswordInvalid ? setIsPasswordInvalid(false) : null
                    }}
                  />
                  {isPasswordInvalid ? (
                    <ErrorText msg={passwordErrorMsg} />
                  ) : null}
                </Flex>

                {hasError.status && <Error msg="Erro ao logar!" />}

                <Flex mt={!hasError.status ? 8 : 0}>
                  <Button
                    isLoading={isLoading}
                    onPress={login}
                    size="lg"
                  >
                    {textConst.entrar.toUpperCase()}
                  </Button>
                </Flex>
                <Center>
                  <Flex mt="8.5">
                    <Flex mb="5" direction="row" alignItems="center">
                      <Text fontSize="md">{textConst.nao_possui_conta}</Text>
                      <LinkUlr
                        linkText={textConst.clique_aqui}
                        onFunction={() => navigation.navigate('Cadastro')}
                      />
                    </Flex>
                  </Flex>
                </Center>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Flex>
    </Screen>
  );
};

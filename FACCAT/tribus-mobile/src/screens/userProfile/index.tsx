
import React, { useState, useEffect } from 'react';
import { PermissionsAndroid, Image } from 'react-native'
import { Flex, Heading, Pressable, Text, ScrollView, Avatar, Button, Modal } from 'native-base';
import Header from '@app/components/gerais/header/Header';
import InputCustom from '@app/components/inputs/InputCustom';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Screen from '@app/components/Screen';
const ImagePicker = require('react-native-image-picker');
import { capitalize } from '@brazilian-utils/brazilian-utils';
import { maskPhone } from '@lighthouseapps/utils';
import api from '@app/services/api';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ResponseData } from '@app/models/ResponseData';

interface Props {
  navigation: any
}

export const UserProfile: React.FC<Props> = ({ navigation }) => {

  const dispatch = useDispatch();

  const { data, type, cpf, cnpj } = useSelector((state: any) => state.user);
  const [user, setUser] = useState({
    email: data.email,
    telefone: data.telefone,
    dados: {
      cpf: cpf.length > 0 || '',
      cnpj: cnpj.length > 0 || '',
    }
  })
  const [isEdit, setIsEdit] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isPermissionGranted, setIsPermissionGranted] = useState<boolean>(false);
  const [photo, setPhoto] = useState<any>(null);
  const [imgBase64, setImgBase64] = useState<string>('');

  const requestMediaPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "tRibus precisa permissão para acessar suas fotos",
          message:
            "Aceite a permissão para prosseguir com o upload",
          buttonNegative: "Negar",
          buttonPositive: "Aceitar"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setIsPermissionGranted(true)
      } else {
        setIsPermissionGranted(false)
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const types = [
    { id: 1, label: 'Plástico', value: 'plástico' },
    { id: 2, label: 'Vidro', value: 'vidro' },
    { id: 3, label: 'Metal', value: 'metal' },
    { id: 4, label: 'Outro', value: 'outro' },
  ]


  function imagePickerCallBack(data: any) {

    if (data.didCancel) {
      return
    };

    if (data.error) {
      return
    };

    if (!data.assets[0].uri) {
      return
    };

    setPhoto(data);
    setImgBase64(data.assets[0].base64);
    console.log(photo)
  };

  let config = {
    mediaType: 'photo',
    includeBase64: true,
    maxHeight: 300,
    maxWidth: 300,
  }

const deletarUsuario = async () => {
    const id = data.id

    try {
      const response = await api.delete<ResponseData<null>>(`delete/${id}`)
      if (response.data.status === 200) {
        navigation.navigate('Login')
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    requestMediaPermission()
  }, [])

  return (
    <>
      <Header close={() => navigation.navigate('Home')} />
      <Screen isScrollable>
        <Flex mx={8} mt={8} p={5} rounded="md" shadow={4} bg='primary.50' h='165'>
          <Flex justify="center" alignItems="center" >
            <Pressable onPress={() => {
              if (!isEdit) {
                setIsEdit(!isEdit)
              }
              if (isPermissionGranted) {
                ImagePicker.launchImageLibrary(config, imagePickerCallBack)
              } else {
                return
              }
            }}>
              {!photo ? (
                <Avatar
                  mt={5}
                  w="30"
                  h="30"
                  source={{ uri: 'https://jsl-online.com/wp-content/uploads/2017/01/placeholder-user.png' }}
                />
              ) : (
                <Flex align="center" justify="center">
                  <Image
                    style={{ width: 140, height: 140, borderRadius: 140 }}
                    source={{ uri: photo.assets[0].uri }}
                  />
                </Flex>

              )}

              {isEdit && (
                <Flex align="center">
                  <Text bold fontSize="lg" mt={2}>{!photo ? 'Mudar avatar' : 'Escolher outra imagem'}</Text>
                </Flex>
              )}
            </Pressable>

          </Flex>
          <Flex justify="center" direction="row" align="center" mt="5">
            <Heading mr="2">
              {capitalize(data.nome)}
            </Heading>
            <Pressable onPress={() => { setIsEdit(!isEdit) }}>
              <Icon name="pencil" size={30} />
            </Pressable>
            <Pressable onPress={() => { setIsDeleteModalOpen(true) }}>
              <Icon name="delete" size={30} />
            </Pressable>
          </Flex>
          <Flex align="center" my="3">
            <Text fontSize="lg" color="primary.300">{type.toUpperCase()}</Text>
          </Flex>

          {/* Form de edição */}
          {isEdit ? (
            <>
              <Flex mt='4'>
                <InputCustom
                  onTextChange={value => {
                    setUser({ ...user, email: value });
                  }}
                  value={user.email}
                  icon="email"
                  keyboardType="email-address"
                  label='E-mail'
                />
              </Flex>

              <Flex mt='4'>
                <InputCustom
                  onTextChange={value => {
                    setUser({ ...user, telefone: value });
                  }}
                  value={maskPhone(user.telefone)}
                  icon="phone"
                  keyboardType="numeric"
                  label="Telefone"
                />
              </Flex>

              {type === 'doador' || type === 'empresario' ? (
                <Flex mt='4'>
                  <InputCustom
                    onTextChange={value => {
                      setUser({ ...user, cpf: value });
                    }}
                    value={user.dados.cpf || ''}
                    icon="card-account-details"
                    keyboardType="numeric"
                    label="CPF"
                    placeholder="64346927068"
                  />
                </Flex>
              ) : (
                <Flex mt='4'>
                  <InputCustom
                    onTextChange={value => {
                      setUser({ ...user, cnpj: value });
                    }}
                    value={user.dados.cnpj || ''}
                    icon="card-account-details"
                    keyboardType="numeric"
                    label="CNPJ"
                    placeholder="74852500000198"
                  />
                </Flex>
              )}

              <Flex mt="8" mb="5">
                <Button
                  size="lg"
                >
                  SALVAR
                </Button>
              </Flex>
            </>

          ) : (
            <Flex mt="3">
              <Text mt={2} fontSize="lg">{`E-mail ${data.email}`}</Text>
              <Text mt={2} fontSize="lg">{`Telefone: ${data.telefone}`}</Text>
              {user.dados.cpf && (
                <Text>{`CPF: ${user.dados.cpf}`}</Text>
              )}
              {user.dados.cnpj && (
                <Text>{`CNPJ: ${user.dados.cnpj}`}</Text>
              )}
            </Flex>
          )}
        </Flex>
      </Screen>


      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>Tem certeza que deseja deletar sua conta?</Modal.Header>
          <Modal.Body>
            <Text fontSize="md">Essa ação não poderá ser desfeita!</Text>
          </Modal.Body>
          <Flex py={3} align="center" justify="center">
            <Button.Group space={2} mb={3}>
              <Button
                _text={{ color: 'black' }}
                bg="light.800"
                onPress={() => {
                  setIsDeleteModalOpen(false)
                }}
              >
                CANCELAR
              </Button>
              <Button
                bg="danger.400"
                onPress={() => {
                  deletarUsuario()
                  setIsDeleteModalOpen(false)
                }}
              >
                DELETAR
              </Button>
            </Button.Group>
          </Flex>
        </Modal.Content>
      </Modal>
    </>
  );
};
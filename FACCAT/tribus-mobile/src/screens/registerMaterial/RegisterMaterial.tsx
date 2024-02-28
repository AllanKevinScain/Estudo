import React, { useState, useEffect } from 'react';
import { Image, PermissionsAndroid } from 'react-native'
import { Center, Text, Flex, ScrollView, Pressable, Box } from "native-base";
import { SafeAreaView } from 'react-native';
import ButtonMain from '@app/components/buttons/ButtonMain';
import InputCustom from '@app/components/inputs/InputCustom';
import LinkUrl from '@app/components/gerais/linkUrl/LinkUrl';
import Header from '@app/components/gerais/header/Header';
import SelectCustom from '@app/components/inputs/SelectCustom';
import { ResponseData } from '@app/models/ResponseData';
import api from '@app/services/api';
import { useSelector } from 'react-redux';
const ImagePicker = require('react-native-image-picker');
interface Props {
  navigation: any
}
export const RegisterMaterial: React.FC<Props> = ({ navigation }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [photo, setPhoto] = useState<any>(null);
  const [imgBase64, setImgBase64] = useState<string>('');
  const [nome, setNome] = useState<string>('')
  const [peso, setPeso] = useState<string>('')
  const [tipoMaterial, setTipoMaterial] = useState<string>('')
  const [isPermissionGranted, setIsPermissionGranted] = useState<boolean>(false);

  const { data, type, cpf, cnpj } = useSelector((state: any) => state.user);

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

    console.log(data)

    if (data.didCancel) {
      return
    };

    if (data.error) {
      return
    };

    if (!data.assets[0].uri) {
      return
    };

    setPhoto(data.assets[0].uri);
    console.log(data)
    // setImgBase64(data.assets[0].base64);
    console.log(photo)
  };

  let config = {
    mediaType: 'photo',
    // includeBase64: true,
    maxHeight: 300,
    maxWidth: 300,
  }

  const cadastrarMaterial = async () => {

    const sendData = {
      user_id: data.id,
      tipo: 'doador',
      material: {
        nome: nome,
        peso: peso,
        tipo: tipoMaterial,
      }
    }

    try {
      setIsLoading(true)
      let formData = new FormData()
      formData.append('photo', {
        uri: photo, 
        type: 'image/jpeg',
        name: ''
      })
      formData.append('body', JSON.stringify(sendData))

      const response = await api.post<ResponseData<null>>('material/cadastro', formData)
      if (response.data.success) {
        navigation.navigate('Home')
      }
    } catch (error) {
      console.warn(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    requestMediaPermission()
  }, [])

  return (
    <ScrollView>
      <SafeAreaView>
        <Header icon="view-headline" action={() => navigation.openDrawer()} />
        <Box h='full' w='full' mt={15} px='12.5'>
          <Pressable onPress={() => {
            if (isPermissionGranted) {
              ImagePicker.launchImageLibrary(config, imagePickerCallBack)
            } else {
              return
            }
          }
          }>
            <Box mb='2.5' borderStyle='dashed' rounded='2xl' borderWidth='1.5'borderColor='black' h='75' justifyContent='center'>
              <Center>
                <Image
                  style={{ width: photo ? 300 : 120, height: photo ? 290 : 120 }}
                  source={photo ? { uri: photo } : require('../../assets/image/imagemUploader.png')}
                />
              </Center>
            </Box>
          </Pressable>
          <Flex>
            <Center>
              <Pressable onPress={() => {
                if (isPermissionGranted) {
                  ImagePicker.launchImageLibrary(config, imagePickerCallBack)
                } else {
                  return
                }
              }}>
                <Text color="primary.400" fontSize="md">Enviar Imagem</Text>
              </Pressable>
            </Center>
          </Flex>

          <Flex mt='4'>
            <InputCustom
              onTextChange={value => {
                setNome(value)
              }}
              icon="delete"
              placeholder='Papelão'
              label="Nome"
            />
          </Flex>

          <Flex mt='4'>
            <InputCustom
              onTextChange={value => {
                setPeso(value)
              }}
              icon="weight-kilogram"
              keyboardType="numeric"
              placeholder='5 KG '
              label="Peso"
            />
          </Flex>

          <Flex mt='4'>
            <SelectCustom
              onValueChange={(itemValue: string) => {
                setTipoMaterial(itemValue)
              }}
              selectedValue={tipoMaterial}
              label="Tipo de material"
              icon="delete-variant"
              items={types}
            />
          </Flex>

          <Flex mt='7'>
            <ButtonMain
              isLoading={isLoading}
              size="lg"
              onFunction={() => { cadastrarMaterial() }}
              customValue="Cadastrar Material"
            />
          </Flex>
          <Center mt='4'>
            <LinkUrl linkText="Voltar" onFunction={() => { navigation.goBack() }} />
          </Center>
        </Box>
      </SafeAreaView>
    </ScrollView >
  )
}

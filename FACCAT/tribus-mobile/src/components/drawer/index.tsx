import React from 'react';
import { Avatar, Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import { capitalize } from '@brazilian-utils/brazilian-utils';
import { TouchableOpacity } from 'react-native';

interface Props {
  name: string,
  component: any,
  options: any,
  navigation: any
};

const DrawerContent: React.FC<Props> = props => {

  const { data, type } = useSelector((state: any) => state.user);
  const navigation = useNavigation();

  return (
    <View flex={1}>
      <DrawerContentScrollView
        {...props}>
        <View flex={1}>
          <TouchableOpacity onPress={() => { navigation.navigate('UserProfile') }}>
            <View mt={2} flexDirection="row" alignItems="center">
              <Avatar
                ml={2}
                h={18}
                w={18}
                mr="1.5"
                source={{
                  uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXW1taioqLZ2dmfn5+3t7elpaXV1dWsrKzMzMzS0tK9vb2zs7PDw8OpqammpqbPz8/Hx8fVgbiGAAAFGUlEQVR4nO2c67abIBBGZVC8R9//aYtJjqKJGcQExtVv909Xm3jYh+vAYJYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD43zCpC3AO8iF1IcOhbGhKnmZIXdBQaCy1Vjxal9U167H10XtK5vf+eK0uWff+glaxTF3ew5hDgpPixRoqHWiiT8X8SoqGqqOCVvFSQyqVhwUvVYkmq49XoSV1uQ9ATYihHq9TiXQLqUJ1oeE0YJy5V2KduuC+UB4kqHSTuuR7bBdbpggzVLeXZipzKUdjWCO1lShzBW5jpGpNwGT4NGzXjxqGLLkyma692fhnRaig2j5Iq74dE0s26oSPn7NKOP7Q+Gu/h2SRqntSHsPv7tglUYwnOM2UCRTD1p7BiglqMXBlFqwYPXo0fVRBuyyPLBi3jU5Ej63C4qMzlHFXqJF74UTc2CrmTDEbRl3bhOw0naaN2REpgaDqoxoGR4AnYo9CvKFWZdtY8rZXIZqiDbUq2m5wDkWHrj0cl0g21GVXb4pHVHcHD2/kGuqyehunUzYecpRqqNX+couoO9AhhRrq1uwVbFqEUV16P0qm4T2u21tPmul//NfwMg1fW+iLrm2pFzasyCMg8N1BFmioq+3XKJv+bEZW41mL8gw3fXDKH2rLXvWlnfwdSe++KM7QPbU2dtBsejszPL6ndd+thlhqr2i4KhA1xfor+rbaPTMXNHTPkehd+pAu3UHIoytKM3TiVRrf/w6Us0PoEVNLM1xKvz8b2MH2rx49MnCEGTpVOHz4sLO7xFaiLEO3F37YeHSz2dh5X5ZhT3Pz+7gt5x65cKf/ogydgn9qo1Ox53bK7lDKMnwOIYYt9/K7YJenogzVXJia+aC6zcMplwwnynAZQNiZfJkxuFwxSYbLkpTf/neaKbM4FWW4rDn5M6q5vrkIQ5ThEtrzi5/b/FCmRYsynENf47FEn596JcPx74PMbHj/sO+oJMpwrkOPdOi5Di/VSuc69OiHxSXrsJs/yKeaLkkWVxpLl2Upu6Wt278dR27ulGS4RIf8LppT30yEKMqw8A0tlBMEc0fnogydzBCmYvSyGcDtY8gynJdt3BSwTCxsgxZlOC82DVeJSxUSlykny3DuXSarvD7nkWYly9DOF88g33xqfc4SnY+zZBmqm3Mks1t2dx+K3QyQZugm9e5dKF0E+f0ceYZKzZVo9hqqezbjEYSIM3QT7ah6OZpZX8L3SQUUZ7hJ6l3lB2ldru7CeJ0CizNcHUpM94eqvH9e9inzan0I/HlGkWvYu1+ZDrPJDNVYDdOJ9yqBofa6zifQ0D0Dnf9G23+wgn5J4wINN8e87zFU3y6bbWIVezb9nAbftH+RhrZYzDUJ6nyfJNVQ6fxt6p55tN/6wPszpBoqXXQ710DJdEcShcUaTr2xe1OPVDeeQ4x8w6ke8zFzXnllZ8bxcKK3aMP7fd4y76q6pnqourwMyNYXbviwPHXd+wKGJ3l948IvDeNfzov86hOvbMkv87f1Ewnf3OxvGm4zjn+Lx9nutymiCia4Yhn95TVDZMHNjkEEYl/mXg7h4uF/necbglGvyD7x21z5kmDPl+cHDMdCg1OCCV4WNf3IA/fOzgm28f2e0Fj8/h08+pb2XXydjYNeXu/0JabnFmVng8mUbzSjbBib/Fc04+P+cOp3tnm90jqIxGIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgCT8A2pLPXNGrB1lAAAAAElFTkSuQmCC"
                }}
              />
              <View ml={1} mr={3}>
                <Text fontSize="xl" mt="1.5" bold>{capitalize(data.nome)}</Text>
              </View>
            </View>
            <View mt={2} ml={5} mr={3}>
            <Text fontSize="lg" color="light.900">{data.email}</Text>
            </View>
          </TouchableOpacity>
          <View p="5">
            <View mr="5">
              <Text fontSize="lg" bold color="primary.300">{` - ${type.toUpperCase()}`}</Text>
            </View>
          </View>
        </View>

        <View>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon color={color} name="home-outline" size={size} />
            )}
            label="Home"
            onPress={() => props.navigation.navigate('Home')}
          />
          {type === 'doador' && (
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon color={color} name="alpha-r" size={size} />
                )}
                label="Cadastrar Material"
                onPress={() => props.navigation.navigate('RegistrarMateriais')}
              />
          )}

          <DrawerItem
            icon={({ color, size }) => (
              <Icon color={color} name="information-variant" size={size} />
            )}
            label="Sobre"
            onPress={() => props.navigation.navigate('Sobre')}
          />
          {/* <DrawerItem
            icon={({ color, size }) => (
              <Icon color={color} name="alert-octagram-outline" size={size} />
            )}
            label="Interesses"
            onPress={() => props.navigation.navigate('Interesses')}
          /> */}
          {/* <DrawerItem
            icon={({ color, size }) => (
              <Icon color={color} name="account-box-outline" size={size} />
            )}
            label="Perfil do Interessado"
            onPress={() => props.navigation.navigate('PerfilDoInteressado')}
          /> */}
        </View>

      </DrawerContentScrollView>
      <View mb="2.5" borderTopColor="primary.50" borderTopWidth="2">
        <DrawerItem
          icon={({ color, size }) => (
            <Icon color={color} name="exit-to-app" size={size} />
          )}
          label="Sair"
          onPress={() => props.navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default DrawerContent;
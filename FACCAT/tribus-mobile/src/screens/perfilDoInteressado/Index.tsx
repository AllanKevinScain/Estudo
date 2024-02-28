
import React, { useState } from 'react';
import { Avatar, FlatList, Flex, Pressable, Image, Text, ScrollView, Box, Divider, Button } from 'native-base';
import Header from '@app/components/gerais/header/Header';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import LinkUrl from '@app/components/gerais/linkUrl/LinkUrl';

interface Props {
    navigation: any
}
type Interesses = {
    id: number,
    interesse: string,
    icon: string,
}

export const PerfilDoInteressado: React.FC<Props> = ({ navigation }) => {

    const [material, setMaterial] = useState('Plástico');
    const [empresa, setEmpresa] = useState('Empresa');
    const [local, setLocal] = useState('Local');

    const data: Interesses[] = [
        { id: 0, interesse: "plastico", icon: 'email' },
        { id: 1, interesse: "metal", icon: 'email' },
        { id: 2, interesse: "papel", icon: 'email' },
    ];

    const RenderItem: React.FC<Interesses> = ({
        id,
        interesse,
        icon
    }) => {
        return (
            <>
                <Flex p="1.5" key={id} flexDirection="row" alignItems="center" justifyContent="space-around" bg="light.100">
                    <Flex flexDirection="row" alignItems="center" bg="light.100">
                        <Avatar
                            h="10"
                            w="10"
                            mr="1.5"
                            source={{
                                uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXW1taioqLZ2dmfn5+3t7elpaXV1dWsrKzMzMzS0tK9vb2zs7PDw8OpqammpqbPz8/Hx8fVgbiGAAAFGUlEQVR4nO2c67abIBBGZVC8R9//aYtJjqKJGcQExtVv909Xm3jYh+vAYJYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD43zCpC3AO8iF1IcOhbGhKnmZIXdBQaCy1Vjxal9U167H10XtK5vf+eK0uWff+glaxTF3ew5hDgpPixRoqHWiiT8X8SoqGqqOCVvFSQyqVhwUvVYkmq49XoSV1uQ9ATYihHq9TiXQLqUJ1oeE0YJy5V2KduuC+UB4kqHSTuuR7bBdbpggzVLeXZipzKUdjWCO1lShzBW5jpGpNwGT4NGzXjxqGLLkyma692fhnRaig2j5Iq74dE0s26oSPn7NKOP7Q+Gu/h2SRqntSHsPv7tglUYwnOM2UCRTD1p7BiglqMXBlFqwYPXo0fVRBuyyPLBi3jU5Ej63C4qMzlHFXqJF74UTc2CrmTDEbRl3bhOw0naaN2REpgaDqoxoGR4AnYo9CvKFWZdtY8rZXIZqiDbUq2m5wDkWHrj0cl0g21GVXb4pHVHcHD2/kGuqyehunUzYecpRqqNX+couoO9AhhRrq1uwVbFqEUV16P0qm4T2u21tPmul//NfwMg1fW+iLrm2pFzasyCMg8N1BFmioq+3XKJv+bEZW41mL8gw3fXDKH2rLXvWlnfwdSe++KM7QPbU2dtBsejszPL6ndd+thlhqr2i4KhA1xfor+rbaPTMXNHTPkehd+pAu3UHIoytKM3TiVRrf/w6Us0PoEVNLM1xKvz8b2MH2rx49MnCEGTpVOHz4sLO7xFaiLEO3F37YeHSz2dh5X5ZhT3Pz+7gt5x65cKf/ogydgn9qo1Ox53bK7lDKMnwOIYYt9/K7YJenogzVXJia+aC6zcMplwwnynAZQNiZfJkxuFwxSYbLkpTf/neaKbM4FWW4rDn5M6q5vrkIQ5ThEtrzi5/b/FCmRYsynENf47FEn596JcPx74PMbHj/sO+oJMpwrkOPdOi5Di/VSuc69OiHxSXrsJs/yKeaLkkWVxpLl2Upu6Wt278dR27ulGS4RIf8LppT30yEKMqw8A0tlBMEc0fnogydzBCmYvSyGcDtY8gynJdt3BSwTCxsgxZlOC82DVeJSxUSlykny3DuXSarvD7nkWYly9DOF88g33xqfc4SnY+zZBmqm3Mks1t2dx+K3QyQZugm9e5dKF0E+f0ceYZKzZVo9hqqezbjEYSIM3QT7ah6OZpZX8L3SQUUZ7hJ6l3lB2ldru7CeJ0CizNcHUpM94eqvH9e9inzan0I/HlGkWvYu1+ZDrPJDNVYDdOJ9yqBofa6zifQ0D0Dnf9G23+wgn5J4wINN8e87zFU3y6bbWIVezb9nAbftH+RhrZYzDUJ6nyfJNVQ6fxt6p55tN/6wPszpBoqXXQ710DJdEcShcUaTr2xe1OPVDeeQ4x8w6ke8zFzXnllZ8bxcKK3aMP7fd4y76q6pnqourwMyNYXbviwPHXd+wKGJ3l948IvDeNfzov86hOvbMkv87f1Ewnf3OxvGm4zjn+Lx9nutymiCia4Yhn95TVDZMHNjkEEYl/mXg7h4uF/necbglGvyD7x21z5kmDPl+cHDMdCg1OCCV4WNf3IA/fOzgm28f2e0Fj8/h08+pb2XXydjYNeXu/0JabnFmVng8mUbzSjbBib/Fc04+P+cOp3tnm90jqIxGIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgCT8A2pLPXNGrB1lAAAAAElFTkSuQmCC"
                            }}
                        />
                        <Text fontSize="2xl" bold color="light.900">{interesse}</Text>
                    </Flex>
                    <Pressable onPress={() => { }}>
                        <Text color="primary.300" fontSize="lg" bold>Aceitar</Text>
                    </Pressable>
                </Flex>
                <Divider bg="light.600" />
            </>
        );
    };

    return (
        <ScrollView>
            <Header icon="view-headline" action={() => navigation.openDrawer()} />

            <Flex mx="8" mt="8" mb={5} px="12" pt="8" rounded="md" shadow={4} bg='primary.50' h='210'>
                <Image
                    h="50"
                    w='full'
                    mb="5"
                    rounded="xl"
                    source={{
                        uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXW1taioqLZ2dmfn5+3t7elpaXV1dWsrKzMzMzS0tK9vb2zs7PDw8OpqammpqbPz8/Hx8fVgbiGAAAFGUlEQVR4nO2c67abIBBGZVC8R9//aYtJjqKJGcQExtVv909Xm3jYh+vAYJYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD43zCpC3AO8iF1IcOhbGhKnmZIXdBQaCy1Vjxal9U167H10XtK5vf+eK0uWff+glaxTF3ew5hDgpPixRoqHWiiT8X8SoqGqqOCVvFSQyqVhwUvVYkmq49XoSV1uQ9ATYihHq9TiXQLqUJ1oeE0YJy5V2KduuC+UB4kqHSTuuR7bBdbpggzVLeXZipzKUdjWCO1lShzBW5jpGpNwGT4NGzXjxqGLLkyma692fhnRaig2j5Iq74dE0s26oSPn7NKOP7Q+Gu/h2SRqntSHsPv7tglUYwnOM2UCRTD1p7BiglqMXBlFqwYPXo0fVRBuyyPLBi3jU5Ej63C4qMzlHFXqJF74UTc2CrmTDEbRl3bhOw0naaN2REpgaDqoxoGR4AnYo9CvKFWZdtY8rZXIZqiDbUq2m5wDkWHrj0cl0g21GVXb4pHVHcHD2/kGuqyehunUzYecpRqqNX+couoO9AhhRrq1uwVbFqEUV16P0qm4T2u21tPmul//NfwMg1fW+iLrm2pFzasyCMg8N1BFmioq+3XKJv+bEZW41mL8gw3fXDKH2rLXvWlnfwdSe++KM7QPbU2dtBsejszPL6ndd+thlhqr2i4KhA1xfor+rbaPTMXNHTPkehd+pAu3UHIoytKM3TiVRrf/w6Us0PoEVNLM1xKvz8b2MH2rx49MnCEGTpVOHz4sLO7xFaiLEO3F37YeHSz2dh5X5ZhT3Pz+7gt5x65cKf/ogydgn9qo1Ox53bK7lDKMnwOIYYt9/K7YJenogzVXJia+aC6zcMplwwnynAZQNiZfJkxuFwxSYbLkpTf/neaKbM4FWW4rDn5M6q5vrkIQ5ThEtrzi5/b/FCmRYsynENf47FEn596JcPx74PMbHj/sO+oJMpwrkOPdOi5Di/VSuc69OiHxSXrsJs/yKeaLkkWVxpLl2Upu6Wt278dR27ulGS4RIf8LppT30yEKMqw8A0tlBMEc0fnogydzBCmYvSyGcDtY8gynJdt3BSwTCxsgxZlOC82DVeJSxUSlykny3DuXSarvD7nkWYly9DOF88g33xqfc4SnY+zZBmqm3Mks1t2dx+K3QyQZugm9e5dKF0E+f0ceYZKzZVo9hqqezbjEYSIM3QT7ah6OZpZX8L3SQUUZ7hJ6l3lB2ldru7CeJ0CizNcHUpM94eqvH9e9inzan0I/HlGkWvYu1+ZDrPJDNVYDdOJ9yqBofa6zifQ0D0Dnf9G23+wgn5J4wINN8e87zFU3y6bbWIVezb9nAbftH+RhrZYzDUJ6nyfJNVQ6fxt6p55tN/6wPszpBoqXXQ710DJdEcShcUaTr2xe1OPVDeeQ4x8w6ke8zFzXnllZ8bxcKK3aMP7fd4y76q6pnqourwMyNYXbviwPHXd+wKGJ3l948IvDeNfzov86hOvbMkv87f1Ewnf3OxvGm4zjn+Lx9nutymiCia4Yhn95TVDZMHNjkEEYl/mXg7h4uF/necbglGvyD7x21z5kmDPl+cHDMdCg1OCCV4WNf3IA/fOzgm28f2e0Fj8/h08+pb2XXydjYNeXu/0JabnFmVng8mUbzSjbBib/Fc04+P+cOp3tnm90jqIxGIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgCT8A2pLPXNGrB1lAAAAAElFTkSuQmCC"
                    }}
                />
                <Text color="dark.100" bold fontSize="xl">
                    Tipo de Materal:
                    <Text color="dark.100" bold fontSize="xl"> {material}</Text>
                </Text>
                <Text color="dark.100" bold fontSize="xl">
                    Quantidade:
                    <Text color="dark.100" bold fontSize="xl">5 KG</Text>
                </Text>
                <Text color="dark.100" bold fontSize="xl">
                    Local de encontro:
                    <Text color="dark.100" bold fontSize="xl"> {local}</Text>
                </Text>
                <Image
                    h="50"
                    w='full'
                    my="5"
                    rounded="xl"
                    source={{
                        uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXW1taioqLZ2dmfn5+3t7elpaXV1dWsrKzMzMzS0tK9vb2zs7PDw8OpqammpqbPz8/Hx8fVgbiGAAAFGUlEQVR4nO2c67abIBBGZVC8R9//aYtJjqKJGcQExtVv909Xm3jYh+vAYJYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD43zCpC3AO8iF1IcOhbGhKnmZIXdBQaCy1Vjxal9U167H10XtK5vf+eK0uWff+glaxTF3ew5hDgpPixRoqHWiiT8X8SoqGqqOCVvFSQyqVhwUvVYkmq49XoSV1uQ9ATYihHq9TiXQLqUJ1oeE0YJy5V2KduuC+UB4kqHSTuuR7bBdbpggzVLeXZipzKUdjWCO1lShzBW5jpGpNwGT4NGzXjxqGLLkyma692fhnRaig2j5Iq74dE0s26oSPn7NKOP7Q+Gu/h2SRqntSHsPv7tglUYwnOM2UCRTD1p7BiglqMXBlFqwYPXo0fVRBuyyPLBi3jU5Ej63C4qMzlHFXqJF74UTc2CrmTDEbRl3bhOw0naaN2REpgaDqoxoGR4AnYo9CvKFWZdtY8rZXIZqiDbUq2m5wDkWHrj0cl0g21GVXb4pHVHcHD2/kGuqyehunUzYecpRqqNX+couoO9AhhRrq1uwVbFqEUV16P0qm4T2u21tPmul//NfwMg1fW+iLrm2pFzasyCMg8N1BFmioq+3XKJv+bEZW41mL8gw3fXDKH2rLXvWlnfwdSe++KM7QPbU2dtBsejszPL6ndd+thlhqr2i4KhA1xfor+rbaPTMXNHTPkehd+pAu3UHIoytKM3TiVRrf/w6Us0PoEVNLM1xKvz8b2MH2rx49MnCEGTpVOHz4sLO7xFaiLEO3F37YeHSz2dh5X5ZhT3Pz+7gt5x65cKf/ogydgn9qo1Ox53bK7lDKMnwOIYYt9/K7YJenogzVXJia+aC6zcMplwwnynAZQNiZfJkxuFwxSYbLkpTf/neaKbM4FWW4rDn5M6q5vrkIQ5ThEtrzi5/b/FCmRYsynENf47FEn596JcPx74PMbHj/sO+oJMpwrkOPdOi5Di/VSuc69OiHxSXrsJs/yKeaLkkWVxpLl2Upu6Wt278dR27ulGS4RIf8LppT30yEKMqw8A0tlBMEc0fnogydzBCmYvSyGcDtY8gynJdt3BSwTCxsgxZlOC82DVeJSxUSlykny3DuXSarvD7nkWYly9DOF88g33xqfc4SnY+zZBmqm3Mks1t2dx+K3QyQZugm9e5dKF0E+f0ceYZKzZVo9hqqezbjEYSIM3QT7ah6OZpZX8L3SQUUZ7hJ6l3lB2ldru7CeJ0CizNcHUpM94eqvH9e9inzan0I/HlGkWvYu1+ZDrPJDNVYDdOJ9yqBofa6zifQ0D0Dnf9G23+wgn5J4wINN8e87zFU3y6bbWIVezb9nAbftH+RhrZYzDUJ6nyfJNVQ6fxt6p55tN/6wPszpBoqXXQ710DJdEcShcUaTr2xe1OPVDeeQ4x8w6ke8zFzXnllZ8bxcKK3aMP7fd4y76q6pnqourwMyNYXbviwPHXd+wKGJ3l948IvDeNfzov86hOvbMkv87f1Ewnf3OxvGm4zjn+Lx9nutymiCia4Yhn95TVDZMHNjkEEYl/mXg7h4uF/necbglGvyD7x21z5kmDPl+cHDMdCg1OCCV4WNf3IA/fOzgm28f2e0Fj8/h08+pb2XXydjYNeXu/0JabnFmVng8mUbzSjbBib/Fc04+P+cOp3tnm90jqIxGIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgCT8A2pLPXNGrB1lAAAAAElFTkSuQmCC"
                    }}
                />
                <Flex mb="2.5" mt="6" flexDirection="row" alignItems="center">
                    <Avatar
                        h="20"
                        w="20"
                        mr="1.5"
                        source={{
                            uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXW1taioqLZ2dmfn5+3t7elpaXV1dWsrKzMzMzS0tK9vb2zs7PDw8OpqammpqbPz8/Hx8fVgbiGAAAFGUlEQVR4nO2c67abIBBGZVC8R9//aYtJjqKJGcQExtVv909Xm3jYh+vAYJYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD43zCpC3AO8iF1IcOhbGhKnmZIXdBQaCy1Vjxal9U167H10XtK5vf+eK0uWff+glaxTF3ew5hDgpPixRoqHWiiT8X8SoqGqqOCVvFSQyqVhwUvVYkmq49XoSV1uQ9ATYihHq9TiXQLqUJ1oeE0YJy5V2KduuC+UB4kqHSTuuR7bBdbpggzVLeXZipzKUdjWCO1lShzBW5jpGpNwGT4NGzXjxqGLLkyma692fhnRaig2j5Iq74dE0s26oSPn7NKOP7Q+Gu/h2SRqntSHsPv7tglUYwnOM2UCRTD1p7BiglqMXBlFqwYPXo0fVRBuyyPLBi3jU5Ej63C4qMzlHFXqJF74UTc2CrmTDEbRl3bhOw0naaN2REpgaDqoxoGR4AnYo9CvKFWZdtY8rZXIZqiDbUq2m5wDkWHrj0cl0g21GVXb4pHVHcHD2/kGuqyehunUzYecpRqqNX+couoO9AhhRrq1uwVbFqEUV16P0qm4T2u21tPmul//NfwMg1fW+iLrm2pFzasyCMg8N1BFmioq+3XKJv+bEZW41mL8gw3fXDKH2rLXvWlnfwdSe++KM7QPbU2dtBsejszPL6ndd+thlhqr2i4KhA1xfor+rbaPTMXNHTPkehd+pAu3UHIoytKM3TiVRrf/w6Us0PoEVNLM1xKvz8b2MH2rx49MnCEGTpVOHz4sLO7xFaiLEO3F37YeHSz2dh5X5ZhT3Pz+7gt5x65cKf/ogydgn9qo1Ox53bK7lDKMnwOIYYt9/K7YJenogzVXJia+aC6zcMplwwnynAZQNiZfJkxuFwxSYbLkpTf/neaKbM4FWW4rDn5M6q5vrkIQ5ThEtrzi5/b/FCmRYsynENf47FEn596JcPx74PMbHj/sO+oJMpwrkOPdOi5Di/VSuc69OiHxSXrsJs/yKeaLkkWVxpLl2Upu6Wt278dR27ulGS4RIf8LppT30yEKMqw8A0tlBMEc0fnogydzBCmYvSyGcDtY8gynJdt3BSwTCxsgxZlOC82DVeJSxUSlykny3DuXSarvD7nkWYly9DOF88g33xqfc4SnY+zZBmqm3Mks1t2dx+K3QyQZugm9e5dKF0E+f0ceYZKzZVo9hqqezbjEYSIM3QT7ah6OZpZX8L3SQUUZ7hJ6l3lB2ldru7CeJ0CizNcHUpM94eqvH9e9inzan0I/HlGkWvYu1+ZDrPJDNVYDdOJ9yqBofa6zifQ0D0Dnf9G23+wgn5J4wINN8e87zFU3y6bbWIVezb9nAbftH+RhrZYzDUJ6nyfJNVQ6fxt6p55tN/6wPszpBoqXXQ710DJdEcShcUaTr2xe1OPVDeeQ4x8w6ke8zFzXnllZ8bxcKK3aMP7fd4y76q6pnqourwMyNYXbviwPHXd+wKGJ3l948IvDeNfzov86hOvbMkv87f1Ewnf3OxvGm4zjn+Lx9nutymiCia4Yhn95TVDZMHNjkEEYl/mXg7h4uF/necbglGvyD7x21z5kmDPl+cHDMdCg1OCCV4WNf3IA/fOzgm28f2e0Fj8/h08+pb2XXydjYNeXu/0JabnFmVng8mUbzSjbBib/Fc04+P+cOp3tnm90jqIxGIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgCT8A2pLPXNGrB1lAAAAAElFTkSuQmCC"
                        }}
                    />
                    <Flex>
                        <Text fontSize="2xl" bold color="dark.800">Catador</Text>
                        <Text fontSize="2xl" bold color="light.900">Paulinho</Text>
                        <Flex flexDirection="row">
                            <Icon color="#ffc107" name="star" size={15} />
                            <Icon color="#ffc107" name="star" size={15} />
                            <Icon color="#ffc107" name="star" size={15} />
                            <Icon color="#ffc107" name="star" size={15} />
                            <Icon color="#ffc107" name="star" size={15} />
                        </Flex>
                    </Flex>
                </Flex>
                <Flex>
                    <Button size="lg" my="2.5">
                        <Text fontSize="md" color="primary.50">Confirmar Interesse</Text>
                    </Button>
                    <Button size="lg" mt="2.5" bg="primary.200">
                        <Text fontSize="md" color="primary.50">Cancelar Interesse</Text>
                    </Button>
                </Flex>

            </Flex>

            <Flex mb={5} align="center" justify="center">
                <LinkUrl linkText="Voltar" onFunction={() => { navigation.goBack() }} />
            </Flex>
        </ScrollView >
    );
};
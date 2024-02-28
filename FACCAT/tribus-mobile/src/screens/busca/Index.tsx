
import React from 'react';
import { Linking } from 'react-native'
import { Avatar, Box, FlatList, Flex, QuestionIcon, Text } from 'native-base';
import ButtonMain from '@app/components/buttons/ButtonMain';
import Card from '@app/components/gerais/card/Card';
import faker from 'faker';
import Styles from './styles';
import Header from '@app/components/gerais/header/Header';

interface Props {
    navigation: any
}

type Cards = {
    id: number,
    foto: string,
    titulo: string,
    peso: string,
    endereco: string,
    latlng: [
        number, // lat 
        number // lng
    ]
}

const user = {
    tipoUsuario: 'empresa',
}

const Item: React.FC<Cards> = ({
    endereco,
    foto,
    id,
    latlng,
    peso,
    titulo
}) => {

    const url = 'https://api.whatsapp.com/send?phone=5180242657&text=Vi%20seu%20material%20no%20aplicativo%20da%20tRibus%20e%20estou%20interessado!'

    return (
        <Card padding={8} borderColor="primary.300" borderWidth='0.25'>
            <Flex>
                <Box>
                    <Flex direction='row' style={Styles.containerImage}>
                        <Box mr={5}>
                            <Avatar
                                h={20}
                                w={20}
                                source={{
                                    uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXW1taioqLZ2dmfn5+3t7elpaXV1dWsrKzMzMzS0tK9vb2zs7PDw8OpqammpqbPz8/Hx8fVgbiGAAAFGUlEQVR4nO2c67abIBBGZVC8R9//aYtJjqKJGcQExtVv909Xm3jYh+vAYJYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD43zCpC3AO8iF1IcOhbGhKnmZIXdBQaCy1Vjxal9U167H10XtK5vf+eK0uWff+glaxTF3ew5hDgpPixRoqHWiiT8X8SoqGqqOCVvFSQyqVhwUvVYkmq49XoSV1uQ9ATYihHq9TiXQLqUJ1oeE0YJy5V2KduuC+UB4kqHSTuuR7bBdbpggzVLeXZipzKUdjWCO1lShzBW5jpGpNwGT4NGzXjxqGLLkyma692fhnRaig2j5Iq74dE0s26oSPn7NKOP7Q+Gu/h2SRqntSHsPv7tglUYwnOM2UCRTD1p7BiglqMXBlFqwYPXo0fVRBuyyPLBi3jU5Ej63C4qMzlHFXqJF74UTc2CrmTDEbRl3bhOw0naaN2REpgaDqoxoGR4AnYo9CvKFWZdtY8rZXIZqiDbUq2m5wDkWHrj0cl0g21GVXb4pHVHcHD2/kGuqyehunUzYecpRqqNX+couoO9AhhRrq1uwVbFqEUV16P0qm4T2u21tPmul//NfwMg1fW+iLrm2pFzasyCMg8N1BFmioq+3XKJv+bEZW41mL8gw3fXDKH2rLXvWlnfwdSe++KM7QPbU2dtBsejszPL6ndd+thlhqr2i4KhA1xfor+rbaPTMXNHTPkehd+pAu3UHIoytKM3TiVRrf/w6Us0PoEVNLM1xKvz8b2MH2rx49MnCEGTpVOHz4sLO7xFaiLEO3F37YeHSz2dh5X5ZhT3Pz+7gt5x65cKf/ogydgn9qo1Ox53bK7lDKMnwOIYYt9/K7YJenogzVXJia+aC6zcMplwwnynAZQNiZfJkxuFwxSYbLkpTf/neaKbM4FWW4rDn5M6q5vrkIQ5ThEtrzi5/b/FCmRYsynENf47FEn596JcPx74PMbHj/sO+oJMpwrkOPdOi5Di/VSuc69OiHxSXrsJs/yKeaLkkWVxpLl2Upu6Wt278dR27ulGS4RIf8LppT30yEKMqw8A0tlBMEc0fnogydzBCmYvSyGcDtY8gynJdt3BSwTCxsgxZlOC82DVeJSxUSlykny3DuXSarvD7nkWYly9DOF88g33xqfc4SnY+zZBmqm3Mks1t2dx+K3QyQZugm9e5dKF0E+f0ceYZKzZVo9hqqezbjEYSIM3QT7ah6OZpZX8L3SQUUZ7hJ6l3lB2ldru7CeJ0CizNcHUpM94eqvH9e9inzan0I/HlGkWvYu1+ZDrPJDNVYDdOJ9yqBofa6zifQ0D0Dnf9G23+wgn5J4wINN8e87zFU3y6bbWIVezb9nAbftH+RhrZYzDUJ6nyfJNVQ6fxt6p55tN/6wPszpBoqXXQ710DJdEcShcUaTr2xe1OPVDeeQ4x8w6ke8zFzXnllZ8bxcKK3aMP7fd4y76q6pnqourwMyNYXbviwPHXd+wKGJ3l948IvDeNfzov86hOvbMkv87f1Ewnf3OxvGm4zjn+Lx9nutymiCia4Yhn95TVDZMHNjkEEYl/mXg7h4uF/necbglGvyD7x21z5kmDPl+cHDMdCg1OCCV4WNf3IA/fOzgm28f2e0Fj8/h08+pb2XXydjYNeXu/0JabnFmVng8mUbzSjbBib/Fc04+P+cOp3tnm90jqIxGIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgCT8A2pLPXNGrB1lAAAAAElFTkSuQmCC"
                                }}
                            />
                        </Box>
                        <Box>
                            <Text fontSize="lg" bold>Plástico</Text>
                            <Text fontSize="lg" bold>5 KG</Text>
                            <Text fontSize="lg" bold>Rua Maria Francisco da Silva -</Text>
                            <Text fontSize="lg" bold>60 - Guarani</Text>
                        </Box>
                    </Flex>

                    <Box mt={8} mb={2}>
                        <ButtonMain onFunction={async () => { await Linking.openURL(url) }} size="lg" customValue='Estou interessado' />
                    </Box>
                </Box>
            </Flex>
        </Card>
    )
}

export const Busca: React.FC<Props> = ({ navigation }) => {
    const cards: Cards[] = [];

    for (let x = 0; x <= 10; x++) {
        cards.push(
            {
                id: x,
                endereco: faker.address.streetAddress(),
                foto: "",
                latlng: [
                    x,
                    x,
                ],
                peso: "5 KG",
                titulo: faker.lorem.words(2)
            }
        );
    };
    return (
        <>
            <Header icon="view-headline" action={() => navigation.openDrawer()} />
            <FlatList
                p='2.5'
                data={cards}
                ItemSeparatorComponent={() => {
                    return (<Box h={5} />);
                }}
                renderItem={({ item }: { item: Cards }) => (
                    <Item
                        endereco={item.endereco}
                        foto={item.foto}
                        titulo={item.titulo}
                        peso={item.peso}
                        id={item.id}
                        latlng={item.latlng}
                    />
                )}
            />
        </>
    );
};
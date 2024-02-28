import React, { useState, useEffect } from 'react';
import { Linking } from 'react-native';
import { Image, Box, FlatList, Flex, Heading, Text, Pressable } from 'native-base';
import Card from '@app/components/gerais/card/Card';
import Header from '@app/components/gerais/header/Header';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import LinkUrl from '@app/components/gerais/linkUrl/LinkUrl';
import api, { baseUrl } from '@app/services/api';
import { ResponseData } from '@app/models/ResponseData';
import Loading from '@app/components/Loading'
import { maskPhone } from '@lighthouseapps/utils';

interface Props {
    navigation: any
}

type Cards = {
    item: {
        telefone: string;
        nome: string;
        url_foto: string;
        nomeMaterial: string;
        tipoMaterial: string;
        pesoMaterial: string;
    }
}

const Item: React.FC<Cards> = ({
    item
}) => {

    console.log('itens')
    console.log(item)

    const talkByWhatsapp = async (phone: string) => {
        const prefix: string = '+55';
        let cont: number = 0;

        // separa o numero em uma array
        let phoneArr = phone.split('');

        // remove o terceiro digito
        phoneArr.splice(2, 1);

        // volta a array como string no phone
        phone = phoneArr.join('');

        // for (cont = 0; cont < phone.length; cont++) {

        //     /* 
        //         se o numero for igual 9 E
        //         o nosso contador for menor que 6 E
        //         o próximo numero foi igual a 8 ou 9 = vai trocar 9 por ''
        //     */

        //     if ((phone[cont] === '9') && (cont >= 6) && (phone[cont + 1] === '9' || phone[cont + 1] === '8')) {
        //         phone = phone[cont].replace('9', '');
        //     };
        //     if (phone[cont] === '-') {
        //         phone = phone[cont].replace('-', '');
        //     };
        // };

        phone = prefix + phone
        console.log(phone);
        const texto = "Estou interessado no seu material que encontrei na tRibus..."
        const whatsappMsg = encodeURIComponent(texto);
        const url = `https://api.whatsapp.com/send?phone=${phone}&text=${whatsappMsg}`;

        await Linking.openURL(url);
    };

    return (
        <>
            <Flex direction="row" align="center">
                <Text bold fontSize="lg" my="2" ml="2">{item.nome} -</Text>
                <Text color="gray.700" bold fontSize="lg" my="2"> {item.telefone && maskPhone(item.telefone)}</Text>
            </Flex>
            <Card padding={8} borderColor="primary.300" borderWidth='0.25'>
                <Flex>
                    <Box>
                        <Flex direction='row' alignItems='center'>
                            <Box mr={5} bg="primary.100" rounded="xl">
                                <Image
                                    h={20}
                                    w={20}
                                    rounded="xl"
                                    source={{
                                        uri: item.url_foto ? baseUrl + item.url_foto : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXW1taioqLZ2dmfn5+3t7elpaXV1dWsrKzMzMzS0tK9vb2zs7PDw8OpqammpqbPz8/Hx8fVgbiGAAAFGUlEQVR4nO2c67abIBBGZVC8R9//aYtJjqKJGcQExtVv909Xm3jYh+vAYJYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD43zCpC3AO8iF1IcOhbGhKnmZIXdBQaCy1Vjxal9U167H10XtK5vf+eK0uWff+glaxTF3ew5hDgpPixRoqHWiiT8X8SoqGqqOCVvFSQyqVhwUvVYkmq49XoSV1uQ9ATYihHq9TiXQLqUJ1oeE0YJy5V2KduuC+UB4kqHSTuuR7bBdbpggzVLeXZipzKUdjWCO1lShzBW5jpGpNwGT4NGzXjxqGLLkyma692fhnRaig2j5Iq74dE0s26oSPn7NKOP7Q+Gu/h2SRqntSHsPv7tglUYwnOM2UCRTD1p7BiglqMXBlFqwYPXo0fVRBuyyPLBi3jU5Ej63C4qMzlHFXqJF74UTc2CrmTDEbRl3bhOw0naaN2REpgaDqoxoGR4AnYo9CvKFWZdtY8rZXIZqiDbUq2m5wDkWHrj0cl0g21GVXb4pHVHcHD2/kGuqyehunUzYecpRqqNX+couoO9AhhRrq1uwVbFqEUV16P0qm4T2u21tPmul//NfwMg1fW+iLrm2pFzasyCMg8N1BFmioq+3XKJv+bEZW41mL8gw3fXDKH2rLXvWlnfwdSe++KM7QPbU2dtBsejszPL6ndd+thlhqr2i4KhA1xfor+rbaPTMXNHTPkehd+pAu3UHIoytKM3TiVRrf/w6Us0PoEVNLM1xKvz8b2MH2rx49MnCEGTpVOHz4sLO7xFaiLEO3F37YeHSz2dh5X5ZhT3Pz+7gt5x65cKf/ogydgn9qo1Ox53bK7lDKMnwOIYYt9/K7YJenogzVXJia+aC6zcMplwwnynAZQNiZfJkxuFwxSYbLkpTf/neaKbM4FWW4rDn5M6q5vrkIQ5ThEtrzi5/b/FCmRYsynENf47FEn596JcPx74PMbHj/sO+oJMpwrkOPdOi5Di/VSuc69OiHxSXrsJs/yKeaLkkWVxpLl2Upu6Wt278dR27ulGS4RIf8LppT30yEKMqw8A0tlBMEc0fnogydzBCmYvSyGcDtY8gynJdt3BSwTCxsgxZlOC82DVeJSxUSlykny3DuXSarvD7nkWYly9DOF88g33xqfc4SnY+zZBmqm3Mks1t2dx+K3QyQZugm9e5dKF0E+f0ceYZKzZVo9hqqezbjEYSIM3QT7ah6OZpZX8L3SQUUZ7hJ6l3lB2ldru7CeJ0CizNcHUpM94eqvH9e9inzan0I/HlGkWvYu1+ZDrPJDNVYDdOJ9yqBofa6zifQ0D0Dnf9G23+wgn5J4wINN8e87zFU3y6bbWIVezb9nAbftH+RhrZYzDUJ6nyfJNVQ6fxt6p55tN/6wPszpBoqXXQ710DJdEcShcUaTr2xe1OPVDeeQ4x8w6ke8zFzXnllZ8bxcKK3aMP7fd4y76q6pnqourwMyNYXbviwPHXd+wKGJ3l948IvDeNfzov86hOvbMkv87f1Ewnf3OxvGm4zjn+Lx9nutymiCia4Yhn95TVDZMHNjkEEYl/mXg7h4uF/necbglGvyD7x21z5kmDPl+cHDMdCg1OCCV4WNf3IA/fOzgm28f2e0Fj8/h08+pb2XXydjYNeXu/0JabnFmVng8mUbzSjbBib/Fc04+P+cOp3tnm90jqIxGIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgCT8A2pLPXNGrB1lAAAAAElFTkSuQmCC"
                                    }}
                                />
                            </Box>


                            {/* <Flex flex={1} direction="row" align="center" justify="start"> */}
                            <Heading fontSize="5xl" bold color="primary.200">{item.nomeMaterial}</Heading>
                            {/* </Flex> */}

                        </Flex>

                        <Flex justify="center" align="center" mt="2">
                            <Text fontSize="md">{`Peso: ${item.pesoMaterial} ${Number(item.pesoMaterial) < 1000 ? 'Kg' : 'g'}`}</Text>
                            <Text fontSize="md">{`Tipo de material: ${item.tipoMaterial}`}</Text>
                        </Flex>

                        <Box mt={7} mb={2}>
                            <Pressable onPress={() => { talkByWhatsapp(item.telefone) }}>
                                <Flex rounded="2xl" h={12} bg="primary.300" align="center" justify="center">
                                    <Text bold color="white" fontSize="lg">Estou Interessado</Text>
                                </Flex>
                                <Flex position="absolute" bottom={2} right={13}>
                                    <Icon color="#fff" name="whatsapp" size={30} />
                                </Flex>
                            </Pressable>
                        </Box>
                    </Box>
                </Flex>
            </Card>
        </>
    )
}

export const Materiais: React.FC<Props> = ({ navigation }) => {

    const { data, type } = useSelector((state: any) => state.user);
    const [isLoading, setIsLoading] = useState(false);
    const [materiais, setMateriais] = useState([])
    const [isRefreshing, setIsRefreshing] = useState(false);

    // -----> Dados vindos do redux - user store
    // console.log('user data: ');
    // console.log(data);
    // console.log(type)

    const getMaterials = async () => {
        try {
            setIsLoading(true);
            const response = await api.get<ResponseData<any>>('materiais')
            console.log(response)
            if (response.data.success) {
                setMateriais(response.data.data)
            }
        } catch (error) {
            console.warn(error)
        } finally {
            setIsRefreshing(false);
            setIsLoading(false);
        }
    }

    const onRefresh = () => {
        setIsRefreshing(true);
        setIsLoading(true);
        getMaterials();
    };

    useEffect(() => {
        onRefresh()
    }, [])

    return (
        <>
            <Header icon="view-headline" action={() => navigation.openDrawer()} />
            {type === 'empresa' || type === 'coletor' ? (
                <>
                    {!isLoading ? (
                        <FlatList
                            p='2.5'
                            data={materiais}
                            ItemSeparatorComponent={() => {
                                return (<Box h={5} />);
                            }}
                            ListFooterComponent={
                                <Box mb="10" />
                            }
                            refreshing={isLoading && isRefreshing}
                            onRefresh={onRefresh}
                            renderItem={({ item }: { item }) => (
                                <Item
                                    item={item}
                                />
                            )}
                        />
                    ) : (
                        <Flex flex={1} align="center" justify="center">
                            <Loading />
                        </Flex>
                    )}
                </>
            ) : (
                <Flex flex={1} align="center" justify="center">
                    <Icon name="recycle" size={150} color="#40BD4C" />
                    <Text fontSize="lg">Possui algum material para doar ?</Text>
                    <LinkUrl size="lg" linkText="Clique aqui" onFunction={() => { navigation.navigate('RegistrarMateriais') }} />
                </Flex>
            )}
        </>
    );
};

import React, { useState } from 'react';
import { FlatList, Flex, Heading, Image, Text, ScrollView } from 'native-base';
import Header from '@app/components/gerais/header/Header';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

interface Props {
    navigation: any
}
type Interesses = {
    id: number,
    interesse: string,
    icon: string,
}

export const Perfis: React.FC<Props> = ({ navigation }) => {

    const [name, setName] = useState('Ana Júlia');
    const [nameBusines, setNameBusines] = useState('Empresa');
    const [descriptionBusines, setDescriptionBusines] = useState('Descrição da empresa');

    const data: Interesses[] = [
        { id: 0, interesse: "plastico", icon: 'view-list' },
        { id: 1, interesse: "metal", icon: 'view-list' },
        { id: 2, interesse: "papel", icon: 'view-list' },
    ];

    const RenderItem: React.FC<Interesses> = ({
        id,
        interesse,
        icon
    }) => {
        return (
            <>
                <Flex key={id} flexDirection="row" alignItems="center">
                    <Icon color="#f00" name={icon} size={25} />
                    <Text fontSize="md" ml={2}>{interesse}</Text>
                </Flex>
            </>
        );
    };

    return (
        <ScrollView>
            <Header icon="view-headline" action={() => navigation.openDrawer()} />

            <Flex mx={8} mt={8} p={5} rounded="md" shadow={4} bg='primary.50' h='165'>
                {/* Perfil */}
                <Flex flexDirection="row" alignItems="center" >
                    <Image
                        mt={5}
                        w="40"
                        h="40"
                        source={require('../../assets/image/perfil.png')}
                    />
                    <Flex mx={3}>
                        <Heading
                            color="primary.400"
                            fontSize="xl"
                            fontWeight="bold"
                            mt="5"
                        >
                            {name}
                        </Heading>
                        <Text>{nameBusines}</Text>
                        <Text>{descriptionBusines}</Text>
                    </Flex>
                </Flex>
                <Flex>
                    <Text my={2} fontSize="lg" fontWeight="bold">Em busca de: </Text>
                    <FlatList
                        data={data}
                        renderItem={({ item }: { item: Interesses }) => (
                            <RenderItem
                                id={item.id}
                                interesse={item.interesse}
                                icon={item.icon}
                            />
                        )}
                    />

                </Flex>
            </Flex>

        </ScrollView >
    );
};
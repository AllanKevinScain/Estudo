import React from 'react';
import { Flex, Text } from 'native-base'
import Header from '@app/components/gerais/header/Header';
import Card from '@app/components/gerais/card/Card';
import Screen from '@app/components/Screen';
import { Image } from 'react-native';
import LinkUrl from '@app/components/gerais/linkUrl/LinkUrl';

interface Props {
  navigation: any
}
export const Sobre: React.FC<Props> = ({ navigation }) => {

  return (
    <>
      <Header icon="view-headline" action={() => navigation.openDrawer()} />
      <Screen isScrollable padding={5}>
        <Flex mt={3} mx={2} justify="center" align="center">
          <Image style={{ width: '55%', height: 70, marginBottom: 20 }} source={require('@app/assets/image/logo.png')} />
          <Card padding={3}>
            <Flex my={2} align="center" justify="center">
              <Text fontSize="lg" bold>Sobre a tRibus</Text>
            </Flex>
            <Text fontSize="lg">
              TRibus se trata de um projeto destinado a incentivar a reciclagem e venda de materiais reciclavéis.
              Buscamos introduzir a ideia de coleta de materiais ao indivíduo domiciliar, tendo vários coletores disponíveis que possam se interessar pelo material. Essa ideia surgiu depois de verificarmos o quanto o Brasil ainda precisa melhorar no quesito reciclagem. Sabia que somente 1 a cada 12 brasileiros possue acesso a reciclagem de materiais sólidos?
              Com isso, TRibus é o aplicativo que tem a intenção de aumentar esses números e também ajudar tanto os coletores de tais materiais para coletar e vender esses por meio do aplicativo. Disponibilizamos espaço para empresas para que possam verificar esses materiais e ofertar encima desses.
              Esperamos que gostem! -Time TRibus
            </Text>
          </Card>
        </Flex>
        <Flex my="4" justify="center" align="center">
          <LinkUrl size="lg" linkText="Voltar" onFunction={() => { navigation.goBack() }} />
        </Flex>
      </Screen>
    </>
  )
}


import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import ButtonMain from '@app/components/buttons/ButtonMain';
import styles from '@app/styles/styles'
import Card from '@app/components/gerais/card/Card'
import Footer from '@app/components/gerais/footer/Footer'
import { Text, Center } from "native-base";
import InputCustom from '@app/components/inputs/InputCustom';


interface Props {
  navigation: any
}

interface User {
  email: string,
  password: string,
  newPassword: string,
}

export const ForgotPassword: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <Image style={styles.fundo} source={require('../../assets/image/fundo.png')} />
        <View style={styles.greenBorder}></View>
        <View style={{ flex: 1, height: 500, justifyContent: 'center' }}>
          <Center>
            <Card>
              <Center>
                <Image style={styles.logo} source={require('../../assets/image/logo.png')} />
                <Text style={[styles.title, { textAlign: 'justify' }]}>Informe seu e-mail para recuperar sua senha</Text>
              </Center>

              <View style={styles.formContainer}>
                <View style={styles.containerInputs}>
                  <InputCustom
                    returnKeyType="next"
                    placeholder={textConst.emailPlaceholder}
                    label="E-mail"
                    keyboardType="email-address"
                  />
                </View>

                <View style={styles.containerButton}>
                  <ButtonMain
                    size="lg"
                    customValue="Recuperar Senha"
                    onFunction={() => { }}
                  />
                </View>
              </View>
            </Card>
          </Center>
        </View>

      </ScrollView>
    </>
  )
}


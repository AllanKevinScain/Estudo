import React from 'react';
import { View, Text, Image, Button } from 'react-native';

export default () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Image
          style={{
            width: 200,
            height: 100,
            marginTop: 20
          }}
          source={{
            uri: "https://lh3.googleusercontent.com/proxy/S0fwjCOpyygZ_pgxVOUXiH7EhVWZ5v6F62E8E1n0We2q9lC9fYUGIFNgh_iqw6Ng-iCEHZ3RmzBcvyan8-mzbb-5KnEInhqtH1j6dJp-KcEgfERNDlzP0JFVc8T61embPBz50Tyqe9EVBEPTJCY5OP1beFGikDscWxSUQyu8LMIUETUJ3PSZZwA"
          }}
        />
        <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 20 }}>Welcome to Ticket</Text>
      </View>
      <View>
        <Image
          style={{
            width: 360,
            height: 120,
            marginTop: 40
          }}
          source={{
            uri: "https://lh3.googleusercontent.com/proxy/S0fwjCOpyygZ_pgxVOUXiH7EhVWZ5v6F62E8E1n0We2q9lC9fYUGIFNgh_iqw6Ng-iCEHZ3RmzBcvyan8-mzbb-5KnEInhqtH1j6dJp-KcEgfERNDlzP0JFVc8T61embPBz50Tyqe9EVBEPTJCY5OP1beFGikDscWxSUQyu8LMIUETUJ3PSZZwA"
          }}
        />
      </View>
      <View style={{ marginBottom: 10, marginTop: 20, width: 310 }}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'sans '
          }}
        >
          Você está preparado para participar dos melhores
          eventos? Você está interessado em esportes, shows,
          seminários.
          Acesse nosso app paa adquirir um evento de sua
          escolha.
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: "space-between",
          width: 300
        }}
      >
        <View style={{ width: 90 }}>
          <Button title="Eventos" color="#121212" />
        </View>
        <View style={{ width: 90 }}>
          <Button title="Contato" color="#121212" />
        </View>
        <View style={{ width: 90 }}>
          <Button title="News" color="#121212" />
        </View>
      </View>
    </View>
  );
}
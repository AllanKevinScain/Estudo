import React from 'react';
import { View, Button } from 'react-native';

export default ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Clique para ir pro Ticket"
        onPress={() => navigation.navigate("Ticket")}
      />
    </View>
  );
}
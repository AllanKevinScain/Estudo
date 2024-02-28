import React from 'react';

//React Native Components
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default ({
  customFontSize,
  customColor,
  customFontWeight,
  textContent
}) => (
  <View style={styles.container}>
    <Text
      style={{
        fontSize: customFontSize,
        color: customColor,
        fontWeight: customFontWeight,
      }}
    >
      {textContent}
    </Text>
  </View>
)


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
});

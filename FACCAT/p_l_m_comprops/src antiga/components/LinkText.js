import React from 'react';

//React Native Components
import {
  Text,
} from 'react-native';

export default ({
  customFontSize,
  customFontWeight,
  customColor,
  textContent
}) => (
  <Text style={{
    fontSize: customFontSize,
    fontWeight: customFontWeight,
    color: customColor,
  }}
  >
    {textContent}
  </Text>
)



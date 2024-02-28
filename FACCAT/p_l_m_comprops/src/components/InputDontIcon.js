import React from 'react';

//UI Kitten Components
import {
  Input,
  Icon
} from '@ui-kitten/components';

export default ({
  iconType,
  customIconColor = '#5A5773',
  customAutoCompleteType,
  customTextContentType,
  customSecureTextEntry,
  customKeyboard,
  placeholder,
  customSize = 'medium',
  customWidth = '100%',
  onFunctionChange,
  onFunctionFocus,
  val,
  customStatusInput = 'basic',
  customCaption,
}) => {
  let icone = iconType

  const Icones = (props) => (
    <Icon {...props} name={icone} fill={customIconColor} />
  );
  return (
    <Input
      caption={customCaption}
      status={customStatusInput}
      value={val}
      onChangeText={onFunctionChange}
      onFocus={onFunctionFocus}
      accessoryLeft={Icones}
      autoCompleteType={customAutoCompleteType}
      textContentType={customTextContentType}
      secureTextEntry={customSecureTextEntry}
      keyboardType={customKeyboard}
      placeholder={placeholder}
      placeholderTextColor='rgba(90, 87, 115, 0.79)'
      size={customSize}
      style={{
        width: customWidth,
        backgroundColor: "#fff",
      }}
    />
  )
}
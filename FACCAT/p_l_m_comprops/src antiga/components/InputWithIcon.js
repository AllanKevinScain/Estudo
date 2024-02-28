import React from 'react';

//UI Kitten Components
import {
  Input,
  Icon
} from '@ui-kitten/components';

export default ({
  iconType,
  customAutoCompleteType,
  customTextContentType,
  customSecureTextEntry,
  customKeyboard,
  placeholder,
  customSize,
  customWidth,
  onFunctionChange,
  onFunctionFocus,
  val,
  customStatusInput = 'basic',
  customBorderColor,
  customCaption
}) => {

  let icone = iconType

  const Icones = (props) => (
    <Icon {...props} name={icone} />
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
      placeholderTextColor='#000'
      size={customSize}
      style={{
        width: customWidth,
        backgroundColor: "#fff",
        borderColor: customBorderColor
      }}
    />
  )
}

import React from 'react';

//UI Kitten Components
import {
  Button,
  Icon
} from '@ui-kitten/components';

export default ({
  iconType,
  customSize = 'medium',
  customBorderColor,
  customBackgroundColor,
  customWidth = '100%',
  textContent,
  onFunction
}) => {

  let icone = iconType

  const Icones = (props) => (
    <Icon {...props} name={icone} />
  );

  return (
    <Button
      onPress={onFunction}
      accessoryLeft={Icones}
      appearance="filled"
      size={customSize}
      style={{
        marginVertical: 5,
        borderColor: customBorderColor,
        backgroundColor: customBackgroundColor,
        width: customWidth,
      }}
    >
      {textContent}
    </Button>
  )
};
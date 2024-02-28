import React from 'react';

//UI Kitten Components
import {
  Button,
  Icon
} from '@ui-kitten/components';

export default ({
  iconType,
  customSize,
  customBorderColor,
  customBackgroundColor,
  customWidth,
  textContent
}) => {

  let icone = iconType

  const Icones = (props) => (
    <Icon {...props} name={icone} />
  );

  return (
    <Button
      accessoryLeft={Icones}
      appearance="filled"
      size={customSize}
      style={{
        borderColor: customBorderColor,
        backgroundColor: customBackgroundColor,
        width: customWidth,
      }}
    >
      {textContent}
    </Button>
  )
}